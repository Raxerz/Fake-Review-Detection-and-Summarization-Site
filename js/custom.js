function init(){
	//localStorage.setItem('index',BRAND);
  data={};
  if(localStorage.getItem('nameReviewer')!=undefined || localStorage.getItem('nameReviewer')!=null)
  {
      var domain=localStorage.getItem('nameReviewer');
      var brand = localStorage.getItem('prodid');
      var review = document.getElementById("review");
      var URL="http://localhost:8000/custom";
      var formData = {prodid:brand,review:review.value,domain:domain};
      $('#modal-content').text("Processing the review...Please wait");
      $.ajax({
      url: URL,
      type: "POST",
      data: formData,
      success:function(data) {
        console.log(data);
	//alert("This review is " + data.fakeness + " fake");
        $('#modal-content').text("This review is " + data.fakeness + "% fake");
  
}
       });
}
}

