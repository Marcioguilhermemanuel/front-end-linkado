
// Simple animation for page load
document.addEventListener('DOMContentLoaded', function () {
    const elements = document.querySelectorAll('.profile-bg, .link-card, footer');
    elements.forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }, 200 * index);
    });

    // Initial styles for animations
    document.querySelector('.profile-bg').style.opacity = "0";
    document.querySelector('.profile-bg').style.transform = "translateY(20px)";

    document.querySelectorAll('.link-card').forEach(card => {
        card.style.opacity = "0";
        card.style.transform = "translateY(20px)";
    });

    document.querySelector('footer').style.opacity = "0";
    document.querySelector('footer').style.transform = "translateY(20px)";
});
