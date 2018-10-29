// get a handle on the necessary elements to create indicator subpages
import * as graphs from './viz.js'
import snippetsRef from './ref.js'
import { setIndicatorURL } from './routing.js'

const grid = document.querySelector('.indicators-grid')
const indicators = [... document.querySelectorAll('.indicators-grid-item')]
const relatedIndicators = document.querySelector('.related-indicators')

// toggle between charts on an indicator page
const toggleChart = (selected, dataSets, graphs) => {

    // get the correct dataSet based on the selector id
    let setNumber = parseInt(selected.id.split('-')[1])

    // get chart # from the selected option
    let chartNumber = parseInt(selected.options[selected.selectedIndex].value)

    // get a handle on the names of the new columns to read from
    let newColumns = dataSets[setNumber].columnOptions[chartNumber]

    // replace the y-axis columns with the newly selected columns
    // if selected columnOptions.length === datasets[setNumber].data do a wholesale re-assignment of data
    if(newColumns.length != dataSets[setNumber].data.length){
        
        // grab a reference to the xValue name
        let xVal = dataSets[setNumber].data[0].columns[0]

        // clear old data array
        dataSets[setNumber].data = []

        // build and push new data objects to the data array
        newColumns.forEach(newData => {
            const newEntry = {
                'key': newData,
                columns: [xVal, newData]
            }
            dataSets[setNumber].data.push(newEntry)
        })
    }
    // otherwise just update the columns (and key names if necessary)
    else{
        let newKeys = dataSets[setNumber].newKeys ? true : false

        dataSets[setNumber].data.forEach((series, index) => {
            if(newKeys) series.key = newColumns[index]
            series.columns[1] = newColumns[index]
        })
    }

    // source is the correct dataset with updated column names
    const source = dataSets[setNumber]

    // switch case to determine which kind of vis to make
    switch (source.type) {
        case 'line and bar':
            graphs.createLinePlusBarChart(source)
            break;
        case 'stacked bar':
            graphs.createStackedBarChart(source)
            break;
        case 'line':
            graphs.createLineChart(source)
            break;
        case 'stacked area':
            graphs.createStackedAreaChart(source)
            break;
        case 'stacked bar plus line':
            graphs.createdStackedBarPlusLine(source)
            break;
        default:
            console.log('default')
    }
}

// generate selected indicator page (from dashboard or sideNav) & update the side nav
const getIndicatorSnippet = (grid, snippet, graphs) => {
    let hasMap;
    let hasDataViz;

    // using the indicator title, get the corresponding snippet for that indicator page
    const snippetFile = snippet.file

    // make sure snippetFile exists before going any further
    if(snippetFile){

        // get a handle on data viz metadata (if it exists)
        hasMap = snippet.map
        hasDataViz = snippet.d3

        let page = `./indicatorSnippets/${snippetFile}`

        fetch(page).then(response => response.text()).then(snippet =>{

            // insert the HTML to update the structure & put the map and/or data viz components in place
            grid.insertAdjacentHTML('beforebegin', snippet)

            if(hasMap) {

                // get a handle on the newly created map div & use that to generate a map
                let container = document.querySelector('#map')
                generateMap(container)
            }

            if(hasDataViz){

                // apply toggle functionality to all togglable elements in the snippet, if they exist
                const dataToggles = document.querySelectorAll('.toggle-data-selector')
                if(dataToggles.length) dataToggles.forEach(select => select.onchange = () => toggleChart(select, hasDataViz, graphs))

                // loop through each chart option & call the appropriate d3 function on it
                hasDataViz.forEach(chart => {
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
                })
            }
        })
    }
}

// populate the side nav with indicators that share a primary category for easy switching w/o having to go back to the main dashboard view
const generateSideNav = (indicators, relatedIndicators, primaryCategory) => {

    // using the classlist from the clicked indicator, add all others w/same primary indicator (first on the list, for now)
    indicators.forEach(indicator => {

        if(indicator.classList.contains(primaryCategory)){

            //  create a link to the indicator page that will go on the side bar
            let sideLink = document.createElement('a')

            // get a handle on the necessary info (skip dummy data for now...ugh)
            const linkTitle = indicator.children[1] ? indicator.children[1].textContent : 'fake'
            const indicatorPrimaryCategory = indicator.classList[1]

            // update basic info + styling
            sideLink.textContent = linkTitle
            sideLink.classList.add('sideLink')
            sideLink.classList.add(indicatorPrimaryCategory)

            relatedIndicators.appendChild(sideLink)
        }
    })

    // make sideNav list (which was populated in the getIndicatorSnippet function) visible
    relatedIndicators.style.display = 'flex'
    relatedIndicators.style.flexDirection = 'column'
}

// helper function for the routing
const makeIndicatorPage = hashArray => {
    const title = hashArray[0].replace(/-/g, ' ')
    const snippet = snippetsRef[title]

    // make sure the snippet exists before proceeding
    if(snippet){
        // remove an existing indicator page before continuing
        const oldIndicator = document.querySelector('.indicators-snippet')
        if(oldIndicator) oldIndicator.remove()

        // remove an existing sideNav before continuing
        while(relatedIndicators.firstChild){
            relatedIndicators.removeChild(relatedIndicators.firstChild)
        }

        const primaryCategory = hashArray[1]
        getIndicatorSnippet(grid, snippet, graphs)
        generateSideNav(indicators, relatedIndicators, primaryCategory)
    }
}

// use a mutation observer to attach click handlers every time the sideLinks container div gets updated
const mutationConfig = {childList: true}

const updateLinks = () => {
    const sideLinks = document.querySelectorAll('.sideLink')

    sideLinks.forEach(sideLink => {
        sideLink.onclick = () => {

            const title = sideLink.textContent
            const primaryCategory = sideLink.classList[1]

            // clear the current indicator snippet
            const indicatorDetails = document.querySelector('.indicators-snippet')
            if(indicatorDetails) indicatorDetails.remove()

            // clear the side nav of all it's children
            while(relatedIndicators.firstChild){
                relatedIndicators.removeChild(relatedIndicators.firstChild)
            }

            // update the URL which in turn hydrates the new indicator page
            setIndicatorURL(title, primaryCategory, false)
        }
    })
}

// moved the sideLinks observer into indicatorHelpers because that helps the observer listen to and attach click handlers 
// to the indicator sideNav if/when a user refreshes an indicator page
const observer = new MutationObserver(updateLinks)
observer.observe(relatedIndicators, mutationConfig)

export { makeIndicatorPage }