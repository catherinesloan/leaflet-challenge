// Store our API endpoint inside queryUrl
var queryUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

// Creating my map
// Making the centre Salt Lake City 40.7608° N, 111.8910° W -> west and south co-ords need to be made negative
var myMap = L.map("map", {
  center: [
    40.7608, -111.8910
  ],
  zoom: 5
});

// Adding a tile layer (the background map image) to our map, using lightmap rather than street map
// Setting this as a variable and adding it to myMap
// why is API_KEY not working??
var lightmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "light-v10",
    accessToken: API_KEY
  });
lightmap.addTo(myMap);

// BASIC MAP IS CREATED NOW NEED TO ADD MARKERS AND A LEGEND
// REMEMBERING TO BIND THE POP UP TO THE MARKERS

// Perform a GET request to the query URL, class 17.1 activity 10
// dot notation gives us access to features which holds properties and geometry of earthquakes
d3.json(queryUrl, function(data) {
  var features = data.features;
  // console.log(features);
  
  // Setting colours for different magnitudes
  // class 17.1 activity 7, looping through the length of features as this is how many earthquakes there are
  for (var i = 0; i < features.length; i++) {
    // conditionals for earthquakes magnitude colour
    var magColour = "";
    // setting magnitude as a variable
    var magnitude = features[i].properties.mag
    // accessing the magnitude size in properties
    // chose colours from https://www.w3schools.com/tags/ref_colornames.asp
    if (magnitude >= 5) {
      magColour = "#DC143C";
    } else if (magnitude  >= 4) {
      magColour = "#FF8C00";
    } else if (magnitude  >= 3) {
      magColour = "#E9967A";
    } else if (magnitude  >= 2) {
      magColour = "#F0E68C";
    } else if (magnitude  >= 1) {
      magColour = "#90EE90";
    } else {
      magColour = "#00FA9A";
    }

    // Function to determine marker size based on magnitude
    // Declared magnitude as a variable above
    function markerSize(magnitude) {
      return magnitude * 10000;
    }

    // Looking at the url in https://jsonformatter.curiousconcept.com/
    // the location of the earthquakes is in geometry -> corodinates
    // the first coord is longitude and second is latitude, need it as (latitude,longitude)
    var coords = [features[i].geometry.coordinates[1], features[i].geometry.coordinates[0]] 

    // defining a circle marker in each set of coordinates
    var marker = L.circle(coords, {
      radius: markerSize(magnitude), // predefined function, passing in magnitude
      fillOpacity: 0.5,
      color: magColour, // from if statement
      fillColor: magColour 
      })
      // binding a popup from class 17.1 activity 10
      // added magnitude as a heading, + new Date converts date to AEST
      .bindPopup("<h3>" + features[i].properties.place + 
      "<br>" + "Magnitude: " + features[i].properties.mag +
      "</h3><hr><p>" + new Date(features[i].properties.time));
      
      // adding each marker to the map
      marker.addTo(myMap);
    };


    // LEGEND - code taken from link below, changed variable names
    // https://gis.stackexchange.com/questions/193161/add-legend-to-leaflet-map

    // Colours for legend same colours as markers
    function legendColours(m) {
      return m > 5 ? "#DC143C" :
             m > 4 ? "#FF8C00" :
             m > 3 ? "#E9967A" :
             m > 2 ? "#F0E68C" :
             m > 1 ? "#90EE90" :
                      "#00FA9A";
    }
    
    // Setting legend as a variable, remember to add to myMap
    var legend = L.control({position: "bottomright"});

    legend.onAdd = function(map) {
      var div = L.DomUtil.create("div", "legend"),
        // 6 different magnitude sizes
        magnitudes = [0, 1, 2, 3, 4, 5]
        labels = [];

        // looping throiugh the length of different size magnitudes
        for (var i = 0; i < magnitudes.length; i++) {
          div.innerHTML +=
                '<i style="background:' + legendColours(magnitudes[i] + 1) + '"></i> ' +
                magnitudes[i] + (magnitudes[i + 1] ? '&ndash;' + magnitudes[i + 1] + '<br>' : '+');
      }
      return div;
      
    };
      
    // Add the info legend to the map
    // Remember to add to CSS or legend won't appear in html
    legend.addTo(myMap);
  
  });




