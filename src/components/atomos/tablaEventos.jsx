import React, { useState } from 'react'
import "./tablaEventos.css"
function tablaEventos() {
  const [isInundacionChecked, setInundacionCheked]=useState(false)
  const [isIncendiosCheked, setIncendiosCheked]=useState(false)
  const [isSequiaChecked, setSequiaCheked]=useState(false)
  const [isRiadaChecked, setRiadaCheked]=useState(false)
  const [isHeladaChecked, setHeladaCheked]=useState(false)
  const [isGranizadaChecked, setGranizadaCheked]=useState(false)
  const [isDeslizamientoChecked, setDeslizaminetoCheked]=useState(false)
  const handleInundacionChange=(e)=>{
    setInundacionCheked(e.target.checked);
    if(e.target.checked){
      setIncendiosCheked(false)
      setSequiaCheked(false)
    }
  }
  const handleRiadaChange=(e)=>{
    setRiadaCheked(e.target.checked);
    if(e.target.checked){
      setIncendiosCheked(false)
      setSequiaCheked(false)
    }
  }
  const handleHeladaChange=(e)=>{
    setHeladaCheked(e.target.checked);
    if(e.target.checked){
      setIncendiosCheked(false)
      setSequiaCheked(false)
    }
  }
  const handleGranizadaChange=(e)=>{
    setGranizadaCheked(e.target.checked);
    if(e.target.checked){
      setIncendiosCheked(false)
      setSequiaCheked(false)
    }
  }
  const handleIncendiosChange=(e)=>{
    setIncendiosCheked(e.target.checked);
    if(e.target.checked){
      setInundacionCheked(false)
      setRiadaCheked(false)
      setHeladaCheked(false)
      setGranizadaCheked(false)
    }
  }
  const handleSequiaChecked=(e)=>{
    setSequiaCheked(e.target.checked)
    if(e.target.checked){
      setInundacionCheked(false)
      setRiadaCheked(false)
      setHeladaCheked(false)
      setGranizadaCheked(false)
      setDeslizaminetoCheked(false)
    }
  }
  const handleDeslizamientoChange=(e)=>{
    setDeslizaminetoCheked(e.target.checked)
    if(e.target.checked){
      setSequiaCheked(false)
    }
  }
  return (
    <table className='tableeventos'>
        <thead className='theadeventos'> 
            <tr>
                <th className='theventos'>Inundacion</th>
                <th className='theventos'>Riada</th>
                <th className='theventos'>Deslizamineto</th>
                <th className='theventos'>Helada</th>
                <th className='theventos'>Granizada</th>
                <th className='theventos'>Sequia</th>
                <th className='theventos'>Incendios</th>
                <th className='theventos'>Otros</th>
            </tr>
        </thead>
        <tbody>
          <tr>
            <td className='tdeventos'><input type="checkbox" name="inundacion" id="" checked={isInundacionChecked} onChange={handleInundacionChange}/></td>
            <td className='tdeventos'><input type="checkbox" name="riada" id="" checked={isRiadaChecked} onChange={handleRiadaChange} /></td>
            <td className='tdeventos'><input type="checkbox" name="deslizamiento" id="" checked={isDeslizamientoChecked} onChange={handleDeslizamientoChange}/></td>
            <td className='tdeventos'><input type="checkbox" name="helada" id="" checked={isHeladaChecked} onChange={handleHeladaChange}/></td>
            <td className='tdeventos'><input type="checkbox" name="granizada" id=""checked={isGranizadaChecked} onChange={handleGranizadaChange} /></td>
            <td className='tdeventos'><input type="checkbox" name="sequia" id=""  checked={isSequiaChecked} onChange={handleSequiaChecked}/></td>
            <td className='tdeventos'><input type="checkbox" name="incendios" id="" checked={isIncendiosCheked} onChange={handleIncendiosChange}/></td>
            <td className='tdeventos'><input type="checkbox" name="otros" id="" /></td>
          </tr>
        </tbody>

    </table>
  )
}

export default tablaEventos