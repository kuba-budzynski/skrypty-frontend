import React, {useState, useEffect} from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer';
import Head from 'next/head'

import styles from '../styles/Pagination.module.scss'
import InfiniteScrollGallery from '../components/InfiniteScrollGallery';
import ImageDrop from '../components/ImageDrop'
import def from '../public/default.png'

const onChange = () => {

}

function upload({images}) {
    
    const [page, setPage] = useState(0);
    const [currentImages, setCurrentImages] = useState([])
    const PER_PAGE = 6;
    
    function handlePageClick({ selected: selectedPage }) {
        setPage(selectedPage);
    }

    return (
        <div>
            <Head>
                <title>Upload new image</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Profesjonalne usługi elektryczne, instalacje fotowoltaiczne oraz pompy ciepła. Terminowość i gwarancja jakości." />
            </Head>
            <div className="w-screen max-w-full">
                <NavBar />
                <div className="flex flex-col pt-32 min-h-screen justify-center mx-auto w-screen md:w-10/12 max-w-full">
                    <div className="flex flex-col lg:flex-row w-full mx-auto">
                        <div className="w-full lg:w-2/3 md:mb-0">
                            <div className="container mx-auto px-0 lg:px-10 lg:border-r-2 w-full">
                                <div className="rounded mx-auto w-full px-4 md:px-0">
                                   <ImageDrop/>
                                </div>      
                                <div className="flex flex-wrap md:mb-0 mt-12 lg:mx-20 mx-auto">
                                    <div className="w-full md:w-1/2 mb-4 md:mb-0 mx-auto">
                                        <div className="mb-6 mx-auto">
                                            <div className="mx-auto">
                                                <label>
                                                    <input type="radio" name="radio-name" value="option 1" checked={true} data-np-checked="1" onChange={onChange}/>
                                                    <span className="ml-1">Radio option 1</span>
                                                </label>
                                            </div>
                                            <div className="mx-auto">
                                                <label>
                                                    <input type="radio" name="radio-name" value="option 2" data-np-checked="1" onChange={onChange}/>
                                                    <span className="ml-1">Radio option 2</span>
                                                </label>
                                            </div>
                                            <div className="mx-auto">
                                                <label>
                                                    <input type="radio" name="radio-name" value="option 2" data-np-checked="1" onChange={onChange}/>
                                                    <span className="ml-1">Radio option 3</span>
                                                </label>
                                            </div>
                                            <div className="mx-auto">
                                                <label>
                                                    <input type="radio" name="radio-name" value="option 2" data-np-checked="1" onChange={onChange}/>
                                                    <span className="ml-1">Radio option 4</span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>                              
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/3 mb-4 md:mb-0 mx-4">                            
                            <div className="w-full" >
                                <InfiniteScrollGallery urls={images}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
    </div>
    )
}

export async function getStaticProps() {

    return {
        props: {
            images: [
                "https://images.unsplash.com/photo-1489058535093-8f530d789c3b?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60",
                "https://images.unsplash.com/photo-1606851092560-74976b5e6b89?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                "https://images.unsplash.com/photo-1609601470014-5754ed429f30?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80",
                "https://images.unsplash.com/photo-1609607284958-2712848e256f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80",
                "https://images.unsplash.com/photo-1525373417962-166eb127dd6a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
                "https://images.unsplash.com/photo-1548246749-f173e6bd0ed6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80",
                "https://images.unsplash.com/photo-1609672919693-74289341ae1f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80",
                "https://images.unsplash.com/photo-1609669356599-7fe493f0beee?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1449&q=80",
                "https://images.unsplash.com/photo-1609621768394-a93cb60b5122?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                "https://images.unsplash.com/photo-1609608934025-c9414a01d245?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80",
                "https://images.unsplash.com/photo-1609612558536-04ceb680fe89?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1456&q=80",
                "https://images.unsplash.com/photo-1609612006487-e6211790ece5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1365&q=80",
                "https://images.unsplash.com/photo-1609614346033-7933467e00f8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                "https://images.unsplash.com/photo-1609608935240-acbd613c4f71?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                "https://images.unsplash.com/photo-1609616512326-890f2c38b2c4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                "https://images.unsplash.com/photo-1609610573769-7a131996ace8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                "https://images.unsplash.com/photo-1609671443271-ea10aa353ee1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                "https://images.unsplash.com/photo-1609599161280-580610c0bb4d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1355&q=80",
                "https://images.unsplash.com/photo-1609608933803-e5bfa422989f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            ]
        }
    }
}

export default upload
