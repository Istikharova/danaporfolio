/* nav link active */
const navLinks = document.querySelectorAll('#main-nav ul li a');

// Aktueller Pfad abrufen
const currentPath = window.location.pathname;

// Schleife durch die Links, um den aktiven Link zu markieren
navLinks.forEach(link => {
  // Den Pfad des Links extrahieren
  const linkPath = new URL(link.href).pathname;
  // Vergleich zwischen dem aktuellen Pfad und dem Link-Pfad
  if (linkPath === currentPath) {
    link.classList.add('link-active');
  }
});

const burgerIcon = document.querySelector('.burger-icon');
const menu = document.querySelector('.container-nav ul');

burgerIcon.addEventListener('click', () => {
  // Toggle the 'show' class to open and close the menu
  menu.classList.toggle('nav-show');
  // Toggle the active state for the burger icon (optional for animation effects)
  burgerIcon.classList.toggle('nav-active');
}); 