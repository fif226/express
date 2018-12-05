//importar librerias de express
const express = require('express')
//creando aplicacion de express
const app = express()

app.use(express.urlencoded())
app.get('/', (req, res) => {
    /*res.send('' +
        '<form method="post">' +
        '<input type="text" placeholder="Nombre" name="nom">' +
        '<input type="text" placeholder="Apellido paterno" name="ap">' +
        '<input type="text" placeholder="Apellido materno" name="am">' +
        '<input type="submit" value="Aceptar">' +
        '</form>')
    console.log(req.query)
    */
    //res.redirect('/go-there')
    res.redirect(301, '/go-there')
})
app.get('/mayus/:valor', (req, res) => {
    //console.log(req.params.valor.toUpperCase())
    res.send(req.params.valor.toUpperCase())
})
app.get('/cuadrado/:valor', (req, res) => {
    //convierte a numero
    let numero = req.params.valor * 1
    numero = numero ** 2
    //console.log(req.params.valor.toUpperCase())
    //mandarlo como cadena
    //res.send(numero + "")
    res.send(`${numero}`)
})
app.post('/', (req, res) => {
    //console.log(req.body)
    res.send(req.body)
})
app.listen(3000, () => console.log('Server ready'))