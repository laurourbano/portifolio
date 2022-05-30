
var data = document.querySelector(".data");
var dia = new Date().getDate();
var mes = new Date().getMonth() + 1;
var dataAtual = "_"+mes+"_"+dia;
data.innerHTML += dataAtual;
