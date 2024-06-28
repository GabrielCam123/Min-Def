import React from "react";
import "./tablaServicioS.css";
function tablaServicioS() {
  return (
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
        <tr>
          <td className="tdServiciosS">
            <input
              style={{ width: "85%", border: "none" }}
              type="text"
              name=""
              id=""
            />
          </td>
          <td className="tdServiciosS">
            <input
              style={{ width: "96%", border: "none" }}
              type="text"
              name=""
              id=""
            />
          </td>
          <td className="tdServiciosS">
            <input
              style={{ width: "96%", border: "none" }}
              type="text"
              name=""
              id=""
            />
          </td>
          <td className="tdServiciosS">
            <input
              style={{ width: "92%", border: "none" }}
              type="text"
              name=""
              id=""
            />
          </td>
          <td className="tdServiciosS">
            <input
              style={{ width: "92%", border: "none" }}
              type="text"
              name=""
              id=""
            />
          </td>
          <td className="tdServiciosS">
            <input
              style={{ width: "92%", border: "none" }}
              type="text"
              name=""
              id=""
            />
          </td>
          <td className="tdServiciosS">
            <input
              style={{ width: "86%", border: "none" }}
              type="text"
              name=""
              id=""
            />
          </td>
          <td className="tdServiciosS">
            <input
              style={{ width: "86%", border: "none" }}
              type="text"
              name=""
              id=""
            />
          </td>
          <td className="tdServiciosS">
            <input
              style={{ width: "91%", border: "none" }}
              type="text"
              name=""
              id=""
            />
          </td>
          <td className="tdServiciosS">
            <input
              style={{ width: "80%", border: "none" }}
              type="text"
              name=""
              id=""
            />
          </td>
          <td className="tdServiciosS">
            <input
              style={{ width: "91%", border: "none" }}
              type="text"
              name=""
              id=""
            />
          </td>
        </tr>
        <tr>
          <td className="tdServiciosS">
            <input
              style={{ width: "85%", border: "none" }}
              type="text"
              name=""
              id=""
            />
          </td>
          <td className="tdServiciosS">
            <input
              style={{ width: "96%", border: "none" }}
              type="text"
              name=""
              id=""
            />
          </td>
          <td className="tdServiciosS">
            <input
              style={{ width: "96%", border: "none" }}
              type="text"
              name=""
              id=""
            />
          </td>
          <td className="tdServiciosS">
            <input
              style={{ width: "92%", border: "none" }}
              type="text"
              name=""
              id=""
            />
          </td>
          <td className="tdServiciosS">
            <input
              style={{ width: "92%", border: "none" }}
              type="text"
              name=""
              id=""
            />
          </td>
          <td className="tdServiciosS">
            <input
              style={{ width: "92%", border: "none" }}
              type="text"
              name=""
              id=""
            />
          </td>
          <td className="tdServiciosS">
            <input
              style={{ width: "86%", border: "none" }}
              type="text"
              name=""
              id=""
            />
          </td>
          <td className="tdServiciosS">
            <input
              style={{ width: "86%", border: "none" }}
              type="text"
              name=""
              id=""
            />
          </td>
          <td className="tdServiciosS">
            <input
              style={{ width: "91%", border: "none" }}
              type="text"
              name=""
              id=""
            />
          </td>
          <td className="tdServiciosS">
            <input
              style={{ width: "80%", border: "none" }}
              type="text"
              name=""
              id=""
            />
          </td>
          <td className="tdServiciosS">
            <input
              style={{ width: "91%", border: "none" }}
              type="text"
              name=""
              id=""
            />
          </td>
        </tr>
        <tr>
          <td className="tdServiciosS">
            <input
              style={{ width: "85%", border: "none" }}
              type="text"
              name=""
              id=""
            />
          </td>
          <td className="tdServiciosS">
            <input
              style={{ width: "96%", border: "none" }}
              type="text"
              name=""
              id=""
            />
          </td>
          <td className="tdServiciosS">
            <input
              style={{ width: "96%", border: "none" }}
              type="text"
              name=""
              id=""
            />
          </td>
          <td className="tdServiciosS">
            <input
              style={{ width: "92%", border: "none" }}
              type="text"
              name=""
              id=""
            />
          </td>
          <td className="tdServiciosS">
            <input
              style={{ width: "92%", border: "none" }}
              type="text"
              name=""
              id=""
            />
          </td>
          <td className="tdServiciosS">
            <input
              style={{ width: "92%", border: "none" }}
              type="text"
              name=""
              id=""
            />
          </td>
          <td className="tdServiciosS">
            <input
              style={{ width: "86%", border: "none" }}
              type="text"
              name=""
              id=""
            />
          </td>
          <td className="tdServiciosS">
            <input
              style={{ width: "86%", border: "none" }}
              type="text"
              name=""
              id=""
            />
          </td>
          <td className="tdServiciosS">
            <input
              style={{ width: "91%", border: "none" }}
              type="text"
              name=""
              id=""
            />
          </td>
          <td className="tdServiciosS">
            <input
              style={{ width: "80%", border: "none" }}
              type="text"
              name=""
              id=""
            />
          </td>
          <td className="tdServiciosS">
            <input
              style={{ width: "91%", border: "none" }}
              type="text"
              name=""
              id=""
            />
          </td>
        </tr>
        <tr>
          <td className="tdServiciosS">
            <input
              style={{ width: "85%", border: "none" }}
              type="text"
              name=""
              id=""
            />
          </td>
          <td className="tdServiciosS">
            <input
              style={{ width: "96%", border: "none" }}
              type="text"
              name=""
              id=""
            />
          </td>
          <td className="tdServiciosS">
            <input
              style={{ width: "96%", border: "none" }}
              type="text"
              name=""
              id=""
            />
          </td>
          <td className="tdServiciosS">
            <input
              style={{ width: "92%", border: "none" }}
              type="text"
              name=""
              id=""
            />
          </td>
          <td className="tdServiciosS">
            <input
              style={{ width: "92%", border: "none" }}
              type="text"
              name=""
              id=""
            />
          </td>
          <td className="tdServiciosS">
            <input
              style={{ width: "92%", border: "none" }}
              type="text"
              name=""
              id=""
            />
          </td>
          <td className="tdServiciosS">
            <input
              style={{ width: "86%", border: "none" }}
              type="text"
              name=""
              id=""
            />
          </td>
          <td className="tdServiciosS">
            <input
              style={{ width: "86%", border: "none" }}
              type="text"
              name=""
              id=""
            />
          </td>
          <td className="tdServiciosS">
            <input
              style={{ width: "91%", border: "none" }}
              type="text"
              name=""
              id=""
            />
          </td>
          <td className="tdServiciosS">
            <input
              style={{ width: "80%", border: "none" }}
              type="text"
              name=""
              id=""
            />
          </td>
          <td className="tdServiciosS">
            <input
              style={{ width: "91%", border: "none" }}
              type="text"
              name=""
              id=""
            />
          </td>
        </tr>
        <tr>
          <td className="tdServiciosS">
            <input
              style={{ width: "85%", border: "none" }}
              type="text"
              name=""
              id=""
            />
          </td>
          <td className="tdServiciosS">
            <input
              style={{ width: "96%", border: "none" }}
              type="text"
              name=""
              id=""
            />
          </td>
          <td className="tdServiciosS">
            <input
              style={{ width: "96%", border: "none" }}
              type="text"
              name=""
              id=""
            />
          </td>
          <td className="tdServiciosS">
            <input
              style={{ width: "92%", border: "none" }}
              type="text"
              name=""
              id=""
            />
          </td>
          <td className="tdServiciosS">
            <input
              style={{ width: "92%", border: "none" }}
              type="text"
              name=""
              id=""
            />
          </td>
          <td className="tdServiciosS">
            <input
              style={{ width: "92%", border: "none" }}
              type="text"
              name=""
              id=""
            />
          </td>
          <td className="tdServiciosS">
            <input
              style={{ width: "86%", border: "none" }}
              type="text"
              name=""
              id=""
            />
          </td>
          <td className="tdServiciosS">
            <input
              style={{ width: "86%", border: "none" }}
              type="text"
              name=""
              id=""
            />
          </td>
          <td className="tdServiciosS">
            <input
              style={{ width: "91%", border: "none" }}
              type="text"
              name=""
              id=""
            />
          </td>
          <td className="tdServiciosS">
            <input
              style={{ width: "80%", border: "none" }}
              type="text"
              name=""
              id=""
            />
          </td>
          <td className="tdServiciosS">
            <input
              style={{ width: "91%", border: "none" }}
              type="text"
              name=""
              id=""
            />
          </td>
        </tr>
        <tr>
          <td className="tdServiciosS">
            <input
              style={{ width: "85%", border: "none" }}
              type="text"
              name=""
              id=""
            />
          </td>
          <td className="tdServiciosS">
            <input
              style={{ width: "96%", border: "none" }}
              type="text"
              name=""
              id=""
            />
          </td>
          <td className="tdServiciosS">
            <input
              style={{ width: "96%", border: "none" }}
              type="text"
              name=""
              id=""
            />
          </td>
          <td className="tdServiciosS">
            <input
              style={{ width: "92%", border: "none" }}
              type="text"
              name=""
              id=""
            />
          </td>
          <td className="tdServiciosS">
            <input
              style={{ width: "92%", border: "none" }}
              type="text"
              name=""
              id=""
            />
          </td>
          <td className="tdServiciosS">
            <input
              style={{ width: "92%", border: "none" }}
              type="text"
              name=""
              id=""
            />
          </td>
          <td className="tdServiciosS">
            <input
              style={{ width: "86%", border: "none" }}
              type="text"
              name=""
              id=""
            />
          </td>
          <td className="tdServiciosS">
            <input
              style={{ width: "86%", border: "none" }}
              type="text"
              name=""
              id=""
            />
          </td>
          <td className="tdServiciosS">
            <input
              style={{ width: "91%", border: "none" }}
              type="text"
              name=""
              id=""
            />
          </td>
          <td className="tdServiciosS">
            <input
              style={{ width: "80%", border: "none" }}
              type="text"
              name=""
              id=""
            />
          </td>
          <td className="tdServiciosS">
            <input
              style={{ width: "91%", border: "none" }}
              type="text"
              name=""
              id=""
            />
          </td>
        </tr>
      </tbody>
      {/* 
          <tr>
            <td><input type="text" name="" id="" /></td>
            <td><input type="text" name="" id="" /></td>
            <td><input type="text" name="" id="" /></td>
            <td><input type="text" name="" id="" /></td>
            <td><input type="text" name="" id="" /></td>
            <td><input type="text" name="" id="" /></td>
            <td><input type="text" name="" id="" /></td>
            <td><input type="text" name="" id="" /></td>
            <td><input type="text" name="" id="" /></td>
            <td><input type="text" name="" id="" /></td>
            <td><input type="text" name="" id="" /></td>
          </tr>
          <tr>
            <td><input type="text" name="" id="" /></td>
            <td><input type="text" name="" id="" /></td>
            <td><input type="text" name="" id="" /></td>
            <td><input type="text" name="" id="" /></td>
            <td><input type="text" name="" id="" /></td>
            <td><input type="text" name="" id="" /></td>
            <td><input type="text" name="" id="" /></td>
            <td><input type="text" name="" id="" /></td>
            <td><input type="text" name="" id="" /></td>
            <td><input type="text" name="" id="" /></td>
            <td><input type="text" name="" id="" /></td>
          </tr>
          <tr>
            <td><input type="text" name="" id="" /></td>
            <td><input type="text" name="" id="" /></td>
            <td><input type="text" name="" id="" /></td>
            <td><input type="text" name="" id="" /></td>
            <td><input type="text" name="" id="" /></td>
            <td><input type="text" name="" id="" /></td>
            <td><input type="text" name="" id="" /></td>
            <td><input type="text" name="" id="" /></td>
            <td><input type="text" name="" id="" /></td>
            <td><input type="text" name="" id="" /></td>
            <td><input type="text" name="" id="" /></td>
          </tr>
          <tr>
            <td><input type="text" name="" id="" /></td>
            <td><input type="text" name="" id="" /></td>
            <td><input type="text" name="" id="" /></td>
            <td><input type="text" name="" id="" /></td>
            <td><input type="text" name="" id="" /></td>
            <td><input type="text" name="" id="" /></td>
            <td><input type="text" name="" id="" /></td>
            <td><input type="text" name="" id="" /></td>
            <td><input type="text" name="" id="" /></td>
            <td><input type="text" name="" id="" /></td>
            <td><input type="text" name="" id="" /></td>
          </tr>
          <tr>
            <td><input type="text" name="" id="" /></td>
            <td><input type="text" name="" id="" /></td>
            <td><input type="text" name="" id="" /></td>
            <td><input type="text" name="" id="" /></td>
            <td><input type="text" name="" id="" /></td>
            <td><input type="text" name="" id="" /></td>
            <td><input type="text" name="" id="" /></td>
            <td><input type="text" name="" id="" /></td>
            <td><input type="text" name="" id="" /></td>
            <td><input type="text" name="" id="" /></td>
            <td><input type="text" name="" id="" /></td>
          </tr>
        </tbody> */}
    </table>
  );
}

export default tablaServicioS;
