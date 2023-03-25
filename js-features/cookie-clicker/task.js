const clicker__counter = document.getElementById('clicker__counter');
const cookie = document.getElementById('cookie');
let clicker__counterNumber = clicker__counter.textContent;


function clikCookie() {
    clicker__counterNumber++;
    clicker__counter.textContent = clicker__counterNumber;
    if (clicker__counterNumber % 2 === 0) {
        cookie.width = '250';
    } else {
        cookie.width = '200';
    }
}

cookie.onclick = clikCookie;

