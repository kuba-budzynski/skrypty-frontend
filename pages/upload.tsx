import React, {useState, useEffect} from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer';
import Head from 'next/head'
import InfiniteScrollGallery from '../components/InfiniteScrollGallery';
import ImageDrop from '../components/ImageDrop'
import { withAuth } from './../utils/useAuth';
import Loading from "../components/Loading";
import Error from '../components/Error'
import { Wrapper } from '../components/Utils'
import axios from 'axios';
import auth from '../utils/AuthProvider'
import { useQuery } from 'react-query';

const upload = () => {

    const url = process.env.BACKEND + "/profile/";
    const { status, data, error, isFetching } = useQuery('profile', async () => {
        const {data} = await axios.get(url, {
            headers: {
                "Authorization": auth.getBearer()
            }
        })
        return data.data[0]
    })
    console.log(data)
    const [page, setPage] = useState(0);
    const [currentImages, setCurrentImages] = useState([])
    const [currentOption, setCurrentOption] = useState("1")

    const PER_PAGE = 6;
    
    function handlePageClick({ selected: selectedPage }) {
        setPage(selectedPage);
    }

    const onChange = (e) => {
        setCurrentOption(e.currentTarget.value)
    }

    if (error) return <Error error="Can not fetch your data"/>
    if (isFetching) return (
        <Wrapper>
            <Loading />
        </Wrapper>
    )

    return (
        <div>
            <Head>
                <title>Upload new image</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <div className="w-screen max-w-full">
                <NavBar />
                <div className="flex flex-col pt-32 min-h-screen justify-center mx-auto w-screen md:w-10/12 max-w-full">
                    <div className="flex flex-col lg:flex-row w-full mx-auto">
                        <div className="w-full lg:w-2/3 md:mb-0">
                            <div className="container mx-auto px-0 lg:px-10 lg:border-r-2 w-full">
                                <div className="rounded mx-auto w-full px-4 md:px-0">
                                   <ImageDrop method={currentOption}/>
                                </div>      
                                <div className="flex flex-wrap md:mb-0 mt-12 lg:mx-20 mx-auto">
                                    <div className="w-full md:w-auto mb-4 md:mb-0 mx-auto">
                                        <div className="mb-6 mx-auto">
                                            <form>
                                                <div className="mx-auto">
                                                    <input type="radio" id="option1" name="a" value="1" defaultChecked data-np-checked="1" onChange={(e) => onChange(e)} />
                                                    <label htmlFor="option1">
                                                        <span className="ml-1">TinyYolov3</span>
                                                    </label>
                                                </div>
                                                <div className="mx-auto">
                                                    <input type="radio" name="a" id="option2" value="2" data-np-checked="1" onChange={(e) => onChange(e)} />
                                                    <label htmlFor="option2">
                                                        <span className="ml-1">RetinaNet</span>
                                                    </label>
                                                </div>
                                                <div className="mx-auto">
                                                    <input type="radio" name="a" id="option3" value="3" data-np-checked="1" onChange={(e) => onChange(e)} />
                                                    <label htmlFor="option3">
                                                        <span className="ml-1">YOLOv3</span>
                                                    </label>
                                                </div>
                                            </form>
                                        </div>
                                    </div>                              
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/3 mb-4 md:mb-0 mx-4">                            
                            <div className="w-full" >
                                <InfiniteScrollGallery urls={data.images} method={currentOption}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
    </div>
    )
}

export default withAuth(upload)
