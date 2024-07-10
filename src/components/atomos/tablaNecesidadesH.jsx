import React,{useState} from 'react'
import "./tablaNecesidadesH.css"
function tablaNecesidadesH() {
  const initialRows=Array.from({length:7},(_,index)=>({
    id:index+1,
    AyudaH1:["Alimentos","Refugio y Vivienda","Ropa de Cama","Articulos de Higiene","Articulos de Cocina"],
    AyudaH2:["Prendas de Vestir","Herramientas y Accesorios","Almacenamiento de Agua","Baños"],
  }))
  const [rows,setRows]=useState(initialRows)
  return (
    <table className='tableNecesidadesH'>
    <thead className='theadNecesidadesH'> 
        <tr>
            <th className='thNecesidadesH' style={{width:"22%"}}>Ayuda Humanitaria</th>
            <th className='thNecesidadesH' style={{width:"5%"}}>SI</th>
            <th className='thNecesidadesH' style={{width:"23%"}}>Observaciones</th>
            <th className='thNecesidadesH' style={{width:"22%"}}>Ayuda Humanitaria</th>
            <th className='thNecesidadesH' style={{width:"5%"}}>SI</th>
            <th className='thNecesidadesH' style={{width:"23%"}}>Observaciones</th>
        </tr>
    </thead>
    <tbody>
      {rows.map((row,index)=>(
      <tr>
        <td className='tdNecesidadesH'><input type="text" value={row.AyudaH1[index]}/></td>
        <td className='tdNecesidadesH'><input style={{width:"84%"}} type="checkbox" name="" id="" /></td>
        <td className='tdNecesidadesH'><input style={{width:"96%"}} type="text" name="" id="" /></td>
        <td className='tdNecesidadesH'><input type="text" value={row.AyudaH2[index]}/></td>
        <td className='tdNecesidadesH'><input style={{width:"84%"}} type="checkbox" name="" id="" /></td>
        <td className='tdNecesidadesH'><input style={{width:"96%"}} type="text" name="" id="" /></td>
      </tr>
    ))}
    </tbody>

</table>
  )
}

export default tablaNecesidadesH