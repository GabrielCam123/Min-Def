import React from 'react'
import "./compInfoM.css"
import Eventos from '../atomos/tablaEventos'
import ImpactoP from '../atomos/tablaImpactoP'
import NecesidadP from '../atomos/tablaNecesidadP'
function compInfoM() {
  return (
    <div className='contenedorcompInfoM'>
        <h3>3. INFORMACION DEL MUNICIPIO AFECTADO</h3>
        <h4>3.1 Tipo de evento adverso</h4>
        <Eventos/>
        <h4>3.2 Impacto en la Poblacion por el Desastre o Emergencia</h4>
        <ImpactoP/>
        <h4>3.3 Necesidades en Primera Respuesta</h4>
        <NecesidadP/>
    </div>
  )
}

export default compInfoM