import { makeIndicatorPage } from './indicatorHelpers.js'
import { makeDashboard, removeDashboard } from './dashboardHelpers.js';

const setIndexURL = () => {
    // update the URL state
    history.pushState({page: 'home'}, 'Tracking Progress', 'http://dev.dvrpc.org/TrackingProgress/')
    
    // update the view
    updateView()
}

// take an indicator title and update the URL, triggering an onhashchange event that creates the indicator page
const setIndicatorURL = (title, primaryCategory, fromHome) => {

    // pull relevant info from the URL
    const titlesMinusSpace = title.trim().replace(/\s+/g, '-')
    const newHash = fromHome ? `${titlesMinusSpace}/${primaryCategory}/${fromHome}` : `${titlesMinusSpace}/${primaryCategory}`

    // update URL state
    history.pushState({page: 'indicator'}, title, `http://dev.dvrpc.org/TrackingProgress/#${newHash}`)

    // update the view
    updateView()
}

// takes the URL hash and hydrates the page with the appropriate information
const updateView = () => {
    // make sure the URL is valid from our address
    // @ TODO: change to www.dvrpc.org for deploy
    if(location.hostname === 'dev.dvrpc.org'){
        let hashArray = location.hash.trim().slice(1).split('/')

        const grid = document.querySelector('.indicators-grid')
        const indicatorsNav = document.querySelector('.indicators-nav')
        const back = document.querySelector('.back-to-dash')
        const categories = [... document.querySelectorAll('.icon-set')]

        if(hashArray.length > 1){
            let fromHome = hashArray[2] ? true : false
            removeDashboard(grid, indicatorsNav, back, categories, fromHome)
            makeIndicatorPage(hashArray)
        }else{
            // get a handle on the necessary grid elements
            const relatedIndicators = document.querySelector('.related-indicators')
            makeDashboard(relatedIndicators, indicatorsNav, back, grid, categories)
        }
    }
}

// refreshing an indicator page renders it w/o triggering the normal transitions
const refreshView = () => {

    // if refreshing the homepage, do nothing
    if(location.href !== 'http://dev.dvrpc.org/TrackingProgress/'){
        let hashFragment = location.hash.slice(1).split('/')

        // handle edge case where user refreshes with the homepage 'true' in the hash fragment
        if(hashFragment[2] && hashFragment[2] === 'true'){
            const newHash = `${hashFragment[0]}/${hashFragment[1]}`
            const title = hashFragment[0]
            history.replaceState({page: 'indicator'}, title, `http://dev.dvrpc.org/TrackingProgress/#${newHash}`)
        }
        updateView()
    }
}

export {setIndicatorURL, setIndexURL, refreshView, updateView}