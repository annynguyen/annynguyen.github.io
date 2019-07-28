
(function($){

	$(function(){
$('#toggle').click(function() {
    $(this).toggleClass('toggle-active');
    $('#overlay').toggleClass('nav-active');
});
$("#overlay").click(function(){
	$("#toggle").removeClass("toggle-active");
    $('#overlay').toggleClass('nav-active');
});
		jQuery(function($){
		$('.slider').each(function(){
			$(this).slick({
				autoplay:true,
				fade: true,
				autoplaySpeed:700,
				dots:false,
				arrows:false,
			});
		});
	});
		
});
})(jQuery);
