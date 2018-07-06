// nav interactivity
/*const nav = document.querySelector('.nav')
const navLogo = document.querySelector('#nav-logo')

if(nav.offsetTop > 0){
    console.log('in the nav condition')
    nav.style.padding = '0 1% 0 1%'
    navLogo.src = '/img/homepage/logo_small30px.png'
}*/

const scrollArrow = document.querySelector('.down-arrow')
scrollArrow.onclick = () => window.scrollTo({
    top: 825,
    behavior: 'smooth'
})



/************************ Dashboard Functionality *********************************/
const grid = document.querySelector('.indicators-grid')
const categories = [... document.querySelectorAll('.icon-set')]
const topSoFar = [
    {
        name: 'Vehicle Miles Traveled',
        indicator: 'transportation-indicator'
    },
    {
        name: 'Highway Congestion',
        indicator: 'transportation-indicator+economy-indicator'
    },
    {
        name: 'Bridge Conditions',
        indicator: 'transportation-indicator+economy-indicator'
    },
    {
        name: 'non-SOV Commuting Mode Share',
        indicator: 'environment-indicator+communication-indicator+transportation-indicator'
    },
    {
        name: 'Educational Attainment',
        indicator: 'communication-indicator+economy-indicator+equity-indicator'
    },
    {
        name: 'Income Inequality',
        indicator: 'communication-indicator+economy-indicator+equity-indicator'
    },
    {
        name: 'Land Preservation',
        indicator: 'communication-indicator+environment-indicator+transportation-indicator'
    },
    {
        name: 'Population Growth',
        indicator: 'environment-indicator+communication-indicator+economy-indicator'
    },
    {
        name: 'Air Quality',
        indicator: 'environment-indicator+communication-indicator+equity-indicator'
    },
    {
        name: 'Affordable Housing',
        indicator: 'communication-indicator+economy-indicator+equity-indicator'
    },
    {
        name: 'Transit Conditions',
        indicator: 'economy-indicator+transportation-indicator'
    }
]

// rerence to the clicked category
let clickedRef;

// dummy data to loop thru and create 36 sub grids
for(var i = 0; i < 36; i++){
    let gridItem = document.createElement('div')
    gridItem.classList.add('indicators-grid-item')

    if(topSoFar[i]) {

        // add all the necessary indicator classes to it
        let classes = topSoFar[i].indicator.split('+')
        
        // loop thru each one if there are multiple
        if(classes.length > 1){
            classes.forEach(className => gridItem.classList.add(className))
        }else{
            gridItem.classList.add(topSoFar.indicator)
        }

        const title = document.createElement('p')
        title.classList.add('indicators-title')
        title.textContent = topSoFar[i].name
        gridItem.appendChild(title)
        grid.appendChild(gridItem)

    // make up the rest since I only have partial data for 11 indicators so far.
    // this dummy data situation is getting out of hand
    }else{     
        if(i >= 11 && i < 16) gridItem.classList.add('economy-indicator')
        if(i >= 16 && i < 21) gridItem.classList.add('environment-indicator')
        if(i >= 21 && i < 26) gridItem.classList.add('communication-indicator')
        if(i >= 26 && i < 31) gridItem.classList.add('transportation-indicator')
        if(i >= 31) gridItem.classList.add('equity-indicator')
        grid.appendChild(gridItem)
    }
}

// get a handle on each indicator after they've been generated ^
const indicators = [... document.querySelectorAll('.indicators-grid-item')]

// function to display/hide indicators based on which category is clicked
toggleIndicators = element => {

    // mark the category as active & remove it from another element (if applicable)
    const allCategories = [... element.parentNode.children]
    allCategories.forEach(category => {
        if(category != element){
            if(category.classList.contains('category-active')) category.classList.remove('category-active')
        }
    })
    element.classList.toggle('category-active')

    // get a handle on the id of the clicked div in order to grab its corresponding indicators
    let category = element.id.split('-')[0]+'-indicator'

    // handle 3 conditions & expected behaviors: 
        // all options visible & user clicks a category --> filters to just that categories indicators
        // category already clicked & user clicks another one --> filters to just the new categories indicators
        // category already clicked & user clicks it again  --> show all indicators
    if(clickedRef === element){
        indicators.forEach(indicator => indicator.classList.remove('hidden'))
        clickedRef = ''
    }else{    
        indicators.forEach(indicator => {
            if(!indicator.classList.contains(category)) indicator.classList.add('hidden')
            else indicator.classList.remove('hidden')
        })
        clickedRef = element
    }
}

// apply filter toggle to each category
categories.forEach(category => category.onclick = () => toggleIndicators(category))



/************************ Toggle Indicators View *********************************/
const indicatorsNav = document.querySelector('.indicators-nav')
const back = document.querySelector('.back-to-dash')

// reference to the snippets for quick access during fetch

// map true's for now:
    // highway congestion, educational attainment, population growth, transit conditions
const snippetsRef = {
    'Vehicle Miles Traveled': {file: 'vehicleMilesTraveled.html', map: false, d3: false },
    'Highway Congestion': {file: 'highwayCongestion.html', map: true, d3: false },
    'Bridge Conditions': {file: 'bridgeConditions.html', map: false, d3: false },
    'non-SOV Commuting Mode Share': {file: 'nonSOVCommutingModeShare.html', map: false, d3: false },
    'Educational Attainment': {file: 'educationalAttainment.html', map: true, d3: false },
    'Income Inequality': {file: 'incomeInequality.html', map: false, d3: false },
    'Land Preservation': {file: 'landPreservation.html', map: false, d3: false },
    'Population Growth': {file: 'populationGrowth.html', map: true, d3: false},
    'Air Quality': {file: 'airQuality.html', map: false, d3: true},
    'Affordable Housing': {file: 'affordableHousing.html', map: false, d3: true},
    'Transit Conditions': {file: 'transitConditions.html', map: true, d3: true}
}
let indicatorTitle;

// booleans to keep track of what extra visualizations are needed
let snippetHasMap = false
let d3 = false

// fade/slide out elements
fade = () => {
    grid.classList.add('fade-right')
    indicatorsNav.classList.add('fade-narrow')    
    categories.forEach(category => category.classList.add('fade-out'))
}

// reveal all the indicators and categories
back.onclick = () => {
    grid.style.display = 'flex'
    setTimeout(() => {

        // remove the indicator snippet from the DOM tree // again, check if it exists b/c most of the times it wont for now since the tiles are all blank
        const indicatorDetails = document.querySelector('.indicators-snippet')
        if(indicatorDetails) indicatorDetails.remove()

        back.style.display = 'none'
        
        // reveal the indicators grid, widen the sideNav and reveal the categories
        indicatorsNav.classList.remove('fade-narrow')
        grid.classList.remove('fade-right')
        categories.forEach(category => category.classList.toggle('fade-out'))
    }, 100)
}

// fetch indicator HTML based on the title of the clicked indicator
getIndicatorSnippet = title => {
    
    // using the indicator title, get the corresponding snippet for that indicator page
    const snippet = snippetsRef[title].file

    // this condition only exists because most of the indicators are empty at the moment
    if(snippet){

        // trigger visualization conditions
        snippetHasMap = snippetsRef[title].map
        d3 = snippetsRef[title].d3

        let page = `./indicatorSnippets/${snippet}`

        // note for the future: the intial response has a URL that is base + snippetFileName.html. will be useful later IF I have to create a way to link to/from indicator views
        fetch(page).then(response => response.text()).then(snippet =>{
            grid.insertAdjacentHTML('beforebegin', snippet)
            if(snippetHasMap) {
                // get a handle on the newly created map div & use that to generate a map
                let container = document.querySelector('#map')
                generateMap(container)
            }
        })
    }
}

// apply fade-out transition to each indicator & reveal 'back' button
indicators.forEach(indicator => indicator.onclick = () => {
    fade()
    setTimeout(() => {

        // after the transition is done, display: none to remove DOM space
        grid.style.display = 'none'

        // check for title for now b/c most of the indicator tiles are blank
        indicator.children.length ? indicatorTitle = indicator.children[0].textContent : null
        if(indicatorTitle) getIndicatorSnippet(indicatorTitle)

        const indicatorSnippet = document.querySelector('.indicators-snippet')
        back.style.display = 'block'
    }
    , 1500)
})



/************************ Map Content for Indicators *********************************/
generateMap = container => {
    mapboxgl.accessToken = 'pk.eyJ1IjoibW1vbHRhIiwiYSI6ImNqZDBkMDZhYjJ6YzczNHJ4cno5eTcydnMifQ.RJNJ7s7hBfrJITOBZBdcOA'
    const map = new mapboxgl.Map({
        container: container,
        style: 'mapbox://styles/mapbox/outdoors-v9',
        attributionControl: true,
        center: [-75.2273, 40.071],
        zoom: 8.82
    })
}