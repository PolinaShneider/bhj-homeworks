let signIn = document.getElementById('signin');
let form = document.getElementById('signin__form');
let inputLogin = document.getElementsByName('login')[0];
let inputPassword = document.getElementsByName('password')[0];
let userId = document.getElementById('user_id');

window.onload = () => {
  if (!localStorage.getItem('userId')) {
    signIn.classList.add('signin_active');
  } else {
    signIn.classList.remove('signin_active');
    userId.textContent = localStorage.getItem('userId');
    userId.closest('.welcome').classList.add('welcome_active');
  }
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  let formData = new FormData(form);
  // let xhr = new XMLHttpRequest();

  formData.login = inputLogin.value;
  formData.password = inputPassword.value;

  // xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php', true);

  fetch('https://netology-slow-rest.herokuapp.com/auth.php', {
    method: 'POST',
    body: formData
  })
  .then(res => res.json())
  .then(data => {
    if (data.success) {
      localStorage.setItem('userId', data.user_id);
      userId.textContent = data.user_id;
      signIn.classList.remove('signin_active');
      userId.closest('.welcome').classList.add('welcome_active');
    } else {
      alert('Неверный логин/пароль');
      inputLogin.value = '';
      inputPassword.value = '';
    }
  })

  // xhr.responseType = 'json';
  // xhr.send(formData);

  // xhr.addEventListener('readystatechange', () => {
  //   if (xhr.readyState === xhr.DONE) {
  //     if (!xhr.response.success) {
  //       alert('Неверный логин/пароль');
  //       inputLogin.value = '';
  //       inputPassword.value = '';
  //     } else {
  //       localStorage.userId = xhr.response.user_id;
  //       userId.textContent = xhr.response.user_id;
  //       signIn.classList.remove('signin_active');
  //       userId.closest('.welcome').classList.add('welcome_active');
  //     }
  //   }
  // });
});