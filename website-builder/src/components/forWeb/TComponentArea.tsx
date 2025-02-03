import React, { useState } from "react"

//type Props = {}

const TComponentArea = ({styles}:{styles:React.CSSProperties}) => {
  const [showArea,setShowArea] = useState(false)

  styles = {
    ...styles,
    backgroundColor:"white",
    opacity:"50%",
    color:"black"
  }
  return (
    <>
      <div onDragEnter={() => setShowArea(true)} onDragLeave={() => setShowArea(false)} onDragOver={e => e.preventDefault()} style={showArea?styles:{opacity:0}}>Drop Here</div>
    </>
  )
}

export default TComponentArea