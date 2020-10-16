import React from 'react'
import NavBar from '../components/NavBar'
import Head from 'next/head'
import SVG from '../utils/SVG'
import error from '../public/404.svg'

function Custom404() {
    return (
       <>
        <Head>
           <title>404 ERROR</title>
        </Head>
        <NavBar />
        <SVG svg={error} size="screenSize" />  
       </>
    )
}

export default Custom404
