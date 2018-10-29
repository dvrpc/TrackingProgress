import { makeIndicatorPage } from './indicatorHelpers.js'
import { makeDashboard, removeDashboard } from './dashboardHelpers.js';

const setIndexURL = () => {
    console.log('triggered set index url')

    history.pushState({page: 'home'}, 'Tracking Progress', 'http://dev.dvrpc.org/TrackingProgress/')
}

// take an indicator title and update the URL, triggering an onhashchange event that creates the indicator page
const setIndicatorURL = (title, primaryCategory) => {
    console.log('triggered set indicator url')

    const titlesMinusSpace = title.trim().replace(/\s+/g, '-')
    const newHash = `${titlesMinusSpace}/${primaryCategory}`
        
    // trigger a hash change to pull in the new page information
    location.hash = newHash

    // update URL state
    history.pushState({page: 'indicator', details: newHash}, title, `http://dev.dvrpc.org/TrackingProgress/#${newHash}`)
}

// wrapper function that accepts a URL fragment and hydrates the page with the appropriate information
const updateView = () => {
    // console.log('triggered update view')

    // make sure the URL is valid from our address
        // @ TODO: change to www.dvrpc.org for deploy
    if(location.hostname === 'dev.dvrpc.org'){
        let hashArray = location.hash.trim().slice(1).split('/')

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
    // console.log('triggered refreshview')

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

// pop state up in this mfer
const popState = event => {
    const state = JSON.stringify(event.state)
    console.log('popstate state ', state)
    
    switch(state){
        case 'indicator':
            updateView()
        case 'home':

    }
    
    // only call this if popState only gets trigered by clicking forward/back which is what I thought triggered this in the first place so fuck everything
    //updateView()

    //const state = event.originalEvent.state

    // if(state){
    //     console.log('state is ', state)
        
    //     // call update view? just doing this might not be enough to handle removing extra inidcators or the grid or other
    //     updateView()
    // }
}

export {setIndicatorURL, setIndexURL, refreshView, popState, updateView}