function verItem (ident){
	console.log('vou tentar ver o' + ident+'...')
	
	axios.get('/ver/'+ident)
		.then(function(response){
            oFormObject = document.forms['form1']
            oFormObject.elements['prov'].value=response.data.prov
            oFormObject.elements['local'].value=response.data.local
            oFormObject.elements['tit'].value=response.data.tit
            oFormObject.elements['musico'].value=response.data.musico
            window.scrollTo(0,0)

            oFormObject.elements['update'].type='button'
            oFormObject.elements['enviar'].type='hidden'
            oFormObject.elements['tit'].disabled=true
        })
		.catch(error=>console.log(error))
}