import './App.css';
import { Route,Routes } from 'react-router';
import Home from "./components/home/home"
import About from './components/about/about';
import NextPage from './components/nextPage';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="About" element={<About/>}/>
        <Route path="NextPage" element={<NextPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
