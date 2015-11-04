$(function() {
	$('.btn-close').click(function() {
		thisDialog = $(this).closest('.dialog-background');
		thisDialog.addClass('hide');
	});

	$('.btn-subscribe').click(function() {
		$('.dialog-subscribe').removeClass('hide');

	});

	var $root = $('html, body');
	$('.menu-item a').click(function() {
			var href = $.attr(this, 'href');
			var targetID = href.substr(href.indexOf("#") + 1);
	    $root.animate({
	        scrollTop: $("#" + targetID).offset().top
	    }, 500);
	    return false;
	});
});

function questionValidate() {
	var validateResult = true;
	$('.current-question').each(function() {
		var thisQuestionGroup = $(this);
		console.log(thisQuestionGroup.find('input:checked'));
		if (thisQuestionGroup.find('input:checked').length == 0) {
			validateResult = false;
			thisQuestionGroup.find('strong').addClass('text-danger');
		} else {
			thisQuestionGroup.find('strong').removeClass('text-danger');

		}
	});

	return validateResult;
}
