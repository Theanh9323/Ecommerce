const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if(scrollY >= 180) {
        navbar.classList.add('bg');
    } else {
        navbar.classList.remove('bg');
    }
})


let useIcon = document.querySelector('.user-icon');
let userPopupIcon = document.querySelector('.user-icon-popup');
useIcon.addEventListener('click',function () {
    userPopupIcon.classList.toggle('active');
});
function LogOut() {
    localStorage.removeItem("name");
    localStorage.removeItem("email");
}




