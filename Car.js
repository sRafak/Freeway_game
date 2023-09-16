//Car's codes

let xCars = [600,600,600, 600, 600, 600];
let yCars = [40, 96, 150, 210, 270, 318];
let carSpeeds = [2, 2.5, 3.2, 4, 3.4, 2,3];
let widthCar = 50;
let heightCar = 40


function showCar(){
  for (let i = 0; i < carSprites.length; i++){
    image(carSprites[i], xCars[i], yCars[i], widthCar, heightCar);
  }
}

function carMovement(){
  for (let i = 0; i < carSprites.length; i++){
  xCars[i] -= carSpeeds[i];
  }
}

function returnCarsToInitialPosition(){
  for( let i = 0; i < carSprites.length; i++){
    if (outOfScreen(xCars[i])){
      xCars[i] = 600;
    }
  }
}

function outOfScreen(xCar){
  return xCar < -50;
}



