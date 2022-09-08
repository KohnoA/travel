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

console.log('По требованиям:\n\n1. Слайдер изображений в секции destinations:\n  - При клике на урезанные картинки изображения меняються по принципу карусели - выполнено\n  - Три точки внизу слайдера отображают номер слайда и соответствует каждому слайду - выполнено\n  - Анимация плавного перемещения - выполнено');
console.log('2. Нажатие на кнопку Login (кнопка Account в мобильной версии) показывает сверстанный логин попап:\n  - логин попап соответствует верстке его закрытие происходит при клике вне попапа - выполнено\n  - логин попап имеет 2 инпута (логин и пароль) при нажатии на кнопку Sign In показывается браузерный алерт с введенными данными - выполнено');
console.log('3. Нажатие на кнопку Register на Login попапе меняет разметку попапа на разметку Sign Up попапа согласно макету (То есть нажатие не закрывает модал а просто меняет его наполнение) - не до конца понял требование, как оно может не закрываясь менять наполнение, но как сделал');
console.log('Присутсвует небольшой баг\nПри динамическом ресайзе окна в девтуле, могут начать тупить кнопки мобильного слайдера, перезагрузка страницы вылечит их) Ctrl + R!');