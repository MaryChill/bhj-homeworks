const modalMain = document.getElementById('modal_main'); 
const showSuccess = Array.from(document.getElementsByClassName('show-success'));
const modalSuccess = document.getElementById('modal_success');

function closePopup() {
    modalMain.classList.remove('modal_active');
    modalSuccess.classList.remove('modal_active');
}
modalMain.classList.add('modal_active');
let showSuccessElement = showSuccess.shift();
showSuccessElement.classList.remove('modal__close');
showSuccessElement.onclick = () => modalSuccess.classList.add('modal_active');

const modalClose = Array.from(document.getElementsByClassName('modal__close'));

modalClose.forEach(item => item.onclick = closePopup);