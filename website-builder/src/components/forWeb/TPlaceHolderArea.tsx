import { useState } from "react"
import { useGetStyles } from "../../hooks/getStyles"

const TPlaceHolderArea = ({parent, id}:{parent:string, id:string}) => {
  const [showArea,setShowArea] = useState(false)

  const style = useGetStyles()

  return (
      <div id={id} onDrop={() => console.log("id:"+id+" parent:"+parent)} onDragEnter={() => setShowArea(true)} onDragLeave={() => setShowArea(false)} onDragOver={e => e.preventDefault()} style={showArea?style:{opacity:0}}>
        Drop Here
      </div>

  )
}

export default TPlaceHolderArea