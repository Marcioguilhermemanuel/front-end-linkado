
// Animação de progresso ao carregar a página
document.addEventListener('DOMContentLoaded', function () {
    // Simular carregamento
    const progressBar = document.createElement('div');
    progressBar.className = 'progress-bar fixed top-0 left-0 w-full z-50';
    progressBar.innerHTML = '<div class="progress-value w-0"></div>';
    document.body.prepend(progressBar);

    let width = 0;
    const interval = setInterval(() => {
        width += 5;
        document.querySelector('.progress-value').style.width = width + '%';

        if (width >= 100) {
            clearInterval(interval);
            setTimeout(() => {
                progressBar.style.opacity = '0';
                setTimeout(() => progressBar.remove(), 300);
            }, 300);
        }
    }, 50);

    // Formulário de newsletter
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');

            if (emailInput.value.trim() === '') {
                emailInput.focus();
                return;
            }

            // Simular envio
            this.innerHTML = `
                        <div class="text-center py-4">
                            <i class="fas fa-check-circle text-4xl text-green-500 mb-3"></i>
                            <h3 class="font-semibold text-gray-800">Obrigado por subscrever!</h3>
                            <p class="text-sm text-gray-600 mt-1">Em breve receberá dicas valiosas sobre finanças pessoais.</p>
                        </div>
                    `;
        });
    }

    // Efeito de hover nos cards
    const cards = document.querySelectorAll('.card-hover');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const angleX = (y - centerY) / 20;
            const angleY = (centerX - x) / 20;

            card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) translateY(-5px)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });
    });
});
