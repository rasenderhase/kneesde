const menuIcon = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu');

menuIcon.addEventListener('click', () => {
  menu.classList.toggle('active');
});

// Add event listener to the menu itself to close when clicked
menu.addEventListener('click', () => {
  menu.classList.remove('active');
});