var express = require('express'),
	router = express.Router(),
	jsonUtil = require('./json-util.js'),
	path = require('path');

var portfolioData = path.join(__dirname, '../data/portfolios.json');
var	contentData = path.join(__dirname, '../data/handbook.json');


/* GET home page. */;

router.get('/', function(req, res) {
  res.render('index', { 
  	title: 'handbook demo' 
  });
});

router.get('/getPortfolioData', function(req, res) {
	jsonUtil.loadJson(portfolioData, function(err, results) {
		if(err) console.log(err);
		res.send(results);
	});
});

router.get('/getContentData', function(req, res) {
	console.log('retrieving', contentData);
	jsonUtil.loadJson(contentData, function(err, results) {
		if(err) console.log(err);
		res.send(results);
	});
});

router.post('/editContentData', function(req, res) {
	jsonUtil.loadJson(contentData, function (err, json) {
	    // TODO: make sure you handle errors
	    // if err is not null, you can either consider it an error, or
	    // you could simply say json = [] and start a new file
	    if(err) {
	    	console.log(err);
	    	res.send(500, 'Problem saving data: ' + err);
	    }

	    else {
	    	// should also do validation checks like if(json instanceof Array) and
		    // verify that req.body exists and is properly formatted, etc

		    json = req.body;

		    // re-save the file
		    jsonUtil.writeJson(contentData, json, function (err) {
				if (err) {
					console.log(err);
					res.send(500, 'Problem saving data: ' + err);
				}
				else res.sendStatus(200);
		    });
		}
	});

});

module.exports = router;
