export let filter = function() {
    const filterSection = document.querySelector('[data-filter]');
    
    if(filterSection !== null) {
        const filterSwitch = filterSection.querySelector('[data-filter-switch]'),
              dropdownFilter = filterSection.querySelector('[data-dropdown-filter]'),
              inputsCheckbox = filterSection.querySelectorAll('[data-checkbox-input]'),
              titleCheckBox = filterSection.querySelectorAll('[data-title-checkbox]'),
              filterPrice = filterSection.querySelector('[data-filter-price]'),
              filterRange = filterSection.querySelector('[data-filter-range-title]'),
              navigationBar = filterSection.querySelector('[data-left-navigation-bar]'),
              catalogIntems = filterSection.querySelector('[data-catalog-items]'),
              scrollBarr = filterSection.querySelector('[data-scroll-bar]'),
              buttonsChangeView = filterSection.querySelectorAll('[data-button-list-view]'),
              productItems = filterSection.querySelectorAll('[data-product-item-change-view]'),
              leftNavigation = filterSection.querySelector('[data-left-navigation-bar]'),
              emptyLeftNavigation = filterSection.querySelector('[data-left-navigation-bar-empty]'),
              dropList = filterSection.querySelector('[data-droplist-filter]'),
              mainInfo = filterSection.querySelector('[data-main-info]'),
              resultSerach = filterSection.querySelector('[data-result-block]'),
              dropFilterItems = filterSection.querySelectorAll('[data-dropdown-filter-item]'),
              dropSelectedItem = filterSection.querySelector('[data-dropdown-filter-selected]'),
              itemNavigationBar = filterSection.querySelectorAll('[data-filter-item-navigation]'),
              filterResultItems = filterSection.querySelector('[data-filter-items]');

        const filterTitle = filterSection.querySelectorAll('.ocf-filter-header');
        const filterList = filterSection.querySelectorAll('.ocf-value-list');
        const filterAside = document.querySelector('[data-left-navigation-bar]');

        filterTitle.forEach((el, index) => {
            el.addEventListener('click', () => {
                el.classList.toggle("active")

                filterList[index].style.height = el.classList.contains("active") ? filterList[index].scrollHeight + 'px' : 0;
            })
        })


              function delActiv(param) {
                param.forEach((el) => {
                  el.classList.remove('active');
                })
              }

              function delPalit(param) {
                param.forEach((el) => {
                  el.classList.remove('palit');
                })
              }

              function checkScrollNavBar(scroll, nav, navEmpty, blockItems, result) {
/*                 if (scroll < 121) {
                    nav.classList.remove('scroll', 'scroll-stop');
                    navEmpty.classList.remove('scroll', 'scroll-stop');
                } else if(scroll < blockItems.offsetHeight - 490) {
                    nav.classList.add('scroll');
                    navEmpty.classList.add('scroll');
                    if(navEmpty.classList.contains('scroll-stop')) {
                        nav.classList.remove('scroll', 'scroll-stop');
                        navEmpty.classList.remove('scroll', 'scroll-stop');
                    }
                } else {
                    nav.classList.replace('scroll' ,'scroll-stop');
                    navEmpty.classList.replace('scroll' ,'scroll-stop');
                } */
              }

              function checkScrollNavBarMobile() {
                window.addEventListener('resize', function() {
                    if(window.innerWidth > 960) {
                        checkScrollNavBar(window.scrollY, leftNavigation, emptyLeftNavigation, catalogIntems, resultSerach)
                    }
                })
              }

              function changeLable (items, dropdown) {
                items.forEach((item)=> {
                    item.addEventListener('click', ()=> {
                        dropdown.innerText = item.innerText;
                    })
                })
              }

        window.addEventListener("scroll", function () {
            if(window.innerWidth > 960) {
                checkScrollNavBar(window.scrollY, leftNavigation, emptyLeftNavigation, catalogIntems, resultSerach);
            }
            checkScrollNavBarMobile();
        });

        filterSwitch.addEventListener('click', function() {
            this.classList.toggle('active');
            navigationBar.classList.toggle('active');
            catalogIntems.classList.toggle('active');
            emptyLeftNavigation.classList.toggle('active');
            filterResultItems.classList.toggle('active');

            if (window.innerWidth > 960) {
                if(window.innerHeight - 312 > filterAside.scrollHeight) {
                    window.getComputedStyle(filterAside).getPropertyValue('--height-nav');
                    filterAside.style.setProperty('--height-nav', filterAside.scrollHeight + 'px');
                } else {
                   window.getComputedStyle(filterAside).getPropertyValue('--height-nav');
                   filterAside.style.setProperty('--height-nav', window.innerHeight - 226 + 'px');
                }
            }


        });

        dropdownFilter.addEventListener('click', function() {
            this.classList.toggle('active');
        });

        filterSection.addEventListener('click',(e)=>{
            const click = e.composedPath().includes(dropdownFilter);
            if(!click) {
                dropdownFilter.classList.remove('active');
            }
        });

        filterRange.addEventListener('click', function() {
            filterPrice.classList.toggle('active');
        });

        changeLable(dropFilterItems, dropSelectedItem)

        titleCheckBox.forEach((item) => {
            item.addEventListener('click', function() {
                this.classList.toggle('active');
          })
        });

        window.addEventListener("scroll", function () {
            if (window.scrollY > 125) {
                scrollBarr.classList.add('active');
            } else {
                scrollBarr.classList.remove('active');
            }
        });

        buttonsChangeView.forEach((item) => {
            item.addEventListener('click', function() {
                delActiv(buttonsChangeView);
                item.classList.add('active');
                if(item.classList.contains('top-navigation__button-normal')) {
                    delPalit(productItems);
                }else {
                    productItems.forEach(item => {
                        item.classList.add('palit');
                    })
                }
            })
        });

       function getPositionDropdown() {
            const sizeSpace = 1;
            window.getComputedStyle(dropList).getPropertyValue('--top');
            dropList.style.setProperty('top', dropdownFilter.offsetHeight + sizeSpace + 'px');
        }

        let sizeHeaderFilter = 68 + 46;
        const headerSize = 68;
        let widthNavBar = Math.floor(navigationBar.getBoundingClientRect().width),
                mainPaddingLeft = parseInt(getComputedStyle(mainInfo, true).paddingLeft),
                positionLeftResult = widthNavBar + mainPaddingLeft;

        getPositionDropdown();
        window.addEventListener('resize', function() {
            getPositionDropdown();
        })

        window.addEventListener('resize', function() {
            let widthNavBar = Math.floor(navigationBar.getBoundingClientRect().width),
                mainPaddingLeft = parseInt(getComputedStyle(mainInfo, true).paddingLeft),
                positionLeftResult = widthNavBar + mainPaddingLeft;

            //window.getComputedStyle(navigationBar).getPropertyValue('--topScroll');
            //navigationBar.style.setProperty('--topScroll', scrollBarr.offsetHeight + headerSize  + 'px');
            getPositionResult(filterSection, positionLeftResult);
        })

        function getPositionResult(section, position) {
            if(window.innerWidth > 960) {
                window.getComputedStyle(section).getPropertyValue('--leftPositionResult');
                section.style.setProperty('--leftPositionResult', position + 'px');
            } 
        }
        
        getPositionResult(filterSection, positionLeftResult);   
        
        

        itemNavigationBar.forEach((el) => {
            el.addEventListener('click', () => {
                let top = el.getBoundingClientRect().top;
                let topR = filterResultItems.getBoundingClientRect().top;
                resultSerach.classList.add('active');
        
                window.getComputedStyle(resultSerach).getPropertyValue('--topPositionResult');
                resultSerach.style.setProperty('--topPositionResult', top + 'px');
        
/*                 navigationBar.addEventListener('scroll', () => {
                    let top = el.getBoundingClientRect().top;
                    window.getComputedStyle(resultSerach).getPropertyValue('--topPositionResult');
                    resultSerach.style.setProperty('--topPositionResult', top + 'px');
                }) */
        
                window.getComputedStyle(resultSerach).getPropertyValue('--topPositionResult');
                resultSerach.style.setProperty('--topPositionResult', ((-(topR - 8)) + top) + 'px');
        
                window.addEventListener('scroll', () => {                   
/*                     let topR = filterResultItems.getBoundingClientRect().top;
                    window.getComputedStyle(resultSerach).getPropertyValue('--topPositionResult');
                    resultSerach.style.setProperty('--topPositionResult', ((-(topR - 8)) + top) + 'px'); */
/*                     if(navigationBar.classList.contains('scroll-stop')) {
                        resultSerach.classList.add('scroll-stop')
                    }else {
                        resultSerach.classList.remove('scroll-stop')
                    }
              */
                })   
            })
        })
         
/*         window.addEventListener('scroll', () => {
            let topR = filterResultItems.getBoundingClientRect().top;
            window.getComputedStyle(resultSerach).getPropertyValue('--topPositionResult');
            resultSerach.style.setProperty('--topPositionResult', -topR + 'px');
        })  */ 
    }
    const filtersStatic = document.querySelector('[data-scroll-bar]');
    const filterAside = document.querySelector('[data-left-navigation-bar]');

    if (filtersStatic && filterAside) {

        
        let isScrolling = false;

        window.addEventListener('scroll', () => {
          if (window.innerWidth > 960) {
            isScrolling = true;

            clearTimeout(window.scrollEndTimeout);
            window.scrollEndTimeout = setTimeout(function () {
              isScrolling = false;
        
              const isFiltersActive = filtersStatic.classList.contains('active');
              if (isFiltersActive) {
                filterAside.style.setProperty('--height-nav', window.innerHeight - 110 + 'px');
              } else {
                if (window.innerHeight - 312 > filterAside.scrollHeight) {
                  window.getComputedStyle(filterAside).getPropertyValue('--height-nav');
                  filterAside.style.setProperty('--height-nav', filterAside.scrollHeight + 'px');
                } else {
                  window.getComputedStyle(filterAside).getPropertyValue('--height-nav');
                  filterAside.style.setProperty('--height-nav', window.innerHeight - 226 + 'px');
                }
              }
            }, 100);
          }
        });
      }

}