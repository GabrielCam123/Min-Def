import React from 'react'
import "./compImpactoI.css"
import InfraestructuraV from '../atomos/tablaInfraestructuraV'
import InfraestructuraP from '../atomos/tablaInfraestructuraP'
function compImpactoI() {
  return (
    <div className='contenedorImpactoI'>
        <h3>5. IMPACTO EN INFRAESTRUCTURAS</h3>
        <h4>5.1 Daño en Infraestructura vial.</h4>
        <InfraestructuraV/>
        <h4>5.2 Daños en Infraestructura Publica</h4>
        <InfraestructuraP/>
    </div>
  )
}

export default compImpactoI