





const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  //direction: 'horizontal',
  //loop: true,

  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 0,

  autoplay: {
    delay: 3500,
    disableOnInteraction: true,
  },

  // Navigation arrows

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },

});


//swiper.slideTo(0, false,false);





$(function() {
    $('#balken').click(function() {
       $('#punkt').css('margin-left', '-=10px');
    });
});


//

$(function() {
    $('#balken').click(function () {
  $( "#punkt" ).animate({
    left: "=10",
  }, 1500, function() {
    // Animation complete.
  });
});
});
