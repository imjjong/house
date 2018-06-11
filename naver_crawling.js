var request = require('request'), cheerio = require('cheerio');
var fs = require('fs');

var post_pot = [];
//리뷰 페이지 개수 정의
var pagenum = 9;
var productNum =13654921907;

for (i = 1; i <= pagenum; i++) {
  console.log("Pagenum" + i);
  request({
    url: 'https://search.shopping.naver.com/detail/review_list.nhn?nvMid='+productNum+'&page='+i+'&reviewSort=accuracy&reviewType=all',
    method: 'POST' },
    function(error, response, body){
      var $ = cheerio.load(body);
      $(".atc").each(function () {
     var data = $(this);
     post_pot.push(data.text());

  });
   // post_pot.push(body);ss

textSave();
console.log(post_pot.length);
  });
}

function textSave(){
  console.log(post_pot);
  // joinBox = booklist.join();
  fs.writeFileSync("target.txt", '\ufeff' + post_pot, {encoding: 'utf8'});
}
