$(function(){
  $('.slv').slick({
      vertical: true,
      verticalSwiping: true,
      slidesToShow: 1,
      dots: true,
      autoplay: true,
      autoplaySpeed: 3000,
      cssEase: 'cubic-bezier(0,0,1,1.01)',
      adaptiveHeight: true,
      arrows: false,
  });
});