var mongoose = require('mongoose')

var hrefSchema = new mongoose.Schema({
    href: String
})

var infSchema = new mongoose.Schema({
    video: hrefSchema
})

var partSchema = new mongoose.Schema({
    _voz: String,
    _type: String,
    _path: String
})

var instSchema = new mongoose.Schema({
    designacao:String,
    partitura: partSchema
    
})

var musSchema = new mongoose.Schema({
    _id:String,
    titulo:String,
    tipo:String,
    compositor:String,
    inf: infSchema,
    instrumentos:[instSchema]
})

module.exports = mongoose.model('mus',musSchema) 