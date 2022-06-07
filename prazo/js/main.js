let data = Array.prototype.slice.call(document.getElementsByClassName('.data'));
let prazo = Array.prototype.slice.call(document.getElementsByClassName('.prazo'));

let prazoFinal = data + prazo;

console.log(prazoFinal);
console.log(data);
console.log(prazo);