// Home page
var myloc = new google.maps.LatLng(41.8286, -88.168);
$('#page-home').on("pageinit", function() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition ( 
                    function(position) {
			myloc = new google.maps.LatLng(position.coords.latitude, position.coords.longitude); 
			}
			);
                   var iconmap = new google.maps.Map($('#map_square').get(0), {
                                                 'center' : myloc,
                                                 'zoom' : 12,
                                                 'mapTypeId': google.maps.MapTypeId.ROADMAP,
                                                 'mapTypeControl' : false,
                                                 'streetViewControl' : false
                                                 });
                   var marker = new google.maps.Marker({
                                                       'position': iconmap.getCenter(),
                                                       'map': iconmap,
                                                       'animation': google.maps.Animation.DROP
                                                       });
	    }
	    else {
                fadingMsg('Using device geolocation to get current position.');
	    }
    $('#map_square').on("click", function (ev, ui) {
        	$.mobile.changePage($('#page-map'), {});
	});
});

