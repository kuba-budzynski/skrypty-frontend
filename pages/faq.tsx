import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer';
import Head from 'next/head'

import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box
} from "@chakra-ui/react"

import man from '../public/assets/metis-assets/illustrations/hardworking-man.png'

function faq() {
    return (
        <div>
            <Head>
                <title>FAQ</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Profesjonalne usługi elektryczne, instalacje fotowoltaiczne oraz pompy ciepła. Terminowość i gwarancja jakości." />
            </Head>
            <div>
                <NavBar/>
                <div className="w-10/12 lg:w-3/4 mx-auto pt-32 min-h-screen flex flex-col justify-center">
                    <section>
                        <div className="flex w-full lg:h-full" style={{ minHeight: '60vh' }}>
                            <div className="hidden lg:block lg:relative lg:w-1/3 bg-blue-600">
                                <div className="absolute right-0 md:-mr-32 mt-24 flex items-center" >
                                    <img className="lg:max-w-lg" src={man} alt="" /></div>
                                </div>
                                <div className="flex-1 lg:pl-32 py-20 lg:py-16">
                                    <div className="max-w-2xl px-4 mx-auto lg:ml-0">
                                        <h3 className="mb-8 text-4xl font-bold font-heading">
                                            Frequently Asked Questions
                                        </h3>                                  
                                    <Accordion defaultIndex={[0]} allowMultiple={false} allowToggle>
                                        <AccordionItem>
                                            <AccordionButton bg="#2563EB" textColor="white" fontSize="1.2rem" py="0.5rem" px="1rem" fontWeight="bold" borderRadius="xl" border="1px" borderColor="white">
                                                <Box flex="1" textAlign="left">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit?
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                            <AccordionPanel pb={8} px="1rem" pt="1rem" textColor="#6B7280">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                                commodo consequat.
                                            </AccordionPanel>
                                        </AccordionItem>

                                        <AccordionItem>
                                            <AccordionButton bg="#2563EB" textColor="white" fontSize="1.2rem" py="0.5rem" px="1rem" fontWeight="bold" borderRadius="xl" border="1px" borderColor="white">
                                                <Box flex="1" textAlign="left">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit? 2
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                            <AccordionPanel pb={8} px="1rem" pt="1rem" textColor="#6B7280">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                                commodo consequat.
                                            </AccordionPanel>
                                        </AccordionItem>

                                        <AccordionItem>
                                            <AccordionButton bg="#2563EB" textColor="white" fontSize="1.2rem" py="0.5rem" px="1rem" fontWeight="bold" borderRadius="xl" border="1px" borderColor="white">
                                                <Box flex="1" textAlign="left">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit? 3
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                            <AccordionPanel pb={8} px="1rem" pt="1rem" textColor="#6B7280">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                                commodo consequat.
                                            </AccordionPanel>
                                        </AccordionItem>

                                        <AccordionItem>
                                            <AccordionButton bg="#2563EB" textColor="white" fontSize="1.2rem" py="0.5rem" px="1rem" fontWeight="bold" borderRadius="xl" border="1px" borderColor="white">
                                                <Box flex="1" textAlign="left">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit? 4
                                                </Box>
                                                <AccordionIcon />
                                            </AccordionButton>
                                            <AccordionPanel pb={8} px="1rem" pt="1rem" textColor="#6B7280">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                                commodo consequat.
                                            </AccordionPanel>
                                        </AccordionItem>

                                    </Accordion>
                                    </div>
                                </div>
                            </div>
                        </section>
                    <section className="py-28">
                            <div className="container px-4 mx-auto">
                                <div className="flex flex-wrap -mx-4">
                                    <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                                        <h4 className="mb-2 md:mb-4 text-xl font-semibold">
                                            Nunc at arcu non ipsum auctor lacinia quis quismi?</h4>
                                        <p className="text-sm md:text-base leading-loose text-blueGray-500">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis ultricies est. Duis nec hendrerit magna.
                                        </p>
                                    </div>
                                    <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                                        <h4 className="mb-2 md:mb-4 text-xl font-semibold">
                                            Nunc at arcu non ipsum auctor lacinia quis quismi?</h4>
                                        <p className="text-sm md:text-base leading-loose text-blueGray-500">
                                            Nullam turpis nisi, lobortis sit
                                            amet venenatis ac, egestas id quam. Morbi condimentum dolor sit amet ornare vestibulum.
                                            Maecenas nibh purus, pharetra ac felis sed, elementum molestie urna. Nunc at arcu non ipsum
                                            auctor lacinia quis quis mi
                                        </p>
                                    </div>
                                    <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                                        <h4 className="mb-2 md:mb-4 text-xl font-semibold">
                                            Nunc at arcu non ipsum auctor lacinia quis quismi?</h4>
                                        <p className="text-sm md:text-base leading-loose text-blueGray-500">
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit. Vivamus quis ultricies est. Duis nec hendrerit magna. Ut vel
                                            orci gravida, hendrerit enim non, gravida turpis.
                                        </p>
                                    </div>
                                    <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                                        <h4 className="mb-2 md:mb-4 text-xl font-semibold">
                                            Nunc at arcu non ipsum auctor lacinia quis quismi?</h4>
                                        <p className="text-sm md:text-base leading-loose text-blueGray-500">
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit. Vivamus quis ultricies est. Duis nec hendrerit magna. Ut vel
                                            orci gravida, hendrerit enim non, gravida turpis.
                                        </p>
                                    </div>
                                    <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                                        <h4 className="mb-2 md:mb-4 text-xl font-semibold">
                                            Nunc at arcu non ipsum auctor lacinia quis quismi?
                                        </h4>
                                        <p className="text-sm md:text-base leading-loose text-blueGray-500">
                                            Nullam turpis nisi, lobortis sit
                                            amet venenatis ac, egestas id quam. Morbi condimentum dolor sit amet ornare vestibulum.
                                        </p>
                                    </div>
                                    <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                                        <h4 className="mb-2 md:mb-4 text-xl font-semibold">
                                            Nunc at arcu non ipsum auctor lacinia quis quismi?</h4>
                                        <p className="text-sm md:text-base leading-loose text-blueGray-500">
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit. Vivamus quis ultricies est. Duis nec hendrerit magna. Ut vel
                                            orci gravida, hendrerit enim non, gravida turpis.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                <Footer/>
            </div>
        </div>
    )
}

export default faq
