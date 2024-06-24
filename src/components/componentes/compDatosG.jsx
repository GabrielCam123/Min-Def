import React from 'react'
import Texteinput from '../atomos/texteinput'
import "./compDatosG.css"
function compDatosG() {
    const text1="Departamento :";const text2="Municipio :";const text3="N° Localidades afectadas :"
    const tamb="320px";const tamp="120px";const tami="180px"
    return (
    <div className='contenedorcompDatosG'>

      <div className='localidad'>
        <h3>1.Datos Generales</h3>
        <Texteinput texto={text1} anchob={tamb} anchop={tamp} anchoi={tami}/>
        <Texteinput texto={text2} anchob={tamb} anchop={tamp} anchoi={tami}/>
        <Texteinput texto={text3} anchob={tamb} anchop={tamp} anchoi={tami}/>
      </div>
      <div className='datoseventos'>
        <Texteinput texto={text1} anchob={tamb} anchop={"200px"}/>
        <Texteinput texto={text2} anchob={tamb}/>
        <Texteinput texto={text3} anchob={tamb}/>      
      </div>
    </div>
  )
}

export default compDatosG