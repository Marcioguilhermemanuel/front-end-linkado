// Animação das mensagens do chat
document.addEventListener('DOMContentLoaded', function () {
  const messages = document.querySelectorAll('.message');

  messages.forEach((message, index) => {
    setTimeout(() => {
      message.style.animation = `fadeIn 0.3s ease-out ${index * 0.3}s forwards`;
    }, index * 500);
  });
});
