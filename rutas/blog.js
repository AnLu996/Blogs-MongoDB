const express = require('express')
const { ObjectId } = require('mongoose').Types;
const router = express.Router()

const mongoose = require('mongoose')
const eschema = mongoose.Schema

const eschemablog = new eschema({
    _id: { type: ObjectId },
    titulo: String,
    fecha: String,
    texto: String,
    autor: String,
    link: String,
    comentarios: [
      {
        nombre: String,
        comentario: String,
        fecha: String
      }
    ]
});

const ModeloBlog = mongoose.model('BlogLibros', eschemablog)
//module.exports = router


router.get('/ejemplo', (req, res) => {
  res.end('Saludo carga desde ruta ejemplo')
})
//module.exports = router

router.get('/obtenerblogs', (req, res) => {
  ModeloBlog.find({})
    .then(docs => {
      res.send(docs);
      console.log(ModeloBlog)
    })
    .catch(err => {
      /*res.status(500).send(err);*/
      res.end('Saludo carga desde ruta ejemplo')
      console.log('errorx2')
    });
});
module.exports = router
