console.log('hello all')

$('.slick').slick({
  infinite: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
  ]
});

$('.testimonials').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 500,
  fade: true,
  cssEase: 'linear',
  prevArrow: $('.prev'),
  nextArrow: $('.next')
})

$('.ourPartners__images').slick({
  infinite: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 4000,
  slidesToShow: 6,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
  ]
})

$('.ourEvents__slick').slick({
  infinite: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 4000,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
  ]
})

$(function () {
  var current = location.pathname.split('/')[1];
  $('.navbar-nav li a').each(function () {
    var $this = $(this);
    if ($this.attr('href') === current) {
      $('.navbar-nav li a').removeClass('active');
      $this.addClass('active');
    }
  })
})