// Atualiza o ano automaticamente
        document.getElementById("current-year").textContent = new Date().getFullYear();
        
        // Efeito de animação ao carregar
        document.addEventListener('DOMContentLoaded', function() {
            const items = document.querySelectorAll('.btn, .social-icon, .logo-container');
            items.forEach((item, index) => {
                setTimeout(() => {
                    item.style.opacity = '1';
                    item.style.transform = 'translateY(0)';
                }, 100 * index);
            });
        });