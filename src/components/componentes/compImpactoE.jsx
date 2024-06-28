import React from 'react'
import "./compImpactoE.css"
import DañosU from '../atomos/tablaDañosU'
import AfectacionA from '../atomos/tablaAfectacionA'
import Observaciones from '../atomos/Observaciones'
function compImpactoE() {
  return (
    <div className='contenedorImpactoE'>
        <h3>7. IMPACTO EN EDUCACION</h3>
        <h4>7.1 Daños en Unidades Educativas</h4>
        <DañosU/>
        <h4>7.2 Afectacion a Alumnos, Profesores y Administrativos</h4>
        <div style={{display:"flex",width:"100%"}}>
          <div style={{width:"60%"}}>
            <AfectacionA/>
          </div>
          <div style={{width:"38.5%",height:"100%"}}>
            <Observaciones/>
          </div>
        </div>


    </div>
  )
}

export default compImpactoE