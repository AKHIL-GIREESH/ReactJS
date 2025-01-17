import { useContext } from "react"
import { EditorContext } from "../providers/editorProvider"

const Playground = () => {
    const editorState = useContext(EditorContext)
    console.log(editorState?.state)
    return(
        <div style={{width:"80vw",height:"100vh"}}>

        </div>
    )
}

export default Playground