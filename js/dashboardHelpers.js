// get a handle on elements to make/remove the dashboard
const dashboard = document.getElementById('dashboard')
const grid = dashboard.children[1]
const indicatorsNav = document.querySelector('.indicators-nav')
const back = document.querySelector('.back-to-dash')
const iconArrs = [... document.querySelectorAll('.icon-set')]
const filterToggle = document.getElementById('filter-type-form')

// rerence to the clicked category (this has to exist outside the scope of toggleIndicators, otherwise clicking an active category won't reset to all indicators view)
let clickedRef;

// colors to change indicator background to on cat filter
const catColors = {
    'econo': '#721E52',
    'enviro': '#006227',
    'comm': '#004C6C',
    'transpo': '#433C59',
    'equity': '#166871',
    'sustain': '#00474E',
    'resil': '#4D8185'
}

const handleDashboardTransition = relatedIndicators => {
    // remove un-needed elements
    while(relatedIndicators.firstChild){
        relatedIndicators.removeChild(relatedIndicators.firstChild)
    }
    
    back.style.display = 'none'
    relatedIndicators.style.display = 'none'
    
    filterToggle.style.display = 'initial'
    getActiveIcons().forEach(icon => icon.style.display = 'flex')
}

const makeDashboard = relatedIndicators => {
    const indicator = document.querySelector('.indicators-snippet')

    // keep snippet in place while transitioning & constrain height to grid so cat nav imgs don't get stretched
    indicator.style.paddingLeft = '15vw'
    indicator.style.height = 'calc(94vh - 64px)'

    // reveal the indicators grid, widen the sideNav and reveal the categories
    grid.classList.remove('fade-right')
    indicator.classList.remove('indicators-snippet-visible')

    handleDashboardTransition(relatedIndicators)

    // remove grid after transition (desktop) or immediately (mobile)
    if(window.innerWidth > 800) {
        window.setTimeout(() => {
            if(indicator) indicator.remove()
        }, 2000)

    }else {
        if(indicator) indicator.remove()
    }
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
    const iconEls = element.parentNode
    const activeIcon = iconEls.querySelector('.icon-set-active')
    if(activeIcon) activeIcon.classList.remove('icon-set-active')

    // get a handle on the elements info
    const elID = element.id
    let categoryName;

    // toggle based on filter type
    if(filterType === 'category') {
        categoryName = elID.split('-')[0]
        iconArrs.forEach(icon => toggleCatIcons(icon, element, activeIcon))
    } else{
        categoryName = elID.split('-')[1]
        iconArrs.forEach(filter => toggleEmojiIcons(filter, element, activeIcon))
    }

    // handle 3 conditions & expected behaviors: 
        // all options visible & user clicks a category --> filters to just that categories indicators
        // category already clicked & user clicks another one --> filters to just the new categories indicators
        // category already clicked & user clicks it again  --> show all indicators
    if(clickedRef === element){
        indicators.forEach(indicator => {
            indicator.classList.remove('inactive')
            indicator.style.background = '#008085'
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
const toggleCatIcons = (icon, element, activeIcon) => {
    if(activeIcon === element) {
        icon.classList.remove('icon-set-inactive', 'icon-set-active')
    } else {
        if(icon != element) {
            icon.classList.add('icon-set-inactive')
        } else {
            element.classList.remove('icon-set-inactive')
            element.classList.add('icon-set-active')
        }
    }
}
const toggleEmojiIcons = (emoji, element, activeIcon) => {
    if(activeIcon === element) {
        emoji.classList.remove('emoji-set-active', 'icon-set-active')
    } else {
        if(emoji != element) {
            emoji.classList.remove('emoji-set-active')
        } else {
            element.classList.add('icon-set-active', 'emoji-set-active')
        }
    }

    // if(emoji != element){
        
    //     // check if another category is active and set it back to default
    //     if(emoji.classList.contains('category-active')){
    //         emoji.classList.remove('category-active')
    //         emoji.style.color = '#4fa3a8'
    //         emoji.style.background = '#e9e9e9'
    //     }

    // // toggle selected category
    // }else{
    //     element.classList.toggle('category-active')
        
    //     // set active styles
    //     if(element.classList.contains('category-active')){
    //         // update bg and text color
    //         element.style.color = '#feffff'
    //         element.style.background = '#4fa3a8'
            
    //     // set default styles
    //     }else{
    //         element.style.color = '#4fa3a8'
    //         element.style.background = '#e9e9e9'
    //     }
    // }
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
    var children = Array.from(indicator.children)

    // show flipside
    if(flipTo){
        children.forEach(child => child.classList.contains('flipside') ? child.style.display = 'flex' : child.style.display = 'none')
    
    // revert to default (inherit gets the job done even tho tho revert should...?)
    }else{
        children.forEach(child => child.classList.contains('flipside') ? child.style.display = 'none' : child.style.display = 'inherit')
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

    return title
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
    let activeIcons = activeFilter === 'emoji' ? iconArrs.filter(icon => icon.classList.contains('emoji-set')) : iconArrs.filter(icon => !icon.classList.contains('emoji-set'))
    return activeIcons
}

export {toggleIndicators, fade, makeDashboard, removeDashboard, indicatorHoverFlip, clickIndicator}