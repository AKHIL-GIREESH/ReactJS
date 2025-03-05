import { useContext, useState } from "react"
import { useGetStyles } from "../../hooks/useGetStyles"
import { EditorContext } from "../../providers/editorProvider"

const TPlaceHolderArea = ({parent, id,index}:{parent:string, id:string,index:number}) => {
  const [showArea,setShowArea] = useState(false)

  const editorContext = useContext(EditorContext)

  if (!editorContext){
    throw new Error("Not initialised")
  }

  const {action} = editorContext

  const style = useGetStyles()

  return (
      <div id={id} onDrop={() => action({type:"addElement",parent:parent,index:index})} onDragEnter={() => setShowArea(true)} onDragLeave={() => setShowArea(false)} onDragOver={e => e.preventDefault()} style={showArea?style:{opacity:0}}>
        Drop Here
      </div>

  )
}

export default TPlaceHolderArea