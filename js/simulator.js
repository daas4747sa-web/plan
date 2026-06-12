
const temp=document.getElementById('temp');
const t=document.getElementById('t');
const m=document.getElementById('m');
const p=document.getElementById('p');

function updateLoop(){
 let T=parseFloat(temp.value);
 let MA=4+(16*T/100);
 let PSI=3+(12*(MA-4)/16);

 t.innerText=T.toFixed(0);
 m.innerText=MA.toFixed(2);
 p.innerText=PSI.toFixed(2);

 window.currentTemp=T;
}
temp.addEventListener('input',updateLoop);
updateLoop();
