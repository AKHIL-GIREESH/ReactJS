import { useState } from 'react';
import './App.css';
//import Stuff from './LiftingUpStates'

function App(){
  let currentTime = new Date().toLocaleTimeString()
  const [time,setTime] = useState(currentTime)

  const updateTime = () => {
    currentTime = new Date().toLocaleTimeString()
    setInterval(setTime(currentTime),1000)
  }

  setInterval(updateTime,1000)
  return(
    <div className = "displayTime">
      {time}
      {/* <Stuff/> */}
    </div>
  )
}

export default App;
