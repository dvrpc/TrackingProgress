import { toggleIndicators, indicatorHoverFlip, clickIndicator, toggleGridView } from './dashboardHelpers.js'
import { setIndexURL, setIndicatorURL, refreshView, updateView } from './routing.js'


/**************************************************/
/******************** Set up *********************/
// get a handle on the splash page elements
const toGrid = document.getElementById('to-grid')

// get a handle on the dashboard elements
const grid = document.querySelector('.indicators-grid')
const categories = [... document.querySelectorAll('.icon-set')]

// get a handle on the indicator page elements
const back = document.querySelector('.back-to-dash')
const indicators = [... document.querySelectorAll('.indicators-grid-item')]


/**************************************************/
/**************** Get to Dashboard ****************/
toGrid.onclick = e => {
    e.preventDefault()

    // get grid distance from top in order to go 8px less than that to account for the top margin 
    const bounds = grid.getBoundingClientRect()
    const height = bounds.top - 16

    window.scrollTo({
        top: height,
        behavior: 'smooth'
    })
}


/**************************************************/
/**************** Dashboard Events ****************/
// apply filter toggle to each category
categories.forEach(category => category.onclick = () => toggleIndicators(category, indicators))

//  add flip handler
indicators.forEach(indicator => {
    indicator.onmouseenter = indicator => indicatorHoverFlip(indicator, true)
    indicator.onmouseleave = indicator => indicatorHoverFlip(indicator, false)
})

// load the selected indicator page & transition to it
grid.onclick = e => {
    let title, primaryCategory;
    const node = e.target.nodeName

    // only setIndicator if the user clicked on a valid tile
    if(node != 'MAIN'){
        // get title and primary category from the clicked element
        [title, primaryCategory] = [... clickIndicator(e)]
    
        // update the URL which in turn hydrates the indicator page
        setIndicatorURL(title, primaryCategory, true)
    }
}

// return to dashboard view
back.onclick = () => setIndexURL()



/*************************************************/
/***************** Window Events *****************/
// hashChange function parses an updated URL and updates the page (and route) when using navigation arrows
window.onhashchange = updateView

// handles refresh (only gets triggered when refreshing an indicator page)
window.onload = refreshView

// if not already in dash view, listen for scroll events
// @TODO: remove this event listener when a user loads the indicator pages. It listens but with no purpose so better to not
window.onscroll = toggleGridView
