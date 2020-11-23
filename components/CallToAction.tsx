import React from 'react'
import Link from 'next/link';

function CallToAction() {
    return (
        <div className="bg-gray-800 mt-8">
            <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
                <h2 className="text-2xl leading-9 font-extrabold tracking-tight text-gray-700 sm:text-4xl sm:leading-10">
                    <span className="text-gray-200">
                        Potrzebujesz konsulatacji z ekspertem?
                    </span>
                    <br />
                    <span className="text-indigo-500">
                        Skontaktuj się z nami.
                    </span>
                </h2>
                <div className="mt-8 lg:mt-0">
                    <div className=" flex lg:flex-shrink-0">
                        <div className="inline-flex rounded-md shadow">
                            <Link href="/kontakt">
                                <a className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
                                    Kontakt z nami
                            </a>
                            </Link>
                        </div>
                        <div className="ml-3 inline-flex rounded-md shadow">
                            <Link href="/oferta">
                                <a className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-600 bg-white hover:text-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
                                    Oferta
                            </a>
                            </Link>
                        </div>

                    </div>
                    <div className="mt-1 text-gray-500 font-bold tracking-wider lg:text-center hover:text-gray-200">
                        <Link href="/faq">
                            <a className="text-sm ">
                                Często zadawane Nam pytania
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CallToAction
