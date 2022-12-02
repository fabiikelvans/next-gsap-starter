import React, { useRef, useEffect } from 'react';
import {gsap} from 'gsap';
import { useIsomorphicLayoutEffect } from 'usehooks-ts'

function ImageFollow() {

    let cursor = useRef(null);
    let posX = 0;
    let posY = 0;
    let mouseX = 0;
    let mouseY = 0;

    const t1 = gsap.timeline();
    const t2 = gsap.timeline();

    let mainRef = useRef(null);

    useEffect(() => {
        t1.to({}, {
            duration: 0.016,
            repeat: -1,
            onRepeat: function () {
                posX += (mouseX-posX) / 10;
                posY += (mouseY-posY) / 10;
                t1.set('.cursor-follow',{
                    css: {
                        left: posX - 50,
                        top: posY - 50,
                    }
                })
            }
        })
        document.addEventListener('mousemove', function (e:any) {
            mouseX = e.pageX;
            mouseY = e.pageY;
        })
    },[])
   

    useIsomorphicLayoutEffect(() => {
        let ctx = gsap.context(() => {
        t2.from('.content h1', {
            duration: 2,
            y: 100,
            ease: "power4.out",
            delay: .3,
            skewY: 8,
            opacity: 0,
            stagger: {
                each: .4,
                from: "end"
            }
        })
        .from('.cursor-follow', {
            duration: 1.5,
            delay: 1,
            opacity: 0,
            scale: 1,
        }, "-=1")
    }, mainRef); // <- scopes all selector text to the root element

    return () => ctx.revert();
    }, );


  return (
    <div className='image-follow' ref={mainRef}>
        <div className="content">
            <h1>Savage</h1>
            <h1>Shady</h1>
            <h1>Sensitive</h1>
        </div>
        <div className="cursor-follow" ref={cursor}></div>
    </div>
  )
}

export default ImageFollow