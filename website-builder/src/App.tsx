import './App.css'
import Playground from './components/playground'
import Sidebar from './components/sidebar'
import Treee from './components/treee'
import EditorProvider from './providers/editorProvider'

function App() {

  return (
    <EditorProvider>
      <div style={{display:"flex"}}>
        <Treee/>
        <Playground/>
        <Sidebar/>
      </div>
    </EditorProvider>
  )
}

export default App
