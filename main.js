const texto = document.querySelectorAll('.texto')
const botao = document.querySelectorAll('.botao')

botao.addEventListener('click', ()=>{
texto.select();
document.execCommand('botao');}