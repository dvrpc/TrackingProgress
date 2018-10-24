import { makeIndicatorPage } from './indicatorHelpers.js'
import { fade } from './dashboardHelpers.js';

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

// take an indicator title and update the URL, triggering an onhashchange event that creates the indicator page
const setIndicatorURL = (title, primaryCategory) => {
    const titlesMinusSpace = title.replace(/\s+/g, '-')
    const newHash = `${titlesMinusSpace}/${primaryCategory}`
    
    // trigger a hash change to pull in the new page information
    location.hash = newHash

    // update URL state
    history.replaceState(null, title, `http://dev.dvrpc.org/TrackingProgress/#/${newHash}`)

    // something missing here to hook it into back/forward buttons
}

// wrapper function that accepts a URL fragment and hydrates the page with the appropriate information
const updateView = () => {
    // make sure the URL is valid from our address
        // @ TODO: change to www.dvrpc.org for deploy
    if(location.hostname === 'dev.dvrpc.org'){
        let hashArray = location.hash.split('/')
        if(hashArray.length){
            makeIndicatorPage(hashArray)
        }else{
            alert('nah b')
            // load the homepage?
        }
    }
}

// on refresh, remove a jawn before proceeding?
const refreshView = () => {
    // if refreshing the homepage, do nothing
    if(location.href !== 'http://dev.dvrpc.org/TrackingProgress/'){
        // needs to remove the grid and update the indicators-nav to the indicator style
        // brute force way: get a handle on grid and display: none it
        // get a handle on side nav and add fade-narrow & flex-start to it

        const grid = document.querySelector('.indicators-grid')
        const categories = [... document.querySelectorAll('.icon-set')]
        const indicatorsNav = document.querySelector('.indicators-nav')
        const back = document.querySelector('.back-to-dash')

        grid.style.display = 'none'
        back.style.display = 'block'
        indicatorsNav.style.justifyContent = 'flex-start'
        indicatorsNav.style.background = '#222222'
        indicatorsNav.style.width = '10%'
        categories.forEach(category => category.style.display = 'none')
        updateView()
    }
}

// handles refresh (only gets triggered when refreshing and url has a /jawn in it)
window.onload = refreshView
// hashChange function that takes an updated # URL and updates the page (and route) if/when necessary
window.onhashchange = updateView

export {setIndicatorURL, setIndexURL}