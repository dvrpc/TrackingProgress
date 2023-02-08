import { toggleIndicators, indicatorHoverFlip, clickIndicator } from './dashboardHelpers.js'
import { setIndexURL, setIndicatorURL, refreshView, updateView } from './routing.js'
import { makeHowTo, ariaShowModal, ariaHideModal } from './modal.js'


/**************************************************/
/******************** Set up *********************/
// get a handle on the splash page elements
const splash = document.getElementById('splash-page')
const viewHowTo = document.getElementById('view-how-to')
const help = document.getElementById('help-btn')
const videosLoaded = {
    dashSummary: false,
    indicatorSummary: false
}
let splashVisible = true
let modal = false

// get a handle on the dashboard elements
const grid = document.querySelector('.indicators-grid')
const filterState = document.getElementById('filter-type-form')
const filters = [... document.querySelectorAll('.icon-set')]
const headerHeight = window.innerHeight * 0.08
let catFilters = []
let emojiFilters = []

// populate cat/emoji filter arrays
filters.forEach(filter => filter.classList.contains('emoji-set') ? emojiFilters.push(filter) : catFilters.push(filter))
let filterType = 'category'

// get a handle on the indicator page elements
const back = document.querySelector('.back-to-dash')
const indicators = [... document.querySelectorAll('.indicators-grid-item')]


/**************************************************/
/*************** Splash Page events ***************/
// when the splash page is visible, listen to scroll events to know when to hide it
// @TODO: for perf, refactor as observer 
document.onscroll = () => {
    if(!splashVisible) return
    
    const top = grid.getBoundingClientRect().top

    if(top < headerHeight) {
        // display the (i) into the header
        help.classList.add('fade-in')

        splash.style.position = 'fixed'
        splash.style.visibility = 'hidden'

        // undo the margin that allows splash page and dash to coexist
        dashboard.style.marginTop = '6vh'

        window.scrollTo(0,0)

        // flip splash state
        splashVisible = false
    }
}

// bring back the splash page
help.onclick = () => {
    
    // handle edge case where user clicks button while it's hidden
    if(splashVisible) return
    
    // reveal splash page
    splash.style.position = 'initial'
    splash.style.visibility = 'visible'

    // remove dash margin
    dashboard.style.marginTop = '0'

    // scroll to top of the page
    window.scrollTo({
        top: 0,
        behvaior: 'smooth'
    })

    // flip the splash bool to listen to scroll events again
    splashVisible = true

    // hide the (i)
    help.classList.remove('fade-in')
}

// toggle modal state
viewHowTo.onclick = e => {
    e.preventDefault()
    
    if(modal) {
        ariaShowModal(modal)
    } else {
        const howTo = makeHowTo()
        const wrapper = splash.parentElement
        wrapper.appendChild(howTo)
        modal = howTo
    }
}

// close modal w/escape key
document.onkeydown = event => {
  // only hide existing, open modals 
  if( event.code === 'Escape' && modal && modal.style.display !== 'none'){
    ariaHideModal(modal)
  }
}



/**************************************************/
/**************** Dashboard Events ****************/

// listen to filter state in order to show the correct set
filterState.onchange = e => {
    // update filterType
    filterType = e.target.value
    
    // reset to unfiltered view
    clearIndicators()
    resetFilters(filterType)

    // show/hide relevant icon-set
    filterType === 'category' ? replaceFilter(emojiFilters, catFilters) : replaceFilter(catFilters, emojiFilters)
}

// functions to reset all indicators to default view
const replaceFilter = (oldFilters, newFilters) => {
    oldFilters.forEach(filter => filter.style.display = 'none')
    newFilters.forEach(filter => filter.style.display = 'flex')
}
const clearIndicators = () => indicators.forEach(indicator => {
    indicator.classList.remove('inactive')
    indicator.style.background = '#4fa3a8'
})

// reset icon-sets to their default state
const resetFilters = type => {
    if(type === 'emoji') {
        emojiFilters.forEach(emoji => {
            emoji.classList.remove('icon-set-active', 'icon-set-inactive')
            emoji.style.color = '#4fa3a8'
            emoji.style.background = '#e9e9e9'
        })
    }else {
        catFilters.forEach(category => {
            category.classList.remove('icon-set-inactive', 'icon-set-active')
        })
    }
} 

// apply filter toggle to each category
filters.forEach(filter => filter.onclick = () => toggleIndicators(filter, indicators, filterType))

//  add flip handler
indicators.forEach(indicator => {
    indicator.onmouseenter = indicator => indicatorHoverFlip(indicator, true)
    indicator.onmouseleave = indicator => indicatorHoverFlip(indicator, false)
})

// load the selected indicator page & transition to it
grid.onclick = e => {
    let title;

    // only setIndicator if the user clicked on a valid tile
    if(e.target.nodeName != 'MAIN'){
        // get title from the clicked element
        title = clickIndicator(e)
        
        // scroll & load
        if(!help.classList.contains('fade-in')){
            const gridOffset = (grid.getBoundingClientRect().top + window.scrollY)
            
            window.setTimeout(setIndicatorURL, 250, title)

            window.scrollTo({
                top: gridOffset,
                behavior: 'smooth'
            })
        } else {
            setIndicatorURL(title)
        }
    }
}

// return to dashboard view
back.onclick = () => {
    if(splashVisible) {
        // get splash page height + grid padding to trigger the onscroll effect
        const splashHeight = splash.clientHeight + 10
    
        window.scrollTo({
            top: splashHeight,
            behavior: 'smooth'
        })
    
    } else {
        window.scrollTo({
            top: 0
        })
    }

    setIndexURL()
}


// add new dat UI element(s)
const makeNewDataEl = () => {
    const newDataEl = document.createElement('div')

    newDataEl.classList.add('new-data')
    newDataEl.textContent = 'new data!'

    return newDataEl
}

const addNewDataUIEls = async () => {
    try {
        const stream = await fetch('http://linux3.dvrpc.org/api/tp-updates/v1/indicators')
        
        if(stream.ok) {
            const els = await stream.json()

            if(els.length) {
                els.forEach(el => {
                    const activeIndicator = grid.querySelector(`#${el}`)
                    activeIndicator.prepend(makeNewDataEl())
                })
            }
        }
    } catch(error) {
        return false
    }
}

addNewDataUIEls()

/*************************************************/
/***************** Window Events *****************/
// hashChange function parses an updated URL and updates the page (and route) when using navigation arrows
window.onhashchange = updateView

// handles refresh (only gets triggered when refreshing an indicator page)
window.onload = refreshView