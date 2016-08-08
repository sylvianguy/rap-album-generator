
var rapperName = {
	firstName: ['Lil', 'Bubble', '$avage', 'Phat', 'Teddy', 'Mon$ta', 'Crunchy', 'Loco', 'Woppi', 'Big'],
	lastName: ['Jigglez', 'Babyz', 'Chainz', 'Dolla$', 'Munchkin$', 'Papi', 'Cheekz', 'Dogg', 'Wigglez', 'McSwagger'],
	albumName: ["$wamp Doggs In the Yard", "The Great Phat$by", "Curren$y Curren$y Curren$y","Poppin P.I.M.P PULZ", "Bill$ Bill$ Bill$", "I Gotz Money in the Bank, What Aboutchu?", "Where You Get Them Mom Jean$", "Dolla$ Dolla$ Dolla$",],
	albumArt: ['./images/image_01.jpeg', './images/image_02.gif','./images/image_03.jpg', './images/image_04.jpg', './images/image_05.jpg', './images/image_06.gif','./images/image_07.gif', './images/image_08.jpg', './images/image_09.gif','./images/image_10.gif', './images/image_11.jpg'],
	randomize: function(arrayName) {
		return arrayName[Math.floor(Math.random()*arrayName.length)];
	},
	myRapperName: function(){
		var randomFirstName = this.randomize(this.firstName);
		var randomLastName = this.randomize(this.lastName);

		$('h2').empty();

		var getRapName = `${randomFirstName} ${randomLastName}`;
		$('h2.rapNameText').text(getRapName).addClass('whiteBG');
		//put hype line on the page
	},
	chooseAlbumArt: function(){
		var randomAlbumArt = this.randomize(this.albumArt)
		var randomFirstName = this.randomize(this.firstName);
		var randomLastName = this.randomize(this.lastName);

		var getRapName = `${randomFirstName} ${randomLastName}`;
		$('#albumImage').empty();
		// var nameOnAlbum = $('#albumImage').append('<h2>').addClass('hello');
		// $(nameOnAlbum).text(getRapName);
		$('#albumImage').append('<img id="randomImg" src="'+ randomAlbumArt +'">');

		$('.accessories').addClass('show');
	},
	getAlbumTitle: function(){
		var randomAlbumName = this.randomize(this.albumName);
		$('h2.titleNameText').text(randomAlbumName).addClass('whiteBG');
	},
	getHypeLine: function(){
		var randomFirstName = this.randomize(this.firstName);
		var randomLastName = this.randomize(this.lastName);
		var randomAlbumName = this.randomize(this.albumName);
		var hypeLine = `Its your baby ${randomFirstName} ${randomLastName} out here reppin my new album ${randomAlbumName}`;

		$('h2.hypeLineText').text(hypeLine);
	}
};


$(function(){
	$('#getTitle').on('click', function(){
		rapperName.getAlbumTitle();
	});
	$('#getRapName').on('click', function(){
		rapperName.myRapperName();
		$('.rapNameTextImg').addClass('hide');
		$('.titleNameTextImg').addClass('hide');
	});
	$('#getAlbumArt').on('click', function(){
		rapperName.chooseAlbumArt();
		$('.rapNameTextImg').addClass('show');
		$('.titleNameTextImg').addClass('show');
		$('h4').addClass('show');
	});
	$('#getHypeLine').on('click', function(){
		rapperName.getHypeLine();
	});
	$('.draggable, .rapNameTextImg, .titleNameTextImg').draggable();

	$(".buttonStyle").click(function(e){
		e.preventDefault();
		var dest=0;
		if($(this.hash).offset().top > $(document).height()-$(window).height()){
		     dest=$(document).height()-$(window).height();
		}else{
		     dest=$(this.hash).offset().top;
		}
		//go to destination
		$('html,body').animate({scrollTop:dest}, 500,'swing');
	});

});
