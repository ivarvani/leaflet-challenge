# leaflet-challenge


https://ivarvani.github.io/leaflet-challenge/Leaflet-Part-1/index <br/>
https://ivarvani.github.io/leaflet-challenge/Leaflet-Part-2/index

### Background

The United States Geological Survey, or USGS for short, is responsible for providing scientific data about natural hazards, 
the health of our ecosystems and environment, and the impacts of climate and land-use change. 
Their scientists develop new methods and tools to supply timely, relevant, and useful information about the Earth and its processes.

The USGS is interested in building a new set of tools that will allow them to visualize their earthquake data. 
They collect a massive amount of data from all over the world each day, but they lack a meaningful way of displaying it.
In this challenge, you have been tasked with developing a way to visualize USGS data that will allow them to better educate the public 
and other government organizations (and hopefully secure more funding) on issues facing our planet.


The USGS is interested in building a new set of tools that will allow them to visualize their earthquake data. 
They collect a massive amount of data from all over the world each day, but they lack a meaningful way of displaying it. 
In this task with developing a way to visualize USGS data that will allow them to better educate the public and 
other government organizations (and hopefully secure more funding) on issues facing our planet.


The particular project is  broken into two parts:

Part 1: Create the Earthquake Visualization
[**Click Here**]( https://ivarvani.github.io/leaflet-challenge/Leaflet-Part-1/index) to explore the web page . <br/>

Part 2: Gather and Plot More Data (Optional with no extra points earning)
[**Click Here**]( https://ivarvani.github.io/leaflet-challenge/Leaflet-Part-2/index) to explore the web page . <br/>

### Leafelt-part-1: Create the Earthquake Visualization

1.  Got the dataset. To do so, following  steps has been done :

The USGS provides earthquake data in a number of different formats, updated every 5 minutes.
Visit the USGS GeoJSON FeedLinks to an external site. page and choose a dataset to visualize. 
The following image is an example screenshot of what appears when you visit this link:

<img width="1100" alt="image" src="https://user-images.githubusercontent.com/116701851/229041763-e9cdb0de-aa57-4d66-a87a-a1bb123017ea.png">


By clicking the data  "All Earthquakes from the Past 7 Days a json representation of data is been given.
By pulling  the URL of the json Data the visualization is done.

2. Imported and visualized the data by doing the following:

Using Leaflet, created a map that plots all the earthquakes from your dataset based on their longitude and latitude.

 Data markers reflect the magnitude of the earthquake by their size and the depth of the earthquake by color. 
 Earthquakes with higher magnitudes appear larger, and earthquakes with greater depth  appear darker in color.


Included popups that provide additional information about the earthquake when its associated marker is clicked.

Created a legend that will provide context for your map data.

<img width="1076" alt="image" src="https://github.com/ivarvani/leaflet-challenge/blob/main/Output/Leaflet_part_1_output.png">


### Leafelt-part-2: Gather and Plot More Data 

Plot a second dataset on your map to illustrate the relationship between tectonic plates and seismic activity.
Have pulled  the  dataset and visualized it alongside the original data. 
Data on tectonic plates can be found at https://github.com/fraxen/tectonicplatesLinks to an external site..


Performed the following tasks:

Plotted the tectonic plates dataset on the map in addition to the earthquakes.

Added other base maps to choose from.

Put each dataset into separate overlays that can be turned on and off independently.

Added layer controls to the map.

<img width="1122" alt="image" src="https://github.com/ivarvani/leaflet-challenge/blob/main/Output/Leaflet_part_2_output.png">
