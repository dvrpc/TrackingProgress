import snippetsRef from './ref.js'
import { toggleIndicators, fade } from './dashboardHelpers.js'
import { toggleChart, getIndicatorSnippet, generateSideNav } from './indicatorHelpers.js'
import * as graphs from './viz.js'

// get a handle on the dashboard elements
const grid = document.querySelector('.indicators-grid')
const categories = [... document.querySelectorAll('.icon-set')]

// get a handle on the indicator page elements
const back = document.querySelector('.back-to-dash')
const indicatorsNav = document.querySelector('.indicators-nav')
const relatedIndicators = document.querySelector('.related-indicators')
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

// apply filter toggle to each category
categories.forEach(category => category.onclick = () => toggleIndicators(category, indicators))

// apply fade-out transition to each indicator, reveal the 'back' button & populate the new side nav w/related indicators
indicators.forEach(indicator => indicator.onclick = () => {

    let snippet;

    fade(grid, indicatorsNav, categories)

    setTimeout(() => {

        // after the transition is done, display: none to remove DOM space
        grid.style.display = 'none'

        // get the title and primary class of the selected indicator
        let title = indicator.children.length ? indicator.children[0].textContent : null
        const primaryCategory = indicator.classList[1]
        snippet = snippetsRef[title]

        back.style.display = 'block'

        // create the indicator page and populate/refresh the related indicators sideNav
        const sideNavParams = [indicators, relatedIndicators, primaryCategory]
        getIndicatorSnippet(grid, snippet, graphs, sideNavParams)
        generateSideNav(indicators, relatedIndicators, primaryCategory)
    }
    , 1500)
})

// use a mutation observer to attach click handlers every time the sideLinks container div gets updated
const mutationConfig = {childList: true}

const updateLinks = () => {
    const sideLinks = document.querySelectorAll('.sideLink')

    sideLinks.forEach(sideLink => {
        sideLink.onclick = () => {

            const snippetTitle = sideLink.textContent
            const snippet = snippetsRef[snippetTitle]
            const primaryCategory = sideLink.classList[1]

            // clear the current indicator snippet
            const indicatorDetails = document.querySelector('.indicators-snippet')
            if(indicatorDetails) indicatorDetails.remove()

            // clear the side nav of all it's children
            while(relatedIndicators.firstChild){
                relatedIndicators.removeChild(relatedIndicators.firstChild)
            }

            getIndicatorSnippet(grid, snippet, graphs)
            generateSideNav(indicators, relatedIndicators, primaryCategory)
        }
    })
}

const observer = new MutationObserver(updateLinks)
observer.observe(relatedIndicators, mutationConfig)

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