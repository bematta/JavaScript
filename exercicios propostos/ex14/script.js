alert('Olá, visitante!')

/*var botao = window.document.getElementById('botao')
botao.addEventListener ('click', clicar)*/

function clicar () {
	var msg =window.document.getElementById('msg')
	var img =window.document.getElementById('imagem')
	var data = new Date()
	var hora = data.getHours()
	var minuto = data.getMinutes()
	msg.innerHTML= `São ${hora}:${minuto} horas.`

	if (hora<12) {
	img.src ='manha.jpg'
	msg.innerHTML+=` Bom dia!`
	window.document.body.style.background = '#edcd97'
	} else if (hora < 18) {
	img.src ='tarde.jpg'
	msg.innerHTML+=` Boa tarde!`
	window.document.body.style.background = '#b9846f'
	} else {
	img.src ='noite.jpg'
	msg.innerHTML+=` Boa noite!`
	window.document.body.style.background = '#515154'
	}
}

