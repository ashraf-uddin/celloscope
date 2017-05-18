$(document).ready(function() {
    $( '.dropdown' ).hover(
        function(){
            $(this).children('.sub-menu').slideDown(200);
        },
        function(){
            $(this).children('.sub-menu').slideUp(200);
        }
    );
}); // end ready




/*jQuery(window).scroll( function(){
 
    var headerHeight = $('#header').outerHeight();
	console.log(headerHeight);
    var scrollPos = $(window).scrollTop();
 
    if ( scrollPos >= headerHeight ) {
        $('nav').addClass('nav-fixed');
    } else {
        $('nav').removeClass('nav-fixed');
    }
});*/



