import { toggleIndicators, indicatorHoverFlip, clickIndicator } from './dashboardHelpers.js'
import { setIndexURL, setIndicatorURL, refreshView, updateView } from './routing.js'


/**************************************************/
/******************** Set up *********************/
// get a handle on the splash page elements
const splash = document.getElementById('splash-page')
const toGrid = document.getElementById('to-grid')
let splashVisible = true

// get a handle on the dashboard elements
const grid = document.querySelector('.indicators-grid')
const categories = [... document.querySelectorAll('.icon-set')]

// get a handle on the indicator page elements
const back = document.querySelector('.back-to-dash')
const indicators = [... document.querySelectorAll('.indicators-grid-item')]


/**************************************************/
/*************** Splash Page events ***************/
// scroll the grid into view which will trigger the splash page hide function
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

// when the splash page is visible, listen to scroll events to know when to hide it
document.onscroll = () => {
    if(!splashVisible) return
    
    const top = grid.getBoundingClientRect().top

    if(top <= 70) {
        // hide the splash page @todo: better solution?
        splash.style.position = 'fixed'
        splash.style.height = 0

        // undo the margin that allows splash page and dash to coexist
        dashboard.style.marginTop = '8vh'

        // scroll to the top of the page
        window.scrollTo(0,0)

        // flip splash state
        splashVisible = false
    }
}

// bring back the splash page
    // @TODO: add (i) button to bring splash page back. Put it next to the TP icon w/ an attention-grabbing animation
        // clicking on it will set splash-page height to 100 and display/visibility back
        // will also scroll to the top of the page
        // ^^ THIS must exist in a separate function because duh
/*infoJawn.onclick = e => {
    // reveal the thing

    // flip the splash bool to listen to scroll events again
    splashVisible = true
}*/


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