var bird,birdimg,btmpillar,btmpillarimg,toppillar,toppillarimg,bg
var toppillargrp
var btmpillargrp
var gameState=1

function preload(){
    birdimg=loadImage("assets/bird.jpg")
    btmpillarimg=loadImage("assets/btm_pillar.png")
    toppillarimg=loadImage("assets/top_pillar.png")
    bgimg=loadImage("assets/bg1.jpg")
    bird1=loadAnimation("assets/BirdSprite1.png","assets/BirdSprite2.png" ,"assets/BirdSprite3.png", "assets/BirdSprite4.png")
}



function setup(){
    createCanvas(windowWidth,windowHeight)
    
    bg=createSprite(width/2,height/2,width,height)
    bg.addImage(bgimg)
    bg.scale=1.8
    bg.velocity.x=-6

    bird=createSprite(100,height/2,20,20)
    bird.addAnimation("fly",bird1)
    bird.scale=0.5
    bird.setCollider("circle",0,0,50)
    
    btmpillargrp=new Group()
    toppillargrp=new Group()
    
}


function topPillar(){
    if(frameCount % 80===0)
    {toppillar=createSprite(width,160,20,70)
        toppillar.addImage(toppillarimg)
        toppillar.velocity.x=-6
        var s=[0.9,1,1.1,1.2,0.8]
        toppillar.scale=random(s)
        toppillar.lifetime=width+20
        toppillargrp.add(toppillar)
        toppillar.debug=true
        toppillar.setCollider("rectangle",-55,-50,50,250)
    }
}
    
    function btmPillar(){
        if(frameCount % 80===0)
        {btmpillar=createSprite(width-60,height-150,20,70)
            btmpillar.addImage(btmpillarimg)
            btmpillar.velocity.x=-6
            var s=[0.9,1,1.1,1.2,0.8]
            btmpillar.scale=random(s)
            btmpillar.lifetime=width+20
        btmpillargrp.add(btmpillar)
        btmpillar.debug=true
        btmpillar.setCollider("rectangle",0,0,50,170)
        }
    }



function draw(){
    background("white")
    
    if(gameState===1){
        if(bg.position.x<0){bg.position.x=width/2}
        topPillar()
        btmPillar()
        
        bird.debug=true
        bird.velocity.y+=0.1
        if(btmpillargrp.collide(bird)){
           gameState=2
           bird.velocity.y=0
        }
        
            drawSprites()
    }
else if(gameState===2){
swal({
    title:"Flappy Bird",
    text:"thank you for playing",
    //imageUrl:"https://github.com/reynold24/bird/blob/main/bird.jpg",
    //imageSize:"150 X 150",
    confirmButtonText:"playAgain?"
},
function(isConfirmed){
    if(isConfirmed){
        location.reload()
    }
}
)
}


}

function keyPressed(){
    if (keyCode ===32){bird.velocity.y=-3}
}
