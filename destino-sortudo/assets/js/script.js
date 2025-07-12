 // Adicionando efeito de digitação dinâmica
        document.addEventListener('DOMContentLoaded', function() {
            const tagline = document.querySelector('.tagline');
            const texts = [
                "✈️ Vlogs sobre imigração e vida no exterior",
                "🌍 Custo de vida, oportunidades e curiosidades globais",
                "⚡ Descubra onde pode começar sua nova vida"
            ];
            let currentIndex = 0;
            
            function typeEffect(text, i = 0) {
                if (i < text.length) {
                    tagline.textContent = text.substring(0, i + 1);
                    setTimeout(() => typeEffect(text, i + 1), 100);
                } else {
                    setTimeout(changeText, 3000);
                }
            }
            
            function changeText() {
                currentIndex = (currentIndex + 1) % texts.length;
                typeEffect(texts[currentIndex]);
            }
            
            // Iniciar efeito
            tagline.textContent = "";
            setTimeout(() => typeEffect(texts[0]), 1000);
        });