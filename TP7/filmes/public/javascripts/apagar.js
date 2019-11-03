function apagaItem (ident){
	console.log('vou tentar apagar o' + ident+'...')
	
	axios.delete('/filmes/'+ident)
		.then(response=> window.location.assign('/filmes'))
		.catch(error=>console.log(error))
}