const modal = document.querySelector('#modal_main');
modal.classList.add('modal_active');

const modalSuccess = document.querySelector('#modal_success');

const mainButtonClose = modal.querySelector('.modal__close');
const successButtonClose = modalSuccess.querySelector('.modal__close');

const buttonSuccess = modal.querySelector('.show-success');

buttonSuccess.onclick = function() {
    modalSuccess.classList.add('modal_active');
};

mainButtonClose.onclick = function() {
    modal.classList.remove('modal_active');
};

successButtonClose.onclick = function() {
    modalSuccess.classList.remove('modal_active');
    modal.classList.remove('modal_active');
};
