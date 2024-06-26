import React from 'react'
import DañoA from '../atomos/tablaDañoA'
import "./compImpactoA.css"
function compImpactoA() {
  return (
    <div className='contenedorImpactoA'>
        <h3>9. IMPACTO AGROPECUARIO</h3>
        <h4>9.1 Daños y necesidades en Agricultura</h4>
        <DañoA/>
        <h4>9.2 Daños y Necesidades Pecuarias</h4>
        <h4>9.3 Daño en la Infraestructura Productiva.</h4>
    </div>
  )
}

export default compImpactoA