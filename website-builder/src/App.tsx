import './App.css'
import Playground from './components/playground'
import Sidebar from './components/sidebar'
import Treee from './components/treee'
import EditorProvider from './providers/editorProvider'
import SideBarSelectionProvider from './providers/SideBarSelectionProvider'

function App() {

  return (
    <EditorProvider>
      <SideBarSelectionProvider>
        <div style={{display:"flex"}}>
          <Treee/>
          <Playground/>
          <Sidebar/>
        </div>
      </SideBarSelectionProvider>
    </EditorProvider>
  )
}

export default App
