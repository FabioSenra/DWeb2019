var Mus = require('../models/mus')

module.exports.listar = () => {
    return Mus.find({},{titulo:1,tipo:1,compositor:1}).exec()
}


module.exports.consultar = id => {
    return Mus.findOne({_id:id}).exec()
}

module.exports.tipos = () => {
    return Mus.distinct("tipo").exec()
}

module.exports.inst = a => {
    return Mus.aggregate([{$unwind:"$instrumentos"},{$project:{name: "$instrumentos.designacao",obra:{titulo:"$titulo"}}},{$group:{_id:"$name",obras:{$push:"$obra"}}},{$sort:{_id:1}},{$match:{_id:a}}])
}

module.exports.byComp = a => {
    return Mus.find({compositor:a},{_id:0,titulo:1,compositor:1})
}

module.exports.quant = () => {
    return Mus.aggregate([{$unwind:"$instrumentos"},
    {$project:{name: "$_id",obra:{titulo:"$titulo",partitura:"$instrumentos.partitura"}}},
    {$group:{_id:"$name",obra:{$push:"$obra"}}},
    {$sort:{_id:1}}
    ])
}

