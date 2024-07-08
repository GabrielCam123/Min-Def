import React, { useState } from 'react'
import Texteinput from '../atomos/texteinput'
import TexteSelectDepartamento from '../atomos/TexteSelectDepartamento';
import TexteSelectMunicipio from '../atomos/TexteSelectMunicipio';
import "./compDatosG.css"
import TexteFecha from '../atomos/textefecha';
import TexteHora from '../atomos/textehora';
function compDatosG() {
const[departamento,setState]=useState("");
const[municipio,setMun]=useState("");
    const text1="Departamento :";const text2="Municipio :";const text3="N° Localidades afectadas :"
    return (
    <div className='contenedorcompDatosG'>
      <div className='localidad'>
        <h3>1. DATOS GENERALES</h3>
        {/* <Texteinput texto={text1} anchob={"100%"} anchop={"40%"} anchoi={"60%"}/> */}
        <TexteSelectMunicipio/>
        {/* <Texteinput texto={text2} anchob={"100%"} anchop={"40%"} anchoi={"60%"}/> */}
        <Texteinput texto={text3} anchob={"100%"} anchop={"40%"} anchoi={"60%"}/>
      </div>
      <div className='datos'>
         <div className='datosalcalde'>
          <Texteinput texto={"Nombre del Alcalde municipal:"} anchob={"65%"} anchop={"60%"} anchoi={"80%"} direccion={"column"} marginb={"3px"}/>
          <Texteinput texto={"Fono/Cel:"} anchob={"35%"} direccion={"column"} marginb={"3px"} anchoi={"100%"}/>
        </div>
        <div className='datoseventos'>
          {/* <Texteinput texto={"Fecha llenado formulario:"} anchob={"35%"} direccion={"column"} marginb={"3px"} anchoi={"80%"}/>     */}
          <TexteFecha texto={"Fecha llenado formulario:"} anchob={"35%"} direccion={"column"} marginb={"3px"} anchoi={"80%"}/>
          {/* <Texteinput texto={"Fecha evento adverso:"} anchob={"30%"} direccion={"column"} marginb={"3px"} anchoi={"80%"}/> */}
          <TexteFecha texto={"Fecha evento adverso:"} anchob={"30%"} direccion={"column"} marginb={"3px"} anchoi={"80%"}/>
          {/* <Texteinput texto={"Hora del evento:"} anchob={"35%"} direccion={"column"} marginb={"3px"} anchoi={"80%"}/>  */}
          <TexteHora texto={"Hora del evento:"} anchob={"35%"} direccion={"column"} marginb={"3px"} anchoi={"80%"}/>
        </div>
      </div> 
    </div>
  )
}

export default compDatosG