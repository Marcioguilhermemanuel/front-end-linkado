// Observador para animações
const audienceObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
      }
    });
  },
  { threshold: 0.1 },
);

document.querySelectorAll('.audience-card, .audience-cta').forEach((el) => {
  audienceObserver.observe(el);
});
