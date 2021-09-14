

function enviar() {
	var data = new Date()
	var ano_atual = data.getFullYear()
	var ano_nasc =window.document.getElementById('ano')
	var res =window.document.getElementById('res')

	if (ano_nasc.value.length==0 || ano_nasc.value>ano_atual) {
		window.alert(`verifique os dados e tente novamente`)
	} else {
		var radsex =window.document.getElementsByName('radsex')
		var idade = ano_atual-Number(ano_nasc.value)
		var genero=''
		if (radsex[0].checked) {
			genero= 'homem' 
		} else {
			genero = 'mulher'
		}

		res.innerHTML = `Detectamos ${genero} de ${idade} anos`
	}
}
