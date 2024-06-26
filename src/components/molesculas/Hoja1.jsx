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
        <footer>Sello del Gobierno Autonomo Municipal</footer>
    </div>
  )
}

export default Hoja1