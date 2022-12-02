import gsap from 'gsap';
import React, { useRef } from 'react'
import { useIsomorphicLayoutEffect } from 'usehooks-ts';
import { ScrollTrigger } from "gsap/ScrollTrigger";


function Scrolltrigger() {

  gsap.registerPlugin(ScrollTrigger);

    const t1 = gsap.timeline();
 
    let scrollRef = useRef(null);

    useIsomorphicLayoutEffect(() => {
        let ctx = gsap.context(() => {
        t1.to('.box-3', {
            scrollTrigger: {
                trigger: '.box-3',
                start: "top center",
                end: "bottom 200px",
                scrub: 1,
                pin: '.ghost',
                markers: true
              },
            duration: 3,
            x: 800,
            y: 300,
            rotation: 360,
            backgroundColor: 'purple',
            
        });
        gsap.utils.toArray('.section').forEach((section, i) => {
            ScrollTrigger.create({
                trigger: section,
                start: 'top top',
                pin: true,
                pinSpacing: false
            })
        })
    }, scrollRef); // <- scopes all selector text to the root element

    return () => ctx.revert();
    }, );


  return (
    <div className='scroll-trigger' ref={scrollRef}>
        <div className="section section-1">
            <div className="box box-1"></div>
        </div>

        <div className="section section-2">
            <div className="box box-2"></div>
        </div>

        <div className="section section-3">
            <div className="cor">
            <div className="box box-3"></div>
            <div className="box ghost"></div>
            </div>
            
        </div>

        <div className="section section-4">
            <div className="box box-4"></div>
        </div>

        
    </div>
  )
}

export default Scrolltrigger