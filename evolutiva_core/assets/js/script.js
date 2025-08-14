// Atualiza o ano automaticamente
        document.getElementById("current-year").textContent = new Date().getFullYear();
        
        // Efeitos de animação ao rolar
        document.addEventListener('DOMContentLoaded', function() {
            const fadeElements = document.querySelectorAll('.fade-in');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = 1;
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            }, { threshold: 0.1 });
            
            fadeElements.forEach(el => {
                el.style.opacity = 0;
                el.style.transform = 'translateY(20px)';
                el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                observer.observe(el);
            });
            
            // Efeito para os cards de preço
            const priceCards = document.querySelectorAll('.price-card');
            priceCards.forEach(card => {
                card.addEventListener('mouseenter', function() {
                    this.style.zIndex = 10;
                });
                
                card.addEventListener('mouseleave', function() {
                    this.style.zIndex = 1;
                });
            });
        });