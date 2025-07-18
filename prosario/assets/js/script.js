
document.addEventListener('DOMContentLoaded', function () {
    // Efeito de onda ao clicar nos botões
    const buttons = document.querySelectorAll('a');
    buttons.forEach(button => {
        button.addEventListener('click', function (e) {
            // Criar elemento de onda
            const wave = document.createElement('span');
            wave.className = 'wave';

            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            wave.style.cssText = `
                        position: absolute;
                        width: ${size}px;
                        height: ${size}px;
                        top: ${y}px;
                        left: ${x}px;
                        background: rgba(255,255,255,0.4);
                        border-radius: 50%;
                        transform: scale(0);
                        animation: wave 0.6s linear;
                    `;

            this.appendChild(wave);

            // Remover após animação
            setTimeout(() => wave.remove(), 600);
        });
    });

    // Adicionar estilo para animação de onda
    const style = document.createElement('style');
    style.textContent = `
                @keyframes wave {
                    to {
                        transform: scale(2);
                        opacity: 0;
                    }
                }
            `;
    document.head.appendChild(style);
});
