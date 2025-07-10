// Funcionalidade do FAQ
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach((item) => {
  const question = item.querySelector('.faq-question');

  question.addEventListener('click', () => {
    const isActive = item.classList.contains('active');

    // Fecha todos os itens
    faqItems.forEach((faq) => {
      faq.classList.remove('active');
    });

    // Abre o item clicado se não estava ativo
    if (!isActive) {
      item.classList.add('active');
    }
  });
});

// Observador para animações
const faqObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
      }
    });
  },
  { threshold: 0.1 },
);

document.querySelectorAll('.faq-item, .faq-cta').forEach((el) => {
  faqObserver.observe(el);
});
