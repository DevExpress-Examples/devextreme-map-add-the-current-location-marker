$(function(){
    var lat=40.749825;
    var lng=-73.987963;
    $("#txtLat").dxTextBox({
        value: lat
    });
    $("#txtLng").dxTextBox({
        value: lng
    });
    $("#map").dxMap({
        zoom: 20,
        width: 1200,
        height: 700,
        onReady: function (s) {
            var map = s.component;
            if (navigator.geolocation) {
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(function (position) {

                        lat = position.coords.latitude;
                        lng = position.coords.longitude;
                        $("#txtLat").dxTextBox("instance").option("value", lat);
                        $("#txtLng").dxTextBox("instance").option("value", lng);
                        map.addMarker({
                            location: [lat, lng],
                            tooltip: 'You\'re here'
                        });

                    }, function () {
                        handleNoGeolocation(true);
                    });
                } else {
                    // Browser doesn't support Geolocation
                    handleNoGeolocation(false);
                };
            }
        }
    });
    function handleNoGeolocation(browserHasGeolocation) {
        var message = (browserHasGeolocation ?
                       'Error: The Geolocation service failed.' :
                       'Error: Your browser doesn\'t support geolocation.');
        DevExpress.ui.dialog.alert(message, '');        
    };
});