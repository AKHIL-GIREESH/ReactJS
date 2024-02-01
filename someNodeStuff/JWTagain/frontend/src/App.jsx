import { useState } from 'react'
import './App.css'

function App() {
  const [signup, setSignup] = useState({
    username:"",
    password:""
  })

  const handleChange = ({target}) => {
    const { name, value } = target;
    console.log(value)
    setSignup({ ...signup, [name]: value });
  }

  return (
    <>
      <input type="text" name="username" value={signup.username} onChange={handleChange}></input><br/><br/>
      <input type="text" name="password" value={signup.password} onChange={handleChange}></input><br/><br/>
      <button>Submit</button>
    </>
  )
}

export default App