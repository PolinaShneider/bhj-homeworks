const items = [...document.querySelectorAll('li')]
const target = items.find((item) => item.classList.contains('active'));
console.log(target)