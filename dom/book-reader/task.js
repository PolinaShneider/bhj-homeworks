const book = document.querySelector('.book');
const controls = document.querySelector('.book__control');

for (let control of controls.children) {
    control.addEventListener('click', fontChange);
}

function fontChange(event) {
    event.preventDefault();

    if (event.target.dataset.size === 'big') {
        book.classList.add('book_fs-big');
        book.classList.remove('book_fs-small');
    } else if (event.target.dataset.size === 'small') {
        book.classList.add('book_fs-small');
        book.classList.remove('book_fs-big');
    } else {
        book.classList.remove('book_fs-big');
        book.classList.remove('book_fs-small');
    }

    for (let letter of document.querySelectorAll('.font-size')) {
        letter.classList.remove('font-size_active');
    }

    event.target.classList.add('font-size_active');
}

// // Получаем ссылки на элементы управления цветом текста и фона
// const textColorLinks = document.querySelectorAll('.text_color_black, .text_color_gray, .text_color_whitesmoke');
// const bgColorLinks = document.querySelectorAll('.bg_color_black, .bg_color_gray, .bg_color_white');

// // Обработчик события для изменения цвета текста
// function changeTextColor(event) {
//     event.preventDefault();

//     // Удаляем классы активного состояния с ссылок на цвет текста
//     textColorLinks.forEach(link => link.classList.remove('color_active'));

//     // Добавляем класс активного состояния к выбранной ссылке на цвет текста
//     this.classList.add('color_active');

//     // Получаем выбранный цвет текста
//     const textColor = this.getAttribute('data-text-color');

//     // Устанавливаем выбранный цвет текста для всех параграфов на странице
//     const paragraphs = document.querySelectorAll('.book__content p');
//     paragraphs.forEach(paragraph => {
//         paragraph.style.color = textColor;
//     });
// }

// // Обработчик события для изменения цвета фона
// function changeBgColor(event) {
//     event.preventDefault();

//     // Удаляем классы активного состояния с ссылок на цвет фона
//     bgColorLinks.forEach(link => link.classList.remove('color_active'));

//     // Добавляем класс активного состояния к выбранной ссылке на цвет фона
//     this.classList.add('color_active');

//     // Получаем выбранный цвет фона
//     const bgColor = this.getAttribute('data-bg-color');

//     // Устанавливаем выбранный цвет фона для контейнера с классом "book"
//     const bookContainer = document.getElementById('book');
//     bookContainer.style.backgroundColor = bgColor;
// }

// // Назначаем обработчики событий для ссылок на цвет текста и фона
// textColorLinks.forEach(link => {
//     link.addEventListener('click', changeTextColor);
// });

// bgColorLinks.forEach(link => {
//     link.addEventListener('click', changeBgColor);
// });

