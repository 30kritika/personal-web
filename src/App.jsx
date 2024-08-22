import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Work from './components/pages/Work';
import Skill from './components/pages/Skill';
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/work' element={<Work/>}/>
        <Route path='/skill' element={<Skill/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
