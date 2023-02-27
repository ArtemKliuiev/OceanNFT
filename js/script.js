/*_________________________header-menu-background____________________*/
const header = document.querySelector("header");
const sectionOne = document.querySelector(".header__main-info-title");
const sectionOneOptions = {
  rootMargin: "-250px 0px 0px 0px"
};
const sectionOneObserver = new IntersectionObserver(function(
  entries,
  sectionOneObserver
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      header.classList.add("nav-scrolled");
    } else {
      header.classList.remove("nav-scrolled");
    }
  });
},
sectionOneOptions);
sectionOneObserver.observe(sectionOne);

/*_________________________ibg____________________*/
function ibg(){
  $.each($('.ibg'), function(index, val) {
  if($(this).find('img').length>0){
  $(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
  }
  });
  }
  ibg();

  /*_________________________burger____________________*/
$(document).ready(function() {
  $('.header__burger,.header-menu__back') .click(function(event) {
      $('.header__menu').toggleClass('active');
      $('body').toggleClass('lock');
  });
});

  /*_________________________swiper____________________*/
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal' ,
  loop: true,
  slidesPerView: 3,
  spaceBetween: 35.37 ,

});
  /*_________________________tabs-jq____________________*/
$(document).ready(function() {
  $('.collections__button').click(function(e){
    e.preventDefault();

    $('.collections__button').removeClass('active-button');
    $('.collections__img').removeClass('active-img');

    $(this).addClass('active-button');
    $($(this).attr('href')).addClass('active-img');
  });

  $('.collections__button:nth(4)').click();
});
  /*_________________________month____________________*/
  $(document).ready(function() {
    $('.top-sellers__month') .click(function(event) {
        $('.top-sellers__title').toggleClass('active');
    });
  });
    /*_________________________tabs-bottom____________________*/
$(document).ready(function() {
  $('.bottom-info__link-title').click(function(e){
    e.preventDefault();

    $('.bottom-info__links-all').removeClass('active');

    $($(this).attr('href')).addClass('active');
  });
});








