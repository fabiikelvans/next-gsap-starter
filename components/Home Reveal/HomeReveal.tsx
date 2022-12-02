import React, { useState, useEffect, useRef } from 'react';
import { gsap, CSSPlugin, Expo } from 'gsap';

gsap.registerPlugin(CSSPlugin);

import { useIsomorphicLayoutEffect } from 'usehooks-ts'


function HomeReveal() {

  const [counter, setCounter ] = useState(0);
  let homeRef = useRef(null);

  useEffect(() => {
    const count = setInterval(() => {
      // setCounter(
      //   // @ts-ignore
      //   (counter) => (
      //     counter < 100 ? counter +1 : clearInterval(count), setCounter(100)

      //   )
      // )
    }, 25);
  });


  const t1 = gsap.timeline();


  useIsomorphicLayoutEffect(() => {
    let ctx = gsap.context(() => {

      t1.to('.follow', {
        width: "100%",
        duration: 1.2,
        delay: 0.7,
        ease: Expo.easeInOut,
      })
      .to('.hide', {
        opacity: 0,
        duration: 0.3,
      })
      .to('hide', {
        display: "none",
        duration: 0.3,
      })
      .to('.follow', {
        height: '100%',
        duration: 0.7,
        delay: 0.5,
        ease: Expo.easeInOut,
      })
      .to('.content', {
        width: '100%',
        ease: Expo.easeInOut,
        duration: 0.7
      })
      .to('.title-lines', {
        display: 'block',
        duration: 0.1,
      })
      .to('title-lines', {
        opacity: 1,
        duration: 0.6,
        stagger: {
          amount: 0.15,
        },
        ease: Expo.easeInOut,
      })

    }, homeRef); // <- scopes all selector text to the root element

    return () => ctx.revert();
    }, [])

   
    

  return (
    <div className='home-reveal' ref={homeRef}>

    <div className='loading'>
        <div className="follow"></div>
        <div className="progress" style={{ width: counter + "%"}}></div>
        <div className="count hide">{counter}%</div>
    </div>

      
      <div className="content">
          <h1 className='title-lines'>Am living my best life ever! </h1>
          <h1 className='title-lines'>Enjoy every moment! </h1>
      </div>
    </div>
  )
}

export default HomeReveal