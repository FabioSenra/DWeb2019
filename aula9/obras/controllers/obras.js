var Obra = require('../models/obras')

module.exports.listar = () => {
    return Obra.find().exec()
}

module.exports.consultar = id => {
    return Obra.findOne({_id:id}).exec()
}

module.exports.ano = ano => {
    return Obra.find({anoCriacao:ano})
}

module.exports.periodo = periodo => {
    return Obra.find({periodo:periodo})
}

module.exports.compositores = () => {
    return Obra.distinct("compositor").exec()
}

module.exports.compositores = () => {
    return Obra.distinct("periodo").exec()
}

module.exports.compDur = (comp,dur) => {
    return Obra.find({compositor:comp,duracao:{$gte:dur}}).exec()
}