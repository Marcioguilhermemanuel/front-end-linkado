document.addEventListener('DOMContentLoaded', () => {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
      const questionButton = item.querySelector('.faq-question');
      const answerPanel = item.querySelector('.faq-answer');
      const icon = item.querySelector('.faq-icon');

      questionButton.addEventListener('click', () => {
          const isExpanded = questionButton.getAttribute('aria-expanded') === 'true';

          // Fecha todos os outros itens para um acordeão "clássico"
          faqItems.forEach(otherItem => {
              if (otherItem !== item) {
                  otherItem.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
                  otherItem.querySelector('.faq-answer').style.display = 'none';
                  otherItem.querySelector('.faq-icon').classList.remove('rotate-180');
                  otherItem.classList.remove('bg-primary-dark/20');
              }
          });

          // Alterna o item clicado
          if (isExpanded) {
              questionButton.setAttribute('aria-expanded', 'false');
              answerPanel.style.display = 'none';
              icon.classList.remove('rotate-180');
              item.classList.remove('bg-primary-dark/20');
          } else {
              questionButton.setAttribute('aria-expanded', 'true');
              answerPanel.style.display = 'block';
              icon.classList.add('rotate-180');
              item.classList.add('bg-primary-dark/20');
          }
      });
  });
});