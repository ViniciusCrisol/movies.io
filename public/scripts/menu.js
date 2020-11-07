const hamburgerButton = document.getElementById('hamburger-button');
const mobileMenu = document.getElementById('mobile-menu');

let menuIsActive = false;

function openMenu() {
  menuIsActive = true;
  mobileMenu.classList.add('active');
  hamburgerButton.classList.add('active');
}

function closeMenu() {
  menuIsActive = false;
  mobileMenu.classList.remove('active');
  hamburgerButton.classList.remove('active');
}

function toggleMenu() {
  if (!menuIsActive) openMenu();
  else closeMenu();
}

function deactivateMenuByWindowSize() {
  const curentWindowSize = screen.availWidth;
  const WIDTH_TO_CHANGE_LAYOUT = 640;

  if (curentWindowSize >= WIDTH_TO_CHANGE_LAYOUT) closeMenu();
}

hamburgerButton.addEventListener('click', () => toggleMenu());
window.addEventListener('resize', () => deactivateMenuByWindowSize());
