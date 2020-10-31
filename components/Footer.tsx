import React from 'react'
import Link from 'next/link'

function Footer() {
    return (
        <div className="bg-gray-900">
            <div className="max-w-screen-xl mx-auto pt-12 pb-4 px-4 sm:px-6 lg:pt-16 lg:pb-8 lg:px-8">
                <div className="flex flex-col items-center md:flex md:flex-row justify-around">
                    <div className="flex justify-between">
                        <div>
                            <h4 className="text-2xl leading-5 font-extrabold tracking-widest text-gray-600 uppercase mb-12 text-center">Menu</h4>
                            <div className="flex flex-col space-y-12 mx-auto content-center md:grid md:grid-cols-3 md:gap-8 md:space-y-0">
                                
                                <div className="text-center md:text-left">
                                    <h4 className="text-md leading-5 font-semibold tracking-wider text-gray-500 uppercase">Linki</h4>
                                    <ul className="mt-4">
                                        <li className="mt-4"><Link href="/"><a className="text-base leading-6 text-gray-300 hover:text-gray-500">Strona domowa</a></Link></li>
                                        <li className="mt-4"><Link href="/kontakt"><a className="text-base leading-6 text-gray-300 hover:text-gray-500">Kontakt</a></Link></li>
                                        <li className="mt-4"><Link href="/regulamin"><a className="text-base leading-6 text-gray-300 hover:text-gray-500">Regulamin</a></Link></li>
                                        <li className="mt-4"><Link href="/referencje"><a className="text-base leading-6 text-gray-300 hover:text-gray-500">Referencje</a></Link></li>
                                        <li className="mt-4"><Link href="/galeria"><a className="text-base leading-6 text-gray-300 hover:text-gray-500">Galeria</a></Link></li>
                                        <li className="mt-4"><Link href="faq"><a className="text-base leading-6 text-gray-300 hover:text-gray-500">FAQ</a></Link></li>
                                    </ul>
                                </div>
                                <div className="text-center md:text-left">
                                    <h4 className="text-md leading-5 font-semibold tracking-wider text-gray-500 uppercase">Inne</h4>
                                    <ul className="mt-4">
                                        
                                        <li className="mt-4"><Link href="/fotowoltaika"><a className="text-base leading-6 text-gray-300 hover:text-gray-500">Fotowoltaika</a></Link></li>
                                        <li className="mt-4"><Link href="/pompy-ciepla"><a className="text-base leading-6 text-gray-300 hover:text-gray-500">Pompy ciepła</a></Link></li>
                                        <li className="mt-4"><Link href="/hydraulika"><a className="text-base leading-6 text-gray-300 hover:text-gray-500">Hydraulika</a></Link></li>
                                        <li className="mt-4"><Link href="/holowanie"><a className="text-base leading-6 text-gray-300 hover:text-gray-500">Holowanie pojazdów</a></Link></li>
                                        <li className="mt-4"><Link href="#"><a className="text-base leading-6 text-gray-300 hover:text-gray-500">Developer</a></Link></li>
                                        <li className="mt-4"><Link href="#"><a className="text-base leading-6 text-gray-300 hover:text-gray-500">Wystaw opinię</a></Link></li>
                                    </ul>
                                </div>
                                <div className="text-center md:text-left">
                                    <h4 className="text-md leading-5 font-semibold tracking-wider text-gray-500 uppercase">Elektryka</h4>
                                    <ul className="mt-4">
                                        <li className="mt-4"><Link href="elektryka/instalacje-domowe"><a className="text-base leading-6 text-gray-300 hover:text-gray-500">Instalacje domowe</a></Link></li>
                                        <li className="mt-4"><Link href="elektryka/instalacje-publiczne"><a className="text-base leading-6 text-gray-300 hover:text-gray-500">Instalacje publiczne</a></Link></li>
                                        <li className="mt-4"><Link href="elektryka/instalacje-publiczne"><a className="text-base leading-6 text-gray-300 hover:text-gray-500">Instalacje przemysłowe</a></Link></li>
                                        <li className="mt-4"><Link href="elektryka/instalacje-odgromowe"><a className="text-base leading-6 text-gray-300 hover:text-gray-500">Instlacje odgromowe</a></Link></li>
                                        <li className="mt-4"><Link href="elektryka/transformatory"><a className="text-base leading-6 text-gray-300 hover:text-gray-500">Stacje transformatorowe</a></Link></li>
                                        <li className="mt-4"><Link href="elektryka/pomiary"><a className="text-base leading-6 text-gray-300 hover:text-gray-500">Pomiary instalacji</a></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-3/4 m-0 md:w-1/4 mt-8 xl:mt-0 text-center">
                        <img className="mx-auto h-12 mb-4" src="https://tailwindui.com/img/logos/workflow-mark-on-white.svg" alt="Logo"></img>
                        <h4 className="text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase ">Zapisz się&nbsp;na Newsletter</h4>
                        <p className="mt-4 text-gray-300 text-sm leading-6">Otrzymasz od Nas wiadomości dotyczące nowych usług lub ofert specjalnych</p>
                        <form className="mt-4" onSubmit={(e) => {
                            e.preventDefault();
                        }}>
                            <input type="hidden" name="remember" value="true" />
                                <div className="rounded-md shadow-sm">
                                    <div>
                                        <input aria-label="Name" name="name" type="text" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5" placeholder="Twoje imię" />
                                    </div>
                                    <div className="mt-2">
                                        <input aria-label="Email" name="email" type="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5" placeholder="Adres email" />
                                    </div>
                                </div>

                                <div className="mt-6">
                                    <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out">
                                        <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                            <svg className="h-5 w-5 text-white group-hover:text-indigo-400 transition ease-in-out duration-150" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                            </svg>
                                        </span>
                                        Zapisz się
                                    </button>
                                </div>
                        </form>
                    </div>
                </div>
                <div className="mt-12 pt-8 border-t border-gray-600 md:flex md:items-center md:justify-around md:pt-4">
                    <div className="flex md:order-2 justify-center">
                        <a className="text-gray-600 hover:text-gray-400">
                            <span className="sr-only">Facebook</span>
                            <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6">
                                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd">
                                </path>
                            </svg>
                        </a>
                        <a className="ml-6 text-gray-600 hover:text-gray-400">
                            <span className="sr-only">Twitter</span>
                            <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6">
                                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84">
                                </path>
                            </svg>
                        </a>
                    </div>
                    <div>
                        <p className="mt-2 text-center text-xs md:text-lg leading-6 text-gray-600 md:order-1 md:text-left">
                            Wrób-el - Janusz Wróbel @ {new Date().getFullYear()}. Wszelkie prawa zastrzeżone.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
