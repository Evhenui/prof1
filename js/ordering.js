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


/*                     addActiveDropdown(dropdownCategory, selectedCategory, labelCategory)
                    changeLable(itemsCategory, selectedCategory)
    
                    addActiveDropdown(dropdownGrowth, selectedGrowth, labelGrowth)
                    changeLable(itemsGrowth, selectedGrowth)
    
                    addActiveDropdown(dropdownTestOne, selectedTestOne, labelTestOne)
                    changeLable(itemsTestOne, selectedTestOne) */



            const radioInputs = selectDelivery.querySelectorAll('[data-delivery-radio]');
            const currentSections = selectDelivery.querySelectorAll('[data-current-delivery]');

            radioInputs[0].classList.add('active');
            currentSections[0].classList.add('active');


            const selectRegionWrp = document.querySelector("[data-wrp-selected-region]");

            if(selectRegionWrp !== null) {
                const selectRegion = document.querySelector("[data-select-region]");
                const selectInput = document.querySelector("[data-select-input-region]");
                const selectCaption = document.querySelector("[data-caption-region]");
                const selectedItem = document.querySelectorAll("[data-option-list-region]");
                const listRegion = document.querySelector("[data-list-region]");

                let validRegion = false;
                let validCity = false;
                let validDepartmentNumber = false;
                
                selectInput.addEventListener("input", () => {
                    if(selectInput.value === "") {
                        validRegion = false
                    }
                })  
        
                selectRegion.addEventListener("click", () => {
                    selectRegion.classList.toggle("active")
                    listRegion.classList.toggle("active")
                    selectInput.focus()
                    if(!selectInput.value) {
                        selectCaption.classList.toggle("active")
                    }
                })
        
                ordering.addEventListener("click", (e) => {
                    const click = e.composedPath().includes(selectRegionWrp);
                    if(!click) {
                        selectRegion.classList.remove("active")
                        listRegion.classList.remove("active") 
                        selectInput.blur()
                        if(!selectInput.value) {
                            selectCaption.classList.remove("active")
                        }
                    }
                })
        
                selectedItem.forEach(el => {
                    el.addEventListener("click", () => {
                        selectInput.value = el.innerText;
                        validRegion = true;
        
                        selectRegion.classList.remove("active")
                        listRegion.classList.remove("active")
        
                        if(!selectInput.value) {
                            selectCaption.classList.remove("active")
                        }
    
                        validSelected = validCity && validRegion && validDepartmentNumber ? true : false;
                    })
                })
            }

            const selectCityWrp = document.querySelector("[data-wrp-selected-city]");

            if(selectCityWrp !== null) {
                const selectCity = ordering.querySelector("[data-select-city]");
                const selectInput = ordering.querySelector("[data-select-input-city]");
                const selectCaption = ordering.querySelector("[data-caption-city]");
                const selectedItem = ordering.querySelectorAll("[data-option-list-city]");
                const listCity = ordering.querySelector("[data-list-city]");
                
                selectInput.addEventListener("input", () => {
                    if(selectInput.value === "") {
                        validCity = false
                    }
    
                    validSelected = validCity && validRegion && validDepartmentNumber ? true : false;
                })  
        
                selectCity.addEventListener("click", () => {
                    selectCity.classList.toggle("active")
                    listCity.classList.toggle("active")
                    selectInput.focus()
                    if(!selectInput.value) {
                        selectCaption.classList.toggle("active")
                    }
                })
        
                ordering.addEventListener("click", (e) => {
                    const click = e.composedPath().includes(selectCityWrp);
                    if(!click) {
                        selectCity.classList.remove("active")
                        listCity.classList.remove("active") 
                        selectInput.blur()
                        if(!selectInput.value) {
                            selectCaption.classList.remove("active")
                        }
                    }
                })
        
                selectedItem.forEach(el => {
                    el.addEventListener("click", () => {
                        selectInput.value = el.innerText;
                        validCity = true;
    
                        selectCity.classList.remove("active")
                        listCity.classList.remove("active")
        
                        if(!selectInput.value) {
                            selectCaption.classList.remove("active")
                        }
                    })
                })
            }

            const selectDepartmentNumber = document.querySelector("[data-wrp-selected-department-number]");

            if(selectDepartmentNumber !== null) {
                const selectDepartmentNumber = ordering.querySelector("[data-select-department-number]");
                const selectInput = ordering.querySelector("[data-select-input-department-number]");
                const selectCaption = ordering.querySelector("[data-caption-department-number]");
                const selectedItem = ordering.querySelectorAll("[data-option-list-department-number]");
                const listDepartmentNumber = ordering.querySelector("[data-list-department-number]");
        
                selectDepartmentNumber.addEventListener("click", () => {
                    selectDepartmentNumber.classList.toggle("active")
                    listDepartmentNumber.classList.toggle("active")
    
                    selectInput.focus()
        
                    if(!selectInput.value) {
                        selectCaption.classList.toggle("active")
                    }
                })
    
                selectInput.addEventListener("input", () => {
                    if(selectInput.value === "") {
                        validDepartmentNumber = false
                    }
    
                    validSelected = validCity && validRegion && validDepartmentNumber ? true : false;
                })  
        
                ordering.addEventListener("click", (e) => {
                    const click = e.composedPath().includes(selectDepartmentNumber);
                    if(!click) {
                        selectDepartmentNumber.classList.remove("active")
                        listDepartmentNumber.classList.remove("active") 
                        selectInput.blur()
                        if(!selectInput.value) {
                            selectCaption.classList.remove("active")
                        }
                    }
                })
                
        
                selectedItem.forEach(el => {
                    el.addEventListener("click", () => {
                        selectInput.value = el.innerText;
                        validDepartmentNumber = true;
                        selectDepartmentNumber.classList.remove("active")
                        listDepartmentNumber.classList.remove("active")
        
                        if(!selectInput.value) {
                            selectCaption.classList.remove("active")
                        }
    
                        validSelected = validCity && validRegion && validDepartmentNumber ? true : false;
                    })
                })
            }

            const inputDelivery = document.querySelector("[data-home-delivery]");
            
            if(inputDelivery) {
                const input = document.querySelector("[data-input-delivery]");
                const label = document.querySelector("[data-caption-department-number]");

                inputDelivery.addEventListener("click", () => {
                    input.classList.toggle("active")
                    label.classList.toggle("active")
    
                    input.focus()
                })
            }

            const department = document.querySelector('[data-wrp-selected-department-number]');
            const delivery = document.querySelector('[data-home-delivery]');
            const ukrpost = document.querySelector('[data-home-ukrpost]');

            radioInputs.forEach((el, i) => {
                el.addEventListener('click', () => {
                    delActive (radioInputs)
                    el.classList.add('active');

                    department.classList.add('hidden');
                    delivery.classList.add('hidden');
                    ukrpost.classList.add('hidden');

                    if (i === 0) {
                        department.classList.remove('hidden');
                    }
                    
                    if (i === 1) {
                        delivery.classList.remove('hidden');
                    }
                    
                    if (i === 2) {
                        ukrpost.classList.remove('hidden');
                    }
                })
            })
        }

        if(orderingBasket !== null) {
            function res() {
                const buttonShowMore = orderingBasket.querySelector('[data-button-ordering-show-full-info]');
            
                if (window.innerWidth <= 960) {
                    const bodyAccordion = buttonShowMore.nextElementSibling;
                    buttonShowMore.classList.add("active");
                    bodyAccordion.style.height = bodyAccordion.scrollHeight + 'px';
                    bodyAccordion.classList.add('active');
            
                    buttonShowMore.addEventListener('click', function() {
                        this.classList.toggle("active");
                        const bodyAccordion = this.nextElementSibling;
            
                        if (this.classList.contains('active')) {
                            bodyAccordion.style.height = bodyAccordion.scrollHeight + 'px';
                            bodyAccordion.classList.add('active');
                        } else {
                            bodyAccordion.style.height = 0 + 'px';
                            bodyAccordion.classList.remove('active');
                        }
                    });
                }
            }
            
            res();
            
            window.addEventListener('resize', () => {
                res();
            });
        }

    }
}