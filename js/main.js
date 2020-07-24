$(document).ready(function(){
  $('.account__cards').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: document.querySelector('#number__button-next'),
    prevArrow: document.querySelector('#number__button-prev'),
    variableWidth: true,
    responsive : [
      {
        breakpoint: 1200,
        settings: {
          slidesToScroll: 3,
          slidesToShow: 2
        }
      }
    ]
  });
  $('.news__cards').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: document.querySelector('#my-arrow-next'),
    prevArrow: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 2,
          nextArrow: false
        }
      }
    ]
  });
});

$('.debt-button').click(function() {
  $(this).toggleClass('is__active')
    .siblings().removeClass('is__active');
})

$('.menu__button').click(function() {
  $('.popup').toggleClass('active');
})


$('.services__button').click(function() {
  $('.popup').toggleClass('active');
})

$('.popup__close').click(function() {
  $('.popup').toggleClass('active');
})

$('.popup__title').click(function() {
  $('.popup__text').toggleClass('active');
})
  
