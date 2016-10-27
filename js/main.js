/*header hidden-scrolling*/
var lastPositionScrollTop = 0;

$(window).scroll(function () {
    var position = $(this).scrollTop();
    if (position < lastPositionScrollTop){
        $('.main-header').slideDown();
    } else {
        $('.main-header').slideUp();
    }
    lastPositionScrollTop = position;
});

/*Scroll lento acerca*/
$(' .acerca').on("click", function(){
	if(this.hash){
			$("html body").animate({"scrollTop":$($(this).attr('href')).offset().top-20}, 1400);
				return false;
	}

});

/*scroll lento contacto*/
$(' .contacto').on("click", function(){
	if(this.hash){
			$("html body").animate({"scrollTop":$($(this).attr('href')).offset().top-82}, 1400);
				return false;
	}

});

/*scroll lento inicio*/
$(' .inicio').on("click", function(){
	if(this.hash){
			$("html body").animate({"scrollTop":$($(this).attr('href')).offset().top-82}, 1400);
				return false;
	}

});
