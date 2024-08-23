import React, { useState } from 'react'
import Texteinput from '../atomos/texteinput'
import TexteSelectMunicipio from '../atomos/TexteSelectMunicipio';
import TexteFecha from '../atomos/textefecha';
import TexteHora from '../atomos/textehora';
import Texteinputnumber from '../atomos/texteinputnumber';
import "./compDatosG.css"
function compDatosG() {
    const[departamento,setDepartamento]=useState('')
    const[municipio,setMunicipio]=useState('')
    const[localidadesAfectadas,setLocalidadesAfectadas]=useState('')
    const[fechaDoc,setFechaDoc]=useState('')
    const[fechaEvento,setFechaEvento]=useState('')
    const text1="Departamento :"
    const text2="Municipio :"
    const text3="N° Localidades afectadas :"
    const handleDepartamentoChange=(selectedDepartamento)=>{
      setDepartamento(selectedDepartamento)
    }
    const handleMunicipioChange=(selectedMunicipio)=>{
      setMunicipio(selectedMunicipio)
    }
    const handleLocalidadesChange=(e)=>{
      setLocalidadesAfectadas(e.target.value)
    }
    const handleFechaDocChange=(e)=>{
      setFechaDoc(e.target.value)
    }
    const handleFechaEventoChange=(e)=>{
      setFechaEvento(e.target.value)
    }
    const handleSubmit= async()=>{
      const parsedLocalidadesAfectadas=parseInt(localidadesAfectadas,10)
      if(isNaN(parsedLocalidadesAfectadas)){
        alert('Por favor , ingrese un numero valido para las localidades afectadas')
        return;
      }
      const data = {
        departamento,
        municipio,
        localidadesAfectadas:parsedLocalidadesAfectadas,
        fecha_evento:fechaEvento,
        fecha_doc:fechaDoc,
      }
      try{
        const response = await fetch('http://localhost:5000/api/submit-data',{
          method:'POST',
          headers:{
            'Content-Type':'application/json',
          },
          body: JSON.stringify(data)
        })
        if(response.ok){
          alert('Datos enviados con éxito')
        }else{
          const errorData=await response.json()
          console.error('Error en el servidor:', errorData)
          alert('Error al enviar los datos:' + errorData.error)
        }
      }catch(error){
        console.error('Error:', error)
        alert('Ocurrio un error al enviar los datos')
      }
    }
    return (
    <div className='contenedorcompDatosG'>
      <div className='localidad'>
        <h3>1. DATOS GENERALES</h3>
        <TexteSelectMunicipio 
          onDepartamentoChange={handleDepartamentoChange}
          onMunicipioChange={handleMunicipioChange}
        />
        <Texteinputnumber texto={text3} anchob={"100%"} anchop={"40%"} anchoi={"60%"} value={localidadesAfectadas} onChange={handleLocalidadesChange}/>
      </div>
      <div className='datos'>
         <div className='datosalcalde'>
          <Texteinput texto={"Nombre del Alcalde municipal:"} anchob={"65%"} anchop={"60%"} anchoi={"80%"} direccion={"column"} marginb={"3px"}/>
          <Texteinput texto={"Fono/Cel:"} anchob={"35%"} direccion={"column"} marginb={"3px"} anchoi={"100%"}/>
        </div>
        <div className='datoseventos'>
          <TexteFecha texto={"Fecha llenado formulario:"} anchob={"35%"} direccion={"column"} marginb={"3px"} anchoi={"80%"}value={fechaDoc} onChange={handleFechaDocChange}/>
          <TexteFecha texto={"Fecha evento adverso:"} anchob={"30%"} direccion={"column"} marginb={"3px"} anchoi={"80%"} value={fechaEvento} onChange={handleFechaEventoChange}/>
          <TexteHora texto={"Hora del evento:"} anchob={"35%"} direccion={"column"} marginb={"3px"} anchoi={"80%"}/>
        </div>
      </div> 
      <button onClick={handleSubmit}>Enviar Datos</button>
    </div>
  )
}
export default compDatosG