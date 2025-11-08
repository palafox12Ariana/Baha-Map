mapboxgl.accessToken = 'pk.eyJ1IjoicGFsYWZveDEyIiwiYSI6ImNtaDlybzE3ZjFma2UybG9hcXo2a3VqcXQifQ.dnUqdJp2dxXWYw2nJKqFvA';
const map = new mapboxgl.Map({
  container: 'map', // container ID
  style: 'mapbox://styles/palafox12/cmhp7he9v005f01re7z2m13x5', // mapbox://styles/palafox12/cmhp7he9v005f01re7z2m13x5
  center: [-122.27, 37.87], // starting position [lng, lat]. Note that lat must be set between -90 and 90
  zoom: 9 // starting zoom
    });