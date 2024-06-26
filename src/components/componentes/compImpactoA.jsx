import React from 'react'
import DañoA from '../atomos/tablaDañoA'
import "./compImpactoA.css"
import DañoN from '../atomos/tablaDañoN'
import DañoI from '../atomos/tablaDañoI'
function compImpactoA() {
  return (
    <div className='contenedorImpactoA'>
        <h3>9. IMPACTO AGROPECUARIO</h3>
        <h4>9.1 Daños y necesidades en Agricultura</h4>
        <DañoA/>
        <div>
          <div>
            <h4>9.2 Daños y Necesidades Pecuarias</h4>
            <DañoN/>
          </div>
          <div>
            <h4>9.3 Daño en la Infraestructura Productiva.</h4>
            <DañoI/>
          </div>

        </div>
    </div>
  )
}

export default compImpactoA