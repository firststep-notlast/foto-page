const burger = document.querySelector(".menu_burger");
const iconBurger = document.querySelector(".fa-bars");
const iconX = document.querySelector(".fa-times");
const menu_nav = document.querySelector(".menu_nav");

burger.addEventListener("click", function(){
iconBurger.classList.toggle("show");
iconX.classList.toggle("show");
menu_nav.classList.toggle("show");
})


    
  