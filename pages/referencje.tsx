import React from 'react'
import Head from 'next/head';
import NavBar from '../components/NavBar'
import Footer from '../components/Footer';

const referencje = () => {
    return (
        <>
            <Head>
                <title>Referencje</title>
            </Head>
            <div>
                <NavBar />
            </div>
            <Footer />
        </>
    )
}

export default referencje
