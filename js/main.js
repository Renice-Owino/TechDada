
function main_script() {

(function () {
   'use strict';

    // Smooth Scrolling
  //==========================================
    $(function() {
      $('a.scroll').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top - 50
            }, 1000);
            return false;
          }
        }
      });
    });

    $('body').scrollspy({ 
      target: '#active-menu',
      offset: 100
    })
 	
 
$(document).ready(function() {


  // Recent Activities
  //==========================================
	$(".owl-carousel3").owlCarousel({
		pagination: false,
		navigation: true,
		items: 3,
		addClassActive: true,
		itemsCustom : [
			[0, 1],
			[320, 1],
			[480, 2],
			[700, 3],
			[768, 2],
			[1024, 3],
			[1200, 3],
			[1400, 3],
			[1600, 3]
		],
	});
	 
	});

    //Video Popup
    jQuery('.app-video').magnificPopup({
        disableOn: 200,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });

}());

}
main_script();