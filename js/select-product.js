

function updateSelectProduct() {
    const dropdownSex = document.querySelector('[data-product-selection-dropdowns]');
    const productSelection = document.querySelector('[data-product-selection]');
    
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

updateSelectProduct()