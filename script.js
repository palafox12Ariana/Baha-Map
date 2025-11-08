mapboxgl.accessToken = 'pk.eyJ1IjoicGFsYWZveDEyIiwiYSI6ImNtaDlybzE3ZjFma2UybG9hcXo2a3VqcXQifQ.dnUqdJp2dxXWYw2nJKqFvA';
const map = new mapboxgl.Map({
  container: 'map', // container ID
  style: 'mapbox://styles/palafox12/cmhp7he9v005f01re7z2m13x5', // mapbox://styles/palafox12/cmhp7he9v005f01re7z2m13x5
  center: [-122.27, 37.87], // starting position [lng, lat]. Note that lat must be set between -90 and 90
  zoom: 9 // starting zoom
    });

map.on('load', function() {
    map.addSource('points-data', {
        type: 'geojson',
        data: 'https://raw.githubusercontent.com/palafox12Ariana/Baha-Map/refs/heads/main/map%20(1).geojson'
    });

map.addLayer({
        id: 'points-layer',
        type: 'circle',
        source: 'points-data',
        paint: {
            'circle-color': '#4264FB',
            'circle-radius': 6,
            'circle-stroke-width': 2,
            'circle-stroke-color': '#ffffff'
        }
    });
// Add click event for popups
    map.on('click', 'points-layer', (e) => {

    });

});
// Add click event for popups
    map.on('click', 'points-layer', (e) => {
          const coordinates = e.features[0].geometry.coordinates.slice();
            const properties = e.features[0].properties;

    });
 map.on('click', 'points-layer', (e) => {
        // Copy coordinates array
        const coordinates = e.features[0].geometry.coordinates.slice();
        const properties = e.features[0].properties;

        // Create popup content using the actual data properties
        const popupContent = `
            <div>
                <h3>${properties.Landmark}</h3>
                <p><strong>Address:</strong> ${properties.Address}</p>
                <p><strong>Architect & Date:</strong> ${properties.Architect_Date}</p>
                <p><strong>Designated:</strong> ${properties.Designated}</p>
                ${properties.Link ? `<p><a href="${properties.Link}" target="_blank">More Information</a></p>` : ''}
                ${properties.Notes ? `<p><strong>Notes:</strong> ${properties.Notes}</p>` : ''}
            </div>
        `;

    });
// Add click event for popups
    map.on('click', 'points-layer', (e) => {
        // Copy coordinates array
        const coordinates = e.features[0].geometry.coordinates.slice();
        const properties = e.features[0].properties;

        // Create popup content using the actual data properties
        const popupContent = `
            <div>
                <h3>${properties.Landmark}</h3>
                <p><strong>Address:</strong> ${properties.Address}</p>
                <p><strong>Architect & Date:</strong> ${properties.Architect_Date}</p>
                <p><strong>Designated:</strong> ${properties.Designated}</p>
                ${properties.Link ? `<p><a href="${properties.Link}" target="_blank">More Information</a></p>` : ''}
                ${properties.Notes ? `<p><strong>Notes:</strong> ${properties.Notes}</p>` : ''}
            </div>
        `;

        new mapboxgl.Popup()
            .setLngLat(coordinates)
            .setHTML(popupContent)
            .addTo(map);
    });

    // Change cursor to pointer when hovering over points
    map.on('mouseenter', 'points-layer', () => {
        map.getCanvas().style.cursor = 'pointer';
    });

    // Change cursor back when leaving points
    map.on('mouseleave', 'points-layer', () => {
        map.getCanvas().style.cursor = '';
    });
