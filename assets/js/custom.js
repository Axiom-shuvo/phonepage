$(function() {

    $('.page-loader').addClass('loaded');

    var mySwiper = new Swiper('.products_slider', {
      direction: 'vertical',
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      
      });

      var feature = new Swiper('.feature-slider ', {
        slidesPerView: 3,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        navigation: {
          nextEl: '.feature-slider-next',
          prevEl: '.feature-slider-prev',
        },
      });
      
      var flash = new Swiper('.flash-slider ', {
        slidesPerView: 2,
        slidesPerColumn: 2,
        loop: true,
        // loopFillGroupWithBlank: true,
        navigation: {
          nextEl: '.flash-slider-next',
          prevEl: '.flash-slider-prev',
        },
      });


      var client = new Swiper('.client-slider',{
        slidesPerView:5,
        slidesPerGroup: 1,
        spaceBetween: 30,
        loop:true,
        loopFillGroupWithBlank: true,
        pagination: {
          el: '.client-pagination',
          clickable: true,
        },


      });
      
      var review = new Swiper('.review_slider',{
        slidesPerView:1,
        loop:true,
        loopFillGroupWithBlank: true,
        pagination: {
          el: '.review-pagination',
          clickable: true,
        },


      });


});