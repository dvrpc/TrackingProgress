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

const setIndexURL = () => history.pushState(null, 'Tracking Progress', 'http://dev.dvrpc.org/TrackingProgress/')

// take an indicator title and update the URL, triggering an onhashchange event that creates the indicator page
const setIndicatorURL = (title, primaryCategory) => {
    const titlesMinusSpace = title.replace(/\s+/g, '-')
    const newHash = `${titlesMinusSpace}/${primaryCategory}`
    
    // trigger a hash change to pull in the new page information
    location.hash = newHash

    // update URL state
    history.pushState(null, title, `http://dev.dvrpc.org/TrackingProgress/#/${newHash}`)

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

        // this can and should all be refactored into a function that sizurps
        const grid = document.querySelector('.indicators-grid')
        const categories = [... document.querySelectorAll('.icon-set')]
        const indicatorsNav = document.querySelector('.indicators-nav')
        const back = document.querySelector('.back-to-dash')

        grid.style.display = 'none'
        back.style.display = 'block'
        indicatorsNav.style.justifyContent = 'flex-start'

        grid.classList.add('notransition', 'fade-right')
        indicatorsNav.classList.add('notransition', 'fade-narrow')
        back.classList.add('notransition')

        categories.forEach(category => category.classList.add('notransition', 'fade-out'))
        updateView()

    }
}

// handles refresh (only gets triggered when refreshing and url has a /jawn in it)
window.onload = refreshView

// listen for window.onback (?) calls.
    // if back brings us to an indicator page, remove the old one & then call updateView
    // if back brings us to home then god help us all
        // the function in refreshView...but...opposite?

// hashChange function that takes an updated # URL and updates the page (and route) if/when necessary
window.onhashchange = updateView

export {setIndicatorURL, setIndexURL}