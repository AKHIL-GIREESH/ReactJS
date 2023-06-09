import './App.css';
import {useEffect, useState} from "react"
import Tasks from './tasks';

function App() {

  const [data,setData] = useState()
  //setTimeout(() => setCount(1) ,5000)
  useEffect(() => {
    fetch("http://localhost:3001/api/v1/tasks",{ mode: 'cors' })
    .then(resp => resp.json())
    .then(data => setData(data.task))
    .catch(error => console.log(error))
  },[])

  // const modifyTask = () => {
  //   fetch(`http://localhost:3001/api/v1/tasks/${hell}`)
  // }

  let rowList = data?.map(element => {
    return( 
        <Tasks element={element}/>
        // <div className='newTask' key={element._id}>
        //   <input type="text" value={element.task}/>
        //   {<button className='saveButton' onClick={modifyTask}>Save</button>}
        //   {element.condition?<input type="checkbox" checked></input>:<input type="checkbox"></input>}
        //   <button>🗑️</button>
        // </div>
      )
    });

  return (
    <div className="App">
      <h1>Task Manager</h1>
      <div className="newTask">
        <input type="text"/>
        <button>✔️</button>
      </div>
      {data && <div className="glassDiv">
        {rowList}
      </div>}
    </div>
  );
}

export default App;