import React, { useState, useEffect, useRef } from 'react';
import { gsap, Expo, Sine } from 'gsap';
import { useIsomorphicLayoutEffect } from 'usehooks-ts';

function Portfolio2() {

    let mainRef = useRef(null);

    const t1 = gsap.timeline();

    useIsomorphicLayoutEffect(() => {
        let ctx = gsap.context(() => {
    
          t1.to('.img', {
            y: 350,
            delay: 1,
            ease: Sine.easeInOut,
            stagger: {
                amount: 1.8,
                from: "end"
            }
          })
          .to('.imgHomeSpan', {
            scale: 1.4,
            ease: Sine.easeInOut,
            duration: 1
          })
          t1.from('.menu, .year', {
            y: "-50",
            stagger: {
                amount: .5
            }
          }, '-=1')
          
          

    
        }, mainRef); // <- scopes all selector text to the root element
    
        return () => ctx.revert();
        }, []);



  return (
    <div className='portfolio-2' ref={mainRef}>
        <header>
            <span>
                <div className="menu">Menu</div>
            </span>
            <span>
                <div className="header-name">Mikey</div>
            </span>
            <span>
                <div className="year">2022</div>
            </span>
        </header>

        <div className="container">
            <span className="images">
                <span className="imgHomeSpan">
                    <div className="imgHome img6"></div>
                </span>
                <span><div className="img img1"></div></span>
                <span><div className="img img2"></div></span>
                <span><div className="img img3"></div></span>
                <span><div className="img img4"></div></span>
                <span><div className="img img5"></div></span>
            </span>
        </div>

        <footer>
            <span>
                <div>Creative Developer</div>
            </span>
        </footer>
    </div>
  )
}

export default Portfolio2