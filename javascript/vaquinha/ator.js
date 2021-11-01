//Ator
let yAtor1 = 372;
let xAtor1 = 100
let colisao = false;
let meusPontos = 0;

function mostraAtor(){
  image(imagemAtor1, xAtor1, yAtor1, 20, 20);
}

function movimentaAtor1(){
  if(keyIsDown(UP_ARROW)){
    yAtor1 -= 2;
  }
  if(keyIsDown(DOWN_ARROW)){
    if(podeSeMover()){
      yAtor1 += 2;
    }
  }
}

function verificaColisao(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i = 0; i < imagemCarros.length; i ++){
    colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor1, yAtor1, 10)
    if(colisao){
      voltaAtor1ParaPosicaoInicial();
      somDaColisao.play();
      if (pontosMaiorQueZero()){
        meusPontos -= 1;
      }
    }
  } 
}

function voltaAtor1ParaPosicaoInicial(){
  yAtor1 = 372;
}

function incluiPontos(){
  textAlign(CENTER);
  textFont('fontBold');
  textFont('Helvetica')
  textSize(25);
  fill(color(222,1,1))
  text(meusPontos, width / 5, 28)
}

function marcaPonto(){
  if (yAtor1 < 15){
    meusPontos += 1;
    voltaAtor1ParaPosicaoInicial();
    somDoPonto.play();
  }
}

function pontosMaiorQueZero(){
  return meusPontos > 0;
}

function podeSeMover(){
  return yAtor1 < 372;
}