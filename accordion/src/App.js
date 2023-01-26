import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [joke,setJoke] = useState({
    firstField: "",
    secondField:"",
    image:""
  })

  const [meme,setMeme] = useState([])

  const modifyFields = (event) => {
    setJoke((prev)=> 
    {
      return {
      ...prev,
        [event.target.name] : event.target.value 
    }}
  )}

  useEffect(()=>{
    fetch("https://api.imgflip.com/get_memes")
    .then(ob => ob.json())
    .then(data => setMeme(data.data.memes))
  },[])

  const generateMemeImage = () => {
    const randomNumber = Math.floor(Math.random() * meme.length)
    const url = meme[randomNumber].url
    setJoke(prev => ({
      ...prev,
      image : url
    }))
        
  }

  return (
    <div className="App">
      <header>
        <h3>Meme Generator</h3>
        <h3>A React project</h3>
      </header>

      <div className='activity'>
        <div className='textInputField'>
          <input type="text" onChange={modifyFields} name="firstField" value={joke.firstField}></input>
          <input type="text" onChange={modifyFields} name="secondField" value={joke.secondField}></input>
        </div>
        <button onClick={generateMemeImage}>Generate Meme</button>
      </div>

      <div>
        FirstDiv{joke.firstField}<br/>
        SecondDiv{joke.secondField}
        <img src={joke.image} alt="randomMeme" width="100px"/>
      </div>

    </div>
  );
}

export default App;
