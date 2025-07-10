// Adiciona classe de animação quando a seção entra na viewport
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
      }
    });
  },
  { threshold: 0.1 },
);

document.querySelectorAll('.step-card, .section-header, .cta-container').forEach((el) => {
  observer.observe(el);
});
