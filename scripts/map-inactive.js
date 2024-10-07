            /*variables
            var mapSW = [0, 8000],
                mapNE = [8000, 0];
            */
            var viewCornerTR = L.latLng(3, -6),
                viewCornerBL = L.latLng(-11, 14);
            
            var mapCenter = L.latLng(-4, 4);
            var cornersIGuess = L.latLngBounds(viewCornerTR, viewCornerBL);

            var mapOptions = {
                zoomControl: false,
                crs: L.CRS.Simple,
                center: new L.latLng(-4, 4)
            }
            
            //declare map object
            var map = L.map('map', mapOptions).setView([-4, 4], 2);
            L.control.zoom().setPosition("topright").addTo(map);
            
            //reference the tiles
            L.tileLayer('map/{z}/{x}/{y}.png', {
                minZoom: 1, 
                maxZoom: 5,
                continuousWorld: false,
                noWrap: true
            }).addTo(map);
            
/*
            map.setMaxBounds(new L.LatLngBounds(
            map.unproject(mapNE, map.getMaxZoom()),
                map.unproject(mapSW, map.getMaxZoom())
            ));
*/
            map.setMaxBounds(new L.LatLngBounds(cornersIGuess))

            var iconSizeBounds = [64, 64],
                iconAnchorCoords = [32, 64],
                shadowIcon = 'images/shadow.png',
                shadowSizeBounds = [80, 64],
                shadowAnchorCoords = [0, 64],
                popupAnchorCoords = [0, -64];
                
            
            //icons
            var explored = L.icon({
                iconUrl: 'images/bwicon.png',
                iconSize: iconSizeBounds,
                iconAnchor: iconAnchorCoords,
                popupAnchor: popupAnchorCoords,
                shadowUrl: shadowIcon,
                shadowSize: shadowSizeBounds,
                shadowAnchor: shadowAnchorCoords
            });
            
            var unexplored = L.icon({
                iconUrl: 'images/wbicon.png',
                iconSize: iconSizeBounds,
                iconAnchor: iconAnchorCoords,
                popupAnchor: popupAnchorCoords,
                shadowUrl: shadowIcon,
                shadowSize: shadowSizeBounds,
                shadowAnchor: shadowAnchorCoords
            });

            var imageBounds = [[0.15, 1], [-7.85, 7]];
            var module = L.imageOverlay('images/module.png', imageBounds, {opacity: 1, interactive: true}).addTo(map);
            var imageBounds = [[0, 0], [-8, 8]];
            var regions = L.imageOverlay('images/regions.png', imageBounds, {opacity: 1});

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
          
            //.addTo(map);
            //markers and popups
            var cleveHub = L.marker([-4.334961, 4.417969], {icon: explored});    
            var kirkwall = L.marker([-5.828125, 3.671875], {icon: explored});
            var roseleaf = L.marker([-5.003906, 6.005859], {icon: explored});
            var remorum = L.marker([-3.855469, 3.046875], {icon: explored});
            var blightwater = L.marker([-5.515625, 5.695313], {icon: explored});
            var stCitrine = L.marker([-3.882812, 4.945313], {icon: explored});
            //marker names and desc
            cleveHub.bindPopup(cleveHubDesc);
            kirkwall.bindPopup(kirkwallDesc);
            roseleaf.bindPopup(roseleafDesc);
            remorum.bindPopup(remorumDesc);
            blightwater.bindPopup(blightwaterDesc);
            stCitrine.bindPopup(stCitrineDesc);
            
            var saltedDrift = L.polygon([
                [-2.4375, 5.28125],
                [-2.101562, 6.632813],
                [-3.757812, 7.679688],
                [-4.375, 6],
                [-5.273437, 5.351563],
                [-3.007812, 2.992188]
            ]);

            var gamblersLowland = L.polygon([
                [-3.976562, 7.453125],
                [-6.171875, 6.882813],
                [-7.304687, 5.460938],
                [-6.109375, 3.085938],
                [-5.007812, 3.40625],
                [-4.617187, 4.554688],
                [-5.414062, 5.367188],
                [-4.492187, 6.09375]
            ]);

            var theMarches = L.polygon([
                [-4.953125, 3.351563],
                [-3.820312, 1.773438],
                [-2.632812, 2.78125],
                [-3.09375, 2.921875],
                [-4.59375, 4.492188]
            ]);

            var greenBelt = L.polygon([
                [-2.601562, 2.734375],
                [-1.234375, 1.890625],
                [-1.234375, 0.015625],
                [-2.53125, 0.28125],
                [-3.59375, 0.8125],
                [-3.796875, 1.6875]
            ]);

            var mossonosaTerritory = L.polygon([
                [-4.28125, 5.210938],
                [-5.992187, 4.742188],
                [-6.804687, 4.859375],
                [-6.632812, 5.96875],
                [-5.5, 6.890625],
                [-3.3125, 7.875]
            ],{color: '#8da0cb'});

            var freemarchesTerritory = L.polygon([
                [-6.3125, 3.40625],
                [-5.882812, 4.726563],
                [-4.25, 5.179688],
                [-4.601562, 4.726563],
                [-4.6875, 4.242188],
                [-4.265625, 4.070313],
                [-3.765625, 4.03125],
                [-3.78125, 3.828125],
                [-4.773437, 2.96875]
            ],{color: '#e5e14d'});

            var clevehubTerritory = L.polygon([
                [-3.859375, 4.257813],
                [-4.203125, 4.125],
                [-4.585937, 4.367188],
                [-4.570312, 4.695313],
                [-4.132812, 4.804688],
                [-3.820312, 4.664063]
            ],{color: '#ff332d'});

            var imporLoyalTerritory = L.polygon([
                [-3.746094, 2.511719],
                [-3.351562, 3],
                [-2.78125, 3.785156],
                [-2.710937, 4.988281],
                [-3.570312, 5.015625],
                [-3.664062, 3.882813],
                [-4.566406, 3.054688]
            ],{color: '#464646'});

            var imporIconTerritory = L.polygon([
                [-3.054687, 3.398438],
                [-3.734375, 2.492188],
                [-3.835937, 1.707031],
                [-3.136719, 0.769531],
                [-1.425781, 0.164063],
                [-0.90625, 0.984375],
                [-1.78125, 2.4375]
            ],{color: '#ffffff'});

            const saltdrif = {
                name: "Salted Drift",
                location: saltedDrift
            };
            
            const gamblow = {
                name: "Gamblers Lowland",
                location: gamblersLowland
            };

            const marches = {
                name: 'the "Free" Marches',
                location: theMarches
            };

            const gbelt = {
                name: "Green Belt",
                location: greenBelt
            };
            
            const nowhere = {
                name: "uh... Fuck if I know",
                location: undefined,
                territory: undefined
                
            };

            const terrImporL = {
                name: "the Divine Empire of Impor",
                territory: imporLoyalTerritory
            };

            const terrFreeM = {
                name: 'the Free Marches of Kirk',
                territory: freemarchesTerritory
            };

            const terrImporI = {
                name: "the New Impor Iconoclasm",
                territory: imporIconTerritory
            };

            const terrCleve = {
                name: "Cleve Hub",
                territory: clevehubTerritory
            };

            const terrMosson = {
                name: "the Confederacy of Mossonosa",
                territory: mossonosaTerritory
            };


            var currentRegion = "INTERDIMENSIONAL GAY BABY JAIL";
            var currentTerritory = "UBERSECURITY GAY BABY JAIL"
            var regPolygon = [saltdrif, gamblow, marches, gbelt, nowhere];
            var terrPolygon = [terrImporL, terrCleve, terrFreeM, terrImporI, terrMosson, nowhere];

            function getRegion(m) {
                mark = m;
                var inARegion = false;
                regPolygon.forEach(function (e){
                    if(e != nowhere){
                        if(e.location.contains(mark.getLatLng()) == true){
                            currentRegion = e.name + ".";
                            console.log(currentRegion);
                            inARegion = true;
                            return currentRegion;
                        }
                    }
                    if(e == nowhere && inARegion === false) {
                        currentRegion = e.name + "?";
                        console.log(currentRegion);
                        inARegion = false;
                        return currentRegion;
                    }
                })
            };

            function getTerritory(m) {
                mark = m;
                var inATerritory = false;
                terrPolygon.forEach(function (e){
                    if(e != nowhere){
                        if(e.territory.contains(mark.getLatLng()) == true){
                            currentTerritory = e.name + ".";
                            console.log(currentTerritory);
                            inATerritory = true;
                            return currentTerritory;
                        }
                    }
                    if(e == nowhere && inATerritory === false) {
                        currentTerritory = e.name + "?";
                        console.log(currentTerritory);
                        inATerritory = false;
                        return currentTerritory;
                    }
                })
            };

            //Coordinate Finder
            var marker = L.marker([-4, 4], {draggable: true, icon: unexplored});
            marker.bindPopup('Party Location');
            marker.on('dragend', function(e) {
                getRegion(marker);
                getTerritory(marker);
                marker.getPopup().setContent(marker.getLatLng().toString() + " is the party's location. " + "They are within " + currentRegion + " They are also in the territory of " + currentTerritory).openOn(map);
            });

            //layergroups
            var lg_settle = L.layerGroup([cleveHub,kirkwall,roseleaf,remorum,blightwater]);
            var lg_dungeon = L.layerGroup([]);
            var lg_landmark = L.layerGroup([stCitrine]);
            var lg_regions = L.layerGroup([regions]);
            //var lg_regDebug = L.layerGroup([saltedDrift,gamblersLowland,theMarches,greenBelt]);
            var lg_party = L.layerGroup([marker]);
            //var lg_territory = L.layerGroup([imporLoyalTerritory, imporIconTerritory, clevehubTerritory, freemarchesTerritory, mossonosaTerritory])
            
            var overlays = {
                "Party" : lg_party,
                "Settlements" : lg_settle,
                "Dungeon" : lg_dungeon,
                "Landmark" : lg_landmark,
                "Regions" : lg_regions,
                //"Territory" : lg_territory,
                //"Region Debug" : lg_regDebug,
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
