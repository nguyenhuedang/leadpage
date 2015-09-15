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
	srg: 'The simple ways to read and guarantee results',
	rrr: 'The simple ways to read and guarantee remarkable results',
	ssr: 'The surprisingly simple ways to read and guarantee remarkable results'
}

router.get('/', function(req, res, next) {
	res.redirect('/effective-reading/srg');
});

router.get('/:titleIndex', function(req, res, next) {
	var titleIndex = req.params.titleIndex;
	res.redirect('/' + titleIndex + '/srg');
});

/* GET home page. */
router.get('/:titleIndex/:descriptionIndex', function(req, res, next) {
	var titleIndex = req.params.titleIndex;
	var descriptionIndex = req.params.descriptionIndex;

	if (titleIndex == null) {
		titleIndex = 'effective-reading';
	}

	if (descriptionData[descriptionIndex] == null) {
		descriptionIndex = 'srg';
	}

	res.render('index', { 
		pageTitle: titleData[titleIndex].pageTitle, 
		title: titleData[titleIndex].title, 
		logo: titleData[titleIndex].logo,
		cover: titleData[titleIndex].cover,
		description: descriptionData[descriptionIndex]
	});
});

module.exports = router;
