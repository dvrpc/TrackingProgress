const chartStrings = {
  "Air Quality": `
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
  "Bridge Conditions": `
        <div class="toggle-wrapper">
            <h2 class="indicator-subheader toggle-subheader">Percentage of Deficient Bridges by Ownership Type</h2>
            <form class="double-toggle-form">
                <fieldset>
                    <label>
                        Select Ownership Type:
                        <select id="viz-0" class="toggle-data-selector">
                            <option value="0">All</option>
                            <option value="1">State</option>
                            <option value="2">Local</option>
                            <option value="3">Other</option>
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
                        Select Ownership Type:
                        <select id="viz-1" class="toggle-data-selector">
                            <option value="0">All</option>
                            <option value="1">State</option>
                            <option value="2">Local</option>
                            <option value="3">Other</option>
                        </select>               
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
                                <option value="1">NJ Suburban Counties</option>
                                <option value="2">PA Counties</option>
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
  "Commute Mode": `
        <div class="toggle-wrapper">
            <h2 class="indicator-subheader toggle-subheader">Means of Transportation to Work by Mode</h2>
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
                            <optgroup label="Urban Areas">
                                <option value="12">Philadelphia UA</option>
                                <option value="13">Trenton UA</option>
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
        <small class="chart-src"><em>Source: U.S. Census Bureau's American Community Survey Five-Year Estimates</em></small>

        <hr class="indicator-content-hr" />

        <div class="toggle-wrapper">
            <h2 class="indicator-subheader toggle-subheader">Means of Transportation to Work by Geography</h2>
            <form class="double-toggle-form">
                <fieldset>
                    <label>
                        Select Mode 
                        <select id="viz-1" class="toggle-data-selector">
                                <option value="0">Drove Alone</option>
                                <option value="1">Non-SOV</option>
                                <option value="2">Carpool</option>
                                <option value="3">Public Transit</option>
                                <option value="4">Walked</option>
                                <option value="5">Biked</option>
                                <option value="6">Taxi, Motorcycle, or Other</option>
                                <option value="7">Worked from Home</option>
                                <option value="8">Bus</option>
                                <option value="9">Rail</option>
                                <option value="10">Subway</option>
                                <option value="11">Trolley or Light Rail</option>
                                <option value="12">Ferryboat</option>
                                <option value="13">Motorcycle</option>
                                <option value="14">Other Means</option>
                                <option value="15">Taxi</option>
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
        <small class="chart-src"><em>Source: U.S. Census Bureau's American Community Survey One-Year Estimates</em></small>

        <hr class="indicator-content-hr" />

        <div class="toggle-wrapper">
            <h2 class="indicator-subheader toggle-subheader">Means of Transportation to Work by Urban Area</h2>
            <form>
                <fieldset>
                    <label>
                        Select Geography 
                        <select id="viz-2" class="toggle-data-selector">
                                <option value="0">Philadelphia UA</option>
                                <option value="1">Trenton UA</option>
                        </select>
                    </label>
                </fieldset>
            </form>
        </div>
        <div class="data-viz chart3">
            <svg></svg>
        </div>
        <small class="chart-src"><em>Source: U.S. Census Bureau's American Community Survey</em></small>
`,
  Congestion: `
        <div class="toggle-wrapper">
            <h2 class="indicator-subheader toggle-subheader">Planning Time Index</h2>
            <form class="double-toggle-form">
                <fieldset>
                    <label>
                        Select Time Period:
                        <select id="viz-0" class="toggle-data-selector">
                            <option value="0">24 hour</option>
                            <option value="1">Morning (6-10 AM)</option>
                            <option value="2">Midday (10 AM-3 PM)</option>
                            <option value="3">Evening (3-7 PM)</option>
                            <option value="4">Overnight (7 PM-6 AM)</option>
                        </select>
                    </label>
                </fieldset>
                <span class="toggle-vr">|</span>
                <fieldset>
                    <label>
                        Select Road Type
                        <select id="viz-0-b" class="toggle-data-selector">
                            <option value="0">Highways</option>
                            <option value="1">Local</option>
                        </select>
                    </label>
                </fieldset>
            </form>
        </div>
        <div class="data-viz chart">
            <svg></svg>
        </div>
        <small class="chart-src"><em>Sources: RITIS Probe Data Analytics Suite, INRIX, DVRPC</em></small>
        
        <hr class="indicator-content-hr" />
        
        <div class="toggle-wrapper">
            <h2 class="indicator-subheader toggle-subheader">Reliable Roadways</h2>
            <form class="double-toggle-form">
                <fieldset>
                    <label>
                        Select Road Type
                        <select id="viz-1" class="toggle-data-selector">
                            <option value="0">Interstate</option>
                            <option value="1">Non-Interstate</option>
                        </select>
                    </label>
                </fieldset>
                <span class="toggle-vr">|</span>
                <fieldset>
                    <label>
                        Select Value Type 
                        <select id="viz-1-b" class="toggle-data-selector">
                            <option value="0">Percent</option>
                            <option value="1">Miles</option>
                        </select>
                    </label>
                </fieldset>
            </form>
        </div>
        <div class="data-viz chart2">
            <svg></svg>
        </div>
        <small class="chart-src"><em>Sources: RITIS Probe Data Analytics Suite, INRIX, DVRPC</em></small>

        <hr class="indicator-content-hr" />

        <div class="toggle-wrapper">
            <h2 class="indicator-subheader toggle-subheader">Truck Travel Time Reliability Index</h2>
        </div>
        <div class="data-viz chart3">
            <svg></svg>
        </div>
        <small class="chart-src"><em>Sources: RITIS Probe Data Analytics Suite, INRIX, DVRPC</em></small>

        <hr class="indicator-content-hr" />
   
        <div class="toggle-wrapper">
        <h2 class="indicator-subheader toggle-subheader">Annual Hours of Peak Hour Excessive Delay</h2>
        <form>
            <fieldset>
                <label>
                    Select Value Type
                    <select id="viz-3" class="toggle-data-selector">
                        <option value="0">Total</option>
                        <option value="1">Per Capita</option>
                    </select>
                </label>
            </fieldset>
        </form>
        </div>
        <div class="data-viz chart4">
            <svg></svg>
        </div>
        <small class="chart-src"><em>Sources: RITIS Probe Data Analytics Suite, INRIX, DVRPC</em></small>
        `,
  "Educational Attainment": `
        <h2 class="indicator-subheader">Population 25 Years and Older Having Completed High-School by Geography</h2>
        <div class="data-viz chart">
            <svg></svg>
        </div>
        <small class="chart-src"><em>Geography: * Regional, ** County</em></small>
        <small class="chart-src"><em>Source: U.S. Census Bureau's American Community Survey</em></small>

        <hr class="indicator-content-hr" />

        <h2 class="indicator-subheader">Population 25 Years and Older Having Completed High-School by Planning Area</h2>
        <div class="data-viz chart2">
            <svg></svg>
        </div>
        <small class="chart-src"><em>Sources: U.S. Census Bureau's Decennial Census &amp; American Community Survey, DVRPC</em></small>

        <hr class="indicator-content-hr" />

        <div class="toggle-wrapper">
            <h2 class="indicator-subheader toggle-subheader">Population 25 Years and Older by Educational Attainment</h2>
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
  "Gross Domestic Product": `
        <div class="toggle-wrapper">
            <h2 class="indicator-subheader toggle-subheader">GDP Growth</h2>
            <form class="double-toggle-form">
                <fieldset>
                    <label>
                        Select Industry
                        <select id="viz-0" class="toggle-data-selector">
                            <option class="optionChild" value="0">All Industries</option>
                            <option class="optionChild" value="1">Agriculture, Forestry, Fishing, and Mining</option>
                            <option class="optionChild" value="2">Arts, Entertainment, Recreation, Accommodation, and Food Services</option>
                            <option class="optionChild" value="3">Construction</option>
                            <option class="optionChild" value="4">Educational Services</option>
                            <option class="optionChild" value="5">Finance, Insurance, Real Estate</option> 
                            <option class="optionChild" value="6">Health Care and Social Assistance</option>
                            <option class="optionChild" value="7">Information</option>
                            <option class="optionChild" value="8">Manufacturing</option>
                            <option class="optionChild" value="9">Other Services (except public admin)</option>
                            <option class="optionChild" value="10">Professional Services, scientific, tech services</option>
                            <option class="optionChild" value="11">Public administration</option>
                            <option class="optionChild" value="12">Retail Trade</option>
                            <option class="optionChild" value="13">Transportation, Warehousing, and Utilities</option>
                            <option class="optionChild" value="14">Wholesale Trade</option>
                        </select>
                    </label>
                </fieldset>
                <span class="toggle-vr">|</span>
                <fieldset>
                    <label>
                        Select Value Type
                        <select id="viz-0-b" class="toggle-data-selector">
                            <option value="0">Annual Change Rate</option>
                            <option value="1">Change Rate Since Base Year</option>
                            <option value="2">Total GDP</option>                       
                            <option value="3">Per Capita</option>                       
                        </select>
                    </label>
                </fieldset>
            </form>
        </div>
        <div class="data-viz chart">
            <svg></svg>
        </div>
        <small class="chart-src"><em>Geography: * Regional, ** County</em></small>
        <small class="chart-src"><em>U.S. Bureau of Economic Analysis, Real GDP by County</em></small>
  
        <hr class="indicator-content-hr" />

        <h2 class="indicator-subheader">Regional GDP Distribution by County</h2>
        <div class="data-viz chart2">
            <svg></svg>
        </div>
        <small class="chart-src"><em>U.S. Bureau of Economic Analysis, Real GDP by County</em></small>
                <hr class="indicator-content-hr" />       
        
        <div class="toggle-wrapper">
            <h2 class="indicator-subheader toggle-subheader">GDP Distribution by Industry</h2>
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
        <div class="data-viz chart1">
            <svg></svg>
        </div>
        <small class="chart-src"><em>U.S. Bureau of Economic Analysis, Real GDP by County</em></small>        `,
  "Mortgage Lending": `
        <div class="toggle-wrapper">
        <h2 class="indicator-subheader toggle-subheader">Loan Origination Gap</h2>
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
                    Select Purpose
                    <select id="viz-0-b" class="toggle-data-selector">
                        <option value="0">All</option>
                        <option value="1">Home Purchase</option>
                        <option value="2">Home Improvement</option>
                        <option value="3">Refinancing</option>
                    </select>
                </label>
            </fieldset>
        </form>
        </div>
        <div class="data-viz chart">
            <svg></svg>
        </div>
        <small class="chart-src"><em>Geography: * Sex, ** Ethnicity, *** Race</em></small>
        <small class="chart-src">Federal Financial Institutions Examination Council's (FFIEC) Home Mortgage Disclosure Act (HMDA) Data</small>
        
        <hr class="indicator-content-hr" />

        <div class="toggle-wrapper">
        <h2 class="indicator-subheader toggle-subheader">Loan Origination Rates</h2>
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
                    Select Purpose
                    <select id="viz-1-b" class="toggle-data-selector">
                        <option value="0">All</option>
                        <option value="1">Home Purchase</option>
                        <option value="2">Home Improvement</option>
                        <option value="3">Refinancing</option>
                    </select>
                </label>
            </fieldset>
        </form>
        </div>
        <div class="data-viz chart1">
            <svg></svg>
        </div>
        <small class="chart-src"><em>Geography: * Sex, ** Ethnicity, *** Race</em></small>
        <small class="chart-src">Federal Financial Institutions Examination Council's (FFIEC) Home Mortgage Disclosure Act (HMDA) Data</small>
        
        <hr class="indicator-content-hr" />

        <div class="toggle-wrapper">
        <h2 class="indicator-subheader toggle-subheader">Total Decisioned Applications (Originations + Denials)</h2>
        <form class="double-toggle-form">
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
            <span class="toggle-vr">|</span>
            <fieldset>
                <label>
                    Select Purpose
                    <select id="viz-2-b" class="toggle-data-selector">
                        <option value="0">All</option>
                        <option value="1">Home Purchase</option>
                        <option value="2">Home Improvement</option>
                        <option value="3">Refinancing</option>
                    </select>
                </label>
            </fieldset>
        </form>
        </div>
        <div class="data-viz chart2">
            <svg></svg>
        </div>
        <small class="chart-src"><em>Geography: * Sex, ** Ethnicity, *** Race</em></small>
        <small class="chart-src">Federal Financial Institutions Examination Council's (FFIEC) Home Mortgage Disclosure Act (HMDA) Data</small>`,
  "Heat Trapping Gases": `
        <div class="toggle-wrapper">
        <h2 class="indicator-subheader toggle-subheader">Regional Heat-Trapping Gases</h2>
        <form>
            <fieldset>
                <label>
                    Select Value Type
                    <select id="viz-0" class="toggle-data-selector">
                        <option value="0">Total</option>
                        <option value="1">Total per Capita</option>
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

        <h2 class="indicator-subheader toggle-subheader">Regional Heat-Trapping Gases By Source</h2>
        <div class="data-viz chart2">
            <svg></svg>
        </div>
        <small class="chart-src"><em>Source: DVRPC Regional Energy Use and Greenhouse Gas Emissions Inventory</em></small>

        <hr class="indicator-content-hr" />

        <div class="toggle-wrapper">
        <h2 class="indicator-subheader">Electricity Generation Mix by Source</h2>
        <form>
            <fieldset>
                <label>
                    Select Source Type
                    <select id="viz-2" class="toggle-data-selector">
                        <option value="0">Individual Source</option>
                        <option value="1">Source Grouping</option>
                    </select>
                </label>
            </fieldset>
        </form>
        </div>
        <div class="data-viz chart3">
            <svg></svg>
        </div>
        <small class="chart-src"><em>Source: U.S. Environmental Protection Agency, Emissions & Generation Resource Integrated Database (eGRID)</em></small>

        <hr class="indicator-content-hr" />

        <div class="toggle-wrapper">
            <h2 class="indicator-subheader toggle-subheader">Regional Climate Data by Weather Type</h2>
            <form>
                <fieldset>
                    <label>
                        Select Weather Type
                        <select id="viz-3" class="toggle-data-selector">
                            <option value="0">Temperature</option>
                            <option value="1">Precipitation</option>
                            <option value="2">Average Sea Level</option>
                            <option value="3">Average Sea Level Change</option>
                        </select>
                    </label>
                </fieldset>
            </form>
        </div>
        <div class="data-viz chart4">
            <svg></svg>
        </div>
        <small class="chart-src"><em>Source: National Oceanic & Atmospheric Administration's National Centers for Environmental Information</em></small>

        <hr class="indicator-content-hr" />

            <h2 class="indicator-subheader toggle-subheader">
            Annual Heat-Trapping Gases from National Highway System
            </h2>

        <div class="data-viz chart5">
            <svg></svg>
        </div>
        <small class="chart-src"><em>Source: National Oceanic & Atmospheric Administration's National Centers for Environmental Information</em></small>
`,
  "Housing Permits": `
        <div class="toggle-wrapper">
            <h2 class="indicator-subheader toggle-subheader">Share of Regional Housing Unit Permits Approved in Core Cities and Developed Communities</h2>
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
            <h2 class="indicator-subheader toggle-subheader">Total Housing Units Approved by Geography</h2>
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
            <h2 class="indicator-subheader toggle-subheader">Total Housing Units Approved by Type</h2>
            <form class="double-toggle-form">
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
  "Housing Affordability": `
        <h2 class="indicator-subheader">Cost-Burdened Households by Geography</h2>
        <div class="toggle-wrapper">
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
                            <option value="0">Amount</option>
                            <option value="1">Percent</option>
                        </select>
                    </label>
                </fieldset>
            </form>
        </div>
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
        <small class="chart-src"><em>Sources: U.S. Census Bureau's American Community Survey, DVRPC</em></small>
        
        <hr class="indicator-content-hr" />

        <h2 class="indicator-subheader">Home Price to Median Household Income Ratio</h2>
        <div class="toggle-wrapper">
            <h2 class="indicator-subheader toggle-subheader"></h2>
            <form>
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
            </form>
        </div>
        <div class="data-viz chart5">
            <svg></svg>
        </div>
        <small class="chart-src"><em>Geography: * Regional, ** County</em></small>
        <small class="chart-src"><em>Source: U.S. Census Bureau's American Community Survey</em></small>
        `,
  Income: `
            <div class="toggle-wrapper">
            <h2 class="indicator-subheader toggle-subheader">Income Change Gap between Highest Quintile &amp; Lowest Quintile Households</h2>
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
                            <option value="1">Change Since Base Year</option>
                            <option value="2">Percent Change Since Base Year</option>                       
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
            <form class="double-toggle-form">
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
                <span class="toggle-vr">|</span>
                <fieldset>
                    <label>
                        Select Value Type
                        <select id="viz-2-b" class="toggle-data-selector">
                            <option value="0">Gap</option>
                            <option value="1">Percent Gap</option>
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
            <h2 class="indicator-subheader toggle-subheader">Median Earnings Gap between Sexes</h2>
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
            <h2 class="indicator-subheader toggle-subheader">Median Earnings by Sex</h2>
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
  "Business Formations": `
        <div class="toggle-wrapper">
            <h2 class="indicator-subheader toggle-subheader">Business Formations</h2>
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
                        Select Value Type:
                        <select id="viz-0-b" class="toggle-data-selector">
                            <option value="0">Totals</option>
                            <option value="1">Percentage</option>
                        </select>
                    </label>
                </fieldset>
            </form>
        </div>
        <div class="data-viz chart">
            <svg></svg>
        </div>

        <small class="chart-src"><em>Geography: * Regional, ** County<br>Source: U.S. Census Bureau's Business Formation Statistics</em></small>
    `,
  "Job Growth": `
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
                            <option value="2">Total Employment</option>
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
        <small class="chart-src"><em>Source: Bureau of Economic Analysis Total Full-Time and Part-Time Employment by NAICS Industry.</em></small>

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
        <small class="chart-src"><em>Source: Bureau of Economic Analysis Total Full-Time and Part-Time Employment by NAICS Industry.</em></small>`,
  "Land Consumption": `
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
                            <option value="1">Publicly-Owned Protected Open Space</option>
                            <option value="2">Privately-Owned Protected Open Space</option>
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
  "Miles Driven": `
        <div class="toggle-wrapper">
            <h2 class="indicator-subheader toggle-subheader">Daily Vehicle Miles Traveled (VMT) by Geography</h2>
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
        <small class="chart-src"><em>Sources: New Jersey Department of Transportation, Pennsylvania Department of Transportation Highway Statistics, U.S. Census Bureau's American Community Survey &amp; Population Estimates Program</em></small>
        
        <div class="toggle-wrapper">
            <h2 class="indicator-subheader toggle-subheader">Personal Vehicles by Geography</h2>
            <form>
                <fieldset>
                    <label>
                        Select Value Type
                        <select id="viz-1" class="toggle-data-selector">
                            <option value="0">Per Capita</option>
                            <option value="1">Total</option>
                        </select>
                    </label>
                </fieldset>
            </form>
        </div>
        <div class="data-viz chart2">
            <svg></svg>
        </div>
        <small class="chart-src"><em>Geography: * Regional, ** County</em></small>
        <small class="chart-src"><em>Sources: New Jersey Department of Transportation, Pennsylvania Department of Transportation Highway Statistics, U.S. Census Bureau's American Community Survey &amp; Population Estimates Program</em></small>
        `,
  "Pavement Conditions": `
        <div class="toggle-wrapper">
            <h2 class="indicator-subheader toggle-subheader">Percentage of Pavement in Deficient Condition by Geography</h2>
            <form class="double-toggle-form">
                <fieldset>
                    <label>
                        Select Road Type
                        <select id="viz-0" class="toggle-data-selector">
                            <option value="0">All Roads</option>
                            <option value="1">Interstate</option>
                            <option value="2">Non-Interstate NHS</option>
                            <option value="3">Non-NHS</option>
                        </select>
                    </label>
                </fieldset>
                <span class="toggle-vr">|</span>
                <fieldset>
                    <label>
                        Select Metric 
                        <select id="viz-0-b" class="toggle-data-selector">
                            <option value="0">PM2</option>
                            <option value="1">IRI</option>
                            <option value="2">DOT Pavement Index</option>
                        </select>
                    </label>
                </fieldset>
            </form>
        </div>
        <div class="data-viz chart">
            <svg></svg>
        </div>
        <small class="chart-src"><em>Geography: * Regional, ** County</em></small>
        <small class="chart-src"><em>Sources: New Jersey Department of Transportation, Pennsylvania Department of Transportation</em></small>

        <hr class="indicator-content-hr" />

        <div class="toggle-wrapper">
            <h2 class="indicator-subheader toggle-subheader">Total Roadways Miles by Pavement Condition</h2>
            <form class="double-toggle-form">
                <fieldset>
                    <label>
                        Select Geography
                        <select id="viz-1" class="toggle-data-selector">
                            <optgroup label="Regional">
                                <option value="0">DVRPC Region</option>
                                <option value="1">NJ Counties</option>
                                <option value="2">PA Counties</option>
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
                        Select Metric 
                        <select id="viz-1-b" class="toggle-data-selector">
                            <option value="0">PM2</option>
                            <option value="1">IRI</option>
                            <option value="2">DOT Pavement Index</option>
                        </select>
                    </label>
                </fieldset>
            </form>
        </div>
        <div class="data-viz chart2">
            <svg></svg>
        </div>
        <small class="chart-src"><em>Sources: New Jersey Department of Transportation, Pennsylvania Department of Transportation</em></small>
   `,
  "Population Growth": `
        <div class="toggle-wrapper">
            <h2 class="indicator-subheader toggle-subheader">Population by Geography</h2>
            <form>
                <fieldset>
                    <label>
                        Select Value Type
                        <select id="viz-0" class="toggle-data-selector">
                            <option value="0">Total Population</option>
                            <option value="1">Change Since Base Year</option>
                            <option value="2">Annual Percent Change</option>
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
                            <option value="0">Total Population</option>
                            <option value="1">Change Since Base Year</option>
                            <option value="2">Annual Percent Change</option>
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
                            <option value="0">Total Population</option>
                            <option value="1">Change Since Base Year</option>
                            <option value="2">Annual Percent Change</option>
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
                            <option value="0">Total Population</option>
                            <option value="1">Change Since Base Year</option>
                            <option value="2">Annual Percent Change</option>
                        </select>
                    </label>
                </fieldset>
            </form>
        </div>
        <div class="data-viz chart5">
            <svg></svg>
        </div>
        <small class="chart-src"><em>Source: U.S. Census Bureau's Population Estimates Program</em></small>`,
  "Community Integration": `
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
  "Transportation Safety": `
        <div class="toggle-wrapper">
            <h2 class="indicator-subheader toggle-subheader">Individuals Killed or Seriously Injured (KSI) on Roadways by Geography</h2>
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
                        Select Value Type:
                        <select id="viz-0-b" class="toggle-data-selector">
                            <option value="0">Total</option>
                            <option value="1">Per 100 Million VMT</option>
                            <option value="2">Per Capita</option>
                        </select>
                    </label>
                </fieldset>
            </form>
        </div>
        <div class="data-viz chart">
            <svg></svg>
        </div>
        <small class="chart-src"><em>Sources: New Jersey Department of Transportation, Pennsylvania Department of Transportation,  U.S. Census Bureau's Population Estimates Program</em></small>

        <hr class="indicator-content-hr" />

        <div class="toggle-wrapper">
            <h2 class="indicator-subheader toggle-subheader">Individuals Killed or Seriously Injured (KSI) on Roadways by Crash Type</h2>
            <form class="double-toggle-form">
                <fieldset>
                    <label>
                        Select Geography:
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
                        Select Value Type:
                        <select id="viz-1-b" class="toggle-data-selector">
                            <option value="0">Total</option>
                            <option value="1">Per 100 Million VMT</option>
                            <option value="2">Per Capita</option>
                        </select>
                    </label>
                </fieldset>
            </form>
        </div>
        <div class="data-viz chart2">
            <svg></svg>
        </div>
        <small class="chart-src"><em>Sources: New Jersey Department of Transportation, Pennsylvania Department of Transportation,  U.S. Census Bureau's Population Estimates Program</em></small>

        <hr class="indicator-content-hr" />

        <div class="toggle-wrapper">
            <h2 class="indicator-subheader toggle-subheader">Killed and Injured on Transit</h2>
            <form class="double-toggle-form">
                <fieldset>
                    <label>
                        Select Transit Agency:
                        <select id="viz-2" class="toggle-data-selector">
                                <option value="0">All</option>
                                <option value="1">SEPTA</option>
                                <option value="2">NJ Transit</option>
                                <option value="3">PATCO</option>
                        </select>
                    </label>
                </fieldset>
                <span class="toggle-vr">|</span>
                <fieldset>
                    <label>
                        Select Value Type:
                        <select id="viz-2-b" class="toggle-data-selector">
                            <option value="0">Total</option>
                            <option value="1">Per 100,000 Vehicle Revenue Miles</option>
                            <option value="2">Per 200,000 Employee Work Hours</option>
                        </select>
                    </label>
                </fieldset>
            </form>
        </div>
        <div class="data-viz chart3">
            <svg></svg>
        </div>
        <small class="chart-src"><em>Sources: New Jersey Department of Transportation, Pennsylvania Department of Transportation,  U.S. Census Bureau's Population Estimates Program</em></small>

        <hr class="indicator-content-hr" />


        <div class="toggle-wrapper">
            <h2 class="indicator-subheader toggle-subheader">Fatalities, Passenger Injuries, and Employee Injuries on Transit</h2>
            <form class="double-toggle-form">
                <fieldset>
                    <label>
                        Select Transit Agency:
                        <select id="viz-3" class="toggle-data-selector">
                                <option value="0">All</option>
                                <option value="1">SEPTA</option>
                                <option value="2">NJ Transit</option>
                                <option value="3">PATCO</option>
                        </select>
                    </label>
                </fieldset>
                <span class="toggle-vr">|</span>
                <fieldset>
                    <label>
                        Select Mode:
                        <select id="viz-3-b" class="toggle-data-selector">
                                <option value="0">All</option>
                                <option value="1">Bus</option>
                                <option value="2">Trolleybus</option>
                                <option value="3">Heavy Rail</option>
                                <option value="4">Light Rail</option>
                        </select>
                    </label>
                </fieldset>
            </form>
        </div>
        <div class="data-viz chart4">
            <svg></svg>
        </div>
        <small class="chart-src"><em>Sources: New Jersey Department of Transportation, Pennsylvania Department of Transportation,  U.S. Census Bureau's Population Estimates Program</em></small>

        <hr class="indicator-content-hr" />

        <div class="toggle-wrapper">
            <h2 class="indicator-subheader toggle-subheader">Transit Safety Events</h2>
            <form class="double-toggle-form">
                <fieldset>
                    <label>
                        Select Transit Agency:
                        <select id="viz-4" class="toggle-data-selector">
                                <option value="0">All</option>
                                <option value="1">SEPTA</option>
                                <option value="2">NJ Transit</option>
                                <option value="3">PATCO</option>
                        </select>
                    </label>
                </fieldset>
                <span class="toggle-vr">|</span>
                <fieldset>
                    <label>
                        Select Value Type:
                        <select id="viz-4-b" class="toggle-data-selector">
                            <option value="0">Total</option>
                            <option value="1">Per 100,000 Vehicle Revenue Miles</option>
                        </select>
                    </label>
                </fieldset>
            </form>
        </div>
        <div class="data-viz chart5">
            <svg></svg>
        </div>
        <small class="chart-src"><em>Sources: New Jersey Department of Transportation, Pennsylvania Department of Transportation,  U.S. Census Bureau's Population Estimates Program</em></small>
`,
  "Labor Force": `
        <div class="toggle-wrapper">
            <h2 class="indicator-subheader toggle-subheader">Labor Force Participation Gap between Sexes (Ages 20 to 64)</h2>
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
            <h2 class="indicator-subheader toggle-subheader">Labor Force Participation by Sex (Ages 20 to 64)</h2>
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
            <h2 class="indicator-subheader toggle-subheader">Labor Force Participation Gap Relative to White Participation Rate (Ages 16 and Older)</h2>
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
                <h2 class="indicator-subheader toggle-subheader">Labor Force Participation by Race (Ages 16 and Older)</h2>
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
  "Transit Conditions": `
        <div class="toggle-wrapper">
            <h2 class="indicator-subheader toggle-subheader">Revenue Vehicles Past their Useful Life Benchmark (ULB)</h2>
            <form class="double-toggle-form">
                <fieldset>
                    <label>
                        Select Mode
                        <select id="viz-0" class="toggle-data-selector">
                            <option value="0">All Modes</option>
                            <option value="1">Articulated Bus</option>
                            <option value="2">Autombile</option>
                            <option value="3">Bus</option>
                            <option value="4">Commuter Rail Locomotive</option>
                            <option value="5">Commuter Rail Passenger Coach</option>
                            <option value="6">Commuter Rail Self-Propelled Passenger Car</option>
                            <option value="7">Cutaway Bus</option>
                            <option value="8">Heavy Rail Passenger Car</option>
                            <option value="9">Light Rail Vehicle</option>
                            <option value="10">Minivan</option>
                            <option value="11">Over-the Road Bus</option>
                            <option value="12">Trolleybus</option>
                            <option value="13">Van</option>
                            <option value="14">Vintage Trolley/Streetcar</option>
                        </select>
                    </label>
                </fieldset>
                <span class="toggle-vr">|</span>
                <fieldset>
                    <label>
                        Select Value Type
                        <select id="viz-0-b" class="toggle-data-selector">
                            <option value="0">Total</option>
                            <option value="1">Percent</option>
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
            <h2 class="indicator-subheader toggle-subheader">Support Vehicles Past their Useful Life Benchmark (ULB)</h2>
            <form class="double-toggle-form">
                <fieldset>
                    <label>
                        Select Mode 
                        <select id="viz-1" class="toggle-data-selector">
                            <option value="0">All Support Vehicles</option>
                            <option value="1">Autmobiles</option>
                            <option value="2">All Trucks and Other Rubber Tire Vehicles</option>
                            <option value="3">All Steel-Wheel Vehicles</option>
                        </select>
                    </label>
                </fieldset>
                <span class="toggle-vr">|</span>
                <fieldset>
                    <label>
                        Select Value Type
                        <select id="viz-1-b" class="toggle-data-selector">
                            <option value="0">Total</option>
                            <option value="1">Percent</option>
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
            <h2 class="indicator-subheader toggle-subheader">Transit Facilities in Deficient Condition</h2>
            <form class="double-toggle-form">
                <fieldset>
                    <label>
                        Select Transit Agency
                        <select id="viz-2" class="toggle-data-selector">
                            <option value="0">All</option>
                            <option value="1">SEPTA</option>
                            <option value="2">NJ Transit</option>
                            <option value="3">PATCO</option>
                            <option value="4">PART</option>
                        </select>
                    </label>
                </fieldset>
                <span class="toggle-vr">|</span>
                <fieldset>
                    <label>
                        Select Value Type
                        <select id="viz-2-b" class="toggle-data-selector">
                            <option value="0">Total</option>
                            <option value="1">Percent</option>
                        </select>
                    </label>
                </fieldset>
            </form>
        </div>
        <div class="data-viz chart3">
            <svg></svg>
        </div>
        <small class="chart-src"><em>Source: Federal Transit Administration's National Transit Database</em></small>               

        <hr class="indicator-content-hr" />       

        <div class="toggle-wrapper">
            <h2 class="indicator-subheader toggle-subheader">Rail Track with Performance Restrictions</h2>
            <form class="double-toggle-form">
                <fieldset>
                    <label>
                        Select Transit Agency
                        <select id="viz-3" class="toggle-data-selector">
                            <option value="0">All</option>
                            <option value="1">SEPTA</option>
                            <option value="2">NJ Transit</option>
                            <option value="3">PATCO</option>
                        </select>
                    </label>
                </fieldset>
                <span class="toggle-vr">|</span>
                <fieldset>
                    <label>
                        Select Value Type
                        <select id="viz-3-b" class="toggle-data-selector">
                            <option value="0">Total</option>
                            <option value="1">Percent</option>
                        </select>
                    </label>
                </fieldset>
            </form>
        </div>
        <div class="data-viz chart4">
            <svg></svg>
        </div>
        <small class="chart-src"><em>Source: Federal Transit Administration's National Transit Database</em></small>               

        <hr class="indicator-content-hr" />       

        <div class="toggle-wrapper">
        <h2 class="indicator-subheader toggle-subheader">Vehicle Revenue Miles Between Failures</h2>
            <form class="double-toggle-form">
                <fieldset>
                    <label>
                        Select Transit Agency
                        <select id="viz-4" class="toggle-data-selector">
                            <option value="0">All</option>
                            <option value="1">SEPTA</option>
                            <option value="2">NJ Transit</option>
                            <option value="3">PATCO</option>
                        </select>
                    </label>
                </fieldset>
            </form>
        </div>

        <div class="data-viz chart5">
            <svg></svg>
        </div>
        <small class="chart-src"><em>Source: Federal Transit Administration's National Transit Database</em></small>               
        `,
  "Transit Ridership": `
       <div class="toggle-wrapper">
            <h2 class="indicator-subheader toggle-subheader">Annual Unlinked Trips by Transit Mode</h2>
            <form>
                <fieldset>
                    <label>
                        Select Value Type
                        <select id="viz-0" class="toggle-data-selector">
                            <option value="0">Total</option>
                            <option value="1">Per Capita</option>
                            <option value="2">Per VRH</option>
                            <option value="3">Per VRM</option>
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
            <h2 class="indicator-subheader toggle-subheader">Annual Unlinked Trips by Transit Agency</h2>
            <form>
                <fieldset>
                    <label>
                        Select Value Type
                        <select id="viz-1" class="toggle-data-selector">
                            <option value="0">Total</option>
                            <option value="1">Per Capita</option>
                            <option value="2">Per VRH</option>
                            <option value="3">Per VRM</option>                       
                        </select>
                    </label>
                </fieldset>
            </form>
        </div>
        <div class="data-viz chart2">
            <svg></svg>
        </div>
        <small class="chart-src"><em>Sources: Federal Transit Administration's National Transit Database, U.S. Census Bureau's Population Estimates Program</em></small>`,
  "Water Quality": `
        <h2 class="indicator-subheader">Waterbodies Attaining Quality Standards for Aquatic Life by Geography</h2>
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
};

export default chartStrings;
