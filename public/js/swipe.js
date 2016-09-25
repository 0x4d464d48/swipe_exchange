
$(document).ready(function () {
  // Hide slick buttons
  $('.slick-prev, .slick-arrow').hide();
  $('.slick-next, .slick-arrow').hide();
  $('#sellerprofile').hide();

  $('.swipe').hide();

  // Hide carosel when other tabs are clicked
  $('#browse').click(function () {
    $('.swipe').hide();
    $('#sellerprofile').hide();

  });
  $('#post').click(function () {
    $('.swipe').hide();
    $('#sellerprofile').hide();

  });
  $('#profile').click(function () {
    $('.swipe').hide();
    $('#sellerprofile').hide();

  });


  $('#swipe').click(function () {
    $('.slick-prev, .slick-arrow').hide();
    $('.slick-next, .slick-arrow').hide();

    $('#sellerprofile').hide();
    $('.swipe').show();
    $('.swipe').slick({
      centerMode: true,
      centerPadding: '60px',
      slidesToShow: 3,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        }
      ]
    });
  });



});
