function fitCaptionToImage(image){
  var image = $(image);
  var width = Math.floor( image.width() );
  console.log('- width: ' + width);
  var caption = image.parent().find('figcaption');
  console.log({caption});
  caption.css('width',width + 'px');
  image.css('background','red');
}

$(window).on('load', function () {
  console.log('slicky.js');
  var slickSlider = $('.slick-slider').slick({
    //autoplay: true,
    //autoplaySpeed: 2000,
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
    arrows: false
  });

  $('.slick-slider').find('img').each(function(){
    fitCaptionToImage(this);
  });

  var sliderRange = $('.slider-range');

  var slickSlideCount = slickSlider.find('.slick-slide:not(".slick-cloned")').length;

  sliderRange.attr('min',0);
  sliderRange.attr('max', slickSlideCount - 1 );

  console.log('slickSlideCount: ' + slickSlideCount);

  slickSlider.on('setPosition', function(event, slick, direction){

    var index = slickSlider.slick('slickCurrentSlide');
    console.log(index);
    sliderRange.val(index);
  });

  sliderRange.change(function(){
    var index = $(this).val();
    slickSlider.slick('slickGoTo', index, false);
  });


});
