// Simple audio player functionality
document.addEventListener('DOMContentLoaded', function () {
    const playButton = document.querySelector('.fa-play');
    const playerSection = document.querySelector('.bg-gradient-to-r');

    playButton.addEventListener('click', function () {
        const icon = this;
        if (icon.classList.contains('fa-play')) {
            icon.classList.remove('fa-play');
            icon.classList.add('fa-pause');
            playerSection.classList.add('pulse');
        } else {
            icon.classList.remove('fa-pause');
            icon.classList.add('fa-play');
            playerSection.classList.remove('pulse');
        }
    });

    // Add floating animation to logo on hover
    const logo = document.querySelector('.logo-container img');
    logo.addEventListener('mouseenter', function () {
        this.classList.add('animate-float');
    });

    logo.addEventListener('mouseleave', function () {
        this.classList.remove('animate-float');
    });
});
