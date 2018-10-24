import { toggleIndicators, fade, setIndicatorDimensions } from './dashboardHelpers.js'
import { setIndexURL, setIndicatorURL } from './routing.js'

// get a handle on the dashboard elements
const grid = document.querySelector('.indicators-grid')
const categories = [... document.querySelectorAll('.icon-set')]

// get a handle on the indicator page elements
const back = document.querySelector('.back-to-dash')
const indicatorsNav = document.querySelector('.indicators-nav')
const relatedIndicators = document.querySelector('.related-indicators')

// dummy data to loop thru and create the remaining 25 sub-grids
for(var i = 0; i < 21; i++){
    let gridItem = document.createElement('div')
    let tempPhoto = document.createElement('img')
    let tempTitle = document.createElement('p')
    tempTitle.textContent = 'fake jawn'
    
    gridItem.classList.add('indicators-grid-item')
    tempPhoto.classList.add('indicators-icons')
    tempTitle.classList.add('indicators-title')
    
    if(i >= 0 && i < 5){
        gridItem.classList.add('economy-indicator')
        tempPhoto.src="./img/indicator_icons/transit_conditions.png"
    } 
    if(i >= 5 && i < 10){
        gridItem.classList.add('environment-indicator')
        tempPhoto.src="./img/indicator_icons/air_quality.png"
    } 
    if(i >= 10 && i < 15){
        gridItem.classList.add('community-indicator')
        tempPhoto.src="./img/indicator_icons/vmt.png"
    } 
    if(i >= 15 && i < 20){
        gridItem.classList.add('transportation-indicator')
        tempPhoto.src="./img/indicator_icons/income_inequality.png"
    } 
    if(i >= 20){
        gridItem.classList.add('equity-indicator')
        tempPhoto.src="./img/indicator_icons/land_preservation.png"
    }

    gridItem.appendChild(tempPhoto)
    gridItem.appendChild(tempTitle)
    grid.appendChild(gridItem)
}

// get a handle on each indicator after they've been generated ^ (@TODO: move this with the rest of the querySelectors after dummy data is removed)
const indicators = [... document.querySelectorAll('.indicators-grid-item')]

// apply filter toggle to each category
categories.forEach(category => category.onclick = () => toggleIndicators(category, indicators))

// make sure indicators are always square
indicators.forEach(indicator => setIndicatorDimensions(indicator))

// apply fade-out transition to each indicator, reveal the 'back' button & populate the new side nav w/related indicators. Use event delegation to reduce the number of assigned click handlers
grid.onclick = e => {
    // avoid cases where user clicks the grid itself
    if(e.target.nodeName != 'SECTION'){
        let indicator = e.target
        
        // if img or p is selected, get the parent div to have all the information 
        if(indicator.nodeName != 'DIV') indicator = indicator.parentElement

        fade(grid, indicatorsNav, categories)
    
        setTimeout(() => {
    
            // after the transition is done, display: none to remove DOM space
            grid.style.display = 'none'
    
            // get the title and primary class of the selected indicator
            let title = indicator.children.length ? indicator.children[1].textContent : null
            const primaryCategory = indicator.classList[1]
    
            back.style.display = 'block'
            indicatorsNav.style.justifyContent = 'flex-start'
    
            // update the URL which in turn hydrates the indicator page
            setIndicatorURL(title, primaryCategory)
        }
        , 1000)
    }
}

// update indicator tiles on window resize
window.onresize = () => (indicators.forEach(indicator => setIndicatorDimensions(indicator)))

// use a mutation observer to attach click handlers every time the sideLinks container div gets updated
const mutationConfig = {childList: true}

const updateLinks = () => {
    const sideLinks = document.querySelectorAll('.sideLink')

    sideLinks.forEach(sideLink => {
        sideLink.onclick = () => {

            const title = sideLink.textContent
            const primaryCategory = sideLink.classList[1]

            // clear the current indicator snippet
            const indicatorDetails = document.querySelector('.indicators-snippet')
            if(indicatorDetails) indicatorDetails.remove()

            // clear the side nav of all it's children
            while(relatedIndicators.firstChild){
                relatedIndicators.removeChild(relatedIndicators.firstChild)
            }

            // update the URL which in turn hydrates the new indicator page
            setIndicatorURL(title, primaryCategory)
        }
    })
}

const observer = new MutationObserver(updateLinks)
observer.observe(relatedIndicators, mutationConfig)

// return to dashboard view
back.onclick = () => {
    grid.style.display = 'flex'
    indicatorsNav.style.justifyContent = 'space-between'

    // clear the relatedIndicators div of all it's children
    while(relatedIndicators.firstChild){
        relatedIndicators.removeChild(relatedIndicators.firstChild)
    }

    // remove relatedIndicators from the DOM space
    relatedIndicators.style.display = 'none'
    
    setTimeout(() => {

        // remove the indicator snippet from the DOM tree // again, check if it exists b/c most of the times it wont for now since the tiles are all blank
        const indicatorDetails = document.querySelector('.indicators-snippet')
        if(indicatorDetails) indicatorDetails.remove()
        back.style.display = 'none'
        
        // reveal the indicators grid, widen the sideNav and reveal the categories
        indicatorsNav.classList.remove('fade-narrow', 'notransition')
        grid.classList.remove('fade-right', 'notransition')
        categories.forEach(category => category.classList.remove('fade-out', 'notransition'))

        // reset the URL to the index
        setIndexURL()
    }, 100)
}