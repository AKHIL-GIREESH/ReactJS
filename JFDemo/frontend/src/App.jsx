import { useEffect, useState } from 'react'
import Sidebar from '../components/navbar'
import './App.css'
import Login from '../components/Login'
import Settings from '../components/Settings'
import Page from '../components/Page'
import { Route,Routes } from 'react-router'

function App() {
  const [data, setData] = useState(false)


  let daTe = new Date().getDate()
  console.log("Date in React : ",daTe)

  let mocks = [
    "25 Jan",
    "24 Jan",
    "23 Jan",
    "22 Jan",
    "21 Jan"
  ]

  useEffect(() => {
    fetch("http://localhost:3000/api/v1/page",{ mode: 'cors' })
    .then(resp => resp.json())
    .then(data => setData(data.Pages))
    .catch(err => console.log(err))
  },[])

  console.log(data && data[0].date === daTe)

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/">
          {/* <Sidebar/> */}
          <Route index element={<Page data={`${new Date().getDate()} Jan`}/>}/>
          {mocks.map(item => <Route path={`/${item[0]+item[1]}`} element={<Page data={item}/>}/>)}
        </Route>
        <Route path="/settings" element={<Settings/>}/>
      </Routes>
    </>
  )
}

export default App
