import React from 'react'
import "./tablaAfectacionA.css"
function tablaAfectacionA() {
  return (
    <table className='tableAfectacionA'>
        <thead className='theadAfectacionA'> 
            <tr>
                <th className='thAfectacionA'>Establecimiento Educativo</th>
                <th className='thAfectacionA'colSpan="3" style={{padding:0}}><p>Total Afectados</p>
                  <div style={{display:"flex",padding:"0"}}>
                    <th style={{width:"33%",padding:0,borderTop:"solid black 1px"}}>N° Estudiantes</th>
                    <th style={{width:"33%",padding:0,borderTop:"solid black 1px",borderLeft:"solid black 1px",borderRight:"solid black 1px"}}>N° Profesores</th>
                    <th style={{width:"33%",padding:0,borderTop:"solid black 1px"}}>N° Adminis.</th>
                  </div>
                </th>
            </tr>
        </thead>
        <tbody>
          <tr>
            <td className='tdAfectacionA'><input style={{width:"96%"}} type="text" name="" id="" /></td>
            <td className='tdAfectacionA'><input style={{width:"94%"}} type="text" name="" id="" /></td>
            <td className='tdAfectacionA'><input style={{width:"94%"}} type="text" name="" id="" /></td>
            <td className='tdAfectacionA'><input style={{width:"94%"}} type="text" name="" id="" /></td>
          </tr>
          <tr>
            <td className='tdAfectacionA'><input style={{width:"96%"}} type="text" name="" id="" /></td>
            <td className='tdAfectacionA'><input style={{width:"94%"}} type="text" name="" id="" /></td>
            <td className='tdAfectacionA'><input style={{width:"94%"}} type="text" name="" id="" /></td>
            <td className='tdAfectacionA'><input style={{width:"94%"}} type="text" name="" id="" /></td>
          </tr>
          <tr>
            <td className='tdAfectacionA'><input style={{width:"96%"}} type="text" name="" id="" /></td>
            <td className='tdAfectacionA'><input style={{width:"94%"}} type="text" name="" id="" /></td>
            <td className='tdAfectacionA'><input style={{width:"94%"}} type="text" name="" id="" /></td>
            <td className='tdAfectacionA'><input style={{width:"94%"}} type="text" name="" id="" /></td>
          </tr>
          <tr>
            <td className='tdAfectacionA'><input style={{width:"96%"}} type="text" name="" id="" /></td>
            <td className='tdAfectacionA'><input style={{width:"94%"}} type="text" name="" id="" /></td>
            <td className='tdAfectacionA'><input style={{width:"94%"}} type="text" name="" id="" /></td>
            <td className='tdAfectacionA'><input style={{width:"94%"}} type="text" name="" id="" /></td>
          </tr>
          <tr>
            <td className='tdAfectacionA'><input style={{width:"96%"}} type="text" name="" id="" /></td>
            <td className='tdAfectacionA'><input style={{width:"94%"}} type="text" name="" id="" /></td>
            <td className='tdAfectacionA'><input style={{width:"94%"}} type="text" name="" id="" /></td>
            <td className='tdAfectacionA'><input style={{width:"94%"}} type="text" name="" id="" /></td>
          </tr>
          <tr>
            <td className='tdAfectacionA'><input style={{width:"96%"}} type="text" name="" id="" /></td>
            <td className='tdAfectacionA'><input style={{width:"94%"}} type="text" name="" id="" /></td>
            <td className='tdAfectacionA'><input style={{width:"94%"}} type="text" name="" id="" /></td>
            <td className='tdAfectacionA'><input style={{width:"94%"}} type="text" name="" id="" /></td>
          </tr>
        </tbody>
        <tfoot className='tfootAfectacionA'>
            <tr>
                <td className='tdAfectacionA'>Total</td>
                <td className='tdAfectacionA'></td>
                <td className='tdAfectacionA'></td>
                <td className='tdAfectacionA'></td>
                <td className='tdAfectacionA'></td>
            </tr>
        </tfoot>
    </table>
  )
}

export default tablaAfectacionA