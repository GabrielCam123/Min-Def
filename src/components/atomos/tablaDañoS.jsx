import React from 'react'
import "./tablasEstilos.css"
function tablaDañoS() {
  return (
    <table>
        <thead> 
            <tr>
                <th>Descripcion</th>
                <th>Daño Parcial</th>
                <th>Daño Total</th>
                <th>Necesidades Inmediatas</th>
                <th>Observaciones:</th>
            </tr>
        </thead>
        <tbody>
          <tr>
            <td>Luz Electrica</td>
            <td><input type="text" name="" id="" /></td>
            <td><input type="text" name="" id="" /></td>
            <td><input type="text" name="" id="" /></td>
            <td><input type="text" name="" id="" /></td>
          </tr>
          <tr>
            <td>Agua Potable</td>
            <td><input type="text" name="" id="" /></td>
            <td><input type="text" name="" id="" /></td>
            <td><input type="text" name="" id="" /></td>
            <td><input type="text" name="" id="" /></td>
          </tr>
          <tr>
            <td>Alcantarillado</td>
            <td><input type="text" name="" id="" /></td>
            <td><input type="text" name="" id="" /></td>
            <td><input type="text" name="" id="" /></td>
            <td><input type="text" name="" id="" /></td>
          </tr>
          <tr>
            <td>Gas domiciliario</td>
            <td><input type="text" name="" id="" /></td>
            <td><input type="text" name="" id="" /></td>
            <td><input type="text" name="" id="" /></td>
            <td><input type="text" name="" id="" /></td>
          </tr>
          <tr>
            <td>Telecomunicaciones</td>
            <td><input type="text" name="" id="" /></td>
            <td><input type="text" name="" id="" /></td>
            <td><input type="text" name="" id="" /></td>
            <td><input type="text" name="" id="" /></td>
          </tr>
        </tbody>

    </table>    
  )
}

export default tablaDañoS