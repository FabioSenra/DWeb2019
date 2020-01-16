var express = require('express');
var router = express.Router();

var Mus = require('../controllers/mus')

/* GET users listing. */
router.get('/obras', function(req, res, next) {
  if(req.query.compositor!=undefined){
    Mus.byComp(req.query.compositor)
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).jsonp(erro))
  }
  else if (req.query.instrumento!=undefined){
    Mus.inst(req.query.instrumento)
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro))
  }
  else{
    Mus.listar()
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro))
  }
});

router.get('/obras/tipos', function(req, res, next) {
  Mus.tipos()
  .then(dados => res.jsonp(dados))
  .catch(erro => res.status(500).jsonp(erro))
});

router.get('/obrasQuant', function(req, res, next) {
  Mus.quant()
  .then(dados => res.jsonp(dados))
  .catch(erro => res.status(500).jsonp(erro))
});


router.get('/obras/:id', function(req, res, next) { 
  Mus.consultar(req.params.id)
  .then(dados => res.jsonp(dados))
  .catch(erro => res.status(500).jsonp(erro))
});



module.exports = router;
