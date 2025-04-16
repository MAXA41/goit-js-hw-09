const formData = { email: '', message: '' };

const form = document.querySelector('.feedback-form');
const inp = form.elements.email;
const textarea = form.elements.message;

const localStorageKey = 'feedback-form-state';

const saved = JSON.parse(localStorage.getItem(localStorageKey));

if (saved) {
  textarea.value = saved.message ?? '';
  inp.value = saved.email ?? '';
  formData.email = saved.email;
  formData.message = saved.message;
}

// textarea.value =
//   JSON.parse(localStorage.getItem(localStorageKey)).message ?? '';
// inp.value = JSON.parse(localStorage.getItem(localStorageKey)).email ?? ''; ---------------------- errorrrr

form.addEventListener('input', event => {
  formData.email = inp.value.trim();
  formData.message = textarea.value.trim();
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

form.addEventListener('submit', event => {
  event.preventDefault();

  if (!formData.email.trim() || !formData.message.trim()) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);
  localStorage.removeItem(localStorageKey);
  form.reset();
  formData.email = '';
  formData.message = '';
});
