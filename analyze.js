var fs = require('fs');
var article = fs.readFileSync("target.txt");
lineArray = article.toString();

var NaturalLanguageUnderstandingV1 = require('watson-developer-cloud/natural-language-understanding/v1.js');
var natural_language_understanding = new NaturalLanguageUnderstandingV1({
  "url": "https://gateway.watsonplatform.net/natural-language-understanding/api",
  "username": "3db26123-3476-40be-9f04-5d953c1c3881",
  "password": "afCEX0RGgLTI",
  'version': '2018-03-16'
});

var textBox = lineArray;
var analyzeResult;

var parameters = {
  'text': textBox,

  'features': {
    'keywords': {
      'emotion': true,
      'sentiment': true,
      'limit': 20
    }
  }
}

natural_language_understanding.analyze(parameters, function(err, response) {
  if (err)
    console.log('error:', err);
  else
    analyzeResult = JSON.stringify(response, null, 2);
    fs.writeFileSync("result.txt", '\ufeff' + analyzeResult, {encoding: 'utf8'});
});
