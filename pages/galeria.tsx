import React, { useState, useCallback} from 'react'
import NavBar from '../components/NavBar'
import Head from 'next/head'
import Footer from '../components/Footer'
import Gallery from 'react-photo-gallery'
import Carousel, { Modal, ModalGateway } from "react-images";

import handler from '../pages/api/getImages';

const Galeria = ({images}) => {
    
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);
    const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };

    console.log("Images: ", images)

    return (
        <>
            <Head>
                <title>Galeria</title>
            </Head>
            <div className="min-h-screen w-screen max-w-full">
                <NavBar />
                <div className="w-full bg-gray-800 h-56 mt-40">
                    
                </div>
                <div className="w-11/12 md:w-4/5 px-2 md:p-4 mx-auto mt-10 mb-32">
                    <Gallery photos={images} onClick={openLightbox}></Gallery>
                    <ModalGateway>
                        {viewerIsOpen ? (
                            <Modal onClose={closeLightbox}>
                                <Carousel
                                    currentIndex={currentImage}
                                    views={images.map(x => ({
                                        ...x,
                                        srcset: x.srcSet,
                                        caption: x.title
                                    }))}
                                />
                            </Modal>
                        ) : null}
                    </ModalGateway>
                </div>
            </div>
            <div>
                
            </div>
            <Footer />
        </>
    )
}

export async function getStaticProps(context) {

    var cloudinary = require('cloudinary').v2
    const images = []
    cloudinary.config({
        cloud_name: 'wrob-el',
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET
    });

    const {resources} = await cloudinary.api.resources({
        type: 'upload',
        prefix: 'gallery/',
        max_results: 100
        },
        function (error, result) {
            if(!error){
                return (
                    result.resources.map((img) => {
                    return {
                        src: img.secure_url,
                        width: img.width,
                        height: img.height
                    }
                }))              
            }
        });
    return {
        props: {
            images: resources.map(img => ({
                src: img.url,
                width: img.width,
                height: img.height
            }))
        }
    }
}

export default Galeria
