import { useState } from "react"
import { useGetStyles } from "../../hooks/useGetStyles"

const TPlaceHolderArea = ({parent, id,index}:{parent:string, id:string,index:number}) => {
  const [showArea,setShowArea] = useState(false)

  const style = useGetStyles()

  return (
      <div id={id} onDrop={() => console.log("id:"+id+" parent:"+parent+" index: "+index)} onDragEnter={() => setShowArea(true)} onDragLeave={() => setShowArea(false)} onDragOver={e => e.preventDefault()} style={showArea?style:{opacity:0}}>
        Drop Here
      </div>

  )
}

export default TPlaceHolderArea