import './App.css';
import {useState} from "react"

function App() {

  const [count,setCount] = useState(0)
  setTimeout(() => setCount(1) ,5000)

  return (
    <div className="App">
      <h1>Task Manager</h1>
      <div className="newTask">
        <input type="text"/>
        <button>✔️</button>
      </div>
      {count>0 && <div className="glassDiv">
        
      </div>}
    </div>
  );
}

export default App;