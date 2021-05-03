var cheerio = require('cheerio');
var request = require('request');
var url="http://www.cgv.co.kr/movies/";


request(url, function(error, response, html){
    if(error) {throw error};
    var $ = cheerio.load(html);
    $('.box-contents > a').each(function()
    {
        let movie_title=$(this).text();
        console.log("movie title: "+ movie_title);
    })

})

