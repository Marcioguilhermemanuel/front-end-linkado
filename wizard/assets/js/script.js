
// Service cards expand functionality
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', function () {
        const content = this.querySelector('.expandable-content');
        const isExpanded = content.style.maxHeight && content.style.maxHeight !== '0px';

        // Close all other expanded cards
        document.querySelectorAll('.expandable-content').forEach(el => {
            if (el !== content) {
                el.style.maxHeight = '0px';
            }
        });

        // Toggle current card
        if (isExpanded) {
            content.style.maxHeight = '0px';
        } else {
            content.style.maxHeight = content.scrollHeight + 'px';
        }
    });
});

// Animation on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeInUp');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.card, .social-btn').forEach(el => {
    el.classList.add('opacity-0', 'translate-y-6');
    observer.observe(el);
});

// Add animation class
const style = document.createElement('style');
style.innerHTML = `
            @keyframes fadeInUp {
                from {
                    opacity: 0;
                    transform: translateY(20px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
            .animate-fadeInUp {
                animation: fadeInUp 0.6s ease-out forwards;
            }
        `;
document.head.appendChild(style);
