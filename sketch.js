function setup() {
  createCanvas(500, 400);
  soundtrack.loop();
}

function draw() {
  background(roadSprite);
  showActor();
  showCar();
  carMovement();
  actorMovement();
  returnCarsToInitialPosition();
  checkHit();
  scoreBoard();
  scorePoint();
}



