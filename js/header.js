export let header = function() {
 
    const header = document.querySelector('[data-header]'),
          blur = document.querySelector('[data-blur]');

    function addActiveClass(list) {
      list.forEach((item) => {
        item.addEventListener("click", function (event) {
          event.preventDefault();
          if (!item.classList.contains("active")) {
            list.forEach(function (item) {
              item.classList.remove("active");
            });
            item.classList.add("active");
          }
        });
      });
    }
    function delActiv(param) {
      param.forEach((el) => {
        el.classList.remove('active');
      })
    } 

    if(header !== null) {
        const selectLanguage = header.querySelectorAll('[data-select-language]'),
              catalogMenu = header.querySelector('[data-catalog-menu]'),
              menuServices = header.querySelector('[data-menu-services]'),
              menuCall = header.querySelector('[data-menu-call]'),
              menuAccount = header.querySelector('[data-menu-account]'),
              buttonOpenMenuMobile = header.querySelector('[data-open-mobile-menu]'),
              headerWrapper = header.querySelector('[data-header-wrapper]'),
              buttonCloseMenuMobile = header.querySelector('[data-close-menu-mobile]'),
              menuMobileItem = header.querySelectorAll('[data-menu-mobile-item]'),
              menuMobileList = header.querySelector('[data-menu-mobile-list]'),
              menuMobileWrapper = header.querySelector('[data-mobile-menu-wrapper]'),
              accordionItems = header.querySelectorAll('[data-accordion-mobile]'),
              submenuMobileItems = header.querySelectorAll('[data-select-submenu-mobile]'),
              buttonSearch = header.querySelector('[data-button-search]'),
              buttonCloseSearch = header.querySelector('[data-button-close-search]'),
              linksHeader = header.querySelectorAll('[data-default-link]');
        //----add/remove class groop------
        addActiveClass(selectLanguage)

        //----catalog---------------------
        if(catalogMenu !== null) {
          const buttonCatalog = header.querySelector('[data-button-show-catalog]'),
                menuItems = header.querySelectorAll('[data-catalog-menu-item]'),
                submenuItems = header.querySelectorAll('[data-item-submenu]'),
                submenuCatalog = header.querySelector('[data-submenu-catalog]');


              // add dafault width catalog submenu
                window.getComputedStyle(submenuCatalog).getPropertyValue('--width');
                submenuCatalog.style.setProperty('--width', submenuItems[0].scrollWidth + 'px');

          function getSize() {
            submenuItems.forEach(item=> {
              if(item.classList.contains('active')){
                window.getComputedStyle(submenuCatalog).getPropertyValue('--width');
                submenuCatalog.style.setProperty('--width', item.scrollWidth + 'px');
              }
            })
          }
                
          buttonCatalog.addEventListener('click', function() {
            catalogMenu.classList.toggle('active');
            blur.classList.toggle('active');
          })

          window.addEventListener('click',(e)=>{
            const click = e.composedPath().includes(catalogMenu);
            const clickButton = e.composedPath().includes(buttonCatalog);
            if(!click && !clickButton) {
              catalogMenu.classList.remove('active');
              blur.classList.remove('active');
            }
          })
         //----open submenu---------------------
          menuItems.forEach((item, index) => {
            item.addEventListener("click", function () {
              delActiv(menuItems);
              delActiv(submenuItems);
              item.classList.add('active');
              submenuItems[index].classList.add('active'); 
              getSize();                 
            });
          });
        }   
        
        
        
        if(menuServices !== null) {
          const buttonOpen = header.querySelector('[data-button-services]'),
                section = header.querySelector('[data-section-services]');
          buttonOpen.addEventListener('click', function() {
            this.classList.toggle('active');
            menuServices.classList.toggle('active');
            section.classList.toggle('active');
          })

          window.addEventListener('click',(e)=>{
            const click = e.composedPath().includes(menuServices);
            const clickButton = e.composedPath().includes(buttonOpen);
            if(!click && !clickButton) {
              menuServices.classList.remove('active');
              buttonOpen.classList.remove('active');
              section.classList.remove('active');
            }
          })
        }  

        if(menuCall !== null) {
          const buttonOpen = header.querySelector('[data-button-call]'),
                section = header.querySelector('[data-section-call]');
          buttonOpen.addEventListener('click', function() {
            this.classList.toggle('active');
            menuCall.classList.toggle('active');
            section.classList.toggle('active');
          })

          window.addEventListener('click',(e)=>{
            const click = e.composedPath().includes(menuCall);
            const clickButton = e.composedPath().includes(buttonOpen);
            if(!click && !clickButton) {
              menuCall.classList.remove('active');
              buttonOpen.classList.remove('active');
              section.classList.remove('active');
            }
          })
        }

        if(menuAccount !== null) {
          const buttonOpen = header.querySelector('[data-button-account]'),
                section = header.querySelector('[data-section-account]');
          buttonOpen.addEventListener('click', function(event) {
            event.preventDefault();
            this.classList.toggle('active');
            menuAccount.classList.toggle('active');
            section.classList.toggle('active');
          })

          window.addEventListener('click',(e)=>{
            const click = e.composedPath().includes(menuAccount);
            const clickButton = e.composedPath().includes(buttonOpen);
            if(!click && !clickButton) {
              menuAccount.classList.remove('active');
              buttonOpen.classList.remove('active');
              section.classList.remove('active');
            }
          })
        }

        //----mobile-menu--------------

        buttonOpenMenuMobile.addEventListener('click', () => {
          headerWrapper.classList.add('active')
        })
    
        buttonCloseMenuMobile.addEventListener('click', () => {
          headerWrapper.classList.remove('active')
        })
    
        menuMobileItem.forEach((item)=> {
          item.addEventListener('click', function() {
            this.classList.toggle('active');
            menuMobileWrapper.classList.toggle('active');
          })
        })

        //------accordion-------------
        accordionItems.forEach((item) => {
          item.addEventListener('click', function(event) {
           const self = event.currentTarget;
           const accordionContent = self.querySelector('[data-accordion-mobile-content]');
           this.classList.toggle('active');
           if(this.classList.contains('active')){
            accordionContent.style.height = accordionContent.scrollHeight + 'px';
           } else {
            accordionContent.style.height = 0 + 'px';
           }
        })})

        menuMobileItem.forEach((item, index) => {
          item.addEventListener("click", function () {
            delActiv(menuMobileItem);
            delActiv(submenuMobileItems);
            item.classList.add('active');
            submenuMobileItems[index].classList.add('active');
          });
        });

        //-----------search-----------
        buttonSearch.addEventListener('click', function() {
          header.classList.add('active-search');
        })

        buttonCloseSearch.addEventListener('click', function(event) {
          event.preventDefault()
          header.classList.remove('active-search');
        })

        //---------default links-------
        linksHeader.forEach(item=> {
          item.addEventListener('click',function(event) {
            event.preventDefault();
          })
        })
    }
  
}