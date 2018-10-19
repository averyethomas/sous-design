var backgrounds = [ ];

var num = 0;

var changeBackground = function(){
		
	var backgroundImageDivs = document.getElementsByClassName('background-image');
	
	for(var i = 0; i < backgrounds.length; i++) {
		backgroundImageDivs[i].classList.remove('active');
	}
	
	if(num >= (backgrounds.length - 1)) {
		num = 0;
	} else {
		num += 1;
	}
	
	backgroundImageDivs[num].className += ' active';
};
	
var addBackgrounds = function(){
	for(var i = 0; i < backgrounds.length; i++) {
		$('.background').append('<div class="background-image" style="background-image: url(_assets/images/backgrounds/' + backgrounds[i] + ');"></div>')
	}
}

$(document).ready(function() { 	
	var folder = '_assets/images/backgrounds/';

	$.ajax({
	    url : folder,
	    xhrFields: {
	    	withCredentials: true
	    },
		success: function (data) {
	        $(data).find("a").attr("href", function (i, val) {
		        if( val.match(/\.(jpe?g|png|gif)$/) ) { 
		            backgrounds.push(val);
		        } 
		    });
		    
			addBackgrounds();
			
			//changeBackground();
			
			setInterval(changeBackground, 5000);
	    }
	});
	
	
	
	
	
});
