function init(){
	//localStorage.setItem('index',BRAND);
  data={};
  PRODID=getURLParameter('id');
  if(localStorage.getItem('nameReviewer')!=undefined || localStorage.getItem('nameReviewer')!=null)
  {
      var s=localStorage.getItem('nameReviewer');
      //var URL="http://localhost:8000/brandreco?domain="+s+"&prodid="+PRODID;
      var URL="https://product-review-analysis-server.herokuapp.com/brandreco?domain="+s+"&prodid="+PRODID;
      $.ajax({
      url: URL
       })
      .done(function(data) {
	if((data.fakecnt/data.totcnt)<0.5){
  	 $('#productreco').text("This product has very few or no fake reviews and is hence genuine");
	} else {
  	 $('#productreco').text("This product is NOT recommended");
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
