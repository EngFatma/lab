$(document).ready(function () {

  // venobox Initialization
  $('.venobox').venobox({
    closeColor: '#fff',
    spinColor: '#fff',
    framewidth: '50%',
    // frameheight:'auto'

  });
  // slick slider
  $('.articles_container').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    adaptiveHeight: true,
    slidesToScroll: 3,
    arrows: true,
    prevArrow: "<img class='a-left control-c prev slick-prev' src='./images/home/prev_icon_arrow.svg'>",
    nextArrow: "<img class='a-right control-c next slick-next' src='./images/home/next_icon_arrow.svg'>",
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,

        }
      },
      // {
      //   breakpoint: 767,
      //   settings: {
      //     slidesToShow: 2,
      //     slidesToScroll: 2
      //   }
      // },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  $('.members_container').slick({
    slidesToShow: 4,
    adaptiveHeight: true,
    slidesToScroll: 1,
    dots: true,
    autoplay: true,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,

        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }

    ]
  });
  $('.events_container').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    adaptiveHeight: true,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: "<img class='a-left control-c prev slick-prev' src='./images/home/prev_icon_arrow.svg'>",
    nextArrow: "<img class='a-right control-c next slick-next' src='./images/home/next_icon_arrow.svg'>",
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,

        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('.publication_container1').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    adaptiveHeight: true,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    prevArrow: "<img class='a-left control-c prev slick-prev publication_prev' src='./images/home/prev_icon_arrow.svg'>",
    nextArrow: "<img class='a-right control-c next slick-next publication_next' src='./images/home/next_icon_arrow.svg'>",
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,

        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  $('.benefits_container').slick({
    slidesToShow: 3,
    adaptiveHeight: true,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    prevArrow: "<img class='a-left control-c prev slick-prev benefit_prev' src='./images/home/prev_icon_arrow.svg'>",
    nextArrow: "<img class='a-right control-c next slick-next benefit_next' src='./images/home/next_icon_arrow.svg'>",
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,

        }
      },
      // {
      //   breakpoint: 992,
      //   settings: {
      //     slidesToShow: 2,
      //     slidesToScroll: 1
      //   }
      // },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }

    ]
  });


  $('#date').focus(function () {
    $(this).attr('type', 'date');
  });


});