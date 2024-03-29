export let cardProduct = function() {

  const cardProduct = document.querySelector('[data-card-product]'),
        allAbout = document.querySelector('[data-all-about-section]'),
        navigationSection = document.querySelector('[data-mobile-navigation]');

  function delActiv(param) {
      param.forEach((el) => {
        el.classList.remove('active');
      })
  }

  if(cardProduct !== null) {
      const navigationPageItems = cardProduct.querySelectorAll('[data-navigation-item]'),
            colorItems = cardProduct.querySelectorAll('[data-color-item]'),
            sizeItems = cardProduct.querySelectorAll('[data-size-item]'),
            buttonLike = cardProduct.querySelectorAll('[data-button-like]'),
            buttonCompare = cardProduct.querySelectorAll('[data-button-compare]'),
            accordionItems = cardProduct.querySelectorAll('[data-accordion-all-info]'),
            characteristicsSection = cardProduct.querySelector('[data-characteristics-section]'),
            reviwsSection = cardProduct.querySelector('[data-reviews-section]'),
            navigationPage = cardProduct.querySelector('[data-navigation-scroll-card-product]'),
            buttonBuy = cardProduct.querySelector('[data-button-buy-card-product]'),
            notificationBasket = cardProduct.querySelector('[data-notification-basket]'),
            sectionCardProduct = cardProduct.querySelectorAll('[data-section-card-product]'),
            mainInfo = cardProduct.querySelector('[data-main-info]');
          const carWrpEl = document.querySelector('.car-wrp');

          const navSecScr = cardProduct.querySelector('[data-sc]');

            buttonBuy.addEventListener('click', function() {
              this.classList.add('active');
              notificationBasket.classList.add('active');
            })
      //----------------navigation page----------------------------
      navigationPageItems.forEach((item, index) => {
          item.addEventListener("click", function () {
            delActiv(navigationPageItems);

            if(!index) {
              window.scrollTo({ top: 0,  behavior: "smooth" });
            }

            item.classList.add('active');
          });
      });

      window.addEventListener('scroll', function() {
        if(window.scrollY > 100) {
          mainInfo.classList.add('active');
          carWrpEl.classList.add('active');
        } else {
          mainInfo.classList.remove('active');
          carWrpEl.classList.remove('active');
        }
      })

      window.addEventListener('scroll', function() {
        let scrollDistansce = window.scrollY,
            sizeHeader = 68;
            sectionCardProduct.forEach((el, i) => {
          if(el.offsetTop - navigationPage.clientHeight - sizeHeader <= scrollDistansce) {
            navigationPageItems.forEach(el => {
              if(el.classList.contains('active')) {
                el.classList.remove('active');                
              }               
            })
            if(i !== 0) {
              navSecScr.scrollLeft = 150;
              if(i >= 2) {
                navSecScr.scrollLeft = 253;
              }
            } else {
              navSecScr.scrollLeft = 0;
            }
            navigationPageItems[i].classList.add('active')
          }
          
        })
       
      })
      //----------------size select-------------------------------
      sizeItems.forEach((item) => {
        item.addEventListener("click", function () {
          delActiv(sizeItems);
          item.classList.add('active');
        });
      });
      //----------------button effect-------------------------------
      buttonLike.forEach((item)=> {
        item.addEventListener('click', (event)=> {
          event.preventDefault();
          item.classList.toggle('active');
        })
      })
      
      buttonCompare.forEach((item)=> {
        item.addEventListener('click', (event)=> {
          event.preventDefault();
          item.classList.toggle('active');
        })
      })
      //---------------accordion------------------------------------
      accordionItems.forEach((item) => {
        item.addEventListener('click', function(event) {
         const self = event.currentTarget;
         const accordionContent = self.querySelector('[data-accordion-all-info-content]');
         this.classList.toggle('active');
         if(this.classList.contains('active')){
          accordionContent.style.height = accordionContent.scrollHeight + 'px';
         } else {
          accordionContent.style.height = 0 + 'px';
         }
      })
      })

      if(characteristicsSection !== null) {
        const button = characteristicsSection.querySelector('[data-button-show-characteristics]');
        const characteristicList = characteristicsSection.querySelectorAll('.characteristics__details');

        function showBtn() {
          if(characteristicList.length <= 8) {
            button.classList.add('hidden');
          } 
        }

        showBtn()

        button.addEventListener('click', function() {
          characteristicsSection.classList.toggle('active');
        })
      }

      if(reviwsSection !== null) {
        const button = reviwsSection.querySelector('[data-button-show-reviews]');
        button.addEventListener('click', function() {
          button.classList.toggle('active');
          reviwsSection.classList.toggle('active');
        })
      }
  }

  if(allAbout !== null) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 879) {
        allAbout.classList.add('active');
      } else {
        allAbout.classList.remove('active');
      }
    });
  }

  if(navigationSection !== null) {
    const buttonLike = navigationSection.querySelector('[data-button-like-mobile-footer]'),
          buttonCompare = navigationSection.querySelector('[data-button-compare-mobile-footer]');

    buttonLike.addEventListener('click', function(event) {
      event.preventDefault();
      this.classList.toggle('active');
    })
    buttonCompare.addEventListener('click', (event)=> {
      event.preventDefault();
    })
    if (window.scrollY < 500) {
      navigationSection.classList.add("active");
    }
    window.addEventListener('scroll', function() {
      
      if (window.scrollY < 500) {
        navigationSection.classList.add("active");
      } else if(window.scrollY > 1000)  {
        navigationSection.classList.add("active");
      }
      else {
        navigationSection.classList.remove("active");
      }
    })
  }
}