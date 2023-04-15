const progress = document.getElementById('progress');
const send = document.getElementById('send');
const form = document.getElementById('form');
const inputWrapperButton = document.querySelector('.input__wrapper-button');

inputWrapperButton.addEventListener('click', () => {
    progress.setAttribute('value', 0);
})

form.addEventListener('submit', (value) => {
    value.preventDefault();
    const inputWrapperDesc = document.querySelector('.input__wrapper-desc');
    if (inputWrapperDesc.textContent != 'Имя файла...') {
        const xhr = new XMLHttpRequest();
        const formData = new FormData(form);

        xhr.upload.addEventListener('progress', (evt) => {
            progress.value = evt.loaded / evt.total;
        });
        xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
        xhr.send(formData);
      };
})