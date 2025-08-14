// Atualiza o ano automaticamente
        document.getElementById("current-year").textContent = new Date().getFullYear();
        
        // Sistema de partículas
        const particlesContainer = document.getElementById('particles');
        const colors = ['rgba(0, 198, 255, 0.3)', 'rgba(0, 114, 255, 0.3)', 'rgba(100, 220, 255, 0.3)'];
        
        function createParticle() {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            
            // Tamanho aleatório
            const size = Math.random() * 10 + 2;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            
            // Posição aleatória
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.top = `${Math.random() * 100}%`;
            
            // Cor aleatória
            particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            
            // Animação
            const animation = particle.animate(
                [
                    { transform: 'translateY(0px)', opacity: 0 },
                    { transform: `translateY(${Math.random() * 100 - 50}px) translateX(${Math.random() * 100 - 50}px)`, opacity: 1 },
                    { transform: `translateY(${Math.random() * 200 - 100}px) translateX(${Math.random() * 200 - 100}px)`, opacity: 0 }
                ],
                {
                    duration: Math.random() * 5000 + 5000,
                    iterations: Infinity
                }
            );
            
            particlesContainer.appendChild(particle);
            
            // Remover após um tempo para evitar sobrecarga
            setTimeout(() => {
                particle.remove();
            }, 15000);
        }
        
        // Criar partículas inicialmente
        for (let i = 0; i < 20; i++) {
            createParticle();
        }
        
        // Continuar criando partículas
        setInterval(createParticle, 1000);
        
        // Efeito de hover nos botões
        document.querySelectorAll('.diz-btn').forEach(button => {
            button.addEventListener('mousemove', (e) => {
                const rect = button.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                button.style.setProperty('--x', `${x}px`);
                button.style.setProperty('--y', `${y}px`);
            });
        });
        
        // Animação de entrada dos elementos
        const animateOnScroll = () => {
            const elements = document.querySelectorAll('.diz-card, .stats-card');
            
            elements.forEach(el => {
                const rect = el.getBoundingClientRect();
                const isVisible = rect.top < window.innerHeight * 0.9;
                
                if (isVisible) {
                    el.style.opacity = '1';
                    el.style.transform = 'translateY(0)';
                }
            });
        };
        
        // Configurar animações iniciais
        document.querySelectorAll('.diz-card, .stats-card').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        });
        
        // Inicializar
        window.addEventListener('load', () => {
            setTimeout(animateOnScroll, 300);
        });
        
        window.addEventListener('scroll', animateOnScroll);