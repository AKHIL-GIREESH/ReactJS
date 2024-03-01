import { useEffect } from "react"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)

const App = () => {

  useEffect(() => {
    let tlm1 = gsap.timeline()
    tlm1.fromTo(
      '.hero',
      {
          opacity:0,
          scale:1,
      },
      {
        opacity:1,
          scale:3,
          // duration: 0.3,
          scrollTrigger: {
              trigger: '.hero',
              start: 'top 60%',
              end: 'top 20%',
              scrub: true,
              markers: true,
              toggleActions: 'reverse none none none',
          },
      }
  );
  tlm1.to('.hero',{
        backgroundColor:"red",
        scrollTrigger: {
          trigger: '.hero',
          start: 'top 20%',
          end: 'top 10%',
          scrub: true,
          markers: true,
          toggleActions: 'reverse none none none',
      }
  })
  },[])
  return(
    <>
      <h1>App</h1>
      <div className="notHero" style={{height:"200vh", width:"100vw",backgroundColor:"black",display:"flex",justifyContent:"center",alignItems:"center"}}>
      <div className="hero" style={{height:"10vh", width:"10vh",backgroundColor:"white",zIndex:2,position:"sticky",top:"50vh"}}></div>
      </div>
    </>
  )
}

export default App