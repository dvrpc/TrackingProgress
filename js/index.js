// nav interactivity
/*const nav = document.querySelector('.nav')
const navLogo = document.querySelector('#nav-logo')

if(nav.offsetTop > 0){
    console.log('in the nav condition')
    nav.style.padding = '0 1% 0 1%'
    navLogo.src = '/img/homepage/logo_small30px.png'
}*/

const grid = document.querySelector('.indicators-grid')

// dummy data to loop thru and create 36 sub grids
for(var i = 0; i < 36; i++){
    let gridItem = document.createElement('div')
    gridItem.classList.add('indicators-grid-item')
    grid.appendChild(gridItem)

    // dummy data classNames for the categories
    if(i >= 0 && i < 7) gridItem.classList.add('economy-indicator')
    if(i >= 7 && i < 14) gridItem.classList.add('environment-indicator')
    if(i >= 14 && i < 21) gridItem.classList.add('other-indicator')
    if(i >= 21 && i < 28) gridItem.classList.add('commerce-indicator')
    if(i >= 28) gridItem.classList.add('equity-indicator')
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
const indicatorsWrapper = document.querySelector('.indicators-wrapper')
const back = document.querySelector('.back-to-dash')

// fade out elements
fadeOut = () => {
    indicators.forEach(indicator => indicator.classList.add('fade-out'))
    categories.forEach(category => category.classList.add('fade-out'))
}

// reveal all the indicators and categories and reset indicatorsWrapper height after clicking the back button
back.onclick = () => {
    back.style.display = 'none'
    indicatorsWrapper.style.height = 'calc(93vh - 29px)'
    
    // reveal all of the indicators and category
    indicators.forEach(indicator => indicator.classList.toggle('fade-out'))
    categories.forEach(category => category.classList.toggle('fade-out'))
}

// apply fade-out transition to each indicator & reveal 'back' button
indicators.forEach(indicator => indicator.onclick = () => {
    fadeOut()
    setTimeout(() => {

        // adjust the indicators wrapper height to account for the back button block
        indicatorsWrapper.style.height = 'calc(93vh - 29px + 10vh + 20px)'
        back.style.display = 'block'

        // TODO: create HTML snippets for each indicator, put them in their own folder and then have a function that, given the ID/name of an indicator,
        // finds the right snippet in the folder and appends it to the indicators-grid.
    }
    , 1000)
})
