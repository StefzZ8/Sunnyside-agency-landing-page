const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar-menu__mobile');

menu.addEventListener('click', function () {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})