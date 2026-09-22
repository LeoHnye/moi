document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.site-header nav');
  if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', String(open));
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      nav.classList.remove('open'); menuToggle.setAttribute('aria-expanded','false');
    }));
  }
  const form = document.getElementById('form-contact');
  if (form) form.addEventListener('submit', e => { e.preventDefault(); window.location.href='thankyou.html'; });
  document.querySelectorAll('.project-image img,.about-photo-wrap img,.hero-visual img').forEach(img => {
    img.addEventListener('click', () => window.open(img.src, '_blank'));
  });
});
