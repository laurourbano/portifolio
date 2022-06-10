const prazo = 30;
var data = document.querySelector('.data');
var numero = data.value;
var dataFim = document.querySelector('.dataFim');
var final = numero + prazo;
dataFim.innerHTML = final;

console.log(numero);
console.log(prazo);
console.log(final);
