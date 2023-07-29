export let mainPage = function() {
    const mainPage = document.querySelector('[data-main]'),
          productSelection = document.querySelector('[data-product-selection]'),
          currentOffersSection = document.querySelector('[data-current-offers]'),
          buttonScrollTop = document.querySelector('[data-botton-up]');

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
    
    function addActiveDropdown(dropdown, selected, label) {
        dropdown.addEventListener('click', function() {
            if (dropdown.classList.contains('active')) {
                dropdown.classList.remove('active');
            }
            else {
                dropdown.classList.add('active');
            }
            if(selected.innerText === '') {
                label.classList.toggle('active');
            } 
            closeMenu(mainPage, dropdown, selected, label)
        })

    }

    if(mainPage !== null) {

        const dropdownTypeOfTrade = mainPage.querySelector('[data-dropdown-type-of-trade]'),
              dropdownSex = mainPage.querySelector('[data-product-selection-dropdowns]'); 
        const contactsPage = document.querySelector('[data-about-company-page]');

        if(contactsPage !== null) {
            const dropdownTypeOfTrade = contactsPage.querySelector('[data-dropdown-type-of-trade]');
            const  itemsSelect = contactsPage.querySelectorAll('[data-type-of-trade-item]'),
            itemSelected = contactsPage.querySelector('[data-dropdown-selected]'),
            itemLabel = contactsPage.querySelector('[data-dropdown-label]'),
            dropdowns = contactsPage.querySelectorAll('[data-dropdown]');
            
            if(dropdownTypeOfTrade) {
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
            }
            

         changeLable(itemsSelect, itemSelected)
        }

        
        
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

        if(dropdownSex !== null) {
                
            const dropdownCategory = dropdownSex.querySelector('[data-dropdown-category]'),
                  labelCategory = dropdownSex.querySelector('[data-dropdown-category-label]'),
                  selectedCategory = dropdownSex.querySelector('[data-dropdown-category-selected]'),
                  itemsCategory = dropdownSex.querySelectorAll('[data-category-item]'),

                  dropdownGrowth = dropdownSex.querySelector('[data-dropdown-growth]'),
                  labelGrowth = dropdownSex.querySelector('[data-dropdown-growth-label]'),
                  selectedGrowth = dropdownSex.querySelector('[data-dropdown-growth-selected]'),
                  itemsGrowth = dropdownSex.querySelectorAll('[data-growth-item]'),

                  dropdownTestOne = dropdownSex.querySelector('[data-dropdown-test-one]'),
                  labelTestOne = dropdownSex.querySelector('[data-dropdown-test-one-label]'),
                  selectedTestOne = dropdownSex.querySelector('[data-dropdown-test-one-selected]'),
                  itemsTestOne = dropdownSex.querySelectorAll('[data-test-one-item]'),

                  dropdownTestTwo = dropdownSex.querySelector('[data-dropdown-test-two]'),
                  labelTestTwo = dropdownSex.querySelector('[data-dropdown-test-two-label]'),
                  selectedTestTwo = dropdownSex.querySelector('[data-dropdown-test-two-selected]'),
                  itemsTestTwo = dropdownSex.querySelectorAll('[data-test-two-item]');
                  

                
                addActiveDropdown(dropdownCategory, selectedCategory, labelCategory)
                changeLable(itemsCategory, selectedCategory)

                addActiveDropdown(dropdownGrowth, selectedGrowth, labelGrowth)
                changeLable(itemsGrowth, selectedGrowth)

                addActiveDropdown(dropdownTestOne, selectedTestOne, labelTestOne)
                changeLable(itemsTestOne, selectedTestOne)

                addActiveDropdown(dropdownTestTwo, selectedTestTwo, labelTestTwo)
                changeLable(itemsTestTwo, selectedTestTwo)
      
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

    //----btn up to top-----------------------

    if(buttonScrollTop !== null) {
        buttonScrollTop.addEventListener("click", function () {
            window.scrollTo(0, 0);
        });

        window.addEventListener("scroll", function () {
            if (window.scrollY > 300) {
                buttonScrollTop.classList.add("active");
            } else {
                buttonScrollTop.classList.remove("active");
            }
          });
    }  
}