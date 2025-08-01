
// Atualiza o ano automaticamente
document.getElementById("current-year").textContent = new Date().getFullYear();

// Animação de scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Observador de elementos para animações
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('slide-in');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.slide-in').forEach(el => {
    observer.observe(el);
});
