const signin = document.getElementById('signin');
const welcome = document.getElementById('welcome');
const userId = document.getElementById('user_id');
const form = document.querySelector('#signin form');

if (localStorage.getItem('userId')) {
    welcome.classList.add('welcome_active');
    userId.innerText = localStorage.getItem('userId');
    } else {
      signin.classList.add('signin_active');
    }
  

form.addEventListener('submit', () => {
    const formData = new FormData(form);
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
    xhr.send(formData);

    xhr.addEventListener('readystatechange', () => {
        if (xhr.readyState === xhr.DONE && xhr.status == 200) {
          const status = JSON.parse(xhr.responseText);
          if (status.success === true) {
            signin.classList.remove('signin_active');
            welcome.classList.add('welcome_active');
            userId.innerText = status.user_id;
            localStorage.setItem('userId', status.user_id);
        } else {
            alert('Неверный логин/пароль');
        }

        }
    });
})



