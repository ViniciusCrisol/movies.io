const token = localStorage.getItem('@moviesio');

if (!token) {
  window.location.href = '/admin/login';
}
