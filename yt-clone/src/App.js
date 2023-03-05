import './App.css';
import ThumbNail from "./components/ThumbNail";

function App() {
  return (
    <div className="App">
      <div className='header'>
        <input placeholder='Search'></input>
      </div>
      <div className='thumbNails'>
        <ThumbNail/>
        <ThumbNail/>
      </div>
    </div>
  );
}

export default App;
