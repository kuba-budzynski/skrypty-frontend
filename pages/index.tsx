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

export default function Home(): JSX.Element{

  return (
    <div className={styles.long}>
      <Head>
        <title>Wrób-el | Elektryk Janusz Wróbel</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      
      <div className="h-screen w-screen max-w-full bg-gray-200">
        {/* <div className="w-2/3 mx-auto pt-40">
          <SVG svg={back} size="divSize" />
        </div> */}
      </div>
      
      <Logos></Logos>
      <Stats></Stats>
      <Features ></Features>
      <CallToAction />
      <TimeLine/>
      <Footer />
    </div>
  )
}

