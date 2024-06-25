import React from 'react'
import Texteinput from '../atomos/texteinput'
import "./compDatosG.css"
function compDatosG() {
    const text1="Departamento :";const text2="Municipio :";const text3="N° Localidades afectadas :"
    return (
    <div className='contenedorcompDatosG'>

      <div className='localidad'>
        <h3>1. DATOS GENERALES</h3>
        <Texteinput texto={text1} anchob={"320px"} anchop={"120px"} anchoi={"180px"}/>
        <Texteinput texto={text2} anchob={"320px"} anchop={"120px"} anchoi={"180px"}/>
        <Texteinput texto={text3} anchob={"320px"} anchop={"120px"} anchoi={"180px"}/>
      </div>
      <div className='datos'>
         <div className='datosalcalde'>
          <Texteinput texto={"Nombre del Alcalde municipal:"} anchob={"65%"} anchop={"250px"} anchoi={"80%"} direccion={"column"} marginb={"3px"}/>
          <Texteinput texto={"Fono/Cel:"} anchob={"35%"} direccion={"column"} marginb={"3px"} anchoi={"100%"}/>
        </div>
        <div className='datoseventos'>
          <Texteinput texto={"Hora del evento:"} anchob={"35%"} direccion={"column"} marginb={"3px"} anchoi={"80%"}/> 
          <Texteinput texto={"Fecha llenado formulario:"} anchob={"35%"} direccion={"column"} marginb={"3px"} anchoi={"80%"}/>    
          <Texteinput texto={"Fecha evento adverso:"} anchob={"30%"} direccion={"column"} marginb={"3px"} anchoi={"80%"}/>
        </div>

      </div>
    </div>
  )
}

export default compDatosG