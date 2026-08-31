const q=s=>document.querySelector(s),qa=s=>[...document.querySelectorAll(s)];
window.addEventListener('load',()=>setTimeout(()=>document.body.classList.add('loaded'),500));
window.addEventListener('scroll',()=>{q('header').classList.toggle('scrolled',scrollY>30);q('#top').classList.toggle('showTop',scrollY>500)});
q('#top').onclick=()=>scrollTo({top:0,behavior:'smooth'});
q('#menu').onclick=()=>{q('#mobileNav').classList.add('open');document.body.classList.add('lock')};
q('#closeMenu').onclick=closeMenu;qa('#mobileNav a').forEach(a=>a.onclick=closeMenu);
function closeMenu(){q('#mobileNav').classList.remove('open');document.body.classList.remove('lock')}
const io=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&e.target.classList.add('visible')),{threshold:.12});qa('.reveal').forEach(x=>io.observe(x));
qa('#filters button').forEach(b=>b.onclick=()=>{qa('#filters button').forEach(x=>x.classList.remove('active'));b.classList.add('active');let f=b.dataset.f;qa('.shot').forEach(s=>s.style.display=(f==='all'||s.dataset.cat===f)?'block':'none')});
let shots=qa('.shot'),idx=0,lb=q('#lightbox'),lbi=q('#lbImg');
function show(i){idx=(i+shots.length)%shots.length;lbi.className='crop '+[...shots[idx].classList].find(x=>/^c\d/.test(x));q('#counter').textContent=`${String(idx+1).padStart(2,'0')} / ${String(shots.length).padStart(2,'0')}`}
shots.forEach((s,i)=>s.onclick=()=>{lb.classList.add('open');document.body.classList.add('lock');show(i)});
q('#lbClose').onclick=()=>{lb.classList.remove('open');document.body.classList.remove('lock')};q('#prev').onclick=()=>show(idx-1);q('#next').onclick=()=>show(idx+1);
document.addEventListener('keydown',e=>{if(e.key==='Escape'){lb.classList.remove('open');q('#videoModal').classList.remove('open');document.body.classList.remove('lock')}if(lb.classList.contains('open')&&e.key==='ArrowRight')show(idx+1);if(lb.classList.contains('open')&&e.key==='ArrowLeft')show(idx-1)});
let sx=0;lbi.addEventListener('touchstart',e=>sx=e.touches[0].clientX);lbi.addEventListener('touchend',e=>{let d=e.changedTouches[0].clientX-sx;if(Math.abs(d)>50)show(idx+(d<0?1:-1))});
function openVid(){q('#videoModal').classList.add('open');document.body.classList.add('lock')}q('#play').onclick=openVid;q('.video i').onclick=openVid;q('#vClose').onclick=()=>{q('#videoModal').classList.remove('open');document.body.classList.remove('lock')};