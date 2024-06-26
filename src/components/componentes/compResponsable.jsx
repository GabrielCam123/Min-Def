import React from 'react'
import "./compResponsable.css"
import Texteinput from "../atomos/texteinput"
function compResponsable() {
  return (
    <div className='contenedorcompResponsable'>
        <Texteinput texto={"Nombre del Alcalde municipal:"} anchob={"40%"} anchop={"60%"} anchoi={"80%"} direccion={"column"} marginb={"3px"}/>
        <Texteinput texto={"Cargo"} anchob={"15%"} anchop={"25%"} anchoi={"80%"} direccion={"column"} marginb={"3px"}/>
        <Texteinput texto={"Fono/Celular:"} anchob={"15%"} anchop={"70%"} anchoi={"80%"} direccion={"column"} marginb={"3px"}/>
        <Texteinput texto={"E-mail:"} anchob={"30%"} anchop={"20%"} anchoi={"80%"} direccion={"column"} marginb={"3px"}/>
    </div>
  )
}

export default compResponsable