const tab = Array.from(document.querySelectorAll('.tab'));
const tabContent = Array.from(document.querySelectorAll('.tab__content'));

tab.forEach(index => {index.addEventListener('click', () => {
    const tabActive = document.querySelector('.tab_active');
    const tabContentActive = document.querySelector('.tab__content_active');
    tabActive.classList.remove('tab_active');
    index.classList.add('tab_active');
    tabContentActive.classList.remove('tab__content_active');
    tabContent[tab.indexOf(index)].classList.add('tab__content_active');
})});