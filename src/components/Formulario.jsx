import React from 'react'
import Header from "./header"
import "./Formulario.css"
import Edan from './componentes/compEdan'
import DatosG from './componentes/compDatosG'
import InfoP from './componentes/compInfoP'
import InfoM from './componentes/compInfoM'
function Formulario() {
  return (
    <div classname='estiloFormulario'>
        <Header/>
        <div>
          <Edan/>
          <DatosG/>
          <InfoP/>
          <InfoM/>
        </div>
    </div>
  )
}

export default Formulario