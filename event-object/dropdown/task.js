const dropDown = document.querySelector(".dropdown__value");
const dropList = document.querySelector(".dropdown__list");
const dropItem = Array.from(document.querySelectorAll(".dropdown__item"));

dropDown.onclick = () => {
    dropList.classList.toggle("dropdown__list_active");
};

for (let i = 0; i < dropItem.length; i++) {
    dropItem[i].onclick = () => {
        dropDown.textContent =
            dropItem[i].querySelector(".dropdown__link").textContent;
        dropList.classList.remove("dropdown__list_active");

        if (dropItem[i].querySelector(".dropdown__link")) {
            return false;
        }
    };
}
