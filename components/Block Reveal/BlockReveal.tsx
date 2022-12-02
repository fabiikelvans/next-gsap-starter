import React, { useState, useEffect, useRef } from 'react';
import { gsap, Expo, Power1 } from 'gsap';

import { useIsomorphicLayoutEffect } from 'usehooks-ts'

function BlockReveal() {

    let blockRef = useRef(null);

    const t1 = gsap.timeline();

    useIsomorphicLayoutEffect(() => {
        let ctx = gsap.context(() => {
    
          t1.from('.block', {
            width: "0%",
            duration: 0.8,
            delay: 2,
            ease: Power1.easeIn,
          }, 0.04)
          .to('.loader', {
            opacity: 0,
            x: 2,
            ease: Expo.easeInOut,
            duration: 1,
            delay: 1.5,
          })
          .from(".nav > a, .about p, .sub-header > a", {
            duration: 2,
            opacity: 0,
            y: 30,
            ease: Expo.easeInOut,
            delay: 3,
          }, 0.06)
          .to(".box", {
            duration: 0.2,
            ease: Expo.easeInOut,
            delay: 3.8
          })
          .to(".img", {
            duration: 0.2,
            opacity: 1,
            ease: Expo.easeInOut,
            delay: 4
          })
          .to(".box", {
            duration: 2.4,
            y: "-100%",
            ease: Expo.easeInOut,
            delay: 4
          })
        
          
    
        }, blockRef); // <- scopes all selector text to the root element
    
        return () => ctx.revert();
        }, [])

  return (
    <div className='block-reveal' ref={blockRef}>
        <div className="wrapper">
            <div className="nav">
                <a href="#" className='link'>standard</a>
                <a href="#" className='link'>fancy mode</a>
                <a href="#" className='link'>menu</a>
            </div>

            <div className="about">
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id blanditiis, ipsa odit eveniet reiciendis quisquam sapiente delectus temporibus. Repudiandae ipsa neque minus expedita unde nisi deserunt veniam nesciunt enim vel?
                </p>
            </div>

            <div className="wrapper-img">
                <div className="box"></div>
                <div>
                    <img className='image' 
                    src="https://images.unsplash.com/photo-1668479242437-f4f70274660e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60" 
                    alt="image" />
                </div>
            </div>

            <div className="sub-header">
                <a href="#" className='contact-link'>&#8616; want to work with me</a>
                <a href="#" className='work-link'>my portfolio</a>
                <a href="#" className='work-link'>awards</a>
                <a href="#" className='about-me'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit pariatur corporis, quia quod eum, dolorum ea natus dolore accusantium rerum omnis veritatis soluta, incidunt voluptate! Cum saepe consectetur accusamus libero.</a>
            </div>
        </div>

         <div className="container">
            <div className="loader">loading</div>
            <div className="overlay">
                <div className="block block-1"></div>
                <div className="block block-2"></div>
                <div className="block block-3"></div>
                <div className="block block-4"></div>
                <div className="block block-5"></div>
                <div className="block block-6"></div>
                <div className="block block-7"></div>
                <div className="block block-8"></div>
                <div className="block block-9"></div>
                <div className="block block-10"></div>
                <div className="block block-11"></div>
                <div className="block block-12"></div>
                <div className="block block-13"></div>
                <div className="block block-14"></div>
                <div className="block block-15"></div>
                <div className="block block-16"></div>
                <div className="block block-17"></div>
                <div className="block block-18"></div>
                <div className="block block-19"></div>
                <div className="block block-20"></div>
            </div>
         </div>
    </div>
  )
}

export default BlockReveal