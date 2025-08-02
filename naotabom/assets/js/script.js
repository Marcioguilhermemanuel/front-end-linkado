
// Atualiza o ano automaticamente
document.getElementById("current-year").textContent = new Date().getFullYear();

// Adiciona efeito de clique nos cards
document.querySelectorAll('.link-card').forEach(card => {
    card.addEventListener('mousedown', () => {
        card.style.transform = 'translateY(0)';
    });

    card.addEventListener('mouseup', () => {
        card.style.transform = 'translateY(-5px)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});
