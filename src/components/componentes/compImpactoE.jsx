import React from 'react'
import "./compImpactoE.css"
import DañosU from '../atomos/tablaDañosU'
import AfectacionA from '../atomos/tablaAfectacionA'
function compImpactoE() {
  return (
    <div className='contenedorImpactoE'>
        <h3>7. IMPACTO EN EDUCACION</h3>
        <h4>7.1 Daños en Unidades Educativas</h4>
        <DañosU/>
        <h4>7.2 Afectacion a Alumnos, Profesores y Administrativos</h4>
        <AfectacionA/>
    </div>
  )
}

export default compImpactoE