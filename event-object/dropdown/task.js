const dropdownLink = Array.from(document.querySelectorAll('.dropdown__link'));
const dropdownList = document.querySelector('.dropdown__list');
const dropdownValue = document.querySelector('.dropdown__value');

function show() {
    dropdownList.classList.toggle('dropdown__list_active');
}

dropdownValue.addEventListener('click', show);

dropdownLink.forEach(item => item.addEventListener('click', (value) => {
    value.preventDefault();
    dropdownValue.textContent = item.textContent;
    dropdownList.classList.toggle('dropdown__list_active');
}));