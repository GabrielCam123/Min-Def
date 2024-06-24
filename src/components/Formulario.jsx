import React from 'react'
import Header from "./header"
import "./Formulario.css"
import Edan from './componentes/compEdan'
import DatosG from './componentes/compDatosG'
function Formulario() {
  return (
    <div classname='estiloFormulario'>
        <Header/>
        <div>
          <Edan/>
          <DatosG/>
        </div>
    </div>
  )
}

export default Formulario