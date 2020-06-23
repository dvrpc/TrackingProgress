const chartStrings = {
    'Air Quality': `
        <h2 class="indicator-subheader">Days Violating National Ambient Air Quality Standards for Ozone and/or PM<sub>2.5</sub> by Value Type</h2>
        <div class="data-viz chart">
            <svg></svg>
        </div>
        <small class="chart-src"><em>Source: U.S. Environmental Protection Agency</em></small>

        <hr class="indicator-content-hr" />

        <div class="toggle-wrapper">
            <h2 class="indicator-subheader toggle-subheader">Quarterly Unhealthy Days by Air Quality Index Level</h2>
            <form>
                <fieldset>
                    <label for="viz-1">Select Pollutant: </label>
                    <select id="viz-1" class="toggle-data-selector">
                        <option value="0">Ozone</option>
                        <option value="1">Particulate Matter</option>
                    </select>
                </fieldset>
            </form>
        </div>
        <div class="data-viz chart2">
            <svg></svg>
        </div>
        <small class="chart-src"><em>Source: U.S. Environmental Protection Agency</em></small>
    `,
    'Bridge Conditions': `
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
    `
}

export default chartStrings
