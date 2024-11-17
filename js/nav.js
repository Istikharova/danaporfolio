const burgerIcon = document.querySelector('.burger-icon');
const menu = document.querySelector('.container-nav ul');

burgerIcon.addEventListener('click', () => {
  // Toggle the 'show' class to open and close the menu
  menu.classList.toggle('show');
  // Toggle the active state for the burger icon (optional for animation effects)
  burgerIcon.classList.toggle('active');
}); 