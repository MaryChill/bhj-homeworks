const lost = document.getElementById('lost');
const dead = document.getElementById('dead');


for (let i = 1; i <= 9; i++) {
    let activeHole = document.getElementById("hole" + i);
    activeHole.onclick = () => {
        if (activeHole.className.includes('hole_has-mole')) {
            let victory = dead.textContent;
            victory++;
            dead.textContent = victory;
            if (victory === 10) {
                alert("Вы выиграли");
                dead.textContent = 0;
                lost.textContent = 0;
            }
        } else {
            let defeat = lost.textContent;
            defeat++;
            lost.textContent = defeat;
    
            if (defeat === 5) {
                alert("Вы проиграли");
                dead.textContent = 0;
                lost.textContent = 0;
            }
        }
    }
    
}