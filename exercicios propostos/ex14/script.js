alert('Olá, visitante!')

/*var botao = window.document.getElementById('botao')
botao.addEventListener ('click', clicar)*/

function clicar () {
	var msg =window.document.getElementById('msg')
	var img =window.document.getElementById('imagem')
	var data = new Date()
	var hora = data.getHours()
	var minuto = data.getMinutes()
	msg.innerHTML= `São ${hora}:${minuto} horas`

	if (hora<12) {
	img.src ='manha.jpg'
	} else if (hora < 18) {
	img.src ='tarde.jpg'
	} else {
	img.src ='noite.jpg'
	}
}

