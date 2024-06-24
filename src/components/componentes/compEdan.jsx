import React from 'react'
import Nro from '../atomos/Nro'
import Nrodoc from '../atomos/Nrodoc'
import Edan from '../atomos/edan'
import "./compEdan.css"
function compEdan() {
  return (
    <div className='contenedorcompEdan'>
        <Edan/>
        <Nro/>
        <Nrodoc/>
    </div>
  )
}

export default compEdan