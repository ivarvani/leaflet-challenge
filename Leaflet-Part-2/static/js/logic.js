// Creating the map object
let myMap = L.map("map", {
  center: [20.5937, 78.9629],
  zoom: 3
});

// Adding the tile layer
let street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);
let topo = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
	attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
});



// Load the GeoJSON data.
let geoData = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";
function getColor(d) {
  if (d < 10) return '#FEB24C';
  else if (d <30) return '#FD8D3C';
  else if (d <50) return '#FC4E2A';
  else if (d <70) return "#E31A1C";
  else if (d <90) return '#BD0026';
  else return '#7a0177';
}
// function getColor(d) {
//   return d > 90 ? '#7a0177' :
//   d > 70? '#BD0026' :
//   d > 50? '#E31A1C' :
//   d > 30? '#FC4E2A' :
//   d > 10 ? '#FD8D3C' :
//   d > -10 ? '#FEB24C' :
//   '#FFEDA0';
//   }
// Get the data with d3.
d3.json(geoData).then(function(data) {

  // Create a new choropleth layer.
  var earthquakes = L.geoJson(data, {
    pointToLayer: function(feature, latlng) {
        var markerCh = L.circleMarker(latlng, {
            radius: feature.properties.mag * 5,
            fillColor: getColor(feature.geometry.coordinates[2]),
            color: "#000",
            weight: 1,
            opacity: 1,
            fillOpacity: 0.8
        })
        markerCh.bindPopup("<h3>" + feature.properties.title+"</h3><hr><p>" + `Depth: ${feature.geometry.coordinates[2]}` + "</p>"); // Or whatever
        return markerCh;
      }

});

let tetonic_link = "https://raw.githubusercontent.com/fraxen/tectonicplates/master/GeoJSON/PB2002_boundaries.json"
d3.json(tetonic_link).then(function(data) {
  // Creating a GeoJSON layer with the retrieved data
  let tetonics = L.geoJson(data)
  //Passing in our style object

let baseMaps = {
  Street: street,
  Topography: topo
};

let overlayMaps = {
  Earthquakes: earthquakes,
  Tetonics: tetonics
};

L.control.layers(baseMaps, overlayMaps,{collapsed: false}).addTo(myMap);

//  Create a legend to display information about our map
// source -- https://www.igismap.com/legend-in-leafletjs-map-with-topojson/
 var legend = L.control({
  position: "bottomright"
});
// When the layer control is added, insert a div with the class of "legend"
legend.onAdd = function() {
  var div = L.DomUtil.create("div", "info legend"),
  depth = [-10, 10, 30, 50, 70, 90];

  div.innerHTML += "<h3 style='text-align: center'>Depth</h3>"

  for (var i = 0; i < depth.length; i++) {
    div.innerHTML +=
    '<i style="background:' + getColor(depth[i] + 1) + '"></i> ' + depth[i] + (depth[i + 1] ? '&ndash;' + depth[i + 1] + '<br>' : '+');
  }
  return div;
};
legend.addTo(myMap);

});




});
