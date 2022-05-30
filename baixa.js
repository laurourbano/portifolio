window.onload = function() {
  var copyTextareaBtn = Array.prototype.slice.call(document.querySelectorAll('.botao'));
  var copyTextarea = Array.prototype.slice.call(document.querySelectorAll('.area'));
  copyTextareaBtn.forEach(function(btn, idx) {
    btn.addEventListener("click", function() {
      copyTextarea[idx].select();
      var msg = document.execCommand('copy')
      ? 'funcionou' : 'deu erro';
      console.log('executando para copiar texto ' + msg);
    });
  });
}

var data = document.querySelector(".data");
var dia = new Date().getDate();
var mes = new Date().getMonth() + 1;
var dataAtual = "_"+mes+"_"+dia;
data.innerHTML += dataAtual;
