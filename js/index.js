import { toggleIndicators, indicatorHoverFlip, clickIndicator } from './dashboardHelpers.js'
import { setIndexURL, setIndicatorURL, refreshView, updateView } from './routing.js'
import makeHowTo from './makeHowTo.js'


/**************************************************/
/******************** Set up *********************/
// get a handle on the splash page elements
const splash = document.getElementById('splash-page')
const toGrid = document.getElementById('to-grid')
const viewHowTo = document.getElementById('view-how-to')
const help = document.getElementById('help-btn')
const videosLoaded = {
    dashSummary: false,
    indicatorSummary: false
}
let splashVisible = true

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

// get default category colors to revert to on filter change
const catColors = {
    'econo': '#f0cfd0',
    'enviro': '#e0e6cf',
    'comm': '#c6d6ea',
    'transpo': '#f9dcc4',
    'equity': '#c6b7cd'
}

// get a handle on the indicator page elements
const back = document.querySelector('.back-to-dash')
const indicators = [... document.querySelectorAll('.indicators-grid-item')]


/**************************************************/
/*************** Splash Page events ***************/
// scroll the grid into view which will trigger the splash page hide function
toGrid.onclick = e => {
    e.preventDefault()

    // get splash page height + grid padding to trigger the onscroll effect
    const splashHeight = splash.clientHeight + 10

    window.scrollTo({
        top: splashHeight,
        behavior: 'smooth'
    })
}
viewHowTo.onclick = e => {
    e.preventDefault()

    const howTo = makeHowTo()
    const wrapper = toGrid.parentElement

    wrapper.insertAdjacentHTML('afterend', howTo)

    const infoToggles = document.querySelectorAll('.info-toggle')

    // lazy load the videos 
    infoToggles.forEach(toggle => toggle.onclick = toggle => loadVideos(toggle))

    // style the button 
    viewHowTo.classList.add('btn-disabled')
    viewHowTo.classList.remove('hover-btn')

    const head = infoToggles[0].previousElementSibling
    const offset = head.offsetTop - 65

    window.scrollTo({
        top: offset,
        behavior: 'smooth'
    })

    viewHowTo.disabled = true
}

// when the splash page is visible, listen to scroll events to know when to hide it
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

// loop thru corresponding videos and add .mp4 src
const loadVideos = toggle => {    
    let target = toggle.target

    // return if not clicking on summary or if the videos are already loaded
    if(target.nodeName != 'SUMMARY' || videosLoaded[target.id]) return
        
    const figures = target.nextElementSibling.children[0].children
    const length = figures.length
    var i = 0

    // add src
    for(i; i < length; i++) {
        const video = figures[i].children[0]
        const videoName = video.id
        video.src = `./vid/${videoName}.mp4`
    }

    // flip videos loaded bool
    videosLoaded[target.id] = true
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
    if(type === 'category') {
        emojiFilters.forEach(filter => {
            if(filter.classList.contains('category-active')){
                filter.classList.remove('category-active')
                filter.style.color = '#4fa3a8'
                filter.style.background = '#e9e9e9'
            }
        })
    }else {
        catFilters.forEach(filter => {
            if(filter.classList.contains('category-active')){
                const filterID = filter.id
                const img = filter.children[0]
                const defaultColor = filterID.split('-')[0]
    
                img.src = `./img/${filterID}.png`
                filter.style.background = catColors[defaultColor]
                filter.classList.remove('category-active')
            }
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
    let title, primaryCategory;

    // only setIndicator if the user clicked on a valid tile
    if(e.target.nodeName != 'MAIN'){
        // get title and primary category from the clicked element
        [title, primaryCategory] = [... clickIndicator(e)]
        
        // scroll & load
        if(!help.classList.contains('fade-in')){
            const gridOffset = (grid.getBoundingClientRect().top + window.scrollY)
            
            window.setTimeout(setIndicatorURL, 250, title, primaryCategory)

            window.scrollTo({
                top: gridOffset,
                behavior: 'smooth'
            })
        } else {
            setIndicatorURL(title, primaryCategory)
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


/*************************************************/
/***************** Window Events *****************/
// hashChange function parses an updated URL and updates the page (and route) when using navigation arrows
window.onhashchange = updateView

// handles refresh (only gets triggered when refreshing an indicator page)
window.onload = refreshView