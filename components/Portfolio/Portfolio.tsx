import React, { useState, useEffect, useRef } from 'react';
import { gsap, Expo } from 'gsap';
import { useIsomorphicLayoutEffect } from 'usehooks-ts';

function Portfolio() {


    let mainRef = useRef(null);

    const t1 = gsap.timeline();

    useIsomorphicLayoutEffect(() => {
        let ctx = gsap.context(() => {
    
          t1.from('.line p', {
            y: 250,
            skewY: 15,
            duration: 2.8,
            delay: 2.4,
            stagger: {
                amount: .8
            }
          })
          .to('.portfolio', {
            backgroundColor: '#c9c9c9',
            duration: 1.8
          })
          .to('.line p a', {
            color: 'black',
            duration: 1.5,
          }, '-=1.8')
          .from('.logo, .ul li', {
            y: "-280%",
            duration: 1.2,
            stagger: {
                amount: .4
            },
            ease: Expo.easeInOut,
          })
          

    
        }, mainRef); // <- scopes all selector text to the root element
    
        return () => ctx.revert();
        }, []);



        useEffect(() => {
            let cursor = document.querySelectorAll('.cursor');

            let posX = 0
            let posY = 0
            let mouseX = 0
            let mouseY = 0
    
            gsap.to({}, 0.016, {
                repeat: -2,
                onRepeat: function(){
                    posX + (mouseX - posX) / 10;
                    posY + (mouseY - posY) / 10;
                    gsap.set(cursor, {
                        css: {
                            left: posX - 80,
                            top: posY - 80,
                        }
                    });
                }
            });


            document.addEventListener("mousemove", {
                function (e) {
                    mouseX = e.pageX;
                    mouseY = e.pageY;
                }
            })

        }, [])
        
    

        

  return (
    <div ref={mainRef}>

    
    <div className='portfolio' >
        <div className="menu">
            <div className="logo">
            <a href="">LOGO</a>
            </div>
        
        <ul className="ul">
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </div>

    <div className="container" id="home">
        <div className="main-text">
            <div className="line line1">
                <p><a href="">Mothwash</a></p>
            </div>
            <div className="line line2">
                <p><a href="">Brutal</a></p>
            </div>
            <div className="line line3">
                <p><a href="">Fatality</a></p>
            </div>
            <div className="line line4">
                <p><a href="">Aesthetic</a></p>
            </div>

            <div className="cursor-follow1 cursor"></div>
            <div className="cursor-follow2 cursor"></div>
            <div className="cursor-follow3 cursor"></div>
            <div className="cursor-follow4 cursor"></div>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Portfolio