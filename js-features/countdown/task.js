const timerEl = document.getElementById('timer');

let seconds = +timerEl.textContent;

const timerId = setInterval(function () {
    if (seconds <= 0) {
        clearInterval(timerId);
        alert('Вы победили в конкурсе!')
    }
    timerEl.textContent = --seconds;
}, 1000);
