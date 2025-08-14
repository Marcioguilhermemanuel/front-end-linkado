 // Atualiza o ano automaticamente
        document.getElementById("current-year").textContent = new Date().getFullYear();
        
        // Adiciona animações de entrada aos elementos
        document.addEventListener('DOMContentLoaded', function() {
            const elements = document.querySelectorAll('.animate-in');
            elements.forEach((el, index) => {
                el.style.animationDelay = `${0.1 * index}s`;
            });
        });