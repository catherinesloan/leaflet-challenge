# leaflet-challenge

The USGS provides earthquake data in a number of different formats, updated every 5 minutes. 
URL of the JSON representation of the data for 'All Earthquakes from the Past 7 Days': https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson 

A useful link I use to inspect the JSON https://jsonformatter.curiousconcept.com/

You will need a config.js file stored in relevant location for index.html to read in 
const API_KEY = "your mapbox API key here";


Leaflet-Step-1

Created a map using Leaflet that plots all of the earthquakes from the data set based on their longitude and latitude.

The data markers reflect the magnitude of the earthquake in their size and color. Earthquakes with higher magnitudes appear larger and darker in color.

Includes popups that provide additional information about the earthquake when a marker is clicked.

A legend that provides context for my map data.

Notes: my index.html would not read in my API_KEY when I had logic.js and config.js saved in a folder named 'js' within the static folder. Instead, all files except CSS are in the parent folder with HTML file. Path has been changed to reflect this 


Leaflet-Step-2 (BONUS)

Notes: Not yet completed this part, API_KEY appears to be read in successfully with proper folder structure

TO DO ...
Plot a second data set on the map to illustrate the relationship between tectonic plates and seismic activity. 

Pull in a second data set and visualize it along side original set of data. Data on tectonic plates can be found at https://github.com/fraxen/tectonicplates.

Plot a second data set on the map.

Add a number of base maps to choose from as well as separate out our two different data sets into overlays that can be turned on and off independently.

Add layer controls to our map.



