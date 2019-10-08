var http = require('http')
var fs = require('fs')

var myserver = http.createServer(function(req,res) {
    var partes = req.url.split('/')
    var pag = partes[partes.length-1]
    console.log(req.method + ' ' + req.url)
    console.log(pag)
    if(parseInt(pag,10) < 123){
        fs.readFile('XML/arq' + pag +'.xml',function(err,data){
            res.writeHead(200,{'Content-Type':'text/xml'})
            res.write(data)
            res.end()
        })
    }
    else{
        res.writeHead(200,{'Content-Type': 'text/xml'})
        res.write("<p> Ficheiro inexistente: " + pag + " </p>")
        res.end()
    }
})

myserver.listen(7777); 

console.log("servidor á escuta na porta 7777 ...");