//Sprites' codes

let roadSprite;
let actorSprite;
let carSprite;
let carSprite2;
let carSprite3;
let soundtrack;
let scored;
let wasHit;

function preload(){
  roadSprite = loadImage("Sprites/estrada.png");
  actorSprite = loadImage("Sprites/ator-1.png");
  carSprite = loadImage("Sprites/carro-1.png");
  carSprite2 = loadImage("Sprites/carro-2.png");
  carSprite3 = loadImage("Sprites/carro-3.png");
  soundtrack = loadSound("Sprites/trilha.mp3");
  scored = loadSound("Sprites/pontos.wav");
  wasHit = loadSound("Sprites/colidiu.mp3");
  carSprites = [carSprite, carSprite2, carSprite3, carSprite, carSprite2, carSprite3]
}