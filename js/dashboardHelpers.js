// rerence to the clicked category (this has to exist outside the scope of toggleIndicators, otherwise clicking an active category won't reset to all indicators view)
let clickedRef;

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
    let category = element.id.split('-')[0]+'-indicator'

    // handle 3 conditions & expected behaviors: 
        // all options visible & user clicks a category --> filters to just that categories indicators
        // category already clicked & user clicks another one --> filters to just the new categories indicators
        // category already clicked & user clicks it again  --> show all indicators
    if(clickedRef === element){
        indicators.forEach(indicator => indicator.classList.remove('inactive'))
        clickedRef = ''
    }else{    
        indicators.forEach(indicator => {
            if(!indicator.classList.contains(category)) indicator.classList.add('inactive')
            else indicator.classList.remove('inactive')
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

export {toggleIndicators, fade, setIndicatorDimensions}