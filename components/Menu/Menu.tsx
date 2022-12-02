import React, { useRef, useEffect } from 'react';
import {Expo, gsap} from 'gsap';
import { useIsomorphicLayoutEffect } from 'usehooks-ts'

function Menu() {

    const t1 = gsap.timeline({ paused: true });

    let mainRef = useRef(null);

    useIsomorphicLayoutEffect(() => {
        let ctx = gsap.context(() => {
        t1.to('.nav-container', {
            duration: 1,
            left: 0,
            ease: Expo.easeInOut,
        })
        .from(".menu > div", {
            duration: 0.8,
            y: 100,
            opacity: 0, 
            ease: Expo.easeInOut
        }, "-=0.4")
        .from(".socials", {
            duration: 0.8,
            y: 100,
            opacity: 0,
            ease: Expo.easeInOut,
        }, "-=0.6")
       

    }, mainRef); // <- scopes all selector text to the root element

    return () => ctx.revert();
    }, );

    t1.reverse();

    function toggleMenu() {
        // @ts-ignore
        t1.reversed(!t1.reversed());
    }

  return (
    <div className='menu-wrapper' ref={mainRef}>
        <div className="menu-open" onClick={toggleMenu}>menu</div>
        <div className="nav-container">
            <div className="menu-close">close</div>
            <div className="socials">
                <span>facebook</span>
                <span>instagram</span>
            </div>

            <div className="menu">
                <div className="menu__item">
                    <a href="#" className="menu__item-link">Home</a>
                    <img src="https://images.unsplash.com/photo-1583766395091-2eb9994ed094?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG1vZGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" className="menu__item-img" alt="" />
                    <div className="marquee">
                        <div className="marquee__inner">
                            <span>Home - Home - Home - Home - Home - Home - Home - Home</span>
                        </div>
                    </div>
                </div>

                <div className="menu__item">
                    <a href="#" className="menu__item-link">Showcase</a>
                    <img src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fG1vZGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" className="menu__item-img" alt="" />
                    <div className="marquee">
                        <div className="marquee__inner">
                            <span>Showcase - Showcase- Showcase - Showcase - Showcase - Showcase - Showcase - Showcase</span>
                        </div>
                    </div>
                </div>

                <div className="menu__item">
                    <a href="#" className="menu__item-link">About</a>
                    <img src="https://images.unsplash.com/photo-1512316609839-ce289d3eba0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fG1vZGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" className="menu__item-img" alt="" />
                    <div className="marquee">
                        <div className="marquee__inner">
                            <span>About - About - About - About - About - About - About - About</span>
                        </div>
                    </div>
                </div>

                <div className="menu__item">
                    <a href="#" className="menu__item-link">Contact</a>
                    <img src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fG1vZGVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" className="menu__item-img" alt="" />
                    <div className="marquee">
                        <div className="marquee__inner">
                            <span>Contact - Contact - Contact - Contact - Contact - Contact - Contact - Contact</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Menu