import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import "./Formulario.css"
import Hoja1 from './molesculas/Hoja1'
import Hoja2 from './molesculas/Hoja2'
import Hoja3 from './molesculas/Hoja3'
import Hoja4 from './molesculas/Hoja4'

function Formulario() {
  const navigate=useNavigate();

  useEffect(()=>{
    const token=localStorage.getItem('token')
    if(!token){
      navigate('/');
    }else{
      fetch('http://localhost:5000/formulario',{
        headers:{
          'Authorization':`Bearer ${token}`,
        }
      })
      .then(response=>{
        if(!response.ok){
          navigate('/')
        }
      })
      .catch(()=>{
        navigate('/')
      })
    }
  }, [navigate])
  return (
    <div classname='estiloFormulario'>
      <Hoja1/>
      {/* <Hoja2/>
      <Hoja3/>
      <Hoja4/> */}
    </div>
  )
}

export default Formulario