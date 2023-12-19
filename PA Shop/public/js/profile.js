let username = document.querySelector('.name');
let email = document.querySelector('.email');
let phoneNumber = document.querySelector('.number');
username.innerText = localStorage.getItem('name');
email.innerText = localStorage.getItem('email');