//variaveis da bolinha
let xbolinha=300
let ybolinha=200
let diametro=15
let raio = diametro / 2;

//variaveis vel da bolinha
let velocidadexbolinha=6
let velocidadeybolinha=6

//variaveis da raquete
let xraquete=5
let yraquete=150
let rcomprimento=10
let raltura=90

//variaveis do oponente
let xRaqueteOponente=585
let yRaqueteOponente=150
let velocidadeYOponente;

//placar do jogo
let meusPontos = 0;
let pontosDoOponente = 0;

//sons do jogo
let raquetada;
let ponto;
let trilha;

let mesaDoPong;

let colidiu = false;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(mesaDoPong);
  mostrabolinha();
  movimmentabolinha();
  verificacolisaoborda();
  mostraraquete();
  mostraraqueteoponente();
  movimentaraquete();
  movimentaRaqueteOponente();
  verificaColisaoRaquete(xraquete, yraquete);
  verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente)
  incluiPlacar()
  marcaPonto()
  bolinhaNaoFicaPresa()
}
  function mostrabolinha() {
   circle(xbolinha,ybolinha,diametro);
}

function movimmentabolinha() {
  xbolinha += velocidadexbolinha;
  ybolinha += velocidadeybolinha;
}

function verificacolisaoborda(){
  if (xbolinha + raio > width ||
      xbolinha - raio < 0){
    velocidadexbolinha *= -1;
  }
  if (ybolinha + raio> height ||
     ybolinha - raio <0 ) {
    velocidadeybolinha *=-1} 
}
function mostraraquete(){ 
  rect(xraquete, yraquete, rcomprimento, raltura);}

function mostraraqueteoponente(){ 
  rect(xRaqueteOponente, yRaqueteOponente, rcomprimento, raltura);}

function movimentaraquete(){
  if(keyIsDown(87)){
    yraquete -= 10;
  }
  if(keyIsDown(83)){
    yraquete += 10;}
}
function verificaColisaoRaquete(){
   if (xbolinha - raio < xraquete + rcomprimento
        && ybolinha - raio < yraquete + raltura
        && ybolinha + raio > yraquete) {
        velocidadexbolinha *= -1;
    }
}
  
function colisaoMinhaRaqueteBiblioteca(){
    colidiu = collideRectCircle(xraquete, yraquete, rcomprimento, raltura, xbolinha, ybolinha, raio);
    if (colidiu) {
        velocidadexbolinha *= -1;
    }
}

function movimentaRaqueteOponente(){
    if(keyIsDown(UP_ARROW)){
    yRaqueteOponente -= 10;
  }
  if(keyIsDown(DOWN_ARROW)){
    yRaqueteOponente += 10;}
}

function verificaColisaoRaquete(x, y) {
    colidiu = collideRectCircle(x, y, rcomprimento, raltura, xbolinha, ybolinha, raio);
    if (colidiu){
        velocidadexbolinha *= -1;
      raquetada.play();
    }
}

function incluiPlacar() {
    fill(255);
    text(meusPontos, 278, 26);
    text(pontosDoOponente, 321, 26);
}

function marcaPonto() {
    if (xbolinha > 590) {
        meusPontos += 1;
      ponto.play();
    }
    if (xbolinha < 10) {
        pontosDoOponente += 1;
      ponto.play();
    }
}

function incluiPlacar() {
    stroke(255);
    textAlign(CENTER);
    textSize(16);
    fill(color(0, 76, 156));
    rect(150, 10, 40, 20);
    fill(255);
    text(meusPontos, 170, 26);
    fill(color(0, 76, 156));
    rect(450, 10, 40, 20);
    fill(255);
    text(pontosDoOponente, 470, 26);
}

function preload() {
    trilha = loadSound("trilha.mp3");
    ponto = loadSound("ponto.mp3");
    raquetada = loadSound("raquetada.mp3");
    mesaDoPong = loadImage("mesa.png");
}

function setup() {
    createCanvas(600, 400);
    //trilha.play();
}

function setup() {
    createCanvas(600, 400);
    //trilha.loop();
}

function bolinhaNaoFicaPresa(){
    if (xbolinha - raio < 0){
    xbolinha = 23
    }
}