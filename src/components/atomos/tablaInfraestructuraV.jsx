import React,{useState}from 'react'
import "./tablaInfraestructuraV.css"
function tablaInfraestructuraV() {
  const initialRows=Array.from({length:5},(_,index)=>({id:index+1}))
  const [rows,setRows]=useState(initialRows)
  const handleKeyPress=(e)=>{
    const charCode=e.charCode
    if(charCode<48||charCode>57){
      e.preventDefault();
    }
  }
  const addRow=()=>{
    setRows([...rows,{id:rows.length+1}])
  }
  const removeRow=()=>{
    if(rows.length>1){
      setRows(rows.slice(0,-1))
    }
  }
  return (
    <div>
    <table className='tableInfraestructuraV'>
    <thead className='theadInfraestructuraV'> 
        <tr>
            <th className='thInfraestructuraV' style={{width:("15%")}}><p style={{margin:"5px"}}>Vias de</p><p style={{margin:"0"}}>Acceso/Puentes</p></th>
            <th className='thInfraestructuraV' style={{width:("20%")}}><p style={{margin:"5px"}}>Tramo</p><p style={{margin:"0"}}>Loc./Loc.</p></th>
            <th className='thInfraestructuraV' style={{width:("13%")}}><p style={{margin:"5px"}}>Daño Parcial</p><p style={{margin:"0"}}>(Km.)</p></th>
            <th className='thInfraestructuraV' style={{width:("12%")}}><p style={{margin:"5px"}}>Daño Total</p><p style={{margin:"0"}}>(Km.)</p></th>
            <th className='thInfraestructuraV' style={{width:("20%")}}>Necesidades Inmediatas</th>
            <th className='thInfraestructuraV' style={{width:("20%")}}>Observaciones</th>
        </tr>
    </thead>
    <tbody>
      {rows.map((row,index)=>(
      <tr key={row.id}>
        <td className='tdInfraestructuraV'><input style={{width:("95%")}} type="text" name="" id="" /></td>
        <td className='tdInfraestructuraV'><input style={{width:("96%")}} type="text" name="" id="" /></td>
        <td className='tdInfraestructuraV'><input onKeyPress={handleKeyPress} style={{width:("94%")}} type="text" name="" id="" /></td>
        <td className='tdInfraestructuraV'><input onKeyPress={handleKeyPress} style={{width:("93%")}} type="text" name="" id="" /></td>
        <td className='tdInfraestructuraV'><input style={{width:("96%")}} type="text" name="" id="" /></td>
        <td className='tdInfraestructuraV'><input style={{width:("96%")}} type="text" name="" id="" /></td>
      </tr>
      ))}
    </tbody>
    </table>
    <button onClick={addRow} style={{border:"1px solid black",backgroundColor:"white"}}>
      Agregar fila
    </button>
    <button onClick={removeRow} style={{border:"1px solid black",backgroundColor:"white"}}>
      Eliminar fila
    </button>
  </div>
  )
}

export default tablaInfraestructuraV