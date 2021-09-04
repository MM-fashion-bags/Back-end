require('./config/config')
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')


app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use(require('./routes/index'))


app.get('/', (req, res)=>{
    res.send('<h1> Servidor Corriendo</h1>')
})

mongoose.connect(process.env.URLBD, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err)=>{
    if (err) throw err
    console.log(`Base de datos online en el puerto: ${process.env.URLBD}`);
})

app.listen(process.env.PORT, ()=>{
    console.log(`Escuchando en el puerto: ${process.env.PORT}`);
})



