// Observador para animações
const pricingObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
      }
    });
  },
  { threshold: 0.1 },
);

document.querySelectorAll('.pricing-card, .pricing-footer-note').forEach((el) => {
  pricingObserver.observe(el);
});
