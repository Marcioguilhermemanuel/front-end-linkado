
        // Typing effect
        const phrases = [
            "Criando experiências visuais memoráveis",
            "Design que transforma negócios",
            "Produção audiovisual de excelência",
            "Elevando marcas através da criatividade"
        ];
        let currentPhrase = 0;
        let currentChar = 0;
        let isDeleting = false;
        const typingText = document.getElementById('typing-text');
        
        function typeWriter() {
            const fullTxt = phrases[currentPhrase];
            
            if (isDeleting) {
                typingText.textContent = fullTxt.substring(0, currentChar - 1);
                currentChar--;
            } else {
                typingText.textContent = fullTxt.substring(0, currentChar + 1);
                currentChar++;
            }
            
            if (!isDeleting && currentChar === fullTxt.length) {
                isDeleting = true;
                setTimeout(typeWriter, 2000);
            } else if (isDeleting && currentChar === 0) {
                isDeleting = false;
                currentPhrase = (currentPhrase + 1) % phrases.length;
                setTimeout(typeWriter, 500);
            } else {
                const speed = isDeleting ? 50 : 100;
                setTimeout(typeWriter, speed);
            }
        }
        
        // WhatsApp modal
        const whatsappBtn = document.getElementById('whatsapp-btn');
        const whatsappLink = document.getElementById('whatsapp-link');
        const ctaWhatsapp = document.getElementById('cta-whatsapp');
        const whatsappModal = document.getElementById('whatsapp-modal');
        const closeModal = document.getElementById('close-modal');
        
        [whatsappBtn, whatsappLink, ctaWhatsapp].forEach(el => {
            el.addEventListener('click', (e) => {
                e.preventDefault();
                whatsappModal.classList.remove('hidden');
                document.body.style.overflow = 'hidden';
            });
        });
        
        closeModal.addEventListener('click', () => {
            whatsappModal.classList.add('hidden');
            document.body.style.overflow = 'auto';
        });
        
        whatsappModal.addEventListener('click', (e) => {
            if (e.target === whatsappModal) {
                whatsappModal.classList.add('hidden');
                document.body.style.overflow = 'auto';
            }
        });
        
        // Initialize
        document.addEventListener('DOMContentLoaded', () => {
            setTimeout(typeWriter, 1000);
            
            // Add hover effect to service items
            const serviceItems = document.querySelectorAll('.grid.grid-cols-2 > div');
            serviceItems.forEach(item => {
                item.addEventListener('mouseenter', () => {
                    const icon = item.querySelector('i');
                    icon.classList.add('animate-pulse');
                });
                
                item.addEventListener('mouseleave', () => {
                    const icon = item.querySelector('i');
                    icon.classList.remove('animate-pulse');
                });
            });
        });
  