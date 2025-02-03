import { useState } from "react"

type Props = {}

const TComponentArea = (props: Props) => {
  const [showArea,setShowArea] = useState(false)
  return (
    <>
      <div onDragEnter={() => setShowArea(true)} onDragLeave={() => setShowArea(false)} onDragOver={e => e.preventDefault()} style={showArea?{backgroundColor:"white",opacity:"50%",minHeight:"200px",width:"200px",color:"black"}:{opacity:0}}>Drop Here</div>
    </>
  )
}

export default TComponentArea