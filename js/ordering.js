export let ordering = function() {
    const ordering = document.querySelector('[data-ordering]');

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
            closeMenu(ordering, dropdown, selected, label)
        })

    }

    if(ordering !== null) {
        const selectDelivery = ordering.querySelector('[data-dropdown-select-delivery]'),
              orderingTabSection = ordering.querySelector('[data-ordering-section]'),
              orderingBasket = ordering.querySelector('[data-ordering-basket]');

        if(selectDelivery !== null) {
            const   dropdownCategory = selectDelivery.querySelector('[data-dropdown-city]'),
                    labelCategory = selectDelivery.querySelector('[data-dropdown-city-label]'),
                    selectedCategory = selectDelivery.querySelector('[data-dropdown-city-selected]'),
                    itemsCategory = selectDelivery.querySelectorAll('[data-city-item]'),

                    dropdownGrowth = selectDelivery.querySelector('[data-dropdown-region]'),
                    labelGrowth = selectDelivery.querySelector('[data-dropdown-region-label]'),
                    selectedGrowth = selectDelivery.querySelector('[data-dropdown-region-selected]'),
                    itemsGrowth = selectDelivery.querySelectorAll('[data-region-item]'),

                    dropdownTestOne = selectDelivery.querySelector('[data-dropdown-number-post]'),
                    labelTestOne = selectDelivery.querySelector('[data-dropdown-number-post-label]'),
                    selectedTestOne = selectDelivery.querySelector('[data-dropdown-number-post-selected]'),
                    itemsTestOne = selectDelivery.querySelectorAll('[data-number-post-item]');


                    addActiveDropdown(dropdownCategory, selectedCategory, labelCategory)
                    changeLable(itemsCategory, selectedCategory)
    
                    addActiveDropdown(dropdownGrowth, selectedGrowth, labelGrowth)
                    changeLable(itemsGrowth, selectedGrowth)
    
                    addActiveDropdown(dropdownTestOne, selectedTestOne, labelTestOne)
                    changeLable(itemsTestOne, selectedTestOne)
    
        }

        if(orderingTabSection !== null) {
            const menuItems = orderingTabSection.querySelectorAll('[data-ordering-tab]'),
                  tabItems = orderingTabSection.querySelectorAll('[data-ordering-tab-section]'),

                  forgetPass = orderingTabSection.querySelector('[data-ordering-tab-link]'),
                  forgetPassSection = orderingTabSection.querySelector('[data-ordering-tab-forget-pass]'),
                  containerEnter = orderingTabSection.querySelector('[data-ordering-login-wrapper]');

            menuItems.forEach(function(item) {
                item.addEventListener("click", function () {
                    const tabId = item.getAttribute("data-ordering-tab-item"),
                        currentTub = orderingTabSection.querySelector(tabId);
                    if (!item.classList.contains("active")) {
                    menuItems.forEach(function (item) {
                        item.classList.remove("active");
                    });
                    tabItems.forEach(function (item) {
                        item.classList.remove("active");
                    });
                    item.classList.add("active");
                    currentTub.classList.add("active");
                    }
                })
            });

            forgetPass.addEventListener('click', function(event) {
                event.preventDefault()
                const tabId = forgetPass.getAttribute("data-ordering-tab-item"),
                currentTub = orderingTabSection.querySelector(tabId);
                containerEnter.classList.add("active");
                currentTub.classList.add("active");
            })
        }

        if(orderingBasket !== null) {
           const buttonShowMore = orderingBasket.querySelector('[data-button-ordering-show-full-info]');

           
                    buttonShowMore.addEventListener('click', function() {
                        const bodyAccordion = this.nextElementSibling;
                        this.classList.toggle("active");
                        
                        if(this.classList.contains('active')){
                            bodyAccordion.style.height = bodyAccordion.scrollHeight + 'px';
                            bodyAccordion.classList.add('active')
                            } else {
                            bodyAccordion.style.height = 0 + 'px';
                            bodyAccordion.classList.remove('active')
                            }      
            })        
        }

    }
}