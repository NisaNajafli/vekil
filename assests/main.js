const header = document.querySelector('.header');

window.addEventListener('scroll', function () {
    if (window.scrollY > 200) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});


  
document.addEventListener("DOMContentLoaded", () => {
  new Swiper(".js-hero-slider", {
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    navigation: {
      prevEl: ".swiper-button-prev",
      nextEl: ".swiper-button-next",
    }
  });
});

let swiperProjects = new Swiper(".home-projects22", {
      spaceBetween: 20,
      slidesPerView: 3,
      // autoplay: {
      //   delay: 2500,
      //   disableOnInteraction: false,
      // },
      breakpoints: {
      320: { slidesPerView: 1.3 },
      576: { slidesPerView: 2 },
      768: { slidesPerView: 3 },
    },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".home-projects22 .swiper-button-next",
        prevEl: ".home-projects22 .swiper-button-prev",
      },
    });
    document.getElementById("year").textContent = new Date().getFullYear()