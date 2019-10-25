function apagaItem (ident){
	console.log('vou tentar apagar o' + ident+'...')
	
	axios.delete('/'+ident)
		.then(response=> window.location.assign('/'))
		.catch(error=>console.log(error))
}