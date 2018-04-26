const defaultOptions = {
	page: 'https://www.amazon.com/product-reviews/{{asin}}/ref=cm_cr_arp_d_viewopt_srt?reviewerType=all_reviews&pageNumber=1&sortBy=recent',
	stopAtReviewId: false
}


var page = [];
var i;
for (i = 0; i < 5; i++) {
    // page.push('https://www.amazon.com/product-reviews/{{asin}}/ref=cm_cr_arp_d_viewopt_srt?reviewerType=all_reviews&pageNumber='+i+'&sortBy=recent')
    defaultOptions.page = 'https://www.amazon.com/product-reviews/{{asin}}/ref=cm_cr_arp_d_viewopt_srt?reviewerType=all_reviews&pageNumber='+i+'&sortBy=recent'
    console.log(defaultOptions);
}
