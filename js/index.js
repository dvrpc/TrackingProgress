// nav interactivity
/*const nav = document.querySelector('.nav')
const navLogo = document.querySelector('#nav-logo')

if(nav.offsetTop > 0){
    console.log('in the nav condition')
    nav.style.padding = '0 1% 0 1%'
    navLogo.src = '/img/homepage/logo_small30px.png'
}*/


/*************************** Helper Functions ************************************/
/*const scrollArrow = document.querySelector('.down-arrow')
scrollArrow.onclick = () => window.scrollTo({
    top: 825,
    behavior: 'smooth'
})*/

// toggle between charts on an indicator page
toggleChart = selected => {

    // get & isolate the Indicator name and chart # from the selected option
    let refNames = selected.options[selected.selectedIndex].value.split('-')

    // replace the underscore with a space in order to query the snippetsRef object
    refNames[0] = refNames[0].replace(/_/g, ' ')

    // get a handle on the correct chart item, baesd on indicator name and chart dataset
    let source = snippetsRef[refNames[0]].d3[refNames[1]]

    // switch case to determine which kind of vis to make (copied from snippetsREf for now - refactor into a function that can be plugged into both places to keep things DRY)
    switch (source.type) {
        case 'line and bar':
            createLinePlusBarChart(source)
            break;
        case 'stacked bar':
            createStackedBarChart(source)
            break;
        case 'line':
            createLineChart(source)
            break;
        default:
            console.log('default')
    }
}



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
        name: 'non-SOV Mode Share',
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

// reference to the snippets for quick access during fetch ( move to outside of this file eventually)
// Added a SECONDARY attribute to some chart types that will have toggleable data visualizations
    // this will let the getIndicatorSnippets switch/case know to skip over the data set & NOT create it by default
const snippetsRef = {
    'Air Quality': {
        file: 'airQuality.html',
        map: false,
        d3: [
            {
                type: 'line and bar',
                container: 'chart',
                dataSource: './data/aq_yearly.csv',
                data: [
                    {
                        'key' : 'Days Violating',
                        'bar': true,
                        'color': '#f03b20',
                        'columns': ['year', 'daysViolating'],
                    },
                    {
                        'key': 'Five Year Average',
                        'color': '#666',
                        'columns': ['year', 'fiveYearAvg'],
                    }
                ]
            },
            {
                type: 'stacked bar',
                container: 'chart2',
                dataSource: './data/aq_quarterly.csv',
                data: [
                    {
                        'key' : 'Unhealthy Sensitive Ozone',
                        'color': 'de425b',
                        'columns': ['quarterYear', 'unhealthySensitiveOzone'],
                    },
                    {
                        'key': 'Unhealthy Ozone',
                        'color': '#b62a38',
                        'columns': ['quarterYear', 'unhealthyOzone'],
                    },
                    {
                        'key': 'Very Unhealthy Ozone',
                        'color': '#750000',
                        'columns': ['quarterYear', 'veryUnhealthyOzone'],
                    }
                ]
            },
            {
                type: 'stacked bar',
                secondary: true,
                container: 'chart2',
                dataSource: './data/aq_quarterly.csv',
                data: [
                    {
                        'key' : 'Unhealthy Sensitive PM',
                        'color': 'de425b',
                        'columns': ['quarterYear', 'unhealthySensitivePM'],
                    },
                    {
                        'key': 'Unhealthy PM',
                        'color': '#b62a38',
                        'columns': ['quarterYear', 'unhealthyPM'],
                    },
                    {
                        'key': 'Very Unhealthy PM',
                        'color': '#750000',
                        'columns': ['quarterYear', 'veryUnhealthyPM'],
                    }
                ]
            }
        ]
    },
    'Vehicle Miles Traveled': {
        file: 'vehicleMilesTraveled.html', 
        map: false, 
        d3: [
            {
                // VMT/Capita
                type: 'line',
                container: 'chart',
                dataSource: './data/vmtWeb.csv',
                data: [
                    {
                        'key' : 'DVRPC Region',
                        'columns': ['year', 'vmtPerCapDVRPC']
                    },
                    {
                        'key' : 'NJ Suburbs',
                        'disabled': true,
                        'columns': ['year', 'vmtPerCapNJSuburbs']
                    },
                    {
                        'key' : 'PA Suburbs',
                        'disabled': true,
                        'columns': ['year', 'vmtPerCapPASuburbs']
                    },
                    {
                        'key' : 'Philadelphia Subregion',
                        'columns': ['year', 'vmtPerCapPhillySubregion']
                    },
                    {
                        'key' : 'Bucks Co',
                        'disabled': true,
                        'columns': ['year', 'vmtPerCapBucksCo']
                    },
                    {
                        'key' : 'Chester Co',
                        'disabled': true,
                        'columns': ['year', 'vmtPerCapChesterCo']
                    },
                    {
                        'key' : 'Delaware Co',
                        'disabled': true,
                        'columns': ['year', 'vmtPerCapDelawareCo']
                    },
                    {
                        'key' : 'Montgomery Co',
                        'disabled': true,
                        'columns': ['year', 'vmtPerCapMontgomeryCo']
                    },
                    {
                        'key' : 'Philadelphia Co',
                        'disabled': true,
                        'columns': ['year', 'vmtPerCapPhillyCo']
                    },
                    {
                        'key' : 'Burlington Co',
                        'disabled': true,
                        'columns': ['year', 'vmtPerCapBurlingtonCo']
                    },
                    {
                        'key' : 'Camden Co',
                        'disabled': true,
                        'columns': ['year', 'vmtPerCapCamdenCo']
                    },
                    {
                        'key' : 'Gloucester Co',
                        'disabled': true,
                        'columns': ['year', 'vmtPerCapGloucesterCo']
                    },
                    {
                        'key' : 'Mercer Co',
                        'disabled': true,
                        'columns': ['year', 'vmtPerCapMercerCo']
                    }
                ]
            },
            {
                // Total VMT
                type: 'line',
                secondary: true,
                container: 'chart',
                dataSource: './data/vmtWeb.csv',
                data: [
                    {
                        'key' : 'DVRPC Region',
                        'columns': ['year', 'vmtDVRPC']
                    },
                    {
                        'key' : 'NJ Suburbs',
                        'disabled': true,
                        'columns': ['year', 'vmtNJSuburbs']
                    },
                    {
                        'key' : 'PA Suburbs',
                        'disabled': true,
                        'columns': ['year', 'vmtPASuburbs']
                    },
                    {
                        'key' : 'Philadelphia Subregion',
                        'columns': ['year', 'vmtPhillySubregion']
                    },
                    {
                        'key' : 'Bucks Co',
                        'disabled': true,
                        'columns': ['year', 'vmtBucksCo']
                    },
                    {
                        'key' : 'Chester Co',
                        'disabled': true,
                        'columns': ['year', 'vmtChesterCo']
                    },
                    {
                        'key' : 'Delaware Co',
                        'disabled': true,
                        'columns': ['year', 'vmtDelawareCo']
                    },
                    {
                        'key' : 'Montgomery Co',
                        'disabled': true,
                        'columns': ['year', 'vmtMontgomeryCo']
                    },
                    {
                        'key' : 'Philadelphia Co',
                        'disabled': true,
                        'columns': ['year', 'vmtPhillyCo']
                    },
                    {
                        'key' : 'Burlington Co',
                        'disabled': true,
                        'columns': ['year', 'vmtBurlingtonCo']
                    },
                    {
                        'key' : 'Camden Co',
                        'disabled': true,
                        'columns': ['year', 'vmtCamdenCo']
                    },
                    {
                        'key' : 'Gloucester Co',
                        'disabled': true,
                        'columns': ['year', 'vmtGloucesterCo']
                    },
                    {
                        'key' : 'Mercer Co',
                        'disabled': true,
                        'columns': ['year', 'vmtMercerCo']
                    }
                ]
            },
            {
                // VMT/Vehicle
                type: 'line',
                secondary: true,
                container: 'chart',
                dataSource: './data/vmtWeb.csv',
                data: [
                    {
                        'key' : 'DVRPC Region',
                        'columns': ['year', 'vmtPerVehicleDVRPC']
                    },
                    {
                        'key' : 'NJ Suburbs',
                        'disabled': true,
                        'columns': ['year', 'vmtPerVehicleNJSuburbs']
                    },
                    {
                        'key' : 'PA Suburbs',
                        'disabled': true,
                        'columns': ['year', 'vmtPerVehiclePASuburbs']
                    },
                    {
                        'key' : 'Philadelphia Subregion',
                        'columns': ['year', 'vmtPerVehiclePhillySubregion']
                    },
                    {
                        'key' : 'Bucks Co',
                        'disabled': true,
                        'columns': ['year', 'vmtPerVehicleBucksCo']
                    },
                    {
                        'key' : 'Chester Co',
                        'disabled': true,
                        'columns': ['year', 'vmtPerVehicleChesterCo']
                    },
                    {
                        'key' : 'Delaware Co',
                        'disabled': true,
                        'columns': ['year', 'vmtPerVehicleDelawareCo']
                    },
                    {
                        'key' : 'Montgomery Co',
                        'disabled': true,
                        'columns': ['year', 'vmtPerVehicleMontgomeryCo']
                    },
                    {
                        'key' : 'Philadelphia Co',
                        'disabled': true,
                        'columns': ['year', 'vmtPerVehiclePhillyCo']
                    },
                    {
                        'key' : 'Burlington Co',
                        'disabled': true,
                        'columns': ['year', 'vmtPerVehicleBurlingtonCo']
                    },
                    {
                        'key' : 'Camden Co',
                        'disabled': true,
                        'columns': ['year', 'vmtPerVehicleCamdenCo']
                    },
                    {
                        'key' : 'Gloucester Co',
                        'disabled': true,
                        'columns': ['year', 'vmtPerVehicleGloucesterCo']
                    },
                    {
                        'key' : 'Mercer Co',
                        'disabled': true,
                        'columns': ['year', 'vmtPerVehicleMercerCo']
                    }
                ]
            }
        ]
    },
    'Highway Congestion': {file: 'highwayCongestion.html', map: true, d3: false},
    'Bridge Conditions': {file: 'bridgeConditions.html', map: false, d3: false },
    'non-SOV Commuting Mode Share': {file: 'nonSOVCommutingModeShare.html', map: false, d3: false },
    'Educational Attainment': {file: 'educationalAttainment.html', map: true, d3: false },
    'Income Inequality': {file: 'incomeInequality.html', map: false, d3: false },
    'Land Preservation': {file: 'landPreservation.html', map: false, d3: false },
    'Population Growth': {file: 'populationGrowth.html', map: true, d3: false},
    'Affordable Housing': {file: 'affordableHousing.html', map: false, d3: false},
    'Transit Conditions': {file: 'transitConditions.html', map: true, d3: false}
}

// fade/slide out elements
fade = () => {
    grid.classList.add('fade-right')
    indicatorsNav.classList.add('fade-narrow')
    categories.forEach(category => category.classList.add('fade-out'))
}

// reveal all the indicators and categories
back.onclick = () => {
    grid.style.display = 'flex'

    // clear the side nav of all it's children
    while(relatedIndicators.firstChild){
        relatedIndicators.removeChild(relatedIndicators.firstChild)
    }

    // remove it from the DOM space
    relatedIndicators.style.display = 'none'
    
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
// booleans to keep track of what extra visualizations are needed
let hasMap = false
let hasDataViz = false

// parameters: title to reference the snippetsRef lookup table, and primary class to generate the side nav
getIndicatorSnippet = (title, primaryCategory) => {
    
    // using the indicator title, get the corresponding snippet for that indicator page
    const snippetFile = snippetsRef[title].file

    // make sure snippetFile exists before going any further
    if(snippetFile){

        // get a handle on data viz metadata (if it exists)
        hasMap = snippetsRef[title].map
        hasDataViz = snippetsRef[title].d3

        let page = `./indicatorSnippets/${snippetFile}`

        // note for the future: the intial response has a URL that is base + snippetFileName.html. will be useful later IF I have to create a way to link to/from indicator views
        fetch(page).then(response => response.text()).then(snippet =>{

            // insert the HTML to update the structure & put the map and/or data viz components in place
            grid.insertAdjacentHTML('beforebegin', snippet)

            if(hasMap) {

                // get a handle on the newly created map div & use that to generate a map
                let container = document.querySelector('#map')
                generateMap(container)
            }

            if(hasDataViz){

                // loop through each chart option & call the appropriate d3 function on it
                hasDataViz.forEach(chart => {
                    if(!chart.secondary){
                        switch (chart.type) {
                            case 'line and bar':
                                createLinePlusBarChart(chart)
                                break;
                            case 'stacked bar':
                                createStackedBarChart(chart)
                                break;
                            case 'line':
                                createLineChart(chart)
                                break;
                            default:
                                console.log('default')
                        }
                    }
                })
            }
        })

        // populating the sideNav here ensures that it gets made/remade everytime you get a new indicator snippet
        // it will be made visible during the setTimer function that gets attached to each indicator. I have no idea if this logic makes any sense...
        // TBD on if this should be the first thing to happen or if it should happen after. Since the above is async, it's probably better to have it happen "after" cause it could still execute before
        generateSideNav(primaryCategory)

    }
}

let indicatorTitle;

// get a handle on the side jawn (do it here for now, will move)
const relatedIndicators = document.querySelector('.related-indicators')

// apply fade-out transition to each indicator, reveal the 'back' button & populate the new side nav w/related indicators
indicators.forEach(indicator => indicator.onclick = () => {

    fade()

    setTimeout(() => {

        // after the transition is done, display: none to remove DOM space
        grid.style.display = 'none'

        // get the title and primary class of the selected indicator
        const title = indicator.children.length ? indicatorTitle = indicator.children[0].textContent : null
        const primaryCategory = indicator.classList[1]

        back.style.display = 'block'

        getIndicatorSnippet(title, primaryCategory)
    }
    , 1500)
})

generateSideNav = primaryCategory => {

    // using the classlist from the clicked indicator, add all others w/same primary indicator (first on the list, for now)
    indicators.forEach(indicator => {

        if(indicator.classList.contains(primaryCategory)){

            // get a handle on the necessary info (skip dummy data for now...ugh)
            const linkTitle = indicator.children[0] ? indicator.children[0].textContent : 'fake'
            const primaryCategory = indicator.classList[1]

            //  create a link to the indicator page that will go on the side bar
            let sideLink = document.createElement('a')
            sideLink.style.padding = '10% 0'
            sideLink.style.cursor = 'pointer'

            // truncate the title where needed
            let truncatedTitle = linkTitle.length > 7 ? linkTitle.substring(0, 6) + '...' : linkTitle
            sideLink.textContent = truncatedTitle

            // clicking a link removes the old indicator page, renders the new indicator page & refreshes the sideNav links
            sideLink.onclick = () => {
                // clear the current indicator snippet
                const indicatorDetails = document.querySelector('.indicators-snippet')
                if(indicatorDetails) indicatorDetails.remove()

                // clear the side nav of all it's children
                while(relatedIndicators.firstChild){
                    relatedIndicators.removeChild(relatedIndicators.firstChild)
                }

                // update with the new snippet which in turn updates the side nav
                getIndicatorSnippet(linkTitle, primaryCategory)
            }
            
            // add hover effect that immediately triggers and clearly shows the full title for that indicator
            //sideLink.onmouseover = () => 

            relatedIndicators.appendChild(sideLink)
        }
    })

    // make sideNav list (which was populated in the getIndicatorSnippet function) visible
    relatedIndicators.style.display = 'flex'
    relatedIndicators.style.flexDirection = 'column'
    relatedIndicators.style.textAlign = 'center'
    relatedIndicators.style.color = '#f7f7f7'
}



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
createStackedBarChart = source => {

    // the name of the div containing the svg for d3 to paint on
    const container = `.${source.container} svg`

    // purge the old data (or create the empty arrays if its the 1st time rendering) to prevent the weird double line situation from happening
    source.data.forEach(series => series.values = [])

    d3.csv(source.dataSource, rows => {

        // create a values field based on the desired column as defined in the reference object
        source.data.forEach(series => {
            series.values.push([rows[series.columns[0]], rows[series.columns[1]] === 'NA' ? null : +rows[series.columns[1]]])
        })

    }, csvObj => {

        // errors are coming from x-time being improperly converted.
        // see here: https://stackoverflow.com/questions/19459687/understanding-nvd3-x-axis-date-format
        // for how to (possibly) resolve, and change up chart.xAxis on line 407. 

        nv.addGraph(() => {
            let chart = nv.models.multiBarChart()
                .margin({top: 35, right: 55, bottom: 35, left: 55})
                // each series has format [year, values] so set the axes accordingly
                .x(d => d[0])
                .y((d, i) => d[1])
                // hide controls b/c were not interested in grouped bar (also it gets cluttered on smaller screens to this is a double win)
                .showControls(false)
                .clipEdge(true)
                .stacked(true)

            // dates coming in as mm/dd/yyyy
            chart.xAxis.tickFormat(d => d3.time.format('%d %b %Y')(new Date(d)));
    
            d3.select(container).datum(source.data).transition().duration(500).call(chart)

            nv.utils.windowResize(chart.update)

            return chart
        })
    })
}

createLinePlusBarChart = source => {

    // the name of the div containing the svg for d3 to paint on
    const container = `.${source.container} svg`

    // purge the old data (or create the empty arrays if its the 1st time rendering) to prevent the weird double line situation from happening
    source.data.forEach(series => series.values = [])

    // extract the column names
    let barSource = source.data[0].columns
    let lineSource = source.data[1].columns

    d3.csv(source.dataSource, rows => {

        source.data[0].values.push([+rows[barSource[0]], +rows[barSource[1]]])
        source.data[1].values.push([+rows[lineSource[0]], rows[lineSource[1]] === 'NA' ? null : +rows[lineSource[1]] ])

    }, csvObj => {

        nv.addGraph(() => {
            let chart = nv.models.linePlusBarChart()
                // for some reason, setting left margin to 0 cuts off the axis a little bit (???) so some left margin + container offset hack will be 
                // needed to get this to center correctly
                .margin({top: 35, right: 65, bottom: 35, left: 65})
                // each series has format [year, values] so set the axes accordingly
                .x(d => d[0])
                .y((d, i) => d[1])


            /*
                The current data set just has days violating so they don't need notation, but future datasets may have values of $ or % or degrees or whatever, so 
                there will eventually be a need to implement some kind of parameter that sets the axes to the correct label. But that's a future problem

            chart.y1Axis.tickFormat(d3.format(',f'));

            chart.y2Axis.tickFormat(function(d) { return '$' + d3.format(',f')(d) });
            */

            d3.select(container).datum(source.data).transition().duration(500).call(chart)

            nv.utils.windowResize(chart.update)

            return chart
        })
    })
}

createLineChart = source => {

    // the name of the div containing the svg for d3 to paint on
    const container = `.${source.container} svg`

    // purge the old data (or create the empty arrays if its the 1st time rendering) to prevent the weird double line situation from happening
    source.data.forEach(series => series.values = [])

    d3.csv(source.dataSource, rows => {

        // extract information from the columns set in the snippetsRef lookup table
        source.data.forEach(series => {
            series.values.push([ +rows[series.columns[0]], rows[series.columns[1]] === 'NA' ? null : +rows[series.columns[1]] ])
        })

    }, csvObj => {

        nv.addGraph(() => {
            let chart = nv.models.lineChart()
                .margin({top: 35, right: 65, bottom: 35, left: 85})
                .useInteractiveGuideline(true)
                .showYAxis(true)
                .clipEdge(false)
                .forceY(0)
                .x(d => d[0])
                .y((d, i) => d[1])

            // format y-axis for large numbers
            chart.yAxis.tickFormat(d3.format(','))

            d3.select(container).datum(source.data).transition().duration(500).call(chart)

            nv.utils.windowResize(chart.update)

            return chart
        })
    })
}