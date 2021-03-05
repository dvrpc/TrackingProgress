// get a handle on elements to make/remove the dashboard
const dashboard = document.getElementById('dashboard')
const grid = dashboard.children[1]
const indicatorsNav = document.querySelector('.indicators-nav')
const back = document.querySelector('.back-to-dash')
const iconSets = [... document.querySelectorAll('.icon-set')]
const filterToggle = document.getElementById('filter-type-form')

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
    // reveal the indicators grid, widen the sideNav and reveal the categories
    grid.classList.remove('fade-right')
    filterToggle.style.display = 'initial'

    // // clear the relatedIndicators div of all it's children
    while(relatedIndicators.firstChild){
        relatedIndicators.removeChild(relatedIndicators.firstChild)
    }
    
    // remove un-needed elements
    relatedIndicators.style.display = 'none'
    back.style.display = 'none'
    
    const activeIcons = getActiveIcons()
    activeIcons.forEach(icon => icon.style.display = 'flex')

    // // reveal the homepage elements
    indicatorsNav.style.justifyContent = 'space-between'

    // wait until grid has mostly returned before removing indicator snippet. Looks cleaner. 
    // window.setTimeout(() => {
        const indicator = document.querySelector('.indicators-snippet')
        if(indicator) indicator.remove()
    // }, 1900)
}

const removeDashboard = () => {
    // transition animation from dash to indicator page
    fade()

    // adjust side nav display
    back.style.display = 'block'
    indicatorsNav.style.justifyContent = 'flex-start'
}

// function to display/hide indicators based on which category is clicked
const toggleIndicators = (element, indicators, filterType) => {
    // @TODO: either pre-filter or filter iconSets here to only include the 5 relevant icon-sets for the filterType
    let iconSets = [... element.parentNode.children]

    // get a handle on the elements info
    const elID = element.id
    let categoryName;

    // toggle based on filter type
    if(filterType === 'category') {
        categoryName = elID.split('-')[0]
        const img = element.children[0]
        const filterOptions = { elID, img, categoryName }
        iconSets.forEach(filter => toggleCatIcons(filter, element, filterOptions))
    } else{
        categoryName = elID.split('-')[1]
        iconSets.forEach(filter => toggleEmojiIcons(filter, element))
    }

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
            let filterSet = filterType === 'category' ? indicator.dataset.categories.split(' ') : indicator.dataset.emoji

            if(!filterSet.includes(categoryName)) indicator.classList.add('inactive')
            else {
                indicator.classList.remove('inactive')

                // update tile background to category background for category filter (ignore for emojis)
                if(filterType === 'category') indicator.style.background = catColors[categoryName]
            }
        })
        clickedRef = element
    }
}

// helpers for toggling icon-sets
const toggleCatIcons = (filter, element, options) => {
    const {elID, img, categoryName} = {... options}

    if(filter != element){
            
        // check if another category is active and set it back to default
        if(filter.classList.contains('category-active')){
            const filterID = filter.id
            const img = filter.children[0]
            const previousFilterName = filterID.split('-')[0]+'-default'

            img.src = `./img/${filterID}.png`
            filter.style.background = catColors[previousFilterName]
            filter.classList.remove('category-active')
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
}
const toggleEmojiIcons = (filter, element) => {
    if(filter != element){
        
        // check if another category is active and set it back to default
        if(filter.classList.contains('category-active')){
            filter.classList.remove('category-active')
            filter.style.background = '#e9e9e9'
        }

    // toggle selected category
    }else{
        element.classList.toggle('category-active')
        
        // set active styles
        if(element.classList.contains('category-active')){
            // update bg and text color
            element.style.background = '#4fa3a8'
            
        // set default styles
        }else{
            element.style.color = '#4fa3a8'
            element.style.background = '#e9e9e9'
        }
    }
}

// fade/slide out elements
const fade = () => {
    grid.classList.add('fade-right')
    filterToggle.style.display = 'none'
    
    const activeIcons = getActiveIcons()
    activeIcons.forEach(icon => icon.style.display = 'none')
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
}

// get indicator information from grid click
const clickIndicator = e => {
    const el = e.target
    let indicator;

    // recursively find the parent indicator element
    indicator = getIndicatorDetails(el)

    // get the title from it's id
    let title = indicator.id ? indicator.id : null
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

// helper to get the list of currently active icons from the side bar
const getActiveIcons = () => {
    const select = filterToggle.querySelector('select')
    const activeFilter = select.options[select.selectedIndex].value
    let activeIcons = activeFilter === 'emoji' ? iconSets.filter(icon => icon.classList.contains('emoji-set')) : iconSets.filter(icon => !icon.classList.contains('emoji-set'))
    return activeIcons
}

export {toggleIndicators, fade, makeDashboard, removeDashboard, indicatorHoverFlip, clickIndicator}