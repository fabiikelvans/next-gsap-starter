import React, { useRef } from 'react'
import { BiSearchAlt } from 'react-icons/bi'
import { useIsomorphicLayoutEffect } from 'usehooks-ts';
import { gsap, Expo } from 'gsap';


function Landing3() {

    
  let mainRef = useRef(null);

  const t1 = gsap.timeline();

  useIsomorphicLayoutEffect(() => {
      let ctx = gsap.context(() => {
  
        t1.to('.box', {
          y: "-100%",
          duration: 1.2,
          ease: Expo.easeInOut,
          delay: 0.4,
        })
        .to('.wrapper-img', {
            width: "400",
            height: "500",
            ease: Expo.easeInOut,
            duration: 1.4,
            delay: 1.6
          })
          .from(".img", {
            opacity: 0,
            duration: 0.4,
            ease: Expo.easeInOut,
            delay: 0.5,
          })
          .to(".left", {
              x: "-300",
              rotation: -10,
              ease: Expo.easeInOut,
              delay: 0,
              duration: 1
          })
          .to(".right", {
              x: "300",
              rotation: 10,
              ease: Expo.easeInOut,
              delay: 0,
              duration: 1
          })
        .from(".menu > div, .hero-container", {
            opacity: 0,
            y: 30,
            duration: 1.2,
            ease: Expo.easeInOut,
            delay: 0,
        })
        .from(".title", {
            translateY: 100,
            translateZ: 0,
            duration: 2,
            ease: Expo.easeInOut,
            delay: 0,
            opacity: 0
          })
        
        
  
      }, mainRef); // <- scopes all selector text to the root element
  
      return () => ctx.revert();
      }, [])


  return (
    <div className='landing-3' ref={mainRef}>
        <div className="container">
            <nav className="menu">
                <div className="menu-item menu-left">
                    <span className='menu-link'>about</span>
                    <span className='menu-link'>contact</span>
                </div>
                <div className="menu-item menu-center">
                    <div className="brand-logo">skeletons</div>
                </div>
                <div className="menu-item menu-right">
                    <div className="search-icon">
                        <BiSearchAlt/>
                    </div>
                </div>
            </nav>

            <div className="images">
                <div className="img left"></div>
                <div className="img right"></div>
            </div>

            <div className="hero-image">
                <div className="wrapper-img">
                    <div className="box"></div>
                    <div>
                        <img className='' src="https://images.unsplash.com/photo-1611558709798-e009c8fd7706?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=391&q=80" alt="" />
                    </div>
                </div>
            </div>

            <div className="header"><p className="title">antidote</p></div>

            <div className="hero-container">
                <div className="sidebar-tex">003</div>
                <div className="projec">projects</div>
                <div className="img-nav">
                    <div className="prev">prev</div>
                    <div className="next">next</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Landing3