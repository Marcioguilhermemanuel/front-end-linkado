// Inicializa o observador de interseção para os testemunhos
const testimonialsObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
      }
    });
  },
  { threshold: 0.1 },
);

document.querySelectorAll('.testimonial-card, .testimonials-cta').forEach((el) => {
  testimonialsObserver.observe(el);
});

// Simples efeito de slider (pode ser substituído por um slider real como Swiper.js)
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial-card');

function rotateTestimonials() {
  testimonials.forEach((card, index) => {
    card.style.opacity = index === currentTestimonial ? '1' : '0.5';
    card.style.transform = index === currentTestimonial ? 'translateY(-10px)' : 'translateY(0)';
  });

  currentTestimonial = (currentTestimonial + 1) % testimonials.length;
  setTimeout(rotateTestimonials, 5000);
}

// Inicia a rotação após 5 segundos da animação inicial
setTimeout(rotateTestimonials, 5000);
