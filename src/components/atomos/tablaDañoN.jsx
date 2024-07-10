import React,{useState} from 'react'
import "./tablaDañoN.css"
function tablaDañoN() {
  const initialRows=Array.from({length:6},(_,index)=>({
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
    <table className='tableDañoN'>
        <thead className='theadDañoN'> 
            <tr>
                <th className='thDañoN' style={{width:"12%"}}>Tipo(Especie)</th>
                <th className='thDañoN' style={{width:"12%"}}>Raza</th>
                <th className='thDañoN' style={{width:"12%"}}>N° Animales Afectados</th>
                <th className='thDañoN' style={{width:"12%"}}>N° Animales Muertos</th>
                <th className='thDañoN' style={{width:"12%"}}>Necesidades Inmediatas</th>
            </tr>
        </thead>
        <tbody>
          {rows.map((row,index)=>(
          <tr>
            <td className='tdDañoN'><input style={{width:"94%"}} type="text" name="" id="" /></td>
            <td className='tdDañoN'><input style={{width:"94%"}} type="text" name="" id="" /></td>
            <td className='tdDañoN'><input style={{width:"94%"}} onKeyPress={handleKeyPress}type="text" name="" id="" /></td>
            <td className='tdDañoN'><input style={{width:"94%"}} onKeyPress={handleKeyPress}type="text" name="" id="" /></td>
            <td className='tdDañoN'><input style={{width:"94%"}} type="text" name="" id="" /></td>
          </tr>
          ))}
        </tbody>
        <tfoot className='tfootDañoN'>
            <tr>
                <td className='tdDañoN'><p style={{margin:"4px"}}>Total</p></td>
                <td className='tdDañoN'></td>
                <td className='tdDañoN'></td>
                <td className='tdDañoN'></td>
                <td className='tdDañoN'></td>
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

export default tablaDañoN