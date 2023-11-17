const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var up;
var right
var left;
var ball;
var b_up;
var b_right;

function setup(){
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  b_up = createImg("setinha.jpeg");
  b_up.position(220, 30);
  b_up.size(50, 50);
  b_up.mouseClicked(hForce);

  b_right = createImg("setona.jpeg");
  b_right.position(20, 30);
  b_right.size(50, 50);
  b_right.mouseClicked(vForce);

  ground = new Ground(200, 390, 400, 20);
  up = new Ground(200, 10, 400, 20);
  right = new Ground(390, 200, 20, 400);
  left = new Ground(10, 200, 20, 400);
}
function draw(){
  background(51);

  ground.show();
  up.show();
  right.show();
  left.show();
  Engine.update(engine);
}
function hForce(){}
function vForce(){}