import React, { useState } from 'react';
import "./loggin.css";
import { useNavigate } from 'react-router-dom';
function loggin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      if (response.ok) {
        localStorage.setItem('token',data.token);
        navigate('/Formulario')
      } else {
        alert(data.error);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error al iniciar sesion. por Favor, intentalo de nuevo mas tarde.')
    }
  };
  return (
    <div className='contenedorloggin'>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <img
          src="../../public/VIDECI.png"
          style={{ width: "228px", height: "241px" }}
          alt=""
        />
        <input
          type="text"
          name=""
          id=""
          style={{
            background: "none",
            height: "32px",
            border: "solid black 1px",
            borderRadius: "3px",
            color: "black",
            fontWeight: "600",
          }}
          placeholder="UserName"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          name=""
          id=""
          style={{
            background: "none",
            height: "32px",
            border: "solid black 1px",
            borderRadius: "3px",
            color: "black",
            fontWeight: "600",
          }}
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {/* <Link to='/Formulario' > */}
        <button
          style={{ backgroundColor: "rgba(48, 251, 251, 0.66)", width: "100%" }}
          onClick={handleLogin}
        >
          Login
        </button>
        {/* </Link> */}
      </div>
    </div>
  );
}

export default loggin;
