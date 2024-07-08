import React from 'react'
import "./texteinput.css"

function texteinputnumber(props) {
    const handleKeyPress=(e)=>{
        const charCode=e.charCode;
        if(charCode<48||charCode>57){
            e.preventDefault();
        }
    }
  return (
    <div className='contenedorTexteinput' style={{width:(props.anchob),flexDirection:(props.direccion)}}>
        <p style={{width:(props.anchop),marginBottom:(props.marginb)}} className='textp'>{props.texto}</p>
        <input style={{width:(props.anchoi)}}className='textinput' type="text" name="" id="" onKeyPress={handleKeyPress}/>
    </div>
  )
}

export default texteinputnumber