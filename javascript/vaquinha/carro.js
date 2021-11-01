let xCarros = [600, 500, 400, 300, 200, 100];
let yCarros = [50, 105, 155, 215, 270, 325];
let velocidadeCarros = [2, 2.5, 3, 3.5, 4, 4.5];
let comprimentoCarro = 60;
let alturaCarro = 30;

function mostraCarro(){
  for (let i = 0; i < imagemCarros.length; i ++){
    image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, alturaCarro);
  }
}

function movimentaCarro(){
  for(let i = 0; i < imagemCarros.length;i ++){
    xCarros[i] -= velocidadeCarros[i];
  }
}

function voltaPosicaoInicialDoCarro(){
  for(let i = 0; i < imagemCarros.length; i ++){
    if (passouTodaTela(xCarros[i])){
      xCarros[i] = 600;
    }
  }
}

function passouTodaTela(xCarros){
  return xCarros < - 60;
}

