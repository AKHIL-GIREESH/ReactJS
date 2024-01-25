import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [data, setData] = useState({})


  let date = new Date().getDate()
  console.log(date)

  return (
    <>
      Journal Flow
    </>
  )
}

export default App
