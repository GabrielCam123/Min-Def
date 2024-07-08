import React from "react";
import "./tablaNecesidadP.css";
function tablaNecesidadP() {
  return (
    <table className="tableNecesidadesP">
      <thead className="theadNecesidadesP">
        <tr>
          <th className="thNecesidadesP">Equipo</th>
          <th className="thNecesidadesP"><p style={{margin:"5px",width:"95%"}}>Requerimiento</p><p style={{margin:"5px",width:"90%"}}>(Si/No)</p></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="tdNecesidadesP">Busqueda</td>
          <td className="tdNecesidadesP">
            <input style={{width:"98%"}} type="checkbox" name="" id="" />
          </td>
        </tr>
        <tr>
          <td className="tdNecesidadesP">Salvamento/rescate</td>
          <td className="tdNecesidadesP">
            <input style={{width:"98%"}} type="checkbox" name="" id="" />
          </td>
        </tr>
        <tr>
          <td className="tdNecesidadesP">Evacuacion</td>
          <td className="tdNecesidadesP">
            <input style={{width:"98%"}} type="checkbox" name="" id="" />
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default tablaNecesidadP;
