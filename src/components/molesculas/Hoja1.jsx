import React from 'react'
import Edan from '../componentes/compEdan'
import DatosG from '../componentes/compDatosG'
import InfoP from '../componentes/compInfoP'
import InfoM from '../componentes/compInfoM'
import Salud from '../componentes/compSalud'
import Header from '../header'
function Hoja1() {
  return (
    <div style={{backgroundColor:'white'}}>
        <Header/>
        <div>
          <Edan/>
          <DatosG/>
          {/* <InfoP/>
          <InfoM/>
          <Salud/> */}
        </div>
        <footer style={{fontSize:"20px",fontWeight:"600",textAlign:'right',margin:"20px"}}>Sello del Gobierno Autonomo Municipal</footer>
    </div>
  )
}

export default Hoja1