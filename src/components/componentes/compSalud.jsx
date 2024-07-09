import React from 'react'
import "./compSalud.css"
import ServicioS from '../atomos/tablaServicioS'
import NecesidadesS from '../atomos/tablaNecesidadesS'
function compSalud() {
  return (
    <div className='contenedorcompSalud'>
        <h3>4. SALUD</h3>
        <h4>4.1 Daños en servicios de salud</h4>
        <div>
          <ServicioS/>
        </div>
        <h4>4.2 Daños en servicio de salud</h4>
        <div>
          <NecesidadesS/>
        </div>

    </div>
  )
}

export default compSalud