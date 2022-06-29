const cookie = document.getElementById('cookie');
const text = document.getElementById('clicker__counter');

let counter = 0;

cookie.onclick = function () {
    if (counter % 2) {
        cookie.width = 190
    } else {
        cookie.width = 200
    }

    text.textContent = ++counter;
};
