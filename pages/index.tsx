import React, {useState} from 'react';
import Head from 'next/head'
import NavBar from '../components/NavBar'
import styles from '../styles/Index.module.scss'

import SVG from '../utils/SVG'
import back from '../public/bg3.svg'
import CallToAction from './../components/CallToAction';
import Features from '../components/Features'
import Logos from '../components/Logos'
import TimeLine from '../components/TimeLine'
import Footer from '../components/Footer'
import Stats from './../components/Stats';
import About from '../components/About';
// import Lottie from 'react-lottie';
// import google from '../public/google.json';
// import Haikudos from '@haiku/jamestmtm-haikudos/react';

export default function Home(): JSX.Element{

  const [paused, setPaused] = useState(false);
  const [stopped, setStopped] = useState(true);
  const [direction, setDirection] = useState(-1);

  return (
    <div className={styles.long}>
      <Head>
        <title>Wrób-el | Elektryk Janusz Wróbel</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Profesjonalne usługi elektryczne, instalacje fotowoltaiczne oraz pompy ciepła. Terminowość i gwarancja jakości." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      
      <div className="h-screen w-screen max-w-full bg-gray-200">
        {/* <div className="w-2/3 mx-auto pt-40">
          <SVG svg={back} size="divSize" />
        </div> */}
        <div className="w-1/2 h-1/2 mx-auto pt-16" onMouseEnter={() => {setStopped(false); setDirection(-1)}} onMouseLeave={() => {setDirection(1)}} onAnimationEndCapture={() => console.log("END")}>
          {/* <Lottie 
            options={{
              loop: true,
              autoplay: false,
              animationData: google,
              rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice'
              }
            }}
            width={400}
            height={400}
            isStopped={stopped}
            isPaused={paused}
            direction={direction}
            eventListeners={[{
              eventName: 'loopComplete',
              callback: () => console.log('END'),
            },]}
          /> */}
          {/* <Haikudos loop={true} /> */}
        </div>
      </div>
      
      <Logos></Logos>
      <Stats></Stats> 
      <Features ></Features>
      <CallToAction />
      {/* <About /> */}
      <TimeLine/>
      <Footer />
    </div>
  )
}

