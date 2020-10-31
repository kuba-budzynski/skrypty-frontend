import React from 'react'
import Head from 'next/head'
import NavBar from '../components/NavBar'
import {
    Accordion,
    AccordionItem,
    AccordionHeader,
    AccordionPanel,
    AccordionIcon,
    Box
} from "@chakra-ui/core";
import Footer from '../components/Footer';

function FAQ() {
    return (
        <>
            <Head>
                <title>FAQ</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavBar />
            <div className="w-screen min-h-screen max-w-full bg-gray-100">
                <div className="w-1/2 mx-auto">
                    
                </div>
            </div>
            <Footer />
        </>

    )
}

export default FAQ
