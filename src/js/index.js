const menuToggler = document.querySelector('.js-menu-toggler');
const menuContainer = document.querySelector('.menu-container');
menuToggler.addEventListener('click', function() {
  menuToggler.classList.toggle('is-active');
  menuContainer.classList.toggle('is-active');
});