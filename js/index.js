// nav interactivity
/*const nav = document.querySelector('.nav')
const navLogo = document.querySelector('#nav-logo')

if(nav.offsetTop > 0){
    console.log('in the nav condition')
    nav.style.padding = '0 1% 0 1%'
    navLogo.src = '/img/homepage/logo_small30px.png'
}*/

const grid = document.querySelector('.indicators-grid')

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

// dummy data to loop thru and create 36 sub grids
for(var i = 0; i < 36; i++){
    let gridItem = document.createElement('div')
    gridItem.classList.add('indicators-grid-item')

    if(topSoFar[i]) {
        console.log('in the condition')

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

const indicators = [... document.querySelectorAll('.indicators-grid-item')]

// rerence to the clicked category
let clickedRef = ''

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

// get a handle on the clickable elements & apply the toggle function
const categories = [... document.querySelectorAll('.icon-set')]
categories.forEach(category => category.onclick = () => toggleIndicators(category))


/*** Indicator Details View ***/

// get a handle on additional elements
const indicatorsNav = document.querySelector('.indicators-nav')
const back = document.querySelector('.back-to-dash')

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

// refernce to the snippets for quick access during fetch
const snippetsRef = {
    'Vehicle Miles Traveled': 'vehicleMilesTraveled.html',
    'Highway Congestion': 'highwayCongestion.html',
    'Bridge Conditions': 'bridgeConditions.html',
    'non-SOV Commuting Mode Share': 'nonSOVCommutingModeShare.html',
    'Educational Attainment': 'educationalAttainment.html',
    'Income Inequality': 'incomeInequality.html',
    'Land Preservation': 'landPreservation.html',
    'Population Growth': 'populationGrowth.html',
    'Air Quality': 'airQuality.html',
    'Affordable Housing': 'affordableHousing.html',
    'Transit Conditions': 'transitConditions.html'
}

getIndicatorSnippet = title => {
    
    // using the indicator title, get the corresponding snippet for that indicator page
    const snippet = snippetsRef[title]

    // this condition only exists because most of the indicators are empty at the moment
    if(snippet){
        let page = `./indicatorSnippets/${snippet}`
        fetch(page).then(response => response.text()).then(snippet =>{

            grid.insertAdjacentHTML('beforebegin', snippet)
        })
    }
}

let indicatorTitle;

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
