const hamburgerButton = this.document.getElementById('hamburger-button');
const mobileMenu = this.document.getElementById('mobile-menu');

let menuIsActive = false;

function activateMenu() {
  mobileMenu.classList.add('active');
  hamburgerButton.classList.add('active');
}

function deactivateMenu() {
  mobileMenu.classList.remove('active');
  hamburgerButton.classList.remove('active');
}

function closeMenu() {
  deactivateMenu();
  menuIsActive = false;
}

function toggleMenuVisibility() {
  if (menuIsActive) {
    closeMenu();
    return;
  }

  activateMenu();
  menuIsActive = true;
}

function getWindowSize() {
  return this.screen.availWidth;
}

function removeClassActiveByWindowSize() {
  const windowSize = getWindowSize();
  const WIDTH_TO_CHANGE_LAYOUT = 640;

  if (windowSize >= WIDTH_TO_CHANGE_LAYOUT) closeMenu();
}

hamburgerButton.addEventListener('click', () => toggleMenuVisibility());
this.window.addEventListener('resize', () => removeClassActiveByWindowSize());
