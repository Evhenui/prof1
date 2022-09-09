export let filter = function() {
    const filterSection = document.querySelector('[data-filter]');
    
    if(filterSection !== null) {
        const filterSwitch = filterSection.querySelector('[data-filter-switch]'),
              dropdownFilter = filterSection.querySelector('[data-dropdown-filter]');


        filterSwitch.addEventListener('click', function() {
            this.classList.toggle('active');
        });

        dropdownFilter.addEventListener('click', function() {
            this.classList.toggle('active');
        })
    }
}