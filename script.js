const toggle = document.querySelector('.nav-toggle');
const menu = document.getElementById('menu');
if (toggle) toggle.addEventListener('click', () => menu.classList.toggle('show'));

document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const href = a.getAttribute('href');
    if (!href || href === '#') return;

    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      menu && menu.classList.remove('show');
    }
  });
});

const form = document.getElementById('quoteForm');
const formStatus = document.getElementById('quoteFormStatus');

if (form) {
  const submitButton = form.querySelector('button[type="submit"]');
  const originalButtonHTML = submitButton ? submitButton.innerHTML : '';

  const setStatus = (type, message) => {
    if (!formStatus) return;
    formStatus.className = `form-status show ${type}`;
    formStatus.textContent = message;
  };

  form.addEventListener('submit', async e => {
    e.preventDefault();
    if (!submitButton) return;

    submitButton.disabled = true;
    submitButton.setAttribute('aria-busy', 'true');
    submitButton.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';
    setStatus('loading', 'Sending your request...');

    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json'
        }
      });

      let result = {};
      try {
        result = await response.json();
      } catch {
        result = {};
      }

      if (response.ok && result.success) {
        setStatus('success', 'Thanks! Your quote request has been sent. We will contact you shortly.');
        form.reset();
      } else {
        setStatus('error', result.message || 'Submission failed. Please try again.');
      }
    } catch (error) {
      setStatus('error', 'Could not send your request right now. Please call +1 778-522-1667.');
      console.error('Web3Forms submit error:', error);
    } finally {
      submitButton.disabled = false;
      submitButton.removeAttribute('aria-busy');
      submitButton.innerHTML = originalButtonHTML;
    }
  });
}
