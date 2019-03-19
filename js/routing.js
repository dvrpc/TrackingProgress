import { makeIndicatorPage } from './indicatorHelpers.js'
import { makeDashboard, removeDashboard } from './dashboardHelpers.js';

const appWrapper = document.getElementById('dashboard')
const grid = document.querySelector('.indicators-grid')
const indicatorsNav = document.querySelector('.indicators-nav')
const back = document.querySelector('.back-to-dash')
const categories = [... document.querySelectorAll('.icon-set')]

// @TODO: add '|| process.ENV.jawn' for baseURL, hostName and 404 in production
const basePath = '/trackingprogress/'
const baseURL =  'http://dev.dvrpc.org/TrackingProgress/'
const hostName = 'dev.dvrpc.org' 
const four0four = 'http://dev.dvrpc.org/TrackingProgress/404.html'

// lookup table for indicator names and their associated category in order to have a running list of acceptable routes
// pattern is {indicator name: primary category}
const allowedRoutes = {
    'Air-Quality': 'enviro-indicator',
    'Commute-Mode': 'transpo-indicator',
    'Bridge-Conditions': 'transpo-indicator',
    'Educational-Attainment': 'comm-indicator',
    'Emissions': 'enviro-indicator',
    'Exports': 'econo-indicator',
    'Global-Connectivity': 'econo-indicator',
    'Housing-Activity': 'econo-indicator',
    'Housing-Affordability': 'comm-indicator',
    'Income-Disparities': 'equity-indicator',
    'Job-Growth': 'econo-indicator',
    'Land-Consumption': 'enviro-indicator',
    'Land-Preservation': 'comm-indicator',
    'Miles-Driven': 'transpo-indicator',
    'Population-Growth': 'comm-indicator',
    'Racial-Ethnic-Disparities': 'equity-indicator',
    'Roadway-Reliability': 'transpo-indicator',
    'Roadway-Safety': 'transpo-indicator',
    'Sex-Disparities': 'equity-indicator',
    'Transit-Conditions': 'transpo-indicator',
    'Transit-Ridership': 'transpo-indicator',
    'Water-Quality': 'enviro-indicator',
    'Pavement-Conditions': 'transpo-indicator',
    'Innovation': 'undefined',
    'Venture-Capital': 'undefined',
    'Productivity': 'undefined'
}

const setIndexURL = () => {
    // update the URL state
    history.pushState({page: 'home'}, 'Tracking Progress', baseURL)
    
    // update the view (onhashchange doesnt get triggered so have to manually invoke updateView)
    updateView(false)
}

// take an indicator title and update the URL, triggering an onhashchange event that creates the indicator page
const setIndicatorURL = (title, primaryCategory, transition) => {

    // pull relevant info from the URL
    const titlesMinusSpace = title.trim().replace(/\s+/g, '-')
    const newHash = `${titlesMinusSpace}/${primaryCategory}`

    // update URL state
    history.pushState({page: 'indicator'}, title, `${baseURL}#${newHash}`)

    // update the view (onhashchange doesnt get triggered so have to manually invoke updateView)
    updateView(transition)
}

// parses the URL hash and hydrates the page with the appropriate information
const updateView = transition => {

    // make sure the URL is valid from our address
    if(location.hostname === hostName){
        const path = location.pathname.toLowerCase()
        const hash = location.hash.length

        // updating indicator page case
        if(hash){
            let hashArray = location.hash.trim().slice(1).split('/')
            
            // check if the proposed route is valid
            if(hashArray[1] && allowedRoutes[hashArray[0]] === hashArray[1]){
                makeIndicatorPage(hashArray)
                grid.classList.contains('fade-right') ? null : removeDashboard(grid, indicatorsNav, back, categories, transition)
            }else{
                console.log('broken hash case')
                window.location.assign(four0four)
            }

        // going back home case
        }else if(path === basePath) {

            // get a handle on the necessary grid elements
            const relatedIndicators = document.querySelector('.related-indicators')
            makeDashboard(relatedIndicators, indicatorsNav, back, grid, categories)
        
        // catch all 404 case (doesn't handle no hash cases...)
        }else{
            console.log('catch all case')
            window.location.assign(four0four)
        }
    }
    
    // let the buffer jawn know the function is done
    return false
}

// refreshing an indicator page renders it w/o triggering the normal transitions
const refreshView = () => {
    const hash = location.hash.length

    if(hash){
        const buffer = document.getElementById('buffer')
        buffer.style.display = 'flex'

        let loading = true
        let calledUpdateView = false

        while(loading){
            console.log('loading')
            if(!calledUpdateView) {
                calledUpdateView = true
                loading = updateView(false)
            }
        }
        buffer.style.display = 'none'
    }

    appWrapper.style.visibility = 'visible'
}

export {setIndicatorURL, setIndexURL, refreshView, updateView}