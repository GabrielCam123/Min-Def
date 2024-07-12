const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
const { Pool }=require('pg');
const bcrypt=require('bcryptjs');
const app=express();
const port=5000;
//configuracion de PostgreSQL
const pool=new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'EDAN',
    password: 'Password1',
    port:5432,
})
//Middleware
app.use(bodyParser.json())
app.use(cors({
    origin:'http://localhost:5173/',
    credentials:true,
}))
// //ruta de registro de usuario(opcional)
// app.post('/register',async(req,res)=>{
//     const {username,password}=req.body
//     const hashedPassword =await bcrypt.hash(password,10)
//     try{
//         const result=await pool.query(
//             'INSERT INTO users(username,password) VALUES ($1,$2) RETURNING *',
//             [username,hashedPassword]
//         )
//         res.status(201).json(result.rows[0])
//     } catch(err){
//         res.status(500).json({error:err.message})
//     }
// })
//ruta de inicio de sesion
app.post('/login',async(req,res)=>{
    const {username,password}=req.body
    try{
        const result=await pool.query('SELECT * FROM users WHERE username=$1',[username])
        if(result.rows.length===0){
            return res.status(400).json({error:'Usuario no encontrado'})
        }
        const user=result.rows[0]
        const isMatch=await bcrypt.compare(password,user.password)
        if(!isMatch){
            return res.status(400).json({error:'Contraseña incorrecta'})
        }
        res.json({message:'Inicio de sesion exitoso'})
    } catch(err){
        res.status(500).json({error:err.message})
    }
})
app.listen(port,()=>{
    console.log(`Servidor corriendo en http://localhost:${port}`)
});