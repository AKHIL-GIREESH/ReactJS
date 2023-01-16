import './App.css';
import { useState } from 'react';

function App() {

  const [val,setVal] = useState("")
  const [name,setName] =  useState("")

  const modifyName = (event) => {
    setVal(event.target.value)
  }

  const submitName = () => {
    setName(val)
    setVal("")
  }
  return (
    <div className='mainDiv'>
      <p>Hello {name}</p>
      <input type="text" placeholder='Enter the Text' onChange={modifyName} value={val}/>
      <button onClick={submitName}>Submit</button>
    </div>
  );
}

export default App;
