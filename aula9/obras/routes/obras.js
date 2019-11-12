var express = require('express');
var router = express.Router();

var Obras = require('../controllers/obras')


router.get('/compositores', function(req, res, next) {
  Obras.compositores()
  .then(dados => res.jsonp(dados))
  .catch(erro => res.status(500).jsonp(erro))
});

router.get('/periodos', function(req, res, next) {
  Obras.compositores()
  .then(dados => res.jsonp(dados))
  .catch(erro => res.status(500).jsonp(erro))
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  if(req.query.ano!=undefined){
    Obras.ano(req.query.ano)
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).jsonp(erro))
  }
  else if (req.query.compositor!=undefined && req.query.duracao!=undefined){
    Obras.compDur(req.query.compositor,req.query.duracao)
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro))
  }
  else if (req.query.periodo!=undefined){
    Obras.periodo(req.query.periodo)
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro))
  }
  else{
    Obras.listar()
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).jsonp(erro))
    }
});


router.get('/:idObra', function(req, res, next) {
  console.log(req.params.idObra)
  Obras.consultar(req.params.idObra)
  .then(dados => res.jsonp(dados))
  .catch(erro => res.status(500).jsonp(erro))
});


module.exports = router;
