// get a handle on the necessary elements to populate routing functions
import * as graphs from './viz.js'
import snippetsRef from './ref.js'
import { getIndicatorSnippet, generateSideNav } from './indicatorHelpers.js';

const grid = document.querySelector('.indicators-grid')
const indicators = [... document.querySelectorAll('.indicators-grid-item')]
const relatedIndicators = document.querySelector('.related-indicators')

// first and formost, handle cases where the browser doesn't have onhashchange built in (from MDN)
if(!window.HashChangeEvent)(function(){
	var lastURL=document.URL;
	window.addEventListener("hashchange",function(event){
		Object.defineProperty(event,"oldURL",{enumerable:true,configurable:true,value:lastURL});
		Object.defineProperty(event,"newURL",{enumerable:true,configurable:true,value:document.URL});
		lastURL=document.URL;
	});
}());

const setIndexURL = () => history.replaceState(null, 'Tracking Progress', 'http://dev.dvrpc.org/TrackingProgress/')

// This handler is for internal navigation i.e. from the indicator tile or a sideLink URL. All it needs to do is update the hash URL
const setIndicatorURL = (title, primaryCategory) => {
    const titlesMinusSpace = title.replace(/\s+/g, '-')
    const newHash = `Indicator/${titlesMinusSpace}/${primaryCategory}`
    
    // trigger a hash change to pull in the new page information
    location.hash = newHash

    // update URL state
    history.replaceState(null, title, `http://dev.dvrpc.org/TrackingProgress/#/${newHash}`)
}

// wrapper function that accepts a URL fragment and hydrates the page with the appropriate information
const updateView = () => {
    // make sure the URL is valid from our address
        // @ TODO: change to www.dvrpc.org for deploy
    if(location.hostname === 'dev.dvrpc.org'){
        let hashArray = location.hash.split('/')
        if(hashArray.length){
            const title = hashArray[2].replace(/-/g, ' ')
            const snippet = snippetsRef[title]

            // make sure the snippet exists before proceeding
                // @TODO: route to a 404 page or re-route to home or something
            if(snippet){
                const primaryCategory = hashArray[3]
                getIndicatorSnippet(grid, snippet, graphs)
                generateSideNav(indicators, relatedIndicators, primaryCategory)
            }
        }
    }else{
        alert('nah b')
    }
    
    // @ TODO: get the required information to generate the indicator page and sideNav
        // of the sideNav and indicator params, Grid, Graphs, Indicators and Related Indicators can be obtained via querySelectorAll
            // snippet is obtained via snippetsRef[title]
            // primaryCategory is obtained via indicator.classList[1]
}

// hashChange function that takes an updated # URL and updates the page (and route) if/when necessary
window.onhashchange = updateView

export {updateView, setIndicatorURL, setIndexURL}