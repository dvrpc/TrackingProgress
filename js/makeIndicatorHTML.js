// create a generic indicator page and loop through the ref.js entry to populate it with the specifics.
// desired output:

/* Needs:
    - indicator title
    - ref.categories
    - ref.trend
    ... needs snippet, period
*/
const makeIndicatorHTML = ref => {
    // create local variables
    const dataPrimary = ref.categories[0]

    // @UPDATE: trend obj
    /*
    const trend = {
        status: 'awesome',
        text: {
            stat: 54% drop,
            text: ' in bridge deck area rated deficient since a 2003 peak of 18%' 
        }
    }
    */

    const trend = ref.trend
    const trendStatus = trend.status
    const trendText = trend.text


    // create the elements
    const frag = document.createDocumentFragment()

    const snippet = document.createElement('article')
    const headerWrapper = document.createElement('div')
    const header = document.createElement('h1')
    const catIconsWrapper = document.createElement('div')
    const catIcons = makeIconImgs(ref.categories)

    const descriptionWrapper = document.createElement('article')
    const tabsWrapper = document.createElement('header')
    const whyTab = document.createElement('h2')
    const whatTab = document.createElement('h2')
    const howTab = document.createElement('h2')
    const resourceTab = document.createElement('h2')
    const descriptionContentWrapper = document.createElement('div')
    const description = document.createElement('section')
    const contextWrapper = document.createElement('aside')
    const contextImg = document.createElement('img')
    const contextText = makeTrendText(trendText)

    const hr = document.createElement('hr')


    // add classes, id's and data-* attributes
    snippet.classList.add('indicators-snippet')
    headerWrapper.id = 'indicator-header-wrapper'
    header.classList.add('indicator-header')
    catIconsWrapper.classList.add('indicator-category-icons')

    descriptionWrapper.id = 'description-wrapper'
    tabsWrapper.id = 'description-wrapper-tabs'
    whyTab.id = 'why-tab'
    whatTab.id = 'what-tab'
    howTab.id = 'how-tab'
    resourceTab.id = 'resource-tab'

    descriptionContentWrapper.id = 'description-content-wrapper'
    description.id = 'indicator-description-container'
    description.datasets['data-primary'] = dataPrimary

    contextWrapper.classList.add('indicator-emoji-context')
    contextImg.classList.add('indicator.emoji-context-img')
    contextImg.src = `./img/emoji-${trendStatus}.png`
    contextImg.alt = `${trendStatus} emoji`

    hr.classList.add('indicator-header-hr')


    // append jawns
    catIconsWrapper.appendChild(catIcons)
    headerWrapper.appendChild(header)
    headerWrapper.appendChild(catIconsWrapper)

    tabsWrapper.appendChild(whyTab)
    tabsWrapper.appendChild(whatTab)
    tabsWrapper.appendChild(howTab)
    tabsWrapper.appendChild(resourceTab)
    contextWrapper.appendChild(contextImg)
    contextWrapper.appendChild(contextText)
    descriptionContentWrapper.appendChild(description)
    descriptionContentWrapper.appendChild(contextWrapper)
    descriptionWrapper.appendChild(tabsWrapper)
    descriptionWrapper.appendChild(descriptionContentWrapper)

    snippet.appendChild(headerWrapper)
    snippet.appendChild(descriptionWrapper)
    snippet.appendChild(hr)

    
    // add chart info
    // @UPDATE: create and import all chartStrings as an object. Insert/append to frag after everything else is added
    // const chartString = chartStrings[snippet.id / snippet.name / snippet.key]// get chartString
    // snippet.insertAdjacentHTML('beforeend', chartString) (or appendChild or insertHTMLElement or whatever)
    
    frag.appendChild(snippet)
    return frag
}

// iterate over categories array and create imgs
const makeIconImgs = icons => {
    const frag = document.createDocumentFragment()

    const imgs = icons.map(icon => {
        const img = document.createElement('img')

        img.src = `./img/indicator_headers/${icon}-icon.png`
        img.alt = `${icon} category icon`
        img.classList.add('snippet-categories')
    })

    frag.appendChild(imgs)
    return frag
}

const makeTrendText = text => {
    const frag = document.createDocumentFragment()
    const p = document.createElement('p')
    const strong = document.createElement('strong')
    
    // tbd on the order of this. Desired output is <p><strong>stats text</strong> rest of text</p>
    p.appendChild(strong)
    strong.textContent = text.stat
    p.textContent = text.text

    frag.appendChild(p)
    return frag
}

{/* <article class="indicators-snippet">
    <div id="indicator-header-wrapper">

    /   // @UPDATE: insert category name here
        <h1 class="indicator-header">Bridge Conditions</h1>
        // @UPDATE END

        // @UPDATE: switch from hard coded to iterating over a "categories" field on the ref object (ex. categories: ['transpo', 'enviro'])
        <div class="indicator-category-icons">
            <img class="snippet-categories" src="./img/indicator_headers/transpo-icon.png" alt="transportation category icon"/>
        </div>
        // @UPDATE END

    </div>

    <article id="description-wrapper">
        <header id="description-wrapper-tabs">
            <h2 id="why-tab" class="description-wrapper-tab-headers active-tab">Why is it important?</h2>
            <h2 id="what-tab" class="description-wrapper-tab-headers">What is it?</h2>
            <h2 id="how-tab" class="description-wrapper-tab-headers">How are we doing?</h2>
            <h2 id="resource-tab" class="description-wrapper-tab-headers">Resources</h2>
        </header>
        <div id="description-content-wrapper">

            // @UPDATE: switch from hard coded to extracting primary from the categories array (ex. categories: = ['transpo', 'enviro'], primary = categories[0])
            <section id="indicator-description-container" data-primary="transpo"></section>
            // @UPDATE END

            // @UPDATE: switch from hard coded to a "trend" field (ex. trend: {status: 'awesome', text: strong>54% drop</strong> in bridge deck area rated deficient since a 2003 peak of 18%})
            <aside class="indicator-emoji-context">
                <img class="indicator-emoji-context-img" src="./img/emoji-awesome-teal.png" alt="very good emoji" />
                <p><strong>54% drop</strong> in bridge deck area rated deficient since a 2003 peak of 18%</p>
            </aside>
            // @UPDATE END

        </div>
    </article>

    <hr class="indicator-header-hr"/>

    // @UPDATE: consider storing these as 'chart-strings' and just pop an insertadjacentHTML('beforeend') on the indicator fragment
    // iterating over ref.js and creating extra fields w/the form content (options) and src etc might not be a good idea b/c there's so much difference
    <div class="toggle-wrapper">
        <h2 class="indicator-subheader toggle-subheader">Percentage of Deficient Bridges by Ownership Type</h2>
        <form class="double-toggle-form">
            <fieldset>
                <label for="viz-0">Select Geography: </label>
                <select id="viz-0" class="toggle-data-selector">
                    <optgroup label="Regional">
                        <option value="0">DVRPC Region</option>
                        <option value="1">NJ Counties</option>
                        <option value="2">All PA Counties</option>
                        <option value="3">PA Suburban Counties</option>
                    </optgroup>
                    <optgroup label="Counties">
                        <option value="4">Bucks</option>
                        <option value="5">Burlington</option>
                        <option value="6">Camden</option>
                        <option value="7">Chester</option>
                        <option value="8">Delaware</option>
                        <option value="9">Gloucester</option>
                        <option value="10">Mercer</option>
                        <option value="11">Montgomery</option>
                        <option value="12">Philadelphia</option>
                    </optgroup>
                </select>
            </fieldset>
            <span class="toggle-vr">|</span>
            <fieldset>
                <label for="viz-0-b">Select Value Type: </label>
                <select id="viz-0-b" class="toggle-data-selector">
                    <option value="0">Share of Total Bridge Deck Area</option>
                    <option value="1">Share of Total Bridges</option>
                </select>
            </fieldset>
        </form>
    </div>
    <div class="data-viz chart">
        <svg></svg>
    </div>
    <small class="chart-src"><em>Source: National Bridge Inventory (NBI)</em></small>

    <hr class="indicator-content-hr" />

    <div class="toggle-wrapper">
        <h2 class="indicator-subheader toggle-subheader">Deficient Bridges by Ownership Type</h2>
        <form class="double-toggle-form">
            <fieldset>
                <label for="viz-1">Select Geography: </label>
                <select id="viz-1" class="toggle-data-selector">
                    <optgroup label="Regional">
                        <option value="0">DVRPC Region</option>
                        <option value="1">NJ Counties</option>
                        <option value="2">All PA Counties</option>
                        <option value="3">PA Suburban Counties</option>
                    </optgroup>
                    <optgroup label="Counties">
                        <option value="4">Bucks</option>
                        <option value="5">Burlington</option>
                        <option value="6">Camden</option>
                        <option value="7">Chester</option>
                        <option value="8">Delaware</option>
                        <option value="9">Gloucester</option>
                        <option value="10">Mercer</option>
                        <option value="11">Montgomery</option>
                        <option value="12">Philadelphia</option>
                    </optgroup>
                </select>
            </fieldset>
            <span class="toggle-vr">|</span>
            <fieldset>
                <label for="viz-1-b">Select Value Type: </label>
                <select id="viz-1-b" class="toggle-data-selector">
                    <option value="0">Bridge Deck Area</option>
                    <option value="1">Number of Bridges</option>
                </select>
            </fieldset>
        </form>
    </div>
    <div class="data-viz chart2">
        <svg></svg>
    </div>
    <small class="chart-src"><em>Source: National Bridge Inventory (NBI)</em></small>

    <hr class="indicator-content-hr" />

    <div class="toggle-wrapper">
        <h2 class="indicator-subheader toggle-subheader">Bridges by Condition</h2>
        <form class="double-toggle-form">
            <fieldset>
                <label for="viz-2">Select Geography: </label>
                <select id="viz-2" class="toggle-data-selector">
                    <optgroup label="Regional">
                        <option value="0">DVRPC Region</option>
                        <option value="1">NJ Counties</option>
                        <option value="2">All PA Counties</option>
                        <option value="3">PA Suburban Counties</option>
                    </optgroup>
                    <optgroup label="Counties">
                        <option value="4">Bucks</option>
                        <option value="5">Burlington</option>
                        <option value="6">Camden</option>
                        <option value="7">Chester</option>
                        <option value="8">Delaware</option>
                        <option value="9">Gloucester</option>
                        <option value="10">Mercer</option>
                        <option value="11">Montgomery</option>
                        <option value="12">Philadelphia</option>
                    </optgroup>
                </select>
            </fieldset>
            <span class="toggle-vr">|</span>
            <fieldset>
                <label for="viz-2-b">Select Value Type: </label>
                <select id="viz-2-b" class="toggle-data-selector">
                    <option value="0">Bridge Deck Area</option>
                    <option value="1">Number of Bridges</option>
                </select>
            </fieldset>
        </form>
    </div>
    <div class="data-viz chart3">
        <svg></svg>
    </div>
    <small class="chart-src"><em>Source: National Bridge Inventory (NBI)</em></small>
</article> */}