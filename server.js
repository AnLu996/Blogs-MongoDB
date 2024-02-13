const express = require('express')
const cors = require('cors');

const app = express()

app.use(cors());

//Importar conexión a mongoDB
const archivobd =require('./conexion')

//Importar archivo de rutas y modelo
const rutablog = require('./rutas/blog')

app.use('/api/blog', rutablog)

app.get('/', (req, res) => {
    res.end('Bienvenidos al servidor backend NODE')

})

//configurar server básico
app.listen(5000, function(){
    console.log('El servidor está corriendo correctamente')
})
