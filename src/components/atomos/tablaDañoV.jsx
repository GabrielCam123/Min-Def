import React,{useState} from 'react'
import "./tablaDañoV.css"
function tablaDañoV() {
  const initialRows=Array.from({length:7},(_,index)=>({
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
  const handleKeyPress=(e)=>{
    const charCode=e.charCode
    if(charCode<48||charCode>57){
      e.preventDefault();
    }
  }
  return (
    <div>
    <table className='tableDañoV'>
        <thead className='theadDañoV'> 
            <tr>
                <th className='thDañoV' style={{width:"20%"}}>Comunidad</th>
                <th className='thDañoV' style={{width:"10%"}}>N° Viviendas Daño Parcial</th>
                <th className='thDañoV' style={{width:"10%"}}>N° Viviendas Daño Total</th>
                <th className='thDañoV' style={{width:"20%"}}>Necesidades Inmediatas</th>
            </tr>
        </thead>
        <tbody>
          {rows.map((row,index)=>(
          <tr>
            <td className='tdDañoV'><input style={{width:"96%"}} type="text" name="" id="" /></td>
            <td className='tdDañoV'><input style={{width:"93%"}} type="text" onKeyPress={handleKeyPress} name="" id="" /></td>
            <td className='tdDañoV'><input style={{width:"94%"}} type="text" onKeyPress={handleKeyPress} name="" id="" /></td>
            <td className='tdDañoV'><input style={{width:"96%"}} type="text" name="" id="" /></td>
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

export default tablaDañoV