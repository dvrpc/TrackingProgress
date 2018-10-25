import { toggleIndicators, fade, setIndicatorDimensions } from './dashboardHelpers.js'
import { setIndexURL, setIndicatorURL, refreshView } from './routing.js'

// get a handle on the dashboard elements
const grid = document.querySelector('.indicators-grid')
const categories = [... document.querySelectorAll('.icon-set')]

// get a handle on the indicator page elements
const back = document.querySelector('.back-to-dash')
const indicatorsNav = document.querySelector('.indicators-nav')
const relatedIndicators = document.querySelector('.related-indicators')
const indicators = [... document.querySelectorAll('.indicators-grid-item')]

// Window Events
    // handles refresh (only gets triggered when refreshing an indicator page)
window.onload = refreshView(grid, back, indicatorsNav, categories)
    // update indicator tiles on window resize
window.onresize = () => (indicators.forEach(indicator => setIndicatorDimensions(indicator)))

// apply filter toggle to each category
categories.forEach(category => category.onclick = () => toggleIndicators(category, indicators))

// make sure indicators are always square
indicators.forEach(indicator => setIndicatorDimensions(indicator))

// apply fade-out transition to each indicator, reveal the 'back' button & populate the new side nav w/related indicators. Use event delegation to reduce the number of assigned click handlers
grid.onclick = e => {
    // avoid cases where user clicks the grid itself
    if(e.target.nodeName != 'SECTION'){
        let indicator = e.target
        
        // if img or p is selected, get the parent div to have all the information 
        if(indicator.nodeName != 'DIV') indicator = indicator.parentElement

        // get the title and primary class of the selected indicator
        let title = indicator.children.length ? indicator.children[1].textContent : null
        const primaryCategory = indicator.classList[1]

        // update the URL which in turn hydrates the indicator page
        setIndicatorURL(title, primaryCategory)

        // allow transitions (if previously removed via a 'back to home' click or refresh)
        indicatorsNav.classList.remove('notransition')
        grid.classList.remove('notransition')

        // transition animation from dash to indicator page
        fade(grid, indicatorsNav, categories)

        // adjust side nav display
        back.style.display = 'block'
        indicatorsNav.style.justifyContent = 'flex-start'

        // after the transition is done, remove the grid
        setTimeout(() => {
            grid.style.display = 'none'
        }, 1000)
    }
}

// return to dashboard view
// Edited to not have transitions - just goes right to the dashboard view. 
    // pros: More pleasant on the user going back and forth from indicator to dash
    // cons: Inconsistent with behavior of hiding the dash
back.onclick = () => {
    // remove the indicator snippet from the DOM tree // again, check if it exists b/c most of the times it wont for now since the tiles are all blank
    const indicator = document.querySelector('.indicators-snippet')
    if(indicator) indicator.remove()
    
    // clear the relatedIndicators div of all it's children
    while(relatedIndicators.firstChild){
        relatedIndicators.removeChild(relatedIndicators.firstChild)
    }
    
    // remove un-needed elements
    relatedIndicators.style.display = 'none'
    back.style.display = 'none'
    
    // reveal the indicators grid, widen the sideNav and reveal the categories
    indicatorsNav.classList.add('notransition')
    indicatorsNav.classList.remove('fade-narrow')
    grid.classList.remove('fade-right')
    categories.forEach(category => category.classList.remove('fade-out'))

    // reveal the homepage elements
    indicatorsNav.style.justifyContent = 'space-between'
    grid.style.display = 'flex'

    // reset the URL to the index
    setIndexURL()
}