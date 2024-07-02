import React from 'react'
import "./tablaNombreC.css"
function tablaNombreC() {
  return (
    <table className='tableNombreC'>
    <thead className='theadNombreC'> 
        <tr>
            <th className='thNombreC' style={{width:"5%"}}>N°</th>
            <th className='thNombreC' style={{width:"25%"}}>Com./Loc./Barrio</th>
            <th className='thNombreC' style={{width:"5%"}}>N°</th>
            <th className='thNombreC' style={{width:"25%"}}>Com./Loc./Barrio</th>
            <th className='thNombreC' style={{width:"5%"}}>N°</th>
            <th className='thNombreC' style={{width:"25%"}}>Com./Loc./Barrio</th>
        </tr>
    </thead>
    <tbody>
      <tr>
        <td className='thNombreC'><input style={{width:"85%"}} type="text" name="" id="" /></td>
        <td className='thNombreC'><input style={{width:"97%"}} type="text" name="" id="" /></td>
        <td className='thNombreC'><input style={{width:"85%"}} type="text" name="" id="" /></td>
        <td className='thNombreC'><input style={{width:"97%"}} type="text" name="" id="" /></td>
        <td className='thNombreC'><input style={{width:"85%"}} type="text" name="" id="" /></td>
        <td className='thNombreC'><input style={{width:"97%"}} type="text" name="" id="" /></td>
      </tr>
    </tbody>

</table>
  )
}

export default tablaNombreC