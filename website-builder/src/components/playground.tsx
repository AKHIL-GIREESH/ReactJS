import { useContext, useState } from "react"
import { EditorContext } from "../providers/editorProvider"

const Playground = () => {
    const editorState = useContext(EditorContext)
    console.log(editorState?.state)

    const [card, setCard] = useState<null | Number>(null)
    const [cards,setCards] = useState<null | Number[]>([1,2,3,4,5,6])

    return(
        <div style={{width:"80vw",height:"100vh"}}>
            <div style={{display:"flex",border:"1px solid",width:"70vw",marginLeft:"5vw",height:"80vh"}}>
                <div style={{border:"1px solid",width:"50%",height:"100%"}}>
                    <div draggable style={{backgroundColor:"white",height:"50px",width:"50px"}} onDragStart={() => setCard(1)} onDragEnd={() => setCard(null)}></div>
                    <br/>
                    <div draggable style={{backgroundColor:"white",height:"50px",width:"50px"}} onDragStart={() => setCard(2)} onDragEnd={() => setCard(null)}></div>
                    <br/>
                    <div draggable style={{backgroundColor:"white",height:"50px",width:"50px"}} onDragStart={() => setCard(3)} onDragEnd={() => setCard(null)}></div>
                    <br/>
                </div>
                <div>
                    <div draggable style={{backgroundColor:"white",height:"50px",width:"50px"}} onDragStart={() => setCard(4)} onDragEnd={() => setCard(null)}></div>
                    <br/>
                    <div draggable style={{backgroundColor:"white",height:"50px",width:"50px"}} onDragStart={() => setCard(5)} onDragEnd={() => setCard(null)}></div>
                    <br/>
                    <div draggable style={{backgroundColor:"white",height:"50px",width:"50px"}} onDragStart={() => setCard(6)} onDragEnd={() => setCard(null)}></div>
                    <br/>
                </div>
            </div>
        </div>
    )
}

export default Playground