$(".emprenya-home__faq-carousel").slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  dots: true,
  centerPadding: "40px",
  prevArrow:
    '<span class="priv_arrow"><img src="img/faq-left-icon.png" alt=""></span>',
  nextArrow:
    '<span class="next_arrow"><img src="img/faq-right-icon.png" alt=""></span>',
  responsive: [
    {
      breakpoint: 840,
      settings: {
        centerPadding: "40px",
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 620,
      settings: {
        centerPadding: "40px",
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 450,
      settings: {
        centerPadding: "40px",
        slidesToShow: 1,
      },
    }
  ],
});
