import { createRoot } from 'react-dom/client'
import { Canvas, useFrame } from '@react-three/fiber'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect,useRef,useState } from 'react'
import globe from "../src/assets/globevid.mp4"
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)

function App() {
  const headingRef = useRef(null)
  const videoRef = useRef(null)

  // videoRef.current.pause()
  // videoRef.current.currentTime = 0

  // useEffect(() => {
    
  //   let tl = gsap.timeline({
  //     defaults: { duration: 60 },
  //     scrollTrigger: {
  //       trigger: "#container",
  //       start: "top top",
  //       end: "bottom bottom",
  //       scrub: true
  //     }
  //   }).fromTo(
  //     ".idk",
  //     {
  //       currentTime: 0
  //     },
  //     {
  //       currentTime: videoRef.current.duration || 3
  //     }
  //   );
  // },[])

  // videoRef.current.onloadedmetadata = function () {
  //   tl.to(videoRef.current, { currentTime: videoRef.current.duration });
  // };
//   const meshRef = useRef(null)

//   useFrame((state, delta) => (meshRef.current.rotation.x += delta))
//   const [hovered, setHover] = useState(false)
//   const [active, setActive] = useState(false)
//   return (
//     <mesh
//       {...props}
//       ref={meshRef}
//       scale={active ? 1.5 : 1}
//       onClick={(event) => setActive(!active)}
//       onPointerOver={(event) => setHover(true)}
//       onPointerOut={(event) => setHover(false)}>
//       <boxGeometry args={[1, 1, 1]} />
//       <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
//     </mesh>
//   )
// }

  // useEffect(() => {
  //   gsap.fromTo(headingRef.current,{opacity:0},{opacity:1,duration:5,scrollTrigger:{trigger:headingRef.current,toggleActions:"restart none reverse none"}})
  // },[])

  return (
    <>
      {/* <div style={{width:"100vw",height:"100vh"}}></div> */}
      {/* <h1 ref={headingRef}>Hello World</h1> */}
      <video autoPlay muted loop src={globe}  type="video/mp4" ref={videoRef} className="idk"></video>
      <div style={{width:"100vw",height:"500vh"}} id="container"></div>
      
    </>
      )
    }
export default App
