
var rapperName = {
	firstName: ['Lil', 'Bubble', 'Savage', 'Phat', 'Teddy', 'Monsta', 'Crunchy', 'Loco', 'WompWomp', 'Big'],
	lastName: ['Jigglez', 'Babyz', 'Chainz', 'Dollaz', 'Munchkins', 'Papi', 'Cheekz', 'Flocka', 'Wigglez', 'Chubsters'],
	albumName: ["Slam Dunk'n Trollz", "The Great Phatsby", "Beach Betta Have My Sunnies"],
	albumArt: ['src/images/image_01.jpeg', 'src/images/image_02.jpeg','src/images/image_03.jpg', 'src/images/image_04.jpeg', 'src/images/image_05.jpg', 'src/images/image_06.jpeg','src/images/image_07.jpeg', 'src/images/image_08.jpeg', 'src/images/image_09.jpeg'],
	randomize: function(arrayName) {
		return arrayName[Math.floor(Math.random()*arrayName.length)];
	},
	myRapperName: function(){
		var randomFirstName = this.randomize(this.firstName);
		var randomLastName = this.randomize(this.lastName);
		var randomAlbumName = this.randomize(this.albumName);

		$('h2').empty();
		// var gender = prompt("boy or girl?");
		// if(gender === "") {
		// 	gender = "boy";
		// };

		var getRapName = `${randomFirstName} ${randomLastName}`;
		$('h2.rapNameText').text(getRapName);
		//put hype line on the page
	},
	chooseAlbumArt: function(){
		var randomAlbumArt = this.randomize(this.albumArt)
		var randomFirstName = this.randomize(this.firstName);
		var randomLastName = this.randomize(this.lastName);

		var getRapName = `${randomFirstName} ${randomLastName}`;
		$('#albumImage').empty();
		var nameOnAlbum = $('#albumImage').append('<h2>');
		$(nameOnAlbum).text(getRapName);
		$('#albumImage').append('<img id="randomImg" src="'+ randomAlbumArt +'">');

		$('.accessories').addClass('show');
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
	$('#getAlbumArt').on('click', function(){
		rapperName.chooseAlbumArt();

	});
	$('#getRapName').on('click', function(){
		rapperName.myRapperName();
	});
	$('#getHypeLine').on('click', function(){
		rapperName.getHypeLine();
	});
	$('svg').draggable();

});
