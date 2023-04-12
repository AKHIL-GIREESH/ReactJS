import './App.css';
import ThumbNail from "./components/ThumbNail";
import Heading from './components/Header/Heading';
//import { useState } from 'react';

function App() {

  return (
    <div className="App">
      <Heading/>
      <div className='thumbNails'>
        <ThumbNail/>
      </div>
    </div>
  );
}

export default App;
