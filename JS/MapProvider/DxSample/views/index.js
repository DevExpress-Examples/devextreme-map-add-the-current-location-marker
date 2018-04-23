DxSample.Index = function (params) {
    function ViewModel() {
        this.lat = ko.observable(40.749825);
        this.lng = ko.observable(-73.987963);

        this.viewShown = function () {
            var map = $('#view-port #map').dxMap('instance');
            var viewModel = this;
            map._initMap().done(function () {
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(function (position) {

                        viewModel.lat(position.coords.latitude);
                        viewModel.lng(position.coords.longitude);

                        map.addMarker({
                            location: [viewModel.lat(), viewModel.lng()],
                            tooltip: 'You\'re here'
                        }, function (marker) {
                            marker.setDraggable(true);
                            google.maps.event.addListener(marker, 'dragend', function (e) {
                                viewModel.lat(e.latLng.hb);
                                viewModel.lng(e.latLng.ib);
                            });
                        });

                    }, function () {
                        handleNoGeolocation(true);
                    });
                } else {
                    // Browser doesn't support Geolocation
                    handleNoGeolocation(false);
                };
            });
        };
    }

    return new ViewModel();
};