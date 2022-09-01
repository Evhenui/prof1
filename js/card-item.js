export let cardItem = function() {
    const cardItem = document.querySelector('[data-card-item-section]');

    function delActiv(param) {
        param.forEach((el) => {
          el.classList.remove('active');
        })
    }

    if(cardItem !== null) {
        const items = cardItem.querySelectorAll('[data-card-color-item]'),
              likeButton = cardItem.querySelector('[data-card-button-like]');

        items.forEach((item) => {
            item.addEventListener("click", function () {
              delActiv(items);
              item.classList.add('active');
            });
        });

        likeButton.addEventListener('click', function() {
            this.classList.toggle('active');
        })
    }
}