// @ TODO: remember to update the URL's to https://www.dvrpc.org... when this deploys
// pushState params:
    // history.pushState([data], [title], [url])

const routes = {
    '/Indicator/:': '@TODO: this'
}

// function to reset the URL to index on click back home
const setIndexURL = () => history.pushState(null, 'Tracking Progress', 'http://dev.dvrpc.org/TrackingProgress/')

// This handler is for internal navigation i.e. from the indicator tile or a sideLink URL. All it needs to do is update the hash URL
const setIndicatorURL = indicatorURL => {
    const title = indicatorURL.split('.')[0]
    history.pushState(null, indicatorURL, `http://dev.dvrpc.org/TrackingProgress/Indicator/${indicatorURL}`)
}

// This handler is for external navigation i.e. someone links to a specific indicator AND for page refresh
const hydrateIndicatorPage = indicatorURL => {

}

export {setIndexURL, setIndicatorURL, hydrateIndicatorPage}