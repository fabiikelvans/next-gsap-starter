import React, { useRef, useEffect } from 'react';
import {gsap} from 'gsap';
import { useIsomorphicLayoutEffect } from 'usehooks-ts'


function Paragraph() {

    const text = gsap.timeline();
 
    let lineRef = useRef(null);

    useIsomorphicLayoutEffect(() => {
        let ctx = gsap.context(() => {
        text.from('.line span', {
            duration: 1.8,
            y: 200,
            ease: "power4.out",
            delay: 1,
            skewY: 10,
            stagger: {
                amount: 0.4
            }
        });
    }, lineRef); // <- scopes all selector text to the root element

    return () => ctx.revert();
    }, )
    

  return (
    <div className="paragraph">
        <div ref={lineRef} className='paragraph__wrapper'>
        <div className="line">
            <span >Making the world a beautiful place using code. </span>
        </div>
        <div className="line">
            <span>Making the world a beautiful place using code. </span>
        </div>
        <div className="line">
            <span>Making the world a beautiful place using code. </span>
        </div>
        <div className="line">
            <span>Making the world a beautiful place using code. </span>
        </div>
        <div className="line">
            <span>Making the world a beautiful place using code. </span>
        </div>
    </div>
    </div>
  )
}

export default Paragraph