import React,{useState} from 'react'
import "./tablasNecesidadesP.css"
function tablasNecesidadesP() {
  const initialRows=Array.from({length:7},(_,index)=>({
    id:index+1,
    poblacion:["Niñas y niños","Adolecentes","Mujeres Lactantes","Mujeres Embarazadas","Adultos Mayores","Personas con discapacidad","Personas con Enfermedad inahilitante"],
  }))
  const [rows,setRows]=useState(initialRows)
  const handleKeyPress=(e)=>{
    const charCode=e.charCode
    if(charCode<48||charCode>57){
      e.preventDefault();
    }
  }
  return (
    <table className='tableNecesidadesP'>
    <thead className='theadNecesidadesP'> 
        <tr>
            <th className='thNecesidadesP' style={{width:"5%"}}>N°</th>
            <th className='thNecesidadesP' style={{width:"22%"}}>Poblacion en situacion de mayor vulnerabilidad</th>
            <th className='thNecesidadesP' style={{width:"8%"}}>N° Mujeres</th>
            <th className='thNecesidadesP' style={{width:"8%"}}>N° Hombres</th>
            <th className='thNecesidadesP' style={{width:"8%"}}>Total</th>
            <th colSpan="2" style={{padding:"0",width:"24%"}} className='thNecesidadesP'>
              <p style={{margin:"2px"}}>Necesidades</p>
              <div>
                <th style={{width:"50%",borderTop:"solid black 1px",borderRight:"solid black 1px"}}>Apoyo Psicologico</th>
                <th style={{width:"50%",borderTop:"solid black 1px"}}>Reposición Doc. de Identidad</th>
              </div>
            </th>
            <th className='thNecesidadesP' style={{width:"25%"}}>Observaciones</th>
        </tr>
    </thead>
    <tbody>
      {rows.map((row,index)=>(
      <tr>
        <td className='tdNecesidadesP'> <input type="text" style={{width:"90%"}}value={row.id} readOnly/></td>
        <td className='tdNecesidadesP'><input type="text" style={{width:"98%"}} value={row.poblacion[index]} readOnly/></td>
        <td className='tdNecesidadesP'><input style={{width:"92%"}} onKeyPress={handleKeyPress}type="text" name="" id="" /></td>
        <td className='tdNecesidadesP'><input style={{width:"91%"}} onKeyPress={handleKeyPress}type="text" name="" id="" /></td>
        <td className='tdNecesidadesP'><input style={{width:"89%"}}type="text" name="" id="" /></td>
        <td className='tdNecesidadesP'><input style={{width:"94%"}}type="text" name="" id="" /></td>
        <td className='tdNecesidadesP'><input style={{width:"94%"}}type="text" name="" id="" /></td>
        <td className='tdNecesidadesP'><input style={{width:"97%"}}type="text" name="" id="" /></td>
      </tr>
      ))}

    </tbody>

</table>
  )
}

export default tablasNecesidadesP