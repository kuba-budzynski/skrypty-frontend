import React from 'react'
import NavBar from '../components/NavBar'
import Head from 'next/head'
import SVG from '../utils/SVG'
import error from '../public/500.svg'

function Error() {
    return (
        <>
            <Head>
                <title>500 ERROR</title>
            </Head>
            <NavBar />
            <SVG svg={error} size="screenSize"/>
        </>
    )
}

export default Error;
