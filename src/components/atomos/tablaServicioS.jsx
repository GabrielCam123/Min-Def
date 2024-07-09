import React,{useState} from "react";
import "./tablaServicioS.css";
function tablaServicioS() {
  const initialRows=Array.from({length:6},(_,index)=>({
    id:index+1,
    is1erChecked:false,
    is2doChecked:false,
    is3erChecked:false,
    isDañoParcialChecked:false,
    isDañoTotalChecked:false,
  }))
  const [rows,setRows]=useState(initialRows)
  const handleCheckboxChange=(index,checkboxType)=>{
    setRows(prevRows =>{
      return prevRows.map((row,i)=>{
        if(i===index){
          switch(checkboxType){
            case '1er':
              return{...row, is1erChecked: !row.is1erChecked, is2doChecked:false, is3erChecked:false}
            case '2do':
              return{...row, is2doChecked: !row.is2doChecked, is1erChecked:false, is3erChecked:false}
            case '3er':
              return{...row, is3erChecked: !row.is3erChecked, is2doChecked:false, is1erChecked:false}
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
  const handleKeyPress=(e)=>{
    const charCode=e.charCode
    if(charCode<48||charCode>57){
      e.preventDefault();
    }
  }
  return (
  <div>
    <table className="tableServiciosS">
      <thead className="theadServiciosS">
        <tr>
          <th className="thServiciosS" style={{ width: "5%" }}>
            N°
          </th>
          <th className="thServiciosS" style={{ width: "20%" }}>
            Nombre del establecimiento de salud
          </th>
          <th className="thServiciosS" style={{ width: "15%" }}>
            Localidad/Comunidad
          </th>
          <th
            className="thServiciosS"
            style={{ width: "25%", borderCollapse: "collapse", padding:(0)}}
            colSpan="3"
          >
            <p style={{ margin: "5px" }}>Nivel de atencion</p>
            <th
              style={{
                width: "8.3%",
                borderTop: "solid black 1px",
                borderRight: "solid black 1px",
                borderCollapse: "collapse",
              }}
            >
              <p style={{ margin: 0 }}>1er</p>
              <p style={{ margin: 0 }}>Nivel</p>
            </th>
            <th
              style={{
                width: "8.3%",
                borderTop: "solid black 1px",
                borderLeft: "solid black 1px",
                borderCollapse: "collapse",
              }}
            >
              <p style={{ margin: 0 }}>2do</p>
              <p style={{ margin: 0 }}>Nivel</p>
            </th>
            <th
              style={{
                width: "8.3%",
                borderTop: "solid black 1px",
                borderLeft: "solid black 1px",
                borderCollapse: "collapse",
              }}
            >
              <p style={{ margin: 0 }}>3er</p>
              <p style={{ margin: 0 }}>Nivel</p>
            </th>
          </th>
          <th className="thServiciosS" style={{ width: "5%" }}>
            <p style={{ margin: 0 }}>Daño</p>
            <p style={{ margin: 0 }}>Parcial</p>
          </th>
          <th className="thServiciosS" style={{ width: "5%" }}>
            <p style={{ margin: 0 }}>Daño</p>
            <p style={{ margin: 0 }}>Total</p>
          </th>
          <th
            className="thServiciosS"
            style={{ width: "25%", borderCollapse: "collapse", padding:(0)}}
            colSpan="3"
          >
            <p style={{ margin: "5px" }}>Personal de Salud Afectado</p>
            <div style={{width:("100%"),display:("flex"), borderCollapse:("collapse")}}><th
              style={{
                width: "33%",
                borderTop:"solid black 1px",
                borderCollapse: "collapse",
              }}
            >
              <p style={{ margin: 0 }}>N°</p>
              <p style={{ margin: 0 }}>Med.</p>
            </th>
            <th
              style={{
                width: "33%",
                borderRight:"solid black 1px",
                borderLeft:"solid black 1px",
                borderTop:"solid black 1px",
                borderCollapse: "collapse",
              }}
            >
              <p style={{ margin: 0 }}>N°</p>
              <p style={{ margin: 0 }}>Enf.</p>
            </th>
            <th
              style={{
                width: "33%",
                borderTop:"solid black 1px",
                borderCollapse: "collapse",
              }}
            >
              <p style={{ margin: 0 }}>N°</p>
              <p style={{ margin: 0 }}>Otros</p>
            </th>
            </div>
          </th>
        </tr>
      </thead>
      <tbody style={{ width: "100%" }}>
        {rows.map((row,index)=>(
        <tr key={row.id}>
          <td className="tdServiciosS">
            <input
              style={{ width: "90%", border: "none" }}
              type="text"
              name=""
              id=""
              value={row.id} readOnly
            />
          </td>
          <td className="tdServiciosS">
            <input
              style={{ width: "98%", border: "none" }}
              type="text"
              name=""
              id=""
            />
          </td>
          <td className="tdServiciosS">
            <input
              style={{ width: "97%", border: "none" }}
              type="text"
              name=""
              id=""
            />
          </td>
          <td className="tdServiciosS">
            <input
              style={{ width: "92%", border: "none" }}
              type="checkbox"
              name=""
              id=""
              checked={row.is1erChecked}
              onChange={()=>handleCheckboxChange(index,'1er')}
            />
          </td>
          <td className="tdServiciosS">
            <input
              style={{ width: "92%", border: "none" }}
              type="checkbox"
              name=""
              id=""
              checked={row.is2doChecked}
              onChange={()=>handleCheckboxChange(index,'2do')}
            />
          </td>
          <td className="tdServiciosS">
            <input
              style={{ width: "92%", border: "none" }}
              type="checkbox"
              name=""
              id=""
              checked={row.is3erChecked}
              onChange={()=>handleCheckboxChange(index,'3er')}
            />
          </td>
          <td className="tdServiciosS">
            <input
              style={{ width: "90%", border: "none" }}
              type="checkbox"
              name=""
              id=""
              checked={row.isDañoParcialChecked}
              onChange={()=>handleCheckboxChange(index,'DañoParcial')}
            />
          </td>
          <td className="tdServiciosS">
            <input
              style={{ width: "86%", border: "none" }}
              type="checkbox"
              name=""
              id=""
              checked={row.isDañoTotalChecked}
              onChange={() => handleCheckboxChange(index,'DañoTotal')}
            />
          </td>
          <td className="tdServiciosS">
            <input
              style={{ width: "95%", border: "none" }}
              type="text"
              name=""
              id=""
              onKeyPress={handleKeyPress}
            />
          </td>
          <td className="tdServiciosS">
            <input
              style={{ width: "95%", border: "none" }}
              type="text"
              name=""
              id=""
              onKeyPress={handleKeyPress}
            />
          </td>
          <td className="tdServiciosS">
            <input
              style={{ width: "95%", border: "none" }}
              type="text"
              name=""
              id=""
              onKeyPress={handleKeyPress}
            />
          </td>
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
