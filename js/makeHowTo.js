const makeHowTo = () => {
    return `
        <h3 id="get-started">Here's how to get started...</h3>
        <details class="info-toggle" open>
            <summary role="button" id="dashSummary" class="hover-text">Exploring the Dashboard</summary>
            <div class="details-content-wrapper">
                <div class="gif-row">
                    <figure class="gif-figure">
                        <video controls width="300" height="215" id="hover-tiles" src="./vid/hover-tiles.mp4" type="video/mp4"></video>
                        <figcaption class="gif-caption">Mouse-over the tiles for a quick glimpse of how we're doing based on the latest data.</figcaption>
                    </figure>
                    <figure class="gif-figure">
                        <video controls width="300" height="215" id="toggle-filters" src="./vid/toggle-filters.mp4" type="video/mp4"></video>
                        <figcaption class="gif-caption">Click filters to sort indicators by <em>Connections 2045</em> Plan category or historic trend.</figcaption>
                    </figure>
                    <figure class="gif-figure">
                        <video controls width="300" height="215" id="click-indicator" src="./vid/click-indicator.mp4" type="video/mp4"></video>
                        <figcaption class="gif-caption">Click any tile to take a closer look at a specific indicator.</figcaption>
                    </figure>
                </div>
                <hr id="info-toggle-hr"/>
                <div id="emojis-row">
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
                </div>
            </div>
        </details>

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
                        <figcaption class="gif-caption">View indicators with the same primary principle or return to the dashboard to view all indicators.</figcaption>
                    </figure>
                </div>
            </div>
        </details>

        <details>
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
}

export default makeHowTo