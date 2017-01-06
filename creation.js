//creates map
function main() {

var can = document.getElementById("game");
var ctx = can.getContext("2d");
var size;
var sqrWid=128;
var mine = new Image();
mine.src="Minesweep.png";
var bomb=[1,3];
var boomer=[];
var randy=0;

//sets game width
size=prompt("enter width:");

if(isNaN(size)) {
  alert("Illegal characters found. Default assumed: 12");
  size=12;
}

//b
//To ~55: creates bombs
//b
bombCount=size*size/10;
console.log(size);
var a=0;
//x axis
while(a < size) {
  boomer.push([]);
  var b=0;
  //y axis
  while(b<size) {
    
    randy=Math.floor(Math.random()*5);
    console.log(randy);
    if(randy==1) {
      //bomb
      bomb=[1,3];
      boomer[a].push(true);
      
    } else {
      //not bomb
      bomb=[2,3];
      boomer[a].push(false);
    }
    
    //context.drawImage(      img,  cropX,    cropY,    cropWid,cropHit,X,        Y,           Wid,    Hit)
    ctx.drawImage(mine, sqrWid*bomb[0], sqrWid*bomb[1], sqrWid, sqrWid, a*sqrWid, b*sqrWid/2, sqrWid, sqrWid/2);
    b++;
  }
  a++;
}
//boomer[x] [y]
console.log(boomer[0]);


//
//To ~X: adds numbers
//
var c=0;


while(c<size) {
  var d=0;
  while(d<size) {
    var nearBombs=0;
    
    if(!boomer[c] [d]) {
      console.log("no");  
    } else {
      console.log("yes");
    }
    
    d++;
  }
  c++;
}


}