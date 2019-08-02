// var dobroValor = numero =>  numero * 2;

// var triplicaValor = (numero, numero2) => numero * 3;

// var valor = () =>  7;



var dobroValor = numero => {
	let resultado = numero * 2;
	return resultado;
}

var triplicaValor = (numero, numero2) => {
	let resultado = numero * 3;
	return resultado;
}

var valor = () => {
	let resultado = 7;
	return resultado;
}

console.log(valor());
console.log(dobroValor(7));
console.log(triplicaValor(7));
