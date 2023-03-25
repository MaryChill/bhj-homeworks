const timer = document.getElementById('timer');
let timerNumber = timer.textContent;

function timerWin() {
     if (timerNumber > 0) {
        timerNumber--;
        timer.textContent = timerNumber;
    }
    else {
        alert('Вы победили в конкурсе!');
        clearInterval(timerId);
    }
}

let timerId = setInterval(timerWin, 1000);