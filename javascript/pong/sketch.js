//variáveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let dBolinha = 30;
let raio = dBolinha / 2;

//variáveis da velocidade da bolinha
let velocidadeXBolinha = 8;
let velocidadeYBolinha = 8;

//variaveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let wRaquete = 10;
let hRaquete = 90;

//variaveis da raquete do oponente
let xRaqueteOponente = 580;
let yRaqueteOponente = 150;
let wRaqueteOponente = 10;
let hRaqueteOponente = 90;
let velocidadeYOponente = 50;

//variaveis de colisao
let colidiu = false;

//pontos do jogo
let meusPontos = 0;
let pontosDoOponente = 0;
let chanceDeErrar = 0;

//sons do jogo
let ponto;
let raquetada;
let trilha;

function preload(){
  trilha = loadSound("trilha.mp3");
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3")
}
function setup() {
  createCanvas(600, 400);
  trilha.loop();
}
function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBordas();
  mostraRaquete(xRaquete, yRaquete);
  movimentaMinhaRaquete();
  verificaColisaoRaquete(xRaquete, yRaquete);
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaRaqueteOponente();
  verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente);
  incluiPlacar();
  marcaPonto();
  calculaChanceDeErrar();
}
function mostraBolinha() {
  circle(xBolinha, yBolinha, dBolinha);
}

function movimentaBolinha() {
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}
function verificaColisaoBordas() {
  if (xBolinha > width - raio || xBolinha < 0 + raio) {
    velocidadeXBolinha *= -1;
  }
  if (yBolinha > height - raio || yBolinha < 0 + raio) {
    velocidadeYBolinha *= -1;
  }
}
function mostraRaquete(x, y) {
  rect(x, y, wRaquete, hRaquete);
}
function movimentaMinhaRaquete() {
  if (keyIsDown(UP_ARROW)) {
    yRaquete -= 10;
  }
  if (keyIsDown(DOWN_ARROW)) {
    yRaquete += 10;
  }
}
function movimentaRaqueteOponente(){
  velocidadeYOponente = yBolinha -yRaqueteOponente - wRaqueteOponente / 2 - 30;
  yRaqueteOponente += velocidadeYOponente + chanceDeErrar
  calculaChanceDeErrar()
}
function verificaColisaoRaquete(x, y) {
  colidiu = collideRectCircle(x,y,wRaquete,hRaquete,xBolinha,yBolinha,dBolinha);
  if (colidiu) {
    velocidadeXBolinha *= -1;
    raquetada.play();
  }
}
function incluiPlacar(){
    stroke(255);
    textAlign(CENTER);
    textSize(16);
    fill(color(255, 140, 0));
    rect(150, 10, 40, 20);
    fill(255);
    text(meusPontos, 170, 26);
    fill(color(255, 140, 0));
    rect(450, 10, 40, 20);
    fill(255);
    text(pontosDoOponente, 470, 26);
}
function marcaPonto(){
  if(xBolinha > 580) {
    meusPontos += 1;
    ponto.play();
  }
  if (xBolinha < 20){
    pontosDoOponente += 1;
    ponto.play();
  }
}
function calculaChanceDeErrar() {
  if (pontosDoOponente >= meusPontos) {
    chanceDeErrar += 1
    if (chanceDeErrar >= 35){
    chanceDeErrar = 55
    }
  } else {
    chanceDeErrar -= 1
    if (chanceDeErrar <= 25){
    chanceDeErrar = 25
    }
  }
}