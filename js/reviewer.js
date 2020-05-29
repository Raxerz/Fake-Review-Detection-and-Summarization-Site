function init(){
	//localStorage.setItem('index',BRAND);
  data={};
  domain=localStorage.getItem('nameReviewer');
	//var URL="http://localhost:8000/reviewerbased?domain="+domain;
  var URL = "https://product-review-analysis-server.herokuapp.com/reviewerbased?domain="+domain;
	//$('.main-1').text("Processing....Please wait");
	$.ajax({
	url: URL
	})
	.done(function(data) {
	console.log(JSON.stringify(data));
	localStorage.setItem(localStorage.getItem('nameReviewer'),JSON.stringify(data));
	data=JSON.parse(localStorage.getItem(localStorage.getItem('nameReviewer')));
	//$('.main-1').text("Finished processing...Please select the tabs to see the results");
  for(i=0;i<1000;i++)
  {
    if(data.reviewerID[i] && data.label[i]) {
    $('#t01').append("<tr>\
    <td><a href=./reviewerReviews.html?id="+data.reviewerID[i]+">"+data.reviewerID[i]+"</td>\
    <td>"+data.label[i]+"</td>\
    </tr>");
    } else {
	break;
	}
  }
	});


}

function registerEvents(){
  $(document).on('click', '.tabCategory-1', function() {
    $('.main-1').empty();
    console.log(localStorage.getItem(localStorage.getItem('id')+'reviewer').beforesummary)
    $('.main-1').text(JSON.parse(data).beforesummary);

	});
}
