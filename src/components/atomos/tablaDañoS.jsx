import React from 'react'
import "./tablaDañoS.css"
function tablaDañoS() {
  return (
    <table className='tableDañoS'>
        <thead className='theadDañoS'> 
            <tr>
                <th className='thDañoS' style={{width:("20%")}}>Descripcion</th>
                <th className='thDañoS' style={{width:("12%")}}>Daño Parcial</th>
                <th className='thDañoS' style={{width:("12%")}}>Daño Total</th>
                <th className='thDañoS' style={{width:("28%")}}>Necesidades Inmediatas</th>
                <th className='thDañoS' style={{width:("28%")}}>Observaciones:</th>
            </tr>
        </thead>
        <tbody style={{width:("100%")}}>
          <tr>
            <td className='tdDañoS '>Luz Electrica</td>
            <td className='tdDañoS '><input style={{width:("93%")}} type="text" name="" id="" /></td>
            <td className='tdDañoS '><input style={{width:("93%")}} type="text" name="" id="" /></td>
            <td className='tdDañoS '><input style={{width:("97%")}} type="text" name="" id="" /></td>
            <td className='tdDañoS '><input style={{width:("97%")}} type="text" name="" id="" /></td>
          </tr>
          <tr>
            <td className='tdDañoS '>Agua Potable</td>
            <td className='tdDañoS '><input style={{width:("93%")}} type="text" name="" id="" /></td>
            <td className='tdDañoS '><input style={{width:("93%")}} type="text" name="" id="" /></td>
            <td className='tdDañoS '><input style={{width:("97%")}} type="text" name="" id="" /></td>
            <td className='tdDañoS '><input style={{width:("97%")}} type="text" name="" id="" /></td>
          </tr>
          <tr>
            <td className='tdDañoS '>Alcantarillado</td>
            <td className='tdDañoS '><input style={{width:("93%")}} type="text" name="" id="" /></td>
            <td className='tdDañoS '><input style={{width:("93%")}} type="text" name="" id="" /></td>
            <td className='tdDañoS '><input style={{width:("97%")}} type="text" name="" id="" /></td>
            <td className='tdDañoS '><input style={{width:("97%")}} type="text" name="" id="" /></td>
          </tr>
          <tr>
            <td className='tdDañoS '>Gas domiciliario</td>
            <td className='tdDañoS '><input style={{width:("93%")}} type="text" name="" id="" /></td>
            <td className='tdDañoS '><input style={{width:("93%")}} type="text" name="" id="" /></td>
            <td className='tdDañoS '><input style={{width:("97%")}} type="text" name="" id="" /></td>
            <td className='tdDañoS '><input style={{width:("97%")}} type="text" name="" id="" /></td>
          </tr>
          <tr>
            <td className='tdDañoS '>Telecomunicaciones</td>
            <td className='tdDañoS '><input style={{width:("93%")}} type="text" name="" id="" /></td>
            <td className='tdDañoS '><input style={{width:("93%")}} type="text" name="" id="" /></td>
            <td className='tdDañoS '><input style={{width:("97%")}} type="text" name="" id="" /></td>
            <td className='tdDañoS '><input style={{width:("97%")}} type="text" name="" id="" /></td>
          </tr>
        </tbody>

    </table>    
  )
}

export default tablaDañoS