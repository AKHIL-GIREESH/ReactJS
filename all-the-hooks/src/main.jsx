import React from 'react'
import ReactDOM from 'react-dom/client'
import StateMemoCallBack from './StateMemoCallback.jsx'
import Context from './Context.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Context />
  </React.StrictMode>,
)
