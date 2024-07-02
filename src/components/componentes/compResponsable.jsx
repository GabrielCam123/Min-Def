import React from 'react'
import "./compResponsable.css"
import Texteinput from "../atomos/texteinput"
function compResponsable() {
  return (
    <div className='contenedorcompResponsable'>
        <Texteinput texto={"Nombre y Apellido del responsable de llenar el formulario:"} anchob={"55%"} anchop={"100%"} anchoi={"80%"} direccion={"column"} marginb={"3px"}/>
        <Texteinput texto={"Cargo:"} anchob={"20%"} anchop={"30%"} anchoi={"80%"} direccion={"column"} marginb={"3px"}/>
        <Texteinput texto={"Fono/Celular:"} anchob={"15%"} anchop={"80%"} anchoi={"80%"} direccion={"column"} marginb={"3px"}/>
        <Texteinput texto={"E-mail:"} anchob={"30%"} anchop={"20%"} anchoi={"80%"} direccion={"column"} marginb={"3px"}/>
    </div>
  )
}

export default compResponsable