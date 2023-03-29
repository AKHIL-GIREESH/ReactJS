import { useState } from "react"
import "./Modal.css"

const Modal = () => {
    const [open,setOpen] = useState(false)

    const ModalWindow = () => {
        return(
            <>
                <div className="Overlay"></div>
                <div className="Modal">
                Modal
                <button onClick={() => setOpen(false)}>Close</button>
                </div>
            </>
        )
    }

    return (
        <>
        <button onClick={()=>{setOpen(true)}}>Open Modal</button>
        {open && <ModalWindow/>}
    </>
    )
}

export default Modal