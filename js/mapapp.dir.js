// Go to map page to see instruction detail (zoom) on map page
$('#dir_panel').on("tap", function() {
    $.mobile.changePage($('#page-map'), {});
});

// Briefly show hint on using instruction tap/zoom
$('#page-dir').on("pageshow", function() {
    fadingMsg("Tap any instruction<br/>to see details on map");
});

