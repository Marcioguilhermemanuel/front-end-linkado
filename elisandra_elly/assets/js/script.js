 // Atualiza o ano automaticamente
        document.getElementById("current-year").textContent = new Date().getFullYear();
        
        // Efeito de digitação para o título
        document.addEventListener('DOMContentLoaded', function() {
            const title = document.querySelector('.header-title');
            const originalText = title.textContent;
            title.textContent = '';
            
            let i = 0;
            const typingEffect = setInterval(() => {
                if (i < originalText.length) {
                    title.textContent += originalText.charAt(i);
                    i++;
                } else {
                    clearInterval(typingEffect);
                }
            }, 100);
            
            // Efeito de confete ao clicar nos botões principais
            const mainButtons = document.querySelectorAll('.whatsapp-btn, .campaign-btn, .tiktok-btn');
            mainButtons.forEach(button => {
                button.addEventListener('click', function(e) {
                    if (!e.target.href) return;
                    
                    // Efeito visual
                    this.style.transform = 'scale(0.97)';
                    setTimeout(() => {
                        this.style.transform = '';
                    }, 300);
                    
                    // Criar efeito de partículas
                    for (let i = 0; i < 20; i++) {
                        const particle = document.createElement('div');
                        particle.style.position = 'absolute';
                        particle.style.width = '8px';
                        particle.style.height = '8px';
                        particle.style.borderRadius = '50%';
                        particle.style.backgroundColor = getComputedStyle(this).backgroundImage.includes('whatsapp') ? '#25D366' : 
                                                      this.classList.contains('campaign-btn') ? '#8C52FF' : '#000000';
                        particle.style.zIndex = '1000';
                        particle.style.pointerEvents = 'none';
                        
                        const rect = this.getBoundingClientRect();
                        particle.style.left = `${rect.left + rect.width/2}px`;
                        particle.style.top = `${rect.top + rect.height/2}px`;
                        
                        document.body.appendChild(particle);
                        
                        const angle = Math.random() * Math.PI * 2;
                        const distance = 50 + Math.random() * 100;
                        const duration = 800 + Math.random() * 400;
                        
                        particle.animate([
                            { transform: 'translate(0, 0)', opacity: 1 },
                            { transform: `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px)`, opacity: 0 }
                        ], {
                            duration: duration,
                            easing: 'ease-out'
                        }).onfinish = () => {
                            particle.remove();
                        };
                    }
                });
            });
        });