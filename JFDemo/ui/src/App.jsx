import { useEffect, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)
import './App.css'

function App() {

  useEffect(() => {

  },[])
  
  return(
    <>
      <div className='top-layer'>
        <h1>Page 1</h1>
        <img></img>
      </div>
      <div className='bottom-layer'>
        <h1>Page 2</h1>
      </div>
      <div className='bottom-layer'>
        <h1>Page 3</h1>
      </div>
    </>
  )
}

export default App