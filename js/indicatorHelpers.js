// get a handle on the necessary elements to create indicator subpages
import * as graphs from './viz.js'
import snippetsRef from './ref.js'
import { setIndicatorURL } from './routing.js'

const grid = document.querySelector('.indicators-grid')
const indicators = [... document.querySelectorAll('.indicators-grid-item')]
const relatedIndicators = document.querySelector('.related-indicators')

// helper function to determine what data viz to make
const dataVizSwitch = (type, source, doubleToggle) => {
    switch (type) {
        case 'line and bar':
            graphs.createLinePlusBarChart(source, doubleToggle)
            break;
        case 'stacked bar':
            graphs.createStackedBarChart(source, doubleToggle)
            break;
        case 'line':
            graphs.createLineChart(source, doubleToggle)
            break;
        case 'stacked area':
            graphs.createStackedAreaChart(source, doubleToggle)
            break;
        case 'stacked bar plus line':
            graphs.createdStackedBarPlusLine(source, doubleToggle)
            break;
        case 'line and scatter':
            graphs.createLineAndScatterChart(source, doubleToggle)
            break;
        case 'waterfall':
            //graphs.createWaterfallChart(source, doubleToggle)
        default:
            console.log('default')
    }
}

// toggle between charts on an indicator page
const toggleChart = (selected, dataSets) => {
    
    // get the component pieces of the toggle ID
    let toggleID = selected.id.split('-')

    // get the correct dataSet based on the selector id
    let setNumber = parseInt(toggleID[1])
    
    // get chart # from the selected option
    let chartNumber = parseInt(selected.options[selected.selectedIndex].value)

    // handle double toggle cases:
    let doubleToggle = 0
    
    // handle DIRECT interaction with the second toggle (toggleID.length > 2 means the user has selected the 2nd toggle)
    if(toggleID.length > 2) {
        doubleToggle = chartNumber

    // handle possible INDIRECT interaction with the second toggle (user hasn't selected the 2nd toggle but its state still needs to be captured)
    }else {
        // get a handle on the double toggle <select> (if it exists)
        const hasDoubleToggle = selected.parentElement.nextElementSibling

        // if the chart has a double toggle, get the value of the 2nd toggle to pass on to viz.js functions
        if(hasDoubleToggle){
            const doubleToggleSelect = hasDoubleToggle.children[0]
            doubleToggle = parseInt(doubleToggleSelect.options[doubleToggleSelect.selectedIndex].value)
        }
    }

    // get a handle on the names of the new columns to read from
    // Double Toggle Cases dont need mroe work here b/c the column names are the same - just different data.
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
            if(newKeys) series.key = series.originalKey = newColumns[index]
            series.columns[1] = newColumns[index]
        })
    }

    // source is the correct dataset with updated column names
    const source = dataSets[setNumber]

    // switch case to determine which kind of vis to make and which dataset to reference
    dataVizSwitch(source.type, source, doubleToggle)
}

// generate selected indicator page (from dashboard or sideNav) & update the side nav
const getIndicatorSnippet = (grid, snippet) => {
    let hasDataViz;
    let hasText;

    // using the indicator title, get the corresponding snippet for that indicator page
    const snippetFile = snippet.file

    // make sure snippetFile exists before going any further
    if(snippetFile){

        // get a handle on data viz metadata and text content
        hasDataViz = snippet.d3
        hasText = snippet.text

        let page = `./indicatorSnippets/${snippetFile}`

        fetch(page).then(response => response.text()).then(snippet =>{

            // insert the HTML to update the structure & put the map and/or data viz components in place
            grid.insertAdjacentHTML('beforebegin', snippet)

            if(hasDataViz){
                const dataToggles = document.querySelectorAll('.toggle-data-selector')
                
                // apply toggle functionality to all togglable elements in the snippet, if they exist
                if(dataToggles.length) dataToggles.forEach(select => select.onchange = () => toggleChart(select, hasDataViz))

                // loop through each chart option & call the appropriate d3 function on it (0 represents the default value of doubleToggle)
                hasDataViz.forEach(chart => dataVizSwitch(chart.type, chart, 0))
            }

            // load the default text + add tab click handler
            if(hasText){
                const descriptionContainer = document.getElementById('indicator-description-container')
                descriptionContainer.insertAdjacentHTML('afterbegin', hasText.why)
                
                const tabs = document.getElementById('description-wrapper-tabs')
                tabs.onclick = e => handleTabs(e, hasText, descriptionContainer)
            }
        })
    }
}

// toggle tabs and text
const handleTabs = (e, text, wrapper) => {
    const clickedTab = e.target
    const oldTab = document.querySelector('.active-tab')
    
    // short out if clicking on the already active tab
    if(oldTab.id === clickedTab.id) return

    // update the text
    const textSection = clickedTab.id.split('-')[0]
    while(wrapper.firstChild) wrapper.removeChild(wrapper.firstChild)
    wrapper.insertAdjacentHTML('afterbegin', text[textSection])

    // deactivate the old jawn
    oldTab.classList.remove('active-tab')

    // uset the new active tab
    clickedTab.classList.add('active-tab')
}

const makeRelatedSubheader = cat => {
    return `
        <div id="related-indicators-subheader">
            <img id="related-indicators-img" src='./img/sidenav/${cat}.png' alt='${cat} icons' />
            <h3>Indicators:</h3>
        </div>
    `
}

// populate the side nav with indicators that share a primary category for easy switching w/o having to go back to the main dashboard view
const generateSideNav = (indicators, relatedIndicators, primaryCategory) => {
        
    // clear the side nav of all it's children
    while(relatedIndicators.firstChild){
        relatedIndicators.removeChild(relatedIndicators.firstChild)
    }

    // use primary category to create the "related indicators" subheader
    const subheader = makeRelatedSubheader(primaryCategory)

    // create a fragment to house each sidelink
    let sideLinks = document.createDocumentFragment()

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

            sideLinks.appendChild(sideLink)
        }
    })

    relatedIndicators.insertAdjacentHTML('afterbegin', subheader)
    relatedIndicators.appendChild(sideLinks)

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
        
        const primaryCategory = hashArray[1]
        generateSideNav(indicators, relatedIndicators, primaryCategory)
        getIndicatorSnippet(grid, snippet, graphs)
    }else{
        alert('invalid indicator snippet - @TODO: make an invalid request template')
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

            // update the URL which in turn hydrates the new indicator page
            setIndicatorURL(title, primaryCategory, false)
        }
    })
}

// listen for changes to sideNav and update the links 
const observer = new MutationObserver(updateLinks)
observer.observe(relatedIndicators, mutationConfig)

export { makeIndicatorPage }