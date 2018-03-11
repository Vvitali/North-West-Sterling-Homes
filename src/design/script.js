var map;
function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 45.512794, lng: -122.679565},
		zoom: 10
	});
}
(function(){
	console.log("Hello user!");
})()