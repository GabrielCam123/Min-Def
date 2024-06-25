import React from 'react'
import "./tablasEstilos.css"
function tablaImpactoP() {
  return (
    <table>
        <thead> 
            <tr>
                <th>Grupo Etario</th>
                <th>Nro. Fallecidos</th>
                <th>Nro. Heridos</th>
                <th>Nro. Desaparecidos</th>
                <th>Observaciones:</th>
            </tr>
        </thead>
        <tbody>
          <tr>
            <td>Niño (a) 0-5 años</td>
            <td><input type="text" name="" id="" /></td>
            <td><input type="text" name="" id="" /></td>
            <td><input type="text" name="" id="" /></td>
            <td><input type="text" name="" id="" /></td>
          </tr>
          <tr>
            <td>Escolar de 6-18 años</td>
            <td><input type="text" name="" id="" /></td>
            <td><input type="text" name="" id="" /></td>
            <td><input type="text" name="" id="" /></td>
            <td><input type="text" name="" id="" /></td>
          </tr>
          <tr>
            <td>adulto de 19-60 años</td>
            <td><input type="text" name="" id="" /></td>
            <td><input type="text" name="" id="" /></td>
            <td><input type="text" name="" id="" /></td>
            <td><input type="text" name="" id="" /></td>
          </tr>
          <tr>
            <td>Adulto mayor de 60 años adelante</td>
            <td><input type="text" name="" id="" /></td>
            <td><input type="text" name="" id="" /></td>
            <td><input type="text" name="" id="" /></td>
            <td><input type="text" name="" id="" /></td>
          </tr>
        </tbody>

    </table>
  )
}

export default tablaImpactoP