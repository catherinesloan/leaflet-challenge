# leaflet-challenge

## Visualising Data with Leaflet

## Background:
Welcome to the United States Geological Survey, or USGS for short! The USGS is responsible for providing scientific data about natural hazards, the health of our ecosystems and environment; and the impacts of climate and land-use change. Their scientists develop new methods and tools to supply timely, relevant, and useful information about the Earth and its processes.

The USGS provides earthquake data in a number of different formats, updated every 5 minutes. 
URL of the JSON representation of the data for 'All Earthquakes from the Past 7 Days': https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson 

## Task:
The USGS is interested in building a new set of tools that will allow them  to visualise their earthquake data. They collect a massive amount of data from all over the world each day, but they lack a meaningful way of displaying it. Their hope is that being able to visualise their data will allow them to better educate the public and other government organizations (and hopefully secure more funding..) on issues facing our planet.


## Output:
A config.js file to read in mapbox API key

**Part 1**
[logic.js](https://github.com/catherinesloan/leaflet-challenge/blob/main/Leaflet-Step-1/logic.js)
1. Created a map using Leaflet that plots all of the earthquakes from the data set based on their longitude and latitude
   - The data markers reflect the magnitude of the earthquake in their size and color
   - Includes popups that provide additional information about the earthquake when a marker is clicked
   - A legend that provides context for my map data.

**Part 2**
[logic.js](https://github.com/catherinesloan/leaflet-challenge/blob/main/Leaflet-Step-1/logic.js)

To Do ...
- Plot a second data set on the map to illustrate the relationship between tectonic plates and seismic activity
- Pull in a second data set and visualise it along side original set of data. Data on tectonic plates can be found at https://github.com/fraxen/tectonicplates
- Plot a second data set on the map
- Add a number of base maps to choose from as well as separate out the two different data sets into overlays that can be turned on and off independently
- Add layer controls to the map.

_Notes: Not yet completed this part, API_KEY appears to be read in successfully with proper folder structure_
_A useful link I used to inspect the JSON https://jsonformatter.curiousconcept.com/_



