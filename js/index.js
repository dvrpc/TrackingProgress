import { toggleIndicators, indicatorHoverFlip, clickIndicator } from './dashboardHelpers.js'
import { setIndexURL, setIndicatorURL, refreshView, updateView } from './routing.js'

// get a handle on the dashboard elements
const grid = document.querySelector('.indicators-grid')
const categories = [... document.querySelectorAll('.icon-set')]

// get a handle on the indicator page elements
const back = document.querySelector('.back-to-dash')
const indicators = [... document.querySelectorAll('.indicators-grid-item')]


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

// hashChange function parses an updated URL and updates the page (and route) if/when necessary
// @TODO: Look into why this only gets called when navigating with arrows. pushState causes a hash change, but onhashchange doesn't capture it...
window.onhashchange = updateView

// handles refresh (only gets triggered when refreshing an indicator page)
window.onload = refreshView