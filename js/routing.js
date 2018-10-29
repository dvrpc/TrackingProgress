import { makeIndicatorPage } from './indicatorHelpers.js'
import { makeDashboard, removeDashboard } from './dashboardHelpers.js';

const setIndexURL = () => {
    // update the URL state
    history.pushState({page: 'home'}, 'Tracking Progress', 'http://dev.dvrpc.org/TrackingProgress/')
    
    // update the view
    updateView()
}

// take an indicator title and update the URL, triggering an onhashchange event that creates the indicator page
const setIndicatorURL = (title, primaryCategory) => {
    const titlesMinusSpace = title.trim().replace(/\s+/g, '-')
    const newHash = `${titlesMinusSpace}/${primaryCategory}`

    // update URL state
    history.pushState({page: 'indicator'}, title, `http://dev.dvrpc.org/TrackingProgress/#${newHash}`)

    // update the view
    updateView()
}

// wrapper function that accepts a URL fragment and hydrates the page with the appropriate information
const updateView = () => {
    
    // make sure the URL is valid from our address
        // @ TODO: change to www.dvrpc.org for deploy
    if(location.hostname === 'dev.dvrpc.org'){
        let hashArray = location.hash.trim().slice(1).split('/')
        console.log('hasharray is ', hashArray)

        const grid = document.querySelector('.indicators-grid')
        const indicatorsNav = document.querySelector('.indicators-nav')
        const back = document.querySelector('.back-to-dash')
        const categories = [... document.querySelectorAll('.icon-set')]

        if(hashArray.length > 1){
            removeDashboard(grid, indicatorsNav, back, categories)
            makeIndicatorPage(hashArray)
        }else{
            // get a handle on the necessary grid elements
            const relatedIndicators = document.querySelector('.related-indicators')
            makeDashboard(relatedIndicators, indicatorsNav, back, grid, categories)
        }
    }
}

// refreshing an indicator page renders it w/o triggering the normal transitions
const refreshView = (grid, back, indicatorsNav, categories) => {
    // if refreshing the homepage, do nothing
    if(location.href !== 'http://dev.dvrpc.org/TrackingProgress/'){

        // refactor into a function called (hideDashboard)
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

export {setIndicatorURL, setIndexURL, refreshView, updateView}