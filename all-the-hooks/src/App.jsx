import { useState,useCallback } from 'react'
import './App.css'
import Search from './Search.jsx'
import TextUI from './textUIMemo'

function App() {
  
  let names = ["Alice", "Bob", "Charlie", "David", "Emma", "Frank", "Jack"]

  const [data,setData] = useState(names)
  const [counter,setCounter] = useState(0)

  const handleChange = useCallback((val) => {
    setData(names.filter(item => item.includes(val)))
  },[data])

  return (
    <>
      <h1>ALL THE HOOKS</h1><br/>
      {counter}<br/>
      <button onClick={() => setCounter(prev => prev+1)}>INCREMENT</button><br/>
      <Search onChange={handleChange}/><br/>
      {data}<br/>
      <TextUI/>
    </>
  )
}

export default App