import React from 'react'
import "./tablaImpactoP.css"
function tablaImpactoP() {
  const Nrofallecido="94%";const Nroheridos="94%";const Nrodesaparecidos="95%"
  return (
    <table className='tableImpactoP'>
        <thead className='theadImpactoP'> 
            <tr>
                <th className='thImpactoP' style={{width:("30%")}}>Grupo Etario</th>
                <th className='thImpactoP' style={{width:("9%")}}><p style={{margin:0,width:("auto")}}>Nro.</p><p style={{margin:0,width:("auto")}}>Fallecidos</p></th>
                <th className='thImpactoP' style={{width:("9%")}}><p style={{margin:0}}>Nro.</p><p style={{margin:0}}>Heridos</p></th>
                <th className='thImpactoP' style={{width:("12%")}}><p style={{margin:0}}>Nro.</p><p style={{margin:0}}>Desaparecidos</p></th>
                <th className='thImpactoP' style={{width:("40%")}}>Observaciones:</th>
            </tr>
        </thead>
        <tbody>
          <tr>
            <td className='tdImpactoP'>Niño (a) 0-5 años</td>
            <td className='tdImpactoP'><input style={{width:(Nrofallecido)}} type="text" name="" id="" /></td>
            <td className='tdImpactoP'><input style={{width:(Nroheridos)}} type="text" name="" id="" /></td>
            <td className='tdImpactoP'><input style={{width:(Nrodesaparecidos)}} type="text" name="" id="" /></td>
            <td className='tdImpactoP'><input style={{width:("98.5%")}} type="text" name="" id="" /></td> 
          </tr>
          <tr>
            <td className='tdImpactoP'>Escolar de 6-18 años</td>
            <td className='tdImpactoP'><input style={{width:(Nrofallecido)}} type="text" name="" id="" /></td>
            <td className='tdImpactoP'><input style={{width:(Nroheridos)}} type="text" name="" id="" /></td>
            <td className='tdImpactoP'><input style={{width:(Nrodesaparecidos)}} type="text" name="" id="" /></td>
            <td className='tdImpactoP'><input style={{width:("98.5%")}} type="text" name="" id="" /></td>
          </tr>
          <tr>
            <td className='td'>adulto de 19-60 años</td>
            <td className='tdImpactoP'><input style={{width:(Nrofallecido)}} type="text" name="" id="" /></td>
            <td className='tdImpactoP'><input style={{width:(Nroheridos)}} type="text" name="" id="" /></td>
            <td className='tdImpactoP'><input style={{width:(Nrodesaparecidos)}} type="text" name="" id="" /></td>
            <td className='tdImpactoP'><input style={{width:("98.5%")}} type="text" name="" id="" /></td>
          </tr>
          <tr>
            <td className='tdImpactoP'>Adulto mayor de 60 años adelante</td>
            <td className='tdImpactoP'><input style={{width:(Nrofallecido)}} type="text" name="" id="" /></td>
            <td className='tdImpactoP'><input style={{width:(Nroheridos)}} type="text" name="" id="" /></td>
            <td className='tdImpactoP'><input style={{width:(Nrodesaparecidos)}} type="text" name="" id="" /></td>
            <td className='tdImpactoP'><input style={{width:("98.5%")}} type="text" name="" id="" /></td>
          </tr>
        </tbody>
    </table>
  )
}

export default tablaImpactoP