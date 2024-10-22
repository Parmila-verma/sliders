$(document).ready(function () {
  $('.slider').slick({
    // centerMode:true,
    dots: true,
    dotsClass: 'custom-dots',
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    //  autoplay:true,
    //   autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          // arrows: false,
          dotsClass: 'custom-dots',
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          // arrows: false,
          dotsClass: 'custom-dots',
        }
      },

      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          // arrows: false,
          dotsClass: 'custom-dots',
        }
      },

    ]
  });
});

//section-1
$(document).ready(function () {
  $('.slider1').slick({
    centerMode: true,
    dots: true,
    dotsClass: 'custom-dot',
    infinite: true,
    speed: 500,
    //   slidesToShow: 1.65,
    slidesToShow: 1.68,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          // arrows: false,
          dotsClass: 'custom-dot',
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          // arrows: false,
          dotsClass: 'custom-dot',
        }
      },
    ]
  });
});

//section-2
$(document).ready(function () {
  $('.slider2').slick({
    dots: true,
    dotsClass: 'custom-left-dots',
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    arrows:true,
    slidesToScroll: 1,
    prevArrow: '.slick-prev',
    nextArrow: '.slick-next',

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          arrows:false,
          dotsClass: 'custom-left-dots',
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          dotsClass: 'custom-left-dots',
        }
      },
    ]
  });
});
