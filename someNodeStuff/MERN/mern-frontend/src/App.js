import './App.css';
import {useState} from "react"

function App() {

  const [search,setSearch] = useState("")
  console.log(search)

  return (
    <div className="App">
      <h1>Playing with APIs</h1>
      <p>API+MERN</p>
      <input type="text" onChange={(e) => setSearch(e.target.value)}></input>
      <button>Search</button>
    </div>
  );
}

export default App;