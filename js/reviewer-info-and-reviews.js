function init() {
  R = getURLParameter('id');
  if (localStorage.getItem('reviewerInfo' + R) != null || localStorage.getItem('reviewerInfo' + R) != undefined) {
    data = JSON.parse(localStorage.getItem('reviewerInfo' + R));
    console.log(data);
    p = "<div  class='page-header' style='text-align:left!important'>\
    <h4>Reviewer ID:" + data.reviewerID + "</h4>\
    <h4>Reviewer Name:" + data.reviewerName + "</h4>";
    $('.main').append(p);
    for (i = 0; i < data.review.length; i++) {
      s = "      <hr/>\
      <h4>Reviews</h4>\
      Brand ID:" + data.brand[i] + "\
      <br />\
      Review:" + data.review[i] + " <hr/>";
      $('.page-header').append(s);
    }
  } else {
    domain=localStorage.getItem('nameReviewer');
    //var URL = "http://localhost:8000/reviewerinfo?domain="+domain+"&id=" + R;
    var URL = "https://product-review-analysis-server.herokuapp.com/reviewerinfo?domain="+domain+"&id=" + R;
    $('.main').text("Processing the request... Please wait");
    $.ajax({
      url: URL
    }).done(function(data) {
        $('.main').empty();
        console.log(data);
        localStorage.setItem('reviewerInfo' + R, JSON.stringify(data));
        p = "<div  class='page-header' style='text-align:left!important'>\
        <h4>Reviewer ID:" + data.reviewerID + "</h4>\
        <h4>Reviewer Name:" + data.reviewerName + "</h4>";
        $('.main').append(p);
        for (i = 0; i < data.review.length; i++) {
          s = "      <hr/>\
          <h4>Reviews</h4>\
          Brand ID:" + data.brand[i] + "\
          <br />\
          Review:" + data.review[i] + " <hr/>";
          $('.page-header').append(s);
        }
    });
  }
}
