import React,{useState} from 'react'
import "./tablaInfraestructuraP.css"
function tablaInfraestructuraP() {
  const initialRows=Array.from({length:6},(_,index)=>({
    id:index+1,
    isDañoParcialChecked:false,
    isDañoTotalChecked:false,
  }))
  const [rows,setRows]=useState(initialRows)
  const handleCheckboxChange=(index,checkboxType)=>{
    setRows(prevRows =>{
      return prevRows.map((row,i)=>{
        if(i===index){
          switch(checkboxType){
            case 'DañoParcial':
              return{...row, isDañoParcialChecked: !row.isDañoParcialChecked, isDañoTotalChecked:false}
            case 'DañoTotal':
              return{...row, isDañoTotalChecked: !row.isDañoTotalChecked, isDañoParcialChecked:false}
            default:
              return row;
          }
        }
        return row;
      })
    })
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
    <table className='tableInfraestructuraP'>
      <thead className='theadInfraestructuraP'> 
        <tr>
            <th className='thInfraestructuraP' style={{width:("5%")}}>N°</th>
            <th className='thInfraestructuraP' style={{width:("20%")}}>Localidad / Comunidad</th>
            <th className='thInfraestructuraP' style={{width:("20%")}}>Tipo de Estructura</th>
            <th className='thInfraestructuraP' style={{width:("15%")}}>Daño Parcial</th>
            <th className='thInfraestructuraP' style={{width:("15%")}}>Daño total</th>
            <th className='thInfraestructuraP' style={{width:("25%")}}>Observaciones</th>
        </tr>
      </thead>
      <tbody style={{width:("100%")}}>
        {rows.map((row,index)=>(
        <tr key={row.id}>
          <td className='tdInfraestructuraP'><input style={{width:("85%")}}type="text" name="" id="" value={row.id} readOnly/></td>
          <td className='tdInfraestructuraP'><input style={{width:("96%")}} type="text" name="" id="" /></td>
          <td className='tdInfraestructuraP'><input style={{width:("96%")}} type="text" name="" id="" /></td>
          <td className='tdInfraestructuraP'><input style={{width:("95%")}} type="checkbox" checked={row.isDañoParcialChecked} onChange={()=>handleCheckboxChange(index,'DañoParcial')}name="" id="" /></td>
          <td className='tdInfraestructuraP'><input style={{width:("95%")}} type="checkbox" checked={row.isDañoTotalChecked} onChange={()=>handleCheckboxChange(index,'DañoTotal')} name="" id="" /></td>
          <td className='tdInfraestructuraP'><input style={{width:("97%")}} type="text" name="" id="" /></td>
        </tr>
        ))}
      </tbody>
  </table>
  <button onClick={addRow} style={{border:"1px solid black",backgroundColor:"white"}}>
    Agregar Fila
  </button>
  <button onClick={removeRow} style={{border:"1px solid black",backgroundColor:"white"}}>
    Eliminar Fila
  </button>
</div>
  )
}

export default tablaInfraestructuraP