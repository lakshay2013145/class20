
var fixedObj, movingObj;
function setup() {
  createCanvas(800,400);
  fixedObj= createSprite(400, 200, 50, 50);
  fixedObj.shapeColor="green";
  fixedObj.debug=true;
  movingObj= createSprite(400, 200, 100, 50);
  movingObj.shapeColor="green";
  movingObj.debug=true;
}

function draw() {
  background("black"); 
  movingObj.x=mouseX;
  movingObj.y=mouseY; 
  console.log(movingObj.x- fixedObj.x);
  if(movingObj.x-fixedObj.x<movingObj.width/2+fixedObj.width/2
    && fixedObj.x-movingObj.x<movingObj.width/2+fixedObj.width/2 
    && movingObj.y-fixedObj.y<movingObj.height/2+fixedObj.height/2
    && fixedObj.y-movingObj.y<movingObj.height/2+fixedObj.height/2){
    fixedObj.shapeColor="red";
    movingObj.shapeColor="red";
  }else{
    fixedObj.shapeColor="green";
    movingObj.shapeColor="green";

  }
  drawSprites();
}