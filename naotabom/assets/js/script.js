// Atualiza o ano automaticamente
        document.getElementById("current-year").textContent = new Date().getFullYear();
        
        // Animação de destaque para o WhatsApp
        const highlight = document.querySelector('.pulse');
        setInterval(() => {
            highlight.classList.toggle('pulse');
            setTimeout(() => highlight.classList.toggle('pulse'), 100);
        }, 5000);
        
        // Efeito de carregamento para o logo
        const logo = document.getElementById('logo-placeholder');
        setTimeout(() => {
            logo.style.opacity = '0.7';
            setTimeout(() => {
                logo.style.transition = 'opacity 0.5s ease';
                logo.style.opacity = '1';
            }, 300);
        }, 1000);