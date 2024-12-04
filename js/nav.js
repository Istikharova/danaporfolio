/* nav link active */
const navLinks = document.querySelectorAll('#main-nav ul li a');
const currentPath = window.location.pathname;

navLinks.forEach(link => {
  const linkPath = new URL(link.href).pathname;
  if (linkPath === currentPath) {
    link.classList.add('link-active');
  }
});

const burgerIcon = document.querySelector('.burger-icon');
const menu = document.querySelector('.container-nav ul');

burgerIcon.addEventListener('click', () => {
  menu.classList.toggle('nav-show');
  burgerIcon.classList.toggle('nav-active');
}); 