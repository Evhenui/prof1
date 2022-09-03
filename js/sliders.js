export let sliders = function() {
  const cardProduct = document.querySelector('[data-card-product]'),
        mainPage = document.querySelector('[data-main]');

    if (cardProduct !== null) {

      const sliderCardProductFooter = new Swiper('.recommendation__slider', {
        direction: 'horizontal',
        slidesPerView: 4, 
        spaceBetween: 24, 
        pagination: {
          el: '.swiper-pagination',
        },
        navigation: {
          nextEl: '.recommendation__slider-button-next',
          prevEl: '.recommendation__slider-button-prev',
        },
        scrollbar: {
          el: '.swiper-scrollbar',
          draggable: true
        },
      });
      
      const sliderMain = new Swiper('.main-slider__container-navigation', {
        direction: 'horizontal',
        slidesPerView: 6, 
        navigation: { 
        nextEl: '.main-slider__button-next', 
        prevEl: '.main-slider__button-prev'
        },
        freeMode: true, 
        breakpoints: { 
        0: { 
            slidesPerView: 4.6, 
            direction: 'horizontal',
        },
        960: { 
            direction: 'vertical', 
        }
        }
      });
      const sliderMainNav = new Swiper('.main-slider__container-basic', {
        direction: 'horizontal',
        slidesPerView: 1,
        mousewheel: true,
        navigation: {
        nextEl: '.main-slider__button-next', 
        prevEl: '.main-slider__button-prev'
        },
        grabCursor: true,
        thumbs: { 
        swiper: sliderMain
        },
        breakpoints: {
        0: { 
            direction: 'horizontal',
        },
        768: { 
            direction: 'horizontal',
        }
        }
      }); 
    }

    if(mainPage !== null) {

      const sliderBestseller = new Swiper('.current-offers__slider-bestseller', {
        direction: 'horizontal',
        slidesPerView: 4, 
        spaceBetween: 32, 
        pagination: {
          el: '.swiper-pagination',
        },
        navigation: {
          nextEl: '.current-offers__slider-bestseller-button-next',
          prevEl: '.current-offers__slider-bestseller-button-prev',
        },
        scrollbar: {
          el: '.current-offers__bestseller-scrollbar',
          draggable: true
        },
        breakpoints: {
          0: { 
            slidesPerView: 1.1, 
          }, 
          400: { 
            slidesPerView: 1.3, 
          }, 
          520: { 
            slidesPerView: 1.5, 
          },
          600: { 
            slidesPerView: 2, 
          },
          820: { 
            slidesPerView: 2.5, 
          },
          1000: { 
            slidesPerView: 3, 
          },
          1300: { 
            slidesPerView: 4, 
          }
        }
      });

      const sliderNovelties = new Swiper('.current-offers__slider-novelties', {
        direction: 'horizontal',
        slidesPerView: 4, 
        spaceBetween: 32, 
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.current-offers__slider-novelties-button-next',
          prevEl: '.current-offers__slider-novelties-button-prev',
        },
        scrollbar: {
          el: '.current-offers__novelties-scrollbar',
          draggable: true
        },
      });

      const sliderStock = new Swiper('.current-offers__slider-stock', {
        direction: 'horizontal',
        slidesPerView: 4, 
        spaceBetween: 32, 
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.current-offers__slider-stock-button-next',
          prevEl: '.current-offers__slider-stock-button-prev',
        },
        scrollbar: {
          el: '.current-offers__stock-scrollbar',
          draggable: true
        },
      });
    }
 
}