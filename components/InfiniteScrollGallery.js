import React, {useState, useEffect} from 'react'
import ImageInfinite from '../components/ImageInfinite';
import Carousel, { Modal, ModalGateway } from "react-images";
import Image from 'next/image'
import missingPictures from '../public/missingPictures.png'
import styles from '../styles/ImageScroll.module.scss';

function InfiniteScrollGallery({urls, method}) {
    
    const [images,setImages] = useState([]);
    const [last, setLast] = useState(0);
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    useEffect(() => {
        setImages(urls.map(i => ({src: i.url, id: i.id})))
        console.log(images)
    }, [])

    const fetchNextImages = () => {      
        let newImages = urls.slice(last, last + Math.min(6, urls.length - images.length));
        setLast(last + newImages.length);
        setImages([...images, ...newImages]);
    }

    const openLightbox = (index) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    };

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };

    return (
        <div className={`m-0 p-0 box-border max-w-full ${styles.scrollBar}`} style={{height: '60vh', overflowY: 'auto'}} id="scrollable">
            {images.length == 0 ? 
                <div className="w-full mx-auto z-0 mt-24">
                    {/* <Image src={missingPictures} width={500} height={500} layout="responsive" className="z-0"/> */}
                    <div className="w-full flex justify-center"><span className=" text-gray-500 text-4xl text-center font-bold">No images uploaded...</span></div>
                </div> 
            : ""}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 grid-flow-row gap-x-4" id="imageWrapper">
                    {images.map((image, key) => <ImageInfinite src={image.src} width={200} key={image.id} id={image.id} method={method} onClick={() => openLightbox(key)}/>)}
            </div>
            <ModalGateway>
                {viewerIsOpen ? (
                    <Modal onClose={closeLightbox}>
                        <Carousel
                            currentIndex={currentImage}
                            views={images}
                        />
                    </Modal>
                ) : null}
            </ModalGateway>
        </div>
    )
}

export default InfiniteScrollGallery
