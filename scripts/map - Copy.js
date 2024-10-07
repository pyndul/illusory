
            var mapCenter = L.latLng(-4, 4);
            var bounds = [[0,0], [4096,4096]]

            var mapOptions = {
                zoomControl: false,
                crs: L.CRS.Simple,
                center: new L.latLng(-4, 4)
            }
            
            //declare map object
            var map = L.map('map', mapOptions).setView([-4, 4], 2);
            L.control.zoom().setPosition("topright").addTo(map);
            
            //reference the tiles
            var image = L.imageOverlay('/maps/labrada.png', bounds).addTo(map);
            map.fitBounds(bounds)

            var iconSizeBounds = [128, 128],
                iconAnchorCoords = [64, 128],
                popupAnchorCoords = [0, -64];
                
            
            //icons
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

            var normalicon = L.icon({
                iconUrl: 'images/wbicon.png',
                iconSize: iconSizeBounds,
                iconAnchor: iconAnchorCoords,
                popupAnchor: popupAnchorCoords,
            });

            var imageBounds = [[0.15, 1], [-7.85, 7]];
            var module = L.imageOverlay('images/module.png', imageBounds, {opacity: 1, interactive: true}).addTo(map);

            module.once('click',  fadeOutLayerLeaflet(module, 1, 0, 0.025, 150));
            function fadeOutLayerLeaflet(ovrly, startOpacity, finalOpacity, opacityStep, delay) {
                
                var currOpacity = startOpacity;
                
                timer = setTimeout(function changeOpacity(){
                    if(startOpacity > finalOpacity){
                    ovrly.setOpacity(currOpacity);
                    currOpacity -= opacityStep;
                }
                    timer = setTimeout(changeOpacity, delay);
                }, delay)
            }

            //layergroups
            var lg_settle = L.layerGroup([]);
            var lg_dungeon = L.layerGroup([]);
            var lg_landmark = L.layerGroup([]);
            
            var overlays = {
                "Settlements" : lg_settle,
                "Dungeons" : lg_dungeon,
                "Landmarks" : lg_landmark,
            }
            
            L.control.graphicScale({
                doubleLine: false,
                fill: 'hollow',
                showSubunits: false,
                position: "bottomleft"
            }).addTo(map);

            
            //add layer control
            L.control.layers(null, overlays).addTo(map);
            map.panTo(new L.LatLng(-4, 4));
