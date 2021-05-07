function initialize() {
        var map = L.map('map').setView([50.60907, 3.13809], 16);

        var markers = new Array();

        var osmLayer = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', { // LIGNE 20
            attribution: 'Â© OpenStreetMap contributors',
            maxZoom: 19
        }).addTo(map);
    }
