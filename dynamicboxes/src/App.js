import { useState } from 'react';
import './App.css';
import box from './boxes';
import RenderBoxes from './renderBoxes';

function App() {

  const [boxes,setBoxes] = useState(box)

  const changeShade = (id) => {
    setBoxes(element => {
      return element.map((item) => {
      if (item.id === id){
          return {
            ...item,
            state:!item.state,
              }
        }else{
          return item
    }})
  }
  )
}

  const renderr = boxes.map(item => <RenderBoxes key={item.id} className="box" state={item.state} onClick={()=> changeShade(item.id)} style={item.state?{backgroundColor:"white"}:{backgroundColor:"black",color:"white"}}/>)
  return (
    <div className="App">
      <h1>Dynamic Boxes </h1>
        <div className='Boxes'>{renderr}</div>
    </div>
  );
}

export default App;