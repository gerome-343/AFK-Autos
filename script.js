const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

document.querySelector('.menu')?.addEventListener('click', () => {
  const nav = document.querySelector('.nav nav');
  const open = nav.dataset.open === 'true';
  nav.dataset.open = String(!open);
  nav.style.display = open ? '' : 'flex';
  nav.style.position = 'absolute';
  nav.style.top = '76px';
  nav.style.right = '6vw';
  nav.style.flexDirection = 'column';
  nav.style.background = '#0b0e12';
  nav.style.padding = '20px';
  nav.style.border = '1px solid #272d34';
  nav.style.borderRadius = '10px';
});
