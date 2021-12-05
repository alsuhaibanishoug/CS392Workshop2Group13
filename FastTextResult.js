
var FastText = require('node-fasttext');

function getFastTextResults(statement) {
	//predict returns an array with the input and predictions for best cateogires
	FastText.predict(
		"model.bin", 3,
		[statement],
		function (success, error) {

		  if(error) {
			console.log(error)
			return null;
		  }
		  console.log(success)
		})
	return "success!";
}

module.exports = getFastTextResults;