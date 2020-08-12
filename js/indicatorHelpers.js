// get a handle on the necessary elements to create indicator subpages
import * as graphs from './viz.js'
import snippetsRef from './ref.js'
import { makeIndicatorHTML, make404 } from './makeIndicatorHTML.js'
import { setIndicatorURL } from './routing.js'
import { catLookup } from './utils.js'

const grid = document.querySelector('.indicators-grid')
const indicators = [... document.querySelectorAll('.indicators-grid-item')]
const relatedIndicators = document.querySelector('.related-indicators')


// helper function to determine what data viz to make
const dataVizSwitch = (type, source, toggleContext) => {
    switch (type) {
        case 'line and bar':
            graphs.createLinePlusBarChart(source, toggleContext)
            break;
        case 'stacked bar':
            graphs.createStackedBarChart(source, toggleContext)
            break;
        case 'line':
            graphs.createLineChart(source, toggleContext)
            break;
        case 'line and scatter':
            graphs.createLineAndScatterChart(source, toggleContext)
            break;
        case 'waterfall':
            // quick fix to handle initial waterfall size being too small
            window.setTimeout(graphs.createWaterfallChart, 100, source, toggleContext)
            break;
        case 'bar': 
            graphs.createBarChart(source, toggleContext)
            break;
        default:
            console.log('default')
    }
}

// toggle between charts on an indicator page (params are the selectors and datasets for the given indicator page)
const toggleChart = (selected, dataSets) => {
    
    // get the component pieces of the toggle ID
    let toggleID = selected.id.split('-')

    // get the correct dataSet based on the selector id
    let setNumber = parseInt(toggleID[1])
    
    // get chart # from the selected option
    let chartNumber = parseInt(selected.options[selected.selectedIndex].value)

    // handle double toggle cases: 
        // doubleToggle is the state of the second toggle and is used to determine which data csv should be loaded
        // firstToggleValue is the state of the first toggle and is used to get the correct column names when the 2nd toggle is set and the 1st is changing
    let doubleToggle;
    let useFirstToggle;
    
    // handle DIRECT interaction with the second toggle (toggleID.length > 2 means the user has selected the 2nd toggle)
    if(toggleID.length > 2) {
        doubleToggle = chartNumber

        const firstToggle = selected.parentElement.previousElementSibling.previousElementSibling.children[1]

        // grab the state of the first toggle to make sure the correct columns are being assigned to newColumns
        useFirstToggle = firstToggle.options[firstToggle.selectedIndex].value

    // handle possible INDIRECT interaction with the second toggle (user hasn't selected the 2nd toggle but its state still needs to be captured in case it's data set needs to be used)
    }else {
        // check for presence of a double toggle (will have sibling fieldset and .vr span)
        let hasDoubleToggle = selected.parentElement.nextElementSibling || selected.parentElement.previousElementSibling

        // if the chart has a double toggle, get the value of the 2nd toggle to pass on to viz.js functions to determine which data csv to use
        if(hasDoubleToggle){
            // get a hold on the select (skip the .vr span)
            hasDoubleToggle = hasDoubleToggle.nextElementSibling || hasDoubleToggle.previousElementSibling
            const doubleToggleSelect = hasDoubleToggle.children[1]
            doubleToggle = parseInt(doubleToggleSelect.options[doubleToggleSelect.selectedIndex].value)
        }
    }

    // Determine which columns of data to grab. Handle double toggle cases:
        // if a user has direct interaction with a double toggle, use the state of the first toggle to determine column names
        // otherwise chartNumber which is already the state of the first toggle so use that
    let newColumns = useFirstToggle ? dataSets[setNumber].columnOptions[useFirstToggle] : dataSets[setNumber].columnOptions[chartNumber]

    // replace the y-axis columns with the newly selected columns
    if(newColumns && newColumns.length != dataSets[setNumber].data.length){
        
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
    else {
        let newKeys = dataSets[setNumber].newKeys ? true : false

        dataSets[setNumber].data.forEach((series, index) => {
            if(newKeys) series.key = series.originalKey = newColumns[index]
            series.columns[1] = newColumns[index] || index
        })
    }

    // source is the correct dataset with updated column names
    const source = dataSets[setNumber]

    // get label and units context where applicable
    const context = source.context
    let toggleContext;
    toggleContext = context ? { doubleToggle, context, chartNumber } : { doubleToggle }

    // switch case to determine which kind of vis to make and which dataset to reference
    dataVizSwitch(source.type, source, toggleContext)
}

// generate selected indicator page (from dashboard or sideNav) & update the side nav
const getIndicatorSnippet = (ref, indicatorParams) => {    

    // get text and chart content
    // deep clone the chart context objects to avoid polluting the main ref.js object with references to toggled data sets
    const hasDataViz = ref.d3.map(chart => {
        const dataVizClone = JSON.parse(JSON.stringify(chart))
        return dataVizClone
    })

    const snippet = makeIndicatorHTML(indicatorParams)

    // insert the HTML to update the structure & put the map and/or data viz components in place
    grid.insertAdjacentElement('beforebegin', snippet)

    if(hasDataViz){
        const dataToggles = document.querySelectorAll('.toggle-data-selector')
        
        // apply toggle functionality to all togglable elements in the snippet, if they exist
        if(dataToggles.length) dataToggles.forEach(select => select.onchange = () => toggleChart(select, hasDataViz))

        // initialize default context object for charts
        const context = 'initial'

        // loop through each chart option & call the appropriate d3 function on it (0 represents the default value of doubleToggle)
        hasDataViz.forEach(chart => dataVizSwitch(chart.type, chart, context))
    }

    // send user to the top of the indicator page
    window.scrollTo(0,0)
}

const makeRelatedSubheader = cat => {
    const accentColor = catLookup[cat].dark
    const name = catLookup[cat].name
    const frag = document.createDocumentFragment()
    const wrapper = document.createElement('div')
    const img = document.createElement('img')
    const subheader = document.createElement('h3')

    wrapper.id = 'related-indicators-subheader-wrapper'
    wrapper.style.color = accentColor
    
    img.src =  `./img/sidenav/${cat}.png`
    img.alt = `${cat} icons`
    img.id="related-indicators-subheader-img"
    
    subheader.id = 'related-indicators-subheader'
    subheader.textContent = `${name} Indicators:`

    wrapper.appendChild(img)
    wrapper.appendChild(subheader)
    frag.appendChild(wrapper)

    return frag
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
        const indicatorPrimaryCategory = indicator.dataset.primary
        
        if(indicatorPrimaryCategory === primaryCategory){

            //  create a link to the indicator page that will go on the side bar
            let sideLink = document.createElement('span')

            // get a handle on the necessary info
            const linkTitle = indicator.children[1].textContent

            // update basic info + styling
            sideLink.textContent = linkTitle
            sideLink.classList.add('sideLink')
            sideLink.classList.add(indicatorPrimaryCategory)

            sideLinks.appendChild(sideLink)
        }
    })

    relatedIndicators.appendChild(subheader)
    relatedIndicators.appendChild(sideLinks)

    // make sideNav list (which was populated in the getIndicatorSnippet function) visible
    relatedIndicators.style.display = 'flex'
    relatedIndicators.style.flexDirection = 'column'
}

// helper function for the routing
const makeIndicatorPage = hashArray => {
    const title = hashArray[0].replace(/-/g, ' ')
    const ref = snippetsRef[title]

    // remove an existing indicator page before continuing
    const oldIndicator = document.querySelector('.indicators-snippet')
    if(oldIndicator) oldIndicator.remove()

    // create the indicator page if it exists
    if(ref){
        const categories = ref.categories
        const primaryCategory = categories[0]
        const trend = ref.trend
        const text = ref.text
        const indicatorParams = {title, categories, trend, text}

        generateSideNav(indicators, relatedIndicators, primaryCategory)
        getIndicatorSnippet(ref, indicatorParams)

    // create the Indicator Not Found page if not
    }else{
        const notFound = make404()
        grid.insertAdjacentElement('beforebegin', notFound)
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