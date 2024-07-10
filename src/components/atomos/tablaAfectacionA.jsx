import React,{useState} from 'react'
import "./tablaAfectacionA.css"
function tablaAfectacionA() {
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
    <table className='tableAfectacionA'>
        <thead className='theadAfectacionA'> 
            <tr>
                <th className='thAfectacionA'>Establecimiento Educativo</th>
                <th className='thAfectacionA'colSpan="3" style={{padding:0}}><p>Total Afectados</p>
                  <div style={{display:"flex",padding:"0"}}>
                    <th style={{width:"33.3%",padding:0,borderTop:"solid black 1px"}}>N° Estudiantes</th>
                    <th style={{width:"33.3%",padding:0,borderTop:"solid black 1px",borderLeft:"solid black 1px",borderRight:"solid black 1px"}}>N° Profesores</th>
                    <th style={{width:"33.3%",padding:0,borderTop:"solid black 1px"}}>N° Adminis.</th>
                  </div>
                </th>
            </tr>
        </thead>
        <tbody>
        {rows.map((row,index)=>(
          <tr key={row.id}>
            <td className='tdAfectacionA'><input style={{width:"96%"}} type="text" name="" id="" /></td>
            <td className='tdAfectacionA'><input style={{width:"94%"}} onKeyPress={handleKeyPress}type="text" name="" id="" /></td>
            <td className='tdAfectacionA'><input style={{width:"94%"}} onKeyPress={handleKeyPress}type="text" name="" id="" /></td>
            <td className='tdAfectacionA'><input style={{width:"94%"}} onKeyPress={handleKeyPress}type="text" name="" id="" /></td>
          </tr>
        ))}
        </tbody>
        <tfoot className='tfootAfectacionA'>
            <tr>
                <td className='tdAfectacionA'>Total</td>
                <td className='tdAfectacionA'></td>
                <td className='tdAfectacionA'></td>
                <td className='tdAfectacionA'></td>
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

export default tablaAfectacionA