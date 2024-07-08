import React from 'react'
import "./texteinput.css"
function textehora(props) {
  return (
    <div className='contenedorTexteinput' style={{width:(props.anchob),flexDirection:(props.direccion)}}>
        <p style={{width:(props.anchop),marginBottom:(props.marginb)}} className='textp'>{props.texto}</p>
        <input style={{width:(props.anchoi)}}className='textinput' type="time" name="" id="" />
    </div>
  )
}

export default textehora