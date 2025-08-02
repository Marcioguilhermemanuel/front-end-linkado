// Atualiza o ano automaticamente
        document.getElementById("current-year").textContent = new Date().getFullYear();
        
        // Criar partículas flutuantes
        function createParticles() {
            const particlesContainer = document.getElementById('particles');
            const particleCount = 30;
            
            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.classList.add('particle');
                
                // Tamanho e posição aleatórios
                const size = Math.random() * 60 + 10;
                const posX = Math.random() * 100;
                const posY = Math.random() * 100;
                
                particle.style.width = `${size}px`;
                particle.style.height = `${size}px`;
                particle.style.left = `${posX}%`;
                particle.style.bottom = `-${size}px`;
                
                // Duração da animação aleatória
                const duration = Math.random() * 20 + 10;
                particle.style.animation = `float ${duration}s linear infinite`;
                particle.style.animationDelay = `${Math.random() * 5}s`;
                
                // Opacidade aleatória
                particle.style.opacity = Math.random() * 0.4 + 0.1;
                
                particlesContainer.appendChild(particle);
            }
        }
        
        // Efeitos interativos
        document.querySelectorAll('.glass-card').forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-8px)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
            });
        });
        
        // Iniciar partículas quando a página carregar
        window.addEventListener('load', createParticles);
        
        // Efeito de digitação para a bio
        const bioText = "Conteúdos inspiradores com propósito. Conecte-se comigo através das minhas redes sociais e vamos juntos nessa jornada!";
        let bioIndex = 0;
        const bioElement = document.querySelector('.bio-text');
        
        function typeBio() {
            if (bioIndex < bioText.length) {
                bioElement.innerHTML = bioText.substring(0, bioIndex + 1);
                bioIndex++;
                setTimeout(typeBio, 50);
            }
        }
        
        // Iniciar efeito de digitação
        setTimeout(typeBio, 1000);