$(document).ready(function () {
  $('.slider').slick({
      dots: true,
      dotsClass: 'custom-dots',
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 2,
      //  autoplay:true,
      //  autoplaySpeed: 2000,
      arrows:false,
      responsive: [
        {
        breakpoint: 1024,
        settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        // dots: true,
        arrows:true,
        // dotsClass: 'custom-dots',
        }
        },
        {
        breakpoint: 768,
        settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        // dots: true,
        arrows:true,
        // dotsClass: 'custom-dots',
        }
        },

        {
          breakpoint: 576,
          settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          // dots: true,
          arrows:true,
          // dotsClass: 'custom-dots',
          }
          },

        ]
        });
});

