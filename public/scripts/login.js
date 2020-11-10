const submitButton = document.getElementById('submit-button');

function login() {
  window.location.href = '/admin/posts/criar';
}

submitButton.addEventListener('click', () => login());
