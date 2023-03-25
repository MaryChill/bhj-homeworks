const lost = document.getElementById('lost');
const dead = document.getElementById('dead');

function whereIsMole () {
    if (activeHole.className.includes('hole_has-mole')) {
        dead = dead.textContent;
        dead++;
        dead.textContent = dead;
        if (dead === 10) {
            alert("Вы выиграли");
            location.reload();
        }
    } else {
        lost = lost.textContent;
        lost++;
        lost.textContent = lost;

        if (lost === 5) {
            alert("Вы проиграли");
            location.reload();
        }
    }
}

for (let i = 1; i <= 9; i++) {
    let activeHole = document.getElementById("hole" + i);
    activeHole.onclick = whereIsMole;
    
}