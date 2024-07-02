import { useState } from 'react'
import './App.css'
import Formulario from"./components/Formulario"
import Loggin from './components/loggin'
import { Routes,Route,Outlet,Link } from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Loggin/>}/>
        <Route path='/Formulario' element={<Formulario/>}/>
      </Routes>
      {/* <Formulario/> */}
    </>
  )
}

export default App
