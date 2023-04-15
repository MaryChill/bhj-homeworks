const pollTitle = document.getElementById('poll__title');
const pollAnswer = document.getElementById('poll__answers');
let xhr = new XMLHttpRequest;

xhr.open('GET',  ' https://students.netoservices.ru/nestjs-backend/poll');
xhr.send();
xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
        let responseTile = JSON.parse(xhr.responseText).data.title;
        let responseAnswer = JSON.parse(xhr.responseText).data.answers;
        pollTitle.textContent = responseTile;
        responseAnswer.forEach((value) => {
            pollAnswer.insertAdjacentHTML('afterBegin', `
            <button class="poll__answer">
            ${value}
            </button>`
            
        )
    });
    }
    let button = Array.from(document.querySelectorAll('.poll__answer'));
    button.forEach((elem) => {
        elem.addEventListener('click', () => {
            alert('Спасибо, ваш голос засчитан!');
        })
    });
})
