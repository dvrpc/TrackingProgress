/*********************************************************************************/
/*********************************Imports*****************************************/
/*********************************************************************************/
import { toggleChart } from './helpers.js'
import * as graphs from './viz.js'



/**********************************************************************************/
/************************ Dashboard Functionality *********************************/
/**********************************************************************************/
const grid = document.querySelector('.indicators-grid')
const categories = [... document.querySelectorAll('.icon-set')]
const topSoFar = [
    {
        name: 'Vehicle Miles Traveled',
        indicator: 'transportation-indicator'
    },
    {
        name: 'Vehicle Crashes',
        indicator: 'transportation-indicator+community-indicator+economy-indicator+equity-indicator'
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
const toggleIndicators = element => {

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




/*********************************************************************************/
/************************ Toggle Indicators View *********************************/
/*********************************************************************************/
// get a handle on the all the necessary elements & variables for toggles
const indicatorsNav = document.querySelector('.indicators-nav')
const back = document.querySelector('.back-to-dash')
const relatedIndicators = document.querySelector('.related-indicators')

// booleans to keep track of what visualizations are needed
let hasMap = false
let hasDataViz = false
let indicatorTitle;

// reference to the snippets for quick access during fetch ( move to outside of this file eventually)
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
    'Educational Attainment': {
        file: 'educationalAttainment.html',
        map: false,
        d3: [
            {
                // HS levels 
                type: 'line',
                container: 'chart',
                dataSource: './data/edattainHS.csv',
                data: [
                    {
                        'key': 'Bucks',
                        'columns': ['year', 'hsRateBucksCo']
                    },
                    {
                        'key': 'Burlington',
                        'columns': ['year', 'hsRateBurlingtonCo']
                    },
                    {
                        'key': 'Camden',
                        'columns': ['year', 'hsRateCamdenCo']
                    },
                    {
                        'key': 'Chester',
                        'columns': ['year', 'hsRateChesterCo']
                    },
                    {
                        'key': 'Delaware',
                        'columns': ['year', 'hsRateDelawareCo']
                    },
                    {
                        'key': 'Gloucester',
                        'columns': ['year', 'hsRateGloucesterCo']
                    },
                    {
                        'key': 'Mercer',
                        'columns': ['year', 'hsRateMercerCo']
                    },
                    {
                        'key': 'Montgomery',
                        'columns': ['year', 'hsRateMontgomeryCo']
                    },
                    {
                        'key': 'Philadelphia',
                        'columns': ['year', 'hsRatePhiladelphiaCo']
                    }
                ]
            },
            {
                type: 'stacked area',
                container: 'chart2',
                dataSource: './data/edattainComprehensive.csv',
                data: [
                    {
                        'key': 'Less than High School',
                        'columns': ['year', 'DVRPC-Less than High School']
                    },
                    {
                        'key': 'Some High School',
                        'columns': ['year', 'DVRPC-Some High School']
                    },
                    {
                        'key': 'Graduated High School',
                        'columns': ['year', 'DVRPC-Graduated High School']
                    },
                    {
                        'key': 'Some College',
                        'columns': ['year', 'DVRPC-Some College']
                    },
                    {
                        'key': "Associate's Degree",
                        'columns': ['year', 'DVRPC-Associates Degree']
                    },
                    {
                        'key': "Bachelor's Degree",
                        'columns': ['year', 'DVRPC-Bachelors Degree']
                    },
                    {
                        'key': 'Graduate/Professional Degree',
                        'columns': ['year', 'DVRPC-Graduate/Professional Degree', 'New Jersey Suburbs-Graduate/Professional Degree']
                    }
                ]
            }
        ]
    },
    'Vehicle Crashes': {
        file: 'vehicleCrashes.html',
        map: false,
        d3: [
        // multichart format: individual data sets need to state their type & axis
            {
                type: 'stacked bar plus line',
                container: 'chart',
                dataSource: './data/crashesWeb.csv',
                data: [
                    {
                        'key': '5 year avg',
                        'type': 'line',
                        'yAxis': 1,
                        'columns': ['year', 'ksi5yrAvgDVRPC']
                    },
                    {
                        'key': 'Motor Vehicle',
                        'type': 'bar',
                        'yAxis': 2,
                        'columns': ['year', 'ksiMotorVehicleDVRPC']
                    },
                    {
                        'key': 'Bike + Ped',
                        'type': 'bar',
                        'yAxis': 2,
                        'columns': ['year', 'ksiBikePedDVRPC']
                    }
                ]
            }
        ]
    },
    'Bridge Conditions': {file: 'bridgeConditions.html', map: false, d3: false },
    'non-SOV Commuting Mode Share': {file: 'nonSOVCommutingModeShare.html', map: false, d3: false },
    'Income Inequality': {file: 'incomeInequality.html', map: false, d3: false },
    'Land Preservation': {file: 'landPreservation.html', map: false, d3: false },
    'Population Growth': {file: 'populationGrowth.html', map: true, d3: false},
    'Affordable Housing': {file: 'affordableHousing.html', map: false, d3: false},
    'Transit Conditions': {file: 'transitConditions.html', map: true, d3: false}
}

// fade/slide out elements
const fade = () => {
    grid.classList.add('fade-right')
    indicatorsNav.classList.add('fade-narrow')
    categories.forEach(category => category.classList.add('fade-out'))
}

// return to dashboard view
back.onclick = () => {
    grid.style.display = 'flex'

    // clear the relatedIndicators div of all it's children
    while(relatedIndicators.firstChild){
        relatedIndicators.removeChild(relatedIndicators.firstChild)
    }

    // remove relatedIndicators from the DOM space
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

// parameters: title to reference the snippetsRef lookup table, and primary class to generate the side nav
const getIndicatorSnippet = (title, primaryCategory) => {
    
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

                // apply toggle functionality to all togglable elements in the snippet
                const dataToggles = document.querySelectorAll('.toggle-data-selector')
                if(dataToggles) dataToggles.forEach(select => select.onchange = () => toggleChart(select, hasDataViz, graphs))

                // loop through each chart option & call the appropriate d3 function on it
                hasDataViz.forEach(chart => {
                    if(!chart.secondary){
                        switch (chart.type) {
                            case 'line and bar':
                                graphs.createLinePlusBarChart(chart)
                                break;
                            case 'stacked bar':
                                graphs.createStackedBarChart(chart)
                                break;
                            case 'line':
                                graphs.createLineChart(chart)
                                break;
                            case 'stacked area':
                                graphs.createStackedAreaChart(chart)
                                break;
                            case 'stacked bar plus line':
                                graphs.createdStackedBarPlusLine(chart)
                                break;
                            default:
                                console.log('default')
                        }
                    }
                })
            }
        })

        // populating the sideNav here ensures that it gets made/remade everytime you get a new indicator snippet (from within an indicator page or from the dashboard)
        generateSideNav(primaryCategory)

    }
}

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

        // create the indicator page and populate/refresh the related indicators sideNav
        getIndicatorSnippet(title, primaryCategory)
    }
    , 1500)
})

// populate the side nav with indicators that share a primary category for easy switching w/o having to go back to the main dashboard view
const generateSideNav = primaryCategory => {

    // using the classlist from the clicked indicator, add all others w/same primary indicator (first on the list, for now)
    indicators.forEach(indicator => {

        if(indicator.classList.contains(primaryCategory)){

            //  create a link to the indicator page that will go on the side bar
            let sideLink = document.createElement('a')

            // get a handle on the necessary info (skip dummy data for now...ugh)
            const linkTitle = indicator.children[0] ? indicator.children[0].textContent : 'fake'
            const primaryCategory = indicator.classList[1]

            // update basic info + styling
            sideLink.textContent = linkTitle
            sideLink.style.padding = '10% 0'
            sideLink.style.cursor = 'pointer'

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

            relatedIndicators.appendChild(sideLink)
        }
    })

    // hover effect
    relatedIndicators.onmouseover = e => {
        e.target.style.fontWeight = '700'
    }

    relatedIndicators.onmouseout = e => {
        e.target.style.fontWeight = '500'
    }

    // make sideNav list (which was populated in the getIndicatorSnippet function) visible
    relatedIndicators.style.display = 'flex'
    relatedIndicators.style.flexDirection = 'column'
    relatedIndicators.style.textAlign = 'center'
    relatedIndicators.style.color = '#f7f7f7'
}