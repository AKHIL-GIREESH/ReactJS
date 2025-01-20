import { useContext } from "react"
import { EditorContext } from "../providers/editorProvider"

const Playground = () => {
    const editorState = useContext(EditorContext)
    console.log(editorState?.state)
    return(
        <div style={{width:"80vw",height:"100vh"}}>
            <div style={{display:"flex",border:"1px solid",width:"70vw",marginLeft:"5vw",height:"80vh"}}>
                <div style={{border:"1px solid",width:"50%",height:"100%"}}>
                    <div draggable style={{backgroundColor:"white",height:"50px",width:"50px"}}></div>
                    <br/>
                    <div draggable style={{backgroundColor:"white",height:"50px",width:"50px"}}></div>
                    <br/>
                    <div draggable style={{backgroundColor:"white",height:"50px",width:"50px"}}></div>
                    <br/>
                </div>
                <div>
                    <div draggable style={{backgroundColor:"white",height:"50px",width:"50px"}}></div>
                    <br/>
                    <div draggable style={{backgroundColor:"white",height:"50px",width:"50px"}}></div>
                    <br/>
                    <div draggable style={{backgroundColor:"white",height:"50px",width:"50px"}}></div>
                    <br/>
                </div>
            </div>
        </div>
    )
}

export default Playground