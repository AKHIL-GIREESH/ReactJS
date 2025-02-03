import { useContext } from "react"
import { EditorContext } from "../providers/editorProvider"

const Sidebar = () => {
    const editorContext = useContext(EditorContext)
    if(!editorContext){
        throw new Error("error")
    }

    const {state,update} = editorContext
    console.log(state)

    return(
        <div style={{width:"10vw",border:"1px solid",height:"100vh"}}>
            <button onClick={() => update([...state,1])} draggable>
                Component
            </button>
            <button draggable>
                Element
            </button>
        </div>
    )
}

export default Sidebar