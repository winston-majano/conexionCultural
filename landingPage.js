document.addEventListener('DOMContentLoaded', function () {
   let menuButton = document.getElementById('menu-button');
    let menu = document.querySelector('.menu');
  
    menuButton.addEventListener('click', function () {
      menu.classList.toggle('show-menu');
    });
  });
  