import './App.css';
import Heading from './components/Header/Heading';
import SandwitchMenu from './components/SandwitchMenu/SandwitchMenu';
import { Routes,Route } from 'react-router';
import Home from './components/Pages/Home';
import Liked from './components/Pages/Liked';
import History from './components/Pages/History';

function App() {

  return (
    <div className="App">
      <Heading/>
      <div className='headerEmptyDiv'></div>
      <div>
        <Routes>
          <Route path="/" element={<SandwitchMenu/>}>
            <Route path='/Home' element={<Home/>}></Route>
            <Route path="/History" element={<History/>}/>
            <Route path='/Liked' element={<Liked/>}></Route>
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
