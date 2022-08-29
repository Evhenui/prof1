export let catalog = function() {
    const catalogSection = document.querySelector('[data-catalog-page]');

    if(catalogSection !== null) {
        const catalogItems = catalogSection.querySelectorAll('[data-catalog-item]'),
              submenuItems = catalogSection.querySelectorAll('[data-catalog-submenu]');

        function delActiv(param) {
            param.forEach((el) => {
              el.classList.remove('active');
            })
        } 

        catalogItems.forEach((item, index) => {
            item.addEventListener("click", function () {
              delActiv(catalogItems);
              delActiv(submenuItems);
              item.classList.add('active');
              submenuItems[index].classList.add('active');
            });
          });
    }

}