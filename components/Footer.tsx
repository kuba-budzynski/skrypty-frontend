import React from 'react'
import Link from 'next/link'
import logo from '../public/assets/images/logo.svg'

function Foot() {
    return (
        <footer className="py-2 md:py-8 bg-gray-900">
            <div className="container px-0 md:px-4 mx-auto max-w-6xl mt-8 md:mt-0">
                <div className="flex flex-col lg:flex-row flex-wrap items-center justify-center lg:justify-between">
                    <div className="flex flex-col lg:flex-row mb-8 lg:mb-0">
                        <Link href="/">
                            <a className="inline-block mb-8 lg:mb-0 mx-auto lg:ml-0 lg:mr-12 text-3xl font-semibold leading-none">
                                <img src={logo} alt="" width="48" />
                            </a>
                        </Link>
                        <ul className="flex lg:flex-row items-center space-x-12 text-xs">
                            <li>
                                <Link href="/upload">
                                    <a className="text-xs md:text-md lg:text-lg font-bold font-heading text-gray-300 hover:text-gray-400">
                                        Upload
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/regulamin">
                                    <a className="text-xs md:text-md lg:text-lg font-bold font-heading text-gray-300 hover:text-gray-400">
                                        Regulamin
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/faq">
                                    <a className="text-xs md:text-md lg:text-lg font-bold font-heading text-gray-300 hover:text-gray-400" >
                                        FAQ
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/admin">
                                    <a className="text-xs md:text-md lg:text-lg font-bold font-heading text-gray-300 hover:text-gray-400" >
                                        Admin
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="lg:flex lg:flex-wrap lg:items-center">
                        <span className="block mb-6 lg:mb-0 lg:mr-12 text-center lg:text-left text-gray-400 hover:text-gray-300 text-xs">
                            Jakub Budzynski @ 2021. All right reserved.
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Foot
