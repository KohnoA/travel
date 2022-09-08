const loginButton = document.querySelectorAll('.login-link');
const loginModal = document.querySelector('.modal-login');
const createModal = document.querySelector('.modal-create');
const closeButton = document.querySelectorAll('.modal-close');
const registerButton = document.querySelector('.register-link');
const overlayModal = document.querySelector('.overlay-modal');
const loginForm = document.querySelector('.login-form');
const userEmail = document.querySelector('[name="email"]');
const userPassword = document.querySelector('[name="password"]');

loginButton.forEach(item => item.addEventListener('click', () => {
    loginModal.classList.add('show');
    createModal.classList.remove('show');
    overlayModal.classList.add('show');
}))

overlayModal.addEventListener('click', () => {
    loginModal.classList.remove('show');
    createModal.classList.remove('show');
    overlayModal.classList.remove('show');
})

closeButton.forEach(item => item.addEventListener('click', () => {
    loginModal.classList.remove('show');
    createModal.classList.remove('show');
    overlayModal.classList.remove('show');
}))

registerButton.addEventListener('click', () => {
    loginModal.classList.remove('show');
    createModal.classList.add('show');
})

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    alert(`Your email: ${userEmail.value}\nYour password: ${userPassword.value}`);
    loginModal.classList.remove('show');
    createModal.classList.remove('show');
    overlayModal.classList.remove('show');
    event.target.reset();
})