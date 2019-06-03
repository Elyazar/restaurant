$(function(){
  $('.slick-vertical').slick({
      vertical: true,
      verticalSwiping: true,
      slidesToShow: 1,
      dots: true,
      prevArrow: $('.prev'),
      appendDots:$('.slider'),
      dotsClass: $('.redtre')
  });
});