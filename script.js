const navLinks=[...document.querySelectorAll('.nav nav a')];const sections=[...document.querySelectorAll('main section[id]')];
window.addEventListener('scroll',()=>{let y=scrollY+120;let current=sections[0]?.id;sections.forEach(s=>{if(y>=s.offsetTop)current=s.id});navLinks.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+current));});
document.querySelector('#theme').addEventListener('click',()=>{document.body.classList.toggle('light');});
