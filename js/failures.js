
window.failure='none';

document.addEventListener('keydown',e=>{
 if(e.key==='1'){
   document.getElementById('status').innerText='Air Failure';
 }
 if(e.key==='2'){
   document.getElementById('status').innerText='RTD Open Circuit';
 }
 if(e.key==='3'){
   document.getElementById('status').innerText='PH10 Failure';
 }
});
