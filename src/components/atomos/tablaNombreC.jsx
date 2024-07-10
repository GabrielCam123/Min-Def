import React,{useState} from 'react'
import "./tablaNombreC.css"
function tablaNombreC() {
  const initialRows=Array.from({length:7},(_,index)=>({
    id:index+1,
  }))
  const [rows,setRows]=useState(initialRows)
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
    <table className='tableNombreC'>
    <thead className='theadNombreC'> 
        <tr>
            <th className='thNombreC' style={{width:"5%"}}>N°</th>
            <th className='thNombreC' style={{width:"25%"}}>Com./Loc./Barrio</th>
            <th className='thNombreC' style={{width:"5%"}}>N°</th>
            <th className='thNombreC' style={{width:"25%"}}>Com./Loc./Barrio</th>
            <th className='thNombreC' style={{width:"5%"}}>N°</th>
            <th className='thNombreC' style={{width:"25%"}}>Com./Loc./Barrio</th>
        </tr>
    </thead>
    <tbody>
      {rows.map((row,index)=>(
      <tr key={row.id}>
        <td className='thNombreC'><input style={{width:"85%"}} type="text" name="" id="" value={row.id} readOnly/></td>
        <td className='thNombreC'><input style={{width:"97%"}} type="text" name="" id="" /></td>
        <td className='thNombreC'><input style={{width:"85%"}} type="text" name="" id="" /></td>
        <td className='thNombreC'><input style={{width:"97%"}} type="text" name="" id="" /></td>
        <td className='thNombreC'><input style={{width:"85%"}} type="text" name="" id="" /></td>
        <td className='thNombreC'><input style={{width:"97%"}} type="text" name="" id="" /></td>
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

export default tablaNombreC