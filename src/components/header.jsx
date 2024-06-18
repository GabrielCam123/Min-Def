import React from 'react'
import "./header.css"
function header() {
  return (
    <div className='header-container'>
        <img src="./public/logomindef.png" alt="logomindef" className='estiloMin'/>
        <img src="./public/escudobolivia.png" alt="escudobolivia" className='estiloBolivia'/>
        <img src="./public/defensacivil.jpeg" alt="defensacivil" className='estiloCivil' />
    </div>
  )
}

export default header