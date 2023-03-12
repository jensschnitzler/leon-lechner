function toggleOverlay(trigger){
  var trigger = $(trigger);
  //console.log({trigger});
  var id = trigger.data('overlay-target');
  var overlay = $('body').find('.overlay[data-overlay-id="' + id + '"]').first();
  //console.log({overlay});
  overlay.toggleClass('open');
}
