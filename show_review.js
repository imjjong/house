// 모듈 로드
var client = require('cheerio-httpcli');
// 저장하기 위한 모듈
var fs = require('fs');

// 다운로드
var url = "https://search.shopping.naver.com/detail/detail.nhn?nv_mid=11296823177&cat_id=50002352&frm=NVSHATC&query=%EB%A1%9C%EB%B4%87%EC%B2%AD%EC%86%8C%EA%B8%B0";
var param = {};
var textBox = [];

client.fetch(url, param, function(err, $, res) { //----( ※ 1)
    //에러 체크
    if (err) { console.log("error"); return; }

    // 링크를 추출하여 표시 --- ( ※ 2)
    $(".atc").each(function(idx) {
        var text = $(this).text();
        textBox.push(text+"\n");
        console.log(textBox.length);
    });

    // 텍스트 박스에 저장된 결과물 출력하기
    for (var i =0; i < textBox.length; i++){
      console.log(textBox[i]);
      fs.writeFileSync('review.txt', textBox,'utf-8');
    }
});
