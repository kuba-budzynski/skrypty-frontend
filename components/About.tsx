import React from 'react'
import SVG from '../utils/SVG'
import useMedia from 'use-media'

import waves360 from "../public/about/wave-360.svg"
import waves640 from "../public/about/wave-640.svg"
import waves768 from "../public/about/wave-768.svg"
import waves1024 from "../public/about/wave-1024.svg"
import waves1280 from "../public/about/wave-1280.svg"
import waves1920 from "../public/about/wave-1920.2.svg"
import waves2560 from "../public/about/wave-2560.svg"

import profile from '../public/about/profile.png';

function About() {

    const is360 = useMedia({minWidth: 360});
    const is640 = useMedia({ minWidth: 640 });
    const is768 = useMedia({ minWidth: 768 });
    const is1024 = useMedia({ minWidth: 1024 });
    const is1280 = useMedia({ minWidth: 1280 });
    const is1920 = useMedia({ minWidth: 1920 });
    const is2560 = useMedia({ minWidth: 2560 });

    const switchWidth = () => {
        return (is360 ? 
                    is640 ? 
                        is768 ? 
                            is1024 ? 
                                is1280 ?
                                    is1920 ?
                                        is2560 ? waves2560 : waves1920 
                                    : waves1920 
                                : waves1280
                            : waves1024 
                        : waves768
                    : waves640
                : waves360)
    }

    return (
        <div>
            <SVG svg={switchWidth()} width="100vw" classes="relative bg-gray-200">
                <div className="absolute top-0 left-0 w-full h-full">
    
                </div>
            </SVG>
           
        </div>
    )
}

export default About
