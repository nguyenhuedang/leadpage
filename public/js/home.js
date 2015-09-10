$(function() {
	$('.btn-close').click(function() {
		thisDialog = $(this).closest('.dialog-background');
		thisDialog.addClass('hide');
	});

	$('.btn-test').click(function() {
		$('.dialog-test').removeClass('hide');
		$('#mce-EMAIL').focus();
	});

	$('.info-group').addClass('hide');

	$('#btn-reading-result').click(function() {
		if (questionValidate()) {
			viewResult();
		};
	});
});

function questionValidate() {
	var validateResult = true;
	$('.input-group.question-group').each(function() {
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

function viewResult() {
	$('.question-group').addClass('hide');
	$('#btn-reading-result').addClass('hide');
	$('.info-group').removeClass('hide');

	var totalScore = 0;
	$('.input-group.question-group').each(function() {
		var thisQuestionGroup = $(this);
		var checkedOption = thisQuestionGroup.find('input:checked');
		var checkedScore = parseInt(checkedOption.data('score'));
		totalScore += checkedScore;
	});

	console.log(totalScore);

	if (totalScore < 1) {
		$('#goodstart-reader').removeClass('hide');
		$('#result-medal').addClass('bronze');
	} else if (totalScore < 2) {
		$('#entrepreneur-reader').removeClass('hide');
		$('#result-medal').addClass('silver');
	} else {
		$('#expert-reader').removeClass('hide');
		$('#result-medal').addClass('gold');
	}
}