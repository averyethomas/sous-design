var folder = '_assets/images/backgrounds/';

var backgrounds = [
	'sous-background-01.jpg',
	'sous-background-02.jpg',
	'sous-background-03.jpg',
	'sous-background-04.jpg',
	'sous-background-05.jpg',
	'sous-background-06.jpg',
	'sous-background-07.jpg',
	'sous-background-08.jpg',
	'sous-background-09.jpg',
];

function getRandomNum(min, max) {
    return Math.random() * (max - min) + min;
}

var addBackgrounds = function(){
	for(var i = 0; i < backgrounds.length; i++) {
		$('.background').append('<div class="background-image" style="background-image: url(_assets/images/backgrounds/' + backgrounds[i] + ');"></div>')
	}
}

addBackgrounds();

var changeBackground = function(){
	
	var backgroundImageDivs = document.getElementsByClassName('background-image');
		
	var num = Math.floor(getRandomNum(0, backgroundImageDivs.length));
	
	for(var i = 0; i < backgrounds.length; i++) {
		backgroundImageDivs[i].classList.remove('active');
	}
	
	backgroundImageDivs[num].className += ' active';
	
	console.log('run');
};

changeBackground();

setInterval(changeBackground, 6000);




//
/*

$.ajax({
	url: folder  
})
.done(function( data ) {      
   console.log(data);
});
*/

/*
$.ajax({
    url : folder,
    xhrFields: {
    	withCredentials: true
    },
	success: function (data) {
        console.log(data);
    }
	    
/*
        $(data).find("a").attr("href", function (i, val) {
            if( val.match(/\.(jpe?g|png|gif)$/) ) { 
                console.log(folder + val);
            } 
        });

});
*/

// console.log(folder);