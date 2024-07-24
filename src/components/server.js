const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
const { Pool }=require('pg');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken')
const app=express();
const port=5000;
const secretKey='llave uwu';
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
app.use(cors())
//Middleware de autenticacion
const authenticateToken=(req,res,next)=>{
    const token =req.headers['authorization']
    if(!token) return res.status(401).json({error:'Acceso denegado'})
    jwt.verify(token,secretKey,(err,user)=>{
    if(err) return res.status(403).json({error:'Token no valido'})
        req.user=user;
        next()
    })
}
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
        if(password!=user.password){
            return res.status(400).json({error:'Contraseña incorrecta'})
        }
        const token=jwt.sing({username:user.username},secretKey,{expiresIn:'1h'})
        res.json({message:'Inicio de sesion exitoso'})
    } catch(err){
        res.status(500).json({error:err.message})
    }
})
app.get('/formulario',authenticateToken,(req,res)=>{
    res.json({message:'Formulario accediso exitosamente'})
})
app.listen(port,()=>{
    console.log(`Servidor corriendo en http://localhost:${port}`)
});