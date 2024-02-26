function setup() {
  // These lines are fitting our canvas
  // where we want in the DOM
  // so that we can manipulate its style
  // easier
  let myCanvas = createCanvas(400, 400);
  myCanvas.parent("canvas-parent");
}

function draw() {
  background(220);
  //----------------background-------------------//
  strokeWeight(0)
  fill('#E2C924')
  triangle(0,0,200,200,400,0)
  fill('#E2A624')
  triangle(400,0,200,200,400,400)
  fill('#E2C924')
  triangle(400,400,200,200,0,400)
  fill('#E2A624')
  triangle(0,400,200,200,0,0)
  //----------------creatures-------------------//
  drawCreature1(200, 200)
  drawCreature2(75, 75)
}

function drawCreature1(x,y){
  push();
    translate(x, y);
    strokeWeight(1)
      //body
      fill('#94491E')
      rect(-95,-80,190,150,50,50,40,40)
      fill('#6B3515')
      triangle(10,-80,-10,-80,50,-150)
      //head
      fill('#94491E')
      rect(-75,-50,150,100,20,20,50,50)
      //paws
      ellipse(45,65,70,40)
      ellipse(-45,65,70,40)
      //mouth&nose
      fill('#EFBBA3')
      ellipse(0,5,60,40)
      fill(0)
      ellipse(0,0,20,10)
      strokeWeight(2)
      line(0,0,0,15)
      line(0,15,-10,23)
      line(0,15,10,23)
      //eyes
      fill(0)
      circle(40,-25,16)
      circle(-40,-25,16)
      fill(255)
      quad(40,-30,45,-25,40,-20,35,-25)
      quad(-40,-30,-45,-25,-40,-20,-35,-25)
      fill('#6B3515')
      strokeWeight(1)
      arc(40,-35,25,15,0,-PI, CHORD)
      arc(-40,-35,25,15,0,-PI, CHORD)
      //ears
      fill('#6B3515')
      triangle(-75,-35,-75,75,-110,35)
      triangle(75,-35,75,75,110,35)
    pop();
}

function drawCreature2(x,y){
  push();
    translate(x,y);
    stroke('#362C4D')
    strokeWeight(1)
    //hat1
    fill('#6C579A')
    circle(0,-45,35)
    //head
    fill('#D9CF66')
    circle(0,0,90)
    //eyes
    fill('#362C4D')
    circle(-20,-10,10)
    circle(20,-10,10)
    //smile
    curve(-30,10,-10,25,10,25,30,10)
    //hat2
    fill('#6C579A')
    rect(-22,-45,44,7)
  pop();
}
