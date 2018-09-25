function calcularSoma(){
	let n1 = document.getElementById("n1").value;
	let n2 = document.getElementById("n2").value;

	let resultado = document.getElementById("resultado")

	resultado.innerHTML = parseFloat(n1)+parseFloat(n2);
}
function calcularSub(){
	let n1 = document.getElementById("n1").value;
	let n2 = document.getElementById("n2").value;

	let r = document.getElementById("resultado")
	r.innerHTML = parseFloat(n1)-parseFloat(n2);
}