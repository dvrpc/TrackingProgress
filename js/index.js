import { toggleIndicators, setIndicatorDimensions, indicatorHoverFlip } from './dashboardHelpers.js'
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
    const node = e.target.nodeName

    // avoid cases where user clicks the grid itself
    if(node != 'MAIN'){
        let indicator;

        // this feels like a bad solution but maybe that's because there's no good way to get (great)grandparents
        switch(node){
            case 'STRONG':
                indicator = e.target.parentNode.parentNode.parentNode
                break
            case 'IMG':
                indicator = e.target.parentNode.parentNode
                break
            case 'P':
                indicator = e.target.parentNode.parentNode
                break
            default:
                indicator = e.target.parentNode
        }
        
        // get the title and primary class of the selected indicator
        let title = indicator.children.length ? indicator.children[1].textContent : null
        const primaryCategory = indicator.classList[1]
        
        // update the URL which in turn hydrates the indicator page
        setIndicatorURL(title, primaryCategory, true)
    }
}

// return to dashboard view 
back.onclick = () => setIndexURL()