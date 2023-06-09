import './App.css';
import {useEffect, useState} from "react"

function App() {

  const [data,setData] = useState()
  //setTimeout(() => setCount(1) ,5000)
  useEffect(() => {
    fetch("http://localhost:3001/api/v1/tasks",{ mode: 'cors' })
    .then(resp => resp.json())
    .then(data => setData(data.task))
    .catch(error => console.log(error))
  },[])

  let rowList = data?.map(element => {
    return( 
        <div className='newTask'>
          <input type="text" value={element.task}/>
          <button>✔️</button>
        </div>
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