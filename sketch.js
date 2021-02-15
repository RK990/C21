var canvas;
var music;

var ball;
var blue;
var green;
var red;
var yellow;
var edges;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(500,500);

    blue = createSprite(70, 490, 70, 10)
    blue.shapeColor = "blue"


    green = createSprite(140, 490, 70, 10)
    green.shapeColor = "green"

    red = createSprite(210, 490, 70, 10)
    red.shapeColor = "red"

    yellow = createSprite(280, 490, 70, 10)
    yellow.shapeColor = "yellow"

    ball = createSprite(Math.round(random(70, 280)), 250, 10, 10)
    ball.shapeColor = "white"

    //create 4 different surfaces



    //create box sprite and give velocity
    ball.velocityY = Math.round(random(1, 5))
    ball.velocityX = Math.round(random(1, 5))
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite

    if(ball.isTouching(blue)){
        ball.shapeColor = "blue"
    }
    if(ball.isTouching(green)){
        ball.shapeColor = "green"
    }

    if(ball.isTouching(yellow)){
        ball.shapeColor = "yellow"
    }

    if(ball.isTouching(red)){
        ball.shapeColor = "red"
    }


    
    edges = createEdgeSprites()
    ball.bounceOff(blue)
    ball.bounceOff(green)
    ball.bounceOff(red)
    ball.bounceOff(yellow)
    ball.bounceOff(edges)

    
    






    //add condition to check if box touching surface and make it box
    drawSprites()
}
