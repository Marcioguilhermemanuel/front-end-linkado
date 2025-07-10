// Anima os cards quando entram na viewport
const benefitsObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
      }
    });
  },
  { threshold: 0.1 },
);

document.querySelectorAll('.benefit-card, .benefits-extra').forEach((el) => {
  benefitsObserver.observe(el);
});
