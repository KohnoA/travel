const closeHamburgerMenu = document.querySelector('.hamburger-menu-close');
const linkClose = document.querySelectorAll('.humburger-menu-link');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const hamburger = document.querySelector('.hamburger');
const overlay = document.querySelector('.overlay');

hamburger.addEventListener('click', function() {
    hamburgerMenu.classList.toggle('show');
    overlay.classList.toggle('show');
    document.body.style.overflowY = 'hidden';
})

closeHamburgerMenu.addEventListener('click', function() {
    hamburgerMenu.classList.remove('show');
    overlay.classList.remove('show');
    document.body.style.overflowY = 'visible';
})

overlay.addEventListener('click', () => {
    hamburgerMenu.classList.remove('show');
    overlay.classList.remove('show');
    document.body.style.overflowY = 'visible';
})

linkClose.forEach(item => item.addEventListener('click', () => {
    hamburgerMenu.classList.remove('show');
    overlay.classList.remove('show');
    document.body.style.overflowY = 'visible';
}))