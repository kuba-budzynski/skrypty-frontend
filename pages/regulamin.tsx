import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer';
import Head from 'next/head'

import Terms from './../components/Terms';
import terms from '../public/terms.svg';
import SVG from '../utils/SVG';

function regulamin() {
    return (
        <div>
            <Head>
                <title>Regulamin</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Profesjonalne usługi elektryczne, instalacje fotowoltaiczne oraz pompy ciepła. Terminowość i gwarancja jakości." />
            </Head>
            <NavBar/>
            <div className="w-screen pt-12 md:pt-36 pb-8 bg-gray-50 max-w-full">
                <div className="mx-auto w-10/12 md:w-1/2 lg:w-1/3">
                   <SVG svg={terms} size="divSize"/>
                </div>
            </div>
            <div className="max-w-5xl text-center md:text-left mx-auto mt-8 px-4">
                <Terms></Terms>
            </div>
            <Footer/>  
        </div>
    )
}

export default regulamin
