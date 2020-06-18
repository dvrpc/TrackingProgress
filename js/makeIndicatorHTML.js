// create a generic indicator page and loop through the ref.js entry to populate it with the specifics.
// desired output:

const makeIndicatorHTML = ref => {

    // create the elements
    const frag = document.createDocumentFragment()
    const snippet = document.createElement('article')
    const header = document.createElement('h1')
    const catIconsWrapper = document.createElement('div')
    const catIcons 
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

            // @UPDATE: switch from hard coded to iterating over a "categories" field on the ref object (ex. categories: ['transpo', 'enviro'])
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