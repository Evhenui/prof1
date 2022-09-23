export let personalArea = function() { 
    const personalArea = document.querySelector('[data-personal-arae]'),
          navigationBar = personalArea.querySelector('[data-navigation-bar]'),
          emptyNav = personalArea.querySelector('[data-navigation-bar-empty]');

    function delActiv(param) {
        param.forEach((el) => {
          el.classList.remove('active');
        })
    } 
    function changeLable (items, dropdown) {
        items.forEach((item)=> {
            item.addEventListener('click', ()=> {
                dropdown.innerText = item.innerText;
            })
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

    if(personalArea !== null) {
        const favorites = personalArea.querySelector('[data-favorites]'),
              privateData = personalArea.querySelector('[data-private-data]'),
              myOrders = personalArea.querySelector('[data-my-orders]'),
              comparison = personalArea.querySelector('[data-comparison]');
      
        if(navigationBar !== null) {
            const tabs = navigationBar.querySelectorAll('[data-tab-item]'),
                  sections = personalArea.querySelectorAll('[data-section-personal-area]');
                  
            
            tabs.forEach(item => {
                item.addEventListener('click', function() {
                    let currentBtn = item;
                    let tabId = currentBtn.getAttribute("data-tab");
                    let currentTub = document.querySelector(tabId);
                    delActiv(tabs)
                    delActiv(sections)
                    currentBtn.classList.add("active");
                    currentTub.classList.add("active");                      
                    });
            });

            window.addEventListener("scroll", function () {
                if (window.scrollY > 56) {
                    navigationBar.classList.add('active');
                    emptyNav.classList.add('active');
                } else {
                    navigationBar.classList.remove('active');
                    emptyNav.classList.remove('active');
                }
            });
        }

        if(favorites !== null) {
            
            const   itemsSelect = favorites.querySelectorAll('[data-favorites-item]'),
                    itemSelected = favorites.querySelector('[data-dropdown-favorites-selected]'),
                    itemLabel = favorites.querySelector('[data-dropdown-favorites-label]'),
                    dropdown = favorites.querySelector('[data-dropdown-favorites]');
            
                    dropdown.addEventListener('click', function() {
             if (this.classList.contains('active')) {
                 this.classList.remove('active');
             }
             else {
                 this.classList.add('active');
             }
             if(itemSelected.innerText === '') {
                 itemLabel.classList.toggle('active');
             } 
             closeMenu(personalArea, dropdown, itemSelected, itemLabel)
         })
         changeLable(itemsSelect, itemSelected)
        }

        if(privateData !== null) {
            const containerPasswordInput = personalArea.querySelectorAll('[data-input-password-private-data-container]');

            containerPasswordInput.forEach(item => {
              item.addEventListener('input', function(event) {
                  const self = event.currentTarget;
                  const targetInput = self.querySelector('[data-input-password-private-data]');
                  const targetImg = self.querySelector('[data-show-password-private-data]');
                  if(targetInput.value !== '') {
                    targetImg.classList.add('active');
                  } else {
                    targetImg.classList.remove('active');
                  }
                })
            });
        
        }

        if(myOrders !== null) {
            const headerAccordion = myOrders.querySelectorAll('[data-order-item-short-content]');

            headerAccordion.forEach((item)=> {
                item.addEventListener('click', function() {
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
            })
          
        }

        if(comparison !== null) {
            const   itemsSelect = comparison.querySelectorAll('[data-dropdown-category-item]'),
                    itemSelected = comparison.querySelector('[data-dropdown-category-selected]'),
                    dropdown = comparison.querySelector('[data-dropdown-category]'),
                    buttonsMore = comparison.querySelectorAll('[data-wrapper-comparison-more]');
                   
                    window.addEventListener("scroll", function () {
                        if (comparison.classList.contains('active')) {
                            navigationBar.classList.remove('active');
                            emptyNav.classList.remove('active');
                        }
                    });
            
                    dropdown.addEventListener('click', function() {
                    if (this.classList.contains('active')) {
                        this.classList.remove('active');
                    }
                    else {
                        this.classList.add('active');
                    }
                    if(itemSelected.innerText === '') {
                        itemLabel.classList.toggle('active');
                    } 
                    closeMenu(personalArea, dropdown, itemSelected, false)
                    });
                    changeLable(itemsSelect, itemSelected);

                    //------------------button more---------------------
                    buttonsMore.forEach(function(item) {
                        const buttonMore = comparison.querySelectorAll('[data-button-comparison-more]'),
                              wrapperMoreSection = comparison.querySelectorAll('[data-wrapper-comparison-more]');
                        item.addEventListener('click', function(event) {
                          const self = event.currentTarget,
                                productMenu = self.querySelector('[data-buuton-more-list]'),
                                activeProductButton = self.querySelector('[data-button-comparison-more]');
                                personalArea.addEventListener('click',(e)=>{
                            const click = e.composedPath().includes(item);
                            if(!click) {
                                productMenu.classList.remove('active');
                                activeProductButton.classList.remove('active');
                            }
                          })
                          if(!activeProductButton.classList.contains('active')) {
                            delActiv(buttonMore);
                            delActiv(wrapperMoreSection);
                            productMenu.classList.add('active');
                            activeProductButton.classList.add('active');
                          }     
                        })
                    });

                    const btnNext = comparison.querySelector('[data-button-next-comparison]'),
                          btnPrev = comparison.querySelector('[data-button-prev-comparison]'),
                          sliderHeader = comparison.querySelector('[data-comparison-slider-header]'),
                          slideBody = comparison.querySelectorAll('[data-slide-comparison]'),
                          slideItems = comparison.querySelectorAll('[data-slide-header-item-comparison]');
                    let cur = 0,
                        space = (slideItems.length),
                        sizeSlide = 336,
                        maxSlide = 5; 
                        function addSlide() {
                            cur += 1;
                            window.getComputedStyle(sliderHeader).getPropertyValue('--transform');
                            sliderHeader.style.setProperty('--transform', (-cur * sizeSlide) + 'px'); 
                            slideBody.forEach(item=> {
                                window.getComputedStyle(item).getPropertyValue('--transform');
                                item.style.setProperty('--transform', (-cur * sizeSlide) + 'px');
                            })
                        }                 
                    btnNext.addEventListener('click', () => {  
                        if(window.innerWidth > 1440 ) {
                            if(cur <= (space - maxSlide)) {
                                addSlide();
                            }  
                        }  else if(window.innerWidth > 1110) {
                            if(cur <= (space - 4)) {
                                addSlide();
                            }
                        }  else if(window.innerWidth > 800) {
                            if(cur <= (space - 3)) {
                                addSlide();
                            }
                        }                                                                                          
                    });

                    btnPrev.addEventListener('click', () => {
                        if(cur !== 0) {
                            cur -= 1;                     
                            window.getComputedStyle(sliderHeader).getPropertyValue('--transform');
                            sliderHeader.style.setProperty('--transform', (-cur * sizeSlide) + 'px');
                            slideBody.forEach(item => {
                                window.getComputedStyle(item).getPropertyValue('--transform');
                                item.style.setProperty('--transform', (-cur * sizeSlide) + 'px');
                            })
                        }                      
                    });

        }
    }
}