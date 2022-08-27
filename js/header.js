export let headerProfi = function() {
    const header = document.querySelector('[data-header]');

    function addActiveClass(list) {
      list.forEach((item) => {
        item.addEventListener("click", function () {
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
              menuCall = header.querySelector('[data-menu-call]');
        //----add/remove class groop------
        addActiveClass(selectLanguage)
        //----catalog---------------------
        if(catalogMenu !== null) {
          const buttonCatalog = header.querySelector('[data-button-show-catalog]'),
                menuItems = header.querySelectorAll('[data-catalog-menu-item]'),
                submenuItems = header.querySelectorAll('[data-item-submenu]');

          buttonCatalog.addEventListener('click', function() {
            catalogMenu.classList.toggle('active');
          })

          window.addEventListener('click',(e)=>{
            const click = e.composedPath().includes(catalogMenu);
            const clickButton = e.composedPath().includes(buttonCatalog);
            if(!click && !clickButton) {
              catalogMenu.classList.remove('active');
            }
          })
         //----open submenu---------------------
          menuItems.forEach((item, index) => {
            item.addEventListener("click", function () {
              delActiv(menuItems);
              delActiv(submenuItems);
              item.classList.add('active');
              submenuItems[index].classList.add('active');
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
    }
}