import { useState } from "react"
import "./Modal.css"

const Modal = () => {
    const [open,setOpen] = useState(false)

    const ModalWindow = () => {
                return(<>
                    <div className="Overlay"></div>
                    <div className="Modal">
                    Modal
                    <button onClick={() => setOpen(false)}>Close</button>
                    </div>
                </>
                )
        }

    const generateButtons = () => {
        let buttons = []
        for(let i=0;i<10;i++){
            buttons.push(<button key={i} onClick={()=>{setOpen(true)}}>Open Modal</button>)
        }
        return buttons
    }

    return (
        <>
        {generateButtons()}
        {open && <ModalWindow/>}
    </>
    )
}

export default Modal