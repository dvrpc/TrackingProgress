import { toggleIndicators, setIndicatorDimensions, indicatorHoverFlip, clickIndicator } from './dashboardHelpers.js'
import { setIndexURL, setIndicatorURL, refreshView, updateView } from './routing.js'

// get a handle on the dashboard elements
const grid = document.querySelector('.indicators-grid')
const categories = [... document.querySelectorAll('.icon-set')]

// get a handle on the indicator page elements
const back = document.querySelector('.back-to-dash')
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
window.onload = refreshView

// hashChange function that takes an updated # URL and updates the page (and route) if/when necessary
window.onhashchange = updateView

// update indicator tiles on window resize
window.onresize = () => (indicators.forEach(indicator => setIndicatorDimensions(indicator)))



/**************************************************/
/**************** Dashboard Events ****************/
// apply filter toggle to each category
categories.forEach(category => category.onclick = () => toggleIndicators(category, indicators))

// make sure indicators are always square + add flip handler
// @TODO: figure out a better way to assign these click handlers because it's a huge bottleneck atm
indicators.forEach(indicator => {
    setIndicatorDimensions(indicator)
    indicator.onmouseenter = indicator => indicatorHoverFlip(indicator, true)
    indicator.onmouseleave = indicator => indicatorHoverFlip(indicator, false)
})

// load the selected indicator page & transition to it
grid.onclick = e => {
    let title, primaryCategory;

    // get title and primary category from the clicked element
    [title, primaryCategory] = [... clickIndicator(e)]

    // update the URL which in turn hydrates the indicator page
    setIndicatorURL(title, primaryCategory, true)
}

// return to dashboard view 
back.onclick = () => setIndexURL()