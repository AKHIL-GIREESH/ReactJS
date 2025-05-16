import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import { AuthProvider } from '@/context/AuthContext'
import App from './App.jsx'
import TestPage from './pages/testpg.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <BrowserRouter>
      {/* <TestPage/> */}
      <App/>
    </BrowserRouter>
    </AuthProvider>
  </StrictMode>,
)
