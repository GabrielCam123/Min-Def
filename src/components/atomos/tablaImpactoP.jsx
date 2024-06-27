import React from 'react'
import "./tablaImpactoP.css"
function tablaImpactoP() {
  return (
    <table className='table'>
        <thead className='thead'> 
            <tr>
                <th className='th' style={{width:("20%")}}>Grupo Etario</th>
                <th className='th' style={{width:("9%")}}><p style={{margin:0,width:("auto")}}>Nro.</p><p style={{margin:0,width:("auto")}}>Fallecidos</p></th>
                <th className='th' style={{width:("9%")}}><p style={{margin:0}}>Nro.</p><p style={{margin:0}}>Heridos</p></th>
                <th className='th' style={{width:("12%")}}><p style={{margin:0}}>Nro.</p><p style={{margin:0}}>Desaparecidos</p></th>
                <th className='th' style={{width:("50%")}}>Observaciones:</th>
            </tr>
        </thead>
        <tbody>
          <tr>
            <td className='td'>Niño (a) 0-5 años</td>
            <td className='td'><input className='inputtext' type="text" name="" id="" /></td>
            <td className='td'><input className='inputtext' type="text" name="" id="" /></td>
            <td className='td'><input className='inputtext' type="text" name="" id="" /></td>
            <td className='td'><input className='inputtext' type="text" name="" id="" /></td>
          </tr>
          <tr>
            <td className='td'>Escolar de 6-18 años</td>
            <td className='td'></td>
            <td className='td'></td>
            <td className='td'></td>
            <td className='td'></td>
          </tr>
          <tr>
            <td className='td'>adulto de 19-60 años</td>
            <td className='td'></td>
            <td className='td'></td>
            <td className='td'></td>
            <td className='td'></td>
          </tr>
          <tr>
            <td className='td'>Adulto mayor de 60 años adelante</td>
            <td className='td'></td>
            <td className='td'></td>
            <td className='td'></td>
            <td className='td'></td>
          </tr>
        </tbody>
    </table>
  )
}

export default tablaImpactoP