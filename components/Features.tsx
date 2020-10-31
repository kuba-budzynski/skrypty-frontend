import React from 'react'
import SVG from '../utils/SVG'

import shield from '../public/icons/shield.svg'
import toolbox from '../public/icons/toolbox.svg';
import covid from '../public/icons/covid.svg';
import plan from '../public/icons/plan.svg';
import time from '../public/icons/time.svg';
import team from '../public/icons/team.svg';
import piggy from '../public/icons/piggy.svg';
import guarantee from '../public/icons/guarantee.svg'

const Features: React.FC = () => {
    return (
        <div className="py-12 bg-white mt-24">
            <div className="max-w-screen-lg mx-auto px-6 sm:px-8 lg:px-8">
                <div className="lg:text-center">
                    <p className="text-base leading-6 text-center text-indigo-600 font-semibold tracking-wide uppercase">Co nas wyróżnia?</p>
                    <h3 className="mt-2 text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-700 sm:text-5xl sm:leading-10">
                        Dlatego warto Nas wybrać
                    </h3>
                    <p className="mt-4 max-w-2xl text-xl text-center leading-7 text-gray-600 mx-auto">
                        Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in accusamus quisquam.
                    </p>
                </div>

                <div className="mt-16">
                    <ul className="md:grid md:grid-cols-1 md:gap-x-8 md:gap-y-16">


                        <li className="mt-16 md:mt-4">
                            <div className="flex flex-col sm:flex-row items-center justify-center h-full p-4 bg-gray-100">
                                <div className="flex items-center justify-center">
                                    <div className="h-64 w-64">
                                        <SVG svg={shield} size="divSize" tag="doświadczenie i wiedza"></SVG>
                                    </div>
                                </div>
                                <div className="ml-4 sm:ml-10">
                                    <h4 className="text-xl md:text-2xl xl:text-3xl leading-6 text-center font-bold text-gray-700 sm:text-left uppercase">Wieloletnie doświadczenie i wiedza</h4>
                                    <p className="mt-2 md:mt-4 text-base text-center leading-6 text-gray-500 sm:text-left">
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
                                    </p>
                                </div>
                            </div>
                        </li>


                        <li className="mt-16 md:mt-4">
                            <div className="flex flex-col sm:flex-row items-center justify-center h-full p-4">
                                <div className="flex items-center justify-center">
                                    <div className="h-64 w-64">
                                        <SVG svg={toolbox} size="divSize" tag="profesjonalne narzędzia"></SVG>
                                    </div>
                                </div>
                                <div className="ml-4 sm:ml-10">
                                    <h4 className="text-xl md:text-2xl xl:text-3xl leading-6 text-center font-bold text-gray-700 sm:text-left uppercase">Najlepsze specjalistyczne narzędzia</h4>
                                    <p className="mt-2 md:mt-4 text-base text-center leading-6 text-gray-500 sm:text-left">
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
                                    </p>
                                </div>
                            </div>
                        </li>

                        <li className="mt-16 md:mt-4">
                            <div className="flex flex-col sm:flex-row items-center justify-center h-full p-4 bg-gray-100">
                                <div className="flex items-center justify-center">
                                    <div className="h-64 w-64">
                                        <SVG svg={team} size="divSize" tag="zgrany i fachowy zespół"></SVG>
                                    </div>
                                </div>
                                <div className="ml-4 sm:ml-10">
                                    <h4 className="text-xl md:text-2xl xl:text-3xl leading-6 text-center font-bold text-gray-700 sm:text-left uppercase">Zgrany i fachowy zespół</h4>
                                    <p className="mt-2 md:mt-4 text-base text-center leading-6 text-gray-500 sm:text-left">
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
                                    </p>
                                </div>
                            </div>
                        </li>

                        <li className="mt-16 md:mt-4">
                            <div className="flex flex-col sm:flex-row items-center justify-center h-full p-4">
                                <div className="flex items-center justify-center">
                                    <div className="h-64 w-64">
                                        <SVG svg={guarantee} size="divSize" tag="gwarancja jakości"></SVG>
                                    </div>
                                </div>
                                <div className="ml-4 sm:ml-10">
                                    <h4 className="text-xl md:text-2xl xl:text-3xl leading-6 text-center font-bold text-gray-700 sm:text-left uppercase">Gwarancja jakości</h4>
                                    <p className="mt-2 md:mt-4 text-base text-center leading-6 text-gray-500 sm:text-left">
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
                                    </p>
                                </div>
                            </div>
                        </li>
                        
                        <li className="mt-16 md:mt-4">
                            <div className="flex flex-col sm:flex-row items-center justify-center h-full p-4 bg-gray-100">
                                <div className="flex items-center justify-center">
                                    <div className="h-64 w-64">
                                        <SVG svg={piggy} size="divSize" tag="konkurencyjne ceny i oszczędności"></SVG>
                                    </div>
                                </div>
                                <div className="ml-4 sm:ml-10">
                                    <h4 className="text-xl md:text-2xl xl:text-3xl leading-6 text-center font-bold text-gray-700 sm:text-left uppercase">Konkurencyjne ceny</h4>
                                    <p className="mt-2 md:mt-4 text-base text-center leading-6 text-gray-500 sm:text-left">
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
                                    </p>
                                </div>
                            </div>
                        </li>

                        <li className="mt-16 md:mt-4">
                            <div className="flex flex-col sm:flex-row items-center justify-center h-full p-4">
                                <div className="flex items-center justify-center">
                                    <div className="h-64 w-64">
                                        <SVG svg={time} size="divSize" tag="terminowość i szybkość"></SVG>
                                    </div>
                                </div>
                                <div className="ml-4 sm:ml-10">
                                    <h4 className="text-xl md:text-2xl xl:text-3xl leading-6 text-center font-bold text-gray-700 sm:text-left uppercase">Terminowość projektów</h4>
                                    <p className="mt-2 md:mt-4 text-base text-center leading-6 text-gray-500 sm:text-left">
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
                                    </p>
                                </div>
                            </div>
                        </li>

                        <li className="mt-16 md:mt-4">
                            <div className="flex flex-col sm:flex-row items-center justify-center h-full p-4 bg-gray-100">
                                <div className="flex items-center justify-center">
                                    <div className="h-64 w-64">
                                        <SVG svg={plan} size="divSize" tag="elastyczność w doborze materiałów i sprzętu"></SVG>
                                    </div>
                                </div>
                                <div className="ml-4 sm:ml-10">
                                    <h4 className="text-xl md:text-2xl xl:text-3xl leading-6 text-center font-bold text-gray-700 sm:text-left uppercase">Elastyczność planów i materiałów</h4>
                                    <p className="mt-2 md:mt-4 text-base text-center leading-6 text-gray-500 sm:text-left">
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
                                    </p>
                                </div>
                            </div>
                        </li>

                        <li className="mt-16 md:mt-4">
                            <div className="flex flex-col sm:flex-row items-center justify-center h-full p-4">
                                <div className="flex items-center justify-center">
                                    <div className="h-64 w-64">
                                        <SVG svg={covid} size="divSize" tag="bezpieczeństwo i BHP"></SVG>
                                    </div>
                                </div>
                                <div className="ml-4 sm:ml-10">
                                    <h4 className="text-xl md:text-2xl xl:text-3xl leading-6 text-center font-bold text-gray-700 sm:text-left uppercase">Bezpieczna praca i zasady BHP</h4>
                                    <p className="mt-2 md:mt-4 text-base text-center leading-6 text-gray-500 sm:text-left">
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
                                    </p>
                                </div>
                            </div>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Features;
