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
                    <label>
                        Select Pollutant:
                        <select id="viz-1" class="toggle-data-selector">
                            <option value="0">Ozone</option>
                            <option value="1">Particulate Matter</option>
                        </select>
                    </label>
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
                    <label>
                        Select Geography:
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
                    </label>
                </fieldset>
                <span class="toggle-vr">|</span>
                <fieldset>
                    <label>
                        Select Value Type:
                        <select id="viz-0-b" class="toggle-data-selector">
                            <option value="0">Share of Total Bridge Deck Area</option>
                            <option value="1">Share of Total Bridges</option>
                        </select>
                    </label>
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
                    <label>
                        Select Geography:
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
                    </label>
                </fieldset>
                <span class="toggle-vr">|</span>
                <fieldset>
                    <label>
                        Select Value Type:    
                        <select id="viz-1-b" class="toggle-data-selector">
                            <option value="0">Bridge Deck Area</option>
                            <option value="1">Number of Bridges</option>
                        </select>
                    </label>
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
                    <label>
                        Select Geography:
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
                    </label>
                </fieldset>
                <span class="toggle-vr">|</span>
                <fieldset>
                    <label>
                        Select Value Type:
                        <select id="viz-2-b" class="toggle-data-selector">
                            <option value="0">Bridge Deck Area</option>
                            <option value="1">Number of Bridges</option>
                        </select>
                    </label>
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
                    <label>
                        Select Geography:
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
                    </label>
                </fieldset>
                <span class="toggle-vr">|</span>
                <fieldset>
                    <label>
                        Select Point of Origin
                        <select id="viz-0-b" class="toggle-data-selector">
                            <option value="0">Residence</option>
                            <option value="1">Workplace</option>
                        </select>
                    </label>
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
                    <label>
                        Select Geography
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
                    </label>
                </fieldset>
                <span class="toggle-vr">|</span>
                <fieldset>
                    <label>
                        Select Point of Origin
                        <select id="viz-1-b" class="toggle-data-selector">
                            <option value="0">Residence</option>
                            <option value="1">Workplace</option>
                        </select>
                    </label>
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
                    <label>
                        Select Road Type
                        <select id="viz-0" class="toggle-data-selector">
                            <option value="0">Freeways</option>
                            <option value="1">Local</option>
                        </select>
                    </label>
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
                    <label>
                        Select Geography:
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
                    </label>
                </fieldset>
                <span class="toggle-vr">|</span>
                <fieldset>
                    <label>
                        Select Road Type
                        <select id="viz-1-b" class="toggle-data-selector">
                            <option value="0">Freeways</option>
                            <option value="1">Local</option>
                        </select>
                    </label>
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
                    <label>
                        Select Geography
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
                    </label>
                </fieldset>
            </form>
        </div>
        <div class="data-viz chart3">
            <svg></svg>
        </div>
        <small class="chart-src"><em>Sources: U.S. Census Bureau's Decennial Census &amp; American Community Survey, DVRPC</em></small>`,
    'Gross Domestic Product':`
        <div class="toggle-wrapper">
            <h2 class="indicator-subheader toggle-subheader">Average Income by Household Income Grouping</h2>
            <form class="double-toggle-form">
                <fieldset>
                    <label>
                        Select Industry
                        <select id="viz-0" class="toggle-data-selector">
                            <option value="0">All Industries</option>
                            <optgroup label="Goods">
                                <option value="0">Agriculture, Forestry, Fishing, and Mining</option>
                                <option value="1">Construction</option>
                                <option value="3">Manufacturing</option>
                                <option value="4">Durable Goods</option>   
                                <option value="5">Nondurable Goods</option>    
                            </optgroup> 
                            <optgroup label="Services">
                                <option value="6">Arts, Entertainment, Recreaction, Accommodation, and Food Services</option>
                                <option value="7">Educational Services</option>
                                <option value="8">Finance, Insurance, Real Estate</option>
                                <option value="9">Health Care and Social Assistance</option>
                                <option value="10">Information</option>
                                <option value="11">Other Services (except Government)</option>
                                <option value="12">Professional Services</option>
                                <option value="13">Retail Trade</option>
                                <option value="14">Transportation, Warehousing, and Utilities</option>
                                <option value="15">Wholesale Trade</option>
                                <option value="16">Government and government enterprises</option>
                            </optgroup>
                        </select>
                    </label>
                </fieldset>
                <span class="toggle-vr">|</span>
                <fieldset>
                    <label>
                        Select Value Type
                        <select id="viz-0-b" class="toggle-data-selector">
                            <option value="0">Annual Change</option>
                            <option value="1">Change Since Base Year</option>
                            <option value="2">Total GDP</option>                       
                        </select>
                    </label>
                </fieldset>
            </form>
        </div>
        <div class="data-viz chart">
            <svg></svg>
        </div>
        <small class="chart-src"><em>Sources: U.S. Census Bureau's American Community Survey, DVRPC</em></small>
    `,
    'Global Connectivity':`
        <div class="toggle-wrapper">
        <h2 class="indicator-subheader toggle-subheader">Destinations of Flights from Philadelphia International Airport (PHL) by Airport Location</h2>
        <form>
            <fieldset>
                <label>
                    Select Type
                    <select id="viz-0" class="toggle-data-selector">
                        <option value="0">Total</option>
                        <option value="1">Year-Round/Seasonal</option>
                    </select>
                </label>
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
                <label>
                    Select Value Type
                    <select id="viz-0" class="toggle-data-selector">
                        <option value="0">Total Emissions</option>
                        <option value="1">Emissions per Capita</option>
                    </select>
                </label>
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
                    <label>
                        Select Weather Type
                        <select id="viz-3" class="toggle-data-selector">
                            <option value="0">Temperature</option>
                            <option value="1">Precipitation</option>
                            <option value="2">Precipitation from Severe Storms</option>
                        </select>
                    </label>
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
                    <label>
                        Select Value Type
                        <select id="viz-0" class="toggle-data-selector">
                            <option value="0">Annual</option>
                            <option value="1">Since Base Year</option>
                        </select>
                    </label>
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
                    <label>
                        Select Geography
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
                    </label>
                </fieldset>
                <span class="toggle-vr">|</span>
                <fieldset>
                    <label>
                        Select Value Type
                        <select id="viz-1-b" class="toggle-data-selector">
                            <option value="0">Annual</option>
                            <option value="1">Since Base Year</option>
                        </select>
                    </label>
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
                    <label>
                        Select Geography
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
                    </label>
                </fieldset>
                <span class="toggle-vr">|</span>
                <fieldset>
                    <label>
                        Select Value Type
                        <select id="viz-2-b" class="toggle-data-selector">
                            <option value="0">Annual</option>
                            <option value="1">Since Base Year</option>
                        </select>
                    </label>
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
                    <label>
                        Select Geography
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
                    </label>
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
                    <label>
                        Select Geography
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
                    </label>
                </fieldset>
            </form>
        </div>
        <div class="data-viz chart4">
            <svg></svg>
        </div>
        <small class="chart-src"><em>Sources: U.S. Census Bureau's American Community Survey, DVRPC</em></small>`,
    'Income':`
            <div class="toggle-wrapper">
            <h2 class="indicator-subheader toggle-subheader">Income Growth Gap between Highest Quintile &amp; Lowest Quintile Households</h2>
            <form>
                <fieldset>
                    <label>
                        Select Geography
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
                    </label>
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
                    <label>
                        Select Geography
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
                    </label>
                </fieldset>
                <span class="toggle-vr">|</span>
                <fieldset>
                    <label>
                        Select Value Type
                        <select id="viz-1-b" class="toggle-data-selector">
                            <option value="0">Averages</option>
                            <option value="1">Change (Absolute)</option>
                            <option value="2">Change (Percentage)</option>                       
                        </select>
                    </label>
                </fieldset>
            </form>
        </div>
        <div class="data-viz chart2">
            <svg></svg>
        </div>
        <small class="chart-src"><em>Sources: U.S. Census Bureau's American Community Survey, DVRPC</em></small>

        <hr class="indicator-content-hr" />

        <div class="toggle-wrapper">
            <h2 class="indicator-subheader toggle-subheader">Median Income Gap Relative to Households with White, non-Latinx Householder</h2>
            <form>
                <fieldset>
                    <label>
                        Select Geography
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
                    </label>
                </fieldset>
            </form>
        </div>
        <div class="data-viz chart3">
            <svg></svg>
        </div>
        <small class="chart-src"><em>Sources: U.S. Census Bureau's Decennial Census & American Community Survey, DVRPC</em></small>

        <hr class="indicator-content-hr" />

        <div class="toggle-wrapper">
            <h2 class="indicator-subheader toggle-subheader">Median Household Income by Householder’s Major Race or Ethnic Group</h2>
            <form>
                <fieldset>
                    <label>
                        Select Geography
                        <select id="viz-3" class="toggle-data-selector">
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
                    </label>
                </fieldset>
            </form>
        </div>
        <div class="data-viz chart4">
            <svg></svg>
        </div>
        <small class="chart-src"><em>Sources: U.S. Census Bureau's Decennial Census & American Community Survey, DVRPC</em></small>

        <hr class="indicator-content-hr" />

        <div class="toggle-wrapper">
            <h2 class="indicator-subheader toggle-subheader">Median Income Gap between Sexes</h2>
            <form class="double-toggle-form">
                <fieldset>
                    <label>
                        Select Geography
                        <select id="viz-4" class="toggle-data-selector">
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
                    </label>
                </fieldset>
                <span class="toggle-vr">|</span>
                <fieldset>
                    <label>
                        Select Value Type
                        <select id="viz-4-b" class="toggle-data-selector">
                            <option value="0">Gap</option>
                            <option value="1">Percent Gap</option>
                        </select>
                    </label>
                </fieldset>
            </form>
        </div>
        <div class="data-viz chart5">
            <svg></svg>
        </div>
        <small class="chart-src"><em>Sources: U.S. Census Bureau’s Decennial Census & American Community Survey, DVRPC</em></small>

        <hr class="indicator-content-hr" />

        <div class="toggle-wrapper">
            <h2 class="indicator-subheader toggle-subheader">Median Income by Sex</h2>
            <form>
                <fieldset>
                    <label>
                        Select Geography
                        <select id="viz-5" class="toggle-data-selector">
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
                    </label>
                </fieldset>
            </form>
        </div>
        <div class="data-viz chart6">
            <svg></svg>
        </div>
        <small class="chart-src"><em>Sources: U.S. Census Bureau’s Decennial Census & American Community Survey, DVRPC</em></small>`,
    'Business Formations':`
        <div class="toggle-wrapper">
            <h2 class="indicator-subheader toggle-subheader">Business Formations</h2>
            <form>
                <fieldset>
                    <label>
                        Select Value Type:
                        <select id="viz-0" class="toggle-data-selector">
                            <option value="0">Total</option>
                            <option value="1">Change Since Base Year</option>
                            <option value="2">Percent Change Since Base Year</option>
                        </select>
                    </label>
                </fieldset>
            </form>
        </div>
        <div class="data-viz chart">
            <svg>
            </svg>
        </div>
        <small class="chart-src"><em>Geography: * Regional, ** County<br>Source: U.S. Census Bureau's Business Formation Statistics</em></small>
    `,
    'Job Growth':`
        <div class="toggle-wrapper">
            <h2 class="indicator-subheader toggle-subheader">Job Growth Rate by Type</h2>
            <form class="double-toggle-form">
                <fieldset>
                    <label>
                        Select Geography
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
                    </label>
                </fieldset>
                <span class="toggle-vr">|</span>
                <fieldset>
                    <label>
                        Select Value Type
                        <select id="viz-0-b" class="toggle-data-selector">
                            <option value="0">Annual</option>
                            <option value="1">Since Base Year</option>
                        </select>
                    </label>
                </fieldset>
            </form>
        </div>
        <div class="data-viz chart">
            <svg></svg>
        </div>
        <small class="chart-src"><em>Source: Bureau of Economic Analysis Total Full-Time and Part-Time Employment by NAICS Industry.</em></small>

        <hr class="indicator-content-hr" />

        <h2 class="indicator-subheader">Regional Job Distribution by County</h2>
        <div class="data-viz chart2">
            <svg></svg>
        </div>
        <small class="chart-src"><em>Geography: ** County</em></small>
        <small class="chart-src"><em>Source: Bureau of Economic Analysis Total Full-Time and Part-Time Employment by NAICS Industry.</em></small>
        <small class="chart-src"><em>Note: Due to a current bug in the software, percentages display in the mouse-over as decimals.</em></small>

        <hr class="indicator-content-hr" />

        <div class="toggle-wrapper">
            <h2 class="indicator-subheader toggle-subheader">Job Distribution by Industry</h2>
            <form>
                <fieldset>
                    <label>
                        Select Geography
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
                    </label>
                </fieldset>
            </form>
        </div>
        <div class="data-viz chart3">
            <svg></svg>
        </div>
        <small class="chart-src"><em>Source: Bureau of Economic Analysis Total Full-Time and Part-Time Employment by NAICS Industry.</em></small>
        <small class="chart-src"><em>Note: Due to a current bug in the software, percentages display in the mouse-over as decimals.</em></small>`,
    'Land Consumption':`
        <div class="toggle-wrapper">
            <h2 class="indicator-subheader toggle-subheader">Developed and Agricultural Land by Geography</h2>
            <form class="double-toggle-form">
                <fieldset>
                    <label>
                        Select General Use
                        <select id="viz-0" class="toggle-data-selector">
                            <option value="0">Developed Land</option>
                            <option value="1">Agricultural Land</option>
                        </select>
                    </label>
                </fieldset>
                <span class="toggle-vr">|</span>
                <fieldset>
                    <label>
                        Select Value Type
                        <select id="viz-0-b" class="toggle-data-selector">
                            <option value="0">Total Acres</option>
                            <option value="1">Acres Per Capita</option>
                        </select>
                    </label>
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
                    <label>
                        Select Geography
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
                    </label>
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
                    <label>
                        Select Ownership Type
                        <select id="viz-2" class="toggle-data-selector">
                            <option value="0">Total Protected Open Space</option>
                            <option value="1">Publicly Protected Open Space</option>
                            <option value="2">Privately Protected Open Space</option>
                        </select>
                    </label>
                </fieldset>
                <span class="toggle-vr">|</span>
                <fieldset>
                    <label>
                        Select Value Type
                        <select id="viz-2-b" class="toggle-data-selector">
                            <option value="0">Total Acres</option>
                            <option value="1">Percent</option>
                        </select>
                    </label>
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
                    <label>
                        Select Geography
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
                    </label>
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
                    <label>
                        Select Value Type
                        <select id="viz-0" class="toggle-data-selector">
                            <option value="0">Per Capita</option>
                            <option value="1">Total</option>
                            <option value="2">Per Vehicle</option>
                        </select>
                    </label>
                </fieldset>
            </form>
        </div>
        <div class="data-viz chart">
            <svg></svg>
        </div>
        <small class="chart-src"><em>Geography: * Regional, ** County</em></small>
        <small class="chart-src"><em>Sources: New Jersey Department of Transportation, Pennsylvania Department of Transportation, U.S. Census Bureau's American Community Survey &amp; Population Estimates Program</em></small>`,
    'Pavement Conditions':`
        <div class="toggle-wrapper">
            <h2 class="indicator-subheader toggle-subheader">Percentage of Pavement in Deficient Condition by Geography</h2>
            <form>
                <fieldset>
                    <label>
                        Select Road Type
                        <select id="viz-0" class="toggle-data-selector">
                            <option value="0">All Roads</option>
                            <option value="1">Interstate</option>
                            <option value="2">NHS, Non-Interstate</option>
                            <option value="3">Non-NHS</option>
                        </select>
                    </label>
                </fieldset>
            </form>
        </div>
        <div class="data-viz chart">
            <svg></svg>
        </div>
        <small class="chart-src"><em>Sources: New Jersey Department of Transportation, Pennsylvania Department of Transportation</em></small>

        <hr class="indicator-content-hr" />

        <div class="toggle-wrapper">
            <h2 class="indicator-subheader toggle-subheader">Roadways by Pavement Condition</h2>
            <form class="double-toggle-form">
                <fieldset>
                    <label>
                        Select Geography
                        <select id="viz-1" class="toggle-data-selector">
                                <option value="0">DVRPC Region</option>
                                <option value="1">New Jersey Counties</option>
                                <option value="2">Pennsylvania Counties</option>
                        </select>
                    </label>
                </fieldset>
                <span class="toggle-vr">|</span>
                <fieldset>
                    <label>
                        Select Road Type
                        <select id="viz-1-b" class="toggle-data-selector">
                            <option value="0">All Roads</option>
                            <option value="1">Interstate</option>
                            <option value="2">NHS, Non-Interstate</option>
                            <option value="3">Non-NHS</option>
                        </select>
                    </label>
                </fieldset>
            </form>
        </div>
        <div class="data-viz chart2">
            <svg></svg>
        </div>
        <small class="chart-src"><em>Sources: New Jersey Department of Transportation, Pennsylvania Department of Transportation</em></small>`,
    'Population Growth':`
        <div class="toggle-wrapper">
            <h2 class="indicator-subheader toggle-subheader">Population by Geography</h2>
            <form>
                <fieldset>
                    <label>
                        Select Value Type
                        <select id="viz-0" class="toggle-data-selector">
                            <option value="0">Change Since Base Year</option>
                            <option value="1">Total Population</option>
                            <option value="2">Percent Change</option>
                        </select>
                    </label>
                </fieldset>
            </form>
        </div>
        <div class="data-viz chart">
            <svg></svg>
        </div>
        <small class="chart-src"><em>Geography: * Regional, ^ Planning Area, ** County</em></small>
        <small class="chart-src"><em>Source: U.S. Census Bureau's Population Estimates Program</em></small>

        <hr class="indicator-content-hr" />

        <div class="toggle-wrapper">
            <h2 class="indicator-subheader toggle-subheader">Population Change by Change Components</h2>
            <form class="double-toggle-form">
                <fieldset>
                    <label>
                        Select County:
                        <select id="viz-1" class="toggle-data-selector">
                            <option value="0">Bucks</option>
                            <option value="1">Burlington</option>
                            <option value="2">Camden</option>
                            <option value="3">Chester</option>
                            <option value="4">Delaware</option>
                            <option value="5">Gloucester</option>
                            <option value="6">Mercer</option>
                            <option value="7">Montgomery</option>
                            <option value="8">Philadelphia</option>
                        </select>
                    </label>
                </fieldset>
                <span class="toggle-vr">|</span>
                <fieldset>
                    <label>
                        Select Change Type:
                        <select id="viz-1-b" class="toggle-data-selector">
                            <option value="0">Net Change</option>
                            <option value="1">Natural Increase</option>
                            <option value="2">Net Migration</option>
                        </select>
                    </label>
                </fieldset>
            </form>
        </div>
        <div class="data-viz waterfall-viz chart2">
            <svg></svg>
        </div>
        <small class="chart-src"><em>Source: U.S. Census Bureau's Population Estimates Program</em></small>

        <hr class="indicator-content-hr" />

        <div class="toggle-wrapper">
            <h2 class="indicator-subheader toggle-subheader">Population by Age Group</h2>
            <form class="double-toggle-form">
                <fieldset>
                    <label>
                        Select Geography:
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
                    </label>
                </fieldset>
                <span class="toggle-vr">|</span>
                <fieldset>
                    <label>
                        Select Value Type:
                        <select id="viz-2-b" class="toggle-data-selector">
                            <option value="0">Change Since Base Year</option>
                            <option value="1">Total Population</option>
                        </select>
                </fieldset>
            </form>
        </div>
        <div class="data-viz chart3">
            <svg></svg>
        </div>
        <small class="chart-src"><em>Source: U.S. Census Bureau's Population Estimates Program</em></small>

        <hr class="indicator-content-hr" />

        <div class="toggle-wrapper">
            <h2 class="indicator-subheader toggle-subheader">Population by Race</h2>
            <form class="double-toggle-form">
                <fieldset>
                    <label>
                        Select Geography
                        <select id="viz-3" class="toggle-data-selector">
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
                    </label>
                </fieldset>
                <span class="toggle-vr">|</span>
                <fieldset>
                    <label>
                        Select Value Type:
                        <select id="viz-3-b" class="toggle-data-selector">
                            <option value="0">Change Since Base Year</option>
                            <option value="1">Total Population</option>
                        </select>
                    </label>
                </fieldset>
            </form>
        </div>
        <div class="data-viz chart4">
            <svg></svg>
        </div>
        <small class="chart-src"><em>Source: U.S. Census Bureau's Population Estimates Program</em></small>

        <hr class="indicator-content-hr" />

        <div class="toggle-wrapper">
            <h2 class="indicator-subheader toggle-subheader">Population by Ethnicity</h2>
            <form class="double-toggle-form">
                <fieldset>
                    <label>
                        Select Geography:
                        <select id="viz-4" class="toggle-data-selector">
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
                    </label>
                </fieldset>
                <span class="toggle-vr">|</span>
                <fieldset>
                    <label>
                        Select Value Type:
                        <select id="viz-4-b" class="toggle-data-selector">
                            <option value="0">Change Since Base Year</option>
                            <option value="1">Total Population</option>
                        </select>
                    </label>
                </fieldset>
            </form>
        </div>
        <div class="data-viz chart5">
            <svg></svg>
        </div>
        <small class="chart-src"><em>Source: U.S. Census Bureau's Population Estimates Program</em></small>`,
    'Segregation':`
        <h2 class="indicator-subheader">Racial/Ethnic Segregation Index</h2>
        <div class="data-viz chart">
            <svg></svg>
        </div>
        <small class="chart-src"><em>Sources: U.S. Census Bureau's Decennial Census & American Community Survey, DVRPC</em></small>

        <hr class="indicator-content-hr" />

        <h2 class="indicator-subheader">Income Segregation Index</h2>
        <div class="data-viz chart2">
            <svg></svg>
        </div>
        <small class="chart-src"><em>Sources: U.S. Census Bureau's Decennial Census & American Community Survey, DVRPC</em></small>`,
    'Roadway Safety':`
        <div class="toggle-wrapper">
            <h2 class="indicator-subheader toggle-subheader">Individuals Killed or Seriously Injured (KSI) on Roadways by Geography (Five-Year Average)</h2>
            <form>
                <fieldset>
                    <label>
                        Select Value Type
                        <select id="viz-0" class="toggle-data-selector">
                            <option value="0">Total</option>
                            <option value="1">Per Capita</option>
                            <option value="2">Per Vehicle Miles Traveled</option>
                        </select>
                    </label>
                </fieldset>
            </form>
        </div>
        <div class="data-viz chart">
            <svg></svg>
        </div>
        <small class="chart-src"><em>Geography: * Regional, ** County</em></small>
        <small class="chart-src"><em>Sources: New Jersey Department of Transportation, Pennsylvania Department of Transportation,  U.S. Census Bureau's Population Estimates Program</em></small>

        <hr class="indicator-content-hr" />

        <div class="toggle-wrapper">
            <h2 class="indicator-subheader toggle-subheader">Individuals Killed or Seriously Injured (KSI) on Roadways by Mode (Annual)</h2>
            <form class="double-toggle-form">
                <fieldset>
                    <label>
                        Select Geography
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
                    </label>
                </fieldset>
                <span class="toggle-vr">|</span>
                <fieldset>
                    <label>
                        Select Value Type
                        <select id="viz-1-b" class="toggle-data-selector">
                            <option value="0">Total</option>
                            <option value="1">Per Capita</option>
                            <option value="2">Per Vehicle Miles Traveled</option>
                        </select>
                    </label>
                </fieldset>
            </form>
        </div>
        <div class="data-viz chart2">
            <svg></svg>
        </div>
        <small class="chart-src"><em>Sources: New Jersey Department of Transportation, Pennsylvania Department of Transportation, U.S. Census Bureau's Population Estimates Program</em></small>`,
    'Labor Force':`
        <div class="toggle-wrapper">
            <h2 class="indicator-subheader toggle-subheader">Labor Force Participation Gap between Sexes</h2>
            <form>
                <fieldset>
                    <label>
                        Select Geography
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
                    </label>
                </fieldset>
            </form>
        </div>
        <div class="data-viz chart">
            <svg></svg>
        </div>
        <small class="chart-src"><em>Source: U.S. Census Bureau’s American Community Survey</em></small>

        <hr class="indicator-content-hr" />
        
        <div class="toggle-wrapper">
            <h2 class="indicator-subheader toggle-subheader">Labor Force Participation by Sex</h2>
            <form>
                <fieldset>
                    <label>
                        Select Geography
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
                    </label>
                </fieldset>
            </form>
        </div>
        <div class="data-viz chart2">
            <svg></svg>
        </div>
        <small class="chart-src"><em>Source: U.S. Census Bureau’s American Community Survey</em></small>
        
        <hr class="indicator-content-hr" />

        <div class="toggle-wrapper">
            <h2 class="indicator-subheader toggle-subheader">Labor Force Participation Gap Relative to White Participation Rate</h2>
            <form>
                <fieldset>
                    <label>
                        Select Geography
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
                    </label>
                </fieldset>
            </form>
        </div>
        <div class="data-viz chart3">
            <svg></svg>
        </div>
        <small class="chart-src"><em>Source: U.S. Census Bureau's American Community Survey</em></small>
        
        <hr class="indicator-content-hr" />

        <div class="toggle-wrapper">
                <h2 class="indicator-subheader toggle-subheader">Labor Force Participation by Race</h2>
                <form>
                    <fieldset>
                        <label>
                            Select Geography:
                            <select id="viz-3" class="toggle-data-selector">
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
                        </label>
                    </fieldset>
                </form>
            </div>
            <div class="data-viz chart4">
                <svg></svg>
            </div>
            <small class="chart-src"><em>Source: U.S. Census Bureau's American Community Survey</em></small>`,
    'Transit Conditions':`
        <div class="toggle-wrapper">
            <h2 class="indicator-subheader toggle-subheader">Average Vehicle Age by Vehicle Type</h2>
            <form>
                <fieldset>
                    <label>
                        Select Transit Agency
                        <select id="viz-0" class="toggle-data-selector">
                            <option value="0">All Agencies</option>
                            <option value="1">NJ Transit</option>
                            <option value="2">PART (Pottstown)</option>
                            <option value="3">PATCO</option>
                            <option value="4">SEPTA</option>
                        </select>
                    </label>
                </fieldset>
            </form>
        </div>
        <div class="data-viz chart">
            <svg></svg>
        </div>
        <small class="chart-src"><em>Source: Federal Transit Administration's National Transit Database</em></small>

        <hr class="indicator-content-hr" />

        <div class="toggle-wrapper">
            <h2 class="indicator-subheader toggle-subheader">Rail Vehicles by Age Group</h2>
            <form>
                <fieldset>
                    <label>
                        Select Transit Agency
                        <select id="viz-1" class="toggle-data-selector">
                            <option value="0">All Agencies</option>
                            <option value="1">NJ Transit</option>
                            <option value="2">PATCO</option>
                            <option value="3">SEPTA</option>
                        </select>
                    </label>
                </fieldset>
            </form>
        </div>
        <div class="data-viz chart2">
            <svg></svg>    
        </div>
        <small class="chart-src"><em>Source: Federal Transit Administration's National Transit Database</em></small>

        <hr class="indicator-content-hr" />

        <div class="toggle-wrapper">
            <h2 class="indicator-subheader toggle-subheader">Buses by Age Group</h2>
            <form>
                <fieldset>
                    <label>
                        Select Transit Agency
                        <select id="viz-2" class="toggle-data-selector">
                            <option value="0">All Agencies</option>
                            <option value="1">NJ Transit</option>
                            <option value="2">PART (Pottstown)</option>
                            <option value="3">SEPTA</option>
                        </select>
                    </label>
                </fieldset>
            </form>
        </div>
        <div class="data-viz chart3">
            <svg></svg>
        </div>
        <small class="chart-src"><em>Source: Federal Transit Administration's National Transit Database</em></small>`,
    'Transit Ridership':`
        <div class="toggle-wrapper">
            <h2 class="indicator-subheader toggle-subheader">Annual Unlinked Transit Trips</h2>
            <form>
                <fieldset>
                    <label>
                        Select Value Type
                        <select id="viz-0" class="toggle-data-selector">
                            <option value="0">Total</option>
                            <option value="1">Per Capita</option>
                        </select>
                    </label>
                </fieldset>
            </form>
        </div>
        <div class="data-viz chart">
            <svg></svg>
        </div>
        <small class="chart-src"><em>Sources: Federal Transit Administration's National Transit Database, U.S. Census Bureau's Population Estimates Program</em></small>

        <hr class="indicator-content-hr" />

        <div class="toggle-wrapper">
            <h2 class="indicator-subheader toggle-subheader">Annual Unlinked Trips by Transit Mode</h2>
            <form>
                <fieldset>
                    <label>
                        Select Value Type
                        <select id="viz-1" class="toggle-data-selector">
                            <option value="0">Total</option>
                            <option value="1">Per Capita</option>
                        </select>
                    </label>
                </fieldset>
            </form>
        </div>
        <div class="data-viz chart2">
            <svg></svg>
        </div>
        <small class="chart-src"><em>Sources: Federal Transit Administration's National Transit Database, U.S. Census Bureau's Population Estimates Program</em></small>

        <hr class="indicator-content-hr" />

        <div class="toggle-wrapper">
            <h2 class="indicator-subheader toggle-subheader">Annual Unlinked Trips by Transit Agency</h2>
            <form>
                <fieldset>
                    <label>
                        Select Value Type
                        <select id="viz-2" class="toggle-data-selector">
                            <option value="0">Total</option>
                            <option value="1">Per Capita</option>
                        </select>
                    </label>
                </fieldset>
            </form>
        </div>
        <div class="data-viz chart3">
            <svg></svg>
        </div>
        <small class="chart-src"><em>Sources: Federal Transit Administration's National Transit Database, U.S. Census Bureau's Population Estimates Program</em></small>`,
    'Water Quality':`
        <h2 class="indicator-subheader">Waterbodies Attaining Quality Standards by Geography</h2>
        <div class="data-viz chart">
            <svg></svg>
        </div>
        <small class="chart-src"><em>Sources: New Jersey Department of Environmental Protection, Pennsylvania Department of Environmental Protection, DVRPC</em></small>

        <hr class="indicator-content-hr" />

        <h2 class="indicator-subheader">New Jersey Counties' Subwatershed Area by Condition Type</h2>
        <div class="data-viz chart2">
            <svg></svg>
        </div>
        <small class="chart-src"><em>Source: New Jersey Department of Environmental Protection</em></small>

        <hr class="indicator-content-hr" />

        <h2 class="indicator-subheader">Pennsylvania Counties' Stream Miles by Condition Type</h2>
        <div class="data-viz chart3">
            <svg></svg>
        </div>
        <small class="chart-src"><em>Source: Pennsylvania Department of Environmental Protection</em></small>`,
}

export default chartStrings
