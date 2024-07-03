import React from 'react'

function TexteSelectDepartamento() {
  return (
    <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <p style={{width:"40%"}}>Departamento:</p>
        <select name="Departamento" id="departamento" style={{backgroundColor:'white',width:"60%",border:"black solid",height:"38px"}}>
            <option selected="true" disabled="disabled" value="none">Selecione el departamento</option>
            <option value="Beni">Beni</option>
            <option value="Chuquisaca">Chuquisaca</option>
            <option value="Cochabamba">Cochabamba</option>
            <option value="La paz">La paz</option>
            <option value="Oruro">Oruro</option>
            <option value="Pando">Pando</option>
            <option value="Potosi">Potosi</option>
            <option value="Santa cruz"> Santa cruz</option>
            <option value="Tarija">Tarija</option>
        </select>
    </div>
  )
}

export default TexteSelectDepartamento