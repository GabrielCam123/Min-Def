import React,{useState} from "react";
import "./tablaNecesidadesS.css";
function tablaServicioS() {
  const initialRows=Array.from({length:4},(_,index)=>({id:index+1}))
  const [rows,setRows]=useState(initialRows)
    const handleKeyPress=(e)=>{
        const charCode=e.charCode
        if(charCode<48||charCode>57){
          e.preventDefault();
        }
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
    <table className="tableNecesidadesS">
        <thead className="theadNecesidadesS">
            <th colSpan={"3"} className="thNecesidadesS" style={{width:"50%",padding:0}}>
                <p style={{margin:"5px"}}>Botiquín(Nro. Personas que requiern atención inmediata)</p>
                <th style={{width:"16%",borderTop:"1px solid black"}}>Incendio</th>
                <th style={{width:"16%",borderTop:"1px solid black", borderRight:"1px solid black",borderLeft:"1px solid black"}}>Inundacion</th>
                <th style={{width:"16%",borderTop:"1px solid black"}}>Sequia</th>
            </th>
            <th className="thNecesidadesS" style={{width:"25%"}}>Otras necesidades</th>
            <th className="thNecesidadesS" style={{width:"25%"}}>Observaciones</th>
        </thead>
        <tbody style={{ width: "100%" }}>
          {rows.map((row,index)=>(
            <tr key={row.id}>
                <td className="tdNecesidadesS"><input onKeyPress={handleKeyPress} style={{width:"96%"}} type="text" name="" id="" /></td>
                <td className="tdNecesidadesS"><input onKeyPress={handleKeyPress} style={{width:"96%"}} type="text" name="" id="" /></td>
                <td className="tdNecesidadesS"><input onKeyPress={handleKeyPress} style={{width:"96%"}} type="text" name="" id="" /></td>
                <td className="tdNecesidadesS"><input style={{width:"98%"}} type="text" name="" id="" /></td>
                <td className="tdNecesidadesS"><input style={{width:"98%"}} type="text" name="" id="" /></td>
            </tr>
          ))}
        </tbody>
    </table>
    <button onClick={addRow} style={{border:"1px solid black",backgroundColor:"white"}}>
      Agregar fila
    </button>
    <button onClick={removeRow} style={{border:"1px solid black",backgroundColor:"white"}}>
      Eliminar fila
    </button> 
  </div>
  );
}

export default tablaServicioS;
