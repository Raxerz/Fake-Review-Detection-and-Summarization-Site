function init(){
	//localStorage.setItem('index',BRAND);
  data={};
  if(localStorage.getItem('nameReviewer')!=undefined || localStorage.getItem('nameReviewer')!=null)
  {
      var s=localStorage.getItem('nameReviewer');
      var URL="http://localhost:8000/cossim?domain="+s;
	$('.main').text("Processing the request.... Please wait");
      $.ajax({
      url: URL
       })
      .done(function(data) {
        console.log(data);
	$('.main').empty();	
        for(i=0;i<1000;i++)
        {
	 if(data.reviewerID[i]!=undefined){
                p = "<div  class='page-header' style='text-align:left!important'>\
        <h4>Reviewer ID:" + data.reviewerID[i] + "</h4>\
        <h4>Product ID:" + data.data[i].asin1 + "</h4>\
	<h4>Review:" + data.data[i].text1 + "</h4>\
        <h4>Product ID:" + data.data[i].asin2 + "</h4>\
	<h4>Review:" + data.data[i].text2 + "</h4>";
                $('.main').append(p);
        }

  }
});
}
}

function registerEvents(){
  $(document).on('click', '.tabCategory-1', function() {
    $('.main-1').empty();
    console.log(localStorage.getItem(localStorage.getItem('id')+'reviewer').beforesummary)
    $('.main-1').text(JSON.parse(data).beforesummary);

	});
}
