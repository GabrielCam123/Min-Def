import React from 'react'
import DañoA from '../atomos/tablaDañoA'
import "./compImpactoA.css"
import DañoN from '../atomos/tablaDañoN'
function compImpactoA() {
  return (
    <div className='contenedorImpactoA'>
        <h3>9. IMPACTO AGROPECUARIO</h3>
        <h4>9.1 Daños y necesidades en Agricultura</h4>
        <DañoA/>
        <div>
          <h4>9.2 Daños y Necesidades Pecuarias</h4>
          <DañoN/>
          <h4>9.3 Daño en la Infraestructura Productiva.</h4>
        </div>
    </div>
  )
}

export default compImpactoA