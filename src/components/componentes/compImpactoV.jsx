import React from 'react'
import "./compImpactoV.css"
import DañoV from '../atomos/tablaDañoV'
import ObservacionesV from '../atomos/ObservacionesV'
function compImpactoV() {
  return (
    <div className='contenedorcompImpactoV'>
        <h3>8. IMPACTO VIVIENDA</h3>
        <h4>8.1 Daños en Vivienda</h4>
        <div style={{display:'flex',width:"100%"}}>
          <div style={{width:"60%"}}>
            <DañoV/>
          </div>
          <ObservacionesV/>
        </div>
    </div>
  )
}

export default compImpactoV