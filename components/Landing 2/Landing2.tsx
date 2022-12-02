import React, { useState, useEffect, useRef } from 'react';
import { gsap, Expo } from 'gsap';

import { useIsomorphicLayoutEffect } from 'usehooks-ts'


function Landing2() {

  let mainRef = useRef(null);

    const t1 = gsap.timeline();

    useIsomorphicLayoutEffect(() => {
        let ctx = gsap.context(() => {
    
          t1.from(".title", {
            opacity: 0,
            y: -100,
            duration: 3,
            ease: Expo.easeInOut,
            delay: 6,
          })
          .from('.container > .block', {
            y: "100%",
            duration: 1.2,
            ease: Expo.easeInOut,
            delay: 1,
            stagger: 0.5,
            opacity: 0
          }, 0.4)
          .to('.overlay', {
            
          })
          .to('.container', {
            scale: "2",
            y: "90%",
            ease: Expo.easeInOut,
            duration: 2,
            delay: 3.5
          })
          .from(".navbar > div", {
            opacity: 0,
            y: -100,
            duration: 3,
            ease: Expo.easeInOut,
            delay: 6,
          }, 0.08)
          
          
    
        }, mainRef); // <- scopes all selector text to the root element
    
        return () => ctx.revert();
        }, [])


  return (
    <div className='landing-2' ref={mainRef}>
      <div className="navbar">
        <div className="site-info">elevated</div>
        <div className="site-menu">
          <div className="menu-item">projects</div>
          <div className="menu-item">about</div>
          <div className="menu-item">contact</div>
        </div>
      </div>


      <div className="container">
        <div className="block b-1"></div>
        <div className="block b-2"></div>
        <div className="block b-3"></div>
        <div className="block b-4"></div>
        <div className="block b-5"></div>
        <div className="block b-6"></div>
        <div className="block b-7"></div>
      </div>

      <div className="overlay"></div>

      <p className="title">Reach the fullest</p>

    </div>
  )
}

export default Landing2