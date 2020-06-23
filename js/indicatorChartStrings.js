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
    `,
    'Commute Mode': `
        <div class="toggle-wrapper">
            <h2 class="indicator-subheader toggle-subheader">Share of Workers by Drive-Alone Status</h2>
            <form class="double-toggle-form">
                <fieldset>
                    <label for="viz-0">Select Geography: </label>
                    <select id="viz-0" class="toggle-data-selector">
                        <optgroup label="Regional">
                            <option value="0">DVRPC Region</option>
                            <option value="1">NJ Counties</option>
                            <option value="2">PA Suburban Counties</option>
                        </optgroup>
                        <optgroup label="Counties">
                            <option value="3">Bucks</option>
                            <option value="4">Burlington</option>
                            <option value="5">Camden</option>
                            <option value="6">Chester</option>
                            <option value="7">Delaware</option>
                            <option value="8">Gloucester</option>
                            <option value="9">Mercer</option>
                            <option value="10">Montgomery</option>
                            <option value="11">Philadelphia</option>
                        </optgroup>
                    </select>
                </fieldset>
                <span class="toggle-vr">|</span>
                <fieldset>
                    <label for="viz-0-b">Select Point of Origin: </label>
                    <select id="viz-0-b" class="toggle-data-selector">
                        <option value="0">Residence</option>
                        <option value="1">Workplace</option>
                    </select>
                </fieldset>
            </form>    
        </div>
        <div class="data-viz chart">
            <svg></svg>
        </div>
        <small class="chart-src"><em>Source: U.S. Census Bureau's American Community Survey</em></small>

        <hr class="indicator-content-hr" />

        <div class="toggle-wrapper">
            <h2 class="indicator-subheader toggle-subheader">Non-Drive-Alone Workers by Means of Transportation to Work</h2>
            <form class="double-toggle-form">
                <fieldset>
                    <label for="viz-1">Select Geography: </label>
                    <select id="viz-1" class="toggle-data-selector">
                        <optgroup label="Regional">
                            <option value="0">DVRPC Region</option>
                            <option value="1">NJ Counties</option>
                            <option value="2">PA Suburban Counties</option>
                        </optgroup>
                        <optgroup label="Counties">
                            <option value="3">Bucks</option>
                            <option value="4">Burlington</option>
                            <option value="5">Camden</option>
                            <option value="6">Chester</option>
                            <option value="7">Delaware</option>
                            <option value="8">Gloucester</option>
                            <option value="9">Mercer</option>
                            <option value="10">Montgomery</option>
                            <option value="11">Philadelphia</option>
                        </optgroup>
                    </select>
                </fieldset>
                <span class="toggle-vr">|</span>
                <fieldset>
                    <label for="viz-1-b">Select Point of Origin: </label>
                    <select id="viz-1-b" class="toggle-data-selector">
                        <option value="0">Residence</option>
                        <option value="1">Workplace</option>
                    </select>
                </fieldset>
            </form>
        </div>
        <div class="data-viz chart2">
            <svg></svg>
        </div>
        <small class="chart-src"><em>Source: U.S. Census Bureau's American Community Survey</em></small>`,
    'Congestion': `
        <div class="toggle-wrapper">
            <h2 class="indicator-subheader toggle-subheader">Planning Time Index by Geography (Annual Weekday Average)</h2>
            <form>
                <fieldset>
                    <label for="viz-0">Select Road Type: </label>
                    <select id="viz-0" class="toggle-data-selector">
                        <option value="0">Freeways</option>
                        <option value="1">Local</option>
                    </select>
                </fieldset>
            </form>
        </div>
        <div class="data-viz chart">
            <svg></svg>
        </div>
        <small class="chart-src"><em>Geography: * Regional, ** County</em></small>
        <small class="chart-src"><em>Sources: RITIS Probe Data Analytics Suite, INRIX, DVRPC</em></small>

        <hr class="indicator-content-hr" />

        <div class="toggle-wrapper">
            <h2 class="indicator-subheader toggle-subheader">Planning Time Index by Time Period (Annual Weekday Average)</h2>
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
                    <label for="viz-1-b">Select Road Type: </label>
                    <select id="viz-1-b" class="toggle-data-selector">
                        <option value="0">Freeways</option>
                        <option value="1">Local</option>
                    </select>
                </fieldset>
            </form>
        </div>
        <div class="data-viz chart2">
            <svg></svg>
        </div>
        <small class="chart-src"><em>Sources: RITIS Probe Data Analytics Suite, INRIX, DVRPC</em></small>`,
    'Educational Attainment':`
        <h2 class="indicator-subheader">Population Over 24 Having Completed High-School by Geography</h2>
        <div class="data-viz chart">
            <svg></svg>
        </div>
        <small class="chart-src"><em>Geography: * Regional, ** County</em></small>
        <small class="chart-src"><em>Source: U.S. Census Bureau's American Community Survey</em></small>

        <hr class="indicator-content-hr" />

        <h2 class="indicator-subheader">Population Over 24 Having Completed High-School by Planning Area</h2>
        <div class="data-viz chart2">
            <svg></svg>
        </div>
        <small class="chart-src"><em>Sources: U.S. Census Bureau's Decennial Census &amp; American Community Survey, DVRPC</em></small>

        <hr class="indicator-content-hr" />

        <div class="toggle-wrapper">
            <h2 class="indicator-subheader toggle-subheader">Population Over 24 by Educational Attainment</h2>
            <form>
                <fieldset>
                    <label for="viz-2">Select Geography: </label>
                    <select id="viz-2" class="toggle-data-selector">
                        <optgroup label="Regional">
                            <option value="0">DVRPC Region</option>
                            <option value="1">NJ Counties</option>
                            <option value="2">PA Suburban Counties</option>
                        </optgroup>
                        <optgroup label="Planning Areas">
                            <option value="3">Core Cities</option>
                            <option value="4">Developed Communities</option>
                            <option value="5">Growing Suburbs</option>
                            <option value="6">Rural Areas</option>
                        </optgroup>
                        <optgroup label="Counties">
                            <option value="7">Bucks</option>
                            <option value="8">Burlington</option>
                            <option value="9">Camden</option>
                            <option value="10">Chester</option>
                            <option value="11">Delaware</option>
                            <option value="12">Gloucester</option>
                            <option value="13">Mercer</option>
                            <option value="14">Montgomery</option>
                            <option value="15">Philadelphia</option>
                        </optgroup>
                    </select>
                </fieldset>
            </form>
        </div>
        <div class="data-viz chart3">
            <svg></svg>
        </div>
        <small class="chart-src"><em>Sources: U.S. Census Bureau's Decennial Census &amp; American Community Survey, DVRPC</em></small>`,
    'Exported Goods':`
        <h2 class="indicator-subheader">Merchandise Trade Exports to the World by Geography</h2>
        <div class="data-viz chart">
            <svg></svg>
        </div>
        <small class="chart-src"><em>Geography: * Regional, ** County</em></small>
        <small class="chart-src">Sources: International Trade Administration's Office of Trade and Industry Information, Manufacturing and Services, DVRPC</small>`,
    'Global Connectivity':`
        <div class="toggle-wrapper">
        <h2 class="indicator-subheader toggle-subheader">Destinations of Flights from Philadelphia International Airport (PHL) by Airport Location</h2>
        <form>
            <fieldset>
                <label for="viz-0">Select Type: </label>
                <select id="viz-0" class="toggle-data-selector">
                    <option value="0">Total</option>
                    <option value="1">Year-Round/Seasonal</option>
                </select>
            </fieldset>
        </form>
        </div>
        <div class="data-viz chart">
            <svg></svg>
        </div>
        <small class="chart-src">Source: City of Philadelphia Commerce Department, Philadelphia International Airport</small>`,
    'Greenhouse Gas Emissions':`
        <div class="toggle-wrapper">
        <h2 class="indicator-subheader toggle-subheader">Greenhouse Gas Emissions</h2>
        <form>
            <fieldset>
                <label for="viz-0">Select Value Type: </label>
                <select id="viz-0" class="toggle-data-selector">
                    <option value="0">Total Emissions</option>
                    <option value="1">Emissions per Capita</option>
                </select>
            </fieldset>
        </form>
        </div>
        <div class="data-viz chart">
            <svg></svg>
        </div>
        <small class="chart-src"><em>Source: DVRPC Regional Energy Use and Greenhouse Gas Emissions Inventory</em></small>

        <hr class="indicator-content-hr" />

        <h2 class="indicator-subheader">Greenhouse Gas Emissions by Source</h2>
        <div class="data-viz chart2">
            <svg></svg>
        </div>
        <small class="chart-src"><em>Source: DVRPC Regional Energy Use and Greenhouse Gas Emissions Inventory</em></small>

        <hr class="indicator-content-hr" />

        <h2 class="indicator-subheader">Electricity Generation Mix by Source</h2>
        <div class="data-viz chart3">
            <svg></svg>
        </div>
        <small class="chart-src"><em>Source: U.S. Environmental Protection Agency, Emissions & Generation Resource Integrated Database (eGRID)</em></small>
        <small class="chart-src"><em>Note: Due to a current bug in the software, percentages display in the mouse-over as decimals.</em></small>

        <hr class="indicator-content-hr" />

        <div class="toggle-wrapper">
            <h2 class="indicator-subheader toggle-subheader">Regional Climate Data by Value Type</h2>
            <form>
                <fieldset>
                    <label for="viz-3">Select Weather Type: </label>
                    <select id="viz-3" class="toggle-data-selector">
                        <option value="0">Temperature</option>
                        <option value="1">Precipitation</option>
                        <option value="2">Precipitation from Severe Storms</option>
                    </select>
                </fieldset>
            </form>
        </div>
        <div class="data-viz chart4">
            <svg></svg>
        </div>
        <small class="chart-src"><em>Source: National Oceanic & Atmospheric Administration's National Centers for Environmental Information</em></small>`,
    'Housing Activity':`
        <div class="toggle-wrapper">
            <h2 class="indicator-subheader toggle-subheader">Percentage of Building Permits Issued in Core Cities or Developed Communities</h2>
            <form>
                <fieldset>
                    <label for="viz-0">Select Value Type: </label>
                    <select id="viz-0" class="toggle-data-selector">
                        <option value="0">Annual</option>
                        <option value="1">Since Base Year</option>
                    </select>
                </fieldset>
            </form>
        </div>
        <div class="data-viz chart">
            <svg></svg>
        </div>
        <small class="chart-src"><em>Source: U.S. Census Bureau, Residential Construction Statistics Division</em></small>

        <hr class="indicator-content-hr" />

        <div class="toggle-wrapper">
            <h2 class="indicator-subheader toggle-subheader">Total Building Permits Issued by Planning Area</h2>
            <form class="double-toggle-form">
                <fieldset>
                    <label for="viz-1">Select Geography: </label>
                    <select id="viz-1" class="toggle-data-selector">
                        <optgroup label="Regional">
                            <option value="0">DVRPC Region</option>
                        </optgroup>
                        <optgroup label="Counties">
                            <option value="1">Bucks</option>
                            <option value="2">Burlington</option>
                            <option value="3">Camden</option>
                            <option value="4">Chester</option>
                            <option value="5">Delaware</option>
                            <option value="6">Gloucester</option>
                            <option value="7">Mercer</option>
                            <option value="8">Montgomery</option>
                            <option value="9">Philadelphia</option>
                        </optgroup>
                    </select>
                </fieldset>
                <span class="toggle-vr">|</span>
                <fieldset>
                    <label for="viz-1-b">Select Value Type: </label>
                    <select id="viz-1-b" class="toggle-data-selector">
                        <option value="0">Annual</option>
                        <option value="1">Since Base Year</option>
                    </select>
                </fieldset>
            </form>
        </div>
        <div class="data-viz chart2">
            <svg></svg>
        </div>
        <small class="chart-src"><em>Sources: U.S. Census Bureau, Residential Construction Statistics Division, DVRPC</em></small>

        <hr class="indicator-content-hr" />

        <div class="toggle-wrapper">
            <h2 class="indicator-subheader toggle-subheader">Total Building Permits Issued by Type</h2>
            <form class="double-toggle-form">
                <fieldset>
                    <label for="viz-2">Select Geography: </label>
                    <select id="viz-2" class="toggle-data-selector">
                        <optgroup label="Regional">
                            <option value="0">DVRPC Region</option>
                            <option value="1">NJ Counties</option>
                            <option value="2">PA Suburburban Counties</option>
                        </optgroup>
                        <optgroup label="Planning Areas">
                            <option value="3">Core Cities</option>
                            <option value="4">Developed Communities</option>
                            <option value="5">Growing Suburbs</option>
                            <option value="6">Rural Areas</option>
                        </optgroup>
                        <optgroup label="Counties">
                            <option value="7">Bucks</option>
                            <option value="8">Burlington</option>
                            <option value="9">Camden</option>
                            <option value="10">Chester</option>
                            <option value="11">Delaware</option>
                            <option value="12">Gloucester</option>
                            <option value="13">Mercer</option>
                            <option value="14">Montgomery</option>
                            <option value="15">Philadelphia</option>
                        </optgroup>
                    </select>
                </fieldset>
                <span class="toggle-vr">|</span>
                <fieldset>
                    <label for="viz-2-b">Select Value Type: </label>
                    <select id="viz-2-b" class="toggle-data-selector">
                        <option value="0">Annual</option>
                        <option value="1">Since Base Year</option>
                    </select>
                </fieldset>
            </form>
        </div>
        <div class="data-viz chart3">
            <svg></svg>
        </div>
        <small class="chart-src"><em>Sources: U.S. Census Bureau, Residential Construction Statistics Division, DVRPC</em></small>`,
    'Housing Affordability':`
        <h2 class="indicator-subheader">Cost-Burdened Households by Geography</h2>
        <div class="data-viz chart">
            <svg></svg>
        </div>
        <small class="chart-src"><em>Geography: * Regional, ** County</em></small>
        <small class="chart-src"><em>Source: U.S. Census Bureau's American Community Survey</em></small>

        <hr class="indicator-content-hr" />

        <h2 class="indicator-subheader">Cost-Burdened Households by Planning Area</h2>
        <div class="data-viz chart2">
            <svg></svg>
        </div>
        <small class="chart-src"><em>Sources: U.S. Census Bureau's American Community Survey, DVRPC</em></small>

        <hr class="indicator-content-hr" />

        <div class="toggle-wrapper">
            <h2 class="indicator-subheader toggle-subheader">Households' Housing Cost Burden by Ownership Status</h2>
            <form>
                <fieldset>
                    <label for="viz-2">Select Geography: </label>
                    <select id="viz-2" class="toggle-data-selector">
                        <optgroup label="Regional">
                            <option value="0">DVRPC Region</option>
                            <option value="1">NJ Counties</option>
                            <option value="2">PA Suburban Counties</option>
                        </optgroup>
                        <optgroup label="Planning Areas">
                            <option value="3">Core Cities</option>
                            <option value="4">Developed Communities</option>
                            <option value="5">Growing Suburbs</option>
                            <option value="6">Rural Areas</option>
                        </optgroup>
                        <optgroup label="Counties">
                            <option value="7">Bucks</option>
                            <option value="8">Burlington</option>
                            <option value="9">Camden</option>
                            <option value="10">Chester</option>
                            <option value="11">Delaware</option>
                            <option value="12">Gloucester</option>
                            <option value="13">Mercer</option>
                            <option value="14">Montgomery</option>
                            <option value="15">Philadelphia</option>
                        </optgroup>
                    </select>
                </fieldset>
            </form>
        </div>
        <div class="data-viz chart3">
            <svg></svg>
        </div>
        <small class="chart-src"><em>Sources: U.S. Census Bureau's American Community Survey, DVRPC</em></small>

        <hr class="indicator-content-hr" />

        <div class="toggle-wrapper">
            <h2 class="indicator-subheader toggle-subheader">Households by Percent of Income Spent on Housing</h2>
            <form>
                <fieldset>
                    <label for="viz-3">Select Geography: </label>
                    <select id="viz-3" class="toggle-data-selector">
                        <optgroup label="Regional">
                            <option value="0">DVRPC Region</option>
                            <option value="1">NJ Counties</option>
                            <option value="2">All PA Counties</option>
                            <option value="3">PA Suburban Counties</option>
                        </optgroup>
                        <optgroup label="Planning Areas">
                            <option value="4">Core Cities</option>
                            <option value="5">Developed Communities</option>
                            <option value="6">Growing Suburbs</option>
                            <option value="7">Rural Areas</option>
                        </optgroup>
                        <optgroup label="Counties">
                            <option value="8">Bucks</option>
                            <option value="9">Burlington</option>
                            <option value="10">Camden</option>
                            <option value="11">Chester</option>
                            <option value="12">Delaware</option>
                            <option value="13">Gloucester</option>
                            <option value="14">Mercer</option>
                            <option value="15">Montgomery</option>
                            <option value="16">Philadelphia</option>
                        </optgroup>
                    </select>
                </fieldset>
            </form>
        </div>
        <div class="data-viz chart4">
            <svg></svg>
        </div>
        <small class="chart-src"><em>Sources: U.S. Census Bureau's American Community Survey, DVRPC</em></small>`,
    'Income Disparities':`
        <div class="toggle-wrapper">
            <h2 class="indicator-subheader toggle-subheader">Income Growth Gap between Highest Quintile &amp; Lowest Quintile Households</h2>
            <form>
                <fieldset>
                    <label for="viz-0">Select Geography: </label>
                    <select id="viz-0" class="toggle-data-selector">
                        <optgroup label="Regional">
                            <option value="0">DVRPC Region</option>
                            <option value="1">NJ Counties</option>
                            <option value="2">PA Suburban Counties</option>
                        </optgroup>
                        <optgroup label="Counties">
                            <option value="3">Bucks</option>
                            <option value="4">Burlington</option>
                            <option value="5">Camden</option>
                            <option value="6">Chester</option>
                            <option value="7">Delaware</option>
                            <option value="8">Gloucester</option>
                            <option value="9">Mercer</option>
                            <option value="10">Montgomery</option>
                            <option value="11">Philadelphia</option>
                        </optgroup>
                    </select>
                </fieldset>
            </form>
        </div>
        <div class="data-viz chart">
            <svg></svg>
        </div>
        <small class="chart-src"><em>Sources: U.S. Census Bureau's American Community Survey, DVRPC</em></small>

        <hr class="indicator-content-hr" />
        
        <div class="toggle-wrapper">
            <h2 class="indicator-subheader toggle-subheader">Average Income by Household Income Grouping</h2>
            <form class="double-toggle-form">
                <fieldset>
                    <label for="viz-1">Select Geography: </label>
                    <select id="viz-1" class="toggle-data-selector">
                        <optgroup label="Regional">
                            <option value="0">DVRPC Region</option>
                            <option value="1">NJ Counties</option>
                            <option value="2">PA Suburban Counties</option>
                        </optgroup>
                        <optgroup label="Counties">
                            <option value="3">Bucks</option>
                            <option value="4">Burlington</option>
                            <option value="5">Camden</option>
                            <option value="6">Chester</option>
                            <option value="7">Delaware</option>
                            <option value="8">Gloucester</option>
                            <option value="9">Mercer</option>
                            <option value="10">Montgomery</option>
                            <option value="11">Philadelphia</option>
                        </optgroup>
                    </select>
                </fieldset>
                <span class="toggle-vr">|</span>
                <fieldset>
                    <label for="viz-1-b">Select Value Type: </label>
                    <select id="viz-1-b" class="toggle-data-selector">
                        <option value="0">Averages</option>
                        <option value="1">Change (Absolute)</option>
                        <option value="2">Change (Percentage)</option>                       
                    </select>
                </fieldset>
            </form>
        </div>
        <div class="data-viz chart2">
            <svg></svg>
        </div>
        <small class="chart-src"><em>Sources: U.S. Census Bureau's American Community Survey, DVRPC</em></small>

        <hr class="indicator-content-hr" />

        <h2 class="indicator-subheader">Income Segregation Index</h2>
        <div class="data-viz chart3">
            <svg></svg>
        </div>
        <small class="chart-src"><em>Sources: U.S. Census Bureau's Decennial Census & American Community Survey, DVRPC</em></small>`,
    'Innovation':`
        <h2 class="indicator-subheader">Utility Patent Approvals of First Named Authors Residing in the Greater Philadelphia Region</h2>
        <div class="data-viz chart">
            <svg></svg>
        </div>
        <small class="chart-src"><em>Sources: US Patent & Trademark Office's Patent Technology Monitoring Team, DVRPC</em></small>`,
    'Job Growth':`
        <div class="toggle-wrapper">
            <h2 class="indicator-subheader toggle-subheader">Job Growth Rate by Geography</h2>
            <form>
                <fieldset>
                    <label for="viz-0">Select Value Type: </label>
                    <select id="viz-0" class="toggle-data-selector">
                        <option value="0">Annual</option>
                        <option value="1">Since Base Year</option>
                    </select>
                </fieldset>
            </form>
        </div>
        <div class="data-viz chart">
            <svg></svg>
        </div>
        <small class="chart-src"><em>Geography: * Regional, ** County</em></small>
        <small class="chart-src"><em>Source: U.S. Bureau of Labor Statistics Quarterly Census of Employment and Wages</em></small>

        <hr class="indicator-content-hr" />

        <h2 class="indicator-subheader">Regional Job Distribution by County</h2>
        <div class="data-viz chart2">
            <svg></svg>
        </div>
        <small class="chart-src"><em>Geography: ** County</em></small>
        <small class="chart-src"><em>Source: U.S. Bureau of Labor Statistics Quarterly Census of Employment and Wages</em></small>
        <small class="chart-src"><em>Note: Due to a current bug in the software, percentages display in the mouse-over as decimals.</em></small>

        <hr class="indicator-content-hr" />

        <div class="toggle-wrapper">
            <h2 class="indicator-subheader toggle-subheader">Job Distribution by Industry</h2>
            <form>
                <fieldset>
                    <label for="viz-2">Select Geography: </label>
                    <select id="viz-2" class="toggle-data-selector">
                        <optgroup label="Regional">
                            <option value="0">DVRPC Region</option>
                            <option value="1">NJ Counties</option>
                            <option value="2">PA Suburban Counties</option>
                        </optgroup>
                        <optgroup label="Counties">
                            <option value="3">Bucks</option>
                            <option value="4">Burlington</option>
                            <option value="5">Camden</option>
                            <option value="6">Chester</option>
                            <option value="7">Delaware</option>
                            <option value="8">Gloucester</option>
                            <option value="9">Mercer</option>
                            <option value="10">Montgomery</option>
                            <option value="11">Philadelphia</option>
                        </optgroup>
                    </select>
                </fieldset>
            </form>
        </div>
        <div class="data-viz chart3">
            <svg></svg>
        </div>
        <small class="chart-src"><em>Source: U.S. Census Bureau County Business Patterns</em></small>
        <small class="chart-src"><em>Note: Due to a current bug in the software, percentages display in the mouse-over as decimals.</em></small>`,
    'Land Consumption':`
        <div class="toggle-wrapper">
            <h2 class="indicator-subheader toggle-subheader">Developed and Agricultural Land by Geography</h2>
            <form class="double-toggle-form">
                <fieldset>
                    <label for="viz-0">Select General Use: </label>
                    <select id="viz-0" class="toggle-data-selector">
                        <option value="0">Developed Land</option>
                        <option value="1">Agricultural Land</option>
                    </select>
                </fieldset>
                <span class="toggle-vr">|</span>
                <fieldset>
                    <label for="viz-0-b">Select Value Type: </label>
                    <select id="viz-0-b" class="toggle-data-selector">
                        <option value="0">Total Acres</option>
                        <option value="1">Acres Per Capita</option>
                    </select>
                </fieldset>
            </form>
        </div>
        <div class="data-viz chart">
            <svg></svg>
        </div>
        <small class="chart-src"><em>Geography: * Regional, ^ Planning Area, ** County</em></small>
        <small class="chart-src"><em>Source: DVRPC Land Use Survey, U.S. Census Bureau's Population Estimates Program</em></small>

        <hr class="indicator-content-hr" />

        <div class="toggle-wrapper">
            <h2 class="indicator-subheader toggle-subheader">Land Use by Type</h2>
            <form>
                <fieldset>
                    <label for="viz-1">Select Geography: </label>
                    <select id="viz-1" class="toggle-data-selector">
                        <optgroup label="Regional">
                            <option value="0">DVRPC Region</option>
                            <option value="1">NJ Counties</option>
                            <option value="2">PA Suburban Counties</option>
                        </optgroup>
                        <optgroup label="Planning Areas">
                            <option value="3">Core Cities</option>
                            <option value="4">Developed Communities</option>
                            <option value="5">Growing Suburbs</option>
                            <option value="6">Rural Areas</option>
                        </optgroup>
                        <optgroup label="Counties">
                            <option value="7">Bucks</option>
                            <option value="8">Burlington</option>
                            <option value="9">Camden</option>
                            <option value="10">Chester</option>
                            <option value="11">Delaware</option>
                            <option value="12">Gloucester</option>
                            <option value="13">Mercer</option>
                            <option value="14">Montgomery</option>
                            <option value="15">Philadelphia</option>
                        </optgroup>
                    </select>
                </fieldset>
            </form>
        </div>
        <div class="data-viz chart2">
            <svg></svg>
        </div>
        <small class="chart-src"><em>Source: DVRPC Land Use Survey</em></small>

        <hr class="indicator-content-hr" />

        <div class="toggle-wrapper">
            <h2 class="indicator-subheader toggle-subheader">Public &amp; Private Protected Open Space by Geography</h2>
            <form class="double-toggle-form">
                <fieldset>
                    <label for="viz-2">Select Ownership Type: </label>
                    <select id="viz-2" class="toggle-data-selector">
                        <option value="0">Total Protected Open Space</option>
                        <option value="1">Publicly Protected Open Space</option>
                        <option value="2">Privately Protected Open Space</option>
                    </select>
                </fieldset>
                <span class="toggle-vr">|</span>
                <fieldset>
                    <label for="viz-2-b">Select Value Type: </label>
                    <select id="viz-2-b" class="toggle-data-selector">
                        <option value="0">Total Acres</option>
                        <option value="1">Percent</option>
                    </select>
                </fieldset>
            </form>
        </div>
        <div class="data-viz chart3">
            <svg></svg>
        </div>
        <small class="chart-src"><em>Geography: * Regional, ^ Planning Area, ** County</em></small>
        <small class="chart-src"><em>Source: DVRPC Protected Open Space Inventory</em></small>

        <hr class="indicator-content-hr" />

        <div class="toggle-wrapper">
            <h2 class="indicator-subheader toggle-subheader">Protected Open Space by Ownership Type</h2>
            <form>
                <fieldset>
                    <label for="viz-3">Select Geography: </label>
                    <select id="viz-3" class="toggle-data-selector">
                        <optgroup label="Regional">
                            <option value="0">DVRPC Region</option>
                            <option value="1">NJ Counties</option>
                            <option value="2">PA Suburban Counties</option>
                        </optgroup>
                        <optgroup label="Planning Areas">
                            <option value="3">Core Cities</option>
                            <option value="4">Developed Communities</option>
                            <option value="5">Growing Suburbs</option>
                            <option value="6">Rural Areas</option>
                        </optgroup>
                        <optgroup label="Counties">
                            <option value="7">Bucks</option>
                            <option value="8">Burlington</option>
                            <option value="9">Camden</option>
                            <option value="10">Chester</option>
                            <option value="11">Delaware</option>
                            <option value="12">Gloucester</option>
                            <option value="13">Mercer</option>
                            <option value="14">Montgomery</option>
                            <option value="15">Philadelphia</option>
                        </optgroup>
                    </select>
                </fieldset>
            </form>
        </div>
        <div class="data-viz chart4">
            <svg></svg>
        </div>
        <small class="chart-src"><em>Source: DVRPC Protected Open Space Inventory</em></small>`,
    'Miles Driven':`
        <div class="toggle-wrapper">
            <h2 class="indicator-subheader toggle-subheader">Vehicle Miles Traveled (VMT) by Geography</h2>
            <form>
                <fieldset>
                    <label for="viz-0">Select Value Type: </label>
                    <select id="viz-0" class="toggle-data-selector">
                        <option value="0">Per Capita</option>
                        <option value="1">Total</option>
                        <option value="2">Per Vehicle</option>
                    </select>
                </fieldset>
            </form>
        </div>
        <div class="data-viz chart">
            <svg></svg>
        </div>
        <small class="chart-src"><em>Geography: * Regional, ** County</em></small>
        <small class="chart-src"><em>Sources: New Jersey Department of Transportation, Pennsylvania Department of Transportation, U.S. Census Bureau's American Community Survey &amp; Population Estimates Program</em></small>`,
    'Pavement Conditions':`
    `,
    '':`
    `,
    '':`
    `,
    '':`
    `,
    '':`
    `,
    '':`
    `,
    '':`
    `,
    '':`
    `,
}

export default chartStrings
