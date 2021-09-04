const express = require('express')
const bcrypt = require('bcrypt')
const Usuario = require('./../../models/usuario')
const app = express()

app.post('/register', (req, res)=>{
    let body = req.body
    let { nombre, email, password, role } = body

    let usuario = new Usuario({
        nombre,
        email,
        password: bcrypt.hashSync(password, 10),
        role
    })

    usuario.save((err, usuarioDB)=>{
        if(err){
            res.status(500).json({
                ok: false,
                err
            })
        }

        res.status(200).json({
            ok: true,
            usuarioDB,

        })
    })
})

module.exports = app