// Simple animation for audio player
document.addEventListener("DOMContentLoaded", function () {
  const playBtn = document.querySelector(".fa-play").parentElement;
  let isPlaying = false;

  playBtn.addEventListener("click", function () {
    const icon = this.querySelector("i");
    if (isPlaying) {
      icon.classList.remove("fa-pause");
      icon.classList.add("fa-play");
    } else {
      icon.classList.remove("fa-play");
      icon.classList.add("fa-pause");
    }
    isPlaying = !isPlaying;
  });

  // Add ripple effect to link cards
  const linkCards = document.querySelectorAll(".link-card");
  linkCards.forEach((card) => {
    card.addEventListener("click", function (e) {
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const ripple = document.createElement("span");
      ripple.className = "ripple-effect";
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;

      this.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 1000);
    });
  });
});
