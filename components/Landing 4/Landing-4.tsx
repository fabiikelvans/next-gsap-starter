import React, { useRef, useEffect } from 'react';
import {gsap, Expo} from 'gsap';
import { useIsomorphicLayoutEffect } from 'usehooks-ts'

function Landing4() {

    const t1 = gsap.timeline();

    let mainRef = useRef(null);

    useIsomorphicLayoutEffect(() => {
        let ctx = gsap.context(() => {
        t1.from('.ml12', {
            duration: 3,
            translateY: 100,
            translateZ: 0,
            ease: Expo.easeInOut,
            delay: 1,
            skewY: 10,
            opacity: 0,
            stagger: {
                amount: 0.4
            }
        })
        .from('.left', {
            left: "-50%",
            duration: 3,
            ease: Expo.easeInOut,
            delay: .25
        }, '-=2.5')
        .from('.images > div', {
            duration: 1,
            y: 60,
            opacity: 0,
            ease: Expo.easeInOut,
            delay: 0,
            stagger: {
                amount: 2
            }
        }, '-=1.5')
        .from('.header > p', {
            duration: 2,
            y: 60,
            opacity: 0,
            ease: Expo.easeInOut,
            delay: 0,
            stagger: {
                amount: 2
            }
        })
    }, mainRef); // <- scopes all selector text to the root element

    return () => ctx.revert();
    }, )


  return (
    <div className='landing-4' ref={mainRef}>
        <div className="container">
            <div className="left column">
                <div className="header">
                    <p>boundary supply</p>
                    <p>
                        better than brand new second hand clothing / 
                        focus by sick apparel everyday.
                    </p>
                    <p>home of (23-29)</p>
                </div>
                <div className="link"><a href="#">all products</a></div>
            </div>

            <div className="right column">
                <div className="images">
                    <div className="img-1 img"></div>
                    <div className="img-2 img"></div>
                    <div className="img-3 img"></div>
                    <div className="img-4 img"></div>
                </div>
                <div className="header">
                    <h1 className="ml12">gorgeous</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Landing4