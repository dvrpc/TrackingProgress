import { makeDashboard, removeDashboard, toggleIndicators, setIndicatorDimensions } from './dashboardHelpers.js'
import { setIndexURL, setIndicatorURL, refreshView, updateView } from './routing.js'

// get a handle on the dashboard elements
const grid = document.querySelector('.indicators-grid')
const categories = [... document.querySelectorAll('.icon-set')]

// get a handle on the indicator page elements
const back = document.querySelector('.back-to-dash')
const indicatorsNav = document.querySelector('.indicators-nav')
const relatedIndicators = document.querySelector('.related-indicators')
const indicators = [... document.querySelectorAll('.indicators-grid-item')]


/*************************************************/
/***************** Window Events *****************/
// first and formost, handle cases where the browser doesn't have onhashchange built in (from MDN)
if(!window.HashChangeEvent)(function(){
	var lastURL=document.URL;
	window.addEventListener("hashchange",function(event){
		Object.defineProperty(event,"oldURL",{enumerable:true,configurable:true,value:lastURL});
		Object.defineProperty(event,"newURL",{enumerable:true,configurable:true,value:document.URL});
		lastURL=document.URL;
	});
}());

// handles refresh (only gets triggered when refreshing an indicator page)
window.onload = refreshView(grid, back, indicatorsNav, categories)

// hashChange function that takes an updated # URL and updates the page (and route) if/when necessary
window.onhashchange = updateView

// update indicator tiles on window resize
window.onresize = () => (indicators.forEach(indicator => setIndicatorDimensions(indicator)))
/***************** /Window Events *****************/
/**************************************************/


/**************************************************/
/**************** Dashboard Events ****************/
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
        
        removeDashboard(grid, back, indicatorsNav, categories)

        // update the URL which in turn hydrates the indicator page
        setIndicatorURL(title, primaryCategory)
    }
}

// return to dashboard view
back.onclick = () => {
    // reset the URL to the index
    setIndexURL()

    // bring the dashboard back into view
    makeDashboard(relatedIndicators, indicatorsNav, back, grid, categories)
}
/**************** /Dashboard Events ***************/
/**************************************************/