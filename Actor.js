//Actor's codes

let xActor = 100;
let yActor = 366;
let actorSpeed = 3;
let hit = false;
let myScore = 0;

function showActor(){
  image(actorSprite, xActor, yActor, 30, 30);
}

function actorMovement(){
  if(keyIsDown(UP_ARROW)){
    yActor -= actorSpeed;
  }
  if(keyIsDown(DOWN_ARROW)){
    if (actorCanMove()){
    yActor += actorSpeed;
    }
  }
}

function actorCanMove(){
  return yActor < 366;
}

function checkHit(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for ( let i = 0; i < carSprites.length; i++){
    hit = collideRectCircle(xCars[i], yCars[i], widthCar, heightCar, xActor, yActor, 15);
    if (hit){
      wasHit.play();
      returnActorToInitialPosition();
      if (scoreGreaterThanZero()){
      myScore -= 1;
      }
    }
  }
}

function scoreGreaterThanZero(){
  return myScore > 0;
}

function returnActorToInitialPosition(){
  yActor = 366;
}

function scoreBoard(){
  textAlign(CENTER);
  textSize(26);
  fill(color(255,255,0));
  text(myScore, width / 5, 27);
}

function scorePoint(){
  if (yActor < 15){
    myScore += 1;
    scored.play();
    returnActorToInitialPosition();
  }
}




