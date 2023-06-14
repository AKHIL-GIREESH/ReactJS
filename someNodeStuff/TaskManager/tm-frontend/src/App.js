import './App.css';
import {useEffect, useState} from "react"
import Tasks from './tasks';
import CustomAPI from './CustomAPI';

function App() {

  const [data,setData] = useState();
  const [newTask,setNewTask] = useState("")
  const [renderflag,setRenderFlag] = useState(false)

  const reRenderFunc = () => {
    setRenderFlag(!renderflag)
  }

  useEffect(() => {
    fetch("http://localhost:3001/api/v1/tasks",{ mode: 'cors' })
    .then(resp => resp.json())
    .then(data => setData(data.task))
    .catch(error => console.log(error))
  },[renderflag])

  let rowList = data?.map(element => {
    return(
        <Tasks element={element} reRenderFunc={reRenderFunc}/>
  )});

  const createNewTask = () => {
    CustomAPI("POST","",{task:newTask},reRenderFunc)
    .then(() => setNewTask(""))
  }

  return (
    <div className="App">
      <h1>Task Manager</h1>
      <div className="newTask">
        <input type="text" onChange={(e) => setNewTask(e.target.value)} value={newTask}/>
        <button onClick={createNewTask}>✔️</button>
      </div>
      {data && <div className="glassDiv">
        {rowList}
      </div>}
    </div>
  );
}

export default App;