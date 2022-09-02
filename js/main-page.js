export let mainPage = function() {
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


        const   dropdownRegionSelectItems = document.querySelectorAll('[data-dropdown-region-item]'),
                dropdownRegionSelected = document.querySelector('[data-dropdown-region-selected]'),
                dropdownRegionLabel = document.querySelector('[data-dropdown-region-label]'),
                dropdownRegion = document.querySelector('[data-dropdown-region]'),
                dropdowns= document.querySelectorAll('[data-dropdown]');

                dropdownRegion.addEventListener('click', function() {
        if (this.classList.contains('active')) {
            this.classList.remove('active');
        }
        else {
            delActive(dropdowns);
            this.classList.add('active');
        }
        
        if(dropdownRegionSelected.innerText === '') {
            dropdownRegionLabel.classList.toggle('active');
        } 
        //close

        })
        changeLable(dropdownRegionSelectItems, dropdownRegionSelected)
}