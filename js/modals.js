export let modals = function() {
    const modalOnClick = document.querySelector('[data-modal-on-click]');

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
}   