const links = document.querySelectorAll('.menu__link');

links.forEach((link) => {
    link.onclick = function (event) {
        // const parent = link.parentElement;

        if (link.closest('.menu__item').querySelector(".menu_sub")) {
            link.closest('.menu__item').querySelector(".menu_sub").classList.toggle("menu_active");
            return false;
        }
    };
});
