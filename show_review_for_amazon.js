// 모듈 로드
var client = require('cheerio-httpcli');
// 저장하기 위한 모듈
var fs = require('fs');

// 다운로드
var url = "https://www.amazon.com/ECOVACS-Robotic-Cleaner-Controls-Surface/product-reviews/B06XVXRYTM/ref=cm_cr_othr_d_paging_btm_5?pageNumber=5";
var param = {};
var textBox = [];

client.fetch(url, param, function(err, $, res) { //----( ※ 1)
    //에러 체크
    if (err) { console.log("error"); return; }

    // 링크를 추출하여 표시 --- ( ※ 2)
    $(".review-text").each(function(idx) {
        var text = $(this).text();
        textBox.push(text+"\n");
        console.log(textBox.length);
    });

    // 텍스트 박스에 저장된 결과물 출력하기
    for (var i =0; i < textBox.length; i++){
      console.log(textBox[i]);
      fs.writeFileSync('amazon_review.txt', textBox,'utf-8');
    }
});
