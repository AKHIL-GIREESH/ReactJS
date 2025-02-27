import { useContext, useState } from "react"
import { SideBarDrag } from "../../providers/editorProvider"
import { elementKind } from "../../types/editor"

//type Props = {}

const TPlaceHolderArea = ({parent, id}:{parent:string, id:string}) => {
  const [showArea,setShowArea] = useState(false)

  const sideBarSelectionContext = useContext(SideBarDrag)

  if(sideBarSelectionContext == null){
    throw new Error("Error")
  }

  const {state} = sideBarSelectionContext

  const selectStyle = (state:elementKind | null) => {
    if(state == "Container"){
      return {border:"1px solid",minHeight:"200px",width:"200px",height:"fit-content",backgroundColor:"white",opacity:"50%",color:"black"}
    }else if(state == "Elem"){
      return {backgroundColor:"white",opacity:"50%",minHeight:"20px",width:"155px",color:"black"}
    }else{
      return {

      }
    }
  }

  // styles = {
  //   ...styles,
  //   backgroundColor:"white",
  //   opacity:"50%",
  //   color:"black"
  // }
  return (
      <div id={id} onDragEnter={() => setShowArea(true)} onDragLeave={() => setShowArea(false)} onDragOver={e => e.preventDefault()} style={showArea?selectStyle(state):{opacity:0}}>
        Drop Here
      </div>

  )
}

export default TPlaceHolderArea