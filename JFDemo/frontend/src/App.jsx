import { useEffect, useState } from 'react'
import './App.css'
import Login from '../components/Login'
import Settings from '../components/Settings'
import Page from '../components/Page'
import { Route,Routes } from 'react-router'
import PageWrapper from '../components/PageWrapper'

function App() {
  const [New,setNew] = useState()
  const [mocks, setMocks] = useState([
    {
        "_id": "65b398d51986791809e8e849",
        "date": "2024-01-27T11:28:43.882Z",
        "content": "Hello World 1",
        "__v": 0
    },
    {
        "_id": "65b48322cd8345ac914f9428",
        "date": "2024-01-25T00:00:02.024Z",
        "content": "Hello World 2",
        "__v": 0
    },
    {
        "_id": "65b398d51986791809e8e847",
        "date": "2024-01-24T11:28:43.882Z",
        "content": "Hello World 3",
        "__v": 0
    },
    {
        "_id": "65b48322cd8345ac914f9426",
        "date": "2024-01-23T00:00:02.024Z",
        "content": "Hello World 4",
        "__v": 0
    },
    {
        "_id": "65b398d51986791809e8e845",
        "date": "2024-01-22T11:28:43.882Z",
        "content": "Hello World 5",
        "__v": 0
    },
    {
        "_id": "65b48322cd8345ac914f9424",
        "date": "2024-01-21T00:00:02.024Z",
        "content": "Hello World 6",
        "__v": 0
    },{
        "_id": "65b398d51986791809e8e843",
        "date": "2024-01-20T11:28:43.882Z",
        "content": "Hello World 7",
        "__v": 0
    },
    {
        "_id": "65b48322cd8345ac914f9422",
        "date": "2024-01-19T00:00:02.024Z",
        "content": "Hello World 8",
        "__v": 0
    }
])

  console.log(mocks)

  useEffect(() => {
    let daTe = new Date()
    let DATE = daTe.getFullYear()+"-0"+(daTe.getMonth()+1)+"-"+daTe.getDate()
    setNew(mocks[0].date.slice(0,10) === DATE)
  },[])
  console.log(New)

  // let mocks = [
  //   "25 Jan",
  //   "24 Jan",
  //   "23 Jan",
  //   "22 Jan",
  //   "21 Jan"
  // ]

  // useEffect(() => {
  //   fetch("http://localhost:3000/api/v1/page",{ mode: 'cors' })
  //   .then(resp => resp.json())
  //   .then(data => setData(data.Pages))
  //   .catch(err => console.log(err))
  // },[])

  // console.log(data && data[0].date)

  let data = {
    date: "Today",
    content:""
  }

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/" element={<PageWrapper/>}>
          
          {New?<Route index element={<Page {...data}/>}/>:<Route index element={<Page {...mocks[0]}/>}/>}
          {mocks.map(item => <Route path={`/${item._id}`} element={<Page {...item}/>}/>)}
        </Route>
        <Route path="/settings" element={<Settings/>}/>
      </Routes>
    </>
  )
}

export default App