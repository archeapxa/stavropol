var mySwiper = new Swiper ('.swiper-container', {
  // Optional parameters
  loop: true,
  slidesPerView: 1,
  spaceBetween: 90,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    // when window width is >= 320px
    320: {
      spaceBetween: 20,
      slidesPerView: 1
    },
    // when window width is >= 480px
    768: {
      spaceBetween: 50,
      slidesPerView: 2,
    },
    // when window width is >= 640px
    992: {
      slidesPerView: 2,
      spaceBetween: 90
    }
  }
})