import React, { useState, useEffect, useRef } from 'react';
import { Transition } from '@headlessui/react'
import styles from '../styles/Index.module.scss'
import Link from 'next/link'
import SVG from '../utils/SVG';
import Image from 'next/image';

type States = "solution" | "more" | "mobile" | "pricing" | "docs";

const NavBar = () => {

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
        <header className="bg-white px-2" id="navBar">
            <div className="w-full border-b-2 border-gray-200 mx-auto" ref={wrapperRef}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center  py-4 navBar:justify-start navBar:space-x-10">
                    <div className="lg:w-0 lg:flex-1">

                        <Link href="/">
                            <a className="flex">
                                <img className="h-8 w-auto sm:h-10" src="https://tailwindui.com/img/logos/v1/workflow-mark-on-dark.svg" alt="Workflow" />
                            </a>
                        </Link>

                    </div>
                    <div className={`-mr-2 -my-2 navBar:hidden ${clicked ? 'hidden' : ''}`}>

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
                    <nav className="hidden navBar:flex space-x-8">

                        <Link href="/">
                            <a className="text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150">
                               Home
                            </a>
                        </Link>

                        <div className="relative">

                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    toggle("solution");
                                }}
                                type="button"
                                className={`${states.solution ? 'text-gray-900' : 'text-gray-500'} group inline-flex items-center space-x-1 text-base leading-6 font-medium hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150`
                                }>
                                <span>Elektryka</span>
                                <svg className={`${states.solution ? 'text-gray-500' : 'text-gray-400'} h-5 w-5 group-hover:text-gray-500 group-focus:text-gray-500 transition ease-in-out duration-150" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor`}>
                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </button>

                            <Transition
                                show={states.solution}
                                enter="transition ease-out duration-200"
                                enterFrom="opacity-0 translate-y-1"
                                enterTo="opacity-0 translate-y-0"
                                leave="transition ease-in duration-150"
                                leaveFrom="opacity-100 translate-y-0"
                                leaveTo="opacity-0 translate-y-1">
                                {
                                    (ref) => (
                                        <div ref={ref} className='absolute -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2'>
                                            <div className="rounded-lg shadow-lg">
                                                <div className="rounded-lg shadow-xs overflow-hidden">
                                                    <div className="z-20 relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                                        <Link href="/elektryka/instalacje-domowe">
                                                            <a  className="-m-3 p-3 flex items-start space-x-4 rounded-lg hover:bg-gray-100 transition ease-in-out duration-150">

                                                                <svg className="flex-shrink-0 h-8 w-8 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                                                </svg>
                                                                <div className="space-y-1 ">
                                                                    <p className="text-base leading-6 font-medium text-gray-900">
                                                                        Instalacje domowe
                                                                </p>
                                                                    <p className="text-sm leading-5 text-gray-500">
                                                                        Projektowania i wykonanie profesjonalnych instalacji elektrycznych w budynkach mieszkalnych.
                                                                </p>
                                                                </div>

                                                            </a></Link>
                                                        <Link href="/elektryka/instalacje-publiczne">
                                                            <a  className="-m-3 p-3 flex items-start space-x-4 rounded-lg hover:bg-gray-100 transition ease-in-out duration-150">

                                                                <svg className="flex-shrink-0 h-8 w-8 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                                                                </svg>
                                                                <div className="space-y-1">
                                                                    <p className="text-base leading-6 font-medium text-gray-900">
                                                                        Instalacje publiczne
                                                                 </p>
                                                                    <p className="text-sm leading-5 text-gray-500">
                                                                        Najwyższej klasy, bezpieczne i trwałe instalacje elektryczne w budynkach o przeznaczeniu publicznym.
                                                                </p>
                                                                </div>

                                                            </a>
                                                        </Link>
                                                        <Link href="/elektryka/instalacje-przemyslowe">
                                                            <a  className="-m-3 p-3 flex items-start space-x-4 rounded-lg hover:bg-gray-100 transition ease-in-out duration-150">

                                                                <svg className="flex-shrink-0 h-8 w-8 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                                </svg>
                                                                <div className="space-y-1">
                                                                    <p className="text-base leading-6 font-medium text-gray-900">
                                                                        Instalacje przemysłowe
                                                                </p>
                                                                    <p className="text-sm leading-5 text-gray-500">
                                                                        Zaawansowane i dostosowane dokłanie do potrzeb instalacje elektryczne w obiektach przemysłowych.
                                                                </p>
                                                                </div>

                                                            </a>
                                                        </Link>
                                                        <Link href="/elektryka/instalacje-odgromowe">
                                                            <a  className="-m-3 p-3 flex items-start space-x-4 rounded-lg hover:bg-gray-100 transition ease-in-out duration-150">

                                                                <svg className="flex-shrink-0 h-8 w-8 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                                                </svg>
                                                                <div className="space-y-1">
                                                                    <p className="text-base leading-6 font-medium text-gray-900">
                                                                        Instalacje odgromowe
                                                                </p>
                                                                    <p className="text-sm leading-5 text-gray-500">
                                                                        Instalacje gwarantujące bezpieczeństwo przed porażeniami wynikłymi z wyładowań piorunowych.
                                                                </p>
                                                                </div>

                                                            </a>
                                                        </Link>
                                                        <Link href="/elektryka/transformatory">
                                                            <a  className="-m-3 p-3 flex items-start space-x-4 rounded-lg hover:bg-gray-100 transition ease-in-out duration-150">

                                                                <svg className="flex-shrink-0 h-8 w-8 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                                                                </svg>
                                                                <div className="space-y-1">
                                                                    <p className="text-base leading-6 font-medium text-gray-900">
                                                                        Stacje transformatorowe
                                                                </p>
                                                                    <p className="text-sm leading-5 text-gray-500">
                                                                        Budowa solidnych stacji transformatorowych <span className="italic">SN/nn</span>.
                                                                </p>
                                                                </div>

                                                            </a>
                                                        </Link>
                                                        <Link href="/elektryka/pomiary" >
                                                            <a className="-m-3 p-3 flex items-start space-x-4 rounded-lg hover:bg-gray-100 transition ease-in-out duration-150">

                                                                <svg className="flex-shrink-0 h-8 w-8 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                                                </svg>
                                                                <div className="space-y-1">
                                                                    <p className="text-base leading-6 font-medium text-gray-900">
                                                                        Pomiary instalacji
                                                                </p>
                                                                    <p className="text-sm leading-5 text-gray-500">
                                                                        Profesjonalne pomiary wydajności i bezpieczeństwa instalacji elektrycznych.
                                                                </p>
                                                                </div>

                                                            </a>
                                                        </Link>
                                                    </div>
                                                    <div className="px-5 py-5 bg-gray-100 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8 border-t-2 border-gray-200">
                                                        <div className="flow-root">
                                                            <Link href="/oferta">
                                                                <a  className="-m-3 p-3 flex items-center space-x-3 rounded-md text-base leading-6 font-medium text-gray-900 hover:bg-gray-200 transition ease-in-out duration-150">

                                                                    <svg className="flex-shrink-0 h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                                    </svg>
                                                                    <span>Zobacz nasze prace</span>

                                                                </a>
                                                            </Link>
                                                        </div>
                                                        <div className="flow-root">
                                                            <Link href="/kontakt">
                                                                <a  className="-m-3 p-3 flex items-center space-x-3 rounded-md text-base leading-6 font-medium text-gray-900 hover:bg-gray-200 transition ease-in-out duration-150">

                                                                    <svg className="flex-shrink-0 h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                                                    </svg>
                                                                    <span>Kontakt z nami</span>

                                                                </a>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            </Transition>

                        </div>

                        <Link href="/referencje">
                            <a className="text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150">
                                Referencje
                            </a>
                        </Link>
                        <Link href="/galeria">
                            <a className="text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150">
                                Galeria
                            </a>
                        </Link>

                        <div className="relative">
                    
                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    toggle("more")
                                }}
                                type="button"
                                className={`${states.more ? "text-gray-900" : "text-gray-500"}  inline-flex items-center space-x-1 text-base leading-6 font-medium hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150`}>
                                <span>Inne</span>
                                <svg className={`${states.more ? "text-gray-600" : "text-gray-400"} text-gray-400 h-5 w-5 group-hover:text-gray-500 group-focus:text-gray-500 transition ease-in-out duration-150" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor`}>
                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </button>

                            <Transition
                                show={states.more}
                                enter="ransition ease-out duration-200"
                                enterFrom="opacity-0 translate-y-1"
                                enterTo="opacity-100 translate-y-0"
                                leave="transition ease-in duration-150"
                                leaveFrom="opacity-100 translate-y-0"
                                leaveTo="opacity-0 translate-y-1"
                            >
                                {
                                    (ref) => (
                                        <div ref={ref} className="absolute left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0">
                                            <div className="rounded-lg shadow-lg">
                                                <div className="rounded-lg shadow-xs overflow-hidden">
                                                    <div className="z-20 relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                                        <Link href="/fotowoltaika">
                                                            <a  className="-m-3 p-3 flex items-start space-x-4 rounded-lg hover:bg-gray-100 transition ease-in-out duration-150">

                                                                <svg className="flex-shrink-0 h-8 w-8 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                                                </svg>
                                                                <div className="space-y-1">
                                                                    <p className="text-base leading-6 font-medium text-gray-900">
                                                                        Fotowoltaika
                                                                </p>
                                                                    <p className="text-sm leading-5 text-gray-500">
                                                                        Wysokowydajnościowe instalacje paneli słonecznych. Sprawdź za ile czasu Ci się zwrócą.
                                                                </p>
                                                                </div>

                                                            </a>
                                                        </Link>
                                                        <Link href="/pompy-ciepla">
                                                            <a  className="-m-3 p-3 flex items-start space-x-4 rounded-lg hover:bg-gray-100 transition ease-in-out duration-150">

                                                                <svg className="fill-current text-indigo-600 flex-shrink-0 h-8 w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 272.987 272.987">
                                                                    <path strokeWidth={2} d="M245.083,87.639c-3.958,0-7.169,3.213-7.169,7.168v28.035h-8.013v-6.389c0-15.887-12.928-28.814-28.811-28.814
                                                                    c-8.629,0-16.357,3.834-21.646,9.859c-5.288-6.025-13.017-9.859-21.642-9.859c-8.629,0-16.362,3.834-21.646,9.859
                                                                    c-5.288-6.025-13.019-9.859-21.646-9.859c-8.625,0-16.358,3.834-21.644,9.859c-5.286-6.025-13.019-9.859-21.646-9.859
                                                                    c-15.885,0-28.812,12.928-28.812,28.814v6.389H27.919c-3.955,0-7.168,3.211-7.168,7.168c0,3.956,3.213,7.169,7.168,7.169h14.478
                                                                    v106.993c0,15.887,12.928,28.814,28.812,28.814c8.627,0,16.36-3.832,21.646-9.857c5.286,6.025,13.017,9.857,21.644,9.857
                                                                    s16.358-3.832,21.644-9.857c5.285,6.025,13.019,9.857,21.644,9.857s16.362-3.832,21.646-9.857
                                                                    c5.283,6.025,13.021,9.857,21.646,9.857c15.887,0,28.814-12.928,28.814-28.814V137.184h15.178c3.957,0,7.168-3.213,7.168-7.168
                                                                    V94.812C252.252,90.852,249.036,87.639,245.083,87.639z M215.563,137.184v106.993c0,7.985-6.492,14.478-14.473,14.478
                                                                    s-14.477-6.492-14.477-14.478V137.184v-14.337v-6.389c0-7.983,6.496-14.478,14.477-14.478s14.473,6.494,14.473,14.478v6.389
                                                                    V137.184z M172.271,244.173c0,7.984-6.496,14.477-14.477,14.477c-7.981,0-14.478-6.492-14.478-14.477V137.184v-14.337v-6.389
                                                                    c0-7.983,6.496-14.478,14.478-14.478c7.98,0,14.477,6.494,14.477,14.478v6.389v14.337V244.173z M128.982,244.173
                                                                    c0,7.984-6.494,14.477-14.475,14.477c-7.98,0-14.475-6.492-14.475-14.477V137.184v-14.337v-6.389
                                                                    c0-7.983,6.495-14.478,14.475-14.478c7.981,0,14.475,6.494,14.475,14.478v6.389v14.337V244.173z M85.69,244.173
                                                                    c0,7.984-6.497,14.477-14.477,14.477c-7.981,0-14.475-6.492-14.475-14.477V137.184v-14.337v-6.389
                                                                    c0-7.983,6.494-14.478,14.475-14.478c7.98,0,14.477,6.494,14.477,14.478v6.389v14.337V244.173z"/>
                                                                    <path d="M88.472,2.404c-6.461,7.708-9.12,15.87-5.918,25.669c3.16,9.667,12.865,18.533,5.12,28.493
                                                                    c-5.603,7.201,4.467,17.429,10.135,10.137c6.38-8.203,9.138-16.57,5.918-26.75c-2.905-9.185-12.846-18.197-5.12-27.412
                                                                    C104.506,5.505,94.42-4.692,88.472,2.404z"/>
                                                                    <path d="M140.825,66.702c6.385-8.203,9.138-16.57,5.918-26.75c-2.903-9.185-12.847-18.197-5.12-27.412
                                                                    c5.899-7.036-4.191-17.233-10.135-10.137c-6.461,7.708-9.119,15.87-5.917,25.669c3.16,9.667,12.865,18.533,5.12,28.493
                                                                    C125.083,63.767,135.152,73.994,140.825,66.702z"/>
                                                                    <path d="M174.493,2.404c-6.459,7.708-9.119,15.87-5.918,25.669c3.164,9.667,12.867,18.533,5.125,28.493
                                                                    c-5.605,7.201,4.462,17.429,10.132,10.137c6.38-8.203,9.139-16.57,5.918-26.75c-2.907-9.185-12.849-18.197-5.12-27.412
                                                                    C190.529,5.505,180.444-4.692,174.493,2.404z"/>
                                                                </svg>
                                                                <div className="space-y-1">
                                                                    <p className="text-base leading-6 font-medium text-gray-900">
                                                                        Popmy ciepła
                                                                </p>
                                                                    <p className="text-sm leading-5 text-gray-500">
                                                                        Montaż i projekt najnowocześniejszych pomp ciepła Panasonic. Dzięki energi elektrycznej wymuszany jest ruch powietrza z obszaru chłodniejszego do obszaru cieplejszego.
                                                                </p>
                                                                </div>

                                                            </a>
                                                        </Link>
                                                        <Link href="/hydraulika">
                                                            <a  className="-m-3 p-3 flex items-start space-x-4 rounded-lg hover:bg-gray-100 transition ease-in-out duration-150">

                                                                <svg className="fill-current text-indigo-600 flex-shrink-0 h-8 w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 430 430">
                                                                    <path strokeWidth={2} d="M384,267.998v-8c0-13.255-10.745-24-24-24c-13.228,0.066-23.934,10.772-24,24v8h-28.168
                                                                    c-4.391-5.386-9.442-10.2-15.032-14.328c-1.6-1.2-3.2-2.32-4.8-3.352v-38.32h16c13.228-0.066,23.934-10.772,24-24
                                                                    c0-13.255-10.745-24-24-24h-32v-16h16c4.418,0,8-3.582,8-8v-24h48c13.255,0,24-10.745,24-24s-10.745-24-24-24H136
                                                                    c-13.255,0-24,10.745-24,24s10.745,24,24,24h48v24c0,4.418,3.582,8,8,8h16v16h-32c-13.228,0.066-23.934,10.772-24,24
                                                                    c0,13.255,10.745,24,24,24h16v38.32c-1.6,1.032-3.2,2.136-4.744,3.32c-5.614,4.132-10.683,8.957-15.088,14.36H144v-8
                                                                    c-0.066-13.228-10.772-23.934-24-24c-13.255,0-24,10.745-24,24v8H0v112h96v8c0,13.255,10.745,24,24,24s24-10.745,24-24v-8h28.184
                                                                    c30.847,37.454,86.216,42.809,123.67,11.962c4.363-3.593,8.369-7.599,11.962-11.962H336v8c0,13.255,10.745,24,24,24
                                                                    s24-10.745,24-24v-8h96v-112H384z M96,363.998H16v-80h80V363.998z M128,387.998c0,4.418-3.582,8-8,8s-8-3.582-8-8v-128
                                                                    c0-4.418,3.582-8,8-8c2.156-0.007,4.218,0.879,5.696,2.448c1.493,1.459,2.325,3.465,2.304,5.552V387.998z M136,99.998
                                                                    c-4.418,0-8-3.582-8-8s3.582-8,8-8h208c4.418,0,8,3.582,8,8s-3.582,8-8,8H136z M200,131.998v-16h80v16H200z M256,147.998v16h-32
                                                                    v-16H256z M176,195.998c-4.418,0-8-3.582-8-8c-0.007-2.156,0.879-4.218,2.448-5.696c1.459-1.493,3.465-2.325,5.552-2.304h128
                                                                    c4.418,0,8,3.582,8,8c0.007,2.156-0.879,4.218-2.448,5.696c-1.459,1.493-3.465,2.325-5.552,2.304H176z M336,363.998h-32.08
                                                                    c-2.518,0-4.889,1.186-6.4,3.2c-23.77,31.767-68.793,38.25-100.56,14.48c-5.493-4.111-10.37-8.987-14.48-14.48
                                                                    c-1.511-2.014-3.882-3.2-6.4-3.2H144v-80h32.08c2.528-0.013,4.901-1.22,6.4-3.256c5.816-7.72,13.137-14.181,21.52-18.992
                                                                    c2.483-1.433,4.009-4.085,4-6.952v-42.8h64v42.8c-0.008,2.867,1.517,5.519,4,6.952c2.5,1.446,4.904,3.049,7.2,4.8
                                                                    c5.43,3.998,10.226,8.794,14.224,14.224c1.499,2.036,3.872,3.243,6.4,3.256H336V363.998z M368,387.998c0,4.418-3.582,8-8,8
                                                                    s-8-3.582-8-8v-128c-0.007-2.156,0.879-4.218,2.448-5.696c1.459-1.493,3.465-2.325,5.552-2.304c4.418,0,8,3.582,8,8V387.998z
                                                                    M464,363.998h-80v-80h80V363.998z" />
                                                                </svg>
                                                                <div className="space-y-1">
                                                                    <p className="text-base leading-6 font-medium text-gray-900">
                                                                        Hydraulika
                                                                </p>
                                                                    <p className="text-sm leading-5 text-gray-500">
                                                                        Przygotowanie hydrauliki do montażu popmy ciepła.
                                                                </p>
                                                                </div>

                                                            </a>
                                                        </Link>
                                                        <Link href="/holowanie">
                                                            <a  className="-m-3 p-3 flex items-start space-x-4 rounded-lg hover:bg-gray-100 transition ease-in-out duration-150">

                                                                <svg className="text-indigo-600 flex-shrink-0 h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 3h5m0 0v5m0-5l-6 6M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />
                                                                </svg>
                                                                <div className="space-y-1">
                                                                    <p className="text-base leading-6 font-medium text-gray-900">
                                                                        Holowanie pojazdów
                                                                </p>
                                                                    <p className="text-sm leading-5 text-gray-500">
                                                                        Szybki i bezpieczny transport pojazdów na nowoczesnej lawecie.
                                                                </p>
                                                                </div>

                                                            </a>
                                                        </Link>
                                                    </div>
                                                    <div className="px-5 py-5 bg-gray-100 space-y-3 sm:px-8 sm:py-8 border-t-2 border-gray-200">
                                                        <div className="space-y-4">
                                                            <h3 className="text-sm leading-5 tracking-wide font-medium text-gray-500 uppercase">
                                                                Ważne na stronie
                                                            </h3>
                                                            <ul className="space-y-0">
    
                                                                <li className="text-base leading-6 truncate hover:bg-gray-200 transition ease-in-out duration-150 rounded-lg">
                                                                    <Link href="/regulamin">
                                                                        <a  className="font-medium text-gray-900 hover:text-gray-700 transition ease-in-out duration-150 mx-0 p-2 flex items-start space-x-2 rounded-lg">
                                                                            <svg className=" text-indigo-600 flex-shrink-0 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                                            </svg>
                                                                            <p className="m-0">Regulamin strony</p>
                                                                        </a>
                                                                    </Link>
                                                                </li>
                                                                <li className="text-base leading-6 truncate hover:bg-gray-200 transition ease-in-out duration-150 rounded-lg">
                                                                    <Link href="/faq">
                                                                        <a  className="font-medium text-gray-900 hover:text-gray-700 transition ease-in-out duration-150 mx-0 p-2 flex items-start space-x-2 rounded-lg">
                                                                            <svg className=" text-indigo-600 flex-shrink-0 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                                            </svg>
                                                                            <p className="m-0">Frequently Asked Questions</p>
                                                                        </a>
                                                                    </Link>
                                                                </li>
                                                                <li className="text-base leading-6 truncate hover:bg-gray-200 transition ease-in-out duration-150 rounded-lg">
                                                                    <a href="#" className="font-medium text-gray-900 hover:text-gray-700 transition ease-in-out duration-150 mx-0 p-2 flex items-start space-x-2 rounded-lg">
                                                                        <svg className=" text-indigo-600 flex-shrink-0 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                                                        </svg>
                                                                        <p className="m-0">Oceń naszą pracę</p>
                                                                    </a>
                                                                </li>

                                                            </ul>
                                                        </div>
                                                        <div className="leading-2 text-xs text-center">
                                                            <a href="#" className="text-indigo-600 hover:text-indigo-500 transition ease-in-out duration-150 font-smaller">
                                                                Developer &rarr;
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            </Transition>

                        </div>
                    </nav>
                    <div className="hidden navBar:flex items-center justify-end space-x-8 navBar:flex-1 lg:w-0">
                        {/* <a href="#" className="whitespace-no-wrap text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900">
                            Sign in
                        </a> */}
                        <span className="inline-flex rounded-md shadow-sm">
                            <Link href="/kontakt">
                                <a className="whitespace-no-wrap inline-flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150">
                                    Kontakt
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
                    <div ref={ref} className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right navBar:hidden">
                        <div className="rounded-lg shadow-lg">
                            <div className="rounded-lg shadow-xs bg-white divide-y-2 divide-gray-50">
                                <div className="pt-5 pb-6 px-5 space-y-6">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-on-white.svg" alt="Workflow" />
                                        </div>
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
                                        <nav className="grid gap-y-8">

                                            <a href="#" className="-m-3 p-3 flex items-center space-x-3 rounded-md hover:bg-gray-100 transition ease-in-out duration-150">
                                                
                                                <svg className="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                                </svg>
                                                <div className="text-base leading-6 font-medium text-gray-900">
                                                    Analytics
                                                </div>

                                            </a>
                                            <a href="#" className="-m-3 p-3 flex items-center space-x-3 rounded-md hover:bg-gray-100 transition ease-in-out duration-150">
                                                
                                                <svg className="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                                                </svg>
                                                <div className="text-base leading-6 font-medium text-gray-900">
                                                    Engagement
                                                </div>

                                            </a>
                                            <a href="#" className="-m-3 p-3 flex items-center space-x-3 rounded-md hover:bg-gray-100 transition ease-in-out duration-150">
                                                
                                                <svg className="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                                </svg>
                                                <div className="text-base leading-6 font-medium text-gray-900">
                                                    Security
                                                </div>

                                            </a>
                                            <a href="#" className="-m-3 p-3 flex items-center space-x-3 rounded-md hover:bg-gray-100 transition ease-in-out duration-150">
                                                
                                                <svg className="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                                                </svg>
                                                <div className="text-base leading-6 font-medium text-gray-900">
                                                    Integrations
                                                </div>

                                            </a>
                                            <a href="#" className="-m-3 p-3 flex items-center space-x-3 rounded-md hover:bg-gray-100 transition ease-in-out duration-150">
                                                
                                                <svg className="flex-shrink-0 h-6 w-6 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                                </svg>
                                                <div className="text-base leading-6 font-medium text-gray-900">
                                                    Dupa
                                                </div>

                                            </a>
                                        </nav>
                                    </div>
                                </div>
                                <div className="py-6 px-5 space-y-6">
                                    <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                                        <a href="#" className="text-base leading-6 font-medium text-gray-900 hover:text-gray-700 transition ease-in-out duration-150">
                                            Pricing
                                        </a>
                                        <a href="#" className="text-base leading-6 font-medium text-gray-900 hover:text-gray-700 transition ease-in-out duration-150">
                                            Docs
                                        </a>
                                        <a href="#" className="text-base leading-6 font-medium text-gray-900 hover:text-gray-700 transition ease-in-out duration-150">
                                            Enterprise
                                        </a>
                                        <a href="#" className="text-base leading-6 font-medium text-gray-900 hover:text-gray-700 transition ease-in-out duration-150">
                                            Blog
                                        </a>
                                        <a href="#" className="text-base leading-6 font-medium text-gray-900 hover:text-gray-700 transition ease-in-out duration-150">
                                            Help Center
                                        </a>
                                        <a href="#" className="text-base leading-6 font-medium text-gray-900 hover:text-gray-700 transition ease-in-out duration-150">
                                            Guides
                                        </a>
                                        <a href="#" className="text-base leading-6 font-medium text-gray-900 hover:text-gray-700 transition ease-in-out duration-150">
                                            Security
                                        </a>
                                        <a href="#" className="text-base leading-6 font-medium text-gray-900 hover:text-gray-700 transition ease-in-out duration-150">
                                            Events
                                        </a>
                                    </div>
                                    <div className="space-y-6">
                                        <span className="w-full flex rounded-md shadow-sm">
                                            <a href="#" className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150">
                                                Kontakt z nami
                                            </a>
                                        </span>
                                        <p className="text-center text-base leading-6 font-medium text-gray-500">
                                            Existing customer?
                                            <a href="#" className="text-indigo-600 hover:text-indigo-500 transition ease-in-out duration-150">
                                                Sign in
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            )}
        </Transition>
    </header>
    )
}

export default NavBar;
