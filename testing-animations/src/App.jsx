import { useState, useRef,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import SplitType from 'split-type'
gsap.registerPlugin(ScrollTrigger)

function App() {

  useEffect(() => {
    // Register ScrollTrigger plugin
    //gsap.registerPlugin(ScrollTrigger);

    // Select all elements with the class 'reveal-type'
    const splitTypes = document.querySelectorAll('.reveal-type');

    // Loop through each element
    splitTypes.forEach((char, i) => {
        const bg = char.dataset.bgColor;
        const fg = char.dataset.fgColor;

        // Create a SplitType instance (replace with your implementation)
        const text = new SplitType(char,{types:'chars'})//new SplitType(char, { types: 'chars' });

        // Animate color change using GSAP
        gsap.fromTo(
            text.chars,
            {
                color: bg,
            },
            {
                color: fg,
                duration: 0.3,
                stagger: 0.02,
                scrollTrigger: {
                    trigger: char,
                    start: 'top 80%',
                    end: 'top 20%',
                    scrub: true,
                    markers: false,
                    toggleActions: 'play play reverse reverse',
                },
            }
        );
    });
}, []);



  return(
    <>
      <section>
        <h1>Scroll down for awesomeness.</h1>
      </section>

      <section>
          <p class="reveal-type" data-bg-color="#cccccc" data-fg-color="teal">Systematically ushering in a new generation of amazing designers from across the globe.</p>
      </section>

      <section>
          <p class="reveal-type" data-bg-color="#b6b600" data-fg-color="black">Modern UI designers will expand their skillsets to include frontend.</p>
      </section>

      <section>
          <p class="reveal-type" data-bg-color="#353535" data-fg-color="red">The web isn't static anymore, interactivity and motion now dominate.</p>
      </section>

      <section></section>
    </>
  )
}

export default App
