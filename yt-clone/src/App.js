import './App.css';
import ThumbNail from "./components/ThumbNail";
import { useState } from 'react';

function App() {

  const [search,setSearch] = useState("")

  return (
    <div className="App">
      <div className='header'>
        <button>Snadwitch</button>
        <button>Logo</button>
        <input placeholder='Search' onChange={({target}) => setSearch(target.value)}></input>
        <button onClick={() => console.log(search)}>Search</button>
        <button>Profile</button>
      </div>
      <div className='thumbNails'>
        <ThumbNail/>
      </div>
    </div>
  );
}

export default App;
