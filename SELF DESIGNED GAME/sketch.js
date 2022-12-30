var bkimg
var heliImg,heli
var bk


function preload(){

bkimg=loadImage("FLOODBAKG.jpg")

heliImg=loadImage("heli.png")
}




function setup(){
createCanvas=(windowWidth,windowHeight)

bk=createSprite(450,200)

heli=createSprite(400,100)
heli.addImage(heliImg)
heli.scale=0.5

}



function draw(){
background("white")
image(bkimg,0,0,width+100,height+100)

if(keyDown(LEFT_ARROW)){
heli.x=heli.x-3
}
if(keyDown(RIGHT_ARROW)){
  heli.x=heli.x+3
}




drawSprites()
}
