export let modals = function() {
    const modalOnClick = document.querySelector('[data-modal-on-click]'),
          modalReview = document.querySelector('[data-modal-stay-review]');

    if(modalOnClick !== null) {
        const buttonOpenModalOnClick = document.querySelector('[data-button-open-modal-on-click]'),
            buttonCloseModalOnClick = document.querySelector('[data-close-modal-on-click]'),
            modalOnClickContainer = document.querySelector('[data-modal-on-click-container]'),
            body = document.querySelector('#body-cont');
     
            
        buttonOpenModalOnClick.addEventListener('click', function() {
            modalOnClick.classList.add('active');
            body.style.overflow = 'hidden';
        });
        buttonCloseModalOnClick.addEventListener('click', function(){
            modalOnClick.classList.remove('active');
            body.style.overflow = 'auto';
        });
        modalOnClick.addEventListener("click", function (e) {
        const click = e.composedPath().includes(modalOnClickContainer);
        if (!click) {
            modalOnClick.classList.remove("active");
            body.classList.remove("lock");
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

            buttonOpenModal.addEventListener('click', function() {
                modalReview.classList.add('active');
                body.style.overflow = 'hidden';
            });
            buttonSend.addEventListener('click', function() {
                modalSendedReview.classList.add('active');
                modalReviewContainer.classList.add('hidden');
            });
            buttonCloseModals.addEventListener('click', function() {
                modalReview.classList.remove('active');
                modalSendedReview.classList.remove('active');
                modalReviewContainer.classList.remove('hidden');
                body.style.overflow = 'auto';
            });
            buttonCloseModal.addEventListener('click', ()=> {
                modalReview.classList.remove('active');
                body.style.overflow = 'auto';
            });
            modalReview.addEventListener("click", function (e) {
                const click = e.composedPath().includes(modalContainer);
                if (!click) {
                    modalReview.classList.remove("active");
                    body.style.overflow = 'auto';
                }
                });
    }
}   