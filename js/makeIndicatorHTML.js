import chartStrings from './indicatorChartStrings.js'

let globalText = null;
// START main
// create an indicator page using content from it's entry in ref.js
const makeIndicatorHTML = async (params) => {
  // extract info from params
    const title = params.title;
    globalText = await fetchMarkdown(title)
    const categories = params.categories;
    const defaultText = globalText.why;
    const trend = params.trend;

    // create parent/non-content elements
    const snippet = document.createElement('article')
    const allContentFrag = document.createDocumentFragment()
    const descriptionWrapper = document.createElement('div')
    const hr = document.createElement('hr')

    // identify parent elements
    snippet.classList.add('indicators-snippet')
    descriptionWrapper.id="description-wrapper"
    hr.classList.add('indicator-header-hr')

    // create content 
    const headerFrag = makeHeader(title, categories)
    const {descriptionFrag, description} = {...makeDescription(defaultText, trend)}
    const tabs = makeTabs(description)
    const toTopBtn = makeToTopBtn()

    // append
    allContentFrag.appendChild(headerFrag)
    descriptionWrapper.appendChild(tabs)
    descriptionWrapper.appendChild(descriptionFrag)
    allContentFrag.appendChild(descriptionWrapper)
    allContentFrag.appendChild(hr)
    allContentFrag.appendChild(toTopBtn)
    snippet.appendChild(allContentFrag)

    // add charts
    const charts = chartStrings[title]
    snippet.insertAdjacentHTML('beforeend', charts)

    return snippet
}

/**
 * fetches markdown files for an indicator
 * @param {String} title 
 * @returns Object 
 */
const fetchMarkdown = async (title) => {
  const path = process.env.markdownPath
  const ret = await Promise.all([
    fetch(`${path + title}/how_are_we_doing.md`)
      .then((res) => res.text())
      .then((text) => marked.parse(text)),
    fetch(`${path + title}/why_its_important.md`)
      .then((res) => res.text())
      .then((text) => marked.parse(text)),
    fetch(`${path + title}/what_is_it.md`)
      .then((res) => res.text())
      .then((text) => marked.parse(text)),
    fetch(`${path + title}/resources.md`)
      .then((res) => res.text())
      .then((text) => marked.parse(text)),
  ]).then(([how, why, what, resource]) => ({ how, why, what, resource }));
  
  return ret;
}

const make404 = () => {
   // create elements
   const snippet = document.createElement('article')
   const headerWrapper = document.createElement('div')
   const header = document.createElement('h1')
   const catWrapper = document.createElement('div')
   const allImgs = makeIconImgs(['transpo','econo','comm','enviro','equity'])
   const descriptionWrapper = document.createElement('section')
   const description = document.createElement('div')
   const text = document.createElement('p')

   // identify elements
   snippet.classList.add('indicators-snippet', 'indicator-not-found')
   headerWrapper.id = 'indicator-header-wrapper'
   header.classList.add('indicator-header')
   catWrapper.classList.add('indicator-category-icons')
   descriptionWrapper.id = 'description-wrapper'
   description.id = 'indicator-desription-container'
   
   // add content
   header.textContent = 'Indicator Not Found'
   text.innerHTML = 'Sorry! The requested indicator page was not found. Please <a href="/TrackingProgress/">click here</a> to navigate back to the dashboard.'

   // append
   headerWrapper.appendChild(header)
   headerWrapper.appendChild(catWrapper)
   catWrapper.appendChild(allImgs)
   descriptionWrapper.appendChild(description)
   description.appendChild(text)
   snippet.appendChild(headerWrapper)
   snippet.appendChild(descriptionWrapper)

   return snippet
}
// END main


// START header
const makeHeader = (title, categories) => {
    // make elements
    const headerFrag = document.createDocumentFragment()
    const headerWrapper = document.createElement('div')
    const header = document.createElement('h1')
    const catIconsWrapper = document.createElement('div')
    const catIcons = makeIconImgs(categories)

    // add classes/ids
    headerWrapper.id = 'indicator-header-wrapper'
    header.classList.add('indicator-header')
    catIconsWrapper.classList.add('indicator-category-icons')

    // add content
    header.textContent = title

    // append and return
    catIconsWrapper.appendChild(catIcons)
    headerWrapper.appendChild(header)
    headerWrapper.appendChild(catIconsWrapper)
    headerFrag.appendChild(headerWrapper)

    return headerFrag
}
const makeIconImgs = icons => {
    const frag = document.createDocumentFragment()

    icons.forEach(icon => {
        const img = document.createElement('img')

        img.src = `./img/indicator_headers/${icon}-icon.png`
        img.alt = `${icon} category icon`
        img.classList.add('snippet-categories')
        
        frag.appendChild(img)
    })

    return frag
}
// END header


// START text
// returns the text tabs as a document fragment
const makeTabs = description => {
    // make elements
    const tabsFrag = document.createDocumentFragment()
    const tabsWrapper = document.createElement('header')
    const whyTab = document.createElement('h2')
    const whatTab = document.createElement('h2')
    const howTab = document.createElement('h2')
    const resourceTab = document.createElement('h2')

    // add classes/ids
    tabsWrapper.id = 'description-wrapper-tabs'
    whyTab.classList.add('description-wrapper-tab-headers', 'active-tab')
    whyTab.id = 'why-tab'
    whatTab.classList.add('description-wrapper-tab-headers')
    whatTab.id = 'what-tab'
    howTab.classList.add('description-wrapper-tab-headers')
    howTab.id = 'how-tab'
    resourceTab.classList.add('description-wrapper-tab-headers')
    resourceTab.id = 'resource-tab'

    // add content
    whyTab.textContent = 'Why is it important?'
    whatTab.textContent = 'What is it?'
    howTab.textContent = 'How are we doing?'
    resourceTab.textContent = 'Resources'

    // add interactivity
    tabsWrapper.onclick = e => handleTabs(e, description)

    // append jawns
    tabsWrapper.appendChild(whyTab)
    tabsWrapper.appendChild(whatTab)
    tabsWrapper.appendChild(howTab)
    tabsWrapper.appendChild(resourceTab)
    tabsFrag.appendChild(tabsWrapper)

    return tabsFrag
}

// handle cycling through tabs and replacing content
const handleTabs = (e, wrapper) => {
    const clickedTab = e.target
    const oldTab = document.querySelector('.active-tab')
    
    // short out if clicking on the already active tab
    if(oldTab.id === clickedTab.id) return

  // clear the text
  while (wrapper.firstChild) wrapper.removeChild(wrapper.firstChild);

  // add new text
  const textSection = clickedTab.id.split("-")[0];
  wrapper.insertAdjacentHTML("afterbegin", globalText[textSection]);

    // deactivate the old jawn
    oldTab.classList.remove('active-tab')

    // uset the new active tab
    clickedTab.classList.add('active-tab')
}

// returns main text content fragment + the main text wrapper element
const makeDescription = (defaultText, trend) => {
    // create elements
    const descriptionFrag = document.createDocumentFragment()
    const descriptionWrapper = document.createElement('article')
    const description = document.createElement('section')
    const trendFrag = makeTrendText(trend)

    // add classes/ids
    descriptionWrapper.id = 'description-content-wrapper'
    description.id = 'indicator-description-container'

    // add content
    description.innerHTML = defaultText

    // append
    descriptionWrapper.appendChild(description)
    descriptionWrapper.appendChild(trendFrag)
    descriptionFrag.appendChild(descriptionWrapper)

    return {descriptionFrag, description}
}

// returns the trend section as a document fragment
const makeTrendText = trend => {
    const text = trend.text
    const status = trend.status

    const frag = document.createDocumentFragment()
    const contextWrapper = document.createElement('aside')
    const contextImg = document.createElement('img')
    const p = document.createElement('p')
    const strong = document.createElement('strong')

    // identify elements
    contextWrapper.classList.add('indicator-emoji-context')
    contextImg.classList.add('indicator-emoji-context-img')

    // add content
    contextImg.src = `./img/emoji-${status}.png`
    contextImg.alt = `${status} emoji`
    strong.textContent = ` ${text.stat} `
    p.textContent = text.text
    p.insertAdjacentElement('afterbegin', strong)

    // append
    contextWrapper.appendChild(contextImg)
    contextWrapper.appendChild(p)
    frag.appendChild(contextWrapper)
    
    return frag
}
// END text


// START to top button
const makeToTopBtn = () => {
    const btn = document.createElement('button')
    
    btn.setAttribute('type', 'button')
    btn.setAttribute('name', 'to top')
    btn.textContent = '^ top'
    btn.id = 'to-top-btn'
    btn.classList.add('hover-btn')
    
    btn.onclick = () => window.scrollTo({top: 0,behavior: 'smooth'})

    return btn
}
// END to top button

export { makeIndicatorHTML, make404 }