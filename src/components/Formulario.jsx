import React from 'react'
import "./Formulario.css"
import Hoja1 from './molesculas/Hoja1'
import Hoja2 from './molesculas/Hoja2'
import Hoja3 from './molesculas/Hoja3'
import Hoja4 from './molesculas/Hoja4'
function Formulario() {
  return (
    <div classname='estiloFormulario'>
      <Hoja1/>
      <Hoja2/>
      <Hoja3/>
      <Hoja4/>
    </div>
  )
}

export default Formulario