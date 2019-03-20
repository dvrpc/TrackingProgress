import { makeIndicatorPage } from './indicatorHelpers.js'
import { makeDashboard, removeDashboard } from './dashboardHelpers.js';

const appWrapper = document.getElementById('dashboard')
const grid = document.querySelector('.indicators-grid')
const indicatorsNav = document.querySelector('.indicators-nav')
const back = document.querySelector('.back-to-dash')
const categories = [... document.querySelectorAll('.icon-set')]

// @TODO: update baseURL for production
const baseURL =  'http://dev.dvrpc.org/TrackingProgress/'

const setIndexURL = () => {
    // update the URL state
    history.pushState({page: 'home'}, 'Tracking Progress', baseURL)
    
    // update the view (onhashchange doesnt get triggered so have to manually invoke updateView)
    updateView(false, false)
}

// take an indicator title and update the URL, triggering an onhashchange event that creates the indicator page
const setIndicatorURL = (title, primaryCategory, transition) => {

    // pull relevant info from the URL
    const titlesMinusSpace = title.trim().replace(/\s+/g, '-')
    const newHash = `#${titlesMinusSpace}/${primaryCategory}`

    // update URL state
    history.pushState({page: 'indicator'}, title, `${baseURL}${newHash}`)

    // update the view (onhashchange doesnt get triggered so have to manually invoke updateView)
    updateView(transition, newHash)
}

// parses the URL hash and hydrates the page with the appropriate information
const updateView = (transition, hashParam) => {
    let hash = hashParam ? hashParam : location.hash

    if(hash){
        let hashArray = hash.trim().slice(1).split('/')
        makeIndicatorPage(hashArray)
        grid.classList.contains('fade-right') ? null : removeDashboard(grid, indicatorsNav, back, categories, transition)
    }else{
        const relatedIndicators = document.querySelector('.related-indicators')
        makeDashboard(relatedIndicators, indicatorsNav, back, grid, categories)
    }

    // let the buffer jawn know the function is done
    return false
}

// refreshing an indicator page renders it w/o triggering the normal transitions
const refreshView = () => {
    const hash = location.hash

    // only update the view if refreshing an indicator page
    if(hash.length) updateView(false, hash)

    appWrapper.style.visibility = 'visible'
}

export {setIndicatorURL, setIndexURL, refreshView, updateView}