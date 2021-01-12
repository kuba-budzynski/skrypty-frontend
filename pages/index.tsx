import React from 'react';
import Head from 'next/head'
import Link from 'next/link'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer';

import back3 from '../public/assets/images/back3.svg'
import pattern from '../public/assets/metis-assets/elements/pattern.png'
import logo1 from '../public/assets/images/tf_logo_social.png'
import logo2 from '../public/assets/images/psf-logo@2x.png'
import logo3 from '../public/assets/images/django-logo-positive.png'
import logo4 from '../public/assets/images/mongo.png'
import logo5 from '../public/assets/images/download.png'

export default function Home(): JSX.Element{

  return (
    <>
      <Head>
        <title>Object Detection in Python</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Profesjonalne usługi elektryczne, instalacje fotowoltaiczne oraz pompy ciepła. Terminowość i gwarancja jakości." />
      </Head>
      <div className="antialiased bg-body text-body font-body">
        <NavBar />

        <div className="pt-12 text-center mt-28">
          <div className="max-w-lg mx-auto mb-8">
            <h2 className="text-3xl md:text-4xl mb-4 font-bold font-heading">
              <span>Rozpoznawanie </span>
              <span  className="text-blue-600">obiektów</span>
              <span> w przesyanych obrazach</span>
            </h2>
            <p className="text-blueGray-400 leading-relaxed">Przy wykorzystaniu bibliotek Pythona</p>
          </div>
          <div>
            <Link href="/login">
              <a className="block sm:inline-block py-4 px-8 mb-4 sm:mb-0 sm:mr-3 text-xs text-white text-center font-semibold leading-none bg-blue-600 hover:bg-blue-700 rounded" >
                Zaloguj się
              </a>
            </Link>
            <Link href="/regulamin">
              <a className="block sm:inline-block py-4 px-8 text-xs text-gray-500 hover:text-gray-600 text-center font-semibold leading-none bg-gray-200 rounded" >
                Regulamin
              </a>
            </Link>
          </div>
        </div>

        <div className="relative max-w-6xl mt-16 md:mt-8 mb-8 mx-auto">
            <img src={pattern} alt="" />
            <div className="absolute" style={{top: "9%", left: "14%", width: "72%", height: "66%"}}>
                <img className="rounded w-full" src={back3} alt="" />
            </div>
        </div>
        <div className="container px-4 mx-auto border-t-2 border-b-2 border-gray-200 max-w-7xl my-24">
            <div className="flex flex-wrap items-center justify-center max-w-4xl mx-auto py-0 md:py-12">
              <div className="w-1/2 md:w-1/3 lg:w-1/5 px-3 mb-8 md:mb-0">
                <img className="mx-auto" src={logo1} alt="" />
              </div>
            <div className="w-1/2 md:w-1/3 lg:w-1/5 px-3 mb-8 md:mb-0">
                <img className="mx-auto" src={logo2} alt="" />
              </div>
            <div className="w-1/2 md:w-1/3 lg:w-1/5 px-3 mb-8 md:mb-0">
                <img className="mx-auto" src={logo3} alt="" />
              </div>
            <div className="w-1/2 md:w-1/3 lg:w-1/5 px-3 mb-8 md:mb-0">
                <img className="mx-auto" src={logo4} alt="" />
              </div>
            <div className="hidden md:block w-1/2 md:w-1/3 lg:w-1/5 px-3 mb-8 md:mb-0">
                <img className="mx-auto" src={logo5} alt="" />
              </div>
            </div>
          </div>

        <Footer />
      </div>
    </>
  )
}

