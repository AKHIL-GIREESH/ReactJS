import './App.css'
import Playground from './components/playground'
import Sidebar from './components/sidebar'
import Treee from './components/treee'

function App() {

  return (
    <div style={{display:"flex"}}>
      <Treee/>
      <Playground/>
      <Sidebar/>
    </div>
  )
}

export default App
