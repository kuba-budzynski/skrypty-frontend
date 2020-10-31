import React from 'react'

function Stats() {
    return (
        <div className="relative h-32">
            <div className="absolute inset-0 h-16 bg-gray-800">
            </div>
            <div className="relative pt-2 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8" >
                <div className="max-w-4xl mx-auto">
                    <dl className="rounded-lg bg-white shadow-xl grid grid-cols-3">
                        <div className="flex flex-col border-b border-gray-400 p-4 sm:p-6 text-center border-0 border-r">
                            <dt id="item-1" className="order-2 mt-2 text-xs sm:text-lg font-medium text-gray-500">Lat Doświadczenia</dt>
                            <dd className="order-1 text-3xl sm:text-5xl leading-none font-extrabold text-indigo-500">25+</dd>
                        </div>
                        <div className="flex flex-col border-t border-b border-gray-400 p-4 sm:p-6 text-center border-0 border-l border-r">
                            <dt className="order-2 mt-2 text-xs sm:text-lg font-medium text-gray-500">Wykonane Projekty</dt>
                            <dd className="order-1 text-3xl sm:text-5xl leading-none font-extrabold text-indigo-500">350+</dd>
                        </div>
                        <div className="flex flex-col border-t border-gray-400 p-4 sm:p-6 text-center border-0 border-l">
                            <dt className="order-2 mt-2 text-xs sm:text-lg font-medium text-gray-500">Fachowców</dt>
                            <dd className="order-1 text-3xl sm:text-5xl leading-none font-extrabold text-indigo-500">8</dd>
                        </div>
                    </dl>
                </div>
            </div>
        </div>
    )
}

export default Stats
