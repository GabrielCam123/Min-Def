import React from 'react'

function Enviar({data}) {
    const handleSubmit=()=>{
        console.log('Datos enviados:',data);
        
    }
  return (
    <div>Enviar</div>
  )
}

export default Enviar