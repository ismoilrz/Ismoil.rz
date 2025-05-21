const burgerMenu = document.getElementById('burger__menu');
const menu = document.querySelector('.header__menu');

burgerMenu.addEventListener('click', () => {
  menu.classList.toggle('active');  // Menyuni ochish yoki yopish
});