import React,{useState} from 'react'
import "./tablaDañoI.css"
function tablaDañoI() {
  const initialRows=Array.from({length:6},(_,index)=>({
    id:index+1,
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
  const addRow=()=>{
    setRows([...rows,{id:rows.length+1}])
  }
  const removeRow=()=>{
    if(rows.length>1){
      setRows(rows.slice(0,-1))
    }
  }
  return (
    <div>
    <table className='tableDañoI'>
        <thead className='theadDañoI'> 
            <tr>
                <th className='thDañoI' style={{width:"10%"}}>Tipo</th>
                <th className='thDañoI' style={{width:"10%"}}><p style={{margin:"5px"}}>N°</p><p style={{margin:"5px"}}>Daño parcial</p></th>
                <th className='thDañoI' style={{width:"10%"}}><p style={{margin:"5px"}}>N°</p><p style={{margin:"5px"}}>Daño Total</p></th>
            </tr>
        </thead>
        <tbody>
        {rows.map((row,index)=>(
          <tr key={row.id}>
            <td className='tdDañoI'><input style={{width:"93%"}} type="text" name="" id="" /></td>
            <td className='tdDañoI'><input style={{width:"93%"}} type="checkbox" checked={row.isDañoParcialChecked} onChange={()=>handleCheckboxChange(index,'DañoParcial')} name="" id="" /></td>
            <td className='tdDañoI'><input style={{width:"93%"}} type="checkbox" checked={row.isDañoTotalChecked} onChange={()=>handleCheckboxChange(index,'DañoTotal')} name="" id="" /></td>
          </tr>
        ))}
        </tbody>
    </table>
    <button onClick={addRow} style={{border:"1px solid black",backgroundColor:"white"}}>
      Agregar Fila
    </button>
    <button onClick={removeRow} style={{border:"1px solid black",backgroundColor:"white"}}>
      Eliminar Fila
    </button>
    </div>
  )
}
export default tablaDañoI