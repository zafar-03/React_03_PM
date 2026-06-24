import './App.css'
import Navbar from './Components/Navbar'
import Api from './Components/Api'
import { Routes,Route } from 'react-router-dom'
import Home from './Components/Home'

function App() {
 
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/api' element={<Api/>}/>
      </Routes>
    </>
  )
}

export default App
