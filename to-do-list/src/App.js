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
    console.log(element)
    setToDos(prev => prev.filter(item => item !== element));
}

  const Lists = () => {
    return(toDos.map((element)=>{
      return(
        <div className='addedItems' key={toDos.indexOf(element)}>
          <p>{element}</p>
          <button onClick={() => removeToDos(element)}>🗑️</button>
        </div>
      )
    }))
  }

  return (
    <div className="App">
      To-Do List
      <div className='inputArea'>
        <input type="text" name="input" onChange={event=>setNewToDo(event.target.value)} value={newToDo}></input>
        <button onClick={addToDos}> + </button>
      </div>
      <Lists/>
    </div>
  );
}

export default App;