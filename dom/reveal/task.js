const reveal = document.querySelectorAll(".reveal");
window.addEventListener("scroll", scrollFunc);

function scrollFunc() {
    reveal.forEach((element) => {
        const obj = ({ top, bottom, height } = element.getBoundingClientRect());
        if (obj.top > 0 && obj.bottom < window.outerHeight - obj.height) {
            element.classList.add("reveal_active");
        } else {
            element.classList.remove("reveal_active");
        }
    });
}
