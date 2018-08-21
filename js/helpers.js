/*********************************************************************************/
/*************************** Helper Functions ************************************/
/*********************************************************************************/
// nav interactivity
/*const nav = document.querySelector('.nav')
const navLogo = document.querySelector('#nav-logo')

if(nav.offsetTop > 0){
    console.log('in the nav condition')
    nav.style.padding = '0 1% 0 1%'
    navLogo.src = '/img/homepage/logo_small30px.png'
}*/

/*const scrollArrow = document.querySelector('.down-arrow')
scrollArrow.onclick = () => window.scrollTo({
    top: 825,
    behavior: 'smooth'
})*/

// toggle between charts on an indicator page
const toggleChart = (selected, indicatorName, graphs) => {

    // get chart # from the selected option
    let chartNumber = selected.options[selected.selectedIndex].value

    // get a handle on the correct chart item
    let source = indicatorName[chartNumber]

    // switch case to determine which kind of vis to make
    switch (source.type) {
        case 'line and bar':
            graphs.createLinePlusBarChart(source)
            break;
        case 'stacked bar':
            graphs.createStackedBarChart(source)
            break;
        case 'line':
            graphs.createLineChart(source)
            break;
        case 'stacked area':
            graphs.createStackedAreaChart(source)
            break;
        case 'stacked bar plus line':
            graphs.createdStackedBarPlusLine(source)
            break;
        default:
            console.log('default')
    }
}

export {toggleChart}