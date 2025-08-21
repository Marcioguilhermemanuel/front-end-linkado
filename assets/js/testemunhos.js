document.addEventListener('DOMContentLoaded', function() {
            // Elementos do slider
            const track = document.querySelector('.testimonials-track');
            const cards = document.querySelectorAll('.testimonial-card');
            const dots = document.querySelectorAll('.slider-dot');
            const prevButton = document.querySelector('.slider-nav.prev');
            const nextButton = document.querySelector('.slider-nav.next');
            
            let currentIndex = 0;
            const cardCount = cards.length;
            
            // Função para atualizar o slider
            function updateSlider() {
                // Move o track
                track.style.transform = `translateX(-${currentIndex * 100}%)`;
                
                // Atualiza os cards
                cards.forEach((card, index) => {
                    if (index === currentIndex) {
                        card.classList.add('active');
                    } else {
                        card.classList.remove('active');
                    }
                });
                
                // Atualiza os dots
                dots.forEach((dot, index) => {
                    if (index === currentIndex) {
                        dot.classList.add('active');
                    } else {
                        dot.classList.remove('active');
                    }
                });
            }
            
            // Navegação com botões
            prevButton.addEventListener('click', () => {
                currentIndex = (currentIndex > 0) ? currentIndex - 1 : cardCount - 1;
                updateSlider();
            });
            
            nextButton.addEventListener('click', () => {
                currentIndex = (currentIndex < cardCount - 1) ? currentIndex + 1 : 0;
                updateSlider();
            });
            
            // Navegação com dots
            dots.forEach((dot, index) => {
                dot.addEventListener('click', () => {
                    currentIndex = index;
                    updateSlider();
                });
            });
            
            // Navegação com teclado
            document.addEventListener('keydown', (e) => {
                if (e.key === 'ArrowLeft') {
                    currentIndex = (currentIndex > 0) ? currentIndex - 1 : cardCount - 1;
                    updateSlider();
                } else if (e.key === 'ArrowRight') {
                    currentIndex = (currentIndex < cardCount - 1) ? currentIndex + 1 : 0;
                    updateSlider();
                }
            });
            
            // Auto-rotacionar (opcional)
            let autoRotate = setInterval(() => {
                currentIndex = (currentIndex < cardCount - 1) ? currentIndex + 1 : 0;
                updateSlider();
            }, 6000);
            
            // Pausar auto-rotação ao interagir
            const sliderContainer = document.querySelector('.testimonials-container');
            sliderContainer.addEventListener('mouseenter', () => {
                clearInterval(autoRotate);
            });
            
            sliderContainer.addEventListener('mouseleave', () => {
                autoRotate = setInterval(() => {
                    currentIndex = (currentIndex < cardCount - 1) ? currentIndex + 1 : 0;
                    updateSlider();
                }, 6000);
            });
            
            // Inicializar acessibilidade
            dots.forEach(dot => {
                dot.setAttribute('tabindex', '0');
            });
            
            // Inicializar animações de entrada
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.animation = 'fadeIn 1s forwards';
                    }
                });
            }, observerOptions);
            
            observer.observe(document.querySelector('.testimonials-section'));
        });