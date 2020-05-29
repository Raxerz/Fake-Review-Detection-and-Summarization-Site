function init(){
  data={};
  if(localStorage.getItem('nameReviewer')!=undefined || localStorage.getItem('nameReviewer')!=null)
  {
    var domain=localStorage.getItem('nameReviewer');
    var brand = localStorage.getItem('prodid');
    var review = document.getElementById("review");
    //var URL="http://localhost:8000/custom";
    var URL="https://product-review-analysis-server.herokuapp.com/custom"
    var formData = {prodid:brand,review:review.value,domain:domain};
    $('#modal-content').text("Processing the review...Please wait");
    $.ajax({
      url: URL,
      type: "POST",
      data: formData,
      success:function(data) {
        console.log(data);
        $('#modal-content').text("This review is " + data.fakeness + "% fake");
      }
    });
  }
}
