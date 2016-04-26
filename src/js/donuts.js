/**
* Slideshow on Homepage
**/
var myIndex = 0;
carousel();
function carousel() {
    var slides = document.getElementsByClassName('slide');
    for (var i = 0; i < slides.length; i++) {
       slides[i].style.display = 'none';  
    }
    myIndex++;
    if (myIndex > slides.length) {
    	myIndex = 1;
    }  
    slides[myIndex-1].style.display = 'block';
    setTimeout(carousel, 2000); // Change image every 2 seconds
}

/**
* Display map on Find Us page
**/
initMap();
function initMap() {
	var mapDiv = document.getElementById('map');
	var map = new google.maps.Map(mapDiv, {
		center: {lat: 59.34175, lng: 18.06296},
		zoom: 16
	});
}