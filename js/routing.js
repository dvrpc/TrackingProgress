import { makeIndicatorPage } from './indicatorHelpers.js'
import { makeDashboard, removeDashboard } from './dashboardHelpers.js';

const dashboard = document.getElementById('dashboard')
const nav = dashboard.children[0]
const grid = dashboard.children[1]
const splashPage = document.getElementById('splash-page')
const filterState = document.getElementById('filter-type-form')


// for development/live
const baseURL = process.env.baseURL

// remove possible special characters from URL by whitelisting alphanumeric characters, -, / and &
const sanitizeHash = hash => hash.replace(/[^\w\-\/\&]/gi, '')

const setIndexURL = () => {
    // update the URL state
    history.pushState({page: 'home'}, 'Tracking Progress', baseURL)
    
    // update the view (onhashchange doesnt get triggered so have to manually invoke updateView)
    updateView()
}

// take an indicator title and update the URL, triggering an onhashchange event that creates the indicator page
const setIndicatorURL = (title, primaryCategory) => {

    // pull relevant info from the URL
    const formattedTitle = title.trim().replace(/\s+/g, '-')
    const newHash = `${formattedTitle}/${primaryCategory}`

    // update URL state
    history.pushState({page: 'indicator'}, title, `${baseURL}#${newHash}`)

    // update the view (onhashchange doesnt get triggered so have to manually invoke updateView)
    updateView(newHash)
}

// parses the URL hash and hydrates the page with the appropriate information
const updateView = () => {
    // let hash = hashParam ? hashParam : sanitizeHash(location.hash)
    const hash = location.hash ? sanitizeHash(location.hash) : false
    
    if(hash){
        // handle splash page visibility
        splashPage.style.position = 'fixed'
        splashPage.style.visibility = 'collapse'
        dashboard.style.marginTop = '6vh'
        
        if(!grid.classList.contains('fade-right')) removeDashboard()
        
        // create indicator page and hide dash (if needed)
        let hashArray = hash.split('/')

        if( window.innerWidth > 800 ) nav.classList.add('indicators-nav-indicators-page')
        makeIndicatorPage(hashArray)

    }else{
        const relatedIndicators = document.querySelector('.related-indicators')
        nav.classList.remove('indicators-nav-indicators-page')
        makeDashboard(relatedIndicators)
    }
}

// refreshing an indicator page renders it w/o triggering the normal transitions
const refreshView = () => {
    let hash = location.hash

    // reset filter state to default
    filterState[1].value = 'category'

    // only update the view if refreshing an indicator page
    if(hash.length) {
        updateView()
    }

    dashboard.style.visibility = 'visible'
}

export {setIndicatorURL, setIndexURL, refreshView, updateView}