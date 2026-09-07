function menu(){const n=document.getElementById('nav');n.style.display=n.style.display==='flex'?'none':'flex';}
document.getElementById('year').textContent=new Date().getFullYear();
document.querySelectorAll('#nav a').forEach(a=>a.onclick=()=>{if(innerWidth<=650)document.getElementById('nav').style.display='none'});