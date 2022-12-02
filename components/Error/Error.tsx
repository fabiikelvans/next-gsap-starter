import React, { useState, useEffect, useRef } from 'react';
import { gsap, Expo } from 'gsap';


import { useIsomorphicLayoutEffect } from 'usehooks-ts'

function Error() {


    let errorRef = useRef(null);

    const t1 = gsap.timeline();

    useIsomorphicLayoutEffect(() => {
        let ctx = gsap.context(() => {
    
          t1.from('.navbar > div', {
            y: 60,
            duration: 1.6,
            delay: 2.4,
          })
          .from('.site-logo', {
            opacity: 0,
            y: 40,
            ease: Expo.easeInOut,
            duration: 1.6,
            delay: 0.4,
          })
          .from('.header > span', {
            top: "-100vh",
            ease: "bounce.out",
            duration: 1.5,
            stagger: 0.2
          })
          .to('.footer span', {
            y: -40,
            duration: 0.4,
            delay: 0.4,
            ease: Expo.easeInOut,
          })
          
    
        }, errorRef); // <- scopes all selector text to the root element
    
        return () => ctx.revert();
        }, [])

  return (
    <div className='error' ref={errorRef}>
        <div className="container">
            <div className="site-logo"></div>
            <div className="navbar">
                <div className="site-info">Reality, Elevated</div>
                <div className="site-menu">
                    <div className="menu-item">Projects</div>
                    <div className="menu-item">About</div>
                    <div className="menu-item">Contact</div>
                </div>
            </div>

            <div className="header-container">
                <div className="header">
                    <span>4</span>
                    <span>0</span>
                    <span>4</span>
                </div>
            </div>

            <div className="footer">
                <span>Seems you are lost, come back <u>Home</u></span>
                <div className="footer-wrapper"></div>
            </div>
        </div>
    </div>
  )
}

export default Error