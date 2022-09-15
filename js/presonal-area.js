export let personalArea = function() { 
    const personalArea = document.querySelector('[data-personal-arae]');

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
        const navigationBar = personalArea.querySelector('[data-navigation-bar]'),
              favorites = personalArea.querySelector('[data-favorites]'),
              privateData = personalArea.querySelector('[data-private-data]');
      
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
    }
}