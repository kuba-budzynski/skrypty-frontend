import React, {useState} from 'react'
import SVG from './../utils/SVG';
import pko from '../public/logos/pko.svg'
import bnp from '../public/logos/bnp.svg'
import zus from '../public/logos/zus.svg'
import krus from '../public/logos/krus.svg'
import tumieszkamy from '../public/logos/tumieszkamy.svg'
import chdk from '../public/logos/chdk.svg'

import Carousel from '@brainhubeu/react-carousel';
import { useMedia } from 'use-media';

const Logos = () => {

    const [value, setValue] = useState(0);
    const small = useMedia({ minWidth: '520px' });
    const mobile = useMedia({minWidth: '640px'});
    const tablet = useMedia({minWidth: '1024px'});
    const smallScreen = useMedia({minWidth: '1280px'});
    const bigScreen = useMedia({minWidth: '1921px'});

    const switchLogos = () => {
        return !small ? 1 :
        !mobile ? 2 : 
        !tablet ? 3 :
        !smallScreen ? 3:
        !bigScreen ? 4 : 5
    }

    return (
        <>
            <section id="logo-carousell" className="bg-gray-800 text-white pt-4 px-8 md:px-4 w-screen max-w-full mx-auto mt-10">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center leading-6 text-2xl md:text-3xl font-bold antialiased font-sans tracking-wider text-gray-400 mt-4">
                        NAM JUŻ ZAUFALI
                    </div>
                    <Carousel
                        value={value}
                        onChange={(v) => setValue(v)}
                        slidesPerPage={switchLogos()}
                        slidesPerScroll={1}
                        clickToChange
                        infinite
                        keepDirectionWhenDragging
                        autoPlay={3500}
                        animationSpeed={1500}
                    >

                        <div className="w-48">
                            <SVG svg={pko} size="divSize" tag="Powszechna Kasa Oszczędności Bank Polski"></SVG>
                        </div>
                        <div className="w-24">
                            <SVG svg={chdk} size="divSize" tag="Chełmski Dom Kultury"></SVG>
                        </div>
                        <div className="w-48">
                            <SVG svg={bnp} size="divSize" tag="BNP Paribas"></SVG>
                        </div>
                        <div className="w-24">
                            <SVG svg={krus} size="divSize" tag="Kasa Rolniczego Ubezpieczenia Społecznego"></SVG>
                        </div>
                        <div className="w-24">
                            <SVG svg={tumieszkamy} size="divSize" tag="TuMieszkamy.pl"></SVG>
                        </div>

                    </Carousel>
                </div>
            </section>
        </>
    )
}

export default Logos
