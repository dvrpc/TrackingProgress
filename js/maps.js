/*************************************************************************************/
/************************ Map Content for Indicators *********************************/
/*************************************************************************************/
generateMap = (container, geoJSON) => {
    mapboxgl.accessToken = 'pk.eyJ1IjoibW1vbHRhIiwiYSI6ImNqZDBkMDZhYjJ6YzczNHJ4cno5eTcydnMifQ.RJNJ7s7hBfrJITOBZBdcOA'

    const map = new mapboxgl.Map({
        container: container,
        style: 'mapbox://styles/mapbox/outdoors-v9',
        attributionControl: true,
        // DVRPC center but add a || geoJSON.center or whatever to center it according to the project geometry
        center: [-75.2273, 40.071],
        zoom: 8.82
    })

    // create helper functions map types (fill, circle)
        // need some kind of identifier in the response object to determine what kind of layer to add 
    if(geoJSON){
        // add base source (?) 
        map.addSource('', {
            type: 'geojson',
            data: geoJSON
        })

        switch(geoJSON.layerType) {
            case 'fill':
                map.addLayer(addFillLayer(geoJSON))
                break
            case 'circle':
                map.addLayer(addCircleLayer(geoJSON))
                break
            default:
                console.log('wut wut wut')
        }
    }
}

addFillLayer = id => {
    return {
        'id': id,
        type: 'fill',
        source: id,
        'paint': {
            'fill-color': '#6fb8b9',
            'fill-opacity': 0.7
        }
    }
}

addCircleLayer = id => {
    return {
        'id': id,
        'type': 'circle',
        'source': id,
        'paint': {
            'circle-color': '#B6C1C6',
            'circle-opacity': 0.7
        }
    }
}