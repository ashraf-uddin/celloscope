$(function(){

	var menu = $('#menu'), pos = menu.offset();
	$(window).scroll(function(){
	if($(this).scrollTop() > pos.top+menu.height() && menu.hasClass('default')){
		menu.fadeOut('fast', function(){
			$(this).removeClass('default').addClass('fixed').fadeIn('fast');
		});
	} else if($(this).scrollTop() <= pos.top && menu.hasClass('fixed')){
		menu.fadeOut('fast', function(){
			$(this).removeClass('fixed').addClass('default').fadeIn('fast');
		});
	}
	});

});


 $(document).ready(function(){

        /**
         * This part handles the highlighting functionality.
         * We use the scroll functionality again, some array creation and 
         * manipulation, class adding and class removing, and conditional testing
         */
        var aChildren = $("#menu li").children(); // find the a children of the list items
        var aArray = []; // create the empty aArray
        for (var i=0; i < aChildren.length; i++) {    
            var aChild = aChildren[i];
            var ahref = $(aChild).attr('href');
            aArray.push(ahref);
        } // this for loop fills the aArray with attribute href values    
        $(window).scroll(function(){
            var windowPos = $(window).scrollTop(); // get the offset of the window from the top of page
            var windowHeight = $(window).height(); // get the height of the window
            var docHeight = $(document).height();      
            for (var i=0; i < aArray.length; i++) {
                var theID = aArray[i];
                var divPos = $(theID).offset().top; // get the offset of the div from the top of page
                var divHeight = $(theID).height(); // get the height of the div in question
                if (windowPos >= divPos && windowPos < (divPos + divHeight)) {
                    $("a[href='" + theID + "']").addClass("nav-active");
                } else {
                    $("a[href='" + theID + "']").removeClass("nav-active");
                }
            }
            
            if(windowPos + windowHeight == docHeight) {
                if (!$("li:last-child a").hasClass("nav-active")) {
                    var navActiveCurrent = $("nav-active").attr("href");
                    $("a[href='" + navActiveCurrent + "']").removeClass("nav-active");
                    $("li:last-child a").addClass("nav-active");
                }
            }
        });
    }); 
