import React from 'react'
import "./tablaEventos.css"
function tablaEventos() {
  return (
    <table className='tableeventos'>
        <thead className='theadeventos'> 
            <tr>
                <th className='theventos'>Inundacion</th>
                <th className='theventos'>Riada</th>
                <th className='theventos'>Deslizamineto</th>
                <th className='theventos'>Helada</th>
                <th className='theventos'>Granizada</th>
                <th className='theventos'>Sequia</th>
                <th className='theventos'>Incendios</th>
                <th className='theventos'>Otros</th>
            </tr>
        </thead>
        <tbody>
          <tr>
            <td className='tdeventos'><input type="checkbox" name="" id="" /></td>
            <td className='tdeventos'><input type="checkbox" name="" id="" /></td>
            <td className='tdeventos'><input type="checkbox" name="" id="" /></td>
            <td className='tdeventos'><input type="checkbox" name="" id="" /></td>
            <td className='tdeventos'><input type="checkbox" name="" id="" /></td>
            <td className='tdeventos'><input type="checkbox" name="" id="" /></td>
            <td className='tdeventos'><input type="checkbox" name="" id="" /></td>
            <td className='tdeventos'><input type="checkbox" name="" id="" /></td>
          </tr>
        </tbody>

    </table>
  )
}

export default tablaEventos