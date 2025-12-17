


  
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
 document.addEventListener("DOMContentLoaded", () => {
            const tabs = document.querySelectorAll(".about-tab");
            const contents = document.querySelectorAll(".about-switch-list");

            tabs.forEach(tab => {
                tab.addEventListener("click", () => {
                    const target = tab.dataset.tab;

                    tabs.forEach(t => t.classList.remove("active"));
                    tab.classList.add("active");

                    contents.forEach(c => {
                        c.classList.toggle("is-active", c.dataset.content === target);
                    });
                });
            });
        });
        
                            let text = document.querySelector('.keywords').innerText;

                            let arr = text.split(',').map(el => el.trim()).filter(el => el.length > 0);

                            let container = document.querySelector('.smallPostBoxs');
                            container.innerHTML = ''; 

                            arr.forEach(el => {
                                let span = document.createElement('span');
                                span.textContent = el;
                                span.classList.add('keyword-item'); 
                                container.appendChild(span);
                            });
let swiperProjects = new Swiper(".home-projects22", {
      spaceBetween: 20,
      slidesPerView: 3,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
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