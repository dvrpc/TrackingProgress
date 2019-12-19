import { makeIndicatorPage } from './indicatorHelpers.js'
import { makeDashboard, removeDashboard } from './dashboardHelpers.js';

const dashboard = document.getElementById('dashboard')
const grid = dashboard.children[1]
const splashPage = document.getElementById('splash-page')


// for development
const baseURL =  'http://dev.dvrpc.org/TrackingProgress/'

// for review:
// const baseURL = 'http://staging.dvrpc.org/review/TrackingProgress/'

// for live:
//const baseURL = 'http://staging.dvrpc.org/TrackingProgress/'

// remove possible special characters from URL by whitelisting alphanumeric characters, -, / and &
const sanitizeHash = hash => hash.replace(/[^\w\-\/\&]/gi, '')

const setIndexURL = () => {
    // update the URL state
    history.pushState({page: 'home'}, 'Tracking Progress', baseURL)
    
    // update the view (onhashchange doesnt get triggered so have to manually invoke updateView)
    updateView(false, false)
}

// take an indicator title and update the URL, triggering an onhashchange event that creates the indicator page
const setIndicatorURL = (title, primaryCategory, transition) => {

    // pull relevant info from the URL
    const formattedTitle = title.trim().replace(/\s+/g, '-')
    const newHash = `${formattedTitle}/${primaryCategory}`

    // update URL state
    history.pushState({page: 'indicator'}, title, `${baseURL}#${newHash}`)

    // update the view (onhashchange doesnt get triggered so have to manually invoke updateView)
    updateView(transition, newHash)
}

// parses the URL hash and hydrates the page with the appropriate information
const updateView = (transition, hashParam) => {
    let hash = hashParam ? hashParam : sanitizeHash(location.hash)

    if(hash){
        // handle splash page visibility
        splashPage.style.position = 'fixed'
        splashPage.style.visibility = 'collapse'
        dashboard.style.marginTop = '8vh'
        
        // create indicator page and hide dash (if needed)
        let hashArray = hash.split('/')
        makeIndicatorPage(hashArray)
        grid.classList.contains('fade-right') ? null : removeDashboard(transition)
    }else{
        const relatedIndicators = document.querySelector('.related-indicators')
        makeDashboard(relatedIndicators)
    }
}

// refreshing an indicator page renders it w/o triggering the normal transitions
const refreshView = () => {
    let hash = location.hash

    // only update the view if refreshing an indicator page
    if(hash.length) {
        hash = sanitizeHash(hash)
        updateView(false, hash)
    }

    dashboard.style.visibility = 'visible'
}

export {setIndicatorURL, setIndexURL, refreshView, updateView}