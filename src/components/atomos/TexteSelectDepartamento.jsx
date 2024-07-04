import React from 'react'

function TexteSelectDepartamento({defaultOption, onChange}) {
  const handleSlectChange=(e)=>{
    onChange(e.target.value);
  }
  return (
    <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',width:'100%'}}>
        <p style={{width:"40%"}}>Departamento:</p>
        <select name="Departamento" id="departamento" style={{backgroundColor:'white',width:"60%",border:"black solid",height:"38px"}} defaultValue={defaultOption} onChange={handleSlectChange}>
            <option value="SELECCIONE">Selecione el departamento</option>
            <option value="BENI">BENI</option>
            <option value="CHUQUISACA">CHUQUISACA</option>
            <option value="COCHABAMBA">COCHABAMBA</option>
            <option value="LA PAZ">LA PAZ</option>
            <option value="ORURO">ORURO</option>
            <option value="PANDO">PANDO</option>
            <option value="POTOSI">POTOSI</option>
            <option value="SANTA CRUZ">SANTA CRUZ</option>
            <option value="TARIJA">TARIJA</option>
        </select>
    </div>
  )
}

export default TexteSelectDepartamento