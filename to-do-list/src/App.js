import { useState } from 'react';
import './App.css';

function App() {

  const [newToDo,setNewToDo] = useState("")
  const [toDos,setToDos] = useState([])

  const addToDos = () => {
    setToDos((prev)=>[...prev,newToDo])
    setNewToDo("")
  }

  const removeToDos = (element) => {
    setToDos(prev => prev.filter(item => item !== element));
}

  const Lists = () => {
    return(toDos.map((element)=>{
      return(
        <div className='addedItems' key={toDos.indexOf(element)}>
          <p>{element}</p>
          <button className='buttons' onClick={() => removeToDos(element)}>🗑️</button>
        </div>
      )
    }))
  }

  return (
    <div className="App">
      <h1>TO-DO LIST</h1>
      <div className='inputArea'>
        <input type="text" name="input" onChange={event=>setNewToDo(event.target.value)} value={newToDo}></input>
        <button onClick={addToDos} className="button"> ➕ </button>
      </div>
      <Lists/>
    </div>
  );
}

export default App;