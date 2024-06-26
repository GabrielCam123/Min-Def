import React from 'react'
import "./Formulario.css"
import Hoja1 from './molesculas/Hoja1'
import Hoja2 from './molesculas/Hoja2'
import Hoja3 from './molesculas/Hoja3'
function Formulario() {
  return (
    <div classname='estiloFormulario'>
      <Hoja1/>
      <Hoja2/>
      <Hoja3/>
    </div>
  )
}

export default Formulario