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
      <div>
        <h1>Page 1</h1>
        <img></img>
      </div>
      <div>
        <h1>Page 2</h1>
      </div>
    </>
  )
}

export default App