document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  const links = document.querySelectorAll('.nav-links a');
  const overlay = document.querySelector('.menu-overlay');

  hamburger.addEventListener('click', function () {
    navLinks.classList.toggle('open');
    hamburger.classList.toggle('active');
    document.body.classList.toggle('menu-open');
  });

  // Fecha o menu ao clicar em um link
  links.forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      hamburger.classList.remove('active');
      document.body.classList.remove('menu-open');
    });
  });

  if (overlay) {
    overlay.addEventListener('click', () => {
      navLinks.classList.remove('open');
      hamburger.classList.remove('active');
      document.body.classList.remove('menu-open');
    });
  }
});
