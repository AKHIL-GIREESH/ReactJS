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
            <button onClick={() => update([...state,1])}>
                Component
            </button>
            <button>
                Element
            </button>
        </div>
    )
}

export default Sidebar