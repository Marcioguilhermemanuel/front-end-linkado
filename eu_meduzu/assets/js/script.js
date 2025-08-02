
// Update current year
document.getElementById("current-year").textContent = new Date().getFullYear();

// Animation for link cards
document.querySelectorAll('.link-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.classList.add('shadow-xl');
    });

    card.addEventListener('mouseleave', () => {
        card.classList.remove('shadow-xl');
    });
});
