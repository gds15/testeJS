window.onload = () => {
	
	let frm = document.getElementById('form1');
	frm.addEventListener('submit', (evt) => {
		evt.preventDefault();

		pegarValores()
		.then(transformarValores)
		.then(calcularResultado)
		.then(mostrarSaida)
		.then((resultado) => {
			console.log(resultado);
		});
	})
	
}

function pegarValor1(anterior) {
	return new Promise((resolve, reject) => {
		let campo = document.getElementById('input1');
		setTimeout(() => {
			anterior.valor1 = campo.value;
			resolve(anterior);
		}, 2500);
	});
}

function pegarValor2(anterior) {
	return new Promise((resolve, reject) => {
		let campo = document.getElementById('input2');
		setTimeout(() => {
			anterior.valor2 = campo.value;
			resolve(anterior);
		}, 3000);
	});
}

function pegarValores() {
	return Promise.resolve({ })
	.then(pegarValor1)
	.then(pegarValor2)
	.then((resultado) => {
		console.log(resultado);
		return resultado;
	});
}

function transformarValores(anterior) {

	anterior.valor1 = parseInt(anterior.valor1);
	anterior.valor2 = parseInt(anterior.valor2);

	return anterior;
}

function calcularResultado(anterior) {

	anterior.divi = anterior.valor1 / anterior.valor2;
	if (anterior.divi > 0.7) {
		anterior.divi = 'gasolina'
		return anterior
	} else {
		anterior.divi = 'alcool'
		return anterior
	}

}

function mostrarSaida(anterior) {

			let html = `
	Abasteça com: ${anterior.divi}`;

	document.getElementById('saida').innerHTML = html;

	return anterior;
}

