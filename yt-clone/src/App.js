import './App.css';
//import ThumbNail from "./components/ThumbNail";
import Heading from './components/Header/Heading';
import SandwitchMenu from './components/SandwitchMenu/SandwitchMenu';
import { Routes,Route } from 'react-router';
//import { useState } from 'react';
import Home from './components/Home';
import Liked from './components/Liked';
import History from './components/History';

function App() {

  return (
    <div className="App">
      <Heading/>
      <div>
        <Routes>
          <Route path="/" element={<SandwitchMenu/>}>
            <Route path='/Home' element={<Home/>}></Route>
            <Route path="/History" element={<History/>}/>
            <Route path='/Liked' element={<Liked/>}></Route>
          </Route>
        </Routes>
      </div>
      {/* <div className='thumbNails'>
        <ThumbNail/>
      </div> */}
    </div>
  );
}

export default App;
