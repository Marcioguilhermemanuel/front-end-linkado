// Atualiza o ano automaticamente
document.getElementById('ano-atual').textContent = new Date().getFullYear();

// Animação suave para links âncora
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    });
  });
});
