import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer';
import Head from 'next/head'

import ImageDrop from '../components/ImageDrop'

function admin() {
    return (
        <div>
            <Head>
                <title>ADMIN DASHBOARD</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="ADMIN DASHBOARD FOR IMAGE RECOGNICION SOFTWARE" />
            </Head>
           {/* <NavBar />
           <Footer />  */}
           <div className="mt-0">
                <ImageDrop />
           </div>
        </div>
    )
}

export default admin
