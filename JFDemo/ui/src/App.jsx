import { useEffect, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)
import './App.css'

function App() {

  useEffect(() => {
    gsap.fromTo("img",{
      opacity:0,
      scale:0
    },{
      opacity:1,
      scale:10,
      scrollTrigger:{
        trigger:"img",
        start:"80% top%",
        scrub:true,
        markers:true,
        toggleActions:"restart none none none"}
    })
  },[])
  
  return(
    <>
      <div className='top-layer'>
        <h1>Page 1</h1>
        <img src="https://i.ytimg.com/vi/oAUebVIb-7s/maxresdefault.jpg" style={{clipPath:"circle(10% at 50% 50%)"}}></img>
      </div>
      <div className='bottom-layer'>
        {/* <h1>Page 2</h1> */}
      </div>
      <div className='bottom-layer'>
        <h1>Page 2</h1>
      </div>
    </>
  )
}

export default App