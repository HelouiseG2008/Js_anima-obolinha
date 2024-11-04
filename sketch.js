let cor;
let circuloX;
let circuloY;

function setup() {
  createCanvas(600, 700);
  background("blue");
  cor = color(random(0, 250),random(0, 255), random(0, 255));
   circuloX=[0, 0, 0]
   circuloY=[random(height), random(height), random(height)];
  }
   
function draw() {
  fill(cor);
  
  for(let contador in circuloX){
  circle(circuloX[contador], circuloY[contador], 70);
  circuloX[contador]+= random(0,8)
    circuloY[contador]+=random(-9,8)
    
    if(circuloX [contador] >= width) {
      circuloX[contador]=0;
      circuloY[contador]=random(height);
      cor = color(random(0, 255), random(0, 255), random(0,255));
  }
}
  if(mouseIsPressed){
    cor = color(random(0, 250),random(0, 255), random(0, 255));
     }
}