var express = require('express');
var router = express.Router();
var jsonfile = require('jsonfile')
var fs = require('fs')

var myBD = __dirname + "/../arqson.json"
console.log(myBD)

/* GET home page. */
router.get('/', function(req, res, next) {
  jsonfile.readFile(myBD, (erro, arqson) => {
    if(!erro){
      res.render('index',{lista: arqson})
    }
    else{
      res.render('error',{error: erro})
    }
  })
})

router.get('/apagar.js', function(req, res, next) {
  fs.readFile('./public/javascripts/apagar.js', (erro, dados) => {
      if(!erro) res.write(dados)
      else res.render('error',{error: erro})
      res.end()
  })
})

router.get('/ver.js', function(req, res, next) {
  fs.readFile('./public/javascripts/ver.js', (erro, dados) => {
      if(!erro) res.write(dados)
      else res.render('error',{error: erro})
      res.end()
  })
})

router.get('/update.js', function(req, res, next) {
  fs.readFile('./public/javascripts/update.js', (erro, dados) => {
      if(!erro) res.write(dados)
      else res.render('error',{error: erro})
      res.end()
  })
})

router.get('/ver/:id',function(req,res,next){
  var id = req.params.id
  console.log('id: '+id)
  jsonfile.readFile(myBD, (erro,arqson)=>{
    if(!erro){
      var index = arqson.findIndex(a => a.tit == id)
      if(index > -1){
        var musica = arqson[index]
        console.log(musica)
        res.send(musica)
      }
      else {
          console.log('Erro: não consegui encontrar o elemento que procuras...')
          res.end('1')
      }
  }
  })
})

router.post('/', function(req,res){
  jsonfile.readFile(myBD, (erro,arqson)=>{
    if(!erro){
      arqson.push(req.body)
      jsonfile.writeFile(myBD, arqson,erro=>{
        if(erro) console.log(erro)
        else console.log('Registo gravado com sucesso')
      })
    }
  })
  res.redirect('/')
})


router.delete('/:id',function(req,res){
  var id = req.params.id
  console.log('entrou no delete com id:' + id)
  jsonfile.readFile(myBD, (erro,arqson)=>{
    if(!erro){
      var index = arqson.findIndex(a => a.tit == id)
      console.log('Index do arqson:'+index)
      console.log(arqson[index])
      if(index > -1){
          arqson.splice(index, 1)
          jsonfile.writeFile(myBD, arqson, erro => {
              if(erro) console.log(erro)
              else console.log('BD atualizada com sucesso.')
          })
          res.redirect(303,'/')
      }
      else {
          console.log('Erro: não consegui encontrar o elemento a remover...')
          res.end('1')
      }
  }
  })
})


router.put('/',function(req,res){
  var prov=req.body.uprov
  var local=req.body.ulocal
  var tit=req.body.utit
  var musico=req.body.umusico
  console.log("Prov: " + prov + ' | Local: ' + local + " | Titulo: " + tit + " | Musico: " + musico)
  jsonfile.readFile(myBD, (erro,arqson)=>{
    if(!erro){
      var index = arqson.findIndex(a => a.tit == tit)
      console.log("Index: " +index)
      
      if(index > -1){
          arqson.splice(index, 1)
          var toJson = {"prov":prov,"local":local,"tit":tit,"musico":musico}
          console.log('toJson:' + toJson)
          arqson.push(toJson)
          jsonfile.writeFile(myBD, arqson, erro => {
              if(erro) console.log(erro)
              else console.log('BD atualizada com sucesso.')
          })
          res.redirect(303,'/')
      }
      else {
          console.log('Erro: não consegui encontrar o elemento a atualizar...')
          res.end('1')
      }
  }
  })  

})

module.exports = router;