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

