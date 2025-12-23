document.addEventListener("DOMContentLoaded", () => {

  /* HERO SLIDER */
  if (document.querySelector(".js-hero-slider")) {
    new Swiper(".js-hero-slider", {
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      navigation: {
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next",
      },
    });
  }

  /* ABOUT TABS */
  const tabs = document.querySelectorAll(".about-tab");
  const contents = document.querySelectorAll(".about-switch-list");

  if (tabs.length && contents.length) {
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
  }

  /* KEYWORDS PARSE */
  const keywordsEl = document.querySelector(".keywords");
  const container = document.querySelector(".smallPostBoxs");

  if (keywordsEl && container) {
    const arr = keywordsEl.innerText
      .split(",")
      .map(el => el.trim())
      .filter(Boolean);

    container.innerHTML = "";

    arr.forEach(el => {
      const span = document.createElement("span");
      span.textContent = el;
      span.classList.add("keyword-item");
      container.appendChild(span);
    });
  }

  /* PROJECTS SWIPER */
  if (document.querySelector(".home-projects22")) {
    new Swiper(".home-projects22", {
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
  }

  /* YEAR */
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

});
