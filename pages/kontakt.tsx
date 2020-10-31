import React from 'react'
import Head from 'next/head';
import NavBar from '../components/NavBar'
import Footer from '../components/Footer';

const kontakt = () => {
    return (
        <>
            <Head>
                <title>Kontakt</title>
            </Head>
            <div>
                <NavBar />
            </div>
            <Footer />
        </>
    )
}

export default kontakt;