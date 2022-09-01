export let slidersCardProduct = function() {
  const cardProduct = document.querySelector('[data-card-product]');
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
        },
      });
      
      const sliderMain = new Swiper('.main-slider__container-navigation', {
        direction: 'horizontal',
        slidesPerView: 6, 
        spaceBetween: 16, 
        navigation: { 
        nextEl: '.main-slider__button-next', 
        prevEl: '.main-slider__button-prev'
        },
        freeMode: true, 
        breakpoints: { 
        0: { 
            slidesPerView: 4.6, 
            spaceBetween: 8, 
            direction: 'horizontal',
        },
        960: { 
            spaceBetween: 12, 
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
 
}