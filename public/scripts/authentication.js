const token = localStorage.getItem('@moviesio');

if (token) {
  axios.headers.authorization = token;
}
