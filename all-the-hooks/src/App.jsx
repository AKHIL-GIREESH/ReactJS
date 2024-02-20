import { useState, } from 'react'
import './App.css'
import Search from './Search.jsx'

function App() {
  
  let names = ["Alice", "Bob", "Charlie", "David", "Emma", "Frank", "Jack"]

  const [data,setData] = useState(names)
  const [counter,setCounter] = useState(0)

  const handleChange = (val) => {
    setData(names.filter(item => item.includes(val)))
  }

  return (
    <>
      <h1>ALL THE HOOKS</h1><br/>
      {counter}<br/>
      <button onClick={() => setCounter(prev => prev+1)}>INCREMENT</button><br/>
      <Search onChange={handleChange}/><br/>
      {data}
    </>
  )
}

export default App