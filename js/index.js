import snippetsRef from './ref.js'
import { toggleIndicators, fade, setIndicatorDimensions } from './dashboardHelpers.js'
import { getIndicatorSnippet, generateSideNav } from './indicatorHelpers.js'
import * as graphs from './viz.js'

// get a handle on the dashboard elements
const grid = document.querySelector('.indicators-grid')
const categories = [... document.querySelectorAll('.icon-set')]

// get a handle on the indicator page elements
const back = document.querySelector('.back-to-dash')
const indicatorsNav = document.querySelector('.indicators-nav')
const relatedIndicators = document.querySelector('.related-indicators')


// dummy data to loop thru and create the remaining 25 sub-grids
for(var i = 0; i < 23; i++){
    let gridItem = document.createElement('div')
    gridItem.classList.add('indicators-grid-item')
     
    if(i >= 0 && i < 5) gridItem.classList.add('economy-indicator')
    if(i >= 5 && i < 10) gridItem.classList.add('environment-indicator')
    if(i >= 10 && i < 15) gridItem.classList.add('community-indicator')
    if(i >= 15 && i < 20) gridItem.classList.add('transportation-indicator')
    if(i >= 20) gridItem.classList.add('equity-indicator')

    grid.appendChild(gridItem)
}

// get a handle on each indicator after they've been generated ^
const indicators = [... document.querySelectorAll('.indicators-grid-item')]

// apply filter toggle to each category
categories.forEach(category => category.onclick = () => toggleIndicators(category, indicators))

// apply fade-out transition to each indicator, reveal the 'back' button & populate the new side nav w/related indicators
indicators.forEach(indicator => {
    
    // make sure indicators are always square
    setIndicatorDimensions(indicator)

    indicator.onclick = () => {

        let snippet;

        fade(grid, indicatorsNav, categories)

        setTimeout(() => {

            // after the transition is done, display: none to remove DOM space
            grid.style.display = 'none'

            // get the title and primary class of the selected indicator
            let title = indicator.children.length ? indicator.children[1].textContent : null
            const primaryCategory = indicator.classList[1]
            snippet = snippetsRef[title]

            back.style.display = 'block'
            indicatorsNav.style.justifyContent = 'flex-start'

            // create the indicator page and populate/refresh the related indicators sideNav
            const sideNavParams = [indicators, relatedIndicators, primaryCategory]
            getIndicatorSnippet(grid, snippet, graphs, sideNavParams)
            generateSideNav(indicators, relatedIndicators, primaryCategory)
        }
        , 1500)
    }
})

// update indicator tiles on window resize
window.onresize = () => (indicators.forEach(indicator => setIndicatorDimensions(indicator)))

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
    indicatorsNav.style.justifyContent = 'space-between'

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