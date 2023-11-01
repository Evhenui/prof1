export let personalArea = function() { 
    const personalArea = document.querySelector('[data-personal-arae]'),
          navigationBar = document.querySelector('[data-navigation-bar]'),
          emptyNav = document.querySelector('[data-navigation-bar-empty]');

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
              comparison = personalArea.querySelector('[data-comparison]'),
              itemsSliderComparison = personalArea.querySelectorAll('[data-slide-header-item-comparison]'),
              sliderBody = personalArea.querySelector('[data-slider-body]');
        let sizeSlider = 0;
      
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
                    //add size slider
                    if(comparison.classList.contains('active')) {
                        const itemEl = personalArea.querySelector('[data-slide-header-item-comparison]');
                        sizeSlider = itemEl.offsetWidth * itemsSliderComparison.length;
                        window.getComputedStyle(sliderBody).getPropertyValue('--width');
                        sliderBody.style.setProperty('--width', (sizeSlider) + 'px');
                    }
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
                    dropdown = favorites.querySelector('[data-dropdown-favorites]'),

                    itemsSelectMobile = favorites.querySelectorAll('[data-favorites-item-mobile]'),
                    itemSelectedMobile = favorites.querySelector('[data-dropdown-favorites-selected-mobile]'),
                    dropdownMobile = favorites.querySelector('[data-dropdown-favorites-mobile]'),
                    mobileBlur = document.querySelector('[data-blur]'),
                    dropMenuMobile = favorites.querySelector('[data-mobile-dropdown-list]'),
                    btnCloseDropMobile = document.querySelector('[data-button-close-dropdown-mobile]'),
                    body = document.querySelector("#body-cont");
                    
                    function changeLableMobile (items, dropdown, section, bg) {
                        items.forEach((item)=> {
                            item.addEventListener('click', ()=> {
                                dropdown.innerText = item.innerText;
                                section.classList.remove('active')
                                bg.classList.remove('active'); 
                            })
                        })
                    }

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
                    changeLable(itemsSelect, itemSelected);

                    dropdownMobile.addEventListener('click', function() {
                            dropMenuMobile.classList.add('active');
                            mobileBlur.classList.add('active'); 
                            body.style.overflow = 'hidden';
                            body.style.maxHeight = '100vh';
                    });

                    btnCloseDropMobile.addEventListener('click', function() {
                        dropMenuMobile.classList.remove('active')
                        mobileBlur.classList.remove('active'); 
                        body.style.overflow = 'auto';
                        body.style.maxHeight = 'none';
                    });

                    mobileBlur.addEventListener('click', function() {
                        dropMenuMobile.classList.remove('active');
                        this.classList.remove('active'); 
                        body.style.overflow = 'auto';
                        body.style.maxHeight = 'none';
                    })
                   
                    changeLableMobile(itemsSelectMobile, itemSelectedMobile, dropMenuMobile, mobileBlur);
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
                          slideItems = comparison.querySelectorAll('[data-slide-header-item-comparison]'),
                          sliderWindow = comparison.querySelector('.comparison__slider'),
                          sliderWidth = comparison.querySelector('.comparison-slider__header-wrp'),
                          slidesLength = comparison.querySelectorAll('[data-slide-header-item-comparison]');
 
                    let distance = 0;
                    let translateX = 0;
                    let counter = 0;
            
                    let mobileTranslateX = 0;
                    let difference = 0;
                    let activeTouches = 0;
                    let startPosition = 0;

                    function viewButtons() {
                        if(sliderWindow.offsetWidth < sliderWidth.scrollWidth) {
                            btnPrev.classList.remove('hidden')
                            btnNext.classList.remove('hidden')
                        } else {
                            btnPrev.classList.add('hidden')
                            btnNext.classList.add('hidden')
                        }
                    }

                    function nextSlide() {
                        const maxStep = Math.round(sliderWidth.children.length - sliderWindow.offsetWidth / slidesLength[0].offsetWidth);
                        distance = sliderWidth.scrollWidth - sliderWindow.offsetWidth - (translateX + slidesLength[0].offsetWidth);

                        if (distance >= 0 && counter < maxStep - 1) {
                            counter++;
                            translateX = (slidesLength[0].offsetWidth) * counter;
                        } else {
                            translateX = sliderWidth.scrollWidth - sliderWindow.offsetWidth;
                            counter = maxStep;
                        }

                        window.getComputedStyle(sliderHeader).getPropertyValue('--transform');
                        sliderHeader.style.setProperty('--transform', - translateX + 'px'); 

                        slideBody.forEach(item=> {
                            window.getComputedStyle(item).getPropertyValue('--transform');
                            item.style.setProperty('--transform', - translateX + 'px');
                        })
                        
                    }

                    function prevSlide() {
                        const startingPosition = 0;
                        const maxStep = Math.round(sliderWidth.children.length - sliderWindow.offsetWidth / slidesLength[0].offsetWidth);
                        distance = sliderWidth.scrollWidth - sliderWindow.offsetWidth - (translateX - slidesLength[0].offsetWidth);

                        if (distance <= sliderWidth.scrollWidth - sliderWindow.offsetWidth) {
                            counter--;
                            translateX = (slidesLength[0].offsetWidth) * counter;
                        } else {
                            translateX = startingPosition;
                        }

                        window.getComputedStyle(sliderHeader).getPropertyValue('--transform');
                        sliderHeader.style.setProperty('--transform', -  translateX + 'px'); 

                        slideBody.forEach(item=> {
                            window.getComputedStyle(item).getPropertyValue('--transform');
                            item.style.setProperty('--transform', - translateX + 'px');
                        })
                    }

                    function handleTouchStart(event) {
                        activeTouches = true;
                        mobileTranslateX = event.touches[0].clientX;
                        startPosition = event.touches[0].clientX;
                    }
            
                    function handleTouchMove(event) {
                        const positionMove = event.touches[0].clientX;
                        const diff = positionMove - mobileTranslateX;
                        const fingerSpace = 30;
                        if ( startPosition - positionMove < fingerSpace &&
                             startPosition - positionMove > - fingerSpace) {
                          return false;
                        } else {
                          if (activeTouches) {
                            if (!mobileTranslateX) return false;
                            difference = diff;
                            difference > 0 ? prevSlide() : nextSlide();
                            mobileTranslateX = null;
                          }
                        }
                    }
            
                    function handleTouchEnd() {
                        activeTouches = false;
                    }

                    btnNext.addEventListener('click', nextSlide);
                    btnPrev.addEventListener('click', prevSlide);
                    
                    viewButtons();

                    sliderWindow.addEventListener('touchstart', handleTouchStart)
                    sliderWindow.addEventListener('touchmove', handleTouchMove)
                    sliderWindow.addEventListener('touchend', handleTouchEnd)

                    window.addEventListener('resize', prevSlide);
                    window.addEventListener('resize', viewButtons);
        }
    }
}