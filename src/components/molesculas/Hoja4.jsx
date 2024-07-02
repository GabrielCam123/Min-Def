import React from 'react'
import Header from '../header'
import NecesidadesH from '../componentes/compNecesidadesH'
import NombreC from '../componentes/compNombreC'
import Responsable from '../componentes/compResponsable'
import Declaratoria from '../componentes/compDeclaratoria'
function Hoja4() {
  return (
    <div style={{backgroundColor:'white'}}>
        <Header/>
        <div>
            <NecesidadesH/>
            <NombreC/>
            <Responsable/>  
            <Declaratoria/>
        </div>
        <footer style={{fontSize:"20px",fontWeight:"600",textAlign:'right',margin:"20px",textAlignLast:"end"}}>Sello del Gobierno Autonomo Municipal</footer>
    </div>
  )
}

export default Hoja4