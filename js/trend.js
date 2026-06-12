
const c=document.getElementById('trend');
const ctx=c.getContext('2d');
let pts=[];

setInterval(()=>{
 pts.push(window.currentTemp||50);
 if(pts.length>100) pts.shift();

 ctx.clearRect(0,0,c.width,c.height);

 ctx.beginPath();
 pts.forEach((v,i)=>{
   let x=i*9;
   let y=220-(v*2);
   if(i===0) ctx.moveTo(x,y);
   else ctx.lineTo(x,y);
 });
 ctx.stroke();
},500);
