import { toggleIndicators, indicatorHoverFlip, clickIndicator } from './dashboardHelpers.js'
import { setIndexURL, setIndicatorURL, refreshView, updateView } from './routing.js'


/**************************************************/
/******************** Set up *********************/
// get a handle on the splash page elements
const toGrid = document.getElementById('to-grid')
const splashPage = document.getElementById('splash-page')

// get a handle on the dashboard elements
const dashboard = document.getElementById('dashboard')
const grid = dashboard.children[1]
const categories = [... document.querySelectorAll('.icon-set')]

// get a handle on the indicator page elements
const back = document.querySelector('.back-to-dash')
const indicators = [... document.querySelectorAll('.indicators-grid-item')]

// keep track of dashboard position
let dashView = false


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

// handle dashboard jawn sesh
const toggleGridView = () => {
    // short out if user is already in grid
    if(dashView) return

    const offset = dashboard.getBoundingClientRect().top

    console.log('called toggle grid with offset of ', offset)

    if(offset <= 70) {
        // hide the splash page
        splashPage.style.height = 0

        // undo the margin that allows splash page and dash to coexist
        dashboard.style.marginTop = '8vh'

        // scroll to the top of the page
        window.scrollTo(0,0)

        // flip dashView bool to limit scroll interactions
        dashView = true
    }
}

// if not already in dash view, listen for scroll events
// @TODO: remove this event listener when a user loads the indicator pages. It fires but without any purpose
window.onscroll = toggleGridView
