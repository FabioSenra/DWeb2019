var express = require('express');
var router = express.Router();
const fs = require('fs')
var Ficheiros = require('../controllers/ficheiros')
var Ficheiro = require('../models/ficheiros')

var multer = require('multer')
var upload = multer({dest:'uploads/'})

/* GET users listing. */
router.get('/ficheiros', function(req, res) {
  Ficheiros.listar()
    .then(dados=>res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro))
});

router.post('/ficheiros',upload.single('ficheiro'), function(req,res){

  let oldPath = __dirname + '/../' + req.file.path
  let newPath = __dirname + '/../public/ficheiros/' + req.file.originalname

  fs.rename(oldPath,newPath, function(err){
    if(err) throw err
  })

  let data = new Date()

  let novoFicheiro = new Ficheiro(
    {
      data: data.toISOString(),
      desc: req.body.desc,
      name: req.file.originalname,
      mimetype: req.file.mimetype,
      size: req.file.size
    })
  
  novoFicheiro.save(function (err,ficheiro){
    if (!err) console.log('Ficheiro guardado com sucesso')
    else console.log('ERRO: ' + err)
  })

  res.redirect('/')
})

router.post('/ficheiros',upload.array('ficheiro'), function(req,res){
  var i =0;

  while(i<req.files.length){
    console.log(req.files[i])
    let oldPath = __dirname + '/../' + req.files[i].path
    let newPath = __dirname + '/../public/ficheiros/' + req.files[i].originalname

    fs.rename(oldPath,newPath, function(err){
      if(err) throw err
    })
  
    let data = new Date()

    let novoFicheiro = new Ficheiro(
      {
        data: data.toISOString(),
        desc: req.body.desc[i],
        name: req.files[i].originalname,
        mimetype: req.files[i].mimetype,
        size: req.files[i].size
      })
  
    novoFicheiro.save(function (err,ficheiro){
      if (!err) console.log('Ficheiro guardado com sucesso')
      else console.log('ERRO!!!: ' + err)
    })
    i++;
    res.redirect('/')
  }

  
})

module.exports = router;
