/*Peça ao usuário para inserir dois números inteiros positivos;
Armazene os números inseridos pelo usuário em duas variáveis;
Crie uma função para dividir números inteiros;
Exiba na tela uma caixa de diálogo com o resultado da divisão precedido pela frase “O resultado da divisão é igual a:”.*/

var valor1= Number.parseInt(window.prompt("Digite o valor 1"))
var valor2 = Number.parseInt(window.prompt("Digite o valor 2"))
var operador = window.prompt("Digite + para somar, - para subtrair, / para dividir ou * para multiplicar")

var resultado = 0

if (operador=='+') {
	resultado = somar(valor1,valor2)
}
	
if (operador=='-') {
	resultado = subtrair (valor1,valor2)
}
	

if (operador=='/') {
	resultado = dividir (valor1,valor2)
}
	

if (operador=='*') {
	resultado= multiplicar(valor1,valor2)
}
	

document.write(`O resultado é: ${resultado}`)

function somar ( valor1, valor2) {
		return valor1+valor2
}

function subtrair( valor1, valor2) {
		return valor1-valor2
}

function multiplicar ( valor1, valor2) {
		return valor1*valor2
}

function dividir ( valor1, valor2) {
		return  valor1/valor2
}
