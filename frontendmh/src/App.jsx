
import './App.css'
import { Route,Routes } from 'react-router-dom'

import { ToastContainer } from 'react-toastify'
import AuthPage from './pages/Login'
import 'react-toastify/dist/ReactToastify.css'
function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<AuthPage/>} />
        </Routes>
      <ToastContainer />
    </>
  )
}

export default App
