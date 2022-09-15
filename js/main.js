var elOftenImg = document.querySelector(".often-img");
var elGrindBox = document.querySelector(".bear-text");

elOftenImg.addEventListener("click", function() {
   elGrindBox.classList.toggle("open")
});


var elPhoneImg = document.querySelector(".boor-img");
var elBoor = document.querySelector(".boor-text");

elPhoneImg.addEventListener("click", function() {
   elBoor.classList.toggle("loop")
});

var elProyectImg = document.querySelector(".koor-img");
var elKoor = document.querySelector(".koor-text");

elProyectImg.addEventListener("click", function() {
   elKoor.classList.toggle("loop")
})

var eJustImg = document.querySelector(".foor-img");
var elFoor = document.querySelector(".foor-text");

eJustImg.addEventListener("click", function() {
   elFoor.classList.toggle("loop")
})

var elCustImg = document.querySelector(".coor-img");
var elCoor = document.querySelector(".coor-text");

elCustImg.addEventListener("click", function() {
   elCoor.classList.toggle("loop")
})


var elBurger = document.querySelector(".burger-btn");
var elNavbar = document.querySelector(".nav-list");

elBurger.addEventListener("click", function() {
   elNavbar.classList.toggle("open-nav")
})

