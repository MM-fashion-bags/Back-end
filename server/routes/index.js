const express = require('express')
const app = express()

app.use(require('./usuario/login'))
app.use(require('./usuario/register'))

module.exports = app
