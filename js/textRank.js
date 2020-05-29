function init(){
	//localStorage.setItem('index',BRAND);
  data={};
  if(localStorage.getItem(localStorage.getItem('id'))==undefined || localStorage.getItem(localStorage.getItem('id'))==null)
  {
      var s=localStorage.getItem('name')+'&prodid='+localStorage.getItem('id')+'&summary_ch='+localStorage.getItem('summary')+'&token=y';
      //var URL="http://localhost:8000/summary?domain="+s;
      var URL = "https://product-review-analysis-server.herokuapp.com/summary?domain="+s;
	$('.main-1').text("Processing....Please wait");
      $.ajax({
      url: URL
       })
      .done(function(data) {
      console.log(JSON.stringify(data));
      localStorage.setItem(localStorage.getItem('id'),JSON.stringify(data));
      data=JSON.parse(localStorage.getItem(localStorage.getItem('id')));
      $('.main-1').text("Finished processing...Please select the tabs to see the results");
      registerEvents(data);
      });
  }
  else {
    data=JSON.parse(localStorage.getItem(localStorage.getItem('id')));
    $('.main-1').text("Finished processing...Please select the tabs to see the results");
    registerEvents(data);
  }


}

function registerEvents(data){
  $(document).on('click', '.tabCategory-1', function() {
    $('.main-1').empty();
    console.log(data.beforesummary)
    $('.main-1').text(data.beforesummary);

	});
  $(document).on('click', '.tabCategory-2', function() {
    $('.main-1').empty();
    var tok=(data.tokenization);
    console.log(tok);
    for(var i=0;i<tok.length;i++)
    {
        $('.main-1').append(tok[i]);
        $('.main-1').append('<hr/><br/>')
    }
  //  $('.main-1').text(localStorage.getItem(localStorage.getItem('id')).tokenization);
  });
  $(document).on('click', '.tabCategory-3', function() {
      $('.main-1').empty();
      var ranked=data.rankedtext;
      console.log(ranked);
      console.log('RANK:'+ranked[i]);
      for(var i=0;i<ranked.length;i++)
      {
        $('.main-1').append('<b>RANK:</b>'+ranked[i][0]+'<br/>');
          $('.main-1').append('<b>TEXT:</b>'+ranked[i][1]+'<hr/>');
      }
      $('.main-1').text();

  });
  $(document).on('click', '.tabCategory-4', function() {
    $('.main-1').empty();
    $('.main-1').text(data.summarizedcontent);
  //  $('.main-1').text(localStorage.getItem(localStorage.getItem('id')).summarizedcontent);
  });

}
