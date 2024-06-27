import React from "react";

function Observaciones() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        border: "black solid",
        padding: "5px",
        flexDirection: "column",
      }}
    >
      <h4 style={{ margin: "1px" }}>Observaciones</h4>
      <input
        type="text"
        name=""
        id=""
        style={{
          width: "98.5%",
          height: "92%",
          border: "none",
        }}
      />
    </div>
  );
}

export default Observaciones;
