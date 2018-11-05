$('.card-goods__preview-item a').click(function(e) {
	e.preventDefault();
	$('.card-goods__banner img').attr('src', $(this).attr('href'));
});

$('.card-goods__preview-item').click(function() {
		$('.card-goods__preview-item').removeClass('card-goods__preview-item--active')
	 $(this).addClass("card-goods__preview-item--active");
});