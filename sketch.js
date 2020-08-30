var line
function setup(){
    createCanvas(600,600)
  line=createSprite(300,300,10,10)
}
function draw(){
    line.x=mouseX
    line.y=mouseY
   drawSprites()
}