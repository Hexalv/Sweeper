
var size;
var sqrWid=128;
var mine = new Image();
mine.src="Minesweep.png";
var bomb=[1,3];
var blank=[0,0]
var boomer=[];
var randy=0;
var blip=[0,0];
var nearBombs=[];
var clicked=[];
var outOfEight=0;
var marked=[]; 

//creates map
function main() {
var can = document.getElementById("game");
var ctx = can.getContext("2d");



//sets game width
size=prompt("Enter width(1-15ish):");

if(isNaN(size)|| size==null) {
  alert("Illegal characters found. Default assumed: 12");
  size=12;
}
clicked=[size] [size];
console.log(clicked);
//b
//23 to ~55: creates bombs
//b
console.log(size);
var a=0;
//x axis
while(a < size) {
  boomer.push([]);
  var b=0;
  //y axis
  while(b<size) {
    //Change this to change bomb likelyhood low num=more bombs
    randy=Math.floor(Math.random()*5);
    if(randy==1) {
      //bomb
      bomb=[0,0];
      boomer[a].push(true);
      
    } else {
      //not bomb
      bomb=[0,0];
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
//To ~166: adds numbers
//
var c=0;

//decides each square's nearBomb count
while(c<size) {
  var d=0;
  
  while(d<size) {
    marked.push([0]);
    nearBombs.push([0]);  
    nearBombs[c].push(0);
    if(d>0 && boomer[c] [d-1]) {
      nearBombs[c] [d]++;  
    }
    if(d>0 && c>0 && boomer[c-1] [d-1]) {
      nearBombs[c] [d]++;  
    }
    if(d>0 && c<size-1 && boomer[c+1] [d-1]) {
      nearBombs[c] [d]++;  
    }
    if(c>0 && boomer[c-1] [d]) {
      nearBombs[c] [d]++;  
    }
    if(c<size-1 && boomer[c+1] [d]) {
      nearBombs[c] [d]++;  
    }
    if(c>0 && d<size && boomer[c-1] [d+1]) {
      nearBombs[c] [d]++;  
    }
    if(d<size && boomer[c] [d+1]) {
      nearBombs[c] [d]++;  
    }
    if(c<size-1 && d<size && boomer[c+1] [d+1]) {
      nearBombs[c] [d]++;  
    }
    
    
    
    
    
  
 

    
    d++;
  }
  c++;
}


}

//right click
function right(event) {
var can = document.getElementById("game");
var ctx = can.getContext("2d");
console.log("heyhey");
var f=Math.floor((event.clientX-10)/48);
var e=Math.floor((event.clientY-10)/48);
  
  if(marked[f] [e] != true) {
      marked[f] [e] = true;
//context.drawImage(img,         cropX,    cropY,        cropWid,cropHit,  X,        Y,           Wid,    Hit)
      ctx.drawImage(mine, sqrWid*0, sqrWid*3, sqrWid, sqrWid, f*sqrWid, e*sqrWid/2, sqrWid, sqrWid/2);
      } else if(marked[f] [e]) {
//context.drawImage(img,         cropX,    cropY,        cropWid,cropHit,  X,        Y,           Wid,    Hit)
      ctx.drawImage(mine, sqrWid*0, sqrWid*0, sqrWid, sqrWid, f*sqrWid, e*sqrWid/2, sqrWid, sqrWid/2);
      marked[f] [e] = false;
      }
}


//when square pressed
function show(event) {
var can = document.getElementById("game");
var ctx = can.getContext("2d");


var f=Math.floor((event.clientX-10)/48);
var e=Math.floor((event.clientY-10)/48);
var g=e;
var h=f;

console.log(f+" "+e);
  
    if(!boomer[f] [e]) {
    //Decides img to use per square
    switch(nearBombs[f] [e]) {
      
      case 0:
      blip=[2,3];
      for(var i=0; i<8; i++) {
        switch(i) { 
        
          case 0:
          g=e+1;
          h=f+1;
          break;
          
          case 1:
          g=e+1;
          h=f;
          break;
          
          case 2:
          g=e+1;
          h=f-1;
          break;
          
          case 3:
          g=e;
          h=f+1;
          break;
          
          case 4:
          g=e;
          h=f-1;
          break;
          
          case 5:
          g=e-1;
          h=f+1;
          break;
          
          case 6:
          g=e-1;
          h=f;
          break;
          
          case 7:
          g=e-1;
          h=f-1;
          break;
        }
        chain(g,h);
      
      }
      break;
    
      case 1:
      blip=[1,0]
      break;
    
      case 2:
      blip=[2,0]
      break;
      
      case 3:
      blip=[0,1]
      break;
      
      case 4:
      blip=[1,1]
      break;
      
      case 5:
      blip=[2,1]
      break;
      
      case 6:
      blip=[0,2]
      break;
      
      case 7:
      blip=[1,2]
      break;
      
      case 8:
      blip=[2,2]
      break;
      
      
    }
    
    
    //context.drawImage(      img,  cropX,    cropY,    cropWid,cropHit,X,        Y,           Wid,    Hit)
    ctx.drawImage(mine, sqrWid*blip[0], sqrWid*blip[1], sqrWid, sqrWid, f*sqrWid, e*sqrWid/2, sqrWid, sqrWid/2);  

//if hits bomb
} else {
  alert("You dead. I shall now send you to the deep dark reaches of the underworld.");
  
  for(var ac=0; ac<20; ac++) {
  window.open("ricky.html","_blank");
  }
}


}


//does effect of click-chain...theoreticaly
function chain(e, f) {
var can = document.getElementById("game");
var ctx = can.getContext("2d");



  

    
    
}