const toggle = document.querySelector('.nav-toggle');
const menu = document.getElementById('menu');
if (toggle) toggle.addEventListener('click', () => menu.classList.toggle('show'));

document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      menu && menu.classList.remove('show');
    }
  });
});

const form = document.getElementById('quoteForm');
if (form) form.addEventListener('submit', e => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(form).entries());
  console.log('Quote request:', data);
  alert('Thanks! Your quote request has been received. We will contact you shortly.');
  form.reset();
});
