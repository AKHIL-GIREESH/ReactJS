import './App.css';
import ThumbNail from "./components/ThumbNail";
import Heading from './components/Header/Heading';
import SandwitchMenu from './components/SandwitchMenu/SandwitchMenu';
//import { useState } from 'react';

function App() {

  return (
    <div className="App">
      <Heading/>
      <div>
        <SandwitchMenu/>
      </div>
      <div className='thumbNails'>
        <ThumbNail/>
      </div>
    </div>
  );
}

export default App;
