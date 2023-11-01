export let modals = function() {
    const modalOnClick = document.querySelector('[data-modal-on-click]'),
          modalReview = document.querySelector('[data-modal-stay-review]'),
          modalBasket = document.querySelector('[data-modal-basket]'),
          modalZoom = document.querySelector('[data-modal-zoom]'),
          modalInfo = document.querySelector('[data-info-modal]');
    let paddingOffset = window.innerWidth - document.body.offsetWidth + 'px';

    if(modalOnClick !== null) {
        const buttonOpenModalOnClick = document.querySelector('[data-button-open-modal-on-click]'),
            buttonCloseModalOnClick = document.querySelector('[data-close-modal-on-click]'),
            modalOnClickContainer = document.querySelector('[data-modal-on-click-container]'),
            body = document.querySelector('#body-cont');

        buttonOpenModalOnClick.addEventListener('click', function() {
            modalOnClick.classList.add('active');
            document.documentElement.classList.add('block-scroll-cart');
            document.documentElement.style.overflow = 'hidden';
            body.style.paddingRight = paddingOffset;
        });
        buttonCloseModalOnClick.addEventListener('click', function(){
            modalOnClick.classList.remove('active');
            document.documentElement.style.overflow = 'auto';
            body.style.paddingRight = 0;
        });
        modalOnClick.addEventListener("click", function (e) {
        const click = e.composedPath().includes(modalOnClickContainer);
        if (!click) {
            modalOnClick.classList.remove("active");
            document.documentElement.style.overflow = 'auto';
            body.style.paddingRight = 0;
        }
        });
    }

    if(modalReview !== null) {
        const buttonSend = modalReview.querySelector('[data-button-modal-review]'),
              buttonCloseModal = modalReview.querySelector('[data-close-modal-stay-review]'),
              buttonOpenModal = document.querySelector('[data-button-open-modal-review]'),
              modalSendedReview = modalReview.querySelector('[data-modal-sended-review]'),
              modalReviewContainer = modalReview.querySelector('[data-modal-stay-review-container]'),
              buttonCloseModals = modalReview.querySelector('[data-close-modal-sended-review]'),
              modalContainer = modalReview.querySelector('[data-modal-stay-review-container]'),
              body = document.querySelector('#body-cont');

/*             buttonSend.addEventListener('click', function() {
                modalSendedReview.classList.add('active');
                modalReviewContainer.classList.add('hidden');
            }); */
            buttonCloseModals.addEventListener('click', function() {
                modalReview.classList.remove('active');
                modalSendedReview.classList.remove('active');
                modalReviewContainer.classList.remove('hidden');
                document.documentElement.style.overflow = 'auto';
                body.style.paddingRight = 0;
            });
            buttonCloseModal.addEventListener('click', ()=> {
                modalReview.classList.remove('active');
                document.documentElement.style.overflow = 'auto';
                body.style.paddingRight = 0;
            });
            modalReview.addEventListener("click", function (e) {
                const click = e.composedPath().includes(modalContainer);
                if (!click) {
                    modalReview.classList.remove("active");
                    document.documentElement.style.overflow = 'auto';
                    body.style.paddingRight = 0;
                }
            });
    }

    if(modalBasket !== null) {
        const buttonOpenBasket = document.querySelector('[data-button-open-basket]'),
              buttonCloseModal = modalBasket.querySelector('[data-button-close-modal-basket]'),
              buttonContinue = modalBasket.querySelector('[data-button-continue]'),
              modalContainer = modalBasket.querySelector('[data-modal-basket-container]'),
              body = document.querySelector('#body-cont');

              if(!buttonOpenBasket.classList.contains('empty')) {
                buttonOpenBasket.addEventListener('click', function() {
                    modalBasket.classList.add('active');
                    document.documentElement.classList.add('block-scroll-cart');
                });
              } 
              
              buttonCloseModal.addEventListener('click', function() {
                modalBasket.classList.remove('active');
                document.documentElement.classList.remove('block-scroll-cart');
              });
              buttonContinue.addEventListener('click', function() {
                modalBasket.classList.remove('active');
                document.documentElement.classList.remove('block-scroll-cart');
              });
              modalBasket.addEventListener("click", function (e) {
                const click = e.composedPath().includes(modalContainer);
                if (!click) {
                    modalBasket.classList.remove("active");
                    document.documentElement.classList.remove('block-scroll-cart');
                }
              });
    }
    
    if (modalZoom !== null) {
        const body = document.querySelector("#body-cont"),
          modalZoomContainer = document.querySelector(
            "[data-modal-zoom-container]"
          ),
          modalZoomClose = document.querySelector("[data-modal-zoom-close]"),
          modalZoomButtonBuyOnClick = document.querySelector(
            "[data-modal-zoom__buy-on-click]"
          ),
          modalBuyOnClickOpen = document.querySelector("[data-modal-on-click]");
  
          function closeModalZoom() {
            if(window.innerWidth < 1140) {
              modalZoom.classList.remove("active");
              document.documentElement.style.overflow = "auto";
            }
          }
  
          closeModalZoom()
          window.addEventListener('resize', closeModalZoom)
  
        modalZoomClose.addEventListener("click", function () {
          modalZoom.classList.remove("active");
          document.documentElement.style.overflow = "auto";
        });
  
        modalZoom.addEventListener("click", function (e) {
          const click = e.composedPath().includes(modalZoomContainer);
          if (!click) {
            modalZoom.classList.remove("active");
            document.documentElement.style.overflow = "auto";
          }
        });
  
        modalZoomButtonBuyOnClick.addEventListener("click", function () {
          modalZoom.classList.remove("active");
          modalBuyOnClickOpen.classList.add("active");
        });
        
  
    }

    if(modalInfo) {
      const closeBtm = modalInfo.querySelector('[data-close-btn]');

      closeBtm.addEventListener('click', () => {
        modalInfo.classList.remove('active');
      })
    }
}   