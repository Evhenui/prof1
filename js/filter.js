export let filter = function() {
    const filterSection = document.querySelector('[data-filter]');
    
    if(filterSection !== null) {
        const filterSwitch = filterSection.querySelector('[data-filter-switch]'),
              dropdownFilter = filterSection.querySelector('[data-dropdown-filter]'),
              inputsCheckbox = filterSection.querySelectorAll('[data-checkbox-input]'),
              titleCheckBox = filterSection.querySelectorAll('[data-title-checkbox]'),
              filterPrice = filterSection.querySelector('[data-filter-price]'),
              filterRange = filterSection.querySelector('[data-filter-range-title]');


        filterSwitch.addEventListener('click', function() {
            this.classList.toggle('active');
        });

        dropdownFilter.addEventListener('click', function() {
            this.classList.toggle('active');
        });

        filterRange.addEventListener('click', function() {
            filterPrice.classList.toggle('active');
        })


        titleCheckBox.forEach((item) => {
            item.addEventListener('click', function() {
                this.classList.toggle('active');
          })
          })
    }
}