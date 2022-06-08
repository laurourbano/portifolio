const prazo = [30, 60, 90, 120, 160];
var data = document.querySelector('.data');
var numero = data.value;
var dataFim = document.querySelector('.dataFim');
var final = numero + prazo(i);
dataFim.innerHTML = final;
console.log(numero);
console.log(prazo);
console.log(final);
