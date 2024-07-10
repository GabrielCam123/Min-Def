import React,{useState} from 'react'
import "./tablaDañoS.css"
function tablaDañoS() {
  const initialRows=Array.from({length:5},(_,index)=>({
    id:index+1,
    Descripcion:["Luz electrica","Agua Potable","Alcantarillado","Gas domiciliario","Telecomunicaciones"],
    isDañoParcialChecked:false,
    isDañoTotalChecked:false,
  }))
  const [rows,setRows]=useState(initialRows)
  const handleCheckboxChange=(index,checkboxType)=>{
    setRows(prevRows =>{
      return prevRows.map((row,i)=>{
        if(i===index){
          switch(checkboxType){
            case 'DañoParcial':
              return{...row, isDañoParcialChecked: !row.isDañoParcialChecked, isDañoTotalChecked:false}
            case 'DañoTotal':
              return{...row, isDañoTotalChecked: !row.isDañoTotalChecked, isDañoParcialChecked:false}
            default:
              return row;
          }
        }
        return row;
      })
    })
  }
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
          {rows.map((row,index)=>(
          <tr key={row.id}>
            <td className='tdDañoS '><input type="text" value={row.Descripcion[index]} readOnly/></td>
            <td className='tdDañoS '><input style={{width:("93%")}} checked={row.isDañoParcialChecked} onChange={()=>handleCheckboxChange(index,'DañoParcial')} type="checkbox" name="" id="" /></td>
            <td className='tdDañoS '><input style={{width:("93%")}} checked={row.isDañoTotalChecked} onChange={()=>handleCheckboxChange(index,'DañoTotal')}type="checkbox" name="" id="" /></td>
            <td className='tdDañoS '><input style={{width:("97%")}} type="text" name="" id="" /></td>
            <td className='tdDañoS '><input style={{width:("97%")}} type="text" name="" id="" /></td>
          </tr>
          ))}
        </tbody>

    </table>    
  )
}

export default tablaDañoS