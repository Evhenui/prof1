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
              sizeItems = cardProduct.querySelectorAll('[data-size-item]');
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
    }
}