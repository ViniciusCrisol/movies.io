const submitButton = document.getElementById('submit-button');

function login() {
  localStorage.setItem('@moviesio', 'token');
  window.location.href = '/admin/posts/criar';
}

submitButton.addEventListener('click', login);
