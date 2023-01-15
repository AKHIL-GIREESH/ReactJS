import { useState } from 'react';
import './App.css';

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
    </div>
  )
}

export default App;
