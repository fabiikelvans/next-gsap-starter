import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { gsap } from 'gsap'
import { useRef } from 'react'
import { textIntro } from '../components/Animate'
import Paragraph from '../components/Paragraph/Paragraph'
import HomeReveal from '../components/Home Reveal/HomeReveal'
import ImageReveal from '../components/ImageReveal/ImageReveal'
import Error from '../components/Error/Error'
import BlockReveal from '../components/Block Reveal/BlockReveal'
import Landing2 from '../components/Landing 2/Landing2'
import Landing3 from '../components/Landing 3/Landing3'
import Portfolio from '../components/Portfolio/Portfolio'
import Portfolio2 from '../components/Portfolio2/Portfolio-2'
import Menu from '../components/Menu/Menu'
import ImageFollow from '../components/Image Follow/ImageFollow'
import Landing4 from '../components/Landing 4/Landing-4'
import Curtain from '../components/Curtain/Curtain'
import Scrolltrigger from '../components/ScrollTrigger/ScrollTrigger'

export default function Home() {

  let intro = useRef(null);

  useRef(() => {
    textIntro(intro)
  },[]);

  return (
    <div >
      <Head>
        <title> GSAP Animations </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

     <div>
      <Scrolltrigger/>
     </div>


    </div>
  )
}
