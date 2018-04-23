DxSample.Index = function (params) {
    var viewModel = {
        lat: ko.observable(40.749825),
        lng: ko.observable(-73.987963),

        mapReadyAction: function (s) {
            var map = s.component;
            if (navigator.geolocation) {
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(function (position) {

                        viewModel.lat(position.coords.latitude);
                        viewModel.lng(position.coords.longitude);

                        map.addMarker({
                            location: [viewModel.lat(), viewModel.lng()],
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
    };
    return viewModel;
}
