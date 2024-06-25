import React from 'react'
import "./tablasEstilos.css"
function tablaEventos() {
  return (
    <table>
        <thead> 
            <tr>
                <th>Inundacion</th>
                <th>Riada</th>
                <th>Deslizamineto</th>
                <th>Helada</th>
                <th>Granizada</th>
                <th>Sequia</th>
                <th>Incendios</th>
                <th>Otros</th>
            </tr>
        </thead>
        <tbody>
          <tr>
            <td><input type="checkbox" name="" id="" /></td>
            <td><input type="checkbox" name="" id="" /></td>
            <td><input type="checkbox" name="" id="" /></td>
            <td><input type="checkbox" name="" id="" /></td>
            <td><input type="checkbox" name="" id="" /></td>
            <td><input type="checkbox" name="" id="" /></td>
            <td><input type="checkbox" name="" id="" /></td>
            <td><input type="checkbox" name="" id="" /></td>
          </tr>
        </tbody>

    </table>
  )
}

export default tablaEventos