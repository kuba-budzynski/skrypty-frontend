import React from 'react'
import Head from 'next/head'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

function Regulamin() {
    return (
        <>
            <Head>
                <title>Regulamin</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavBar />
            <Footer/>
        </>
    )
}

export default Regulamin
