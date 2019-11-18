const fs = require('fs');
var mongodb = require('mongodb').MongoClient;
const args = require('yargs').argv;

if (args.f == undefined){
	console.log("Erro, ficheiro para leitura (-f) em falta.")
	return;
}
if (args.d == undefined){
	console.log("Erro, database (-d) em falta.")
	return;
}
if (args.c == undefined){
	console.log("Erro, collection (-c) em falta.")
	return;
}
if (args.jsonArray == undefined){
	console.log("Erro, --jsonArray em falta, neste momento é o unico modo suportado.")
	return;
}

var data = fs.readFileSync(args.f);
var jsondata = JSON.parse(data);

console.log('Argumentos enviados: ' + args.f + ' ' + args.d + ' ' + args.c + ' ' + args.jsonArray)

//console.log('db:'+db)
mongodb.connect('mongodb://localhost/',{useNewUrlParser: true, useUnifiedTopology: true },function(err,db){
    //database
    var dbo = db.db(args.d);
    dbo.collection(args.c).insertMany(jsondata)
    db.close()
})