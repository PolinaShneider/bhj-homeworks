const holes = document.querySelectorAll('.hole');
const dead = document.getElementById('dead');
const lost = document.getElementById('lost');


for (let hole of holes) {
    hole.onclick = function () {
        if (hole.classList.contains('hole_has-mole')) {
            dead.innerText++;
        } else {
            lost.innerText++;
        }

        if (dead.innerText === '10') {
            alert('Победа');
            dead.innerText = 0;
            lost.innerText = 0;
        } else if (lost.innerText === '5') {
            alert('Вы проиграли!');
            dead.innerText = 0;
            lost.innerText = 0;
        }
    }
}
