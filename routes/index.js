var express = require('express');
var router = express.Router();

var titleData = {
	'effective-reading': {
		pageTitle: 'Effective Reading',
		title: 'EFFECTIVE READING',
		logo: 'er.png',
		cover: 'effective-cover.png'
	},
	'effortless-reading': {
		pageTitle: 'Effortless Reading',
		title: 'EFFORTLESS READING',
		logo: 'elr.png',
		cover: 'effortless-cover.png'
	},
	'deliberated-reading': {
		pageTitle: 'Deliberated Reading',
		title: 'DELIBERATED READING',
		logo: 'dr.png',
		cover: 'deliberated-cover.png'
	}
}

var descriptionData = {
	gr: 'The simple ways to read and guarantee result',
	grr: 'The simple ways to read and guarantee remarkable result',
	sgrr: 'The surprisingly simple ways to read and guarantee remarkable result'
}

router.get('/', function(req, res, next) {
	var userFrom = req.query.from;
	if (userFrom == null) {
		userFrom = '';
	}

	titleIndex = 'effortless-reading';
	descriptionIndex = 'grr';

	res.render('index', {
		pageTitle: titleData[titleIndex].pageTitle,
		title: titleData[titleIndex].title,
		logo: titleData[titleIndex].logo,
		cover: titleData[titleIndex].cover,
		description: descriptionData[descriptionIndex],
		from: userFrom
	});
});

router.get('/bonus', function(req, res, next) {
	res.redirect('/#bonus');
});

router.get('/resources', function(req, res, next) {
	res.redirect('/#resources');
});

module.exports = router;
