import React from 'react'
import Header from "./header"
import "./Formulario.css"
import Edan from "./edan"
function Formulario() {
  return (
    <div classname='estiloFormulario'>
        <Header/>
        <div>
          <Edan/>          
        </div>

    </div>
  )
}

export default Formulario