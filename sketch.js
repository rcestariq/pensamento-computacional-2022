let xbolinha = 300;
let ybolinha = 200;
let diametro = 20;
let velocidadexbolinha = 3;
let velocidadeybolinha = 3;
let raio = diametro/2;
let xraquete = 5;
let yraquete = 150;
let raquetealtura = 10;
let raquetecomprimento = 90;
let hit = false;
let xraqueteoponente = 585;
let yraqueteoponente = 150;
let hit2 = false;
let meuspontos = 0;
let pontosoponente = 0;

function setup() {
  createCanvas(600, 400);         
}

function draw() {
  background(0);
  circle(xbolinha, ybolinha, diametro);
  text (meuspontos, 150, 26);
  fill (255);
  text (pontosoponente, 450, 26);
  rect(xraquete, yraquete, raquetealtura, raquetecomprimento)
  xbolinha += velocidadexbolinha;
  ybolinha += velocidadeybolinha;
  if (keyIsDown(UP_ARROW)){
    yraquete -=10;
  }
  if (keyIsDown(DOWN_ARROW)){
    yraquete +=10;
  }
  if (xbolinha + raio > width ||
      xbolinha - raio < 0)
    velocidadexbolinha *= -1;
  if (ybolinha + raio > height ||
      ybolinha - raio < 0)
    velocidadeybolinha *= -1;
  rect(xraqueteoponente, yraqueteoponente, raquetealtura, raquetecomprimento)
  
  velocidadeyoponente = ybolinha - yraqueteoponente - raquetecomprimento /2 -30;
  yraqueteoponente += velocidadeyoponente;
  
  hit = collideRectCircle(xraquete, yraquete, raquetecomprimento, raquetealtura, xbolinha, ybolinha, diametro);
  hit2 = collideRectCircle(xraqueteoponente, yraqueteoponente, raquetecomprimento, raquetealtura, xbolinha, ybolinha, diametro);
      
   if (hit){velocidadexbolinha *=-1;
   if (hit2)velocidadexbolinha *=-1;
            
  if (xbolinha > 590){
    pontosoponente +=1;
  }
    
  }
  
  }            