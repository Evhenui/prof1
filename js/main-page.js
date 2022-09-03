export let mainPage = function() {
    const mainPage = document.querySelector('[data-main]'),
          productSelection = mainPage.querySelector('[data-product-selection]'),
          currentOffersSection = mainPage.querySelector('[data-current-offers]');

    function changeLable (items, dropdown) {
        items.forEach((item)=> {
            item.addEventListener('click', ()=> {
                dropdown.innerText = item.innerText;
            })
        })
    }
    function delActive (params) {
        params.forEach((el) => {
            el.classList.remove('active');
            })
    } 
    function closeMenu (section, dropdown ,selected, label) {
        section.addEventListener('click', function(e) {
            const click = e.composedPath().includes(dropdown);
            if(!click) {
                dropdown.classList.remove('active');
                if(selected.innerText === '') {
                    label.classList.remove('active');
                }   
            }
        })
    }

    if(mainPage !== null) {

        const dropdownTypeOfTrade = mainPage.querySelector('[data-dropdown-type-of-trade]');
        
        if(dropdownTypeOfTrade !== null) {

            const  itemsSelect = document.querySelectorAll('[data-type-of-trade-item]'),
                   itemSelected = document.querySelector('[data-dropdown-selected]'),
                   itemLabel = document.querySelector('[data-dropdown-label]'),
                   dropdowns = document.querySelectorAll('[data-dropdown]');

        dropdownTypeOfTrade.addEventListener('click', function() {
            if (this.classList.contains('active')) {
                this.classList.remove('active');
            }
            else {
                delActive(dropdowns);
                this.classList.add('active');
            }
            if(itemSelected.innerText === '') {
                itemLabel.classList.toggle('active');
            } 
            closeMenu(mainPage, dropdownTypeOfTrade, itemSelected, itemLabel)
        })
        changeLable(itemsSelect, itemSelected)
        }



    }
    
    if(productSelection !== null) {
        const containers = productSelection.querySelectorAll('[data-checkbox-container]');
             
              containers.forEach(itemContainer => {
                itemContainer.addEventListener('click', function(event) {
                    delActive(containers);
                    const self = event.currentTarget;
                    const targetInput = self.querySelector('[data-checkbox-input]');
                    targetInput.checked = true;
                    itemContainer.classList.add('active');
                })
              })
    }

    if(currentOffersSection !== null) {
        const menuItems = currentOffersSection.querySelectorAll('[data-menu-item]'),
              menuList = currentOffersSection.querySelectorAll('[data-select-list]');

              menuItems.forEach((item, index) => {
                item.addEventListener("click", function (event) {
                  event.preventDefault();
                  delActive(menuItems);
                  delActive(menuList);
                  item.classList.add('active');
                  menuList[index].classList.add('active');
                });
              });
    }
}