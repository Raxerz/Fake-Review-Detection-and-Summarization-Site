selectedItems=0;
$(document).on('click', '.col-md-15', function() {
	if ($(this).hasClass('clicked')) {
		$('.selected-description').text(--selectedItems);
	} else {
		$('.selected-description').text(++selectedItems);
	}
	$(this).toggleClass('clicked');
	$('.selected-description').css('font-style', 'bold');
});
