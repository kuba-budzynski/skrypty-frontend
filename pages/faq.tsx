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

function FAQ() {
    return (
        <>
            <Head>
                <title>FAQ</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavBar />
            <div className="w-screen h-screen max-w-full bg-gray-100">
                <div className="w-1/2 mx-auto mt-40">
                    <Accordion defaultIndex={[0]} allowToggle>
                        <AccordionItem>
                            <AccordionHeader>
                                <Box flex="1" textAlign="left">
                                    Section 1 title
                             </Box>
                                <AccordionIcon />
                            </AccordionHeader>
                            <AccordionPanel pb={4}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat.
                         </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <AccordionHeader>
                                <Box flex="1" textAlign="left">
                                    Section 2 title
                            </Box>
                                <AccordionIcon />
                            </AccordionHeader>
                            <AccordionPanel pb={4}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                commodo consequat.
                        </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </>

    )
}

export default FAQ
