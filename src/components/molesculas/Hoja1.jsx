import React from 'react'
import Edan from '../componentes/compEdan'
import DatosG from '../componentes/compDatosG'
import InfoP from '../componentes/compInfoP'
import InfoM from '../componentes/compInfoM'
import Salud from '../componentes/compSalud'
import Header from '../header'
function Hoja1() {
  return (
    <div>
        <Header/>
        <div>
          <Edan/>
          <DatosG/>
          <InfoP/>
          <InfoM/>
          <Salud/>
        </div>
        <h4 style={{margin:("40px")}}>Sello del Gobierno Autonomo Municipal</h4>
    </div>
  )
}

export default Hoja1