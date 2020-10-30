const hamburgerButton = this.document.getElementById('hamburger-button');
const mobileMenu = this.document.getElementById('mobile-menu');

let menuIsActive = false;

function addClassActiveToMenu() {
  mobileMenu.classList.add('active');
}

function removeClassActiveToMenu() {
  mobileMenu.classList.remove('active');
}

function closeMenu() {
  removeClassActiveToMenu();
  menuIsActive = false;
}

function toggleMenuVisibility() {
  if (menuIsActive) {
    closeMenu();
    return;
  }

  menuIsActive = true;
  addClassActiveToMenu();
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
