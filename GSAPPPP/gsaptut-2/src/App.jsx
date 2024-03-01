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
              end: 'top 40%',
              scrub: true,
              // markers: true,
              toggleActions: 'reverse none none none',
          },
      }
  );
  tlm1.fromTo('.hero',{
    scale:3,
  },{
        backgroundColor:"red",
        transform:"rotate(0deg)",
        scale:2.5,
        scrollTrigger: {
          trigger: '.hero',
          start: 'top 40%',
          end: 'top 10%',
          scrub: true,
          // markers: true,
          toggleActions: 'reverse none none none',
      }
  })

  gsap.fromTo('.notHero',{
    backgroundColor: "rgba(10, 255, 10, 0)",
    scale:0.5,
    transform:"rotate(30deg)"
  },{
    backgroundColor: "rgba(10, 255, 10, 1)",
    scale:1,
    transform:"rotate(0deg)",
    scrollTrigger: {
      trigger: '.hero',
      start: 'top 40%',
      end: 'top 10%',
      scrub: true,
      // markers: true,
      toggleActions: 'reverse none none none',
  }
  })
  },[])
  return(
    <>
      <h1>App</h1>
      <div style={{height:"200vh", width:"100vw",backgroundColor:"black",display:"flex",justifyContent:"center",alignItems:"center"}}>
        <div className="notHero" style={{height:"60vh", width:"60vw",backgroundColor:"green",display:"flex",justifyContent:"center",alignItems:"center",position:"sticky",top:"20vh"}}>
          <div className="hero" style={{height:"10vh", width:"10vh",backgroundColor:"white",zIndex:2,transform:"rotate(-30deg)"}}></div>
        </div>
      </div>
    </>
  )
}

export default App