const submitButton = document.getElementById('submit-button');

if (axios.defaults.headers.authorization) {
  window.location.href = '/admin/posts/criar';
}

function login() {
  const AUTH_TOKEN = `Bearer 123`;
  localStorage.setItem('@moviesio', AUTH_TOKEN);
  axios.headers.authorization = AUTH_TOKEN;
  window.location.href = '/admin/posts/criar';
}

submitButton.addEventListener('click', () => login());
