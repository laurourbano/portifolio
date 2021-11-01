function setup() {
  createCanvas(550, 400);
  somDaTrilha.loop()
}

function draw() {
  background(imagemDaEstrada);
  mostraCarro();
  movimentaCarro();
  mostraAtor();
  movimentaAtor1();
  voltaPosicaoInicialDoCarro();
  verificaColisao();
  incluiPontos();
  marcaPonto();
}