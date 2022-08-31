export let cardProduct = function() {
    const cardProduct = document.querySelector('[data-card-product]');

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
              reviwsSection = cardProduct.querySelector('[data-reviews-section]');
        //----------------navigation page----------------------------
        navigationPageItems.forEach((item) => {
            item.addEventListener("click", function () {
              delActiv(navigationPageItems);
              item.classList.add('active');
            });
        });
        //----------------color select-------------------------------
        colorItems.forEach((item) => {
          item.addEventListener("click", function () {
            delActiv(colorItems);
            item.classList.add('active');
          });
        });
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
}