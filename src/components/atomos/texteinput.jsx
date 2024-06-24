import React from 'react'
import "./texteinput.css"
function texteinput(props) {
  return (
    <div className='contenedorTexteinput' style={{width:(props.anchob)}}>
        <p style={{width:(props.anchop)}} className='textp'>{props.texto}</p>
        <input style={{width:(props.anchoi)}}className='textinput' type="text" name="" id="" />
    </div>
  )
}

export default texteinput