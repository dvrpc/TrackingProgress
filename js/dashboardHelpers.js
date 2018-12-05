// rerence to the clicked category (this has to exist outside the scope of toggleIndicators, otherwise clicking an active category won't reset to all indicators view)
let clickedRef;

// colors to change indicator background to on cat filter
const catColors = {
    'economy': '#bd2756',
    'environment': '#7a9c3e',
    'community': '#006ba6',
    'transportation': '#dd6e1d',
    'equity': '#582267'
}

const makeDashboard = (relatedIndicators, indicatorsNav, back, grid, categories) => {
    // remove the indicator snippet from the DOM tree // again, check if it exists b/c most of the times it wont for now since the tiles are all blank
    const indicator = document.querySelector('.indicators-snippet')
    if(indicator) indicator.remove()
    
    // clear the relatedIndicators div of all it's children
    while(relatedIndicators.firstChild){
        relatedIndicators.removeChild(relatedIndicators.firstChild)
    }
    
    // remove un-needed elements
    relatedIndicators.style.display = 'none'
    back.style.display = 'none'
    
    // reveal the indicators grid, widen the sideNav and reveal the categories
    indicatorsNav.classList.add('notransition')
    grid.classList.add('notransition')

    indicatorsNav.classList.remove('fade-narrow')
    grid.classList.remove('fade-right')
    categories.forEach(category => category.classList.remove('fade-out'))

    // reveal the homepage elements
    indicatorsNav.style.justifyContent = 'space-between'
}

const removeDashboard = (grid, indicatorsNav, back, categories, transition) => {
    // toggle transition depending on when/where removeDashboard gets called
    if(transition){
        grid.classList.remove('notransition')
        indicatorsNav.classList.remove('notransition')
    }else{
        grid.classList.add('notransition')
        indicatorsNav.classList.add('notransition')
    }

    // adjust side nav display
    back.style.display = 'block'
    indicatorsNav.style.justifyContent = 'flex-start'

    // transition animation from dash to indicator page
    fade(grid, indicatorsNav, categories)
}

// function to display/hide indicators based on which category is clicked
const toggleIndicators = (element, indicators) => {

    // mark the category as active & remove it from another element (if applicable)
    const allCategories = [... element.parentNode.children]

    allCategories.forEach(category => {
        if(category != element){
            if(category.classList.contains('category-active')) category.classList.remove('category-active')
        }
    })
    
    element.classList.toggle('category-active')

    // get a handle on the id of the clicked div in order to grab its corresponding indicators
    let id = element.id.split('-')[0]
    let category = id+'-indicator'

    // handle 3 conditions & expected behaviors: 
        // all options visible & user clicks a category --> filters to just that categories indicators
        // category already clicked & user clicks another one --> filters to just the new categories indicators
        // category already clicked & user clicks it again  --> show all indicators
    if(clickedRef === element){
        indicators.forEach(indicator => {
            indicator.classList.remove('inactive')
            indicator.style.background = '#4fa3a8'
        })
        clickedRef = ''
    }else{    
        indicators.forEach(indicator => {
            if(!indicator.classList.contains(category)) indicator.classList.add('inactive')
            else {
                indicator.classList.remove('inactive')
                indicator.style.background = catColors[id]
        }
        })
        clickedRef = element
    }
}

// fade/slide out elements
const fade = (grid, indicatorsNav, categories) => {
    grid.classList.add('fade-right')
    indicatorsNav.classList.add('fade-narrow')
    categories.forEach(category => category.classList.add('fade-out'))
}

// set the indicator tiles height/width
const setIndicatorDimensions = indicator => {
    let height = window.innerHeight;
    let width = window.innerWidth;

    // set the dimensions baesd on the larger of height/width. Factor in nav (8vh) for height and side nav(15vh) for width & margin (8px) for both
    let dimensions = height > width ? (height - (height * 0.08) - 8) : (width - (width * 0.15) - 8)

    indicator.style.width = `${ (dimensions / 9) + (dimensions * 0.01) }px`
    indicator.style.height = `${ (dimensions / 9) + (dimensions * 0.01) }px`

    indicator.style.margin = `${dimensions * 0.01}px`
}

const indicatorHoverFlip = (indicator, flipTo) => {
    
    // get the target of the mose event
    indicator = indicator.target
    
    // get to the parent element (unless you're already on it)
    if(!indicator.classList.contains('indicators-grid-item')) indicator = indicator.parentElement
    
    // toggle display property of ze children
    var children = indicator.children

    // brute force just to get it to work for now
    // flipTo condition: hide default view and reveal quick peak stats
    if(flipTo){
        children[0].style.display = 'none'
        children[1].style.display = 'none'
        children[2].style.display = 'flex'
    
    // else: go back to default view
    }else{
        children[0].style.display = 'block'
        children[1].style.display = 'flex'
        children[2].style.display = 'none'
    }
    
    //children[i].style.display === 'none' ? children[i].style.display = 'block' : children[i].style.display = 'none'
}

export {toggleIndicators, fade, setIndicatorDimensions, makeDashboard, removeDashboard, indicatorHoverFlip}