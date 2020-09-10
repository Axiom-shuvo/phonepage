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

      var feature = new Swiper('.feature_slider ', {
        slidesPerView: 3,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
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


      })


});