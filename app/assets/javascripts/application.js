// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require_tree .


$(document).ready(function() {
	$('#example').dataTable();
} );

$(document).ready(function(){
   $(".accordion h3:first").addClass("active");
   $(".accordion div:not(:first)").hide();

   $(".accordion h3").click(function(){
   $(this).next("div").slideToggle("slow")
   .siblings("div:visible").slideUp("slow");
   $(this).toggleClass("active");
   $(this).siblings("h3").removeClass("active");
 });

});

(function(){
  var bsa = document.createElement('script');
     bsa.type = 'text/javascript';
     bsa.async = true;
     bsa.src = '//s3.buysellads.com/ac/bsa.js';
  (document.getElementsByTagName('head')[0]||document.getElementsByTagName('body')[0]).appendChild(bsa);
})();

  //setTimeout( function () {
  //	if ( typeof _bsap != 'undefined' ) {
  //		$('#header_advert>a').css('display', 'block');
  //	}
  //	else {
  //		$('#donate_advert').click( function() {
  //			window.location.href = "/donate";
  //		} ).css('display', 'block');
  //	}
  //}, 3000 );

