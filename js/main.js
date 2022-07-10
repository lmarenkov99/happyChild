$(function () {

  $('.alreadyHelped__slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 774,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true
        }
      }
    ]
  });

  // let value = 0;

  // $('.pay__amount-li input').on('change', function () {
  //   value = $(this).siblings().text();
  //   $('.pay__total-title span').text(value);
  // });

});