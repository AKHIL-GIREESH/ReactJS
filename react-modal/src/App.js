import { useState } from 'react';
import './App.css';
import Modal from "./Modal"

function App() {

  const [open,setOpen] = useState(false)

  const DisplayModal = () => {
    if (open){
      return(
        <Modal/>
      )
    }
  }

  return (
    <div className="App">
      <button onClick={()=>{setOpen((prev)=>!prev)}}>Open Modal</button>
      {DisplayModal()}
    </div>
  );
}

export default App;