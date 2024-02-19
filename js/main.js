const infoBtns = document.querySelectorAll(".info-dot");
const infoHints = document.querySelectorAll(".info-hint");

for (const btn of infoBtns) {
  btn.addEventListener("click", function (e) {
    e.stopPropagation();
    for (const hint of infoHints) {
      hint.classList.add("none");
    }
    this.parentNode.querySelector(".info-hint").classList.toggle("none");
  });
}

document.addEventListener("click", function () {
  for (const hint of infoHints) {
    hint.classList.add("none");
  }
});

for (const hint of infoHints) {
  hint.addEventListener("click", (e) => {
    e.stopPropagation();
  });
}

const swiper = new Swiper(".swiper", {

  loop: true,
  freeMode: true,

  slidesPerView: 4,
  spaceBetween: 42,

  breakpoints: {
    320:{
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    920: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1360: {
      slidesPerView: 4,
      spaceBetween: 42,
    },
  },

  navigation: {
    nextEl: "#sliderNext",
    prevEl: "#sliderPrev",
  },
});

//tabs
const tabBtns = document.querySelectorAll('[data-tab]');
const tabsProducts = document.querySelectorAll('[data-tab-value]');

for (let btn of tabBtns) {
  btn.addEventListener('click', function(){

    for (let btn of tabBtns){
      btn.classList.remove('tab-controls-btn--active');
    }

    this.classList.add('tab-controls-btn--active');

    for (let product of tabsProducts) {
      if(product.dataset.tabValue == this.dataset.tab){
        product.classList.remove('none');
      } else {
        product.classList.add('none');
      }
    }

    //swiper update
    swiper.update();

  })
}

//mobile nav

const mobileNavOpenBtn = document.querySelector('#open-mobile-nav-btn');
const mobileNavCloseBtn = document.querySelector('#close-mobile-nav-btn');
const mobileNav = document.querySelector('#mobile-nav');

mobileNavOpenBtn.onclick = function (){
  mobileNav.classList.add('mobile-nav-wrapper--open')
}

mobileNavCloseBtn.onclick = function (){
  mobileNav.classList.remove('mobile-nav-wrapper--open')
}