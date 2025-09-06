document.addEventListener('DOMContentLoaded', () => {
            const popup = document.getElementById('exit-intent-popup');
            const popupContent = popup.querySelector('.relative');
            const closeButton = document.getElementById('close-popup');
            const declineButton = document.getElementById('decline-offer');
            
            let popupShown = sessionStorage.getItem('popupShown') === 'true';

            const showPopup = () => {
                if (popupShown) return;

                popup.classList.remove('opacity-0', 'pointer-events-none');
                popupContent.classList.add('animate-popup-in');
                document.body.style.overflow = 'hidden';
                popupShown = true;
                sessionStorage.setItem('popupShown', 'true');
            };

            const hidePopup = () => {
                popupContent.classList.remove('animate-popup-in');
                popupContent.classList.add('animate-popup-out');
                setTimeout(() => {
                    popup.classList.add('opacity-0', 'pointer-events-none');
                    popupContent.classList.remove('animate-popup-out');
                }, 300);
                document.body.style.overflow = 'auto';
            };

            // Lógica de Intenção de Saída (Desktop)
            document.addEventListener('mouseout', (e) => {
                // Se o mouse sair pelo topo da janela
                if (e.clientY <= 0) {
                    showPopup();
                }
            });
            
            // Lógica para Mobile (após 20 segundos)
            if (window.innerWidth < 768) {
                setTimeout(showPopup, 20000); // 20 segundos
            }

            // Eventos para fechar o pop-up
            closeButton.addEventListener('click', hidePopup);
            declineButton.addEventListener('click', hidePopup);
            popup.addEventListener('click', (e) => {
                if (e.target === popup) {
                    hidePopup();
                }
            });

            // Fechar com a tecla ESC
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && !popup.classList.contains('pointer-events-none')) {
                    hidePopup();
                }
            });
        });