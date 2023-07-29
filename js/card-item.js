export let cardItem = function() {
    const cardItem = document.querySelector('[data-card-item-section]');

    function delActiv(param) {
        param.forEach((el) => {
          el.classList.remove('active');
        })
    }

    if(cardItem !== null) {
        const items = cardItem.querySelectorAll('[data-card-color-item]'),
              likeButton = document.querySelectorAll('[data-card-button-like]');

        const cards = document.querySelectorAll('[data-card-item-section]');

        function checkLengthCards() {
            if(cards.length <= 3) {
                cards.forEach( el => {
                    el.classList.add('normal-size')
                })
            }
        }
        
        checkLengthCards()

        items.forEach((item) => {
            item.addEventListener("click", function () {
              delActiv(items);
              item.classList.add('active');
            });
        });

        likeButton.forEach(item=> {
            item.addEventListener('click', function(event) {
                event.preventDefault();
                this.classList.toggle('active');
            })
        })
    }
}