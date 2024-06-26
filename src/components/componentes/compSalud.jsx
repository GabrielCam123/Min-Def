import React from 'react'
import "./compSalud.css"
import ServicioS from '../atomos/tablaServicioS'
function compSalud() {
  return (
    <div className='contenedorcompSalud'>
        <h3>4. SALUD</h3>
        <h4>4.1 Daños en servicios de salud</h4>
        <ServicioS/>
    </div>
  )
}

export default compSalud