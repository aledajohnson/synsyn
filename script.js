const form = document.getElementById('apply-form');
const confirm = document.getElementById('form-confirm');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  confirm.hidden = false;
  form.querySelectorAll('input, textarea, button').forEach((el) => (el.disabled = true));
  confirm.scrollIntoView({ behavior: 'smooth', block: 'center' });
});
