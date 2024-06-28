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
                    <th style={{width:"33%",padding:0,borderTop:"solid black 1px"}}>N° Profesores</th>
                    <th style={{width:"33%",padding:0,borderTop:"solid black 1px"}}>N° Adminis.</th>
                  </div>
                </th>
            </tr>
        </thead>
        <tbody>
          <tr>
            <td className='tdAfectacionA'>a</td>
            <td className='tdAfectacionA'>a</td>
            <td className='tdAfectacionA'>a</td>
            <td className='tdAfectacionA'>a</td>
          </tr>
        </tbody>
        {/* <tfoot>
            <tr>
                <td>Total</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        </tfoot> */}
    </table>
  )
}

export default tablaAfectacionA