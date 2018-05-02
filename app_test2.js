/**
 * Created by Administrator on 2017-02-22.♣♣jung♣♣
 */
var client = require('cheerio-httpcli');

var url = "https://search.shopping.naver.com/detail/detail.nhn?nv_mid=11296823177&cat_id=50002352&frm=NVSCTAB&query=%EB%A1%9C%EB%B4%87%EC%B2%AD%EC%86%8C%EA%B8%B0";
var param = {};

client.fetch(url, param, function(err, $, res){
    if (err){
        console.log("Error"); return;
    }
    $('.atc').each(){
      var atc_text = $(this).text;
      console.log(atc_text);
    });



});
