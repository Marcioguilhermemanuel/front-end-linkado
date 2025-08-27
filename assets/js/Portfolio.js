document.addEventListener('DOMContentLoaded', () => {
  const clientCarousel = new Swiper('.client-carousel', {
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    slidesPerView: 2,
    spaceBetween: 10, // gap reduzido
    grabCursor: true,
    breakpoints: {
      640:  { slidesPerView: 3, spaceBetween: 15 },
      768:  { slidesPerView: 4, spaceBetween: 20 },
      1024: { slidesPerView: 5, spaceBetween: 25 },
    },
  });
});