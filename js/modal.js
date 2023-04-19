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
    const frag = document.createDocumentFragment()
    const header = document.createElement('h2')
    const div = document.createElement('div')
    const hr = document.createElement('hr')

    div.classList.add('emojis-row')
    header.classList.add('modal-h2')
    hr.classList.add('info-toggle-hr')

    header.textContent = 'Interpreting the Emojis'

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

    frag.appendChild(header)
    frag.appendChild(div)
    frag.appendChild(hr)

    return frag
}

const makeDashHowTo = id => {
    const wrapper = document.createElement('div')
    const header = document.createElement('h2')
    const hr = document.createElement('hr')
    
    const gifRow = makeGifRow(id)
    const emojiRow = makeEmojiRow()

    header.textContent = 'Exploring the Dashboard'

    wrapper.classList.add('modal-content-wrapper')
    header.classList.add('modal-h2')
    hr.classList.add('info-toggle-hr')

    wrapper.appendChild(header)
    wrapper.appendChild(gifRow)
    wrapper.appendChild(hr)
    wrapper.appendChild(emojiRow)

    return wrapper
}

const makeIndicatorHowTo = id => {
    const wrapper = document.createElement('div')
    const header = document.createElement('h2')
    const hr = document.createElement('hr')

    const gifRow = makeGifRow(id)

    header.textContent = 'Exploring Indicator Pages'

    header.classList.add('modal-h2')
    wrapper.classList.add('modal-content-wrapper')
    hr.classList.add('info-toggle-hr')

    wrapper.appendChild(header)
    wrapper.appendChild(gifRow)
    wrapper.appendChild(hr)

    return wrapper
}

const makeGeoDetails = () => {
    const details = document.createElement('details')
    
    details.classList.add('info-toggle')
    details.insertAdjacentHTML('afterbegin', `
        <summary role="button" class="hover-text">Exploring Geographic Levels</summary>
        <div class="modal-content-wrapper details-text-content">
            <figure class="modal-map-figure">
                <a href="./img/MainDVRPCMap2-01.png"><img loading="lazy" src="./img/MainDVRPCMap2-01.png" alt="map of the DVRPC region" class="region-map" /></a>
                <figcaption>
                    <a href="./img/MainDVRPCMap2-01.png">view larger map</a>
                </figcaption>
            </figure>
            <div>
                <p class="splash-text"><em>Tracking Progress</em> uses subregional geographies to further analyze what drives regional trends and provide data relevant to our communities, member governments, and planning partners. "NJ Counties" (Burlington, Camden, Gloucester, and Mercer counties) and "PA Suburban Counties" (Bucks, Chester, Delaware, and Montgomery counties) are used as aggregations to pair with "Philadelphia" to draw broad comparisons of Philadelphia and its surrounding counties on either side of the river.</p>
                <p class="splash-text">Some charts also group "All PA Counties", including Philadelphia, into one dataset. Many indicators offer individual county trends. Additionally, charts may group data by <a href="./pdf/Planning_Areas_2045_List.pdf">Planning Areas</a><span class="sm"> [0.1 MB pdf]</span> — a typology of the region's municipalities—into four classifications: Core Cities, Developed Communities, Growing Suburbs, and Rural Areas. Although these may be useful groupings, there are local nuances within any subgeography for which we cannot always account.</p>
            </div>
        </div>
    `)

    return details
}

const makeHowTo = () => {
    const modal = document.createElement('div')
    const content = document.createElement('div')
    const close = document.createElement('span')
    const header = document.createElement('h2')

    const dashDetails = makeDashHowTo('dash')
    const indicatorDetails = makeIndicatorHowTo('indicators')
    const geoDetails = makeGeoDetails()

    modal.id = 'modal'
    modal.role = 'dialog'
    content.id = 'modal-content'
    close.id = 'modal-close'

    modal.classList.add('modal')
    content.classList.add('modal-content')
    close.classList.add('modal-close')
    header.classList.add('modal-header')

    close.textContent = 'x'
    header.textContent = "Here's how to get started..."
    
    modal.onclick = e => {
        if (e.target === modal) ariaHideModal(modal)
    }

    close.onclick = e => {
        e.preventDefault()
        ariaHideModal(modal)
    }

    content.appendChild(close)
    content.appendChild(header)
    content.appendChild(dashDetails)
    content.appendChild(indicatorDetails)
    content.appendChild(geoDetails)
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

export { makeHowTo, ariaShowModal, ariaHideModal }