import React, {useState, useEffect} from 'react'
import useSWR from 'swr'
import fetcher from '../utils/fetcher'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar';
import auth from '../utils/AuthProvider'
import Head from 'next/head'
import spin from '../public/spinner2.svg'
import axios from 'axios';
import axiosRetry from 'axios-retry'
import Loading from "../components/Loading";
import Error from '../components/Error'
import { Wrapper } from '../components/Utils'
import ExcelDownload from '../components/ExcelDownload'
import download from 'downloadjs';

function results({id, method}) {

    axiosRetry(axios, {
        retries: 5,
        shouldResetTimeout: true,
        retryCondition: (error) => true
    })
    const url = process.env.BACKEND + "/reco/";
    const [fetcher, setFetcher] = useState({data: null, error: false, loading: false});
    const [buttonState, setButtonState] = useState(true);

    useEffect(() => {
        const fetch = async () => {
            setFetcher({data: null,error: false, loading: true})
            const results = await axios.post(url, {
                image_id: id,
                method: method
            },{
                headers: {
                    "Authorization": auth.getBearer(),
                },
                timeout: 120000
            }).then(res => res.data).then(r => ({success: true, res: r}))
            .catch(err => ({success: false, res: err}))
            console.log("Results: ", results)
            if(results.success && results.res.success){
                setFetcher({data: results.res, error:false, loading: false})
                setButtonState(false)
            }
            else setFetcher({data: null, error: true, loading: false})
        }
        fetch();
    }, [])

    function urltoFile(url, filename, mimeType?) {
        mimeType = mimeType || (url.match(/^data:([^;]+);/) || '')[1];
        return (fetch(url)
            .then(function (res) { return res.arrayBuffer(); })
            .then(function (buf) { return new File([buf], filename, { type: mimeType }); })
        );
    }

    const handleDownload = async (e) => {
        e.preventDefault();
        if(fetcher.data){
            const re = /(?:\.([^.]+))?$/;
            const ext = re.exec(fetcher.data.image_name)[1]   
            const image = await urltoFile(fetcher.data.url, fetcher.data.image_name)
            download(image, fetcher.data.image_name, `image/${ext}`)
        }
    }

    if (fetcher.error) return <Error error="Can not fetch your data" />
    if (fetcher.loading) return (
        <Wrapper>
            <Loading />
        </Wrapper>
    )
    return (
        <div className="flex flex-col justify-around">
            <Head>
                <title>results</title>
            </Head>
            <NavBar/>
            <div className="flex flex-wrap pb-8 pt-12 md:pt-48 md:pb-24 w-full md:w-3/4 mx-auto min-h-screen">
                <div className="w-full md:w-3/4 px-4 mb-4 md:mb-0 lg:border-r-2">
                    
                    {
                        fetcher.error ? <img className="rounded mx-auto w-10/12 md:w-1/3 my-16" src={spin} alt="" /> :
                         <div>
                            {fetcher.data ? <img className="rounded mx-auto w-10/12 shadow-xl" src={fetcher.data.url} alt="" />: null}
                        </div>
                    }
                    <div className="container mx-auto">
                        <div className="flex flex-wrap mb-8 mt-8 w-1/2 mx-auto">
                            <div className="w-full px-4 mb-4 md:mb-0 flex mx-auto">
                                <button className={`inline-block py-4 px-8 text-xs text-white text-center font-semibold leading-none ${buttonState ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"} rounded mx-auto`}
                                    disabled={buttonState} onClick={handleDownload}>
                                    DOWNLOAD IMAGE
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/4 px-4 mb-4 md:mb-0 min-h-full relative">
                    <div className="">
                        <div className="container mx-auto">    
                            {fetcher.data ? <h1 className="text-gray-600 text-extrabold text-3xl text-center mb-12">Detected objects</h1>: null}                     
                            {
                                fetcher.data && fetcher.data.items ?
                                    Object.entries(fetcher.data.items).map(item => 
                                    <p className="text-lg mb-2 leading-tight font-bold font-heading pl-4" key={item[0] + item[1]}>
                                        <span className="text-gray-500 font-bold">{`${item[0]} -> `}</span><span className="font-bold text-indigo-500">{item[1]}</span>
                                    </p>) : <p className="text-gray-500 text-3xl font-bold text-center mt-8">Loading...</p>
                            }
                        </div>
                    </div>
                    {fetcher.data ? <ExcelDownload detection={fetcher.data.detection} /> : null}
               </div>    
            </div>
            <Footer/>
        </div>
    )
}

export async function getServerSideProps(context) {
    const q = context.query

    if (!q.image_id || !q.method) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            id: q.image_id,
            method: q.method
        },
    }
}

export default results
