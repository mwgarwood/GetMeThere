//Create the map then make 'displayDirections' request
var map = {};
$('#page-map').on("pageinit", function() {
		var display = new google.maps.DirectionsRenderer();
                map = new google.maps.Map($('#map_canvas').get(0), {
                                               'center' : myloc,
                                                'zoom' : 12,
                                                'mapTypeId': google.maps.MapTypeId.ROADMAP,
                                                'mapTypeControl' : true,
                                                'streetViewControl' : true
                                                });
		  display.setMap(map);
	    var ds = new google.maps.DirectionsService();
	    ds.route({ 
                'origin' : $('#destination').val(), 
                 'destination' : myloc, 
                  'travelMode' : google.maps.DirectionsTravelMode.BICYCLING },
		  function (result, status) {
		  	if (status == 'OK') {
				display.setDirections(result);
				display.setPanel($('#dir_panel').get(0));
    				google.maps.event.trigger(map, 'resize');
			}
			else {
				alert("Unable to get route");
			}
		}
		);
$('.refresh').on("tap", function() {
    return false;
});
    });

$('#page-map').on("pageshow", function() {
});
