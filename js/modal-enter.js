export let modalEnter = function() { 
    const modalEnter = document.querySelector('[data-modal-enter]'),
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

        if(modalEnter !== null) {
                const menuItems = modalEnter.querySelectorAll('[data-header-modal-item]'),
                        tabItems = modalEnter.querySelectorAll('[data-modal-tab-section]'),
                        buttonCloseModal = modalEnter.querySelectorAll('[data-close-modal]'),
                        modalContainer = modalEnter.querySelector('[data-popup-modal-container]'),
                        body = document.querySelector("#body-cont"),
                        sendedModal = modalEnter.querySelector('[data-modal-sended-email]');

                        if(modalEnter.classList.contains('active')) {
                          body.style.overflow = 'hidden';
                          body.style.maxHeight = '100vh';
                        }

                        menuItems.forEach(function(item) {
                        item.addEventListener("click", function () {
                            const tabId = item.getAttribute("data-modal-tab-item"),
                                currentTub = modalEnter.querySelector(tabId);
                            if (!item.classList.contains("active")) {
                            menuItems.forEach(function (item) {
                                item.classList.remove("active");
                            });
                            tabItems.forEach(function (item) {
                                item.classList.remove("active");
                            });
                            item.classList.add("active");
                            currentTub.classList.add("active");
                            }
                        })
                        })

                        buttonCloseModal.forEach((item)=> {
                        item.addEventListener('click', function() {
                            modalEnter.classList.remove('active');
                            body.style.overflow = 'auto';
                            body.style.maxHeight = 'none';
                        })
                        modalEnter.addEventListener('click',(e)=>{
                            const click = e.composedPath().includes(modalContainer);
                            const clickOnModal = e.composedPath().includes(sendedModal);
                            if(!click && !clickOnModal) {
                            modalEnter.classList.remove('active');
                            body.style.overflow = 'auto';
                            body.style.maxHeight = 'none';
                            }
                        })
                        })   
    }

}