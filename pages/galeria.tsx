import React, { useState, useCallback} from 'react'
import NavBar from '../components/NavBar'
import Head from 'next/head'
import Footer from '../components/Footer'
import Gallery from 'react-photo-gallery'
import Carousel, { Modal, ModalGateway } from "react-images";

const Prismic = require('prismic-javascript');

const Galeria = ({data}) => {
    
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

    const images = data.map(d => {
        return {
            src: d.url,
            width: d.dimensions.width,
            height: d.dimensions.height,
            srcSet: Object.keys(d.sizes).map((key, index) => `${d.sizes[key].url} ${d.sizes[key].dimensions.width}w`),
            alt: d.desc,
            key: d.id,
            title: d.alt
        }
    })

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
                                        srcSet: x.srcSet,
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

    const { results } = await Prismic.getApi(process.env.PRISMIC_CLIENT_ENDPOINT, { accessToken: process.env.PRISMIC_CLIENT_TOKEN }).then(function (api) {
        return api.query(Prismic.Predicates.at('document.type', 'image'), { pageSize: 100}); 
    });

    return {
        props: {
            data: results.map(r => {
                return{
                    id: r.id,
                    desc: r.data.description.length > 0 ? r.data.description[0].text : '',
                    alt: r.data.zdjecie.alt,
                    dimensions: r.data.zdjecie.dimensions,
                    url: r.data.zdjecie.url,
                    sizes: {
                        mobile: {
                            dimensions: r.data.zdjecie.mobile.dimensions,
                            url: r.data.zdjecie.mobile.url
                        },
                        screenSM: {
                            dimensions: r.data.zdjecie['screen-sm'].dimensions,
                            url: r.data.zdjecie['screen-sm'].url
                        },
                        screenMD: {
                            dimensions: r.data.zdjecie['screen-md'].dimensions,
                            url: r.data.zdjecie['screen-md'].url
                        },
                        screenXL: {
                            dimensions: r.data.zdjecie['screen-xl'].dimensions,
                            url: r.data.zdjecie['screen-xl'].url
                        },
                        thumbnail: {
                            dimensions: r.data.zdjecie.thumbnail.dimensions,
                            url: r.data.zdjecie.thumbnail.url
                        }               
                    }
                }                
            })
        },
        revalidate: 900
    }
}

export default Galeria
