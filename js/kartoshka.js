var elNavbar = document.querySelector(".nav-list");
const menuBtn = document.querySelector('.menu-btn');

menuBtn.addEventListener('click', function () {
   menuBtn.classList.toggle('active');
   elNavbar.classList.toggle("open-nav")
   menu.classList.toggle('active');
})