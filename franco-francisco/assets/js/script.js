document.addEventListener('DOMContentLoaded', () => {
    // Newsletter form submission
    const newsletterForm = document.getElementById('newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const emailInput = this.querySelector('input[type="email"]');
            const email = emailInput.value;
            
            if (!email) return;
            
            // Here you would typically send this to a backend
            // For demo, we'll just show a success message
            emailInput.value = '';
            
            // Create and show success message
            const successMsg = document.createElement('div');
            successMsg.className = 'mt-2 text-green-600 text-sm';
            successMsg.textContent = 'Obrigado por se inscrever na newsletter!';
            
            // Remove any existing success messages
            const existingMsg = newsletterForm.nextElementSibling;
            if (existingMsg && existingMsg.classList.contains('text-green-600')) {
                existingMsg.remove();
            }
            
            newsletterForm.after(successMsg);
            
            // Remove the message after 3 seconds
            setTimeout(() => {
                successMsg.remove();
            }, 3000);
        });
    }
    
    // Add page view analytics (demonstration)
    const pageVisit = () => {
        console.log('Page visited at:', new Date().toISOString());
        // In a real application, you would send this data to your analytics service
    };
    
    pageVisit();
    
    // Track link clicks
    const linkCards = document.querySelectorAll('.link-card');
    linkCards.forEach(card => {
        card.addEventListener('click', function(e) {
            const linkName = this.querySelector('h2').textContent;
            console.log(`Link clicked: ${linkName}`);
            // In a real application, you would track these events with your analytics service
        });
    });
    
    // Add subtle animations on scroll
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.link-card');
        
        elements.forEach((element, index) => {
            setTimeout(() => {
                element.classList.add('opacity-100');
                element.classList.remove('opacity-0', 'translate-y-4');
            }, 100 * index);
        });
    };
    
    // Initialize animations
    document.querySelectorAll('.link-card').forEach(card => {
        card.classList.add('opacity-0', 'translate-y-4', 'transition-all', 'duration-500');
    });
    
    // Run animation after a short delay to ensure DOM is ready
    setTimeout(animateOnScroll, 200);
});