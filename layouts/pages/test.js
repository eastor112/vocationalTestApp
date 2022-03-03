const boton = document.querySelector('#boton');
const menu = document.querySelector('#right');
const navBar = document.querySelector('#navbar');

boton.addEventListener('click', () => {
  menu.classList.toggle('hidden')
  navBar.classList.toggle('h-64')
  navBar.classList.toggle('h-20')
})