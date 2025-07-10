// Filtro do Portfólio
const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Ativa o botão selecionado
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    // Filtra os itens
    const filterValue = button.getAttribute('data-filter');

    portfolioItems.forEach(item => {
      if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});

// Modal do Portfólio
const previewButtons = document.querySelectorAll('.preview-btn');
const modal = document.querySelector('.portfolio-modal');
const modalImage = document.querySelector('.modal-image');
const modalTitle = document.querySelector('.modal-title');
const modalCategory = document.querySelector('.modal-category');
const modalLink = document.querySelector('.modal-info .cta-button');
const closeModal = document.querySelector('.close-modal');

previewButtons.forEach((button, index) => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    const card = button.closest('.portfolio-card');
    const imageSrc = card.querySelector('img').src;
    const title = card.querySelector('h3').textContent;
    const category = card.querySelector('p').textContent;
    const link = card.querySelector('.view-btn').href;

    modalImage.src = imageSrc;
    modalTitle.textContent = title;
    modalCategory.textContent = category;
    modalLink.href = link;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  });
});

closeModal.addEventListener('click', () => {
  modal.classList.remove('active');
  document.body.style.overflow = 'auto';
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
  }
});

// Observador para animações
const portfolioObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animated');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.portfolio-item, .portfolio-filter, .portfolio-cta').forEach(el => {
  portfolioObserver.observe(el);
});