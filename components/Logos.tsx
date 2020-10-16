import React from 'react'
import SVG from './../utils/SVG';
import pko from '../public/logos/pko.svg'
import bnp from '../public/logos/bnp.svg'
import zus from '../public/logos/zus.svg'
import krus from '../public/logos/krus.svg'
import tumieszkamy from '../public/logos/tumieszkamy.svg'

const Logos = () => {
    return (
        <section id="logo-carousell" className="bg-gray-800 text-white py-4 px-2 md:px-4 my-20 w-screen  max-w-full">
            <div className="text-center leading-6 text-md md:text-3xl font-bold antialiased font-sans tracking-wider text-gray-300 my-2">
                NAM JUŻ ZAUFALI                
            </div>
            <div className="flex justify-evenly space-x-8 sm:space-x-12 md:space-x-0">
                <div className="w-48">
                    <SVG svg={pko} size="divSize"></SVG>
                </div>
                <div className="w-48">
                    <SVG svg={bnp} size="divSize"></SVG>
                </div>
                <div className="w-24">
                    <SVG svg={zus} size="divSize"></SVG>
                </div>
                <div className="w-20">
                    <SVG svg={krus} size="divSize"></SVG>
                </div>
                <div className="w-24">
                    <SVG svg={tumieszkamy} size="divSize"></SVG>
                </div>
            </div>
        </section>
    )
}

export default Logos
