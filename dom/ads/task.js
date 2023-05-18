const rotator = Array.from(document.querySelectorAll(".rotator__case"));

let numberActive = 0;
let speed = 0;

const changeRotator = (array) => {
    clearInterval(interval);
    for (let i = 0; i < array.length; i++) {
        array[i].className = "rotator__case";
    }
    numberActive++;

    if (numberActive === array.length) {
        numberActive = 0;
    }

    array[numberActive].classList.add("rotator__case_active");
    array[numberActive].style.color = array[numberActive].dataset.color;
    speed = array[numberActive].dataset.speed;
    interval = setInterval(changeRotator, speed, rotator);
};

let interval = setInterval(changeRotator, speed, rotator);
