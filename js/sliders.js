export let sliders = function() {
  const cardProduct = document.querySelector('[data-card-product]'),
        mainPage = document.querySelector('[data-main]'),
        titleSlider = document.querySelector('[data-title-slider]');
        function delActiv(param) {
          param.forEach((el) => {
            el.classList.remove('active');
          })
        } 
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
            slidesPerView: 4, 
            direction: 'horizontal',
        },
        960: { 
            slidesPerView: 4,
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
        const currentOffers = mainPage.querySelector('[data-current-offers]'),
              newsSection = mainPage.querySelector('[data-news-section]');
        if(currentOffers !== null) {
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

        if(newsSection !== null) {
          const sliderNews = new Swiper('.news__slider', {
            direction: 'horizontal',
            slidesPerView: 3, 
            spaceBetween: 32, 
            watchOverflow: true,
            breakpoints: {
              1150: { 
                slidesPerView: 3,
              }, 
              960: { 
                slidesPerView: 2.2,
              }, 
              860: { 
                slidesPerView: 2,
              }, 
              640: { 
                slidesPerView: 1.8,
              },
              0: { 
                slidesPerView: 1.15,
              },
            }
          });
        }
       
    }

    if(titleSlider !== null) {
      const sliderWrapper = titleSlider.querySelector('[data-title-slides]'),
            buttonNext = titleSlider.querySelector('[data-title-slider-next]'),
            buttonPrev = titleSlider.querySelector('[data-title-slider-prev]'),
            slides = titleSlider.querySelectorAll('[data-title-slide]'),
            points = titleSlider.querySelectorAll('[data-point-title-slider]');

            
            
           


            let count = 0,
            i = 0,
                sizeSlide = sliderWrapper.offsetWidth,
                maxSize = (slides.length - 1) * sizeSlide;
                points[i].classList.add('active')
                if(count === 0) {
                  buttonPrev.disabled = true;
                }
        
            buttonNext.addEventListener('click', function() {
              i++;
              buttonPrev.disabled = false;
              if(count !== -maxSize) {
                count -= sizeSlide;
                sliderWrapper.style.transform = "translateX(" + count + 'px)';
              } else {
                this.disabled = true;
              }
              delActiv(points)
              points[i].classList.add('active')
            })

            buttonPrev.addEventListener('click', function() {
              i--;
              buttonNext.disabled = false;
              if(count !== 0) {
                count += sizeSlide;
                sliderWrapper.style.transform = "translateX(" + count + 'px)';
              } else {
                this.disabled = true;
              }
              delActiv(points)
              points[i].classList.add('active')
            })
    }
}