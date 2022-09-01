export let slidersCardProduct = function() {
  const cardProduct = document.querySelector('[data-card-product]');
    if (cardProduct !== null) {
      const sliderCardProductFooter = new Swiper('.recommendation__slider', {

        direction: 'horizontal',
        loop: true,
      

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
    }
 
}