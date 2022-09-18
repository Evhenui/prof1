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
        const selectDelivery = ordering.querySelector('[data-dropdown-select-delivery]');

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

    }
}