import { io } from 'socket.io-client'
import './App.css'
import { useEffect } from 'react'

function App() {

  const socket = io("http://localhost:3002/")
  console.log(socket)

  useEffect(() => {
    socket.on("connect",() => console.log("connected",socket.id))
  },[])
  return (
    <>
      Frontend
    </>
  )
}

export default App
