// js jquery
$(document).ready(function() {
	//popup
	$('.js-open-callback').click( function(event){
		event.preventDefault();
		$('#callback__overlay').fadeIn(400,
			function(){
				$('#callback')
					.css('display', 'block')
					.animate({opacity: 1, top: '10px'}, 200);
			});
	});
	$('#callback__close, #callback__overlay').click( function(){
		$('#callback')
			.animate({opacity: 0, top: '0'}, 200,
				function(){
					$(this).css('display', 'none');
					$('#callback__overlay').fadeOut(400);
				}
			);
	});
});