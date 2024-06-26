import React from 'react'
import Header from '../header'
import NecesidadesH from '../componentes/compNecesidadesH'
import NombreC from '../componentes/compNombreC'
import Responsable from '../componentes/compResponsable'
import Declaratoria from '../componentes/compDeclaratoria'
function Hoja4() {
  return (
    <div>
        <Header/>
        <div>
            <NecesidadesH/>
            <NombreC/>
            <Responsable/>  
            <Declaratoria/>
        </div>
        <footer>Sello del Gobierno Autonomo Municipal</footer>
    </div>
  )
}

export default Hoja4