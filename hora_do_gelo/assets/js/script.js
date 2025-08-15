  // Atualiza o ano automaticamente
        document.getElementById("current-year").textContent = new Date().getFullYear();

        // Adiciona animação de entrada nos elementos
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('slide-in');
                }
            });
        }, observerOptions);

        // Observa todos os elementos que devem animar
        document.querySelectorAll('.slide-in').forEach(el => {
            observer.observe(el);
        });

        // Adiciona efeitos de clique
        document.querySelectorAll('a[href^="http"]').forEach(link => {
            link.addEventListener('click', function(e) {
                // Adiciona feedback visual no clique
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = '';
                }, 150);
            });
        });

        // Prevenção de spam em cliques
        let clickTimeout = false;
        document.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function(e) {
                if (clickTimeout) {
                    e.preventDefault();
                    return;
                }
                clickTimeout = true;
                setTimeout(() => {
                    clickTimeout = false;
                }, 1000);
            });
        });

        // Adiciona partículas dinamicamente
        function createParticle() {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.width = particle.style.height = (Math.random() * 3 + 1) + 'px';
            particle.style.animationDelay = Math.random() * 8 + 's';
            document.querySelector('.particles').appendChild(particle);

            // Remove partícula após animação
            setTimeout(() => {
                particle.remove();
            }, 8000);
        }

        // Cria partículas periodicamente
        setInterval(createParticle, 2000);