import { useState } from "react"

const Modal = () => {
    const [open,setOpen] = useState(false)

    const ModalWindow = () => {
        return(
            <>
                Modal
                <button onClick={() => setOpen(false)}>Close</button>
            </>
        )
    }

    return (
      <div className="App">
        <button onClick={()=>{setOpen(true)}}>Open Modal</button>
        {open && <ModalWindow/>}
      </div>
    )
}

export default Modal