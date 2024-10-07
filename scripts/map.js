
            var mapCenter = L.latLng(-0, 0);
            var bounds = [[1048, -1048], [-1048, 1048]]

            var mapOptions = {
                zoomControl: false,
                crs: L.CRS.Simple,
                center: new L.latLng(-0, 0)
            }
            
            //declare map object
            var map = L.map('map', mapOptions).setView([-2048, 2048], 0);
            L.control.zoom().setPosition("topright").addTo(map);
            
            //reference the tiles
            var image = L.imageOverlay('map/labarada.png', bounds).addTo(map);
            
            map.fitBounds(bounds)

            var marker = L.marker([-0, 0], {draggable: true});
            marker.bindPopup('Party Location');
            marker.on('dragend', function(e) {
                marker.getPopup().setContent(marker.getLatLng().toString() + " is the party's location. ").openOn(map);
            });

            var iconSizeBounds = [64, 64],
                iconAnchorCoords = [32, 64],
                popupAnchorCoords = [0, -64];
            
            //icons

            var deficon = L.icon({
                iconUrl: 'images/wbicon.png',
                iconSize: iconSizeBounds,
                iconAnchor: iconAnchorCoords,
                popupAnchor: popupAnchorCoords,
            });

            var imporicon = L.icon({
                iconUrl: 'images/flags/imporsm.png',
                iconSize: iconSizeBounds,
                iconAnchor: iconAnchorCoords,
                popupAnchor: popupAnchorCoords,
            });
            
            var imporiconoicon = L.icon({
                iconUrl: 'images/flags/iconoclastsm.png',
                iconSize: iconSizeBounds,
                iconAnchor: iconAnchorCoords,
                popupAnchor: popupAnchorCoords,
            });

            var mesaicon = L.icon({
                iconUrl: 'images/flags/mesasm.png',
                iconSize: iconSizeBounds,
                iconAnchor: iconAnchorCoords,
                popupAnchor: popupAnchorCoords,
            });

            var marchicon = L.icon({
                iconUrl: 'images/flags/marchessm.png',
                iconSize: iconSizeBounds,
                iconAnchor: iconAnchorCoords,
                popupAnchor: popupAnchorCoords,
            });

            var eggicon = L.icon({
                iconUrl: 'images/flags/clevesm.png',
                iconSize: iconSizeBounds,
                iconAnchor: iconAnchorCoords,
                popupAnchor: popupAnchorCoords,
            });
            
            var march = L.marker([583.5625, 553.6875], {icon: marchicon});
            var imporiconoclasts = L.marker([320.625, 356.8125], {icon: imporiconoicon});
            var imporcity = L.marker([-11.28125, 486.53125], {icon: imporicon});
            var mesa = L.marker([803.25, -224.125], {icon: mesaicon});
            var egg = L.marker([860, 240], {icon: eggicon});


            //layergroups
            var lg_settle = L.layerGroup([march, egg, imporcity, imporiconoclasts, mesa]);
            var lg_dungeon = L.layerGroup([]);
            var lg_landmark = L.layerGroup([]);
            var lg_party = L.layerGroup([marker]);
            
            var overlays = {
                "Settlements" : lg_settle,
                "Dungeons" : lg_dungeon,
                "Landmarks" : lg_landmark,
                "partydebug" : lg_party,
            }

            
            //add layer control
            L.control.layers(null, overlays).addTo(map);
