const express = require('express')
const app = express()
const path = require('path')
const connection = require('./connection')


const user = require('./routes/users')
const loggedMiddleware = require('./middlewares/logged')

//settings
app.set('title', 'Aplicacion hecha en Node.js')
app.set('port', 8080)

//motor de vista
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

//midlewares = Funcion que se ejecuta antes de la respuesta
app.use(loggedMiddleware.isLogged)
app.use(express.static(path.join(__dirname+'/public')))
app.use(express.urlencoded({extended: false}))

//rutas

app.get('/', (req, res) =>{
    res.render('index')
})


app.use('/user',user)



app.listen(app.get('port'), ()=>{
    console.log('Mi '+ app.get('title') +' corre en el puerto ' + app.get('port'))
})