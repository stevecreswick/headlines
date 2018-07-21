var request = require('request');
var cheerio = require('cheerio');

request('https://news.google.com', function (error, response, html) {
  if (!error && response.statusCode == 200) {
    // console.log(html);
    var $ = cheerio.load(html);
    debugger;
  }
});