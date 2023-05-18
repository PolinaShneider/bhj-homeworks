const a = document.querySelector('a');


// wrapper.onclick = function () {
//   alert('world')
//   return false;
// }

a.addEventListener('click', (event) => {
  // console.log(event.target);

  // if (event.target.tagName == 'LI') {
  //   event.target.classList.toggle('done');
  // }
  a.href = "https://netology.ru/"
});

console.dir(a);