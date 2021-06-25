var heart1image, heart2image, heart3image;
var shooterimage, shootingimage, zombieimage, bgimage, bg;

function preload(){
hert1image = loadImage("heart_1.png");
heart2image = loadImage("heart_2.png");
heart3image = loadImage("heart_3.png");
shooterimage = loadImage("shooter_2.png");
shootingimage = loadImage("shooter_3.png");
zombieimage = loadImage("zombie.png");
bgimage = loadImage("bg.jpeg");

}


function setup(){
createCanvas(windowWidth, windowHeight)
bg = createSprite(displayWidth/2, displayHeight/2);
bg.addImage(bgimage)

}



function draw(){
background(0)
drawSprites()
}