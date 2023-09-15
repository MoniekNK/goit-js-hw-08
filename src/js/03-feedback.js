const feedbackForm = document.querySelector('.feedback-form');

const STORAGE_KEY = 'feedback-form-state';

function saveFormState() {
  const formData = {
    email: feedbackForm.email.value,
    message: feedbackForm.message.value,
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

feedbackForm.addEventListener('input', saveFormState);

document.addEventListener('DOMContentLoaded', () => {
  const savedData = localStorage.getItem(STORAGE_KEY);
  if (savedData) {
    const formData = JSON.parse(savedData);
    feedbackForm.email.value = formData.email;
    feedbackForm.message.value = formData.message;
  }
});
