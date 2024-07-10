import React,{useState} from 'react'
import "./tablaDañosU.css"
function tablaDañosU() {
  const initialRows=Array.from({length:6},(_,index)=>({
    id:index+1,
    isDañoParcialChecked:false,
    isDañoTotalChecked:false,
    isSuspensionSiChecked:false,
    isSuspensionNoChecked:false,
    isPerdidaSiChecked:false,
    isPerdidaNoChecked:false,
    isAlbergueSiChecked:false,
    isAlbergueNoChecked:false,
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
            case 'SuspensionSi':
              return{...row, isSuspensionSiChecked: !row.isSuspensionSiChecked, isSuspensionNoChecked:false}
            case 'SuspensionNo':
              return{...row, isSuspensionNoChecked: !row.isSuspensionNoChecked, isSuspensionSiChecked:false}  
            case 'PerdidaSi':
              return{...row, isPerdidaSiChecked: !row.isPerdidaSiChecked, isPerdidaNoChecked:false}
            case 'PerdidaNo':
              return{...row, isPerdidaNoChecked: !row.isPerdidaNoChecked, isPerdidaSiChecked:false}
            case 'AlbergueSi':
              return{...row, isAlbergueSiChecked: !row.isAlbergueSiChecked, isAlbergueNoChecked:false}
            case 'AlbergueNo':
              return{...row, isAlbergueNoChecked: !row.isAlbergueNoChecked, isAlbergueSiChecked:false}  
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
    <table className='tableDañosU'>
    <thead className='theadDañosU'> 
        <tr>
            <th className='thDañosU' style={{width:("5%")}}>N°</th>
            <th className='thDañosU' style={{width:("20%")}}><p style={{margin:("5px")}}>Nombre del</p><p style={{margin:("5px")}}>Establecimiento</p><p style={{margin:(0)}}>Educativo</p></th>
            <th className='thDañosU' style={{width:("15%")}}>Comunidad</th>
            <th className='thDañosU' style={{width:("10%")}}><p style={{margin:("5px")}}>Daño</p><p style={{margin:("5px")}}>Parcial</p></th>
            <th className='thDañosU'style={{width:("10%")}}><p style={{margin:("5px")}}>Daño</p><p style={{margin:("5px")}}>Total</p></th>
            <th colSpan="2" className='thDañosU'style={{ padding:"0", width:("10%")}}><p style={{margin:("5px")}}>Suspencion</p><p style={{margin:("5px")}}>de clases</p>
              <div style={{width:("100%"),display:("flex"),height:"100%"}}>
                <th style={{width:("50%"),borderTop: "solid black 1px",borderRight:"solid black 1px"}}>Si</th>
                <th style={{width:("50%"),borderTop: "solid black 1px",}}>No</th>
              </div>
            </th>
            <th colSpan="2" className='thDañosU'style={{ padding:"0", width:("15%")}}><p style={{margin:("0px"),marginTop:("5px")}}>Se perdio material</p><p style={{margin:("5px")}}>educativo/equip.</p>
              <div style={{width:("100%"),display:("flex"),height:"100%"}}>
                <th style={{width:("50%"),borderTop: "solid black 1px",borderRight:"solid black 1px"}}>Si</th>
                <th style={{width:("50%"),borderTop: "solid black 1px",}}>No</th>
              </div>
            </th>
            <th colSpan="2" className='thDañosU'style={{ padding:"0", width:("15%")}}><p style={{margin:("5px")}}>Funciona como</p><p style={{margin:("5px")}}>albergue</p>
              <div style={{width:("100%"),display:("flex"),height:"100%"}}>
                <th style={{width:("50%"),borderTop: "solid black 1px",borderRight:"solid black 1px"}}>Si</th>
                <th style={{width:("50%"),borderTop: "solid black 1px",}}>No</th>
              </div>
            </th>
        </tr>
    </thead>
    <tbody style={{width:("100%")}}>
      {rows.map((row,index)=>(
        <tr key={row.id}>
          <td className='tdDañosU'><input style={{width:("83%")}} type="text" value={row.id} name="" id="" /></td>
          <td className='tdDañosU'><input style={{width:("95%")}} type="text" name="" id="" /></td>
          <td className='tdDañosU'><input style={{width:("94%")}} type="text" name="" id="" /></td>
          <td className='tdDañosU'><input style={{width:("92%")}} type="checkbox" checked={row.isDañoParcialChecked} onChange={()=>handleCheckboxChange(index,'DañoParcial')} name="" id="" /></td>
          <td className='tdDañosU'><input style={{width:("92%")}} type="checkbox" checked={row.isDañoTotalChecked} onChange={()=>handleCheckboxChange(index,'DañoTotal')} name="" id="" /></td>
          <td className='tdDañosU'><input style={{width:("85%")}} type="checkbox" checked={row.isSuspensionSiChecked} onChange={()=>handleCheckboxChange(index,'SuspensionSi')} name="" id="" /></td>
          <td className='tdDañosU'><input style={{width:("85%")}} type="checkbox" checked={row.isSuspensionNoChecked} onChange={()=>handleCheckboxChange(index,'SuspensionNo')} name="" id="" /></td>
          <td className='tdDañosU'><input style={{width:("89%")}} type="checkbox" checked={row.isPerdidaSiChecked} onChange={()=>handleCheckboxChange(index,'PerdidaSi')} name="" id="" /></td>
          <td className='tdDañosU'><input style={{width:("89%")}} type="checkbox" checked={row.isPerdidaNoChecked} onChange={()=>handleCheckboxChange(index,'PerdidaNo')} name="" id="" /></td>
          <td className='tdDañosU'><input style={{width:("89%")}} type="checkbox" checked={row.isAlbergueSiChecked} onChange={()=>handleCheckboxChange(index,'AlbergueSi')} name="" id="" /></td>
          <td className='tdDañosU'><input style={{width:("89%")}} type="checkbox" checked={row.isAlbergueNoChecked} onChange={()=>handleCheckboxChange(index,'AlbergueNo')} name="" id="" /></td>
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

export default tablaDañosU