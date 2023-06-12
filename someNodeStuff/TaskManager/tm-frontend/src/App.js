import './App.css';
import {useEffect, useState} from "react"
import Tasks from './tasks';
import CustomAPI from './CustomAPI';

function App() {

  const [data,setData] = useState();
  const [newTask,setNewTask] = useState("")
  const [renderflag,setRenderFlag] = useState(false)
  //setTimeout(() => setCount(1) ,5000)

  const reRenderFunc = () => {
    setRenderFlag(!renderflag)
  }

  useEffect(() => {
    fetch("http://localhost:3001/api/v1/tasks",{ mode: 'cors' })
    .then(resp => resp.json())
    .then(data => setData(data.task))
    .catch(error => console.log(error))
  },[renderflag])

  // const modifyTask = () => {
  //   fetch(`http://localhost:3001/api/v1/tasks/${hell}`)
  // }

  let rowList = data?.map(element => {
    return(
        <Tasks element={element} reRenderFunc={reRenderFunc}/>
    //     {/* // <div className='newTask' key={element._id}>
    //     //   <input type="text" value={element.task}/>
    //     //   {<button className='saveButton' onClick={modifyTask}>Save</button>}
    //     //   {element.condition?<input type="checkbox" checked></input>:<input type="checkbox"></input>}
    //     //   <button>🗑️</button>
    //     // </div>
    //   )
    // } */}
  )});

  const createNewTask = () => {
    // fetch(`http://localhost:3001/api/v1/tasks`,{
    //         method:"POST",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify({
    //             task:newTask
    //         })
    //     }
    //     )
    //     .then(resp => resp.json())
    //     .then(data => console.log(data))
    //     .then(() => setRenderFlag(!renderflag))
    //     .then(() => setNewTask(""))
    //     .catch(err => console.log(err))

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