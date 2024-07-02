import React from 'react'
import "./loggin.css"
import { Link } from 'react-router-dom'
function loggin() {
  return (
    <div className='contenedorloggin'>
      <div style={{display:'flex',flexDirection:'column',gap:"10px"}}>
        <img src="../../public/VIDECI.png" style={{width:"228px",height:"241px"}} alt="" />
        <input type="text" name="" id="" style={{background:"none",height:"32px",border:"solid black 1px",borderRadius:"3px",color:'black',fontWeight:"600"}} placeholder='UserName' />
        <input type="text" name="" id="" style={{background:"none",height:"32px",border:"solid black 1px",borderRadius:"3px",color:'black',fontWeight:"600"}} placeholder='Password' />
        <Link to='/Formulario' >
          <button style={{backgroundColor:"rgba(48, 251, 251, 0.66)",width:"100%"}} type="submit">Login</button>
        </Link>
      </div>
    </div>
  )
}

export default loggin