const loader = document.getElementById('loader');
const item = document.getElementById('items');
let xhr = new XMLHttpRequest;

xhr.open('GET',  'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.send();

xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
        loader.classList.remove('loader_active');
        let response = JSON.parse(xhr.responseText).response.Valute;
        for(index in response) {
            let charCode = response[index].CharCode;
            let value = response[index].Value;
            items.insertAdjacentHTML('afterBegin', `
            <div class="item">
                <div class="item__code">${charCode}</div>
                <div class="item__value">${value}</div>
                <div class="item__currency">руб.</div>
            </div>
            `)
        }
    }
})