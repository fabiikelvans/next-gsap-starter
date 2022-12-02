import React, { useState, useEffect, useRef } from 'react';
import { useIsomorphicLayoutEffect } from 'usehooks-ts'
import { gsap, Power3, Expo } from 'gsap';


function ImageReveal() {

    let imageRef = useRef(null);

    const t1 = gsap.timeline();


    useIsomorphicLayoutEffect(() => {
        let ctx = gsap.context(() => {
    
          t1.from('.navbar > div', {
            x: "-80",
            duration: 0.8,
            opacity: 0,
            delay: 1,
            ease: Power3.easeOut,
          }, 0.08)
          .from('.images > div', {
            x: "-80",
            duration: 0.8,
            opacity: 0,
            delay: 1,
            ease: Power3.easeOut,
          }, 0.08)
          .to('.navbar > div', {
            x: "80",
            duration: 0.8,
            opacity: 0,
            delay: 4,
            ease: Power3.easeOut,
          }, 0.04)
          .to('.images > div', {
            scale: "0",
            duration: 0.4,
            opacity: 0,
            delay: 4,
            ease: Power3.easeOut,
          }, 0.04)
          .to('.overlay', {
            top: "-100%",
            duration: 1.2,
            delay: 2,
            ease: Expo.easeOut,
          })
          .to('.header .title', {
            duration: 0.4,
            delay: 8,
            ease: Power3.easeOut,
          })
         
    
        }, imageRef); // <- scopes all selector text to the root element
    
        return () => ctx.revert();
        }, [])


  return (
    <div className="image-reveal">
        <div className='container' ref={imageRef}>
        <div className="overlay">
            <div className="images">
                <div className="img img-1"></div>
                <div className="img img-2"></div>
                <div className="img img-3"></div>
                <div className="img img-4"></div>
                <div className="img img-5"></div>
                <div className="img img-6"></div>
                <div className="img img-7"></div>
                <div className="img img-8"></div>
            </div>

            <div className="navbar">
                <div className="site-title">mike fury</div>
                <div className="site-icon">*</div>
                <div className="site-type">clothing brand</div>
            </div>
        </div>

        <div className='header'>
            <h1 className='title'>Hello World</h1>
        </div>
    </div>
    </div>
  )
}

export default ImageReveal