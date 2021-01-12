import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer';
import Head from 'next/head'
import Link from 'next/link'
import loginImage2 from '../public/assets/images/loginImage2.svg'
import userCircle from '../public/assets/metis-assets/icons/user-circle.svg'
import picture from '../public/assets/metis-assets/icons/puzzle.svg'
import views from '../public/assets/metis-assets/icons/thumb-up.svg'
import objects from '../public/assets/metis-assets/icons/terminal.svg'

function signup({d1, d2, d3, d4}) {

    return (
        <div>
            <Head>
                <title>SignUp</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Profesjonalne usługi elektryczne, instalacje fotowoltaiczne oraz pompy ciepła. Terminowość i gwarancja jakości." />
            </Head>
            <div>
                <NavBar />

                <div className="min-h-screen w-3/4 xxxl:w-10/12 mx-auto">
                    <h1 className="text-2xl md:text-4xl xl:text-5xl mb-2 leading-tight font-bold font-heading text-blue-600 text-center mt-32 lg:mt-48 ">
                        RECOGNACE OBJECTS IN PHOTOS
                    </h1>
                    <div className="flex flex-col-reverse lg:flex-row lg:mb-0mx-auto mt-2 lg:mt-0">
                        <div className="w-full md:w-1/2 px-4 mb-4 lg:mb-0 flex flex-col justify-center">
                            <section className="py-0">
                                <div className="container px-4 mx-auto">
                                    <div className="flex flex-col max-w-xl mx-auto text-center my-auto">
                                        <div className="my-4 lg:my-12">
                                            <span className="text-sm text-gray-400">
                                                Sign Up
                                        </span>
                                            <h4 className="mb-6 text-3xl">Create an account</h4>
                                            <div className="flex -mx-3">
                                                <div className="flex w-1/2 px-3">
                                                    <div className="flex w-full mb-4 px-4 bg-gray-50 rounded">
                                                        <input
                                                            className="w-full py-4 text-xs placeholder-gray-400 font-semibold leading-none bg-gray-50 outline-none"
                                                            type="text" placeholder="First name" data-np-checked="1" />
                                                    </div>
                                                </div>
                                                <div className="flex w-1/2 px-3">
                                                    <div className="flex w-full mb-4 px-4 bg-gray-50 rounded">
                                                        <input
                                                            className="w-full py-4 text-xs placeholder-gray-400 font-semibold leading-none bg-gray-50 outline-none"
                                                            type="text" placeholder="Last name" data-np-checked="1" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex mb-4 px-4 bg-gray-50 rounded">
                                                <input
                                                    className="w-full py-4 text-xs placeholder-gray-400 font-semibold leading-none bg-gray-50 outline-none"
                                                    type="email" placeholder="name@email.com" data-np-checked="1" />
                                                <svg className="h-6 w-6 ml-4 my-auto text-gray-300"
                                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207">
                                                    </path>
                                                </svg>
                                            </div>
                                            <div className="flex mb-6 px-4 bg-gray-50 rounded">
                                                <input
                                                    className="w-full py-4 text-xs placeholder-gray-400 font-semibold leading-none bg-gray-50 outline-none"
                                                    type="password" placeholder="Enter your password" data-np-checked="1"
                                                    data-nordpass-autofill="generate" data-nordpass-uid="jlk77cvt12m"
                                                    autoComplete="off" />
                                                <button className="ml-4">
                                                    <svg className="h-6 w-6 my-auto text-gray-300"
                                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                        stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z">
                                                        </path>
                                                    </svg>
                                                </button>
                                            </div>
                                            <button className="block w-full p-4 text-center text-xs text-white font-semibold leading-none bg-blue-600 hover:bg-blue-700 rounded">
                                                SignUp
                                    </button>
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-400 text-center">
                                                <Link href="/regulamin">
                                                    <a className="underline hover:text-gray-500" >
                                                        Terms of Use
                                                    </a>
                                                </Link>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                        <div className="w-full md:w-1/2 px-4 mb-4 md:mb-0">
                            <img className="rounded p-4 lg:p-12" src={loginImage2} alt="" />
                        </div>
                    </div>
                    <section className="py-8 max-w-7xl mx-auto">
                        <div className="container px-4 mx-auto">
                            <div className="flex flex-wrap justify-between">
                                <div className="flex w-1/2 lg:w-auto py-4">
                                    <div className="flex justify-center items-center bg-gray-50 rounded-xl h-12 w-12 sm:h-20 sm:w-20">
                                        <img className="h-6 sm:h-8" src={userCircle} alt="" />
                                    </div>
                                    <div className="sm:py-2 ml-2 sm:ml-6">
                                        <span className="sm:text-2xl font-bold font-heading">{d1}</span>
                                        <p className="text-xs sm:text-base text-gray-400">Użytkowników</p>
                                    </div>
                                </div>
                                <div className="flex w-1/2 lg:w-auto py-4">
                                    <div className="flex justify-center items-center bg-gray-50 rounded-xl h-12 w-12 sm:h-20 sm:w-20">
                                        <img className="h-6 sm:h-8" src={picture} alt="" />
                                    </div>
                                    <div className="sm:py-2 ml-2 sm:ml-6">
                                        <span className="sm:text-2xl font-bold font-heading">{d2}</span>
                                        <p className="text-xs sm:text-base text-gray-400">Obrazów</p>
                                    </div>
                                </div>
                                <div className="flex w-1/2 lg:w-auto py-4">
                                    <div className="flex justify-center items-center bg-gray-50 rounded-xl h-12 w-12 sm:h-20 sm:w-20">
                                        <img className="h-6 sm:h-8" src={views} alt="" />
                                    </div>
                                    <div className="sm:py-2 ml-2 sm:ml-6">
                                        <span className="sm:text-2xl font-bold font-heading">{d3}</span>
                                        <p className="text-xs sm:text-base text-gray-400">Wyświetleń</p>
                                    </div>
                                </div>
                                <div className="flex w-1/2 lg:w-auto py-4">
                                    <div className="flex justify-center items-center bg-gray-50 rounded-xl h-12 w-12 sm:h-20 sm:w-20">
                                        <img className="h-6 sm:h-8" src={objects} alt="" />
                                    </div>
                                    <div className="sm:py-2 ml-2 sm:ml-6">
                                        <span className="sm:text-2xl font-bold font-heading">{d4}</span>
                                        <p className="text-xs sm:text-base text-gray-400">Wykrytych obiektów</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                <Footer />
            </div>
        </div>
    )
}

export async function getStaticProps(context) {
    return {
        props: {
            d1: 12345,
            d2: 456,
            d3: 5354,
            d4: 987666
        },
    }
}

export default signup
