import React,{useState} from 'react'
import "./tablaDañoA.css"
function tablaDañoA() {
  const initialRows=Array.from({length:6},(_,index)=>({
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
  const handleKeyPress=(e)=>{
    const charCode=e.charCode
    if(charCode<48||charCode>57){
      e.preventDefault();
    }
  }
  return (
    <div>
    <table className='tableDañoA'>
        <thead className='theadDañoA'> 
            <tr>
                <th className='thDañoA' style={{width:"5%"}}>N°</th>
                <th className='thDañoA' style={{width:"15%"}}>Tipo Cultivo</th>
                <th className='thDañoA' style={{width:"15%"}}>Has. Afectada</th>
                <th className='thDañoA' style={{width:"15%"}}>Has. Perdidas</th>
                <th className='thDañoA' style={{width:"25%"}}>Necesidades Inmediatas</th>
                <th className='thDañoA' style={{width:"25%"}}>Observaciones</th>
            </tr>
        </thead>
        <tbody>
          {rows.map((row,index)=>(
          <tr>
            <td className='tdDañoA'><input style={{width:"85%"}} value={row.id} type="text" name="" id="" /></td>
            <td className='tdDañoA'><input style={{width:"95%"}} type="text" name="" id="" /></td>
            <td className='tdDañoA'><input style={{width:"95%"}} onKeyPress={handleKeyPress}type="text" name="" id="" /></td>
            <td className='tdDañoA'><input style={{width:"95%"}} onKeyPress={handleKeyPress}type="text" name="" id="" /></td>
            <td className='tdDañoA'><input style={{width:"97%"}} type="text" name="" id="" /></td>
            <td className='tdDañoA'><input style={{width:"97%"}} type="text" name="" id="" /></td>
          </tr>
          ))}
        </tbody>
        <tfoot className='tfootDañoA'>
            <tr>
                <td className='tdDañoA' colSpan="2"><p style={{margin:"4px"}}>TOTAL Has.</p></td>
                <td className='tdDañoA'></td>
                <td className='tdDañoA'></td>
            </tr>
        </tfoot>
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

export default tablaDañoA