// ===== Scroll reveal (IntersectionObserver)
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){ e.target.classList.add('visible'); io.unobserve(e.target); }
  });
},{threshold:0.15});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

// ===== Animated impact counters
function animateNumber(el, target, duration=1500){
  const start = 0;
  const startTime = performance.now();
  function tick(t){
    const p = Math.min((t - startTime)/duration, 1);
    const n = Math.floor(start + (target - start) * (1 - Math.pow(1-p,3))); // ease-out
    el.textContent = n.toLocaleString();
    if(p<1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}
document.querySelectorAll('.impact-num').forEach(el=>{
  const target = parseInt(el.getAttribute('data-target'),10) || 0;
  const io2 = new IntersectionObserver((ents)=>{
    ents.forEach(ent=>{
      if(ent.isIntersecting){ animateNumber(el, target); io2.unobserve(el); }
    });
  },{threshold:0.4});
  io2.observe(el);
});

// ===== Live carbon counter + goal bar
(function(){
  const el = document.getElementById('carbonCounter');
  if(!el) return;
  const goal = 1000000; // kg
  let current = parseInt(el.getAttribute('data-start')||'250000',10);
  const ratePerTick = parseInt(el.getAttribute('data-rate')||'11',10); // kg per tick
  const goalFill = document.getElementById('goalFill');
  const goalPct = document.getElementById('goalPct');

  function update(){
    current += ratePerTick;
    if(current > goal) current = goal;
    el.textContent = current.toLocaleString();
    const pct = Math.min(100, (current/goal)*100);
    goalFill.style.width = pct.toFixed(1) + '%';
    goalPct.textContent = pct.toFixed(1) + '%';
  }
  update();
  setInterval(update, 1200); // every 1.2s
})();
