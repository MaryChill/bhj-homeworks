const clicker__counter = document.getElementById('clicker__counter');
const cookie = document.getElementById('cookie');
let clicker__counterNumber = clicker__counter.textContent;


function clikCookie() {
    clicker__counterNumber++;
    clicker__counter.textContent = clicker__counterNumber;
    cookie.width = ++clicker__counter.textContent % 2 ? 250 : 200;
}

cookie.onclick = clikCookie;

