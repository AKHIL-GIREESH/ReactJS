import { useState } from 'react'
import Sidebar from '../components/navbar'
import './App.css'

function App() {
  const [data, setData] = useState({})


  let date = new Date().getDate()
  console.log(date)

  return (
    <>
      <Sidebar/>
    </>
  )
}

export default App
