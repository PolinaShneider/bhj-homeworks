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
