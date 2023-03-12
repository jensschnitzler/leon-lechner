// /* Global Variables */
//
// var time = 5000;
// var idleTimeout;
//
// /* Functions */
//
// function idleEvent(){
//   // What happens when user is idle?
//   console.log("user is idle");
//   $('body').addClass('idle');
// }
//
// function resetTimer(){
//   // re-set idle timer:
//   clearTimeout(idleTimeout);
//   $('body').removeClass('idle');
//   idleTimeout = setTimeout(function(){
//     idleEvent();
//   },time);
// }
//
// /* Go! */
//
// $(document).ready(function(){
//   resetTimer();
// });
//
// $(document).bind('mousemove keydown scroll', function () {
//   resetTimer();
// });
//
//
//
// // reminder put  mobile and desktop #myNav {
// //     top: 0rem;}
