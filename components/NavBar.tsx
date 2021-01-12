import React, { useState, useEffect, useRef } from 'react';
import { Transition } from '@headlessui/react'
import styles from '../styles/Index.module.scss'
import Link from 'next/link'
import SVG from '../utils/SVG';
import Image from 'next/image';
import logo from '../public/assets/images/logo.svg'

type States = "solution" | "more" | "mobile" | "pricing" | "docs";

interface Props{
    color?: string
}

const NavBar = (props: Props) => {

    const wrapperRef = useRef(null);
    const [clicked, setClicked] = useState(false);
    const [states, setStates] = useState({
        solution: false,
        more: false,
        mobile: false,
        pricing: false,
        docs: false
    })

    useEffect(() => {
        const doc = document.documentElement;
        const w = window;
        let curScroll;
        let prevScroll = w.scrollY || doc.scrollTop;
        let curDirection = 0;
        let prevDirection = 0;
        const header = document.getElementById('navBar');
        header.classList.add(styles.header)
        let toggle;
        const threshold = window.innerHeight;

        const checkScroll = () => {
            curScroll = w.scrollY || doc.scrollTop;
            if (curScroll > prevScroll) curDirection = 2;
            else curDirection = 1;
            if (curDirection != prevDirection) {
                toggle = toggleHandler()
            }
            prevScroll = curScroll;
            if (toggle) {
                prevDirection = curDirection;
            }
        }

        const toggleHandler = () => {
            toggle = true;
            if (curDirection === 2 && curScroll > threshold) {
                setStates({
                    solution: false,
                    more: false,
                    mobile: false,
                    pricing: false,
                    docs: false
                })
                setClicked(false)
                header.classList.add(styles.hide);
            }
            else if (curDirection === 1 ) {
               header.classList.remove(styles.hide);
            }
            else {
                toggle = false;
            }
            return toggle;
        }
        window.addEventListener('scroll', checkScroll);  
    }, [])

    useEffect(() => {
        function handleClickOutside(event: Event) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setStates({
                    solution: false,
                    more: false,
                    mobile: false,
                    pricing: false,
                    docs: false
                })
                setClicked(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [wrapperRef]);

    const toggle = (toChange: States) => {
        setStates({
            solution: false,
            more: false,
            mobile: false,
            pricing: false,
            docs: false,
            [toChange]: !states[toChange]
        })
    }

    return (
        <nav className="mx-auto px-2 border-b-2 border-gray-200" id="navBar" style={{backgroundColor: props.color ? props.color: 'white'}}>
            <div className="w-full border-b-1 border-gray-200 mx-auto" ref={wrapperRef}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center  py-4 lg:justify-start lg:space-x-10">
                    <div className="lg:w-0 lg:flex-1">

                        <Link href="/">
                            <a className="flex text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150">
                                <img className="h-8 w-auto sm:h-10" src={logo} alt="Workflow" />
                                <span className="ml-2 text-bold text-2xl text-blue-600">OBJECT DETECTION</span>
                            </a>
                        </Link>

                    </div>
                    <div className={`-mr-2 -my-2 lg:hidden ${clicked ? 'hidden' : ''}`}>

                        <button name="mobile menu" aria-label="mobile menu" onClick={(e) => {
                            e.preventDefault();
                            toggle('mobile');
                            setClicked(true);
                        }} disabled={clicked} type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
                            
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>

                    </div>
                    <nav className="hidden lg:flex space-x-8">

                        <Link href="/upload">
                            <a className="text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150">
                               UPLOAD
                            </a>
                        </Link>

                        <Link href="/regulamin">
                            <a className="text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150">
                                REGULAMIN
                            </a>
                        </Link>
                        <Link href="/faq">
                            <a className="text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150">
                                FAQ
                            </a>
                        </Link>
                        <Link href="/admin">
                            <a className="text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150">
                                ADMIN DASHBOARD
                            </a>
                        </Link>
                    </nav>
                    <div className="hidden lg:flex items-center justify-end space-x-2 lg:flex-1 lg:w-0">
                        <span className="inline-flex rounded-md shadow-sm">
                            <Link href="/login">
                                <a className="whitespace-no-wrap inline-flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700 transition ease-in-out duration-150">
                                    LogIn
                                </a>
                            </Link>
                        </span>
                        <span className="inline-flex rounded-md shadow-sm">
                            <Link href="/signup">
                                <a className="whitespace-no-wrap inline-flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition ease-in-out duration-150">
                                    SignUp
                                </a>
                            </Link>
                        </span>
                    </div>
                </div>
            </div>

        <Transition 
            show={states.mobile}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
        >
            {(ref) => (
                    <div ref={ref} className="absolute top-24 inset-x-0 p-2 transition transform origin-top-right lg:hidden">
                        <div className="rounded-lg shadow-lg">
                            <div className="rounded-lg shadow-xs bg-white divide-y-2 divide-gray-100">
                                <div className="pt-2 pb-0 px-5 space-y-8">
                                    <div className="flex flex-row-reverse items-center justify-between">
                                        <Link href="/">
                                            <a className="flex">
                                                <img className="h-16 w-auto" src={logo} alt="Workflow" />
                                            </a>
                                        </Link>
                                        <div className="-mr-2">

                                            <button onClick={(e) => {
                                                e.preventDefault();
                                                toggle('mobile');
                                                setClicked(false);
                                            }} disabled={!clicked} type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
                                                
                                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </button>

                                        </div>
                                    </div>
                                    <div>
                                        <nav className="grid gap-y-5 pb-6">

                                            <Link href="/upload">
                                                <a  className="-m-3 p-3 flex items-center space-x-3 rounded-md hover:bg-gray-100 transition ease-in-out duration-150">
                                                    <svg className="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                                    </svg>
                                                    <div className="text-base leading-6 font-medium text-gray-900">
                                                        UPLOAD
                                                    </div>
                                                </a>
                                            </Link>
                                            <Link href="/regulamin">
                                                <a  className="-m-3 p-3 flex items-center space-x-3 rounded-md hover:bg-gray-100 transition ease-in-out duration-150">
                                                    <svg className="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                    <div className="text-base leading-6 font-medium text-gray-900">
                                                        REGULAMIN
                                                </div>

                                                </a>
                                            </Link>
                                            <Link href="/faq">
                                                <a  className="-m-3 p-3 flex items-center space-x-3 rounded-md hover:bg-gray-100 transition ease-in-out duration-150">

                                                    <svg className="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                    </svg>
                                                    <div className="text-base leading-6 font-medium text-gray-900">
                                                        FAQ
                                                </div>

                                                </a>
                                            </Link>
                                       

                                            <Link href="/admin">
                                                <a  className="-m-3 p-3 flex items-center space-x-3 rounded-md hover:bg-gray-100 transition ease-in-out duration-150">
                                                    <svg className="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                                    </svg>
                                                    <div className="text-base leading-6 font-medium text-gray-900">
                                                        ADMIN DASHBAORD
                                                </div>
                                                </a>
                                            </Link>

                                        </nav>
                                    </div>
                                </div>                               
                                <div className="py-2 px-5 space-y-4">      
                                    <div className="space-y-4">
                                        <span className="w-full flex rounded-md shadow-sm">
                                            <Link href="/login">
                                                <a  className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150">
                                                    LogIn
                                                </a>
                                            </Link>
                                        </span>
                                        <span className="w-full flex rounded-md shadow-sm">
                                            <Link href="/signup">
                                                <a className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-gray-600 hover:bg-gray-500 focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition ease-in-out duration-150">
                                                    SignUp
                                                </a>
                                            </Link>
                                        </span>
                    
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            )}
        </Transition>
    </nav>
    )
}

export default NavBar;
