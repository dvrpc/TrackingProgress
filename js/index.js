// nav interactivity
/*const nav = document.querySelector('.nav')
const navLogo = document.querySelector('#nav-logo')

if(nav.offsetTop > 0){
    console.log('in the nav condition')
    nav.style.padding = '0 1% 0 1%'
    navLogo.src = '/img/homepage/logo_small30px.png'
}*/


/*************************** Helper Functions ************************************/
const scrollArrow = document.querySelector('.down-arrow')
scrollArrow.onclick = () => window.scrollTo({
    top: 825,
    behavior: 'smooth'
})

// Filter rows helper function
// as is, this is not generalized b/c it runs parseInt on the jawns & not every data set will have numbers as the values

// the biggest challenge at this point is extracting the Value properties as variables. d3.csv is async yet doesn't accept any async functionality. you can't .then off of it or anything.
filterColumns = (dataset, column1, column2) => {

    // to make this more general purpose, get a handle on args (can & will be filtering more than 2 columns)
    // use [0] for dataset & then have the return object loop thru the rest to create the filtered columns csvObj
    let data;
    let intervalID;
    let dataReady = false;
   
    d3.csv(dataset, rows => {
        return {0: +rows[column1], 1: +rows[column2]}
    }, csvObj => {
        data = csvObj
        // could set a window global? that sounds like a mess waiting to happen tho...
    })

    // idea: have this callback in the global scope, call it in the constructor or whatever ikd this sucsk
    returnCSV = data => data
    
    // slightly more elegant hack: setInterval to check data until it exists, then return & clearInterval()
    intervalID = window.setInterval(() => {
        if(data){
            // clearInteral & return data
            window.clearInterval(intervalID)

            returnCSV(data)
        }
    }, 200)

}

console.log('return from test ', filterColumns('./data/aq_yearly.csv', 'year', 'daysViolating'))


/************************ Dashboard Functionality *********************************/
const grid = document.querySelector('.indicators-grid')
const categories = [... document.querySelectorAll('.icon-set')]
const topSoFar = [
    {
        name: 'Vehicle Miles Traveled',
        indicator: 'transportation-indicator'
    },
    {
        name: 'Highway Congestion',
        indicator: 'transportation-indicator+economy-indicator'
    },
    {
        name: 'Bridge Conditions',
        indicator: 'transportation-indicator+economy-indicator'
    },
    {
        name: 'non-SOV Commuting Mode Share',
        indicator: 'environment-indicator+community-indicator+transportation-indicator'
    },
    {
        name: 'Educational Attainment',
        indicator: 'community-indicator+economy-indicator+equity-indicator'
    },
    {
        name: 'Income Inequality',
        indicator: 'community-indicator+economy-indicator+equity-indicator'
    },
    {
        name: 'Land Preservation',
        indicator: 'community-indicator+environment-indicator+transportation-indicator'
    },
    {
        name: 'Population Growth',
        indicator: 'environment-indicator+community-indicator+economy-indicator'
    },
    {
        name: 'Air Quality',
        indicator: 'environment-indicator+community-indicator+equity-indicator'
    },
    {
        name: 'Affordable Housing',
        indicator: 'community-indicator+economy-indicator+equity-indicator'
    },
    {
        name: 'Transit Conditions',
        indicator: 'economy-indicator+transportation-indicator'
    }
]

// rerence to the clicked category
let clickedRef;

// dummy data to loop thru and create 36 sub grids
for(var i = 0; i < 36; i++){
    let gridItem = document.createElement('div')
    gridItem.classList.add('indicators-grid-item')

    if(topSoFar[i]) {

        // add all the necessary indicator classes to it
        let classes = topSoFar[i].indicator.split('+')
        
        // loop thru each one if there are multiple
        if(classes.length > 1){
            classes.forEach(className => gridItem.classList.add(className))
        }else{
            gridItem.classList.add(topSoFar.indicator)
        }

        const title = document.createElement('p')
        title.classList.add('indicators-title')
        title.textContent = topSoFar[i].name
        gridItem.appendChild(title)
        grid.appendChild(gridItem)

    // make up the rest since I only have partial data for 11 indicators so far.
    // this dummy data situation is getting out of hand
    }else{     
        if(i >= 11 && i < 16) gridItem.classList.add('economy-indicator')
        if(i >= 16 && i < 21) gridItem.classList.add('environment-indicator')
        if(i >= 21 && i < 26) gridItem.classList.add('community-indicator')
        if(i >= 26 && i < 31) gridItem.classList.add('transportation-indicator')
        if(i >= 31) gridItem.classList.add('equity-indicator')
        grid.appendChild(gridItem)
    }
}

// get a handle on each indicator after they've been generated ^
const indicators = [... document.querySelectorAll('.indicators-grid-item')]

// function to display/hide indicators based on which category is clicked
toggleIndicators = element => {

    // mark the category as active & remove it from another element (if applicable)
    const allCategories = [... element.parentNode.children]
    allCategories.forEach(category => {
        if(category != element){
            if(category.classList.contains('category-active')) category.classList.remove('category-active')
        }
    })
    element.classList.toggle('category-active')

    // get a handle on the id of the clicked div in order to grab its corresponding indicators
    let category = element.id.split('-')[0]+'-indicator'

    // handle 3 conditions & expected behaviors: 
        // all options visible & user clicks a category --> filters to just that categories indicators
        // category already clicked & user clicks another one --> filters to just the new categories indicators
        // category already clicked & user clicks it again  --> show all indicators
    if(clickedRef === element){
        indicators.forEach(indicator => indicator.classList.remove('hidden'))
        clickedRef = ''
    }else{    
        indicators.forEach(indicator => {
            if(!indicator.classList.contains(category)) indicator.classList.add('hidden')
            else indicator.classList.remove('hidden')
        })
        clickedRef = element
    }
}

// apply filter toggle to each category
categories.forEach(category => category.onclick = () => toggleIndicators(category))



/************************ Toggle Indicators View *********************************/
const indicatorsNav = document.querySelector('.indicators-nav')
const back = document.querySelector('.back-to-dash')

// reference to the snippets for quick access during fetch
// the functions inside of data are being invoked immediately, so this snippetsRef object will have to be stored OUTSIDE of the main project (db?) otherwise every single
// data set will be parsed on page load which is definitely not desirable
const snippetsRef = {
    // VMT re-structured to mimic the real response object
    'Vehicle Miles Traveled': {
        file: 'vehicleMilesTraveled.html',
        map: false,
        d3: [
            {
                legend: 'no legend',
                title: 'Sample Line Chart',
                xLabel: 'Time',
                yLabel: 'Things',
                type: 'line and bar',
                series: null,
                data: [
                    {
                        key : "Quantity" ,
                        bar: true,
                        // Goal: values is the co-ordinate pairs that arise as a result of d3.csv
                            // if that proves impossible/inefficient, have values be a refernce to the data set and rows & then in the create function loop thru.
                        values: 'lakjflajef'
                    },
                    {
                        key: "Price" ,
                        values: ['./data/aq_quarterly.csv', 'year', 'fiveYearAvg']
                    }
                ]
            }
        ]
    },
    'Highway Congestion': {file: 'highwayCongestion.html', map: true, d3: false },
    'Bridge Conditions': {file: 'bridgeConditions.html', map: false, d3: false },
    'non-SOV Commuting Mode Share': {file: 'nonSOVCommutingModeShare.html', map: false, d3: false },
    'Educational Attainment': {file: 'educationalAttainment.html', map: true, d3: false },
    'Income Inequality': {file: 'incomeInequality.html', map: false, d3: false },
    'Land Preservation': {file: 'landPreservation.html', map: false, d3: false },
    'Population Growth': {file: 'populationGrowth.html', map: true, d3: false},
    'Air Quality': {file: 'airQuality.html', map: false, d3: false},
    'Affordable Housing': {file: 'affordableHousing.html', map: false, d3: false},
    'Transit Conditions': {file: 'transitConditions.html', map: true, d3: false}
}
let indicatorTitle;

// booleans to keep track of what extra visualizations are needed
let hasMap = false
let hasDataViz = false

// fade/slide out elements
fade = () => {
    grid.classList.add('fade-right')
    indicatorsNav.classList.add('fade-narrow')
    categories.forEach(category => category.classList.add('fade-out'))
}

// reveal all the indicators and categories
back.onclick = () => {
    grid.style.display = 'flex'
    setTimeout(() => {

        // remove the indicator snippet from the DOM tree // again, check if it exists b/c most of the times it wont for now since the tiles are all blank
        const indicatorDetails = document.querySelector('.indicators-snippet')
        if(indicatorDetails) indicatorDetails.remove()
        back.style.display = 'none'
        
        // reveal the indicators grid, widen the sideNav and reveal the categories
        indicatorsNav.classList.remove('fade-narrow')
        grid.classList.remove('fade-right')
        categories.forEach(category => category.classList.toggle('fade-out'))
    }, 100)
}

// fetch indicator HTML based on the title of the clicked indicator
getIndicatorSnippet = title => {
    
    // using the indicator title, get the corresponding snippet for that indicator page
    const snippet = snippetsRef[title].file

    // make sure snippet exists before going any further
    if(snippet){

        // trigger visualization conditions
        hasMap = snippetsRef[title].map
        hasDataViz = snippetsRef[title].d3

        let page = `./indicatorSnippets/${snippet}`

        // note for the future: the intial response has a URL that is base + snippetFileName.html. will be useful later IF I have to create a way to link to/from indicator views
        fetch(page).then(response => response.text()).then(snippet =>{
            grid.insertAdjacentHTML('beforebegin', snippet)
            if(hasMap) {
                // get a handle on the newly created map div & use that to generate a map
                let container = document.querySelector('#map')
                generateMap(container)
            }
            if(hasDataViz){
                // loop through each chart option in d3
                hasDataViz.forEach(chart => {
                    switch (chart.type) {
                        case 'line and bar':
                            createLinePlusBarGraph(chart.data)
                            break;
                        case 'bar':
                            createBarGraph(chart.data)
                            break;
                        case 'line':
                            createLineGraph(chart.data)
                            break;
                    }
                })
            }
        })
    }
}

// apply fade-out transition to each indicator & reveal 'back' button
indicators.forEach(indicator => indicator.onclick = () => {
    fade()

    setTimeout(() => {

        // after the transition is done, display: none to remove DOM space
        grid.style.display = 'none'

        // check for title for now b/c most of the indicator tiles are blank
        indicator.children.length ? indicatorTitle = indicator.children[0].textContent : null
        if(indicatorTitle) getIndicatorSnippet(indicatorTitle)

        const indicatorSnippet = document.querySelector('.indicators-snippet')
        back.style.display = 'block'
    }
    , 1500)
})



/************************ Map Content for Indicators *********************************/
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

// helper functions for different map types
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



/************************ D3 Content for Indicators *********************************/
createBarGraph = source => {

}

createLineGraph = source => nv.addGraph( () => {
    console.log(source)
    
    // initialize the chart & allow users to hover over areas for details instead of having to hover over specific points
    let chart = nv.models.lineChart().useInteractiveGuideline(true)
})

createLinePlusBarGraph = source => nv.addGraph( () => {
    console.log('source passed into createLinePlusBarGraph ', source)

    let chart = nv.models.linePlusBarChart().color(d3.scale.category10().range());

    // .call(chart) (and maybe .transition().duration(500)) seems essential for actually rendering the chart
    d3.select('.chart svg').datum(source.data).transition().duration(500).call(chart)

    // these two bits are common to everything...gonna be some not DRY code
    nv.utils.windowResize(chart.update)
    return chart
})

createScatterPlot = source => {

}

createBubbleChart = source => {

}

createSunburst = source => {

}