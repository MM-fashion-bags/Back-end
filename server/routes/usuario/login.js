const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const Usuario = require('./../../models/usuario')
const app = express()

app.post('/login',(req, res)=>{
    let body = req.body

    Usuario.findOne({email: body.email},(err,usuarioDB)=>{
        if(err){
            return res.status(500).json({
                ok:false,
                err: err
            })
        }

        if(!usuarioDB){
            return res.status(400).json({
                ok: false,
                err: {message: "Usuario no encontrado, verifique el email"}
            })
        }

        if(!bcrypt.compareSync(body.password, usuarioDB.password)){
            return res.status(400).json({
                ok: false,
                err: {message: "Contraseña erronea"}
            })
        }

        let token = jwt.sign({
            usuario: usuarioDB },
            process.env.SEED_AUTENTICACION,{
            expiresIn: process.env.CADUCIDAD_TOKEN
        })

        res.status(200).json({
            ok: true,
            usuario: usuarioDB,
            token,
            message: 'Loego Correcto'
        })
    })
})

module.exports = app

