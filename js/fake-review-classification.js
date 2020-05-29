registered=0;
selectedItems=0;
function fake(category){
	var i=0,list=[];
	var k=this.load;
	var _this=this;
	$('.display-area').text('');
	for(i=0;i<7;i++){
		var p2 = $('<div/>').attr('class', 'col-md-15');
		$(p2).addClass('col-lg-15');
		$(p2).addClass('col-sm-15');
		$(p2).addClass('col-xs-15');
		var card = ['<div id = "card"><a href="./product-summarization-method.html">\
		<center><img class="block-inline  bor shimmer" src="" ></center>\
		<div class="break"></div>\
		<b class="image-name size shimmer"></b>\
		</a></div><br><br>'];
		$(p2).append(card);
		$('.display-area').append(p2);
	}
	var pause=0;
	$.ajax({
		//url: 'http://localhost:8000/getbrands?domain='+category
		url: 'https://product-review-analysis-server.herokuapp.com/getbrands?domain='+category
	})
	.done(function(data) {
		console.log(data);
		p1=[];

		var currIndex = 0,index = 0;
		var listOfAuto = ['../images/automotives1.jpg', '../images/automotives2.jpg', '../images/automotives3.jpg', '../images/automotives4.jpg','../images/automotives5.jpg','../images/automotives6.jpg','../images/automotives7.jpg','../images/automotives8.jpg','../images/automotives9.jpg','../images/automotives10.jpg'];
		var listOfClo = ['../images/c1.jpg', '../images/c2.jpg', '../images/c3.jpg', '../images/c4.jpg','../images/c5.jpg','../images/c6.jpg','../images/c7.jpg',];
		var listOfCell = ['../images/p1.jpg', '../images/p2.jpg', '../images/p3.jpg', '../images/p4.jpg','../images/p5.jpg','../images/p6.jpg','../images/p7.jpg','../images/p8.jpg','../images/p9.jpg','../images/p10.jpg'];

		console.log(data.length)
		for(i=0;i<20;i++){
			if (index >= 5) {
				index = index % 5;

			}
			var url='';
			if(category=="CellPhones"){
				url=listOfCell[index];
			}
			else if(category=="Automotive"){
				url=listOfAuto[index];
			}
			else if(category=="Electronics"){
				url=listOfCell[index];
			}
			else if(category=="Movies"){
				url=listOfClo[index];
			}
			else {
				url=listOfClo[index];
			}
			list.push({'url':url,'name':data[i+1],'index':i+1,'category':category});
			console.log(list);
			index++;
		}
		_this.data = list;
		_this.len = _this.data.length;
		k(list);
	});
}

fake.prototype.load =function (list1) {
	data = list1;
	$('.display-area').text('');
	console.log(data);
	var i = 0;
	var fillcards = setInterval(function () {
		var length = data.length-1;
		var p = $('<div/>').attr('class', 'col-md-15');
		$(p).addClass('col-lg-15');
		$(p).addClass('card');
		$(p).attr('name',data[i].category);
		$(p).addClass('col-sm-15');
		$(p).addClass('col-xs-15');
		var card = ['<div id = "card card-' + i + '" name="'+data[i].category+'" index="'+data[i].index+'"><a href="./fake-review-classification-brands.html?index='+(i+1)+'&name='+data[i].category+'">\
		<center><img class="image-url block-inline" src="' + data[i].url + '"></center>\
		<div class="break"></div>\
		<div class="image-name">' + data[i].name + '</div>\
		</a></div><br><br>'];
		i++;
		$(p).append(card);
		$('.display-area').append(p);
		if (i == length) {
			clearInterval(fillcards);
		}

	},150);

}
function waitTime  () {
	var  defer = $.Deferred();
	setTimeout(function(){
		console.log('in resolve');
		defer.resolve();
	},1000);
	return defer.promise();
}

fake.prototype.generate =function (url, name, div, i) {
	var card = ['<div id = "card card-' + i + '"><a href="./product-summarization-brands.html?index="'+(i+1)+'" name="'+name+'">\
	<center><img class="image-url block-inline" src="' + url + '"></center>\
	<div class="break"></div>\
	<b class="image-name">' + name + '</b>\
	</a></div>'];
	$(p).append(card);
}

function init(category="Automotive"){
	new fake(category);
	if(registered==0)
	registerEvents();
	registered++;
}
function registerEvents(){
	$(document).on('click', '.automotives', function() {
		if (!$(this).hasClass('clicked')) {
			$( ".options" ).removeClass('selected');
			$('.auto').addClass('selected');
			init('Automotive');
		};
	});

	$(document).on('click', '.clothes', function() {
		if (!$(this).hasClass('clicked')) {
			$( ".options" ).removeClass('selected');
			$('.clo').addClass('selected');
			init('Clothes')
		}
	});

	$(document).on('click', '.cellphones', function() {
		if (!$(this).hasClass('clicked')) {
			$( ".options" ).removeClass('selected');
			$('.cell').addClass('selected');
			init('CellPhones');
		}
	});

	$(document).on('click', '.electronics', function() {
		if (!$(this).hasClass('clicked')) {
			$( ".options" ).removeClass('selected');
			$('.ele').addClass('selected');
			init('Electronics');
		}
	});

	$(document).on('click', '.movies', function() {
		if (!$(this).hasClass('clicked')) {
			$( ".options" ).removeClass('selected');
			$('.mov').addClass('selected');
			init('Movies');
		}
	});
}
