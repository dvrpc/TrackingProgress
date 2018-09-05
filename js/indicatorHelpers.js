// toggle between charts on an indicator page
const toggleChart = (selected, dataSets, graphs) => {

    // get the correct dataSet based on the selector id
    let setNumber = parseInt(selected.id.split('-')[1])

    // get chart # from the selected option
    let chartNumber = parseInt(selected.options[selected.selectedIndex].value)

    // get a handle on the names of the new columns to read from
    let newColumns = dataSets[setNumber].columnOptions[chartNumber]

    // replace the y-axis columns with the newly selected columns 
    dataSets[setNumber].data.forEach((series, index) => series.columns[1] = newColumns[index])

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
const getIndicatorSnippet = (grid, snippet, graphs, sideNavParams) => {
    let hasMap;
    let hasDataViz;
    let indicatorTitle;

    // using the indicator title, get the corresponding snippet for that indicator page
    const snippetFile = snippet.file

    // make sure snippetFile exists before going any further
    if(snippetFile){

        // get a handle on data viz metadata (if it exists)
        hasMap = snippet.map
        hasDataViz = snippet.d3

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

export {getIndicatorSnippet, generateSideNav}