// get a handle on elements to make/remove the dashboard
const dashboard = document.getElementById('dashboard')
const grid = dashboard.children[1]
const indicatorsNav = document.querySelector('.indicators-nav')
const back = document.querySelector('.back-to-dash')
const categories = [... document.querySelectorAll('.icon-set')]

// rerence to the clicked category (this has to exist outside the scope of toggleIndicators, otherwise clicking an active category won't reset to all indicators view)
let clickedRef;

// colors to change indicator background to on cat filter
const catColors = {
    'econo': '#bd2756',
    'enviro': '#7a9c3e',
    'comm': '#006ba6',
    'transpo': '#dd6e1d',
    'equity': '#582267',
    'econo-default': '#f0cfd0',
    'enviro-default': '#e0e6cf',
    'comm-default': '#c6d6ea',
    'transpo-default': '#f9dcc4',
    'equity-default': '#c6b7cd'
}

const makeDashboard = relatedIndicators => {
    
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

const removeDashboard = transition => {
    // toggle transition depending on when/where removeDashboard gets called
    if(transition){
        grid.classList.remove('notransition')
        indicatorsNav.classList.remove('notransition')
    }else{
        grid.classList.add('notransition')
        indicatorsNav.classList.add('notransition')
    }

    // transition animation from dash to indicator page
    fade(grid, indicatorsNav, categories)

    // adjust side nav display
    back.style.display = 'block'
    indicatorsNav.style.justifyContent = 'flex-start'
}

// function to display/hide indicators based on which category is clicked
const toggleIndicators = (element, indicators) => {

    // mark the category as active & remove it from another element (if applicable)
    const allCategories = [... element.parentNode.children]
   
    // get a handle on the elements info
    const elID = element.id
    const img = element.children[0]
    const categoryName = elID.split('-')[0]

    allCategories.forEach(category => {
        if(category != element){
            
            // check if another category is active and set it back to default
            if(category.classList.contains('category-active')){
                const categoryID = category.id
                const img = category.children[0]
                const previousCategoryName = categoryID.split('-')[0]+'-default'

                img.src = `./img/${categoryID}.png`
                category.classList.remove('category-active')
                category.style.background = catColors[previousCategoryName]
            }

        // toggle selected category
        }else{
            element.classList.toggle('category-active')
            
            // set active styles
            if(element.classList.contains('category-active')){
                const activeCategoryImg = elID + '-active'
                img.src=`./img/${activeCategoryImg}.png`
                element.style.background = catColors[categoryName]
                
            // set default styles
            }else{
                img.src=`./img/${elID}.png`
                const categoryDefaultBackground = categoryName + '-default'
                element.style.background = catColors[categoryDefaultBackground]
            }
        }
    })

    // get a handle on the id of the clicked div in order to grab its corresponding indicators

    // @TODO here
    //let category = categoryName+'-indicator'

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
            const categories = indicator.dataset.categories.split(' ')
            console.log('categories data attribute ', categories)
            console.log('category name ', categoryName)
            // @TODO here (replace .classList.contains with .categories.contains(categoryName))
            if(!categories.includes(categoryName)) indicator.classList.add('inactive')
            else {
                indicator.classList.remove('inactive')
                indicator.style.background = catColors[categoryName]
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

// reveal flipside content for indicators
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

// get indicator information from grid click
const clickIndicator = e => {
    const el = e.target
    let indicator;

    // recursively find the parent indicator element
    indicator = getIndicatorDetails(el)

    // get the title from it's id
    let title = indicator.id ? indicator.id : null
    //const primaryCategory = indicator.classList[1]
    // @TODO: here
    const primaryCategory = indicator.dataset.primary

    return [title, primaryCategory]
}

// recursive helper to get the indicator itself
const getIndicatorDetails = el => {
    let parent = el.parentNode
    
    // base case
    if(parent.classList.contains('indicators-grid-item')) return parent
    
    // recursive case
    return getIndicatorDetails(parent)
}

export {toggleIndicators, fade, makeDashboard, removeDashboard, indicatorHoverFlip, clickIndicator}