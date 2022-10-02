export let filter = function() {
    const filterSection = document.querySelector('[data-filter]');
    
    if(filterSection !== null) {
        const filterSwitch = filterSection.querySelector('[data-filter-switch]'),
              dropdownFilter = filterSection.querySelector('[data-dropdown-filter]'),
              inputsCheckbox = filterSection.querySelectorAll('[data-checkbox-input]'),
              titleCheckBox = filterSection.querySelectorAll('[data-title-checkbox]'),
              filterPrice = filterSection.querySelector('[data-filter-price]'),
              filterRange = filterSection.querySelector('[data-filter-range-title]'),
              navigationBar = filterSection.querySelector('[data-left-navigation-bar]'),
              catalogIntems = filterSection.querySelector('[data-catalog-items]'),
              scrollBarr = filterSection.querySelector('[data-scroll-bar]'),
              emptySection = filterSection.querySelector('[data-empty-section]'),
              buttonsChangeView = filterSection.querySelectorAll('[data-button-list-view]'),
              productItems = filterSection.querySelectorAll('[data-product-item-change-view]'),
              leftNavigation = filterSection.querySelector('[data-left-navigation-bar]'),
              emptyLeftNavigation = filterSection.querySelector('[data-left-navigation-bar-empty]'),
              dropList = filterSection.querySelector('[data-droplist-filter]');

              function delActiv(param) {
                param.forEach((el) => {
                  el.classList.remove('active');
                })
              }

              function delPalit(param) {
                param.forEach((el) => {
                  el.classList.remove('palit');
                })
              }

            window.addEventListener("scroll", function () {
            if (window.scrollY > 121) {
                leftNavigation.classList.add('scroll');
                emptyLeftNavigation.classList.add('scroll');
                if(window.scrollY > catalogIntems.offsetHeight - 490) {
                    leftNavigation.classList.replace('scroll' ,'scroll-stop');
                    emptyLeftNavigation.classList.replace('scroll' ,'scroll-stop');
                } else {
                    leftNavigation.classList.remove('scroll-stop');
                    emptyLeftNavigation.classList.remove('scroll-stop');
                }
            }else {
                leftNavigation.classList.remove('scroll', 'scroll-stop');
                emptyLeftNavigation.classList.remove('scroll', 'scroll-stop');
            }
        });

        filterSwitch.addEventListener('click', function() {
            this.classList.toggle('active');
            navigationBar.classList.toggle('active');
            catalogIntems.classList.toggle('active');
            emptyLeftNavigation.classList.toggle('active');
        });

        dropdownFilter.addEventListener('click', function() {
            this.classList.toggle('active');
        });

        filterSection.addEventListener('click',(e)=>{
            const click = e.composedPath().includes(dropdownFilter);
            if(!click) {
                dropdownFilter.classList.remove('active');
            }
        });

        filterRange.addEventListener('click', function() {
            filterPrice.classList.toggle('active');
        });

        titleCheckBox.forEach((item) => {
            item.addEventListener('click', function() {
                this.classList.toggle('active');
          })
        });

        window.addEventListener("scroll", function () {
            if (window.scrollY > 121) {
                scrollBarr.classList.add('active');
                emptySection.classList.add('active');
            } else {
                scrollBarr.classList.remove('active');
                emptySection.classList.remove('active');
            }
        });

        buttonsChangeView.forEach((item) => {
            item.addEventListener('click', function() {
                delActiv(buttonsChangeView);
                item.classList.add('active');
                if(item.classList.contains('top-navigation__button-normal')) {
                    delPalit(productItems);
                }else {
                    productItems.forEach(item => {
                        item.classList.add('palit');
                    })
                }
            })
        });

        function getPositionDropdown() {
            const sizeSpace = 1;
            window.getComputedStyle(dropList).getPropertyValue('--top');
            dropList.style.setProperty('top', dropdownFilter.offsetHeight + sizeSpace + 'px');
        }

        window.getComputedStyle(navigationBar).getPropertyValue('--height-page');
        navigationBar.style.setProperty('--height-page', (document.documentElement.clientHeight - navigationBar.getBoundingClientRect().top) + 'px');

        getPositionDropdown();
        window.addEventListener('resize', function() {
            getPositionDropdown();
        })
    }
}