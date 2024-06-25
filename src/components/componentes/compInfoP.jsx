import React from 'react'
import "./compInfoP.css"
import Texteinput from '../atomos/texteinput'
function compInfoP() {
  return (
    <div className='contenedorInfoP'>
        <h3>2. INFORMACIÓN DE POBLACIÓN AFECTADA Y DAMNIFICADA</h3>
        <div style={{display:('flex')}}>
            <Texteinput anchob={"33%"} anchop={"auto"} anchoi={"25%"} texto={"2.1 Total poblacion afectada:"}/>
            <Texteinput anchob={"33%"} anchop={"auto"} anchoi={"25%"} texto={"2.2 Total de familias afectada:"}/>
            <Texteinput anchob={"33%"} anchop={"auto"} anchoi={"25%"} texto={"2.3 Total de familias damnificadas:"}/>
        </div>
    </div>
  )
}

export default compInfoP