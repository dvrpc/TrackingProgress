// @TODO: delete?
const videosLoaded = {
    dash: false,
    indicators: false
}
const videoMeta = {
    dash: [
        {
            id: 'hover-tiles',
            caption: "Mouse-over the tiles for a quick glimpse of how we're doing based on the latest data."
        },
        {
            id: 'toggle-filters',
            caption: "Click filters to sort indicators by <em>Connections 2045</em> Plan category or historic trend."
        },
        {
            id: 'click-indicator',
            caption: "Click any tile to take a closer look at a specific indicator."
        }
    ],
    indicators: [
        {
            id: 'indicator-text',
            caption: "Read each indicator's four narrative tabs to learn more, read analysis and explore othe resources."
        },
        {
            id: 'indicator-data',
            caption: "Interact with charts by hovering over data points. Toggle data with the legend &amp; dropdown menus."
        },
        {
            id: 'indicator-nav',
            caption: "View related indicators or return to the dashboard to view all indicators."
        }
    ]
}

const makeGifRow = id => {
    const row = document.createElement('div')

    videoMeta[id].forEach(gif => {
        const fig = document.createElement('figure')
        const video = document.createElement('video')
        const figcaption = document.createElement('figcaption')

        fig.classList.add('gif-figure')
        figcaption.classList.add('gif-caption')

        video.controls = true
        video.width = 300
        video.height = 215
        video.type = 'video/mp4'

        video.id = gif.id
        video.src = `./vid/${gif.id}.mp4`
        figcaption.insertAdjacentHTML('afterbegin', gif.caption)

        fig.appendChild(video)
        fig.appendChild(figcaption)
        row.appendChild(fig)
    })

    row.classList.add('gif-row')

    return row
}

const makeEmojiRow = () => {
    const div = document.createElement('div')
    div.classList.add('emojis-row')

    div.insertAdjacentHTML('afterbegin', `
        <p id="emojis-description">Emojis indicate how we are doing based on historic trend:</p>
        <figure class="emoji-figure">
            <img loading="lazy" src="./img/emoji-awesome.png" alt="awesome emoji" />
            <figcaption><strong>very good</strong></figcaption>
        </figure>
        <span class="emoji-spacer"></span>
        <figure class="emoji-figure">
            <img loading="lazy" src="./img/emoji-good.png" alt="g emoji" />
            <figcaption><strong>good</strong></figcaption>
        </figure>
        <span class="emoji-spacer"></span>
        <figure class="emoji-figure">
            <img loading="lazy" src="./img/emoji-neutral.png" alt="neutral emoji" />
            <figcaption><strong>neutral</strong></figcaption>
        </figure>
        <span class="emoji-spacer"></span>
        <figure class="emoji-figure">
            <img loading="lazy" src="./img/emoji-not-great.png" alt="not-great emoji" />
            <figcaption><strong>Not Good</strong></figcaption>
        </figure>
        <span class="emoji-spacer"></span>
        <figure class="emoji-figure">
            <img loading="lazy" src="./img/emoji-bad.png" alt="bad emoji" />
            <figcaption><strong>Poor</strong></figcaption>
        </figure>
    `)

    return div
}

const makeDashDetails = id => {
    const details = document.createElement('details')
    const summary = document.createElement('summary')
    const wrapper = document.createElement('div')
    const gifRow = makeGifRow('dash')
    const hr = document.createElement('hr')
    const emojiRow = makeEmojiRow()

    summary.role = 'button'
    summary.id = id
    summary.textContent = 'Exploring the Dashboard'

    summary.onclick = () => console.log('wtf clicked summary')
    
    wrapper.classList.add('details-content-wrapper')
    summary.classList.add('hover-text')
    hr.classList.add('info-toggle-hr')

    wrapper.appendChild(gifRow)
    wrapper.appendChild(hr)
    wrapper.appendChild(emojiRow)
    details.appendChild(summary)
    details.appendChild(wrapper)

    return details
}

const makeHowTo = () => {
    const modal = document.createElement('div')
    const content = document.createElement('div')
    const close = document.createElement('span')
    const header = document.createElement('h2')

    const dashDetails = makeDashDetails('dash')
    const indicatorDetails = document.createElement('details')
    const geoDetails = document.createElement('details')

    modal.id = 'modal'
    modal.role = 'dialog'
    content.id = 'modal-content'
    close.id = 'modal-close'

    modal.classList.add('modal')
    content.classList.add('modal-content')
    close.classList.add('modal-close')
    header.classList.add('modal-header')
    dashDetails.classList.add('info-toggle')
    indicatorDetails.classList.add('info-toggle')
    geoDetails.classList.add('info-toggle')

    dashDetails.open = true

    close.textContent = 'x'
    header.textContent = "Here's how to get started..."

    const jawn = `
        <details class="info-toggle">
            <summary role="button" id="indicatorSummary" class="hover-text">Exploring Indicator Pages</summary>
            <div class="details-content-wrapper">
                <div class="gif-row">
                    <figure class="gif-figure">
                        <video controls width="300" height="215" id="indicator-text" type="video/mp4"></video>
                        <figcaption class="gif-caption">Read each indicator's four narrative tabs to learn more, read analysis and explore othe resources.</figcaption>
                    </figure>
                    <figure class="gif-figure">
                        <video controls width="300" height="215" id="indicator-data" type="video/mp4"></video>
                        <figcaption class="gif-caption">Interact with charts by hovering over data points. Toggle data with the legend &amp; dropdown menus.</figcaption>
                    </figure>
                    <figure class="gif-figure">
                        <video controls width="300" height="215" id="indicator-nav" type="video/mp4"></video>
                        <figcaption class="gif-caption">View related indicators or return to the dashboard to view all indicators.</figcaption>
                    </figure>
                </div>
            </div>
        </details>

        <details class="info-toggle">
            <summary role="button" class="hover-text">Exploring Geographic Levels</summary>
            <div class="details-content-wrapper details-text-content">
                <p class="splash-text"><em>Tracking Progress</em> uses subregional geographies to further analyze what drives regional trends and provide data relevant to our communities, member governments, and planning partners. "NJ Counties" (Burlington, Camden, Gloucester, and Mercer counties) and "PA Suburban Counties" (Bucks, Chester, Delaware, and Montgomery counties) are used as aggregations to pair with "Philadelphia" to draw broad comparisons of Philadelphia and its surrounding counties on either side of the river.</p>
                <figure class="splash-map-figure">
                    <a href="./img/MainDVRPCMap2-01.png"><img loading="lazy" src="./img/MainDVRPCMap2-01_reduced.png" alt="map of the DVRPC region" class="region-map" /></a>
                    <figcaption>
                        <a href="./img/MainDVRPCMap2-01.png">view a map of Planning Areas</a>
                    </figcaption>
                </figure>
                <p class="splash-text">Some charts also group "All PA Counties", including Philadelphia, into one dataset. Many indicators offer individual county trends. Additionally, charts may group data by <a href="./pdf/Planning_Areas_2045_List.pdf">Planning Areas</a><span class="sm"> [0.1 MB pdf]</span> — a typology of the region's municipalities—into four classifications: Core Cities, Developed Communities, Growing Suburbs, and Rural Areas. Although these may be useful groupings, there are local nuances within any subgeography for which we cannot always account.</p>
            </div>
        </details>
    `
    
    modal.onclick = e => {
        e.preventDefault()
        if (e.target === modal) ariaHideModal(modal)
    }

    close.onclick = e => {
        e.preventDefault()
        ariaHideModal(modal)
    }

    content.appendChild(close)
    content.appendChild(header)
    content.appendChild(dashDetails)

    // @TEMP 
    content.insertAdjacentHTML('beforeend', jawn)
    modal.appendChild(content)
    
    return modal
}

const ariaHideModal = modal => {
    modal.style.display = 'none'
    modal.setAttribute('aria-hidden', 'true')
}

const ariaShowModal = modal => {
    modal.style.display = 'initial'
    modal.setAttribute('aria-hidden', 'false')
}

// loop thru corresponding videos and add .mp4 src
// @TODO: not needed anymore (?)
    // only six gifs, three load when the modal is made.
const loadVideos = toggle => {    
    console.log('toggle ', toggle)

    // return if the videos are already loaded
    if(videosLoaded[toggle.id]) return
        
    const figures = toggle.nextElementSibling.children[0].children
    const length = figures.length
    var i = 0

    // add src
    for(i; i < length; i++) {
        const video = figures[i].children[0]
        const videoName = video.id
        video.src = `./vid/${videoName}.mp4`
    }

    // flip videos loaded bool
    videosLoaded[target.id] = true
}

export { makeHowTo, ariaShowModal, ariaHideModal }