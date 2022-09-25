(function($) {
"use strict";

/*------------------------------------------------------------------
[Table of contents]

THEPAW TESTIMONIAL SLIDER JS
THEPAW SWIPER SLIDER JS

-------------------------------------------------------------------*/

/*--------------------------------------------------------------
CUSTOM PRE DEFINE FUNCTION
------------------------------------------------------------*/
/* is_exist() */
jQuery.fn.is_exist = function(){
  return this.length;
}


$(function(){

  $(".menu-bar").on("click", function () {
    $(".offcanves-menu, .offcanvas-overlay").addClass("active");
});
$(".close, .offcanvas-overlay").on("click", function () {
    $(".offcanves-menu, .offcanvas-overlay").removeClass("active");
});

// date picker

$('.rangestart').calendar({
  type: 'date',
  endCalendar: $('.rangeend')
});
$('.rangeend').calendar({
  type: 'date',
  startCalendar: $('.rangestart')
});

$('.rangestart2').calendar({
  type: 'date',
  endCalendar: $('.rangeend2')
});
$('.rangeend2').calendar({
  type: 'date',
  startCalendar: $('.rangestart2')
});

// $('#rangestart').calendar({
//   type: 'date',
//   endCalendar: $('#rangeend')
// });
// $('#rangeend').calendar({
//   type: 'date',
//   startCalendar: $('#rangestart')
// });


var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});


/*--------------------------------------------------------------
STICKY MENU JS INIT
--------------------------------------------------------------*/
$(window).on('scroll', function(){
  if ($(window).scrollTop() > 50) {
      $('#sticky-menu').addClass('sticky-menu');
  } else {
      $('#sticky-menu').removeClass('sticky-menu');
  }

});

$(window).on('scroll', function(){
  if ($(window).scrollTop() > 50) {
      $('#sticky-menu2').addClass('sticky-menu');
  } else {
      $('#sticky-menu2').removeClass('sticky-menu');
  }

});
	

});/*End document ready*/


$(window).on("resize", function(){


}); // end window resize


$(window).on("load" ,function(){

}); // End window LODE




})(jQuery);






