
// Atualiza o ano automaticamente
document.getElementById("current-year").textContent = new Date().getFullYear();

// Controle do Modal do Cardápio
const menuButton = document.getElementById('menu-button');
const menuModal = document.getElementById('menu-modal');
const closeMenu = document.getElementById('close-menu');

menuButton.addEventListener('click', () => {
    menuModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
});

closeMenu.addEventListener('click', () => {
    menuModal.classList.add('hidden');
    document.body.style.overflow = 'auto';
});

// Fechar modal ao clicar fora
menuModal.addEventListener('click', (e) => {
    if (e.target === menuModal) {
        menuModal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }
});

// Navegação entre categorias do cardápio
const categories = document.querySelectorAll('.menu-category');
const categoryContents = document.querySelectorAll('.menu-category-content');

categories.forEach(category => {
    category.addEventListener('click', () => {
        // Remove classe ativa de todas as categorias
        categories.forEach(cat => cat.classList.remove('active'));

        // Adiciona classe ativa à categoria clicada
        category.classList.add('active');

        // Esconde todos os conteúdos
        categoryContents.forEach(content => content.classList.add('hidden'));

        // Mostra o conteúdo da categoria selecionada
        const categoryId = category.getAttribute('data-category');
        document.getElementById(categoryId).classList.remove('hidden');
    });
});

// Efeito de confirmação ao clicar nos botões
document.querySelectorAll('.btn-link').forEach(button => {
    button.addEventListener('click', function () {
        this.classList.add('bg-dourado');
        setTimeout(() => {
            this.classList.remove('bg-dourado');
        }, 300);
    });
});

// Animação para o contador de reservas
function animateValue(id, start, end, duration) {
    let obj = document.getElementById(id);
    let range = end - start;
    let current = start;
    let increment = end > start ? 1 : -1;
    let stepTime = Math.abs(Math.floor(duration / range));
    let timer = setInterval(function () {
        current += increment;
        obj.innerHTML = current;
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}

// Inicia a animação do contador
setTimeout(() => {
    animateValue("reservas-count", 0, 24, 2000);
}, 1000);
