const modal = document.getElementById('subscribe-modal'); 
const modalClose = document.querySelector('.modal__close');
document.cookie = 'popup=0';

if(document.cookie.includes('popup=0')) {
    modal.classList.add('modal_active');
}

modalClose.addEventListener('click', () => {
    modal.classList.remove('modal_active');
    document.cookie = 'popup=1';
})