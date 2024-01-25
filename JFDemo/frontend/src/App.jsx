import { useState } from 'react'
import Sidebar from '../components/navbar'
import './App.css'
import Login from '../components/Login'
import Settings from '../components/Settings'
import Page from '../components/Page'
import { Route,Routes } from 'react-router'

function App() {
  const [data, setData] = useState({})


  let date = new Date().getDate()
  console.log(date)

  let mocks = [
    "25 Jan",
    "24 Jan",
    "23 Jan",
    "22 Jan",
    "21 Jan"
  ]

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/">
          {/* <Sidebar/> */}
          <Route index element={<Page data={mocks[0]}/>}/>
          {mocks.map(item => <Route path={`/${item[0]+item[1]}`} element={<Page data={item}/>}/>)}
        </Route>
        <Route path="/settings" element={<Settings/>}/>
      </Routes>
    </>
  )
}

export default App
