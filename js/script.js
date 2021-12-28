const burger = document.querySelector(".menu_burger");
const iconBurger = document.querySelector(".fa-bars");
const iconX = document.querySelector(".fa-times");
const menu_nav = document.querySelector(".menu_nav");

burger.addEventListener("click", function(){
iconBurger.classList.toggle("show");
iconX.classList.toggle("show");
menu_nav.classList.toggle("show");
})

// scrollowanie
$('.menu_list li').on('click', function(){
    const goToSection = "#" + $(this).attr('class');
    $('body, html').animate({
          scrollTop:$(goToSection).offset().top    
      },1000),
      bars()
})
function bars(){
      $( '.menu_nav' ).removeClass( "show" )
      $('.fa-bars').addClass("show")
      $('.fa-times').removeClass("show")
  }

//   animacja linii
$(document).on('scroll', function(){
    const windowHeight = $(window).height();
    const scrollValue = $(this).scrollTop();
    
    const $aboutMeLine = $('.about_me_line');
    const descriptionTopOffset=  $('.about_me_description').offset().top
    const $offerLine = $('.offer_line');
    const offerTopOffset=  $('.offerlist').offset().top

    if (scrollValue > descriptionTopOffset - windowHeight) {
              $aboutMeLine.addClass('active');
      }

      if (scrollValue > offerTopOffset - windowHeight) {
        $offerLine.addClass('active');
}
})
    
// powrót do strony głównej po naciśnięciu logo
const logo = document.querySelector(".menu_logo");
const main = document.querySelector(".main");
let windowTop = main.offsetTop; 
logo.addEventListener("click", function(){
  window.scrollTo(0,0);
  })
  