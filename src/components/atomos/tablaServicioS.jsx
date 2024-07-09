import React,{useState} from "react";
import "./tablaServicioS.css";
function tablaServicioS() {
  const initialRows=Array.from({length:6},(_,index)=>({id:index+1}))
  const [isDañoParcialChecked, setDañoParcialCheked]=useState(false)
  const [isDañoTotalChecked, setDañoTotalCheked]=useState(false)
  const [is1erChecked,set1erCheked]=useState(false)
  const [is2doChecked,set2doCheked]=useState(false)
  const [is3erChecked,set3erCheked]=useState(false)
  const handle3erChange=(e)=>{
    set3erCheked(e.target.checked)
    if(e.target.checked){
      set2doCheked(false)
      set1erCheked(false)
    }
  }
  const handle2doChange=(e)=>{
    set2doCheked(e.target.checked)
    if(e.target.checked){
      set1erCheked(false)
      set3erCheked(false)
    }
  }
  const handle1erChange=(e)=>{
    set1erCheked(e.target.checked)
    if(e.target.checked){
      set2doCheked(false)
      set3erCheked(false)
    }
  }
  const handleDañoParcialChange=(e)=>{
    setDañoParcialCheked(e.target.checked);
    if(e.target.checked){
      setDañoTotalCheked(false)
    }
  }
  const handleDañoTotalChange=(e)=>{
    setDañoTotalCheked(e.target.checked);
    if(e.target.checked){
      setDañoParcialCheked(false)
    }
  }
  const handleKeyPress=(e)=>{
    const charCode=e.charCode;
    if(charCode<48||charCode>57){
        e.preventDefault();
    }
  }
  const [rows,setRows]=useState(initialRows)
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
              value={row.id}
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
              checked={is1erChecked}
              onChange={handle1erChange}
            />
          </td>
          <td className="tdServiciosS">
            <input
              style={{ width: "92%", border: "none" }}
              type="checkbox"
              name=""
              id=""
              checked={is2doChecked}
              onChange={handle2doChange}
            />
          </td>
          <td className="tdServiciosS">
            <input
              style={{ width: "92%", border: "none" }}
              type="checkbox"
              name=""
              id=""
              checked={is3erChecked}
              onChange={handle3erChange}
            />
          </td>
          <td className="tdServiciosS">
            <input
              style={{ width: "90%", border: "none" }}
              type="checkbox"
              name=""
              id=""
              checked={isDañoParcialChecked}
              onChange={handleDañoParcialChange}
            />
          </td>
          <td className="tdServiciosS">
            <input
              style={{ width: "86%", border: "none" }}
              type="checkbox"
              name=""
              id=""
              checked={isDañoTotalChecked}
              onChange={handleDañoTotalChange}
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
