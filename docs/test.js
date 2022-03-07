const boton = document.querySelector('#boton');
const menu = document.querySelector('#right');
const navbar = document.querySelector('#navbar');

boton.addEventListener('click', () => {
  menu.classList.toggle('hidden')
  navbar.classList.toggle('h-64')
  navbar.classList.toggle('h-20')
})
