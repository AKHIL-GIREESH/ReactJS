import './App.css';
import {useState} from "react"

function App() {

  const [search,setSearch] = useState("")

  return (
    <div className="App">
      <h1>Playing with APIs</h1>
      <p>API+MERN</p>
      <input type="text" onChange={({target}) => setSearch(target.value)}></input>
      <button onClick={() => console.log(search)}>Search</button>
    </div>
  );
}

export default App;