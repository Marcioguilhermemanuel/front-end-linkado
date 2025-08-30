document.addEventListener('DOMContentLoaded', () => {
  const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('animate-fade-in-up');
              observer.unobserve(entry.target);
          }
      });
  }, observerOptions);

  document.querySelectorAll('.pricing-card, .relative.lg\\:scale-105').forEach((el, index) => {
      el.style.opacity = '0'; // Começa invisível para a animação funcionar
      el.style.animationDelay = `${index * 0.15}s`;
      observer.observe(el);
  });
});