import React from 'react'
import "./tablasEstilos.css"
function tablaNecesidadP() {
  return (
    <table>
        <thead> 
            <tr>
                <th>Equipo</th>
                <th>Requerimiento(Si/No)</th>
                <th>Observaciones</th>
            </tr>
        </thead>
        <tbody>
          <tr>
            <td>Busqueda</td>
            <td><input type="text" name="" id="" /></td>
            <td><input type="text" name="" id="" /></td>
          </tr>
          <tr>
            <td>Salvamento/rescate</td>
            <td><input type="text" name="" id="" /></td>
            <td><input type="text" name="" id="" /></td>
          </tr>
          <tr>
            <td>Evacuacion</td>
            <td><input type="text" name="" id="" /></td>
            <td><input type="text" name="" id="" /></td>
          </tr>
        </tbody>

    </table>
  )
}

export default tablaNecesidadP