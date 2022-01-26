$(function () {
  // === CATALOG ASIDE (Form Styler JQ) ===
  $('.styler').styler();
  // === / CATALOG ASIDE (Form Styler JQ) ===

  // === PROMO-SLIDER (slick JQ) ===
  $('.promo-slider__wrapper').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    autoplay: false,
    speed: 700,
    fade: true,
    cssEase: 'linear',
    prevArrow:
      '<button type="button" class="slick-prev"><img src="img/icons/anlge-left.svg" alt="стрелка влево"></button>',
    nextArrow:
      '<button type="button" class="slick-next"><img src="img/icons/anlge-right.svg" alt="стрелка вправо"></button>',
  });
  // === / PROMO-SLIDER (slick JQ)  ===
});
