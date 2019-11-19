import { fullGeography } from './commonGeographies.js'

const snippetsRef = {
    'Air Quality': {
        file: 'airQuality.html',
        d3: [
            {
                type: 'line and bar',
                container: 'chart',
                dataSource: ['aq_yearly'],
                context: {
                    labels: ['Days'],
                    keepLabels: true,
                    units: false
                },
                range: [0, 150],
                data: [
                    {
                        'key' : 'Annual',
                        'color': '#f03b20',
                        'columns': ['year', 'daysViolating'],
                        type: 'bar',
                        bar: true
                    },
                    {
                        'key': 'Five-Year Average',
                        'color': '#666',
                        'columns': ['year', 'fiveYearAvg'],
                        type: 'line'
                    }
                ]
            },
            {
                type: 'stacked bar',
                container: 'chart2',
                dataSource: ['aq_quarterly'],
                context: {
                    labels: ['Days'],
                    keepLabels: true,
                    units: false
                },
                columnOptions: [
                    ['unhealthySensitiveOzone', 'unhealthyOzone', 'veryUnhealthyOzone'],
                    ['unhealthySensitivePM', 'unhealthyPM', 'veryUnhealthyPM']
                ],
                newKeys: true,
                range: [0, 50],
                data: [
                    {
                        'key' : 'Unhealthy for Sensitive Groups',
                        'color': '#de425b',
                        'columns': ['quarterYear', 'unhealthySensitiveOzone'],
                    },
                    {
                        'key': 'Unhealthy',
                        'color': '#b62a38',
                        'columns': ['quarterYear', 'unhealthyOzone'],
                    },
                    {
                        'key': 'Very Unhealthy',
                        'color': '#750000',
                        'columns': ['quarterYear', 'veryUnhealthyOzone'],
                    }
                ]
            },
        ],
        text: {
            why: `<p>The U.S. Environmental Protection Agency has developed air quality standards for six "criteria" pollutants. Of these six pollutants, the DVRPC has a history of violating the standards for two of those pollutants - ground-level ozone and fine particulate matter (PM<sub>2.5</sub> ). These pollutants have been shown to impede healthy lung development in children and exacerbate breathing disorders in the general population and especially in the elderly. Additionally, exposure to PM<sub>2.5</sub> can aggravate heart conditions. In addition to higher costs for households and the healthcare system, poor air quality's economic implications include more days of missed work and school.</p><p>Air pollution has been shown to have disproportionate effects on persons of color and low income populations. Recent data shows that in our region people of color are 22 percent more likely to be exposed to cancer and non-cancer causing air pollutants than whites. Relative to whites living above the federal poverty level, whites below poverty level had a 19 percent greater risk of exposure and people of color below poverty level had a 32 percent greater risk.</p>`,
            what: `<p>The DVPRC region currently does not meet federal air quality standards for ground-level ozone and recently did not meet the standards for PM<sub>2.5</sub>.  In order to maintain and improve air quality in the region, the Clean Air Act requires that DVRPC demonstrate that transportation projects included in the Long-range Plan and Transportation Improvement Programs will not worsen air quality or cause future violations of the air quality standards.</p><p>In order to convey the health impacts of air pollution to the general public, the US EPA has created a color-coded scale to identify pollutant levels in simple terms. This scale is referred to as the Air Quality Index (AQI).  AQI levels are directly related to the federal air quality standards and pollutant concentrations in the air. The AQI reports pollutant levels for six different categories based on AQI: Good or green (0 to 50), Moderate or yellow (51 to 100), Unhealthy for Sensitive Groups or orange (101 to 150), Unhealthy or red (151 to 200), Very Unhealthy or purple (201 to 300). <em>Sensitive groups</em> are defined as children, older adults, and those with breathing impairments. When the AQI reaches Code Orange or higher for any of the pollutants, an air quality standard violation has occurred.</p><p>Air quality standards have been revised a number of times since 1997 and the data in these charts is normalized to the current standard.</p><p>The first chart shows the number of days violating air quality standards per year since 2000, along with a five year rolling average, based on the Philadelphia-Camden-Wilmington core based statistical area.</p><p>The second chart shows the number of days per year in each violating category (Unhealthy for Sensitive Populations, Unhealthy, Very Unhealthy, and Hazardous) for both Ozone and PM<sub>2.5</sub>.</p>`,
            how: `<p>The latest air quality data from the Environmental Protection Agency shows the region continuing its reduction of ozone and fine particulate matter (PM<sub>2.5</sub>) pollutants. Days violating National Ambient Air Quality Standards (NAAQS) and the severity of those days have declined steadily over the past fifteen years. 2018 saw 68 fewer days per year violating standards than 2000. As seen in the first chart, from 2014 to 2018, the region has averaged just 22 days that would violate the current air quality standards in each of those historical years. Although air quality is greatly influenced by weather conditions, long-term trends show a dramatic decrease in violating days over the last two decades.</p><p>The second chart below shows that concentrations of both pollutants are decreasing in severity. For ozone, the last Very Unhealthy day occurred in 2007, and for PM<sub>2.5</sub>, it was 2008. Ozone violations are more common than PM<sub>2.5</sub> and great strides have been made to reduce PM<sub>2.5</sub> levels through regulations of power plants and diesel powered engines.</p><p>The dramatic declines in unhealthy air quality days of the past few decades show the impact federal emissions standards have had, along with greater public awareness of pollutants and ways to lessen their impact. However, we might expect future declines to slow some. Higher temperatures will increase the potential for forming ground level ozone and climate change will work counter to the progress the nation has made in improving air quality.</p>`,
            resource: `For more resources on air quality and ways DVRPC is working with its partners to combat it, explore DVRPC's <a href="https://www.airqualitypartnership.org/" target="_blank" rel="external">Air Quality Partnership</a>.</p><p>DVRPC's Municipal Implementation Toolbox suggests the following tools for improving air quality in our region:<ul><li><a href="/Connections2045/MIT/toolpage.html?tool=5bf429e8e7179a56e21377c0">Street Tree Ordinance & Management Plan</a></li><li><a href="/Connections2045/MIT/toolpage.html?tool=5cb77cbffb6fc041ab930149">GHG Reduction Targets And Climate Action Plans</a></li><li><a href="/Connections2045/MIT/toolpage.html?tool=5cb77d3efb6fc041ab930194">Alternative Energy Ordinance</a></li><li><a href="/Connections2045/MIT/toolpage.html?tool=5bf4350be7179a56e2137f2e">Travel Demand Management</a></li></ul></p>`
        }
    },
    'Miles Driven': {
        file: 'milesDriven.html',   
        d3: [
            {
                type: 'line',
                container: 'chart',
                dataSource: ['vmtWeb'],
                context: {
                    labels: ['VMT Per Capita', 'Total VMT (Billions)', 'VMT Per Vehicle'],
                    keepLabels: false,
                    units: ['thousands'],
                    keepUnits: true
                },
                columnOptions: [
                    ['vmtPerCapDVRPC', 'vmtPerCapNJSuburbs', 'vmtPerCapAllPACounties', 'vmtPerCapPASuburbs', 'vmtPerCapBucksCo', 'vmtPerCapChesterCo', 'vmtPerCapDelawareCo', 'vmtPerCapMontgomeryCo', 'vmtPerCapPhillyCo', 'vmtPerCapBurlingtonCo', 'vmtPerCapCamdenCo', 'vmtPerCapGloucesterCo', 'vmtPerCapMercerCo'],
                    ['vmtDVRPC', 'vmtNJSuburbs', 'vmtAllPACounties', 'vmtPASuburbs', 'vmtBucksCo', 'vmtChesterCo', 'vmtDelawareCo', 'vmtMontgomeryCo', 'vmtPhillyCo', 'vmtBurlingtonCo', 'vmtCamdenCo', 'vmtGloucesterCo', 'vmtMercerCo'],
                    ['vmtPerVehicleDVRPC', 'vmtPerVehicleNJSuburbs', 'vmtPerVehicleAllPACounties', 'vmtPerVehiclePASuburbs', 'vmtPerVehicleBucksCo', 'vmtPerVehicleChesterCo', 'vmtPerVehicleDelawareCo', 'vmtPerVehicleMontgomeryCo', 'vmtPerVehiclePhillyCo', 'vmtPerVehicleBurlingtonCo', 'vmtPerVehicleCamdenCo', 'vmtPerVehicleGloucesterCo', 'vmtPerVehicleMercerCo']
                ],
                data: [
                    {
                        'key' : 'DVRPC Region',
                        'columns': ['year', 'vmtPerCapDVRPC']
                    },
                    {
                        'key' : 'NJ Suburbs',
                        'disabled': true,
                        'columns': ['year', 'vmtPerCapNJSuburbs']
                    },
                    {
                        'key': 'All PA Counties',
                        'disabled': true,
                        'columns': ['year', 'vmtPerCapAllPACounties']
                    },
                    {
                        'key' : 'PA Suburbs',
                        'disabled': true,
                        'columns': ['year', 'vmtPerCapPASuburbs']
                    },
                    {
                        'key' : 'Bucks',
                        'disabled': true,
                        'columns': ['year', 'vmtPerCapBucksCo']
                    },
                    {
                        'key' : 'Chester',
                        'disabled': true,
                        'columns': ['year', 'vmtPerCapChesterCo']
                    },
                    {
                        'key' : 'Delaware',
                        'disabled': true,
                        'columns': ['year', 'vmtPerCapDelawareCo']
                    },
                    {
                        'key' : 'Montgomery',
                        'disabled': true,
                        'columns': ['year', 'vmtPerCapMontgomeryCo']
                    },
                    {
                        'key' : 'Philadelphia',
                        'disabled': true,
                        'columns': ['year', 'vmtPerCapPhillyCo']
                    },
                    {
                        'key' : 'Burlington',
                        'disabled': true,
                        'columns': ['year', 'vmtPerCapBurlingtonCo']
                    },
                    {
                        'key' : 'Camden',
                        'disabled': true,
                        'columns': ['year', 'vmtPerCapCamdenCo']
                    },
                    {
                        'key' : 'Gloucester',
                        'disabled': true,
                        'columns': ['year', 'vmtPerCapGloucesterCo']
                    },
                    {
                        'key' : 'Mercer',
                        'disabled': true,
                        'columns': ['year', 'vmtPerCapMercerCo']
                    }
                ]
            }
        ],
        text: {
            why: `<p>Annual miles driven per capita, or vehicle miles traveled (VMT) is an indicator of travel demand on roads. VMT can be used to understand where funds might be allocated for strained roadways. However, decreasing VMT growth is a goal in the Connections 2045 Plan. This is a way to reduce infrastructure investment needs and the negative environmental impacts from transportation These environmental impacts include stormwater runoff from roads; air, water, and noise pollution; greenhouse gas emissions; and habitat fragmentation and barriers to wildlife movement. A negative trend in per capita VMT can indicate a slower economy (i.e. household funds are constrained so fewer discretionary trips are made), a change in travel mode preference (i.e. populations are increasingly opting for more space-efficient and environmentally friendly non-auto travel modes), other travel behavior (more carpooling, combining trips, or working from home), or a downturn in the economy or decline in population.</p>`,
            what: `<p>Annual Miles driven, or VMT, is a distance-based measure of all vehicle travel on roadways (auto, bus, and truck) in a given year. Per capita VMT is the same measure divided by the same area's population for the same year. Per vehicle VMT divides VMT by the number of household vehicles available by residents of that geography in the same year. Geography can be shown for the entire DVRPC region, the Pennsylvania and New Jersey subregions, and each county.</p><p>Normalizing VMT by a county or region's population or by household vehicles is helpful for context, but do not have complete parity with what is measured in VMT estimates. People and vehicles come into the region from other places, just as people and vehicles leave the region to visit other places. VMT per capita compares all miles traveled on the region's roads to the region's population (for all ages) from the Census Bureau's latest population estimates. Vehicle counts for VMT are classified by vehicle types, but not by vehicle ownership. In 2017, statewide estimates for VMT by motorcycles, passenger cars, and two-axle single unit trucks with four wheels made up 88 percent of Pennsylvania's VMT and 95 percent of New Jersey's. These vehicle types are highly likely to be personal vehicles, owned by households, but a slim margin could be fleet vehicles of companies or governments. The remaining VMT is made up of vehicle types like school and commercial buses and trucks with more than two axles, and/or more wheels, so they are highly likely to be commercial vehicles. The VMT per vehicle chart compares all roadway miles traveled to the count of vehicles available to the region's households from the American Community Survey.</p>`,
            how: `<p>Total miles traveled peaked in the region in 2007, with 41.4 billion VMT. Miles traveled declined with the Great Recession, only starting to increase again in 2012 before dipping again slightly in 2013. VMT has been increasing just over 1 percent per year since then, with a slightly higher growth rate in the New Jersey subregion than in the Pennsylvania subregion. When factoring in population growth, 2017 per capita VMT in the region (7,080) remained well below its 2006 peak (7,485). Per capita VMT in 2017 was just 0.6 percent higher than in 2000.</p>`,
            resource: `<p>DVRPC's <a href="/Connections2045/MIT/">Municipal Implementation Toolbox</a> suggests the following tools for localities to help decrease VMT growth:</p><ul><li><a href="/Connections2045/MIT/toolpage.html?tool=5bf42ad8e7179a56e2137827">Transit-Oriented Development (TOD) Zoning</a></li><li><a href="/Connections2045/MIT/toolpage.html?tool=5bf43468e7179a56e2137e9b">Multimodal Transportation Hubs &amp; Connections</a></li><li><a href="/Connections2045/MIT/toolpage.html?tool=5cb77e73fb6fc041ab9303f5">Shared Mobility Regulatory Framework</a></li><li><a href="/Connections2045/MIT/toolpage.html?tool=5bf4350be7179a56e2137f2e">Travel Demand Management</a></li></ul>`
        }
    },
    'Educational Attainment': {
        file: 'educationalAttainment.html',
        d3: [
            {
                type: 'line',
                container: 'chart',
                dataSource: ['edattainHS'],
                context: {
                    labels: ['Percentage Population Age 25 or Older'],
                    units: ['percent']
                },
                data: [
                    {
                        'key': 'DVRPC',
                        'columns': ['year', 'hsRateDVRPC']
                    },
                    {
                        'key': 'NJ Suburbs',
                        'columns': ['year', 'hsRateNJSuburbs']
                    },
                    {
                        'key': 'PA Suburbs',
                        'columns': ['year', 'hsRatePASuburbs']
                    },
                    {
                        'key': 'Core',
                        'columns': ['year', 'hsRateCore']
                    },
                    {
                        'key': 'Developed Communities',
                        'columns': ['year', 'hsRateDeveloped']
                    },
                    {
                        'key': 'Growing Suburb',
                        'columns': ['year', 'hsRateGrowing']
                    },
                    {
                        'key': 'Rural Areas',
                        'columns': ['year', 'hsRateRural']
                    },
                    {
                        'key': 'Bucks',
                        'columns': ['year', 'hsRateBucksCo']
                    },
                    {
                        'key': 'Burlington',
                        'columns': ['year', 'hsRateBurlingtonCo']
                    },
                    {
                        'key': 'Camden',
                        'columns': ['year', 'hsRateCamdenCo']
                    },
                    {
                        'key': 'Chester',
                        'columns': ['year', 'hsRateChesterCo']
                    },
                    {
                        'key': 'Delaware',
                        'columns': ['year', 'hsRateDelawareCo']
                    },
                    {
                        'key': 'Gloucester',
                        'columns': ['year', 'hsRateGloucesterCo']
                    },
                    {
                        'key': 'Mercer',
                        'columns': ['year', 'hsRateMercerCo']
                    },
                    {
                        'key': 'Montgomery',
                        'columns': ['year', 'hsRateMontgomeryCo']
                    },
                    {
                        'key': 'Philadelphia',
                        'columns': ['year', 'hsRatePhiladelphiaCo']
                    }
                ]
            },
            {
                type: 'stacked bar',
                container: 'chart2',
                dataSource: ['edattainComprehensive'],
                context: {
                    labels: ['Population Age 25 or Older'],
                    keepLabels: true,
                    units: ['thousands'],
                    keepUnits: true
                },
                columnOptions: [
                    ['DVRPC-Less than High School', 'DVRPC-Some High School', 'DVRPC-Graduated High School', 'DVRPC-Some College', 'DVRPC-Associates Degree', 'DVRPC-Bachelors Degree', 'DVRPC-Graduate/Professional Degree'],
                    ['Philadelphia Subregion-Less than High School', 'Philadelphia Subregion-Some High School', 'Philadelphia Subregion-Graduated High School', 'Philadelphia Subregion-Some College', 'Philadelphia Subregion-Associates Degree', 'Philadelphia Subregion-Bachelors Degree', 'Philadelphia Subregion-Graduate/Professional Degree'],
                    ['New Jersey Suburbs-Less than High School', 'New Jersey Suburbs-Some High School', 'New Jersey Suburbs-Graduated High School', 'New Jersey Suburbs-Some College', 'New Jersey Suburbs-Associates Degree', 'New Jersey Suburbs-Bachelors Degree', 'New Jersey Suburbs-Graduate/Professional Degree'],
                    ['Pennsylvania Suburbs-Less than High School', 'Pennsylvania Suburbs-Some High School', 'Pennsylvania Suburbs-Graduated High School', 'Pennsylvania Suburbs-Some College', 'Pennsylvania Suburbs-Associates Degree', 'Pennsylvania Suburbs-Bachelors Degree', 'Pennsylvania Suburbs-Graduate/Professional Degree'],
                    ['Core City-Less than High School', 'Core City-Some High School', 'Core City-Graduated High School', 'Core City-Some College', 'Core City-Associates Degree', 'Core City-Bachelors Degree', 'Core City-Graduate/Professional Degree'],
                    ['Developed Community-Less than High School', 'Developed Community-Some High School', 'Developed Community-Graduated High School', 'Developed Community-Some College', 'Developed Community-Associates Degree', 'Developed Community-Bachelors Degree', 'Developed Community-Graduate/Professional Degree'],
                    ['Growing Suburb-Less than High School', 'Growing Suburb-Some High School', 'Growing Suburb-Graduated High School', 'Growing Suburb-Some College', 'Growing Suburb-Associates Degree', 'Growing Suburb-Bachelors Degree', 'Growing Suburb-Graduate/Professional Degree'],
                    ['Rural Area-Less than High School', 'Rural Area-Some High School', 'Rural Area-Graduated High School', 'Rural Area-Some College', 'Rural Area-Associates Degree', 'Rural Area-Bachelors Degree', 'Rural Area-Graduate/Professional Degree'],
                    ['Bucks-Less than High School', 'Bucks-Some High School', 'Bucks-Graduated High School', 'Bucks-Some College', 'Bucks-Associates Degree', 'Bucks-Bachelors Degree', 'Bucks-Graduate/Professional Degree'],
                    ['Burlington-Less than High School', 'Burlington-Some High School', 'Burlington-Graduated High School', 'Burlington-Some College', 'Burlington-Associates Degree', 'Burlington-Bachelors Degree', 'Burlington-Graduate/Professional Degree'],
                    ['Camden-Less than High School', 'Camden-Some High School', 'Camden-Graduated High School', 'Camden-Some College', 'Camden-Associates Degree', 'Camden-Bachelors Degree', 'Camden-Graduate/Professional Degree'],
                    ['Chester-Less than High School', 'Chester-Some High School', 'Chester-Graduated High School', 'Chester-Some College', 'Chester-Associates Degree', 'Chester-Bachelors Degree', 'Chester-Graduate/Professional Degree'],
                    ['Delaware-Less than High School', 'Delaware-Some High School', 'Delaware-Graduated High School', 'Delaware-Some College', 'Delaware-Associates Degree', 'Delaware-Bachelors Degree', 'Delaware-Graduate/Professional Degree'],
                    ['Gloucester-Less than High School', 'Gloucester-Some High School', 'Gloucester-Graduated High School', 'Gloucester-Some College', 'Gloucester-Associates Degree', 'Gloucester-Bachelors Degree', 'Gloucester-Graduate/Professional Degree'],
                    ['Mercer-Less than High School', 'Mercer-Some High School', 'Mercer-Graduated High School', 'Mercer-Some College', 'Mercer-Associates Degree', 'Mercer-Bachelors Degree', 'Mercer-Graduate/Professional Degree'],
                    ['Montgomery-Less than High School', 'Montgomery-Some High School', 'Montgomery-Graduated High School', 'Montgomery-Some College', 'Montgomery-Associates Degree', 'Montgomery-Bachelors Degree', 'Montgomery-Graduate/Professional Degree']
                ],
                data: [
                    {
                        'key': 'Less than High School',
                        'columns': ['year', 'DVRPC-Less than High School']
                    },
                    {
                        'key': 'Some High School',
                        'columns': ['year', 'DVRPC-Some High School']
                    },
                    {
                        'key': 'Graduated High School',
                        'columns': ['year', 'DVRPC-Graduated High School']
                    },
                    {
                        'key': 'Some College',
                        'columns': ['year', 'DVRPC-Some College']
                    },
                    {
                        'key': "Associate's Degree",
                        'columns': ['year', 'DVRPC-Associates Degree']
                    },
                    {
                        'key': "Bachelor's Degree",
                        'columns': ['year', 'DVRPC-Bachelors Degree']
                    },
                    {
                        'key': 'Graduate/Professional Degree',
                        'columns': ['year', 'DVRPC-Graduate/Professional Degree']
                    }
                ]
            }
        ],
        text: {
            why: `<p>Over the last several decades, Greater Philadelphia economy has shifted away from manufacturing and toward knowledge-based and digital industries such as life sciences, professional services, and chemicals. These industries and others require an educated workforce to unlock future growth and higher wages. Closing regional gaps in educational attainment is also an important factor in achieving equity goals such as reducing economic disparities. Discrepancies in educational attainment may be reinforced by inequities in educational funding and the lack of access to support services in many low-income communities.</p>`,
            what: `<p>As part of the American Community Survey, the U.S. Census Bureau collects information regarding respondents' educational attainment. Educational attainment refers to the highest level of education that all individuals over the age of 24 have completed. Response categories include no schooling completed; nursery school, grades 1 through 11; 12th grade but no diploma; regular high school diploma; GED or alternative credential; some college credit, but less than 1 year of college; 1 or more years of college credit, no degree; associate's degree, bachelor's degree, master's degree, professional degree beyond bachelor's degree; and doctorate degree.</p><p>The charts below detail educational attainment of the DVRPC's residents 25 years old or older, broken down by county and Connections 2045 planning area. The first graph shows the percentage of the population that has completed high school or the equivalent. The second graph shows the percentage of the population that falls into various categories of educational attainment. Toggle between various geographies to see how educational attainment varies across the region.</p><p>Note, that due to survey sample size, the values are estimates—each with a margin of error. Estimates may show a general trend, but may not be statistically significant when compared to each other if change is slight—particularly in lower population geographies.</p>`,
            how: `<p>Since 2000, the percentage of the region's residents (25 or more years old) that have completed high school has risen from 82.2 percent to 90.8 percent in 2017, or 8.6 percent. When considering educational attainment by planning area, however, it is clear that the region's greatest challenge lies in resolving the disparity between educational levels attained in the region's urban core versus suburban areas. Although the high school completion rate has risen to 82.1 percent in core cities based on 2013-2017 5-year estimates, this significantly lags behind the 92.6 percent and 94.6 percent rates in developed communities and growing suburbs, respectively.</p><p>The number of residents in the region with a bachelor's degree or higher has also continued to grow. In 2000, 1,004,492 residents had at least a bachelor's degree. In 2017, that number has risen to 1,534,054, an increase of 53%.</p>`,
            resource: `<p>DVRPC's <a href="/Connections2045/MIT/">Municipal Implementation Toolbox</a> suggests the following tools for improving educational outcomes, attainment, and investing in our local workforce.</p><ul><li><a href="/Connections2045/MIT/toolpage.html?tool=5bf43443e7179a56e2137e76">Inclusionary Housing</a></li><li><a href="/Connections2045/MIT/toolpage.html?tool=5bf42f68e7179a56e2137b5f">Broadband (Universal Access)</a></li><li><a href="/Connections2045/MIT/toolpage.html?tool=5cb77a80fb6fc041ab930040">Human Capital Investments</a></li><li><a href="/Connections2045/MIT/toolpage.html?tool=5bf43435e7179a56e2137e73">Universal Pre-Kindergarten Programs</a></li></ul>`
        }
    },
    'Roadway Safety': {
        file: 'roadwaySafety.html',
        d3: [
            {
                type: 'stacked bar plus line',
                container: 'chart',
                dataSource: ['crashesWeb'],
                context: {
                    labels: false,
                    units: false
                },
                columnOptions: [
                    ['ksi5yrAvgDVRPC', 'ksiMotorVehicleDVRPC', 'ksiBikePedDVRPC'],
                    ['ksi5yrAvgPASubregion', 'ksiMotorVehiclePASubregion', 'ksiBikePedPASubregion'],
                    ['ksi5yrAvgNJSubregion', 'ksiMotorVehicleNJSubregion', 'ksiBikePedNJSubregion'],
                    ['ksi5yrAvgPASubregion', 'ksiMotorVehiclePASubregion', 'ksiBikePedPASubregion'],
                    ['ksi5yrAvgBucksCo', 'ksiMotorVehicleBucksCo', 'ksiBikePedBucksCo'],
                    ['ksi5yrAvgChesterCo', 'ksiMotorVehicleChesterCo', 'ksiBikePedChesterCo'],
                    ['ksi5yrAvgDelawareCo', 'ksiMotorVehicleDelawareCo', 'ksiBikePedDelawareCo'],
                    ['ksi5yrAvgMontgomeryCo', 'ksiMotorVehicleMontgomeryCo', 'ksiBikePedMontgomeryCo'],
                    ['ksi5yrAvgBurlingtonCo', 'ksiMotorVehicleBurlingtonCo', 'ksiBikePedBurlingtonCo'],
                    ['ksi5yrAvgCamdenCo', 'ksiMotorVehicleCamdenCo', 'ksiBikePedCamdenCo'],
                    ['ksi5yrAvgGloucesterCo', 'ksiMotorVehicleGloucesterCo', 'ksiBikePedGloucesterCo'],
                    ['ksi5yrAvgMercerCo', 'ksiMotorVehicleMercerCo', 'ksiBikePedMercerCo']
                ],
                data: [
                    {
                        'key': '5 year avg',
                        'type': 'line',
                        'yAxis': 1,
                        'columns': ['year', 'ksi5yrAvgDVRPC']
                    },
                    {
                        'key': 'Motor Vehicle',
                        'type': 'bar',
                        'yAxis': 2,
                        'columns': ['year', 'ksiMotorVehicleDVRPC']
                    },
                    {
                        'key': 'Bike + Ped',
                        'type': 'bar',
                        'yAxis': 2,
                        'columns': ['year', 'ksiBikePedDVRPC']
                    }
                ]
            },
            {
                type: 'stacked bar plus line',
                container: 'chart2',
                dataSource: ['crashesWeb'],
                yAxisUnits: 'singles',
                context: {
                    labels: false,
                    units: ['thousands'],
                    keepUnits: true
                },
                columnOptions: [
                    ['ksiPerCap5yrAvgDVRPC', 'ksiMotorVehiclePerCapDVRPC', 'ksiBikePedPerCapDVRPC'],
                    ['ksiPerCap5yrAvgPhillySubregion', 'ksiMotorVehiclePerCapPhillySubregion', 'ksiBikePedPerCapPhillySubregion'],
                    ['ksiPerCap5yrAvgNJSubregion', 'ksiMotorVehiclePerCapNJSubregion', 'ksiBikePedPerCapNJSubregion'],
                    ['ksiPerCap5yrAvgPASubregion', 'ksiMotorVehiclePerCapPASubregion', 'ksiBikePedPerCapPASubregion'],
                    ['ksiPerCap5yrAvgBucksCo', 'ksiMotorVehiclePerCapBucksCo', 'ksiBikePedPerCapBucksCo'],
                    ['ksiPerCap5yrAvgChesterCo', 'ksiMotorVehiclePerCapChesterCo', 'ksiBikePedPerCapChesterCo'],
                    ['ksiPerCap5yrAvgDelawareCo', 'ksiMotorVehiclePerCapDelawareCo', 'ksiBikePedPerCapDelawareCo'],
                    ['ksiPerCap5yrAvgMontgomeryCo', 'ksiMotorVehiclePerCapMontgomeryCo', 'ksiBikePedPerCapMontgomeryCo'],
                    ['ksiPerCap5yrAvgBurlingtonCo', 'ksiMotorVehiclePerCapBurlingtonCo', 'ksiBikePedPerCapBurlingtonCo'],
                    ['ksiPerCap5yrAvgCamdenCo', 'ksiMotorVehiclePerCapCamdenCo', 'ksiBikePedPerCapCamdenCo'],
                    ['ksiPerCap5yrAvgGloucesterCo', 'ksiMotorVehiclePerCapGloucesterCo', 'ksiBikePedPerCapGloucesterCo'],
                    ['ksiPerCap5yrAvgMercerCo', 'ksiMotorVehiclePerCapMercerCo', 'ksiBikePedPerCapMercerCo']
                ],
                data: [
                    {
                        'key': '5 year avg',
                        'type': 'line',
                        'yAxis': 1,
                        'columns': ['year', 'ksiPerCap5yrAvgDVRPC']
                    },
                    {
                        'key': 'Motor Vehicle',
                        'type': 'bar',
                        'yAxis': 2,
                        'columns': ['year', 'ksiMotorVehiclePerCapDVRPC']
                    },
                    {
                        'key': 'Bike + Ped',
                        'type': 'bar',
                        'yAxis': 2,
                        'columns': ['year', 'ksiBikePedPerCapDVRPC']
                    }
                ]
            },
            {
                type: 'line and bar',
                container: 'chart3',
                dataSource: ['crashesWeb'],
                context: {
                    labels: false,
                    units: false
                },
                columnOptions: [
                    ['ksiPerVMT5yrAvgDVRPC', 'ksiPerVMTDVRPC'],
                    ['ksiPerVMT5yrAvgPhillySubregion', 'ksiPerVMTPhillySubregion'],
                    ['ksiPerVMT5yrAvgNJSubregion', 'ksiPerVMTNJSubregion'],
                    ['ksiPerVMT5yrAvgPASubregion', 'ksiPerVMTPASubregion'],
                    ['ksiPerVMT5yrAvgBucksCo', 'ksiPerVMTBucksCo'],
                    ['ksiPerVMT5yrAvgChesterCo', 'ksiPerVMTChesterCo'],
                    ['ksiPerVMT5yrAvgDelawareCo', 'ksiPerVMTDelawareCo'],
                    ['ksiPerVMT5yrAvgMontgomeryCo', 'ksiPerVMTMontgomeryCo'],
                    ['ksiPerVMT5yrAvgBurlingtonCo', 'ksiPerVMTBurlingtonCo'],
                    ['ksiPerVMT5yrAvgCamdenCo', 'ksiPerVMTCamdenCo'],
                    ['ksiPerVMT5yrAvgGloucesterCo', 'ksiPerVMTGloucesterCo'],
                    ['ksiPerVMT5yrAvgMercerCo', 'ksiPerVMTMercerCo']
                ],
                data: [
                    {
                        'key': 'Total KSI',
                        'columns': ['year', 'ksiPerVMTDVRPC'],
                        type: 'bar',
                        bar: true
                    },
                    {
                        'key': '5 year avg',
                        'columns': ['year', 'ksiPerVMT5yrAvgDVRPC'],
                        type: 'line'
                    }
                ]
            }
        ],
        text: {
            why: ``,
            what: ``,
            how: ``,
            resource: ``
        }
    },
    'Global Connectivity': {
        file: 'globalConnectivity.html',
        d3: [
            {
                type: 'stacked bar',
                container: 'chart',
                dataSource: ['PHL_IntlDest'],
                context: {
                    labels: ['Flights'],
                    keepLabels: true,
                    units: false
                },
                columnOptions: [
                    ['Middle Eastern', 'Mexican', 'Canadian', 'Caribbean', 'European'],
                    ['Middle Eastern (yr)', 'Mexican (yr)', 'Canadian (yr)', 'Canadian (seasonal)', 'Caribbean (yr)', 'Caribbean (seasonal)', 'European (yr)', 'European (seasonal)']
                ],
                newKeys: true,
                data: [
                    {
                        'key': 'Middle Eastern',
                        columns: ['year', 'Middle Eastern']
                    },
                    {
                        'key': 'Mexican',
                        columns: ['year', 'Mexican']
                    },
                    {
                        'key': 'Canadian',
                        columns: ['year', 'Canadian']
                    },
                    {
                        'key': 'Caribbean',
                        columns: ['year', 'Caribbean']
                    },
                    {
                        'key': 'European',
                        columns: ['year', 'European']
                    }
                ]
            }
        ],
        text: {
            why: `<p>International flight offerings from Philadelphia International Airport (PHL) indicate how connected our region is to the rest of the world through commerce and leisure activities. Each day, flights from international destinations bring global business travelers to meetings that maintain and expand business opportunities in our region, along with visitors that boost the region's travel and tourism industry. The growth of direct flights to and from international destinations connects more markets to the region, and the region's market to the globe.</p>`,
            what: `<p>The number of PHL direct flight destinations are available for each year since 2009. The chart can toggle between displaying all flights by general geographic region to distinguishing between which flights are seasonal and which are year-round.</p>`,
            how: `<p>In 2019, the number of direct international destinations from PHL has rebounded back to 2009 levels (40 destinations). The drop in destinations after 2009 was most likely affected by the Great Recession which caused many companies and families to curtail international travel and the airline industry responded by reducing destinations. In 2011 destinations were down to 34 but picked up to 38 by 2014 with an increased number of flights to the Caribbean. Still destinations dropped further in subsequent years to 33 in 2017, but increased by one in 2018 and then by six in 2019.</p><p>This fluctuation in international destinations is not uncommon for the airline industry as airlines add and remove flights to accommodate their entire national and international network. Following the American Airlines and US Airways merger in 2013, one might have expected a greater drop in international destinations as PHLs future position as an American Airlines hub came into question. Instead, over the following years there was a shift as American chose to keep more of their European capital destinations with connectivity out of New York, but has grown their connections to second-tier cities from PHL. In 2018 American added flights to Budapest, Prague, Zurich and in 2019 flights to Halifax, Dubrovnik, Bologna, and Berlin.</p><p>Europe remains the top flight destination, with 23 destinations in 2019. The Carribean (10), Canada (4), Mexico (2) and the Middle East (1) make up less than half the 2019 destinations. Year-round destinations made up 65% of total flights in 2009. They peaked in 2014 at 74% but have since dropped to just 50% in 2019.</p><p>While total destinations have rebounded, the number of seasonal flights may point to a stronger focus on leisure travel from PHL relative to business travel. Without a diversity of consistent, year-round destinations, it is harder for businesses in the region to connect to international markets and for businesses abroad to connect with us.</p>`,
            resource: `
                <p>DVRPC's <a href="/Connections2045/MIT/">Municipal Implementation Toolbox</a> (MIT) suggests the following tools to attract, retain, and grow business opportunities in the region for those with global connections:</p>
                <ul>
                    <li><a href="/Connections2045/MIT/toolpage.html?tool=5bf42edbe7179a56e2137b04">Economic Development Task Force</a></li>
                    <li><a href="/Connections2045/MIT/toolpage.html?tool=5cb77a06fb6fc041ab92ffe3">Business Incubators</a></li>
                    <li><a href="/Connections2045/MIT/toolpage.html?tool=5bf42f68e7179a56e2137b5f">Broadband (Universal Access) Multi-Municipal Comprehensive Plans</a></li>
                    <li><a href="/Connections2045/MIT/toolpage.html?tool=5cb7796efb6fc041ab92fe9b">Streamlined Permitting Processes</a></li>
                    <li><a href="/Connections2045/MIT/toolpage.html?tool=5c92fe3de7179a0e408a2332">Multi-municipal Comprehensive Plan</a></li>
                </ul>
                <p>The MIT suggests the following tools to augment the attractiveness of regional destinations and ways foreign travelers and others can access them:</p>
                <ul>
                    <li><a href="/Connections2045/MIT/toolpage.html?tool=5cb8d9c7e7179a264cf2c447">Tourism Improvement District (TID)</a></li>
                    <li><a href="/Connections2045/MIT/toolpage.html?tool=5bf43468e7179a56e2137e9b">Multi-Modal Transportation Hubs and Connections</a></li>
                </ul>
                <p>Successfully implemented economic development strategies and others found in DVRPC's <a href="/Economic/CEDS/">Comprehensive Economic Development Strategy (CEDS)</a> may help make the case for increasing international connections at our airport hub.</p>
            `
        }
    },
    'Housing Activity': {
        file: 'housingActivity.html',
        d3: [
            {
                type: 'line',
                container: 'chart',
                dataSource: ['permits_graph_1'],
                context: {
                    labels: ['Percentage'],
                    keepLabels: true,
                    units: ['percent'],
                    keepUnits: true
                },
                columnOptions: [
                    ['ratio_annual'],
                    ['ratio_cumulative']
                ],
                data: [
                    {
                        'key': 'DVRPC Region',
                        columns: ['year', 'ratio_annual']
                    }
                ]
            },
            {
                type: 'stacked bar',
                container: 'chart2',
                dataSource: ['permits_graph_2A','permits_graph_2B'],
                context: {
                    labels: ['Permits Issued'],
                    keepLabels: true,
                    units: ['thousands'],
                    keepUnits: true
                },
                columnOptions: [
                    ['DVRPC- Core City', 'DVRPC- Developed Community', 'DVRPC- Growing Suburb', 'DVRPC- Rural Area'],
                    ['Chester County- Core City', 'Chester County- Developed Community', 'Chester County- Growing Suburb', 'Chester County- Rural Area'],
                    ['Delaware County- Core City', 'Delaware County- Developed Community', 'Delaware County- Growing Suburb', 'Delaware County- Rural Area'],
                    ['Montgomery County- Core City', 'Montgomery County- Developed Community', 'Montgomery County- Growing Suburb', 'Montgomery County- Rural Area'],
                    ['Burlington County- Core City', 'Burlington County- Developed Community', 'Burlington County- Growing Suburb', 'Burlington County- Rural Area'],
                    ['Camden County- Core City', 'Camden County- Developed Community', 'Camden County- Growing Suburb', 'Camden County- Rural Area'],
                    ['Gloucester County- Core City', 'Gloucester County- Developed Community', 'Gloucester County- Growing Suburb', 'Gloucester County- Rural Area'],
                    ['Mercer County- Core City', 'Mercer County- Developed Community', 'Mercer County- Growing Suburb', 'Mercer County- Rural Area'],
                    ['Bucks County- Core City', 'Bucks County- Developed Community', 'Bucks County- Growing Suburb', 'Bucks County- Rural Area'],
                    ['Philadelphia County- Core City', 'Philadelphia County- Developed Community', 'Philadelphia County- Growing Suburb', 'Philadelphia County- Rural Area']
                ],
                data: [
                    {
                        'key': 'Core City',
                        columns: ['year', 'DVRPC- Core City']
                    },
                    {
                        'key': 'Developed Suburb',
                        columns: ['year', 'DVRPC- Developed Community']
                    },
                    {
                        'key': 'Growing Suburb',
                        columns: ['year', 'DVRPC- Growing Suburb']
                    },
                    {
                        'key': 'Rural Area',
                        columns: ['year', 'DVRPC- Rural Area']
                    }
                ]
            },
            {
                type: 'stacked bar',
                container: 'chart3',
                dataSource: ['permits_graph_3A','permits_graph_3B'],
                context: {
                    labels: ['Permits Issued'],
                    keepLabels: true,
                    units: ['thousands'],
                    keepUnits: true
                },
                columnOptions: [
                    ['DVRPC- large multi-family', 'DVRPC- small multi-family', 'DVRPC- single family'],
                    ['Core City- large multi-family', 'Core City- small multi-family', 'Core City- single family'],
                    ['Developed Community- large multi-family', 'Developed Community- small multi-family', 'Developed Community- single family'],
                    ['Growing Suburb- large multi-family', 'Growing Suburb- small multi-family', 'Growing Suburb- single family'],
                    ['Rural Area- large multi-family', 'Rural Area- small multi-family', 'Rural Area- single family'],
                    ['Chester County- large multi-family', 'Chester County- small multi-family', 'Chester County- single family'],
                    ['Delaware County- large multi-family', 'Delaware County- small multi-family', 'Delaware County- single family'],
                    ['Montgomery County- large multi-family', 'Montgomery County- small multi-family', 'Montgomery County- single family'],
                    ['Burlington County- large multi-family', 'Burlington County- small multi-family', 'Burlington County- single family'],
                    ['Camden County- large multi-family', 'Camden County- small multi-family', 'Camden County- single family'],
                    ['Gloucester County- large multi-family', 'Gloucester County- small multi-family', 'Gloucester County- single family'],
                    ['Mercer County- large multi-family', 'Mercer County- small multi-family', 'Mercer County- single family'],
                    ['Bucks County- large multi-family', 'Bucks County- small multi-family', 'Bucks County- single family'],
                    ['Philadelphia County- large multi-family', 'Philadelphia County- small multi-family', 'Philadelphia County- single family'],
                    ['New Jersey Suburbs- large multi-family', 'New Jersey Suburbs- small multi-family', 'New Jersey Suburbs- single family'],
                    ['Pennsylvania Suburbs- large multi-family', 'Pennsylvania Suburbs- small multi-family', 'Pennsylvania Suburbs- single family'],
                    ['Philadelphia Subregion- large multi-family', 'Philadelphia Subregion- small multi-family', 'Philadelphia Subregion- single family']
                ],
                data: [
                    {
                        'key': 'Large Multifamily',
                        columns: ['year', 'DVRPC- large multi-family']
                    },
                    {
                        'key': 'Small Multifamily',
                        columns: ['year', 'DVRPC- small multi-family']
                    },
                    {
                        'key': 'Single-Family',
                        columns: ['year', 'DVRPC- single family']
                    }
                ]
            }
        ],
        text: {
            why: `<p>Residential construction activity can indicate the health of the region's real estate sector and general desirability, and where that construction occurs can also indicate if we are growing in a sustainable manner. The long-range plan seeks growth in appropriate areas for development—where transportation and utility infrastructure can support new development and won't come at the expense of natural habitats and resources.</p>`,
            what: `<p>Residential construction activity data is derived from current reports and publications compiled by the U.S. Census Bureau's Residential Construction Statistics Division. Municipalities provide the Census Bureau with tabulations of the number of housing units authorized, according to types of structures. In the few cases where municipalities reported building permit activity for some months but not for all 12 months, the Census Bureau estimates the total yearly number of building permits based on past building permit activity.</p><p>The first chart looks at whether residential development activity is happening in desired areas. "Desired areas" is defined using DVRPC's planning areas: Core City, Developed Suburb, Growing Suburb, and Rural Areas. Municipalities classified as Core City or Developed Suburb is what is considered "desired." The chart shows the trendline for percentage of building permits approved since 1980 in these desired areas.</p><p>The second chart shows the count of all permits approved by all four planning areas.</p><p>The third chart presents units authorized by structure category. The following are definitions of categories used:</p><ul><li>Single-Family are single-unit structures, including attached, detached and semi-detached, and row houses, provided the units are separated by a ground-to-roof party wall. Mobile homes are not included.</li><li>Small Multifamily structures are those containing two to four units, including duplexes and triplexes.</li><li>Large Multifamily structures are those with five or more units. Garden apartments, and high-rise buildings are included in this category, as well as condominiums and cooperatively owned apartment buildings.</li></ul><p>All three charts allow you to view these data both annually and cumulatively.</p>`,
            how: `<p>Since 2012 the annual percentage of residential building permits being approved in preferred growth areas of the region (those in Core City or Developed Suburbs planning areas) has risen back to over 60 percent of approvals—levels not seen since the early 1980s. This figure peaked at 69.3 percent in 2014, but has subsequently remained high with 63.5 percent of units approved in 2018. The late 1990s and early 2000s saw the lowest level of approvals in these smart growth areas, as units built drifted to municipalities categorized as Growing Suburbs and Rural Areas. From 1999's low 2018 had gained 29.8 percent. Historic development patterns brought the cumulative units approved since 1980 in preferred growth areas down below 50 percent by 1996. With a cumulative value of 49.4 percent in 2018, the region is set to flip the approvals since 1980 back to a majority in areas more sustainable for growth. When selecting only single planning areas in chart 2, it's clear that the recent uptick in housing activity in desired areas is largely driven by Core City municipalities—almost entirely from City of Philadelphia growth.</p><p>Total permits approved are seen in charts 2 and 3. The peak year for approving units in the region came in 1986 with close to 30,000 units approved. The most recent recession brought approvals to 20 percent of those peak levels in 2009 with 6,182 approved that year. 2018 had 12,075 units approved showing approvals have doubled since the slowest years, but housing activity is clearly not what it once was in the region.</p><p>Chart 3 shows a waning interest in single-family development which dominated small and large multifamily development structures until more recent years. 2018 saw nearly identical single-family (5,561) and large multifamily (5,562) approvals and an additional 952 small multifamily units. But the cumulative effects of decades of single-family preference means that more than 75 percent of units approved from 1980 to 2018 were single-family.</p>`,
            resource: `
            <p>See what DVRPC is doing in the area of livable community building on its <a href="/SmartGrowth/">Smart Growth page</a>.</p>
            <p>DVRPC's <a href="/Connections2045/MIT/">Municipal Implementation Toolbox</a> suggests the following tools for improving the trendline for smarter residential growth in the region:</p>
            <ul>
            <li><a href="/Connections2045/MIT/toolpage.html?tool=5bf42ad8e7179a56e2137827">Transit Oriented Development (TOD) Zoning</a></li>
            <li><a href="/Connections2045/MIT/toolpage.html?tool=5c929a05e7179a0e4089fae5">Revitalization Planning &amp; Programs</a></li>
            <li><a href="/Connections2045/MIT/toolpage.html?tool=5c929acde7179a0e4089fb5d">Brownfields Redevelopment</a></li>
            <li><a href="/Connections2045/MIT/toolpage.html?tool=5bf42b77e7179a56e2137867">Build Missing Middle Housing</a></li>
            <li><a href="/Connections2045/MIT/toolpage.html?tool=5c929ecee7179a0e4089fdad">Live/Work Zoning</a></li>
            <li><a href="/Connections2045/MIT/toolpage.html?tool=5cb7796efb6fc041ab92fe9b">Streamlined Permitting Processes</a></li>
            </ul>
            `
        }
    },
    'Housing Affordability': {
        file: 'housingAffordability.html',
        d3: [
            {
                type: 'line',
                container: 'chart',
                dataSource: ['housing_afford_graph_1'],
                data: fullGeography,
                context: {
                    labels: ['Percent of Households'],
                    keepLabels: true,
                    units: ['percent'],
                    keepUnits: true
                },
                yAxisUnits: 'percent'
            },
            {
                type: 'stacked bar',
                container: 'chart2',
                dataSource: ['housing_afford_graph_2'],
                context: {
                    labels: ['Households (Thousands)'],
                    keepLabels: true,
                    units: ['thousands']
                },
                columnOptions: [
                    ['DVRPC- Below 35%- Own', 'DVRPC- Below 35%- Rent', 'DVRPC- Above 35%- Rent', 'DVRPC- Above 35%- Own','DVRPC- Not Computed- Own', 'DVRPC- Not Computed- Rent'],
                    ['Pennsylvania Suburbs- Below 35%- Own', 'Pennsylvania Suburbs- Below 35%- Rent', 'Pennsylvania Suburbs- Above 35%- Rent', 'Pennsylvania Suburbs- Above 35%- Own','Pennsylvania Suburbs- Not Computed- Own', 'Pennsylvania Suburbs- Not Computed- Rent'],
                    ['New Jersey Suburbs- Below 35%- Own', 'New Jersey Suburbs- Below 35%- Rent', 'New Jersey Suburbs- Above 35%- Rent', 'New Jersey Suburbs- Above 35%- Own','New Jersey Suburbs- Not Computed- Own', 'New Jersey Suburbs- Not Computed- Rent'],
                    ['Philadelphia Subregion- Below 35%- Own', 'Philadelphia Subregion- Below 35%- Rent', 'Philadelphia Subregion- Above 35%- Rent', 'Philadelphia Subregion- Above 35%- Own','Philadelphia Subregion- Not Computed- Own', 'Philadelphia Subregion- Not Computed- Rent'],
                    ['Core City- Below 35%- Own', 'Core City- Below 35%- Rent', 'Core City- Above 35%- Rent', 'Core City- Above 35%- Own','Core City- Not Computed- Own', 'Core City- Not Computed- Rent'],
                    ['Developed Community- Below 35%- Own', 'Developed Community- Below 35%- Rent', 'Developed Community- Above 35%- Rent', 'Developed Community- Above 35%- Own','Developed Community- Not Computed- Own', 'Developed Community- Not Computed- Rent'],
                    ['Growing Suburb- Below 35%- Own', 'Growing Suburb- Below 35%- Rent', 'Growing Suburb- Above 35%- Rent', 'Growing Suburb- Above 35%- Own','Growing Suburb- Not Computed- Own', 'Growing Suburb- Not Computed- Rent'],
                    ['Rural Area- Below 35%- Own', 'Rural Area- Below 35%- Rent', 'Rural Area- Above 35%- Rent', 'Rural Area- Above 35%- Own','Rural Area- Not Computed- Own', 'Rural Area- Not Computed- Rent'],
                    ['Bucks County- Below 35%- Own', 'Bucks County- Below 35%- Rent', 'Bucks County- Above 35%- Rent', 'Bucks County- Above 35%- Own','Bucks County- Not Computed- Own', 'Bucks County- Not Computed- Rent'],
                    ['Chester County- Below 35%- Own', 'Chester County- Below 35%- Rent', 'Chester County- Above 35%- Rent', 'Chester County- Above 35%- Own','Chester County- Not Computed- Own', 'Chester County- Not Computed- Rent'],
                    ['Delaware County- Below 35%- Own', 'Delaware County- Below 35%- Rent', 'Delaware County- Above 35%- Rent', 'Delaware County- Above 35%- Own','Delaware County- Not Computed- Own', 'Delaware County- Not Computed- Rent'],
                    ['Montgomery County- Below 35%- Own', 'Montgomery County- Below 35%- Rent', 'Montgomery County- Above 35%- Rent', 'Montgomery County- Above 35%- Own','Montgomery County- Not Computed- Own', 'Montgomery County- Not Computed- Rent'],
                    ['Philadelphia County- Below 35%- Own', 'Philadelphia County- Below 35%- Rent', 'Philadelphia County- Above 35%- Rent', 'Philadelphia County- Above 35%- Own','Philadelphia County- Not Computed- Own', 'Philadelphia County- Not Computed- Rent'],
                    ['Burlington County- Below 35%- Own', 'Burlington County- Below 35%- Rent', 'Burlington County- Above 35%- Rent', 'Burlington County- Above 35%- Own','Burlington County- Not Computed- Own', 'Burlington County- Not Computed- Rent'],
                    ['Camden County- Below 35%- Own', 'Camden County- Below 35%- Rent', 'Camden County- Above 35%- Rent', 'Camden County- Above 35%- Own','Camden County- Not Computed- Own', 'Camden County- Not Computed- Rent'],
                    ['Gloucester County- Below 35%- Own', 'Gloucester County- Below 35%- Rent', 'Gloucester County- Above 35%- Rent', 'Gloucester County- Above 35%- Own','Gloucester County- Not Computed- Own', 'Gloucester County- Not Computed- Rent'],
                    ['Mercer County- Below 35%- Own', 'Mercer County- Below 35%- Rent', 'Mercer County- Above 35%- Rent', 'Mercer County- Above 35%- Own','Mercer County- Not Computed- Own', 'Mercer County- Not Computed- Rent']
                ],
                data: [
                    {
                        'key': 'Below 35% - Own',
                        columns: ['year', 'DVRPC- Below 35%- Own']
                    },
                    {
                        'key': 'Below 35% - Rent',
                        columns: ['year', 'DVRPC- Below 35%- Rent']
                    },
                    {
                        'key': 'Above 35% - Rent',
                        columns: ['year', 'DVRPC- Above 35%- Rent']
                    },
                    {
                        'key': 'Above 35% - Own',
                        columns: ['year', 'DVRPC- Above 35%- Own']
                    },
                    {
                        'key': 'Not Computed - Own',
                        columns: ['year', 'DVRPC- Not Computed- Own']
                    },
                    {
                        'key': 'Not Computed - Rent',
                        columns: ['year', 'DVRPC- Not Computed- Rent']
                    }
                ]
            },
            {
                type: 'stacked bar',
                container: 'chart3',
                dataSource: ['housing_afford_graph_3'],
                context: {
                    labels: ['Households (Thousands)'],
                    keepLabels: true,
                    units: ['thousands']
                },
                columnOptions: [
                    ['DVRPC- 0.0-9.9%', 'DVRPC- 10.0-14.9%', 'DVRPC- 15.0-19.9%', 'DVRPC- 20.0-24.9%', 'DVRPC- 25.0-29.9%', 'DVRPC- 30.0-34.9%', 'DVRPC- 35.0-39.9%', 'DVRPC- 40.0-49.9%', 'DVRPC- 50%+','DVRPC- Not Computed'],
                    ['Pennsylvania Suburbs- 0.0-9.9%', 'Pennsylvania Suburbs- 10.0-14.9%', 'Pennsylvania Suburbs- 15.0-19.9%', 'Pennsylvania Suburbs- 20.0-24.9%', 'Pennsylvania Suburbs- 25.0-29.9%', 'Pennsylvania Suburbs- 30.0-34.9%', 'Pennsylvania Suburbs- 35.0-39.9%', 'Pennsylvania Suburbs- 40.0-49.9%', 'Pennsylvania Suburbs- 50%+', 'Pennsylvania Suburbs- Not Computed'],
                    ['New Jersey Suburbs- 0.0-9.9%', 'New Jersey Suburbs- 10.0-14.9%', 'New Jersey Suburbs- 15.0-19.9%', 'New Jersey Suburbs- 20.0-24.9%', 'New Jersey Suburbs- 25.0-29.9%', 'New Jersey Suburbs- 30.0-34.9%', 'New Jersey Suburbs- 35.0-39.9%', 'New Jersey Suburbs- 40.0-49.9%', 'New Jersey Suburbs- 50%+', 'New Jersey Suburbs- Not Computed'],
                    ['Philadelphia Subregion- 0.0-9.9%', 'Philadelphia Subregion- 10.0-14.9%', 'Philadelphia Subregion- 15.0-19.9%', 'Philadelphia Subregion- 20.0-24.9%', 'Philadelphia Subregion- 25.0-29.9%', 'Philadelphia Subregion- 30.0-34.9%', 'Philadelphia Subregion- 35.0-39.9%', 'Philadelphia Subregion- 40.0-49.9%', 'Philadelphia Subregion- 50%+', 'Philadelphia Subregion- Not Computed'],
                    ['Core City- 0.0-9.9%','Core City- 10.0-14.9%', 'Core City- 15.0-19.9%', 'Core City- 20.0-24.9%', 'Core City- 25.0-29.9%', 'Core City- 30.0-34.9%', 'Core City- 35.0-39.9%', 'Core City- 40.0-49.9%', 'Core City- 50%+', 'Core City- Not Computed'],
                    ['Developed Community- 0.0-9.9%', 'Developed Community- 10.0-14.9%', 'Developed Community- 15.0-19.9%', 'Developed Community- 20.0-24.9%', 'Developed Community- 25.0-29.9%', 'Developed Community- 30.0-34.9%', 'Developed Community- 35.0-39.9%', 'Developed Community- 40.0-49.9%', 'Developed Community- 50%+', 'Developed Community- Not Computed'],
                    ['Growing Suburb- 0.0-9.9%', 'Growing Suburb- 10.0-14.9%', 'Growing Suburb- 15.0-19.9%', 'Growing Suburb- 20.0-24.9%', 'Growing Suburb- 25.0-29.9%', 'Growing Suburb- 30.0-34.9%', 'Growing Suburb- 35.0-39.9%', 'Growing Suburb- 40.0-49.9%', 'Growing Suburb- 50%+', 'Growing Suburb- Not Computed'],
                    ['Rural Area- 0.0-9.9%', 'Rural Area- 10.0-14.9%', 'Rural Area- 15.0-19.9%', 'Rural Area- 20.0-24.9%', 'Rural Area- 25.0-29.9%', 'Rural Area- 30.0-34.9%', 'Rural Area- 35.0-39.9%', 'Rural Area- 40.0-49.9%', 'Rural Area- 50%+', 'Rural Area- Not Computed'],
                    ['Bucks County- 0.0-9.9%', 'Bucks County- 10.0-14.9%', 'Bucks County- 15.0-19.9%', 'Bucks County- 20.0-24.9%', 'Bucks County- 25.0-29.9%', 'Bucks County- 30.0-34.9%', 'Bucks County- 35.0-39.9%', 'Bucks County- 40.0-49.9%', 'Bucks County- 50%+', 'Bucks County- Not Computed'],
                    ['Chester County- 0.0-9.9%', 'Chester County- 10.0-14.9%', 'Chester County- 15.0-19.9%', 'Chester County- 20.0-24.9%', 'Chester County- 25.0-29.9%', 'Chester County- 30.0-34.9%', 'Chester County- 35.0-39.9%', 'Chester County- 40.0-49.9%', 'Chester County- 50%+', 'Chester County- Not Computed'],
                    ['Delaware County- 0.0-9.9%', 'Delaware County- 10.0-14.9%', 'Delaware County- 15.0-19.9%', 'Delaware County- 20.0-24.9%', 'Delaware County- 25.0-29.9%', 'Delaware County- 30.0-34.9%', 'Delaware County- 35.0-39.9%', 'Delaware County- 40.0-49.9%', 'Delaware County- 50%+', 'Delaware County- Not Computed'],
                    ['Montgomery County- 0.0-9.9%','Montgomery County- 10.0-14.9%', 'Montgomery County- 15.0-19.9%', 'Montgomery County- 20.0-24.9%', 'Montgomery County- 25.0-29.9%', 'Montgomery County- 30.0-34.9%', 'Montgomery County- 35.0-39.9%', 'Montgomery County- 40.0-49.9%', 'Montgomery County- 50%+', 'Montgomery County- Not Computed'],
                    ['Philadelphia County- 0.0-9.9%', 'Philadelphia County- 10.0-14.9%', 'Philadelphia County- 15.0-19.9%', 'Philadelphia County- 20.0-24.9%', 'Philadelphia County- 25.0-29.9%', 'Philadelphia County- 30.0-34.9%', 'Philadelphia County- 35.0-39.9%', 'Philadelphia County- 40.0-49.9%', 'Philadelphia County- 50%+', 'Philadelphia County- Not Computed'],
                    ['Burlington County- 0.0-9.9%', 'Burlington County- 10.0-14.9%', 'Burlington County- 15.0-19.9%', 'Burlington County- 20.0-24.9%', 'Burlington County- 25.0-29.9%', 'Burlington County- 30.0-34.9%', 'Burlington County- 35.0-39.9%', 'Burlington County- 40.0-49.9%', 'Burlington County- 50%+', 'Burlington County- Not Computed'],
                    ['Camden County- 0.0-9.9%', 'Camden County- 10.0-14.9%', 'Camden County- 15.0-19.9%', 'Camden County- 20.0-24.9%', 'Camden County- 25.0-29.9%', 'Camden County- 30.0-34.9%', 'Camden County- 35.0-39.9%', 'Camden County- 40.0-49.9%', 'Camden County- 50%+', 'Camden County- Not Computed'],
                    ['Gloucester County- 0.0-9.9%', 'Gloucester County- 10.0-14.9%', 'Gloucester County- 15.0-19.9%', 'Gloucester County- 20.0-24.9%', 'Gloucester County- 25.0-29.9%', 'Gloucester County- 30.0-34.9%', 'Gloucester County- 35.0-39.9%', 'Gloucester County- 40.0-49.9%', 'Gloucester County- 50%+', 'Gloucester County- Not Computed'],
                    ['Mercer County- 0.0-9.9%', 'Mercer County- 10.0-14.9%', 'Mercer County- 15.0-19.9%', 'Mercer County- 20.0-24.9%', 'Mercer County- 25.0-29.9%', 'Mercer County- 30.0-34.9%', 'Mercer County- 35.0-39.9%', 'Mercer County- 40.0-49.9%', 'Mercer County- 50%+','Mercer County- Not Computed']
                ],
                data: [
                    {
                        'key': '0.0 - 9.9%',
                        columns: ['year', 'DVRPC- 0.0-9.9%']
                    },
                    {
                        'key': '10.0 - 14.9%',
                        columns: ['year', 'DVRPC- 10.0-14.9%']
                    },
                    {
                        'key': '15.0 - 19.9%',
                        columns: ['year', 'DVRPC- 15.0-19.9%']
                    },
                    {
                        'key': '20.0 - 24.9%',
                        columns: ['year', 'DVRPC- 20.0-24.9%']
                    },
                    {
                        'key': '25.0 - 29.9%',
                        columns: ['year', 'DVRPC- 25.0-29.9%']
                    },
                    {
                        'key': '30 - 34.9%',
                        columns: ['year', 'DVRPC- 30.0-34.9%']
                    },
                    {
                        'key': '35.0 - 39.9%',
                        columns: ['year', 'DVRPC- 35.0-39.9%']
                    },
                    {
                        'key': '40.0 - 49.9%',
                        columns: ['year', 'DVRPC- 40.0-49.9%']
                    },
                    {
                        'key': '50%+',
                        columns: ['year', 'DVRPC- 50%+']
                    },
                    {
                        'key': 'Not Computed',
                        columns: ['year', 'DVRPC- Not Computed']
                    }
                ]
            },
        ],
        text: {
            why: `<p>Maintaining a diverse supply of housing at all price points helps ensure that all can find a place to live. It  is critical to attracting a sufficient labor force and maintaining economic attractiveness. Households paying greater than 35 percent of their income may have cost-burdens that make other necessary payments more difficult, and limit discretionary funds. Substandard housing conditions, steep home prices, and lower income levels all exacerbate inequities experienced within disadvantaged communities, and can prevent individuals and families from fully accessing the opportunities afforded to others in the region.</p>`,
            what: `<p>A commonly accepted threshold for what housing costs should be to remain affordable is 35 percent of a household's income. This is defined as <em>high cost-burden</em> for households. Fifty percent is thought to be the <em>severe housing cost-burden</em> threshold. The American Community Survey (ACS) reports percent of household income spent on housing by ownership status and in various percentage ranges.</p><p>All data by county and region are from the one-year ACS. Since Planning Areas are made up of sub-county municipal data and one-year data is not reported below county level, only five-year ACS data are available in these cases. In the charts, Planning Areas are represented in the final sample year of the 5-year period estimate. To avoid comparing datasets that use the same sample in common years, only period estimates with distinct sample years are used.</p><p>It is important to note that this indicator only measures cost-burden among the region's households, not the supply of affordable housing. The directionality of cost-burden trends can be impacted by changes in income and housing supply. If lower income households are priced out of the region or a county, that would create a downward trend in cost-burden, but it would not reflect a positive trend for an inclusive housing market.</p>`,
            how: `<p>The percent of households in the region with a high housing cost-burden (those paying over 35 percent of income on housing) has dropped in recent years to levels lower than any point in the period from 2005 to 2017, a 4.2 percent drop. The peak for this period came in the recession years—24.4 percent in 2011—but hovered around 22 percent prior to 2010. The percent dipped to 19.6 percent in 2017.</p><p>Recent years have seen more of the region's households opting to rent. But while rental cost-burden has shown decreases, it has not been as quick to drop as owner cost-burden. Notably, the region's Core City Planning Areas have had rather flat rental cost-burden declines, while other Planning Areas have seen increases—especially Rural Areas and Growing Suburbs.</p><p>Among those with a high cost-burden, those with a severe burden (greater than 50 percent of household income) has seen a similar decline. But Developed Communities and Core City Planning Areas have seen steeper declines in severe cost-burden than Growing Suburbs and Rural Areas.</p>`,
            resource: `<p>DVRPC's <a href="/Connections2045/MIT/">Municipal Implementation Toolbox</a> suggests the following tools for improving housing options in the region:</p><ul><li><a href="/Connections2045/MIT/toolpage.html?tool=5bf42b77e7179a56e2137867">Build Missing Middle Housing</a></li><li><a href="/Connections2045/MIT/toolpage.html?tool=5bf42b41e7179a56e2137853">Housing Maintenance &amp; Rehabilitation Programs</a></li><li><a href="/Connections2045/MIT/toolpage.html?tool=5bf43443e7179a56e2137e76">Inclusionary Zoning</a></li><li><a href="/Connections2045/MIT/toolpage.html?tool=5c929ecee7179a0e4089fdad">Live/Work Zoning</a></li><li><a href="/Connections2045/MIT/toolpage.html?tool=5bf4341de7179a56e2137e39">Accessory Dwelling Units</a></li></ul>`
        }
    },
    'Job Growth': {
        file: 'jobGrowth.html',
        d3: [
            {
                type: 'line',
                container: 'chart',
                dataSource: ['jobs_graph1'],
                context: {
                    labels: ['Growth Rate'],
                    keepLabels: true,
                    units: ['percent'],
                    keepUnits: true
                },
                columnOptions: [
                    ['DVRPC', 'New Jersey Suburbs', 'Pennsylvania Suburbs', 'Philadelphia Subregion', 'Bucks', 'Burlington', 'Camden', 'Chester', 'Delaware', 'Gloucester', 'Mercer', 'Montgomery', 'Philadelphia'],
                    ['DVRPC-total', 'New Jersey Suburbs-total', 'Pennsylvania Suburbs-total', 'Philadelphia Subregion-total', 'Bucks-total', 'Burlington-total', 'Camden-total', 'Chester-total', 'Delaware-total', 'Gloucester-total', 'Mercer-total', 'Montgomery-total', 'Philadelphia-total']
                ],
                data:[
                    {
                        'key': 'DVRPC',
                        columns: ['year', 'DVRPC']
                    },
                    {
                        'key': 'New Jersey Suburbs',
                        disabled: true,
                        columns: ['year', 'New Jersey Suburbs']
                    },
                    {
                        'key': 'PA Suburbs',
                        disabled: true,
                        columns: ['year', 'Pennsylvania Suburbs']
                    },
                    {
                        'key': 'Philadelphia Subregion',
                        disabled: true,
                        columns: ['year', 'Philadelphia Subregion']
                    },
                    {
                        'key': 'Bucks County',
                        disabled: true,
                        columns: ['year', 'Bucks']
                    },
                    {
                        'key': 'Burlington County',
                        disabled: true,
                        columns: ['year', 'Burlington']
                    },
                    {
                        'key': 'Camden County',
                        disabled: true,
                        columns: ['year', 'Camden']
                    },
                    {
                        'key': 'Chester County',
                        disabled: true,
                        columns: ['year', 'Chester']
                    },
                    {
                        'key': 'Delaware County',
                        disabled: true,
                        columns: ['year', 'Delaware']
                    },
                    {
                        'key': 'Gloucester County',
                        disabled: true,
                        columns: ['year', 'Gloucester']
                    },
                    {
                        'key': 'Mercer County',
                        disabled: true,
                        columns: ['year', 'Mercer']
                    },
                    {
                        'key': 'Montgomery County',
                        disabled: true,
                        columns: ['year', 'Montgomery']
                    },
                    {
                        'key': 'Philadelphia',
                        disabled: true,
                        columns: ['year', 'Philadelphia']
                    },
                ],
                yAxisUnits: 'percent'
            },
            {
                type: 'stacked bar',
                container: 'chart2',
                dataSource: ['jobs_graph2'],
                context: {
                    labels: ['Percentage of Region'],
                    units: ['percent']
                },
                data: [
                    {
                        'key': 'Bucks County',
                        columns: ['year', 'Bucks']
                    },
                    {
                        'key': 'Burlington County',
                        columns: ['year', 'Burlington']
                    },
                    {
                        'key': 'Camden County',
                        columns: ['year', 'Camden']
                    },
                    {
                        'key': 'Chester County',
                        columns: ['year', 'Chester']
                    },
                    {
                        'key': 'Delaware County',
                        columns: ['year', 'Delaware']
                    },
                    {
                        'key': 'Gloucester County',
                        columns: ['year', 'Gloucester']
                    },
                    {
                        'key': 'Mercer County',
                        columns: ['year', 'Mercer']
                    },
                    {
                        'key': 'Montgomery County',
                        columns: ['year', 'Montgomery']
                    },
                    {
                        'key': 'Philadelphia County',
                        columns: ['year', 'Philadelphia']
                    },
                ]
            },
            {
                type: 'stacked bar',
                container: 'chart3',
                dataSource: ['jobs_graph3'],
                context: {
                    labels: ['Percentage of Total Jobs'],
                    keepLabels: true,
                    units: ['percent'],
                    keepUnits: true
                },
                columnOptions: [
                    ['DVRPC- Accommodation and food services', 'DVRPC- Agriculture, forestry, fishing', 'DVRPC- Arts, entertainment, and recreation', 'DVRPC- Construction and manufacturing', 'DVRPC- Educational services', 'DVRPC- Finance, Insurance, and Real Estate', 'DVRPC- Health care and social assistance', 'DVRPC- Industry not classified', 'DVRPC- Information Technology', 'DVRPC- Management of companies and enterprises', 'DVRPC- Mining and utilities', 'DVRPC- Other services (except public administration)', 'DVRPC- Professional, scientific, and technical services', 'DVRPC- Transportation and warehousing', 'DVRPC- Waste management and remediation services', 'DVRPC- Wholesale and retail trade'],
                    ['Philadelphia Subregion- Accommodation and food services', 'Philadelphia Subregion- Agriculture, forestry, fishing', 'Philadelphia Subregion- Arts, entertainment, and recreation', 'Philadelphia Subregion- Construction and manufacturing', 'Philadelphia Subregion- Educational services', 'Philadelphia Subregion- Finance, Insurance, and Real Estate', 'Philadelphia Subregion- Health care and social assistance', 'Philadelphia Subregion- Industry not classified', 'Philadelphia Subregion- Information Technology', 'Philadelphia Subregion- Management of companies and enterprises', 'Philadelphia Subregion- Mining and utilities', 'Philadelphia Subregion- Other services (except public administration)', 'Philadelphia Subregion- Professional, scientific, and technical services', 'Philadelphia Subregion- Transportation and warehousing', 'Philadelphia Subregion- Waste management and remediation services', 'Philadelphia Subregion- Wholesale and retail trade'],
                    ['New Jersey Suburbs- Accommodation and food services', 'New Jersey Suburbs- Agriculture, forestry, fishing', 'New Jersey Suburbs- Arts, entertainment, and recreation', 'New Jersey Suburbs- Construction and manufacturing', 'New Jersey Suburbs- Educational services', 'New Jersey Suburbs- Finance, Insurance, and Real Estate', 'New Jersey Suburbs- Health care and social assistance', 'New Jersey Suburbs- Industry not classified', 'New Jersey Suburbs- Information Technology', 'New Jersey Suburbs- Management of companies and enterprises', 'New Jersey Suburbs- Mining and utilities', 'New Jersey Suburbs- Other services (except public administration)', 'New Jersey Suburbs- Professional, scientific, and technical services', 'New Jersey Suburbs- Transportation and warehousing', 'New Jersey Suburbs- Waste management and remediation services', 'New Jersey Suburbs- Wholesale and retail trade'],
                    ['Pennsylvania Suburbs- Accommodation and food services', 'Pennsylvania Suburbs- Agriculture, forestry, fishing', 'Pennsylvania Suburbs- Arts, entertainment, and recreation', 'Pennsylvania Suburbs- Construction and manufacturing', 'Pennsylvania Suburbs- Educational services', 'Pennsylvania Suburbs- Finance, Insurance, and Real Estate', 'Pennsylvania Suburbs- Health care and social assistance', 'Pennsylvania Suburbs- Industry not classified', 'Pennsylvania Suburbs- Information Technology', 'Pennsylvania Suburbs- Management of companies and enterprises', 'Pennsylvania Suburbs- Mining and utilities', 'Pennsylvania Suburbs- Other services (except public administration)', 'Pennsylvania Suburbs- Professional, scientific, and technical services', 'Pennsylvania Suburbs- Transportation and warehousing', 'Pennsylvania Suburbs- Waste management and remediation services', 'Pennsylvania Suburbs- Wholesale and retail trade'],
                    ['Bucks- Accommodation and food services', 'Bucks- Agriculture, forestry, fishing', 'Bucks- Arts, entertainment, and recreation', 'Bucks- Construction and manufacturing', 'Bucks- Educational services', 'Bucks- Finance, Insurance, and Real Estate', 'Bucks- Health care and social assistance', 'Bucks- Industry not classified', 'Bucks- Information Technology', 'Bucks- Management of companies and enterprises', 'Bucks- Mining and utilities', 'Bucks- Other services (except public administration)', 'Bucks- Professional, scientific, and technical services', 'Bucks- Transportation and warehousing', 'Bucks- Waste management and remediation services', 'Bucks- Wholesale and retail trade'],
                    ['Chester- Accommodation and food services', 'Chester- Agriculture, forestry, fishing', 'Chester- Arts, entertainment, and recreation', 'Chester- Construction and manufacturing', 'Chester- Educational services', 'Chester- Finance, Insurance, and Real Estate', 'Chester- Health care and social assistance', 'Chester- Industry not classified', 'Chester- Information Technology', 'Chester- Management of companies and enterprises', 'Chester- Mining and utilities', 'Chester- Other services (except public administration)', 'Chester- Professional, scientific, and technical services', 'Chester- Transportation and warehousing', 'Chester- Waste management and remediation services', 'Chester- Wholesale and retail trade'],
                    ['Delaware- Accommodation and food services', 'Delaware- Agriculture, forestry, fishing', 'Delaware- Arts, entertainment, and recreation', 'Delaware- Construction and manufacturing', 'Delaware- Educational services', 'Delaware- Finance, Insurance, and Real Estate', 'Delaware- Health care and social assistance', 'Delaware- Industry not classified', 'Delaware- Information Technology', 'Delaware- Management of companies and enterprises', 'Delaware- Mining and utilities', 'Delaware- Other services (except public administration)', 'Delaware- Professional, scientific, and technical services', 'Delaware- Transportation and warehousing', 'Delaware- Waste management and remediation services', 'Delaware- Wholesale and retail trade'],
                    ['Montgomery- Accommodation and food services', 'Montgomery- Agriculture, forestry, fishing', 'Montgomery- Arts, entertainment, and recreation', 'Montgomery- Construction and manufacturing', 'Montgomery- Educational services', 'Montgomery- Finance, Insurance, and Real Estate', 'Montgomery- Health care and social assistance', 'Montgomery- Industry not classified', 'Montgomery- Information Technology', 'Montgomery- Management of companies and enterprises', 'Montgomery- Mining and utilities', 'Montgomery- Other services (except public administration)', 'Montgomery- Professional, scientific, and technical services', 'Montgomery- Transportation and warehousing', 'Montgomery- Waste management and remediation services', 'Montgomery- Wholesale and retail trade'],
                    ['Burlington- Accommodation and food services', 'Burlington- Agriculture, forestry, fishing', 'Burlington- Arts, entertainment, and recreation', 'Burlington- Construction and manufacturing', 'Burlington- Educational services', 'Burlington- Finance, Insurance, and Real Estate', 'Burlington- Health care and social assistance', 'Burlington- Industry not classified', 'Burlington- Information Technology', 'Burlington- Management of companies and enterprises', 'Burlington- Mining and utilities', 'Burlington- Other services (except public administration)', 'Burlington- Professional, scientific, and technical services', 'Burlington- Transportation and warehousing', 'Burlington- Waste management and remediation services', 'Burlington- Wholesale and retail trade'],
                    ['Camden- Accommodation and food services', 'Camden- Agriculture, forestry, fishing', 'Camden- Arts, entertainment, and recreation', 'Camden- Construction and manufacturing', 'Camden- Educational services', 'Camden- Finance, Insurance, and Real Estate', 'Camden- Health care and social assistance', 'Camden- Industry not classified', 'Camden- Information Technology', 'Camden- Management of companies and enterprises', 'Camden- Mining and utilities', 'Camden- Other services (except public administration)', 'Camden- Professional, scientific, and technical services', 'Camden- Transportation and warehousing', 'Camden- Waste management and remediation services', 'Camden- Wholesale and retail trade'],
                    ['Gloucester- Accommodation and food services', 'Gloucester- Agriculture, forestry, fishing', 'Gloucester- Arts, entertainment, and recreation', 'Gloucester- Construction and manufacturing', 'Gloucester- Educational services', 'Gloucester- Finance, Insurance, and Real Estate', 'Gloucester- Health care and social assistance', 'Gloucester- Industry not classified', 'Gloucester- Information Technology', 'Gloucester- Management of companies and enterprises', 'Gloucester- Mining and utilities', 'Gloucester- Other services (except public administration)', 'Gloucester- Professional, scientific, and technical services', 'Gloucester- Transportation and warehousing', 'Gloucester- Waste management and remediation services', 'Gloucester- Wholesale and retail trade'],
                    ['Mercer- Accommodation and food services', 'Mercer- Agriculture, forestry, fishing', 'Mercer- Arts, entertainment, and recreation', 'Mercer- Construction and manufacturing', 'Mercer- Educational services', 'Mercer- Finance, Insurance, and Real Estate', 'Mercer- Health care and social assistance', 'Mercer- Industry not classified', 'Mercer- Information Technology', 'Mercer- Management of companies and enterprises', 'Mercer- Mining and utilities', 'Mercer- Other services (except public administration)', 'Mercer- Professional, scientific, and technical services', 'Mercer- Transportation and warehousing', 'Mercer- Waste management and remediation services', 'Mercer- Wholesale and retail trade']
                ],
                data: [
                    {
                        'key': 'Accommodation and food services',
                        'columns': ['year', 'DVRPC- Accommodation and food services']
                    },
                    {
                        'key': 'Agriculture, forestry, fishing',
                        'columns': ['year', 'DVRPC- Agriculture, forestry, fishing']
                    },
                    {
                        'key': 'Arts, entertainment, and recreation',
                        'columns': ['year', 'DVRPC- Arts, entertainment, and recreation']
                    },
                    {
                        'key': 'Construction and manufacturing',
                        'columns': ['year', 'DVRPC- Construction and manufacturing']
                    },
                    {
                        'key': 'Educational services',
                        'columns': ['year', 'DVRPC- Educational services']
                    },
                    {
                        'key': 'Finance, Insurance, and Real Estate',
                        'columns': ['year', 'DVRPC- Finance, Insurance, and Real Estate']
                    },
                    {
                        'key': 'Health care and social assistance',
                        'columns': ['year', 'DVRPC- Health care and social assistance']
                    },
                    {
                        'key': 'Industry not classified',
                        'columns': ['year', 'DVRPC- Industry not classified']
                    },
                    {
                        'key': 'Information Technology',
                        'columns': ['year', 'DVRPC- Information Technology']
                    },
                    {
                        'key': 'Management of companies and enterprises',
                        'columns': ['year', 'DVRPC- Management of companies and enterprises']
                    },
                    {
                        'key': 'Mining and utilities',
                        'columns': ['year', 'DVRPC- Mining and utilities']
                    },
                    {
                        'key': 'Other services (except public administration)',
                        'columns': ['year', 'DVRPC- Other services (except public administration)']
                    },
                    {
                        'key': 'Professional, scientific, and technical services',
                        'columns': ['year', 'DVRPC- Professional, scientific, and technical services']
                    },
                    {
                        'key': 'Transportation and warehousing',
                        'columns': ['year', 'DVRPC- Transportation and warehousing']
                    },
                    {
                        'key': 'Waste management and remediation services',
                        'columns': ['year', 'DVRPC- Waste management and remediation services']
                    },
                    {
                        'key': 'Wholesale and retail trade',
                        'columns': ['year', 'DVRPC- Wholesale and retail trade']
                    }
                ]
            }
        ],
        text: {
            why: `<p>Growth or decline in the total number of jobs is one of the primary tools for measuring the economic strength of the region.  Also important is the geographic distribution of jobs, as well as the distribution of the jobs between different industries. Job growth in one region could indicate a need for more transportation infrastructure to aid workers' commutes, while a decline in jobs in a particular industry might signal a need for investment to help support those businesses or alternatively establishing job retraining programs to transition employees to industries of the future. Job totals alone do not, however, tell you anything about the quality or desirability of those jobs. The total number of jobs may increase, but if higher-paying jobs are being replaced by lower-paying jobs, the economy could still be declining overall. On the other hand, employers concentrating in centers around the region may not change the total number of jobs, but could have other benefits like decreasing commuting costs and priming the region for future growth.</p>`,
            what: `<p>The U.S. Bureau of Labor Statistics' Quarterly Census of Employment and Wages (QCEW) provides a quarterly count of employment and wages as reported by employers, and covers more than 95 percent of U.S. jobs available. County Business Patterns (CBP) is an annual program of the U.S. Census Bureau that provides economic data by industry at the county level. The CBP data is extracted from the Business Register (BR), a database of all known single and multi-establishment employer companies maintained and updated by the U.S. Census Bureau.</p><p>The first graph below shows the annual growth rate and the overall growth rate since 2001. The second graph shows the percentage of the region's jobs located in each county. The third graph shows the percentage of jobs that occur in various sectors of the region's economy. The first and second graphs are based on QCEW data, and the third graph is based on CBP data.</p>`,
            how: `<p>Overall, the number of jobs in the region has increased by 6 percent since 2001. However, this growth has not been consistent, and the annual growth rate has varied significantly from a high of 2 percent  between 2015 and 2016 and a low of -3.3 percent between 2008 and 2009 during the recession.</p><p>Job growth has not been evenly distributed around the region. While the four New Jersey counties have about matched the regional average at 5.6 percent, the four suburban Pennsylvania counties saw job growth of 10.3 percent between 2001 and 2017. At the same time, jobs in Philadelphia only increased by 2.2 percent. Jobs are distributed throughout the region's nine counties, but over 40 percent of the jobs are currently located in just two: Philadelphia (25.3 percent of the region's jobs), Montgomery (18.5 percent).</p><p>Since 2001, the regional share of construction and manufacturing jobs has declined from 13.2 percent to 10.4 percent, while the number of nonmanufacturing jobs has increased dramatically. Fast growing service sectors include arts, entertainment, and recreation services, management services; education services, and health-related services. While the region's economy was once dominated by manufacturing, knowledge-based industries are now prominent, with life sciences, information technology, professional services, and chemicals ranking among the region's top industries. Sectors such as education and health services, professional and business services, financial activities, and information technology require highly educated and skilled workers, and now make up over 40 percent of the region's employment.</p>`,
            resource: `<p>DVRPC works with its planning partners on <a href="/Economic/">economic development and analysis</a> in the region, including our <a href="/Economic/CEDS/">Comprehensive Economic Development Strategy (CEDS)</a>.</p><p>Collaborating with our county partners, DVRPC also produced <a href="/Products/ADR023/">county and municipal employment forecasts</a> for the <em>Connections 2045</em> long-range plan that were adopted by the DVRPC Board.</p><p>DVRPC's <a href="/Connections2045/MIT/">Municipal Implementation Toolbox</a> suggests the following tools to bolster job growth in an inclusive economy:</p><ul><li><a href="/Connections2045/MIT/toolpage.html?tool=5cb77a06fb6fc041ab92ffe3">Business Incubators</a></li><li><a href="/Connections2045/MIT/toolpage.html?tool=5cb77b58fb6fc041ab93009c">Minority- and Women-Owned Business Resources</a></li><li><a href="/Connections2045/MIT/toolpage.html?tool=5cb77a80fb6fc041ab930040">Human Capital Investments</a></li></ul>`
        }
    },
    'Racial Ethnic Disparities':{
        file: 'racialAndEthnicDisparities.html',
        d3: [
            {
                type: 'line',
                container: 'chart',
                dataSource: ['medincGapRace'],
                context: {
                    labels: ['Dollars (2017)'],
                    units: ['thousands']
                },
                data: [
                    {
                        'key': 'DVRPC Region',
                        columns: ['year', 'Region']
                    },
                    {
                        'key': 'Philadelphia',
                        columns: ['year', 'Philadelphia']
                    },
                    {
                        'key': 'PA Suburban Counties',
                        columns: ['year', 'PA Suburban Counties']
                    },
                    {
                        'key': 'NJ Suburban Counties',
                        columns: ['year', 'NJ Suburban Counties']
                    },
                    {
                        'key': 'Bucks County',
                        disabled: true,
                        columns: ['year', 'Bucks']
                    },
                    {
                        'key': 'Burlington County',
                        disabled: true,
                        columns: ['year', 'Burlington']
                    },
                    {
                        'key': 'Camden County',
                        disabled: true,
                        columns: ['year', 'Camden']
                    },
                    {
                        'key': 'Chester County',
                        disabled: true,
                        columns: ['year', 'Chester']
                    },
                    {
                        'key': 'Delaware County',
                        disabled: true,
                        columns: ['year', 'Delaware']
                    },
                    {
                        'key': 'Gloucester County',
                        disabled: true,
                        columns: ['year', 'Gloucester']
                    },
                    {
                        'key': 'Mercer County',
                        disabled: true,
                        columns: ['year', 'Mercer']
                    },
                    {
                        'key': 'Montgomery County',
                        disabled: true,
                        columns: ['year', 'Montgomery']
                    }
                ]
            },
            {
                type: 'line',
                container: 'chart2',
                dataSource: ['medincRace'],
                context: {
                    labels: ['Dollars (2017)'],
                    keepLabels: true,
                    units: ['thousands'],
                    keepUnits: true
                },
                columnOptions: [
                    ['Region_minorityInc', 'Region_whtNonHispInc'],
                    ['NJ Suburban Counties_minorityInc', 'NJ Suburban Counties_whtNonHispInc'],
                    ['PA Suburban Counties_minorityInc', 'PA Suburban Counties_whtNonHispInc'],
                    ['Bucks_minorityInc', 'Bucks_whtNonHispInc'],
                    ['Burlington_minorityInc', 'Burlington_whtNonHispInc'],
                    ['Camden_minorityInc', 'Camden_whtNonHispInc'],
                    ['Chester_minorityInc', 'Chester_whtNonHispInc'],
                    ['Delaware_minorityInc', 'Delaware_whtNonHispInc'],
                    ['Gloucester_minorityInc', 'Gloucester_whtNonHispInc'],
                    ['Mercer_minorityInc', 'Mercer_whtNonHispInc'],
                    ['Montgomery_minorityInc', 'Montgomery_whtNonHispInc'],
                    ['Philadelphia_minorityInc', 'Philadelphia_whtNonHispInc']
                ],
                data: [
                    {
                        'key': 'People of Color & Latinx',
                        columns: ['year', 'Region_minorityInc']
                    },
                    {
                        'key': 'Whites',
                        columns: ['year', 'Region_whtNonHispInc']
                    }
                ]
            },
            {
                type: 'line',
                container: 'chart3',
                dataSource: ['RaceEthnSegregation'],
                context: {
                    labels: ['Population Needing to Move to Achieve Regional Distribution'],
                    units: ['percent']
                },
                data: [
                    {
                        'key': 'Racial/Ethnic Segregation Index',
                        columns: ['year', 'PeopleofColor']
                    }
                ]
            },
            {
                type: 'line',
                container: 'chart4',
                dataSource: ['labForceByRace_wide'],
                context: {
                    labels: ['Percent Participation Gap'],
                    keepLabels: true,
                    units: ['percent'],
                    keepUnits: true
                },
                columnOptions: [
                    ['Region_difference'],
                    ['NJ Suburban Counties_difference'],
                    ['PA Suburban Counties_difference'],
                    ['Bucks_difference'],
                    ['Burlington_difference'],
                    ['Camden_difference'],
                    ['Chester_difference'],
                    ['Delaware_difference'],
                    ['Gloucester_difference'],
                    ['Mercer_difference'],
                    ['Montgomery_difference'],
                    ['Philadelphia_difference']
                ],
                data: [
                    {
                        'key': 'Participation Gap',
                        columns: ['year', 'Region_difference']
                    }
                ]
            },
            {
                type: 'line',
                container: 'chart5',
                dataSource: ['labForceByRace_wide'],
                context: {
                    labels: ['Percent Participation'],
                    keepLabels: true,
                    units: ['percent'],
                    keepUnits: true
                },
                columnOptions: [
                    ['Region_labWht', 'Region_labNonWht'],
                    ['NJ Suburban Counties_labWht', 'NJ Suburban Counties_labNonWht'],
                    ['PA Suburban Counties_labWht', 'PA Suburban Counties_labNonWht'],
                    ['Bucks_labWht', 'Bucks_labNonWht'],
                    ['Burlington_labWht', 'Burlington_labNonWht'],
                    ['Camden_labWht', 'Camden_labNonWht'],
                    ['Chester_labWht', 'Chester_labNonWht'],
                    ['Delaware_labWht', 'Delaware_labNonWht'],
                    ['Gloucester_labWht', 'Gloucester_labNonWht'],
                    ['Mercer_labWht', 'Mercer_labNonWht'],
                    ['Montgomery_labWht', 'Montgomery_labNonWht'],
                    ['Philadelphia_labWht', 'Philadelphia_labNonWht']
                ],
                data: [
                    {
                        'key': 'Whites',
                        columns: ['year', 'Region_labWht']
                    },
                    {
                        'key': 'People of Color',
                        columns: ['year', 'Region_labNonWht']
                    }
                ]
            }
        ],
        text: {
            why: `<p>An equitable, inclusive region means everyone has the opportunity to participate and thrive. But the history of racial and ethnic discrimination in both the country and the region have held generations of residents back from accessing the same opportunities—particularly in the areas of income and employment. Neighborhoods with higher concentrations of people of color are more often adversely impacted by poor conditions in any number of areas, including housing, schools, air quality, crime, and pedestrian and bicycle safety. A less segregated region, with higher incomes and workforce inclusion for people of color, improves the bottom line for all businesses and the lives of all citizens.</p>`,
            what: `<p><em>People of color</em>, defined as non-white and/or non-Latinx persons using U.S. Census Bureau data, can experience discrimination and be held back from opportunities in many facets of life, but this indicator focuses on trends in income, labor force participation, and segregation of neighborhoods. These topics within the indicator recognize the key issues for inclusion of people of color in the region's economy and addressing barriers and access to opportunity in the region's communities.</p><p>There are some limitations when using U.S. Census Bureau data for racial and ethnic analysis—particularly in the area of ethnicity. The American Community Survey, the Decennial Census, and other Census products only capture one ethnicity in the United States: Hispanic, Latino, or Spanish origin. Though recent attempts have been made to include Middle Eastern or North African (MENA) as an ethnicity, this has not made its way onto Census surveys. For the purpose of simplicity and gender inclusion, this indicator uses the term Latinx or non-Latinx in reference to people in or out of this ethnic group as defined by the U.S. Census Bureau data. Additionally, the race question on the ACS was revised in 2008 to make it consistent with the Census 2010 race question. This makes comparability with earlier years difficult.</p><p>Income was adjusted to 2017 dollars according to <a href="https://www.census.gov/programs-surveys/acs/guidance/comparing-acs-data/2017.html" rel="external">Census Bureau guidance</a> on comparing income data from ACS 1 year values with previous ACS releases and the 2000 decennial. Users should be aware that the 2000 decennial asked about income from 1999 and the ACS asks respondents for income in the past 12 months. This means at least some of respondents' income will likely be received in the year prior to the year the respondent was surveyed.</p><p>In order to estimate median income values at aggregate geographies—the DVRPC region, New Jersey Counties, and Pennsylvania Suburban Counties—weighted averages of groups making up for people of color and white, non-Latinx population were used across component counties.</p><p>While county-level data is presented, counties with higher populations of people of color will be most reliable. Counties with fewer people of color will have larger margins of error and suspect results due to smaller sample sizes. One way this may manifest itself to Tracking Progress users is in volatile trend lines in the charts. Some counties' income gap values are close to or below zero in one year and have larger swings in income gaps in prior and/or subsequent years. These tend to be counties with fewer people of color in their overall population. In 2017, the estimated percentage of people of color are as follows (in order of greatest to least):</p><ol><li>Philadelphia County (65.5%)</li><li>Mercer County (50.8%)</li><li>Camden County (43.7%)</li><li>Delaware County (33.3%)</li><li>Burlington County (32.7%)</li><li>Montgomery County (24.4%)</li><li>Gloucester County (21.6%)</li><li>Chester County (20.6%)</li><li>Bucks County (16.0%)</li></ol><p>The Racial/Ethnic Segregation Index in the third chart is an indicator of how segregated the region's census tracts are, relative to the regional distribution of white, non-Latinx population and people of color and Latinx population. In a given year, it shows how dissimilar the racial and ethic makeup of tracts across the region are to each other and demonstrates the percent of the population that would theoretically need to relocate in order to match the region's racial and ethnic makeup.</p><p>Gaps in <em>labor force participation rates</em> (percent of those 16 to 64 years who are either employed or seeking work relative to all 16 to 64 year-olds) by race are examined in the fourth chart. Similarly, the actual participation rates of whites and people of color are seen in the fifth chart. Here too, the population size of the people of color in each county that the ACS can draw from for a sample is important. It is possible for people of color to have a higher rate than whites, but trendlines that are highly variable from year-to-year are suspect. Gloucester, Bucks, and Chester counties' labor force participation data were not disclosed for these groups in the 2005 ACS 1 year estimates as a result.</p><p>The Latinx population on a county level is so low in our region that labor force participation rates were suppressed for most years in most counties. Therefore Latinx & Non-Latinx are not presented.</p>`,
            how: `<p>The gap in median income between the region's residents of color and white, non-Latinx residents is wide—it stood at just over $30,000 in 2017—and it has dropped marginally (a little over $2,000 or 6.8 percent) from 2000 to 2017. On average, people of color's income was less than two thirds white, non-Latinx income 2017. Regionally, white, non-Latinx workers average $84,352 in yearly income while people of color average $54,233.</p><p>Racial and ethic segregation among neighborhoods in the region is on the decline. Comparing the concentrations of people of color and Latinx vs. white, non-Latinx in each tract relative to the region's overall racial and ethnic make-up, neighborhoods are diversifying. While theoretical, in 1990, 68.6 percent of the region's population would have needed to relocate in order to evenly distribute people of color throughout the region. By 2017, the percentage dropped to 54.5. This value still reflects a region where a high percentage of neighborhoods are comprised of persons of the same race and ethnicity. There are wonderful things that occur in neighborhoods that share common cultures, nevertheless diversity has been shown to improve quality of life for everyone.</p><p>The gap in labor force participation between working age whites and people of color is also on the decline. This is due to a slight decline in the white participation rate and slight increase in the rate of people of color. Whites went from 67.2 percent participation in 2005 to 65.4 percent in 2017. People of color went from 61.6 percent to 62.4 percent in 2017.</p>`,
            resource: `<p>For more on how DVRPC incorporates equity, environmental justice, and complies with federal Title VI and other important statutes protecting communities of concern, see our <a href="/GetInvolved/TitleVI/">Title VI and Environmental Justice page</a>, as well as our <a href="/webmaps/IPD/">Indicators of Potential Disadvantage (IPD) tool</a> and <a href="/ETA/">Equity through Access (ETA) project and tool</a>.<p>DVRPC's <a href="/Connections2045/MIT/">Municipal Implementation Toolbox</a> suggests the following tools for reducing disparities and discrimination in the region:</p><ul><li><a href="/Connections2045/MIT/toolpage.html?tool=5c929a05e7179a0e4089fae5">Revitalization Planning and Programs</a></li><li><a href="/Connections2045/MIT/toolpage.html?tool=5bf42b41e7179a56e2137853">Housing Maintenance and Rehabilitation Programs</a></li><li><a href="/Connections2045/MIT/toolpage.html?tool=5bf43443e7179a56e2137e76">Inclusionary Zoning</a></li><li><a href="/Connections2045/MIT/toolpage.html?tool=5cb77b58fb6fc041ab93009c">Minority- and Women-Owned Business Resources</a></li><li><a href="/Connections2045/MIT/toolpage.html?tool=5cb77a80fb6fc041ab930040">Human Capital Investments</a></li><li><a href="/Connections2045/MIT/toolpage.html?tool=5bf43404e7179a56e2137e25">Community Shuttle Programs</a></li><li><a href="/Connections2045/MIT/toolpage.html?tool=5bf43435e7179a56e2137e73">Universal Pre-Kindergarten Programs</a></li><li><a href="/Connections2045/MIT/toolpage.html?tool=5cb7840afb6fc041ab93097e">Engaging Underserved Communities</a></li></ul>`
        }
    },
    'Income Disparities': {
        file: 'incomeDisparities.html',
        d3: [
            {
                type: 'line',
                container: 'chart',
                dataSource: ['IncomeQuintileTopBottomGap'],
                context: {
                    labels: ['Growth Rate Difference'],
                    keepLabels: false,
                    units: ['percent'],
                    keepUnits: true
                },
                columnOptions: [
                    ['Region'],
                    ['PASubCos'],
                    ['NJCos'],
                    ['BuckCo'],
                    ['ChesCo'],
                    ['DelCo'],
                    ['MontCo'],
                    ['BurlCo'],
                    ['CamdCo'],
                    ['GloCo'],
                    ['MerCo'],
                    ['PhilCo']
                ],
                data: [
                    {
                        'key': 'DVRPC Region',
                        columns: ['year', 'Region']
                    }
                ]
            },
            {
                type: 'line',
                container: 'chart2',
                dataSource: ['IncomeQuintilesMean', 'IncomeQuintilesAbs', 'IncomeQuintilesPct'],
                context: {
                    labels: ['Dollars (2017)', 'Change in Dollars (2017)', 'Percent Change in Dollars (2017)'],
                    keepLabels: false,
                    units: ['thousands', 'thousands', 'percent'],
                    keepUnits: false
                },
                columnOptions: [
                    ['Region_1st', 'Region_2nd', 'Region_3rd', 'Region_4th', 'Region_5th'],
                    ['PhilCo_1st', 'PhilCo_2nd', 'PhilCo_3rd', 'PhilCo_4th', 'PhilCo_5th'],
                    ['NJCos_1st', 'NJCos_2nd', 'NJCos_3rd', 'NJCos_4th', 'NJCos_5th'],
                    ['BuckCo_1st', 'BuckCo_2nd', 'BuckCo_3rd', 'BuckCo_4th', 'BuckCo_5th'],
                    ['ChesCo_1st', 'ChesCo_2nd', 'ChesCo_3rd', 'ChesCo_4th', 'ChesCo_5th'],
                    ['DelCo_1st', 'DelCo_2nd', 'DelCo_3rd', 'DelCo_4th', 'DelCo_5th'],
                    ['MontCo_1st', 'MontCo_2nd', 'MontCo_3rd', 'MontCo_4th', 'MontCo_5th'],
                    ['BurlCo_1st', 'BurlCo_2nd', 'BurlCo_3rd', 'BurlCo_4th', 'BurlCo_5th'],
                    ['CamdCo_1st', 'CamdCo_2nd', 'CamdCo_3rd', 'CamdCo_4th', 'CamdCo_5th'],
                    ['GloCo_1st', 'GloCo_2nd', 'GloCo_3rd', 'GloCo_4th', 'GloCo_5th'],
                    ['MerCo_1st', 'MerCo_2nd', 'MerCo_3rd', 'MerCo_4th', 'MerCo_5th']
                ],
                data: [
                    {
                        'key': '1st Quintile',
                        columns: ['Year', 'Region_1st']
                    },
                    {
                        'key': '2nd Quintile',
                        columns: ['Year', 'Region_2nd']
                    },
                    {
                        'key': '3rd Quintile',
                        columns: ['Year', 'Region_3rd']
                    },
                    {
                        'key': '4th Quintile',
                        columns: ['Year', 'Region_4th']
                    },
                    {
                        'key': '5th Quintile',
                        columns: ['Year', 'Region_5th']
                    }
                ]
            },
            {
                type: 'line',
                container: 'chart3',
                dataSource: ['IncomeSegregation'],
                context: {
                    labels: ['Population Needing to Move to Achieve Regional Distribution'],
                    keepLabels: true,
                    units: ['percent'],
                    keepUnits: true
                },
                data: [
                    {
                        'key': 'Segregation Index',
                        columns: ['year', 'LowIncome']
                    }
                ]
            }
        ],
        text: {
            why: `<p>All residents of the region should have the opportunity to participate and thrive in our economy and their communities, but too often the opportunities available fall short of supporting individuals and families. Without an inclusive economy, economic growth remains out of reach. Studies show that when the top 20 percent of earners increase incomes by one percent, gross domestic product (GDP) falls, but if the bottom 20 percent receive a one percent gain in income, GDP increases. When neighborhoods diversify in income levels, significant gains are seen in critical resources like public education, parks and open space, and infrastructure, and children see new opportunities they might not if they were growing up in more income-segregated spaces.</p>`,
            what: `<p>The American Community Survey (ACS) reports household income by the average of each income quintile. Here a quintile is any fifth of households sorted from least to greatest income. The first quintile is bottom 20 percent of households by income, the second quintile contains households between 20 and 40 percentiles of income—the next 20 percent—and so on. The fifth quintile is the top 20 percent of households by income. Within this group, and also reported in the ACS, is the top 5 percent of households. The first chart reports the gap (or difference) between the percent change in first (lowest income) and fifth (highest income) quintiles since 2006. The second chart displays all quintiles along with the top 5 percent of households (the top end of the fifth quintile). Toggle between the average income of each set of households as well as the change and the percent change in those incomes since 2006. Particularly for counties with smaller populations, or for those quintiles within a county where the ACS got a poor sample in a given year, trend lines will be subject to more variability due to data reliability issues. Users should use caution interpreting results.</p><p>Income was adjusted to 2017 dollars according to <a href="https://www.census.gov/programs-surveys/acs/guidance/comparing-acs-data/2017.html" rel="external">Census Bureau guidance</a> on comparing income data from ACS 1 year values with previous ACS releases. Users should be aware that the ACS asks respondents for income in the past 12 months. This means at least some of respondents' income will likely be received in the year prior to the year the respondent was surveyed, making inflation adjustments slightly more muddled than if the survey had asked for income from the prior calendar year the way the decennial census used to.</p><p>The Income Segregation Index in the third chart is an indicator of how segregated the region's census tracts are, relative to the regional distribution of low income households vs the rest. <em>Low income</em> is defined as households below 200 percent of the federal poverty rate. In a given year, it shows how dissimilar the income makeup of tracts across the region are to each other and demonstrates what percent of the population would need to relocate in order to match the regional income distribution. The index uses decennial census tract data for 1990 and 2000. ACS 5-year period estimates for subsequent tract analysis, reporting the final year of the period as the data year (e.g. 2010 is a period estimate for 2006-2010 based on households surveyed in those years).</p>`,
            how: `<p>In just eleven years the growth rate between the lowest and highest quintile income households has diverged by 25 percent, regionally. First quintile households' income averaged $16,576 a year in 2006 and dropped by $1,991, or 13.7 percent, to $14,585 by 2017. Meanwhile the fifth quintile average income went from $221,835 a year to $250,205 a year, a gain of over $28,000—almost twice as much as the average first quintile household made in 2017—or 11.3 percent of what they took in in 2006. In this same period, the average second quintile household also lost income ($1,776 or 4.3 percent since 2006) and the average third quintile household's annual intake was stagnant.</p><p>All groups were impacted by the great recession, but the highest earners had a shorter period of losses and quickly recovered. By 2010 all quintiles made the same or less than they had in 2006, but it only took the highest quintile until 2012 to recoup those losses. It took the fourth quintile until 2015. The third quintile barely surpassed 2006 income by 2017 and the second and first don't show signs of recovery, at least in the near term. The first quintile seemed to be recovering from 2012 to 2015, then had two steep drops in 2016 and 2017, resulting in their lowest income in the entire period.</p><p>In 2017, a family was just as likely to live near a family of a similar income level as they were in 1990. Income segregation in the region has been stagnant for the last three decades. Comparing the concentrations of low income households vs. the rest in each tract relative to the region's overall income split, the income segregation index shows that, theoretically, 42 percent of the region's population would have to relocate in order to see an even distribution of low income households throughout the region.</p>`,
            resource: `<p>For more on how DVRPC incorporates equity, environmental justice, and complies with federal Title VI and other important statutes protecting communities of concern, see our <a href="/GetInvolved/TitleVI/">Title VI and Environmental Justice page</a>, as well as our <a href="/webmaps/IPD/">Indicators of Potential Disadvantage (IPD) tool</a> and <a href="/ETA/">Equity through Access (ETA) project and tool</a>.</p><p>DVRPC's <a href="/Connections2045/MIT/">Municipal Implementation Toolbox</a> suggests the following tools for reducing income disparities by increasing economic opportunities or making the most of limited income so it is less of a setback for individuals and families:</p><ul><li><a href="/Connections2045/MIT/toolpage.html?tool=5bf42b77e7179a56e2137867">Build Missing Middle Housing</a></li><li><a href="/Connections2045/MIT/toolpage.html?tool=5bf42b41e7179a56e2137853">Housing Maintenance &amp; Rehabilitation Programs</a></li><li><a href="/Connections2045/MIT/toolpage.html?tool=5cb77a06fb6fc041ab92ffe3">Business Incubators</a></li><li><a href="/Connections2045/MIT/toolpage.html?tool=5cb77b58fb6fc041ab93009c">Minority- And Women-Owned Business Resources</a></li><li><a href="/Connections2045/MIT/toolpage.html?tool=5cb77a80fb6fc041ab930040">Human Capital Investments</a></li><li><a href="/Connections2045/MIT/toolpage.html?tool=5bf4341de7179a56e2137e39">Accessory Dwelling Units</a></li><li><a href="/Connections2045/MIT/toolpage.html?tool=5bf43435e7179a56e2137e73">Universal Pre-Kindergarten Programs</a></li></ul>`
        }
    },
    'Sex Disparities': {
        file: 'sexDisparities.html',
        d3: [
            {
                type: 'line',
                container: 'chart',
                dataSource: ['sexInc_wide_difference', 'sexInc_wide_ratio'],
                context: {
                    labels: ['2017 dollars($)'],
                    keepLabels: true,
                    units: ['thousands'],
                    keepUnits: true
                },
                columnOptions: [
                    ['Region'],
                    ['NJ Suburban Counties'],
                    ['Bucks'],
                    ['Chester'],
                    ['Delaware'],
                    ['Montgomery'],
                    ['Burlington'],
                    ['Camden'],
                    ['Gloucester'],
                    ['Mercer']
                ],
                data: [
                    {
                        'key': 'Difference',
                        columns: ['year', 'Region']
                    }
                ]
            },
            {
                type: 'line',
                container: 'chart2',
                dataSource: ['sexInc_wide'],
                context: {
                    labels: ['2017 dollars($)'],
                    keepLabels: true,
                    units: ['thousands'],
                    keepUnits: true
                },
                columnOptions: [
                    ['Region_FemaleMed', 'Region_MaleMed'],
                    ['NJ Suburban Counties_FemaleMed', 'NJ Suburban Counties_MaleMed'],
                    ['Bucks_FemaleMed', 'Bucks_MaleMed'],
                    ['Chester_FemaleMed', 'Chester_MaleMed'],
                    ['Delaware_FemaleMed', 'Delaware_MaleMed'],
                    ['Montgomery_FemaleMed', 'Montgomery_MaleMed'],
                    ['Burlington_FemaleMed', 'Burlington_MaleMed'],
                    ['Camden_FemaleMed', 'Camden_MaleMed'],
                    ['Gloucester_FemaleMed', 'Gloucester_MaleMed'],
                    ['Mercer_FemaleMed', 'Mercer_MaleMed']
                ],
                data: [
                    {
                        'key': 'Female',
                        columns: ['year', 'Region_FemaleMed']
                    },
                    {
                        'key': 'Male',
                        columns: ['year', 'Region_MaleMed']
                    }
                ]
            },
            {
                type: 'line',
                container: 'chart3',
                dataSource: ['labForceBySex_wide'],
                context: {
                    labels: false,
                    units: ['percent'],
                    keepUnits: true
                },
                columnOptions: [
                    ['Region_difference'],
                    ['NJ Suburban Counties_difference'],
                    ['PA Suburban Counties_difference'],
                    ['Bucks_difference'],
                    ['Chester_difference'],
                    ['Delaware_difference'],
                    ['Montgomery_difference'],
                    ['Burlington_difference'],
                    ['Camden_difference'],
                    ['Gloucester_difference'],
                    ['Mercer_difference'],
                    ['Philadelphia_difference']
                ],
                data: [
                    {
                        'key': 'Male to Female Gap',
                        columns: ['year', 'Region_difference']
                    }
                ]
            },
            {
                type: 'line',
                container: 'chart4',
                dataSource: ['labForceBySex_wide'],
                context: {
                    labels: false,
                    units: ['percent'],
                    keepUnits: true
                },
                columnOptions: [
                    ['Region_labMl', 'Region_labFm'],
                    ['NJ Suburban Counties_labMl', 'NJ Suburban Counties_labFm'],
                    ['PA Suburban Counties_labMl', 'PA Suburban Counties_labFm'],
                    ['Bucks_labMl', 'Bucks_labFm'],
                    ['Chester_labMl', 'Chester_labFm'],
                    ['Delaware_labMl', 'Delaware_labFm'],
                    ['Montgomery_labMl', 'Montgomery_labFm'],
                    ['Burlington_labMl', 'Burlington_labFm'],
                    ['Camden_labMl', 'Camden_labFm'],
                    ['Gloucester_labMl', 'Gloucester_labFm'],
                    ['Mercer_labMl', 'Mercer_labFm'],
                    ['Philadelphia_labMl', 'Philadelphia_labFm'],
                ],
                data: [
                    {
                        'key': 'Male',
                        columns: ['year', 'Region_labMl']
                    },
                    {
                        'key': 'Female',
                        columns: ['year', 'Region_labFm']
                    }
                ]
            }
        ]
    },
    'Roadway Reliability': {
        file: 'roadwayReliability.html',
        d3: [
            {
                type: 'line',
                container: 'chart',
                dataSource: ['roadwayreliability24'],
                context: {
                    labels: ['Roadway Reliability Index'],
                    keepLabels: true,
                    units: ['singles'],
                    keepUnits: true
                },
                columnOptions: [
                    ['DVRPCFree24', 'PACosFree24', 'NJCosFree24', 'PASubCosFree24', 'BucFree24', 'BurlFree24', 'CamFree24', 'ChesFree24', 'DelFree24', 'GloFree24', 'MerFree24', 'MontFree24', 'PhilFree24'],
                    ['DVRPCLoca24', 'PACosLoca24', 'NJCosLoca24', 'PASubCosLoca24', 'BucLoca24', 'BurlLoca24', 'CamLoca24', 'ChesLoca24', 'DelLoca24', 'GloLoca24', 'MerLoca24', 'MontLoca24', 'PhilLoca24']
                ],
                data: [
                    {
                        'key': 'DVRPC',
                        columns: ['Year', 'DVRPCFree24']
                    },
                    {
                        'key': 'NJ Counties',
                        columns: ['Year', 'NJCosFree24'],
                        disabled: true
                    },
                    {
                        'key': 'PA Counties',
                        columns: ['Year', 'PACosFree24'],
                        disabled: true
                    },
                    {
                        'key': 'PA Suburban Counties',
                        columns: ['Year', 'PASubCosFree24'],
                        disabled: true
                    },
                    {
                        'key': 'Bucks Co',
                        columns: ['Year', 'BucFree24'],
                        disabled: true
                    },
                    {
                        'key': 'Burlington Co',
                        columns: ['Year', 'BurlFree24'],
                        disabled: true
                    },
                    {
                        'key': 'Camden Co',
                        columns: ['Year', 'CamFree24'],
                        disabled: true
                    },
                    {
                        'key': 'Chester Co',
                        columns: ['Year', 'ChesFree24'],
                        disabled: true
                    },
                    {
                        'key': 'Delaware Co',
                        columns: ['Year', 'DelFree24'],
                        disabled: true
                    },
                    {
                        'key': 'Gloucester Co',
                        columns: ['Year', 'GloFree24'],
                        disabled: true
                    },
                    {
                        'key': 'Mercer Co',
                        columns: ['Year', 'MerFree24'],
                        disabled: true
                    },
                    {
                        'key': 'Montgomery Co',
                        columns: ['Year', 'MontFree24'],
                        disabled: true
                    },
                    {
                        'key': 'Philadelphia Co',
                        columns: ['Year', 'PhilFree24'],
                        disabled: true
                    }
                ]
            },
            {
                type: 'line',
                container: 'chart2',
                dataSource: ['roadwayreliablilityTOD_Fwy', 'roadwayreliablilityTOD_Local'],
                context: {
                    labels: ['Roadway Reliability Index'],
                    keepLabels: true,
                    units: ['singles'],
                    keepUnits: true
                },
                columnOptions: [
                    ['DVRPCAM', 'DVRPCMD', 'DVRPCPM', 'DVRPCNT'],
                    ['NJCosAM', 'NJCosMD', 'NJCosPM', 'NJCosNT'],
                    ['PACosAM', 'PACosMD', 'PACosPM', 'PACosNT'],
                    ['PASubCosAM', 'PASubCosMD', 'PASubCosPM', 'PASubCosNT'],
                    ['BucAM', 'BucMD', 'BucPM', 'BucNT'],
                    ['BurlAM', 'BurlMD', 'BurlPM', 'BurlNT'],
                    ['CamAM', 'CamMD', 'CamPM', 'CamNT'],
                    ['ChesAM', 'ChesMD', 'ChesPM', 'ChesNT'],
                    ['DelAM', 'DelMD', 'DelPM', 'DelNT'],
                    ['GloAM', 'GloMD', 'GloPM', 'GloNT'],
                    ['MerAM', 'MerMD', 'MerPM', 'MerNT'],
                    ['MontAM', 'MontMD', 'MontPM', 'MontNT'],
                    ['PhilAM', 'PhilMD', 'PhilPM', 'PhilNT']
                ],
                data: [
                    {
                        'key': 'AM',
                        columns: ['Year', 'DVRPCAM']
                    },
                    {
                        'key': 'MD',
                        columns: ['Year', 'DVRPCMD']
                    },
                    {
                        'key': 'PM',
                        columns: ['Year', 'DVRPCPM']
                    },
                    {
                        'key': 'NT',
                        columns: ['Year', 'DVRPCNT']
                    }
                ]
            }
        ],
        text: {
            why: `<p>It's hard to plan a trip when you have no idea how long it will take. Travelers want consistency or dependability in travel times from one day to the next. This is referred to as "travel time reliability." The same peak hours generally occur every weekday, but on any given day, unusual circumstances like crashes, weather, construction activity, or special events can dramatically change the performance of the roadway. When your usual half-hour trip takes an hour and makes you late, it can be frustrating. Data collected by the Federal Highway Administration indicates that non-recurring congestion actually accounts for more hours of delay than the everyday (recurring) congestion that results from road capacity constraints and heavy volumes. A reliable network may still have congestion in peak periods, but will be more easy to predict—ensuring region's residents and goods get to where they are expected to be when they are expected to be there.</p>`,
            what: `<p>Roadway reliability is measured as an index value. It is the ratio of the 95th percentile travel time relative to the free-flow travel time and known as the Planning Time Index (PTI). PTI helps understand the impacts of non-recurring congestion from crashes, weather, and special events. This approximates the extent by which a traveler should add extra time to their trip to ensure on-time arrival at their destination. A value of 1.0 indicates a person can expect free-flow speeds along their route. A 2.0 idex value indicates a traveler should expect the trip could be twice as long as freeflow conditions.</p><p>The data comes from aggregated GPS probe data—data from mobile apps, connected vehicles, and commercial fleets—provided to the RITIS Probe Data Analytics (PDA) Suite by INRIX, a travel data technology company. The PDA Suite was created by a consortium of sponsors including the I-95 Corridor Coalition and The University of Maryland.</p><p>PTI values by regional, subregional, and county are either grouped as freeway facilities, or local roads., "Freeway" reflects roadways segments classified as interstates, turnpikes, and expressways in the PDA Suite. "Local roads" are segments classified as US Routes, State Routes, Parkways, Frontages, and Others. The PDA Suite reports out weekday hourly averages in facility directions (northbound, southbound, eastbound, and westbound) by selected facility types and geographies. Tracking Progress reports an average of these hourly and directional values by facility type, geography, and time period.</p><ul><li>Morning (AM) - 6:00 AM–9:59 AM</li><li>Midday (MD) - 10:00 AM–2:59 PM</li><li>Evening (PM) - 3:00 PM–6:59 PM</li><li>Nighttime (NT) - 7:00 PM–5:59 AM</li><li>Daily - 12:00 AM–11:59 PM</li></ul><span>All values reflect an average weekday.</span><p>While INRIX data collection precedes years reported in Tracking Progress, early years of reporting are highly variable based on a lack of facility coverage. 2011 and onward show higher stability for freeway facilities for most counties and for the region. For local facilities, 2014 and beyond is where values seem most stable due to more widespread facility coverage.</p><p>It's important to note that reliability is susceptible to external forces like the economy. A downturn can make for seeming improvements in reliability, but it's really reflecting fewer and shorter trips in leaner times for households and businesses. This may not be an "improvement" per se.</p>`,
            how: `<p>Regional freeways have held fairly consistent reliability scores on weekdays in recent years. There was a minor decline in Planning Time Index (PTI) values in the period spanning 2011 (1.33) and 2018 (1.30), indicating 2.3 percent greater freeway reliability. The lowest PTI score was 1.28, occurring both in 2012 and 2017. Next to 2011, 2015 was the highest, with a score of 1.32. Local facilities had weekday daily values in a similar range but showed a steady decline of 0.01 each year from 2014 (1.31) to 2018 (1.27).</p><p>Reliability is highly conditional on time-period, however. The second chart shows weekday evening peak period of 3:00 to 7:00 PM is when reliable travel speeds suffer most, particularly on freeways. Down from its peak in 2011 (1.8) 2018 evening peak was 1.70. Weekday morning peak periods average around 1.40 by comparison on freeways and drop to around 1.10 for overnight. Local facilities tend to have less variability by time period, with weekday morning, midday, and evening values around 1.40 to 1.50. Night time is notably lower (averaging 1.11 from 2014 to 2018).</p>`,
            resource: `<p>For more information on transportation system performance and strategies to enhance mobility of people and goods, see DVRPC's <a href="/CongestionManagement/">Congestion Management Process (CMP)</a>. Additionally, DVRPC <a href="/Transportation/TSMO/">Transportation Systems Management and Operations (TSM&amp;O)</a> planning programs preserve capacity and improve security, safety, and reliability of the transportation system. DVRPC's <a href="/Connections2045/MIT/">Municipal Implementation Toolbox</a> suggests the following tools for improving the reliability of the region's roadways:</p><ul><li><a href="/Connections2045/MIT/toolpage.html?tool=5bf43468e7179a56e2137e9b">Multi-Modal Transportation Hubs and Connections</a></li><li><a href="/Connections2045/MIT/toolpage.html?tool=5cb77e73fb6fc041ab9303f5">Shared Mobility Regulatory Framework</a></li><li><a href="/Connections2045/MIT/toolpage.html?tool=5cb782abfb6fc041ab9308f8">Curbside Management</a></li><li><a href="/Connections2045/MIT/toolpage.html?tool=5bf4350be7179a56e2137f2e">Travel Demand Management</a></li></ul>`
        }
    },
    'Exported Goods': {
        file: 'exportedGoods.html',
        d3: [
            {
                type: 'line',
                container: 'chart',
                dataSource: ['Exports'],
                context: {
                    labels: ['Billions of Dollars (2018)'],
                    units: ['singles']
                },
                data: [
                    {
                        'key': 'DVRPC',
                        columns: ['year', 'DVRPC']
                    },
                    {
                        'key': 'PA Counties',
                        disabled: true,
                        columns: ['year', 'PA Counties']
                    },
                    {
                        'key': 'Suburban PA',
                        disabled: true,
                        columns: ['year', 'Suburban PA']
                    },
                    {
                        'key': 'NJ Counties',
                        disabled: true,
                        columns: ['year', 'NJ Counties']
                    },
                    {
                        'key': 'Philadelphia',
                        disabled: true,
                        columns: ['year', 'Philadelphia']
                    },
                    {
                        'key': 'Montgomery County',
                        disabled: true,
                        columns: ['year', 'Montgomery']
                    },
                    {
                        'key': 'Delaware County',
                        disabled: true,
                        columns: ['year', 'Delaware']
                    },
                    {
                        'key': 'Chester County',
                        disabled: true,
                        columns: ['year', 'Chester']
                    },
                    {
                        'key': 'Bucks County',
                        disabled: true,
                        columns: ['year', 'Bucks']
                    },
                    {
                        'key': 'Mercer County',
                        disabled: true,
                        columns: ['year', 'Mercer']
                    },
                    {
                        'key': 'Gloucester County',
                        disabled: true,
                        columns: ['year', 'Gloucester']
                    },
                    {
                        'key': 'Camden County',
                        disabled: true,
                        columns: ['year', 'Camden']
                    },
                    {
                        'key': 'Burlington County',
                        disabled: true,
                        columns: ['year', 'Burlington']
                    }
                ]
            }
        ],
        text: {
            why: `<p>The export of goods and services to international destinations is a key indicator of how a nation or region is performing economically. While Tracking Progress exports data are limited to just goods, they serve to highlight merchandise produced in our region, along with the regions' global reach and contributions to the national economy.</p>`,
            what: `<p>Initial declarations of merchandise export values are reported at the metropolitan and county level by the International Trade Administration using data from the US Census Bureau's Origin of Movement–ZIP code Based Series (OM-ZIP). This represents the exports of goods. Services exports are not included in this dataset.</p><p>Goods exports data reported at the sub-national level rely on initial declarations and do not get updated with subsequent revisions found in national data. Export county is assigned using the address of the United States Principal Party in Interest (USPPI) of record—which is often, but not always the entity producing the merchandise.</p><p>A small portion of the overall metropolitan Core Based Statistical Area (CBSA) export value does not have a county determination. For this analysis, DVRPC assigned this residual CBSA value to counties according to the portion of the CBSA's export value attributable to each county. Values were then adjusted by consumer price index factors to 2017 dollars. Despite inherent errors, these data are a relevant gauge of where the region stands based off previous years. Merchandise export data is available starting in 2012.</p><p><a href="https://www.trade.gov/mas/ian/metroreport/tg_ian_002825.asp" rel="external">Link</a> to International Trade Administration data methodology.</p>`,
            how: `<p>The value of merchandise exports for the region was over $18.2 billion in 2018, a drop of 8.9 percent since 2012. These exports were steady from 2012 through 2014, followed by a decline to about $16.5 billion in 2016. 2017 showed an uptick, over 2016, and 2018 continued this trend with a gain of $1.062 billion. The total regional exports have recovered some value from previous decreases, but remain below the 2013 peak of almost $21.06 billion.</p><p>With exports valued at over $4.2 billion in 2018, Montgomery County leads the region in export activity as it has every year since 2012. In 2018 all of the Pennsylvania suburban counties experienced moderate growth from 2017 to 2018, however, Philadelphia County experienced a small contraction in exports compared with 2017 values. In New Jersey, Gloucester County continued to be the largest merchandise exporter with 2018 exports totaling $2.135 billion.</p><p>Merchandise export data at the industry level is not available for county-level analysis. However, MSA level statistics reveal patterns that are likely contributing to the trends seen in DVRPC counties. The leading industries for merchandise export at MSA level are related to pharmaceutical, basic chemical, and resin manufacturing (NAICS 3254, 3251, and 3252).  Pharmaceutical exports have dropped since 2014 and show only moderate recovery in 2018. Additionally, Petroleum Manufacturing exports have been in a steady decline since 2014. Supplementing these losses are growing exports from industries including Plastics Manufacturing and Medical Equipment and Supplies Manufacturing as well as a rebound in Aerospace Product and Parts Manufacturing.</p>`,
            resource: `<p>For more data on regional trade and freight transportation go to DVRPC's <a href="/webmaps/phillyfreightfinder/">PhillyFreightFinder</a></p><p>DVRPC works with its planning partners on <a href="/Economic/">economic development and analysis</a> in the region, including out <a href="/Economic/CEDS/">Comprehensive Economic Development Strategy (CEDS)</a>.<p>DVRPC's <a href="/Connections2045/MIT/">Municipal Implementation Toolbox</a> suggests the following tools to attract, retain, and grow business opportunities in the region. These may in turn improve the trendline for regional exports:</p><ul><li><a href="/Connections2045/MIT/toolpage.html?tool=5bf42edbe7179a56e2137b04">Economic Development Task Force</a></li><li><a href="/Connections2045/MIT/toolpage.html?tool=5cb77a06fb6fc041ab92ffe3">Business Incubators</a></li><li><a href="/Connections2045/MIT/toolpage.html?tool=5bf42f68e7179a56e2137b5f">Universal Internet Access</a></li><li><a href="/Connections2045/MIT/toolpage.html?tool=5cb77b58fb6fc041ab93009c">Minority- And Women-Owned Business Resources</a></li><li><a href="/Connections2045/MIT/toolpage.html?tool=5cb7796efb6fc041ab92fe9b">Streamlined Permitting Process</a></li></ul>`
        }
    },
    'Commute Mode': {
        file: 'commuteMode.html',
        d3: [
            {
                type: 'line',
                container: 'chart',
                dataSource: ['ResNonSOV','WorkNonSOV'],
                context: {
                    labels: ['Commute Mode Share'],
                    keepLabels: true,
                    units: ['percent'],
                    keepUnits: true
                },
                columnOptions: [
                    ['DVRPCSOV', 'DVRPCNonSOV'],
                    ['PASubSOV', 'PASubNonSOV'],
                    ['NJCosSOV', 'NJCosNonSOV'],
                    ['ChesSOV', 'ChesNonSOV'],
                    ['DelSOV', 'DelNonSOV'],
                    ['MontSOV', 'MontNonSOV'],
                    ['BurlSOV', 'BurlNonSOV'],
                    ['CamdSOV', 'CamdNonSOV'],
                    ['GlocSOV', 'GlocNonSOV'],
                    ['MercSOV', 'MercNonSOV'],
                    ['PhilSOV', 'PhilNonSOV'],
                    ['BuckSOV', 'BuckNonSOV']
                ],
                data: [
                    {
                        'key': 'Drove Alone',
                        columns: ['year', 'DVRPCSOV']
                    },
                    {
                        'key': 'Other Means',
                        columns: ['year', 'DVRPCNonSOV']
                    }
                ]
            },
            {
                type: 'line',
                container: 'chart2',
                dataSource: ['ResNonSOV_multi','WorkNonSOV_multi'], 
                context: {
                    labels: ['Commute Mode Share'],
                    keepLabels: true,
                    units: ['percent'],
                    keepUnits: true
                },
                columnOptions: [
                    ['DVRPCPool', 'DVRPCTransit', 'DVRPCWalk', 'DVRPCBike', 'DVRPCTMO', 'DVRPCWFH', 'DVRPCBus', 'DVRPCRail', 'DVRPCSubw', 'DVRPCTroll', 'DVRPCFerry',  'DVRPCMcyc', 'DVRPCOther', 'DVRPCTaxi'],
                    ['PASubPool', 'PASubTransit', 'PASubWalk', 'PASubBike', 'PASubTMO', 'PASubWFH', 'PASubBus', 'PASubRail', 'PASubSubw', 'PASubTroll', 'PASubFerry',  'PASubMcyc', 'PASubOther', 'PASubTaxi'],
                    ['NJCosPool', 'NJCosTransit', 'NJCosWalk', 'NJCosBike', 'NJCosTMO', 'NJCosWFH', 'NJCosBus', 'NJCosRail', 'NJCosSubw', 'NJCosTroll', 'NJCosFerry',  'NJCosMcyc', 'NJCosOther', 'NJCosTaxi'],
                    ['ChesPool', 'ChesTransit', 'ChesWalk', 'ChesBike', 'ChesTMO', 'ChesWFH', 'ChesBus', 'ChesRail', 'ChesSubw', 'ChesTroll', 'ChesFerry',  'ChesMcyc', 'ChesOther', 'ChesTaxi'],
                    ['DelaPool', 'DelaTransit', 'DelaWalk', 'DelaBike', 'DelaTMO', 'DelaWFH', 'DelaBus', 'DelaRail', 'DelaSubw', 'DelaTroll', 'DelaFerry',  'DelaMcyc', 'DelaOther', 'DelaTaxi'],
                    ['MontPool', 'MontTransit', 'MontWalk', 'MontBike', 'MontTMO', 'MontWFH', 'MontBus', 'MontRail', 'MontSubw', 'MontTroll', 'MontFerry',  'MontMcyc', 'MontOther', 'MontTaxi'],
                    ['BurlPool', 'BurlTransit', 'BurlWalk', 'BurlBike', 'BurlTMO', 'BurlWFH', 'BurlBus', 'BurlRail', 'BurlSubw', 'BurlTroll', 'BurlFerry',  'BurlMcyc', 'BurlOther', 'BurlTaxi'],
                    ['CamdPool', 'CamdTransit', 'CamdWalk', 'CamdBike', 'CamdTMO', 'CamdWFH', 'CamdBus', 'CamdRail', 'CamdSubw', 'CamdTroll', 'CamdFerry',  'CamdMcyc', 'CamdOther', 'CamdTaxi'],
                    ['GlocPool', 'GlocTransit', 'GlocWalk', 'GlocBike', 'GlocTMO', 'GlocWFH', 'GlocBus', 'GlocRail', 'GlocSubw', 'GlocTroll', 'GlocFerry',  'GlocMcyc', 'GlocOther', 'GlocTaxi'],
                    ['MercPool', 'MercTransit', 'MercWalk', 'MercBike', 'MercTMO', 'MercWFH', 'MercBus', 'MercRail', 'MercSubw', 'MercTroll', 'MercFerry',  'MercMcyc', 'MercOther', 'MercTaxi'],
                    ['PhilPool', 'PhilTransit', 'PhilWalk', 'PhilBike', 'PhilTMO', 'PhilWFH', 'PhilBus', 'PhilRail', 'PhilSubw', 'PhilTroll', 'PhilFerry',  'PhilMcyc', 'PhilOther', 'PhilTaxi'],
                    ['BuckPool', 'BuckTransit', 'BuckWalk', 'BuckBike', 'BuckTMO', 'BuckWFH', 'BuckBus', 'BuckRail', 'BuckSubw', 'BuckTroll', 'BuckFerry',  'BuckMcyc', 'BuckOther', 'BuckTaxi']
                ],
                data: [
                    {
                        'key': 'Carpool',
                        columns: ['year', 'DVRPCPool']
                    },
                    {
                        'key': 'Public Transit',
                        columns: ['year', 'DVRPCTransit']
                    },
                    {
                        'key': 'Walked',
                        columns: ['year', 'DVRPCWalk']
                    },
                    {
                        'key': 'Biked',
                        columns: ['year', 'DVRPCBike']
                    },
                    {
                        'key': 'Taxi, Motorcycle or Other',
                        columns: ['year', 'DVRPCTMO']
                    },
                    {
                        'key': 'Worked from Home',
                        columns: ['year', 'DVRPCWFH']
                    },
                    {
                        'key': 'Bus',
                        columns: ['year', 'DVRPCBus'],
                        disabled: true
                    },
                    {
                        'key': 'Railroad',
                        columns: ['year', 'DVRPCRail'],
                        disabled: true
                    },
                    {
                        'key': 'Subway',
                        columns: ['year', 'DVRPCSubw'],
                        disabled: true
                    },
                    {
                        'key': 'Streetcar or Trolley',
                        columns: ['year', 'DVRPCTroll'],
                        disabled: true
                    },
                    {
                        'key': 'Ferryboat',
                        columns: ['year', 'DVRPCFerry'],
                        disabled: true
                    },
                    {
                        'key': 'Motorcycle',
                        columns: ['year', 'DVRPCMcyc'],
                        disabled: true
                    },
                    {
                        'key': 'Other Means',
                        columns: ['year', 'DVRPCOther'],
                        disabled: true
                    },
                    {
                        'key': 'Taxi',
                        columns: ['year', 'DVRPCTaxi'],
                        disabled: true
                    }
                ]
            }
        ],
        text: {
            why: `<p>Increasing the share of people not driving their vehicles alone reduces congestion, lessens roadway maintenance needs, and can significantly decrease the region's carbon footprint. Increases in active modes like walking and biking can benefit public health and lower healthcare costs. Commute trips only make up a fifth of all trips, but is the chief contributor to peak period demand for transportation facilities--which can slow goods movement within, to, from, and through the region's roadways.</p>`,
            what: `<p>Commute mode is regularly tracked by the American Community Survey (ACS) by asking respondents to provide the means of transportation used to travel the longest distance to work last week. A follow-up question asks about vehicle occupancy when "car, truck, van" is selected. This indicator tracks the sum of all individuals not selecting "car, truck, van" with one person in it. Transportation professionals often group travel modes into "single-occupancy vehicles" (SOV) and "non-single-occupancy vehicles" (Non-SOV) because SOVs are a less efficient use of roadway and environmental resources.</p><p>The charts below show the modes and submodes of non-SOV commuters that live and work in the region. Toggle between "Residence" and "Workers" to view those that live in the region and those that work in the region, respectively. The first chart compares the share of workers who drive alone to workers using other means while the second shows the component modes that make up non-SOV commuters. While "worked from home" is not a means of transportation, it is an increasingly important option that lets people opt out of driving.</p><p>Note, that due to survey sample size, the commute mode shares displayed are estimates--each with a margin of error. Estimates may show general trend, but may not be statistically significant when comparing to each other if change is slight - particularly in lower population geographies.</p>`,
            how: `<p>From 2006 to 2017, commuters living in the region have increasingly used alternative options relative to driving alone to work. The non-SOV commute share has increased by 1.5 percent in that period. Commuters working in the region have seen their non-SOV  share increase by only 0.9 percent in the same period. For both the region's residents and workers, the SOV share is very high (71.7 and 79.8 percent, respectively) with a near-flat--albeit downward--trend.</p><p>The second chart shows what is driving the slight increase in non-SOV travel during this period. Public transit and carpool usage continue to be the greatest contributors to non-SOV commutes of the region's residents, but carpool has shown a steady decline (from 9.0 percent in 2006 to 7.6 percent in 2017). Public transit overall, has gained in share from 9.4 percent (2006) to 9.6 percent over the period but peaking at 10.6 percent in 2013. This increase has chiefly been supported by a growing use of commuter rail and subways, but risks future decline if bus ridership continues its steep drop in recent years. Regionally, walking commuters have remained steady at just under four percent. The greatest increase in non-SOV modes in the last eleven years has been the share of telecommuters, going from 3.2 percent to 5.4 percent. Those that worked from home have surpassed those walking and has become the third highest contributor to non-SOV mode share--after carpool and the sum of the modes making up public transit. That increase is expected to continue as technology advances, workplace policies become more flexible, and more individuals opt to work for themselves. Bike commuting still registers under one percent in the region but has doubled since 2006.</p>`,
            resource: `<p>For more resources on alternatives to a drive-alone commute go to our <a href="/CommuterServices/">Commuter Services page</a>.</p><p>DVRPC is always working at improvements through <a href="/Transit/">Transit Planning</a>, <a href="/Transportation/Bicycle/">Bicycle Planning</a>, and <a href="/Transportation/Pedestrian/">Pedestrian Planning</a>.</p><p>DVRPC's Municipal Implementation Toolbox suggests the following tools for improving the region's non-drive-alone trendline:</p><ul><li><a href="/Connections2045/MIT/toolpage.html?tool=5bf42ad8e7179a56e2137827">Transit-Oriented Development (TOD) Zoning</a></li><li><a href="/Connections2045/MIT/toolpage.html?tool=5bf42b29e7179a56e2137849">Smart Location of Public Facilities</a></li><li><a href="/Connections2045/MIT/toolpage.html?tool=5bf43404e7179a56e2137e25">Community Shuttle Programs</a></li><li><a href="/Connections2045/MIT/toolpage.html?tool=5bf43468e7179a56e2137e9b">Multimodal Transportation Hubs & Connections</a></li><li><a href="/Connections2045/MIT/toolpage.html?tool=5cb77e73fb6fc041ab9303f5">Shared Mobility Regulatory Framework</a></li><li><a href="/Connections2045/MIT/toolpage.html?tool=5bf42e6ee7179a56e2137ad8">Complete Streets</a></li><li><a href="/Connections2045/MIT/toolpage.html?tool=5bf4350be7179a56e2137f2e">Travel Demand Management</a></li></ul>`
        }
    },
    'Transit Ridership': {
        file: 'transitRidership.html',
        d3: [
            {
                type: 'line',
                container: 'chart',
                dataSource: ['transit_ridership_graph_1'],
                context: {
                    labels: ['Trips', 'Trips per Capita'],
                    units: ['millions', 'singles'],
                },
                columnOptions: [
                    ['unlinkedTrips'],
                    ['unlinkedTripsPerCap']
                ],
                data: [
                    {
                        'key': 'Unlinked Trips',
                        columns: ['year', 'unlinkedTrips']
                    }
                ]
            },
            {
                type: 'line',
                container: 'chart2',
                dataSource: ['transit_ridership_graph_2'],
                context: {
                    labels: ['Trips', 'Trips per Capita'],
                    units: ['millions', 'singles'],
                },
                columnOptions: [
                    ['Bus', 'Commuter Rail', 'Light Rail', 'Non-Scheduled Services', 'Subway', 'Trolleybus'],
                    ['Bus-per capita', 'Commuter Rail-per capita', 'Light Rail-per capita', 'Non-Scheduled Services-per capita', 'Subway-per capita', 'Trolleybus-per capita']
                ],
                data: [
                    {
                        'key': 'Bus',
                        columns: ['year', 'Bus'],
                    },
                    {
                        'key': 'Commuter Rail',
                        columns: ['year', 'Commuter Rail']
                    },
                    {
                        'key': 'Light Rail',
                        columns: ['year', 'Light Rail']
                    },
                    {
                        'key': 'Non-Scheduled Services',
                        columns: ['year', 'Non-Scheduled Services']
                    },
                    {
                        'key': 'Subway',
                        columns: ['year', 'Subway']
                    },
                    {
                        'key': 'Trolleybus',
                        columns: ['year', 'Trolleybus']
                    }
                ]
            },
            {
                type: 'line',
                container: 'chart3',
                dataSource: ['transit_ridership_graph_3'],
                context: {
                    labels: ['Trips', 'Trips per Capita'],
                    units: ['millions', 'singles'],
                },
                columnOptions: [
                    ['New Jersey Transit', 'PATCO', 'Pottstown Area Rapid Transit', 'SEPTA'],
                    ['New Jersey Transit-per capita', 'PATCO-per capita', 'Pottstown Area Rapid Transit-per capita', 'SEPTA-per capita',]
                ],
                data: [
                    {
                        'key': 'New Jersey Transit',
                        columns: ['year', 'New Jersey Transit']
                    },
                    {
                        'key': 'PATCO',
                        columns: ['year', 'PATCO']
                    },
                    {
                        'key': 'Pottstown Area Rapid Transit',
                        columns: ['year', 'Pottstown Area Rapid Transit']
                    },
                    {
                        'key': 'SEPTA',
                        columns: ['year', 'SEPTA']
                    }
                ]
            }
        ],
        text: {
            why: `<p>Connections 2045 envisions a well-maintained, integrated multimodal transportation network that provides accessibility and equity for all citizens and visitors throughout the region, reduces congestion and auto-dependence, enhances goods movement, and moves the region toward zero roadway deaths. Transit ridership is an important indicator of the health of the region's transportation system and shows how useful the region's residents consider the transit system relative to other modes of transportation.</p>`,
            what: `<p>DVRPC tracks transit ridership in the region through unlinked passenger trips, with data provided by each of the region's four transit operators: Southeastern Pennsylvania Transportation Authority (SEPTA), New Jersey Transit (NJ Transit), Port Authority Transportation Company (PATCO), and Pottstown Area Rapid Transit (PART) to the National Transit Database (NTD). Unlinked passenger trips count each passenger boarding, regardless of fare paid. Thus, a trip with a transfer would count as two boardings. Transit ridership does not include Amtrak or private bus passengers.</p><p>NJ Transit's ridership figures are for the DVRPC region only. These figures are based on service in the Trenton and Philadelphia Urbanized Area collected by the NTD.</p>`,
            how: ``,
            resource: ``
        }
    },
    'Greenhouse Gas Emissions': {
        file: 'emissions.html',
        d3: [
            {
                type: 'line',
                container: 'chart',
                dataSource: ['emissions_1'],
                context: {
                    labels: ['CO2 Equivalent (Millions of Metric Tons)'],
                    keepLabels: true,
                    units: ['singles'],
                    keepUnits: true
                },
                columnOptions: [
                    ['emissions_total'],
                    ['emissions_per_capita']
                ],
                data: [
                    {
                        'key': 'CO2 Equivalent (Millions of Metric Tons)',
                        columns: ['year', 'emissions_total']
                    }
                ]
            },
            {
                type: 'stacked bar',
                container: 'chart2',
                dataSource: ['emissions_2'],
                context: {
                    labels: ['CO2 Equivalent (Millions of Metric Tons)'],
                    units: ['singles'],
                },
                data: [
                    {
                        'key': 'Residential',
                        columns: ['year', 'residential']
                    },
                    {
                        'key': 'Commercial/Industrial',
                        columns: ['year', 'commercial_industrial']
                    },
                    {
                        'key': 'Transportation',
                        columns: ['year', 'transportation']
                    },
                    {
                        'key': 'Other',
                        columns: ['year', 'other']
                    }
                ]
            },
            {
                type: 'stacked bar',
                container: 'chart3',
                dataSource: ['emissions_3'],
                context: {
                    labels: ['Percent of Energy Generation Mix'],
                    units: ['percent']
                },
                data: [
                    {
                        'key': 'Coal',
                        columns: ['year', 'coal']
                    },
                    {
                        'key': 'Oil',
                        columns: ['year', 'oil']
                    },
                    {
                        'key': 'Gas',
                        columns: ['year', 'gas']
                    },
                    {
                        'key': 'Other Fossil Fuels',
                        columns: ['year', 'other_fossil']
                    },
                    {
                        'key': 'Biomass',
                        columns: ['year', 'biomass']
                    },
                    {
                        'key': 'Hydro',
                        columns: ['year', 'hydro']
                    },
                    {
                        'key': 'Nuclear',
                        columns: ['year', 'nuclear']
                    },
                    {
                        'key': 'Wind',
                        columns: ['year', 'wind']
                    },
                    {
                        'key': 'Solar',
                        columns: ['year', 'solar']
                    }
                ]
            },
            {
                type: 'line and scatter',
                container: 'chart4',
                newKeys: true,
                dataSource: ['emissions_4'],
                axisLabel: 'Degrees Farenheit',
                context: {
                    labels: ['Degrees Farenheit', 'Precipitation (inches)', '% of Precipitation from Severe Storms'],
                    keepLabels: false,
                    units: ['singles', 'singles', 'percent'],
                    keepUnits: false
                },
                columnOptions: [
                    ['Temperature - Farenheit', '30 year trend - Temperature'],
                    ['Precipitation', '30 year trend - Precipitation'],
                    ['Precipitation from Severe Storms', '30 year trend - Precipitation from Severe Storms']
                ],
                data: [
                    {
                        'key': 'Temperature',
                        columns: ['year', 'Temperature - Farenheit'],
                        type: 'scatter',
                        yAxis: 1
                    },
                    {
                        'key': '30-year trend',
                        columns: ['year', '30 year trend - Temperature'],
                        type: 'line',
                        yAxis: 1
                    }
                ]
            }
        ],
        text: {
            why: `<p>Severe weather events and changes to our climate due to global warming pose threats to both the environment and the economy. Keeping global temperature change below 2°C (about 4°F) is expected to keep the global climate system stable enough to continue to support human civilization without radical changes to agricultural, transportation, and other systems.</p><p>The global temperature is dependant on the atmospheric concentration of several so-called greenhouse gases (GHGs) in the atmosphere.  The higher the concentration of these gases, the higher the average global temperature.  The concentration of GHGs in the atmosphere has risen at an increasing pace as combustion of fossil fuels has increased since the start of the industrial age.  As a result, global temperatures have risen.  Higher global temperature has changed our climate, with higher local temperatures, increased rainfall, and a rise in sea level due to both water expanding as it warms, and land ice melting. Climate change presents a major equity issue not only globally, but within our region. Those with the resources tend to live in cooler areas of the region, with more vegetation and street trees, and often at higher altitudes where they catch cooler breezes. Wealthier people are also able to afford housing that is better insulated and sealed, and are more likely to have (and be able to afford to use) air conditioning. Lower income people are likely to be disproportionately burdened.</p><p>Reducing global GHG emissions is key to slowing the rise in the concentration of atmospheric GHGs, and thus slowing or even reversing global temperature increases. Many of the actions taken to reduce GHG emissions will not only contribute to avoiding severe global climate change, but will also make our transportation network more efficient, improve air quality, bolster public health, and make the region's communities more livable. An energy efficient regional economy with low GHG emissions will also be more competitive in a world where climate change and energy efficiency are important concerns.</p>`,
            what: `<p>Every 5 years, DVRPC performs a regional energy use and greenhouse gas (GHG) emissions inventory of the Greater Philadelphia region. The inventory looks at energy use and GHG emissions associated with the residential, commercial, transportation, and other sectors of the region. The inventory does not include energy use or GHG emissions associated with the production of imports to the region, other than electricity.</p><p>GHG emissions are generally reported in metric tons of carbon dioxide equivalent (CO<sub>2</sub>e) units. This measure accounts for other gases, such as methane and nitrous oxide, as well as hydrofluorocarbon and perfluorocarbons, that are emitted in smaller amounts than CO<sub>2</sub>, but are more powerful GHGs than carbon dioxide. For example, one metric ton of nitrous oxide has the same effect on global warming as 298 metric tons of carbon dioxide.</p>`,
            how: `<p>DVRPC's long range plan sets a target of reducing greenhouse gas (GHG) emissions by 60 percent from 2005 levels by 2040. By 2015, total regional GHG emissions have been reduced by approximately 21 since 2005 (or 19.1 percent per person), and by approximately 9.9 percent since 2010 (or 11.4 percent per person).  Since 2005, the Fuel Refining, Transmission, and Distribution sector has seen the largest overall reduction in GHG emissions of 55.4 percent,   followed by the Residential,  Commercial/Industrial, and Transportation sectors which showed reductions of 27.4 percent, 16.7 percent and 15.4 percent respectively.</p><p>The largest driver of these reductions was change in the electricity generation mix, primarily the continued switch from coal to natural gas. Energy generation from coal has dropped from 44.9 percent in 2004 to just 17.6 percent in 2016. Because natural gas emits less CO<sub>2</sub> per kWh of electricity produced than coal, the switch has lowered GHG emissions overall. However, because natural gas is still a fossil fuel that produces CO<sub>2</sub> when combusted and the switch from coal to natural gas is mostly complete, further GHG reductions from this source are limited.</p><p>Despite the region's moderate success in reducing GHG emissions, average annual temperatures and precipitation from severe storms continue to rise, highlighting the effects of climate change on the region. These effects will likely continue to worsen without continued efforts to reduce GHG emissions on a regional, national, and global scale.</p>`,
            resource: `<p>For more information go to DVRPC's <a href="/EnergyClimate/Inventory/">Regional Energy Use and Greenhouse Gas Emissions Inventory</a> and <a href="/EnergyClimate/CCMIT/">Climate Projections for the DVRPC Region</a>.</p><p>DVRPC's <a href="/Connections2045/MIT/">Municipal Implementation Toolbox</a> suggests the following tools for communities to contribute to global efforts to reduce and mitigate against climate change:</p><ul><li><a href="/Connections2045/MIT/toolpage.html?tool=5cb77cbffb6fc041ab930149">Greenhouse Gas Reduction Targets and Climate Action Plans</a></li><li><a href="/Connections2045/MIT/toolpage.html?tool=5cb77d3efb6fc041ab930194">Alternative Energy Ordinances</a></li><li><a href="/Connections2045/MIT/toolpage.html?tool=5cb77dd3fb6fc041ab93034b">Energy-Efficient Buildings</a></li><li><a href="/Connections2045/MIT/toolpage.html?tool=5bf42b07e7179a56e213783b">Parking Management</a></li><li><a href="/Connections2045/MIT/toolpage.html?tool=5cb782abfb6fc041ab9308f8">Curbside Management</a></li><li><a href="/Connections2045/MIT/toolpage.html?tool=5bf4350be7179a56e2137f2e">Travel Demand Management</a></li></ul>`
        }
    },
    'Transit Conditions': {
        file: 'transitConditions.html',
        d3: [
            {
                type: 'line',
                container: 'chart',
                dataSource: ['transit_conditions_graph_1'],
                context: {
                    labels: ['Years Old'],
                    keepLabels: true,
                    units: false
                },
                columnOptions: [
                    ['All Agencies- All Vehicles', 'All Agencies- Buses', 'All Agencies- Rail Vehicles'],
                    ['NJ Transit- All Vehicles', 'NJ Transit- Buses', 'NJ Transit- Rail Vehicles'],
                    ['', 'PART- Buses', ''],
                    ['', '', 'PATCO- Rail Vehicles'],
                    ['SEPTA- All Vehicles', 'SEPTA- Buses', 'SEPTA- Rail Vehicles']
                ],
                data: [
                    {
                        'key': 'All Vehicles',
                        columns: ['year', 'All Agencies- All Vehicles']
                    },
                    {
                        'key': 'Buses',
                        columns: ['year', 'All Agencies- Buses']
                    },
                    {
                        'key': 'Rail Vehicles',
                        columns: ['year', 'All Agencies- Rail Vehicles']
                    }
                ]
            },
            {
                type: 'stacked bar',
                container: 'chart2',
                dataSource: ['transit_conditions_graph_2'],
                context: {
                    labels: ['Number of Vehicles'],
                    keepLabels: true,
                    units: false
                },
                columnOptions: [
                    [ 'All Agencies- age_0_5', 'All Agencies- age_6_11', 'All Agencies- age_12_15', 'All Agencies- age_16_20', 'All Agencies- age_21_25', 'All Agencies- age_25over'],
                    [ 'NJ Transit- age_0_5', 'NJ Transit- age_6_11', 'NJ Transit- age_12_15', 'NJ Transit- age_16_20', 'NJ Transit- age_21_25', 'NJ Transit- age_25over'],
                    [ 'PATCO- age_0_5', 'PATCO- age_6_11', 'PATCO- age_12_15', 'PATCO- age_16_20', 'PATCO- age_21_25', 'PATCO- age_25over'],
                    [ 'SEPTA- age_0_5', 'SEPTA- age_6_11', 'SEPTA- age_12_15', 'SEPTA- age_16_20', 'SEPTA- age_21_25', 'SEPTA- age_25over']
                ],
                data: [
                    {
                        'key': 'Age (0-5)',
                        columns: ['year', 'All Agencies- age_0_5']
                    },
                    {
                        'key': 'Age (6-11)',
                        columns: ['year', 'All Agencies- age_6_11']
                    },
                    {
                        'key': 'Age (12-15)',
                        columns: ['year', 'All Agencies- age_12_15']
                    },
                    {
                        'key': 'Age (16-20)',
                        columns: ['year', 'All Agencies- age_16_20']
                    },
                    {
                        'key': 'Age (21-25)',
                        columns: ['year', 'All Agencies- age_21_25']
                    },
                    {
                        'key': 'Age (25+)',
                        columns: ['year', 'All Agencies- age_25over']
                    }
                ]
            },
            {
                type: 'stacked bar',
                container: 'chart3',
                dataSource: ['transit_conditions_graph_3'],
                context: {
                    labels: ['Number of Vehicles'],
                    keepLabels: true,
                    units: false
                },
                columnOptions: [
                    [ 'All Agencies- age_0_5', 'All Agencies- age_6_11', 'All Agencies- age_12_15', 'All Agencies- age_16_20', 'All Agencies- age_21_25', 'All Agencies- age_25over'],
                    [ 'NJ Transit- age_0_5', 'NJ Transit- age_6_11', 'NJ Transit- age_12_15', 'NJ Transit- age_16_20', 'NJ Transit- age_21_25', 'NJ Transit- age_25over'],
                    [ 'PART- age_0_5', 'PART- age_6_11', 'PART- age_12_15', 'PART- age_16_20', 'PART- age_21_25', 'PART- age_25over'],
                    [ 'SEPTA- age_0_5', 'SEPTA- age_6_11', 'SEPTA- age_12_15', 'SEPTA- age_16_20', 'SEPTA- age_21_25', 'SEPTA- age_25over']
                ],
                data: [
                    {
                        'key': 'Age (0-5)',
                        columns: ['year', 'All Agencies- age_0_5']
                    },
                    {
                        'key': 'Age (6-11)',
                        columns: ['year', 'All Agencies- age_6_11']
                    },
                    {
                        'key': 'Age (12-15)',
                        columns: ['year', 'All Agencies- age_12_15']
                    },
                    {
                        'key': 'Age (16-20)',
                        columns: ['year', 'All Agencies- age_16_20']
                    },
                    {
                        'key': 'Age (21-25)',
                        columns: ['year', 'All Agencies- age_21_25']
                    },
                    {
                        'key': 'Age (25+)',
                        columns: ['year', 'All Agencies- age_25over']
                    }
                ]
            }
        ]
    },
    'Innovation': {
        file: 'innovation.html',
        d3: [
            {
                type: 'line',
                container: 'chart',
                dataSource: ['patents'],
                context: {
                    labels: ['Approvals'],
                    units: ['thousands']
                },
                data: [
                    {
                        'key': 'Patent Approvals',
                        columns: ['Year', 'DVRPC']
                    }
                ]
            }
        ],
        text: {
            why: `<p>Innovation is critical for a healthy regional economy. If local industries and economic development entities capitalize on them, goods and services invented in the region can grow into start-ups and job opportunities that stay in the region. Research institutions, and other research and development outfits can play a big role in innovation creation and growth in the region.</p>`,
            what: `<p>Utility patents are patents covering the creation of or improvements to machines, processes, or products. Location data for utility patents have been provided by the US Patent Office, dating back to 1998, but are limited to the residential address of the first named author. If a resident of the region is not named first on a patent with a first named author residing outside the region, that patent will not be allocated in Greater Philadelphia—even if it is relevant to innovation in the region. Street addresses are not provided, only mailing address city and state, making precise patent holder location more difficult. As a result, only regional geography is shown in the chart below.</p>`,
            how: `<p>Among the years for which data is available, patent approvals allocated to the region by residence of first named authors were at a near peak in 2017,  with 2,707 approvals—just 20 fewer than in 2014 and a 28.7 percent increase from 1998. After a dip to 1,373 approval in 2005, regional approvals made their way back to the late 1990s and early 2000s levels in 2010 and has remained above 2,200 since 2012.</p>`,
            resource: `<p>For more economic indicators and strategies, see the <a href="/Economic/CEDS/">Comprehensive Economic Development Strategy (CEDS)</a>.</p><p>DVRPC's <a href="/Connections2045/MIT/">Municipal Implementation Toolbox</a> suggests the following tools to help bolster innovation and start-ups in the region:</p><ul><li><a href="/Connections2045/MIT/toolpage.html?tool=5bf42edbe7179a56e2137b04">Economic Development Task Force</a></li><li><a href="/Connections2045/MIT/toolpage.html?tool=5cb77a06fb6fc041ab92ffe3">Business Incubators</a></li><li><a href="/Connections2045/MIT/toolpage.html?tool=5bf42f68e7179a56e2137b5f">Broadband (Universal Access)</a></li><li><a href="/Connections2045/MIT/toolpage.html?tool=5cb77b58fb6fc041ab93009c">Minority- and Women-Owned Business Resources</a></li><li><a href="/Connections2045/MIT/toolpage.html?tool=5cb77a80fb6fc041ab930040">Human Capital Investments</a></li></ul>`
        }
    },
    'Population Growth': {
        file: 'populationGrowth.html',
        d3: [
            {
                type: 'line',
                container: 'chart',
                dataSource: ['popGrowth'],
                context: {
                    labels: ['Change in Population', 'Total Population (Thousands)', 'Percent Change in Population'],
                    units: ['thousands', 'thousands', 'percent']
                },
                columnOptions: [
                    ['Core','DevCom','GroSub','Rural','Burlington','Camden','Gloucester','Mercer','Bucks','Chester','Delaware','Montgomery','Philadelphia','NJCnt','PASub','DVRPC'],
                    ['Core-count','DevCom-count','GroSub-count','Rural-count','Burlington-count','Camden-count','Gloucester-count','Mercer-count','Bucks-count','Chester-count','Delaware-count','Montgomery-count','Philadelphia-count','NJCnt-count','PASub-count','DVRPC-count'],
                    ['Core-perc','DevCom-perc','GroSub-perc','Rural-perc','Burlington-perc','Camden-perc','Gloucester-perc','Mercer-perc','Bucks-perc','Chester-perc','Delaware-perc','Montgomery-perc','Philadelphia-perc','NJCnt-perc','PASub-perc','DVRPC-perc']
                ],
                data: [
                    {
                        'key': 'DVRPC',
                        columns: ['Year', 'DVRPC']
                    },
                    {
                        'key': 'PA Suburbs',
                        disabled: true,
                        columns: ['Year', 'PASub']
                    },
                    {
                        'key': 'NJ Counties',
                        disabled: true,
                        columns: ['Year', 'NJCnt']
                    },
                    {
                        'key': 'Core City',
                        disabled: true,
                        columns: ['Year', 'Core']
                    },
                    {
                        'key': 'Developed Community',
                        disabled: true,
                        columns: ['Year', 'DevCom']
                    },
                    {
                        'key': 'Growing Suburb',
                        disabled: true,
                        columns: ['Year', 'GroSub']
                    },
                    {
                        'key': 'Rural Area',
                        disabled: true,
                        columns: ['Year', 'Rural']
                    },
                    {
                        'key': 'Burlington',
                        disabled: true,
                        columns: ['Year', 'Burlington']
                    },
                    {
                        'key': 'Camden',
                        disabled: true,
                        columns: ['Year', 'Camden']
                    },
                    {
                        'key': 'Gloucester',
                        disabled: true,
                        columns: ['Year', 'Gloucester']
                    },
                    {
                        'key': 'Mercer',
                        disabled: true,
                        columns: ['Year', 'Mercer']
                    },
                    {
                        'key': 'Bucks',
                        disabled: true,
                        columns: ['Year', 'Bucks']
                    },
                    {
                        'key': 'Delaware',
                        disabled: true,
                        columns: ['Year', 'Delaware']
                    },
                    {
                        'key': 'Chester',
                        disabled: true,
                        columns: ['Year', 'Chester']
                    },
                    {
                        'key': 'Montgomery',
                        disabled: true,
                        columns: ['Year', 'Montgomery']
                    },
                    {
                        'key': 'Philadelphia',
                        disabled: true,
                        columns: ['Year', 'Philadelphia']
                    }
                ]
            },
            {
                type: 'waterfall',
                container: 'chart2',
                dataSource: ['pop_comp_change'],
                columnOptions: [
                    ['Bucks'],
                    ['Burlington'],
                    ['Camden'],
                    ['Chester'],
                    ['Delaware'],
                    ['Gloucester'],
                    ['Mercer'],
                    ['Montgomery'],
                    ['Philadelphia']
                ],
                newKeys: true,
                data: [
                    {
                        'key': ''
                    }
                ]
            },
            {
                type: 'line',
                container: 'chart3',
                dataSource: ['pop_age_change','pop_age_totals'],
                context: {
                    labels: ['Change in Population', 'Total Population (Thousands)'],
                    units: ['thousands'],
                    keepUnits: true
                },
                columnOptions: [
                    ['DVRPC_<20','DVRPC_20-34','DVRPC_35-49','DVRPC_50-64','DVRPC_65+'],
                    ['NJCnt_<20','NJCnt_20-34','NJCnt_35-49','NJCnt_50-64','NJCnt_65+'],
                    ['PASub_<20','PASub_20-34','PASub_35-49','PASub_50-64','PASub_65+'],
                    ['Bucks_<20','Bucks_20-34','Bucks_35-49','Bucks_50-64','Bucks_65+'],
                    ['Burlington_<20','Burlington_20-34','Burlington_35-49','Burlington_50-64','Burlington_65+'],
                    ['Camden_<20','Camden_20-34','Camden_35-49','Camden_50-64','Camden_65+'],
                    ['Chester_<20','Chester_20-34','Chester_35-49','Chester_50-64','Chester_65+'],
                    ['Delaware_<20','Delaware_20-34','Delaware_35-49','Delaware_50-64','Delaware_65+'],
                    ['Gloucester_<20','Gloucester_20-34','Gloucester_35-49','Gloucester_50-64','Gloucester_65+'],
                    ['Mercer_<20','Mercer_20-34','Mercer_35-49','Mercer_50-64','Mercer_65+'],
                    ['Montgomery_<20','Montgomery_20-34','Montgomery_35-49','Montgomery_50-64','Montgomery_65+'],
                    ['Philadelphia_<20','Philadelphia_20-34','Philadelphia_35-49','Philadelphia_50-64','Philadelphia_65+'],
                ],
                data: [
                    {
                        'key': '<= 20 years',
                        columns: ['Year', 'DVRPC_<20']
                    },
                    {
                        'key': '20-34 years',
                        columns: ['Year', 'DVRPC_20-34']
                    },
                    {
                        'key': '35-49 years',
                        columns: ['Year', 'DVRPC_35-49']
                    },
                    {
                        'key': '50-64 years',
                        columns: ['Year', 'DVRPC_50-64']
                    },
                    {
                        'key': '65+ years',
                        columns: ['Year', 'DVRPC_65+']
                    },
                ]
            },
            {
                type: 'line',
                container: 'chart4',
                dataSource: ['pop_race_change','pop_race_totals'],
                context: {
                    labels: ['Change in Population', 'Total Population (Thousands)'],
                    units: ['thousands'],
                    keepUnits: true
                },
                columnOptions: [
                    ['DVRPC_WA','DVRPC_BA','DVRPC_IA','DVRPC_AA','DVRPC_NA','DVRPC_TOM'],
                    ['NJCnt_WA','NJCnt_BA','NJCnt_IA','NJCnt_AA','NJCnt_NA','NJCnt_TOM'],
                    ['PASub_WA','PASub_BA','PASub_IA','PASub_AA','PASub_NA','PASub_TOM'],
                    ['Bucks_WA','Bucks_BA','Bucks_IA','Bucks_AA','Bucks_NA','Bucks_TOM'],
                    ['Burlington_WA','Burlington_BA','Burlington_IA','Burlington_AA','Burlington_NA','Burlington_TOM'],
                    ['Camden_WA','Camden_BA','Camden_IA','Camden_AA','Camden_NA','Camden_TOM'],
                    ['Chester_WA','Chester_BA','Chester_IA','Chester_AA','Chester_NA','Chester_TOM'],
                    ['Delaware_WA','Delaware_BA','Delaware_IA','Delaware_AA','Delaware_NA','Delaware_TOM'],
                    ['Gloucester_WA','Gloucester_BA','Gloucester_IA','Gloucester_AA','Gloucester_NA','Gloucester_TOM'],
                    ['Mercer_WA','Mercer_BA','Mercer_IA','Mercer_AA','Mercer_NA','Mercer_TOM'],
                    ['Montgomery_WA','Montgomery_BA','Montgomery_IA','Montgomery_AA','Montgomery_NA','Montgomery_TOM'],
                    ['Philadelphia_WA','Philadelphia_BA','Philadelphia_IA','Philadelphia_AA','Philadelphia_NA','Philadelphia_TOM']
                ],
                data: [
                    {
                        'key': 'White Alone',
                        columns: ['Year', 'DVRPC_WA']
                    },
                    {
                        'key': 'Black or African American alone',
                        columns: ['Year', 'DVRPC_BA']
                    },
                    {
                        'key': 'American Indian and Alaska Native alone',
                        columns: ['Year', 'DVRPC_IA']
                    },
                    {
                        'key': 'Asian alone',
                        columns: ['Year', 'DVRPC_AA']
                    },
                    {
                        'key': 'Native Hawaiian and Other Pacific Islander',
                        columns: ['Year', 'DVRPC_NA']
                    },
                    {
                        'key': 'Two or More Races',
                        columns: ['Year', 'DVRPC_TOM']
                    }
                ]
            },
            {
                type: 'line',
                container: 'chart5',
                dataSource: ['pop_hisp_change','pop_hisp_totals'],
                context: {
                    labels: ['Change in Population', 'Total Population (Thousands)'],
                    units: ['thousands'],
                    keepUnits: true
                },
                columnOptions: [
                    ['DVRPC_NH','DVRPC_H'],
                    ['NJCnt_NH','NJCnt_H'],
                    ['PASub_NH','PASub_H'],
                    ['Bucks_NH','Bucks_H'],
                    ['Burlington_NH','Burlington_H'],
                    ['Camden_NH','Camden_H'],
                    ['Chester_NH','Chester_H'],
                    ['Delaware_NH','Delaware_H'],
                    ['Gloucester_NH','Gloucester_H'],
                    ['Mercer_NH','Mercer_H'],
                    ['Montgomery_NH','Montgomery_H'],
                    ['Philadelphia_NH','Philadelphia_H'],
                ],
                data: [
                    {
                        'key': 'non-Latinx',
                        columns: ['Year', 'DVRPC_NH']
                    },
                    {
                        'key': 'Latinx',
                        columns: ['Year', 'DVRPC_H']
                    }
                ]
            }
        ],
        text: {
            why: `<p>A growing population is a sign of a region's desirability and vitality. Where growth is happening is just as important: if it occurs in already developed places there will be a  reduced impact on the environment and regional infrastructure. Lastly, shifts in birth and death rates, foreign and domestic migration, age, race, and ethnicity give some idea of where trends are heading in the region and how to plan for its future.</p>`,
            what: `<p>The U.S. Census Bureau releases annual estimates of population by counties and municipalities as part of the Population Estimates Program (PEP). This is an estimate of population on July 1st of each estimate year. Adjustments to previous estimate years are made with each release, dating back to the year of the last decennial census. Decennial figures for April 1st of the most recent decennial year will not get updated, but the July 1st estimate for that same year can adjust with each PEP release.  The Census Bureau produces these estimates based on administrative records. At the municipal level, the PEP reports only population totals. At the county level, PEP data give estimates for age, sex, race, and ethnicity. PEP releases come out in the spring following the latest estimate year. The demographic estimates of the PEP are used as control totals for the American Community Survey results released later that year.</p><p>The first chart shows total population, population change, and percent change since 2000.Trend lines for population estimates can look strange when using data years earlier than the latest decennial census. This is because each decennial becomes the base for each subsequent year of estimates and the estimates for the decade prior to a decennial census do not get adjusted after a new decennial count. This gives an appearance of a sharper change from 2009 to 2010 than was probably present in the region. Still the general direction of trends within each decade can be seen.</p><p>In addition to county demographics, the PEP releases estimates of key component forces that drive the dynamics of counties' population change. The net change is the result of the net <em>natural increase</em> and <em>net migration</em>, each of which have two reported components. Natural increase is comprised of total <em>births</em> in a county minus the total <em>deaths</em>. Net migration is comprised of a net <em>domestic migration</em> (the net of how many residents move in from other counties minus the number of county residents who move out of that county) minus <em>international migration</em> (the number of residents moving to the county that year from countries other than the U.S.). <em>Tracking Progress</em> only reports these components of change at the county level—not regional—for these change dynamics since it is impossible to know from these data how much of each county's domestic migration is driven by inflow from or outflow to other counties within the region. The second chart displays the county change dynamics in a "waterfall" visualization. From each cumulative total change bar (from a 2010 base year), positive components will add to that total, and negative components will subtract to give the next year's cumulative total. Toggle between net change, natural increase, and net migration to see all components. A small fraction of a county's population change remains unallocated to any of these components in each estimate year, therefore these components will not produce the exact change reported by municipal and county totals; nor for age, sex, race, or ethnicity totals.</p><p>The third, fourth, and fifth charts report change by age group, race, and ethnicity, respectively.  The American Community Survey, the Decennial Census, and other Census products only capture one ethnicity in the United States: Hispanic, Latino, or Spanish origin. Though recent attempts have been made to include Middle Eastern or North African (MENA) as an ethnicity, this has not made its way onto Census surveys. For the purpose of simplicity and gender inclusion, this indicator uses the term Latinx or non-Latinx in reference to people in or out of this ethnic group as defined by the U.S. Census Bureau data.</p>`,
            how: `<p>The Greater Philadelphia region grew by 6.5 percent between 2000 and 2018—an increase of a quarter million people. Compared to regions of the southern or western U.S., the Greater Philadelphia region is more "built-out" and experiences slower overall growth. Some portions of the region  experience more growth than surrounding areas. In the 2010 to 2018 period, the Commonwealth of Pennsylvania would have declined in population were it not for DVRPC's Pennsylvania counties. Half of the growth in those eight years came from Philadelphia alone.</p><p>In the first decade of this millenium, population growth was largely in the Growing Suburbs. These areas increased by over 150,000 people from 2000 to 2010, but growth was less than a third of that from 2010 to 2018. Meanwhile, growth in Core Cities was just over 8,000 people from 2000 to 2010 but was over 60,000—seven times the previous decade's growth—between 2010 and 2018.</p><p>Exploring the dynamics of county change, most counties in the region see a positive natural increase—meaning they have more births than deaths. Bucks County has been the exception to this in recent years due to an aging population. In 2015, 2017, and 2018 it saw more deaths than births. Still overall growth was positive in these years because net migration outweighed the negative natural increase. In 2015 this was due to international migration alone, but in 2017 and 2018 both international and domestic migration increased in the county.</p><p>Throughout the region, international migration is helping to offset a general trend of higher domestic outmigration. Net migration tends to still be negative in most counties, but less so thanks to international migration. Chester and Montgomery counties, in particular, have benefitted from fewer years of negative domestic migration and consistently higher international migration. Camden County has seen its population decline since 2010. While it has a healthy differential between births and deaths, its net migration outweighs its natural increase. While there have been small increases in international migration, this hasn't been enough to overcome the  loss of existing residents. From 2017 to 2018, however some slowing of this differential was apparent. Net migration was offset by natural increase for a gain of about 8,000 residents in one year. Similar to Camden County, Philadelphia has consistently seen more existing residents leaving than coming from other counties in the U.S., but international migration has outweighed domestic in 2011 and 2012 and natural increase has consistently outweighed net migration, leading to the highest overall growth in the region during this period.</p><p>The region's population is aging. With a large portion of the Baby Boomer generation now 65 years or older old, the 65 plus population has grown from 752,900 in 2010 to 915,300 in 2018—an increase of over 162,400. Meanwhile, those under 20 years old decreased by almost 80,000 and those 35 to 49 declined by over 95,000 in the same period. Population age 20 to 34 and 50 to 64 have seen moderate growth of around 60,000, respectively, in those eight years.</p><p>At over 3.9 million, or 68 percent of the total population, the region remains overwhelmingly white. Blacks or African Americans make up the second largest group, with 22 percent of the population. Even so, the racial group experiencing the most growth since 2010 has been Asians (an increase of almost 80,000), followed by Blacks (almost 50,000), and those with two or more races (nearly 30,000). The white population has declined by over 54,000 in those same years.</p><p>The population estimates from 2010 to 2018 show a decrease of over 10,000 in the non-Latinx population. The Latinx community grew by close to 120,000 in those 8 years, or 25 percent of its 2010 total. Still, at just 10 percent of the region's population the Latinx population is small compared to many areas of the country.</p>`,
            resource: `<p>Collaborating with our county partners, DVRPC produced <a href="/Products/ADR022/">county and municipal population forecasts</a> for the <em>Connections 2045</em> Long-Range Plan that were adopted by the DVRPC Board.</p><p>DVRPC's <a href="/Connections2045/MIT/">Municipal Implementation Toolbox</a> suggests the following tools for spurring population growth in appropriate areas of the region:</p><ul><li><a href="/Connections2045/MIT/toolpage.html?tool=5bf42867e7179a56e21376cc">Official Map</a></li><li><a href="/Connections2045/MIT/toolpage.html?tool=5bf42ad8e7179a56e2137827">Transit-Oriented Development (TOD) Zoning</a></li><li><a href="/Connections2045/MIT/toolpage.html?tool=5c929a05e7179a0e4089fae5">Revitalization Planning &amp; Programs</a></li><li><a href="/Connections2045/MIT/toolpage.html?tool=5bf42b77e7179a56e2137867">Build Missing Middle Housing</a></li><li><a href="/Connections2045/MIT/toolpage.html?tool=5bf42b41e7179a56e2137853">Housing Maintenance &amp; Rehabilitation Programs</a></li><li><a href="/Connections2045/MIT/toolpage.html?tool=5cb7796efb6fc041ab92fe9b">Streamlined Permitting Processes</a></li></ul><p>For more detail on population by municipality, see DVRPC's Data Bulletin on <a href="/Products/DB102/">Population Estimates, 2010-2017, DVRPC's 28-County Extended Data Services Area</a>.</p>`
        }
    },
    'Bridge Conditions': {
        file: 'bridgeConditions.html',
        d3: [
            {
                type: 'line',
                container: 'chart',
                dataSource: ['Bridge_Conditions_1A','Bridge_Conditions_1B'],
                context: {
                    labels: ['% of Deck Area for All Bridges', '% of All Bridges'],
                    keepLabels: false,
                    units: ['percent'],
                    keepUnits: true
                },
                columnOptions: [
                    ['DVRPC- All','DVRPC- State', 'DVRPC- Local', 'DVRPC- Other'],
                    ['New Jersey Suburbs- All','New Jersey Suburbs- State', 'New Jersey Suburbs- Local', 'New Jersey Suburbs- Other'],
                    ['Pennsylvania Suburbs- All','Pennsylvania Suburbs- State', 'Pennsylvania Suburbs- Local', 'Pennsylvania Suburbs- Other'],
                    ['Pennsylvania All Counties- All','Pennsylvania All Counties- State', 'Pennsylvania All Counties- Local', 'Pennsylvania All Counties- Other'],
                    ['Bucks- All','Bucks- State', 'Bucks- Local', 'Bucks- Other'],
                    ['Chester- All','Chester- State', 'Chester- Local', 'Chester- Other'],
                    ['Delaware- All','Delaware- State', 'Delaware- Local', 'Delaware- Other'],
                    ['Montgomery- All','Montgomery- State', 'Montgomery- Local', 'Montgomery- Other'],
                    ['Burlington- All','Burlington- State', 'Burlington- Local', 'Burlington- Other'],
                    ['Camden- All','Camden- State', 'Camden- Local', 'Camden- Other'],
                    ['Gloucester- All','Gloucester- State', 'Gloucester- Local', 'Gloucester- Other'],
                    ['Mercer- All','Mercer- State', 'Mercer- Local', 'Mercer- Other'],
                    ['Philadelphia- All','Philadelphia- State', 'Philadelphia- Local', 'Philadelphia- Other'],
                ],
                data: [
                    {
                        'key': 'All',
                        columns: ['year', 'DVRPC- All']
                    },
                    {
                        'key': 'State',
                        columns: ['year', 'DVRPC- State']
                    },
                    {
                        'key': 'Local',
                        columns: ['year', 'DVRPC- Local']
                    },
                    {
                        'key': 'Other',
                        columns: ['year', 'DVRPC- Other']
                    }
                ]
            },
            {
                type: 'stacked bar',
                container: 'chart2',
                dataSource: ['Bridge_Conditions_2A','Bridge_Conditions_2B'],
                context: {
                    labels: ['Square Feet (Thousands)', 'Bridges'],
                    keepLabels: false,
                    units: ['singles'],
                    keepUnits: true
                },
                columnOptions: [
                    ['DVRPC- State', 'DVRPC- Local', 'DVRPC- Other'],
                    ['New Jersey Suburbs- State', 'New Jersey Suburbs- Local', 'New Jersey Suburbs- Other'],
                    ['Pennsylvania Suburbs- State', 'Pennsylvania Suburbs- Local', 'Pennsylvania Suburbs- Other'],
                    ['Pennsylvania All Counties- State', 'Pennsylvania All Counties- Local', 'Pennsylvania All Counties- Other'],
                    ['Bucks- State', 'Bucks- Local', 'Bucks- Other'],
                    ['Chester- State', 'Chester- Local', 'Chester- Other'],
                    ['Delaware- State', 'Delaware- Local', 'Delaware- Other'],
                    ['Montgomery- State', 'Montgomery- Local', 'Montgomery- Other'],
                    ['Burlington- State', 'Burlington- Local', 'Burlington- Other'],
                    ['Camden- State', 'Camden- Local', 'Camden- Other'],
                    ['Gloucester- State', 'Gloucester- Local', 'Gloucester- Other'],
                    ['Mercer- State', 'Mercer- Local', 'Mercer- Other'],
                    ['Philadelphia- State', 'Philadelphia- Local', 'Philadelphia- Other'],
                ],
                data: [
                    {
                        'key': 'State',
                        columns: ['year', 'DVRPC- State']
                    },
                    {
                        'key': 'Local',
                        columns: ['year', 'DVRPC- Local']
                    },
                    {
                        'key': 'Other',
                        columns: ['year', 'DVRPC- Other']
                    }
                ]
            },
            {
                type: 'stacked bar',
                container: 'chart3',
                dataSource: ['Bridge_Conditions_3A','Bridge_Conditions_3B'],
                context: {
                    labels: ['Square Feet (Thousands)', 'Bridges'],
                    keepLabels: false,
                    units: ['millions'],
                    keepUnits: true
                },
                columnOptions: [
                    ['DVRPC- NA','DVRPC- Poor','DVRPC- Fair','DVRPC- Good'],
                    ['New Jersey Suburbs- NA','New Jersey Suburbs- Poor','New Jersey Suburbs- Fair','New Jersey Suburbs- Good'],
                    ['Pennsylvania Suburbs- NA','Pennsylvania Suburbs- Poor','Pennsylvania Suburbs- Fair','Pennsylvania Suburbs- Good'],
                    ['Bucks- NA','Bucks- Poor','Bucks- Fair','Bucks- Good'],
                    ['Chester- NA','Chester- Poor','Chester- Fair','Chester- Good'],
                    ['Delaware- NA','Delaware- Poor','Delaware- Fair','Delaware- Good'],
                    ['Montgomery- NA','Montgomery- Poor','Montgomery- Fair','Montgomery- Good'],
                    ['Burlington- NA','Burlington- Poor','Burlington- Fair','Burlington- Good'],
                    ['Camden- NA','Camden- Poor','Camden- Fair','Camden- Good'],
                    ['Gloucester- NA','Gloucester- Poor','Gloucester- Fair','Gloucester- Good'],
                    ['Mercer- NA','Mercer- Poor','Mercer- Fair','Mercer- Good'],
                    ['Philadelphia- NA','Philadelphia- Poor','Philadelphia- Fair','Philadelphia- Good']
                ],
                data: [
                    {
                        'key': 'NA',
                        columns: ['year', 'DVRPC- NA']
                    },
                    {
                        'key': 'Poor',
                        columns: ['year', 'DVRPC- Poor']
                    },
                    {
                        'key': 'Fair',
                        columns: ['year', 'DVRPC- Fair']
                    },
                    {
                        'key': 'Good',
                        columns: ['year', 'DVRPC- Good']
                    }
                ]
            }
        ],
        text: {
            why: `<p>The region's bridges enable mobility and commerce throughout the region. Bridges with a poor condition rating indicate maintenance needs that do not pose safety issues so long as they are resolved in a timely manner. Depending on the ratings and the bridge's age, it may be repairable. However, for older bridges with multiple components in poor condition, replacement is generally the more cost-effective option. </p>`,
            what: `<p>Bridges are inspected every two years at minimum, bridges in poor condition are inspected more frequently. These inspections rate the condition for various bridge elements. The inspection records are stored in a bridge management system. The National Bridge Inventory (NBI) collects bridge data from each state DOT, including PennDOT and NJDOT, annually for bridges more than 20 feet long.</p><p>This analysis considers a bridge's deck, super, and substructure ratings, or the culvert rating for a culvert. These scores are given between 0 and 9 for each component, with 9 being the score of a brand new, just opened bridge. Bridges with all three scores of 7 or greater are rated "good", those with any of the score at 4 or lower are rated "poor". A bridge that doesn't fall into good or poor is considered fair.</p><p>Most bridges are on state roads, and are maintained by the state department of transportation. Some bridges are on local roads and are maintained by local governments. The other category of bridges are largely maintained by state and local turnpike and toll authorities.</p><p>The first chart below shows deficient bridge deck area in the region, or by total deficient bridges using the toggle on the right. The left toggle switch offers options to view deck area at the region, state subregion, or county geographies.</p><p>The second chart shows state-maintained bridge deck area by overall condition: good, fair, poor. The third chart shows locally maintained bridge deck area by overall condition.</p>`,
            how: `<p>Much progress has been made in improving bridge conditions in the region over the past nearly two decades. Following the lead of federal and both state departments of transportation, DVRPC's "fix-it-first" policy has allocated more funding to preserving and maintaining existing networks including bridges in order to achieve and maintain a state-of-good repair for existing transportation infrastructure. Since peaking in 2003, deficient deck area has decreased from 18 to 8 percent in 2018. Total deficient bridges has decreased steadily, both in terms of total number of bridges, and deck area (dropping to half the 2003 tally).</p><p>With a mature transportation network, asset condition continues to be a significant challenge, though. Despite dropping deficient ratings, the large majority of bridges in the region continue to receive a Fair rating.  The largest single 10-year period for building the region's infrastructure occurred during the 1960s; this means that many of these facilities have reached the end of their useful lives and need to be reconstructed soon. This puts the region—especially on the Pennsylvania side—in a precarious position; as just one large bridge dropping to poor condition would erase years of progress with regard to deck area ratings.</p>`,
            resource: `<p>To see how conditions are planned to be addressed for the next 25 years, see what is listed among DVRPC's <a href="/webmaps/MRP2045/">Connections 2045 Transportation Projects</a>.</p><p>DVRPC's <a href="/Connections2045/MIT/">Municipal Implementation Toolbox</a> uggests preparing infrastructure for Connected & Automated Vehicles by prioritizing bridge maintenance and improving surface conditions and lane markings. For more information visit: <a href="/Connections2045/MIT/toolpage.html?tool=5cb78214fb6fc041ab93080d" rel="external" target="_blank">Connected &amp; Automated Vehicle Preparations</a>.</p>`
        }
    },
    'Water Quality': {
        file: 'waterQuality.html',
        d3: [
            {
                type: 'line',
                container: 'chart',
                dataSource: ['water_quality_1'],
                context: {
                    labels: ['Percent Impaired'],
                    units: ['percent']
                },
                data: [
                    {
                        'key': 'Pennsylvania',
                        columns: ['Year', 'Pennsylvania']
                    },
                    {
                        'key': 'New Jersey',
                        columns: ['Year', 'New Jersey']
                    },
                    {
                        'key': 'Average',
                        columns: ['Year', 'Average']
                    }
                ]
            },
            {
                type: 'stacked bar',
                container: 'chart2',
                dataSource: ['water_quality_2'],
                context: {
                    labels: ['Stream Miles'],
                    units: ['thousands']
                },
                data: [
                    {
                        'key': 'Supporting (miles)',
                        columns: ['year', 'Supporting']
                    },
                    {
                        'key': 'Not Assessed (miles)',
                        columns: ['year', 'Not Assessed']
                    },
                    {
                        'key': 'Impaired (miles)',
                        columns: ['year', 'Impaired']
                    }
                ]
            },
            {
                type: 'stacked bar',
                container: 'chart3',
                dataSource: [['water_quality_3']],
                context: {
                    labels: ['Subwatershed Acres'],
                    units: ['thousands']
                },
                data: [
                    {
                        'key': 'Supporting (acres)',
                        columns: ['year', 'Attaining']
                    },
                    {
                        'key': 'Insufficient Data (acres)',
                        columns: ['year', 'Insufficient Data']
                    },
                    {
                        'key': 'Impaired (acres)',
                        columns: ['year', 'Impaired']
                    }
                ]
            }
        ],
        text: {
            why: ``,
            what: `<p>The Federal Clean Water Act was established to restore and maintain the chemical, physical, and biological integrity of the nation's waters. Water quality standards have been established by federal and state governments to ensure that waterbodies attain their designated uses. Designated uses are those human uses and ecological conditions that are officially recognized and protected by the Clean Water Act. These uses include aquatic life (general), aquatic life (trout), recreation, drinking water supply, industrial water supply, agricultural water supply, shellfish harvesting, and fish consumption.</p><p>As mandated by the Clean Water Act, water quality in all states is monitored and assessed on a biennial basis. Water quality is assessed based on whether or not a waterbody attains its designated use(s). The designated use of aquatic life (general) is the most indicative of overall water quality and is the most comprehensively monitored across the region. Therefore, aquatic life is used as the indicator of regional water quality.</p><p>Water quality in Pennsylvania is assessed based on stream segments, and attainment is measured by the number of stream miles within the region that support aquatic life. The assessment plan covers the entire state in 10-year increments. Interim evaluations are performed using targeted sampling in each of the state's major subwatersheds every two years.</p>`,
            how: ``,
            resource: ``
        }
    },
    'Land Consumption': {
        file: 'landConsumption.html',
        d3: [
            {
                type: 'line',
                container: 'chart',
                dataSource: ['landConsumption1'],
                context: {
                    labels: ['Acres', 'Acres per Capita', 'Acres', 'Acres per Capita'],
                    units: ['thousands', 'singles', 'thousands', 'singles'],
                },
                columnOptions: [
                    ['Total Developed Acres- DVRPC','Total Developed Acres- NJ Suburbs','Total Developed Acres- PA Suburbs','Total Developed Acres- Core City','Total Developed Acres- Developed Community','Total Developed Acres- Growing Suburb','Total Developed Acres- Rural Area','Total Developed Acres- Bucks','Total Developed Acres- Burlington','Total Developed Acres- Camden','Total Developed Acres- Chester','Total Developed Acres- Delaware','Total Developed Acres- Gloucester','Total Developed Acres- Mercer','Total Developed Acres- Montgomery','Total Developed Acres- Philadelphia'],
                    ['Developed Acres per Capita- DVRPC','Developed Acres per Capita- NJ Suburbs','Developed Acres per Capita- PA Suburbs','Developed Acres per Capita- Core City','Developed Acres per Capita- Developed Community','Developed Acres per Capita- Growing Suburb','Developed Acres per Capita- Rural Area','Developed Acres per Capita- Bucks','Developed Acres per Capita- Burlington','Developed Acres per Capita- Camden','Developed Acres per Capita- Chester','Developed Acres per Capita- Delaware','Developed Acres per Capita- Gloucester','Developed Acres per Capita- Mercer','Developed Acres per Capita- Montgomery','Developed Acres per Capita- Philadelphia'],
                    ['Total Agricultural Acres- DVRPC','Total Agricultural Acres- NJ Suburbs','Total Agricultural Acres- PA Suburbs','Total Agricultural Acres- Core City','Total Agricultural Acres- Developed Community','Total Agricultural Acres- Growing Suburb','Total Agricultural Acres- Rural Area','Total Agricultural Acres- Bucks','Total Agricultural Acres- Burlington','Total Agricultural Acres- Camden','Total Agricultural Acres- Chester','Total Agricultural Acres- Delaware','Total Agricultural Acres- Gloucester','Total Agricultural Acres- Mercer','Total Agricultural Acres- Montgomery','Total Agricultural Acres- Philadelphia'],
                    ['Agricultural Acres per Capita- DVRPC','Agricultural Acres per Capita- NJ Suburbs','Agricultural Acres per Capita- PA Suburbs','Agricultural Acres per Capita- Core City','Agricultural Acres per Capita- Developed Community','Agricultural Acres per Capita- Growing Suburb','Agricultural Acres per Capita- Rural Area','Agricultural Acres per Capita- Bucks','Agricultural Acres per Capita- Burlington','Agricultural Acres per Capita- Camden','Agricultural Acres per Capita- Chester','Agricultural Acres per Capita- Delaware','Agricultural Acres per Capita- Gloucester','Agricultural Acres per Capita- Mercer','Agricultural Acres per Capita- Montgomery','Agricultural Acres per Capita- Philadelphia']
                ],
                data: [
                    {
                        'key': 'DVRPC',
                        columns: ['year', 'Total Developed Acres- DVRPC']
                    },
                    {
                        'key': 'NJ Suburbs',
                        disabled: true,
                        columns: ['year', 'Total Developed Acres- NJ Suburbs']
                    },
                    {
                        'key': 'PA Suburbs',
                        disabled: true,
                        columns: ['year', 'Total Developed Acres- PA Suburbs']
                    },
                    {
                        'key': 'Core City',
                        disabled: true,
                        columns: ['year', 'Total Developed Acres- Core City']
                    },
                    {
                        'key': 'Developed Community',
                        disabled: true,
                        columns: ['year', 'Total Developed Acres- Developed Community']
                    },
                    {
                        'key': 'Growing Suburb',
                        disabled: true,
                        columns: ['year', 'Total Developed Acres- Growing Suburb']
                    },
                    {
                        'key': 'Rural Area',
                        disabled: true,
                        columns: ['year', 'Total Developed Acres- Rural Area']
                    },
                    {
                        'key': 'Bucks',
                        disabled: true,
                        columns: ['year', 'Total Developed Acres- Bucks']
                    },
                    {
                        'key': 'Burlington',
                        disabled: true,
                        columns: ['year', 'Total Developed Acres- Burlington']
                    },
                    {
                        'key': 'Camden',
                        disabled: true,
                        columns: ['year', 'Total Developed Acres- Camden']
                    },
                    {
                        'key': 'Chester',
                        disabled: true,
                        columns: ['year', 'Total Developed Acres- Chester']
                    },
                    {
                        'key': 'Delaware',
                        disabled: true,
                        columns: ['year', 'Total Developed Acres- Delaware']
                    },
                    {
                        'key': 'Gloucester',
                        disabled: true,
                        columns: ['year', 'Total Developed Acres- Gloucester']
                    },
                    {
                        'key': 'Mercer',
                        disabled: true,
                        columns: ['year', 'Total Developed Acres- Mercer']
                    },
                    {
                        'key': 'Montgomery',
                        disabled: true,
                        columns: ['year', 'Total Developed Acres- Montgomery']
                    },
                    {
                        'key': 'Philadelphia',
                        disabled: true,
                        columns: ['year', 'Total Developed Acres- Philadelphia']
                    }
                ]
            },
            {
                type: 'stacked bar',
                container: 'chart2',
                dataSource: ['landConsumption2'],
                context: {
                    labels: ['Acres (Thousands)'],
                    keepLabels: true,
                    units: ['thousands'],
                    keepUnits: true
                },
                columnOptions: [
                    ['DVRPC- Agriculture','DVRPC- Commercial','DVRPC- Community Services','DVRPC- Manufacturing','DVRPC- Military','DVRPC- Mining','DVRPC- Parking','DVRPC- Recreation','DVRPC- multi-fam','DVRPC- single-fam','DVRPC- Transportation','DVRPC- Utility','DVRPC- Vacant','DVRPC- Water','DVRPC- Wooded'],
                    ['NJ Suburbs- Agriculture','NJ Suburbs- Commercial','NJ Suburbs- Community Services','NJ Suburbs- Manufacturing','NJ Suburbs- Military','NJ Suburbs- Mining','NJ Suburbs- Parking','NJ Suburbs- Recreation','NJ Suburbs- multi-fam','NJ Suburbs- single-fam','NJ Suburbs- Transportation','NJ Suburbs- Utility','NJ Suburbs- Vacant','NJ Suburbs- Water','NJ Suburbs- Wooded'],
                    ['PA Suburbs- Agriculture','PA Suburbs- Commercial','PA Suburbs- Community Services','PA Suburbs- Manufacturing','PA Suburbs- Military','PA Suburbs- Mining','PA Suburbs- Parking','PA Suburbs- Recreation','PA Suburbs- multi-fam','PA Suburbs- single-fam','PA Suburbs- Transportation','PA Suburbs- Utility','PA Suburbs- Vacant','PA Suburbs- Water','PA Suburbs- Wooded'],
                    ['Core City- Agriculture','Core City- Commercial','Core City- Community Services','Core City- Manufacturing','Core City- Military','Core City- Mining','Core City- Parking','Core City- Recreation','Core City- multi-fam','Core City- single-fam','Core City- Transportation','Core City- Utility','Core City- Vacant','Core City- Water','Core City- Wooded'],
                    ['Developed Community- Agriculture','Developed Community- Commercial','Developed Community- Community Services','Developed Community- Manufacturing','Developed Community- Military','Developed Community- Mining','Developed Community- Parking','Developed Community- Recreation','Developed Community- multi-fam','Developed Community- single-fam','Developed Community- Transportation','Developed Community- Utility','Developed Community- Vacant','Developed Community- Water','Developed Community- Wooded'],
                    ['Growing Suburb- Agriculture','Growing Suburb- Commercial','Growing Suburb- Community Services','Growing Suburb- Manufacturing','Growing Suburb- Military','Growing Suburb- Mining','Growing Suburb- Parking','Growing Suburb- Recreation','Growing Suburb- multi-fam','Growing Suburb- single-fam','Growing Suburb- Transportation','Growing Suburb- Utility','Growing Suburb- Vacant','Growing Suburb- Water','Growing Suburb- Wooded'],
                    ['Rural Area- Agriculture','Rural Area- Commercial','Rural Area- Community Services','Rural Area- Manufacturing','Rural Area- Military','Rural Area- Mining','Rural Area- Parking','Rural Area- Recreation','Rural Area- multi-fam','Rural Area- single-fam','Rural Area- Transportation','Rural Area- Utility','Rural Area- Vacant','Rural Area- Water','Rural Area- Wooded'],
                    ['Bucks- Agriculture','Bucks- Commercial','Bucks- Community Services','Bucks- Manufacturing','Bucks- Military','Bucks- Mining','Bucks- Parking','Bucks- Recreation','Bucks- multi-fam','Bucks- single-fam','Bucks- Transportation','Bucks- Utility','Bucks- Vacant','Bucks- Water','Bucks- Wooded'],
                    ['Burlington- Agriculture','Burlington- Commercial','Burlington- Community Services','Burlington- Manufacturing','Burlington- Military','Burlington- Mining','Burlington- Parking','Burlington- Recreation','Burlington- multi-fam','Burlington- single-fam','Burlington- Transportation','Burlington- Utility','Burlington- Vacant','Burlington- Water','Burlington- Wooded'],
                    ['Camden- Agriculture','Camden- Commercial','Camden- Community Services','Camden- Manufacturing','Camden- Military','Camden- Mining','Camden- Parking','Camden- Recreation','Camden- multi-fam','Camden- single-fam','Camden- Transportation','Camden- Utility','Camden- Vacant','Camden- Water','Camden- Wooded'],
                    ['Chester- Agriculture','Chester- Commercial','Chester- Community Services','Chester- Manufacturing','Chester- Military','Chester- Mining','Chester- Parking','Chester- Recreation','Chester- multi-fam','Chester- single-fam','Chester- Transportation','Chester- Utility','Chester- Vacant','Chester- Water','Chester- Wooded'],
                    ['Delaware- Agriculture','Delaware- Commercial','Delaware- Community Services','Delaware- Manufacturing','Delaware- Military','Delaware- Mining','Delaware- Parking','Delaware- Recreation','Delaware- multi-fam','Delaware- single-fam','Delaware- Transportation','Delaware- Utility','Delaware- Vacant','Delaware- Water','Delaware- Wooded'],
                    ['Gloucester- Agriculture','Gloucester- Commercial','Gloucester- Community Services','Gloucester- Manufacturing','Gloucester- Military','Gloucester- Mining','Gloucester- Parking','Gloucester- Recreation','Gloucester- multi-fam','Gloucester- single-fam','Gloucester- Transportation','Gloucester- Utility','Gloucester- Vacant','Gloucester- Water','Gloucester- Wooded'],
                    ['Mercer- Agriculture','Mercer- Commercial','Mercer- Community Services','Mercer- Manufacturing','Mercer- Military','Mercer- Mining','Mercer- Parking','Mercer- Recreation','Mercer- multi-fam','Mercer- single-fam','Mercer- Transportation','Mercer- Utility','Mercer- Vacant','Mercer- Water','Mercer- Wooded'],
                    ['Montgomery- Agriculture','Montgomery- Commercial','Montgomery- Community Services','Montgomery- Manufacturing','Montgomery- Military','Montgomery- Mining','Montgomery- Parking','Montgomery- Recreation','Montgomery- multi-fam','Montgomery- single-fam','Montgomery- Transportation','Montgomery- Utility','Montgomery- Vacant','Montgomery- Water','Montgomery- Wooded'],
                    ['Philadelphia- Agriculture','Philadelphia- Commercial','Philadelphia- Community Services','Philadelphia- Manufacturing','Philadelphia- Military','Philadelphia- Mining','Philadelphia- Parking','Philadelphia- Recreation','Philadelphia- multi-fam','Philadelphia- single-fam','Philadelphia- Transportation','Philadelphia- Utility','Philadelphia- Vacant','Philadelphia- Water','Philadelphia- Wooded'],
                ],
                data: [
                    {
                        'key': 'Agricultural',
                        columns: ['year', 'DVRPC- Agriculture']
                    },
                    {
                        'key': 'Commercial',
                        columns: ['year', 'DVRPC- Commercial']
                    },
                    {
                        'key': 'Comm Services',
                        columns: ['year', 'DVRPC- Community Services']
                    },
                    {
                        'key': 'Manufacturing',
                        columns: ['year', 'DVRPC- Manufacturing']
                    },
                    {
                        'key': 'Military',
                        columns: ['year', 'DVRPC- Military']
                    },
                    {
                        'key': 'Mining',
                        columns: ['year', 'DVRPC- Mining']
                    },
                    {
                        'key': 'Parking',
                        columns: ['year', 'DVRPC- Parking']
                    },
                    {
                        'key': 'Recreation',
                        columns: ['year', 'DVRPC- Recreation']
                    },
                    {
                        'key': 'Multi Family',
                        columns: ['year', 'DVRPC- multi-fam']
                    },
                    {
                        'key': 'Single Family',
                        columns: ['year', 'DVRPC- single-fam']
                    },
                    {
                        'key': 'Transportation',
                        columns: ['year', 'DVRPC- Transportation']
                    },
                    {
                        'key': 'Utility',
                        columns: ['year', 'DVRPC- Utility']
                    },
                    {
                        'key': 'Vacant',
                        columns: ['year', 'DVRPC- Vacant']
                    },
                    {
                        'key': 'Water',
                        columns: ['year', 'DVRPC- Water']
                    },
                    {
                        'key': 'Wooded',
                        columns: ['year', 'DVRPC- Wooded']
                    },
                ]
            },
            {
                type: 'line',
                container: 'chart3',
                dataSource: ['landConsumption3'],
                context: {
                    labels: ['Acres','Percent','Acres','Percent','Acres','Percent'],
                    units: ['thousands','percent','thousands', 'percent','thousands','percent'],
                },
                columnOptions: [
                    ['DVRPC- Total Acres','NJ Suburbs- Total Acres','PA Suburbs- Total Acres','Core City- Total Acres','Developed Community- Total Acres','Growing Suburb- Total Acres','Rural Area- Total Acres','Bucks- Total Acres','Burlington- Total Acres','Camden- Total Acres','Chester- Total Acres','Delaware- Total Acres','Gloucester- Total Acres','Mercer- Total Acres','Montgomery- Total Acres','Philadelphia- Total Acres'],
                    ['DVRPC- Total Percent','NJ Suburbs- Total Percent','PA Suburbs- Total Percent','Core City- Total Percent','Developed Community- Total Percent','Growing Suburb- Total Percent','Rural Area- Total Percent','Bucks- Total Percent','Burlington- Total Percent','Camden- Total Percent','Chester- Total Percent','Delaware- Total Percent','Gloucester- Total Percent','Mercer- Total Percent','Montgomery- Total Percent','Philadelphia- Total Percent'],
                    ['DVRPC- Public Acres','NJ Suburbs- Public Acres','PA Suburbs- Public Acres','Core City- Public Acres','Developed Community- Public Acres','Growing Suburb- Public Acres','Rural Area- Public Acres','Bucks- Public Acres','Burlington- Public Acres','Camden- Public Acres','Chester- Public Acres','Delaware- Public Acres','Gloucester- Public Acres','Mercer- Public Acres','Montgomery- Public Acres','Philadelphia- Public Acres'],
                    ['DVRPC- Public Percent','NJ Suburbs- Public Percent','PA Suburbs- Public Percent','Core City- Public Percent','Developed Community- Public Percent','Growing Suburb- Public Percent','Rural Area- Public Percent','Bucks- Public Percent','Burlington- Public Percent','Camden- Public Percent','Chester- Public Percent','Delaware- Public Percent','Gloucester- Public Percent','Mercer- Public Percent','Montgomery- Public Percent','Philadelphia- Public Percent'],
                    ['DVRPC- Private Acres','NJ Suburbs- Private Acres','PA Suburbs- Private Acres','Core City- Private Acres','Developed Community- Private Acres','Growing Suburb- Private Acres','Rural Area- Private Acres','Bucks- Private Acres','Burlington- Private Acres','Camden- Private Acres','Chester- Private Acres','Delaware- Private Acres','Gloucester- Private Acres','Mercer- Private Acres','Montgomery- Private Acres','Philadelphia- Private Acres'],
                    ['DVRPC- Private Percent','NJ Suburbs- Private Percent','PA Suburbs- Private Percent','Core City- Private Percent','Developed Community- Private Percent','Growing Suburb- Private Percent','Rural Area- Private Percent','Bucks- Private Percent','Burlington- Private Percent','Camden- Private Percent','Chester- Private Percent','Delaware- Private Percent','Gloucester- Private Percent','Mercer- Private Percent','Montgomery- Private Percent','Philadelphia- Private Percent']
                ],
                data: [
                    {
                        'key': 'DVRPC',
                        columns: ['year', 'DVRPC- Total Acres']
                    },
                    {
                        'key': 'NJ Suburbs',
                        disabled: true,
                        columns: ['year', 'NJ Suburbs- Total Acres']
                    },
                    {
                        'key': 'PA Suburbs',
                        disabled: true,
                        columns: ['year', 'PA Suburbs- Total Acres']
                    },
                    {
                        'key': 'Core City',
                        disabled: true,
                        columns: ['year', 'Core City- Total Acres']
                    },
                    {
                        'key': 'Developed Community',
                        disabled: true,
                        columns: ['year', 'Developed Community- Total Acres']
                    },
                    {
                        'key': 'Growing Suburb',
                        disabled: true,
                        columns: ['year', 'Growing Suburb- Total Acres']
                    },
                    {
                        'key': 'Rural Area',
                        disabled: true,
                        columns: ['year', 'Rural Area- Total Acres']
                    },
                    {
                        'key': 'Bucks',
                        disabled: true,
                        columns: ['year', 'Bucks- Total Acres']
                    },
                    {
                        'key': 'Burlington',
                        disabled: true,
                        columns: ['year', 'Burlington- Total Acres']
                    },
                    {
                        'key': 'Camden',
                        disabled: true,
                        columns: ['year', 'Camden- Total Acres']
                    },
                    {
                        'key': 'Chester',
                        disabled: true,
                        columns: ['year', 'Chester- Total Acres']
                    },
                    {
                        'key': 'Delaware',
                        disabled: true,
                        columns: ['year', 'Delaware- Total Acres']
                    },
                    {
                        'key': 'Gloucester',
                        disabled: true,
                        columns: ['year', 'Gloucester- Total Acres']
                    },
                    {
                        'key': 'Mercer',
                        disabled: true,
                        columns: ['year', 'Mercer- Total Acres']
                    },
                    {
                        'key': 'Montgomery',
                        disabled: true,
                        columns: ['year', 'Montgomery- Total Acres']
                    },
                    {
                        'key': 'Philadelphia',
                        disabled: true,
                        columns: ['year', 'Philadelphia- Total Acres']
                    }
                ]
            },
            {
                type: 'stacked bar',
                container: 'chart4',
                dataSource: ['landConsumption4'],
                context: {
                    labels: ['Acres'],
                    keepLabels: true,
                    units: ['thousands'],
                    keepUnits: true
                },
                columnOptions: [
                    ['DVRPC- Federal','DVRPC- State','DVRPC- County','DVRPC- Municipal','DVRPC- Non-profit','DVRPC- Preserved Farmland'],
                    ['NJ Suburbs- Federal','NJ Suburbs- State','NJ Suburbs- County','NJ Suburbs- Municipal','NJ Suburbs- Non-profit','NJ Suburbs- Preserved Farmland'],
                    ['PA Suburbs- Federal','PA Suburbs- State','PA Suburbs- County','PA Suburbs- Municipal','PA Suburbs- Non-profit','PA Suburbs- Preserved Farmland'],
                    ['Core City- Federal','Core City- State','Core City- County','Core City- Municipal','Core City- Non-profit','Core City- Preserved Farmland'],
                    ['Developed Community- Federal','Developed Community- State','Developed Community- County','Developed Community- Municipal','Developed Community- Non-profit','Developed Community- Preserved Farmland'],
                    ['Growing Suburb- Federal','Growing Suburb- State','Growing Suburb- County','Growing Suburb- Municipal','Growing Suburb- Non-profit','Growing Suburb- Preserved Farmland'],
                    ['Rural Area- Federal','Rural Area- State','Rural Area- County','Rural Area- Municipal','Rural Area- Non-profit','Rural Area- Preserved Farmland'],
                    ['Bucks- Federal','Bucks- State','Bucks- County','Bucks- Municipal','Bucks- Non-profit','Bucks- Preserved Farmland'],
                    ['Burlington- Federal','Burlington- State','Burlington- County','Burlington- Municipal','Burlington- Non-profit','Burlington- Preserved Farmland'],
                    ['Camden- Federal','Camden- State','Camden- County','Camden- Municipal','Camden- Non-profit','Camden- Preserved Farmland'],
                    ['Chester- Federal','Chester- State','Chester- County','Chester- Municipal','Chester- Non-profit','Chester- Preserved Farmland'],
                    ['Delaware- Federal','Delaware- State','Delaware- County','Delaware- Municipal','Delaware- Non-profit','Delaware- Preserved Farmland'],
                    ['Gloucester- Federal','Gloucester- State','Gloucester- County','Gloucester- Municipal','Gloucester- Non-profit','Gloucester- Preserved Farmland'],
                    ['Mercer- Federal','Mercer- State','Mercer- County','Mercer- Municipal','Mercer- Non-profit','Mercer- Preserved Farmland'],
                    ['Montgomery- Federal','Montgomery- State','Montgomery- County','Montgomery- Municipal','Montgomery- Non-profit','Montgomery- Preserved Farmland'],
                    ['Philadelphia- Federal','Philadelphia- State','Philadelphia- County','Philadelphia- Municipal','Philadelphia- Non-profit','Philadelphia- Preserved Farmland'],
                ],
                data: [
                    {
                        'key': 'Federal',
                        columns: ['year', 'DVRPC- Federal']
                    },
                    {
                        'key': 'State',
                        columns: ['year', 'DVRPC- State']
                    },
                    {
                        'key': 'County',
                        columns: ['year', 'DVRPC- County']
                    },
                    {
                        'key': 'Municipal',
                        columns: ['year', 'DVRPC- Municipal']
                    },
                    {
                        'key': 'Non-profit',
                        columns: ['year', 'DVRPC- Non-profit']
                    },
                    {
                        'key': 'Preserved Farmland',
                        columns: ['year', 'DVRPC- Preserved Farmland']
                    },
                ]
            }
        ],
        text: {
            why: `<p>There is a finite amount of land available within the region, but a variety of land uses that our region must balance to maintain a high quality of life for its residents and visitors. One of the most important land use decisions that our region faces is choosing to develop our open space for housing, business, or industry; or protect it for recreation, water quality, habitat, natural beauty, or the preservation of farmland. Over the past 75 years, land consumption in the region has increased at a rate nearly five times its population growth, resulting in sprawled development patterns that bring new construction to open space rather than to already developed communities. There are many negative effects of this inefficient use of the region's land, including:</p><ul><li>Increased reliance on motorized transportation, which in turn results in the congestion of our roadways and an increased need for new infrastructure to reduce this congestion;</li><li>Increased need for redundant amenities and services as communities become more spread out;</li><li>More time each day spent traveling between destinations, which affects mental and physical health;</li><li>Challenges to, if not loss of, local agricultural economies;</li><li>A weakening of the ability of other species to thrive as their habitat is lost or movement between habitats is prevented; and</li><li>Detrimental impacts to air and water quality.</li></ul>`,
            what: `<p>DVRPC has tracked regional land use changes and the preservation of land for multiple decades. Since 1970, DVRPC has produced land use files derived from aerial photography in our nine-county region. Starting with the 1990 inventory, these files were produced every five years using Computer Assisted Mapping (CAM) and Geographic Information Systems (GIS) software. Methods and technology were updated again for the 2000 inventory and subsequent releases. While reasonable comparisons can be drawn between DVRPC's land use files produced in 2005 or later, users should be cautious when comparing these later files to earlier land use data, particularly within specific developed land use categories and/or specific municipalities.</p><p>Chart 1 shows how many acres have been developed at the regional and subregional levels since 1970, as well as how many acres of land have been used for agricultural purposes. Chart 2 shows how regional and subregional land uses (for example, commercial land and utilities) and land cover (water and wooded areas) have changed since 1970.</p><p>DVRPC also maintains an inventory of protected public and private open space in the region. The inventory tracks all publicly owned open space, and preserved farmland  and nonprofit-protected open space (both of which are typically still owned by private landowners) . States, counties, municipalities, and nonprofits (such as land trusts or conservancies) may purchase a parcel of land outright for preservation, or only purchase the development rights to the parcel.  Purchase of development rights is common for farmland, enabling the farmer landowner to continue working on the land.  Outright purchase of the parcel (not just development rights but full ownership of the parcel) can be accomplished by public or private entities.  Funding sources for land conservation vary, but public entities typically use public sources, while nonprofits may use a combination of public and private sources.</p><p>Updates to the protected open space inventory follow our four-year long-range plan cycle. Data are available in 2004, 2007, 2011, and 2016. As with the land use data, calculation methods and the accuracy of protected open space data have changed and improved over time.</p><p>Chart 3 shows acreage permanently protected from future development, including by public and private ownership at the regional and subregional levels. Chart 4 shows the type of protected open space (federal, state, or local government; non-profit, or preserved farmland) by a selected regional or subregional geography.</p>`,
            how: `<p>The rapid rate of land development has been unsustainable over the last 25 years (13 percent increase in acres per capita), but has slowed over the past decade. From 1990 to 2015, the total number of developed acres in the region increased by 195,800, which is equivalent to 21 acres of development per day over this entire period. From 2005 to 2015, the rate of development decreased to 11 acres per day, though the Great Recession was a major reason for this slowdown and it is likely that development rates increased afterward and continue to increase as the regional economy improves.</p><p>From 1990 to 2015, the region lost 78,600 acres of woodlands, a decrease of 9 percent; and 155,600 acres of agricultural lands, a decrease of 25 percent. Over that same time period and on some of the same land, land devoted to single-family homes increased by 22 percent, or 82,600 acres. Chester County developed the fastest over this period, with an additional 52,800 acres of development, an increase of 45 percent; second was Bucks County, with 41,700 more acres developed, an increase of 34 percent; third was Montgomery County, with 35,400 acres developed, an increase of 24 percent.</p><p>The <em>Connections 2045</em> Plan maintains a goal of permanently preserving 1 million total acres in the region. As of 2016, the most recent year of record, Greater Philadelphia was nearly 60 percent of the way there, with 591,900 acres preserved. Since DVRPC's 2004 protected open space inventory, the total amount of protected land increased by 170,000 acres, or 40 percent. During this time, preserved farmland doubled—adding 67,400 acres; non-profit protected lands increased by 57,700 acres, or 123 percent; and state-owned lands by 23,900 acres, or 12 percent.</p><p>As of 2016, Burlington County had the most protected open space in the region, largely because of its overlap with New Jersey's protected Pinelands region, with 222,800 acres of preserved land. Chester County was second, with 126,200 acres preserved, and Bucks County was third, with 77,700 acres preserved. The region's rural areas accounted for 64 percent of all permanently protected open space, with 376,000 acres.</p>`,
            resource: `<p>For more information on DVRPC's efforts toward land preservation and other "smart growth" practices that tackle sprawled development, see: <ul><li><a href="/SmartGrowth/">Smart Growth</a></li><li><a href="/OpenSpace/">Open Space Planning</a></li></ul><p>DVRPC's <a href="/Connections2045/MIT/">Municipal Implementation Toolbox</a> suggests the following tools for improving the region's trendline for land consumption and open space preservation:</p><ul><li><a href="/Connections2045/MIT/toolpage.html?tool=5bf42867e7179a56e21376cc">Official Map</a></li><li><a href="/Connections2045/MIT/toolpage.html?tool=5bf428d3e7179a56e2137742">Parkland Dedication and Fee-in-lieu</a></li><li><a href="/Connections2045/MIT/toolpage.html?tool=5bf42930e7179a56e2137776">Land Acquisition and Conservation Easements</a></li><li><a href="/Connections2045/MIT/toolpage.html?tool=5bf42958e7179a56e2137787">Dedicated Open Space Funding</a></li><li><a href="/Connections2045/MIT/toolpage.html?tool=5bf42985e7179a56e2137792">Comprehensive Environmental Protection Ordinances</a></li><li><a href="/Connections2045/MIT/toolpage.html?tool=5bf429fde7179a56e21377c7">Agricultural Zoning</a></li><li><a href="/Connections2045/MIT/toolpage.html?tool=5bf42a0ce7179a56e21377ca">Right-to-Farm Provisions</a></li><li><a href="/Connections2045/MIT/toolpage.html?tool=5c929acde7179a0e4089fb5d">Brownfields Redevelopment</a></li><li><a href="/Connections2045/MIT/toolpage.html?tool=5bf42b29e7179a56e2137849">Smart Location of Public Facilities</a></li></ul>`
        }
    },
    'Pavement Conditions': {
        file: 'pavementConditions.html',
        d3: [
            {
                type: 'line',
                container: 'chart',
                dataSource: ['pavement_graph_1'],
                context: {
                    labels: ['Percentage of Total Lane Miles'],
                    keepLabels: true,
                    units: ['percent'],
                    keepUnits: true
                },
                columnOptions: [
                    ['DVRPC- All', 'New Jersey- All', 'Pennsylvania- All'],
                    ['DVRPC- NHS, interstate', 'New Jersey- NHS, interstate', 'Pennsylvania- NHS, interstate'],
                    ['DVRPC- NHS, non-interstate', 'New Jersey- NHS, non-interstate', 'Pennsylvania- NHS, non-interstate'],
                    ['DVRPC- Non-NHS', 'New Jersey- Non-NHS', 'Pennsylvania- Non-NHS'],
                ],
                data: [
                    {
                        'key': 'DVRPC',
                        columns: ['year', 'DVRPC- All']
                    },
                    {
                        'key': 'New Jersey',
                        disabled: true,
                        columns: ['year', 'New Jersey- All']
                    },
                    {
                        'key': 'Pennsylvania',
                        disabled: true,
                        columns: ['year', 'Pennsylvania- All']
                    }
                ]
            },
            {
                type: 'stacked bar',
                container: 'chart2',
                dataSource: ['pavement_2_all', 'pavement_2_interstate', 'pavement_2_NHS', 'pavement_2_NoNHS'],
                context: {
                    labels: ['Lane Miles'],
                    keepLabels: true,
                    units: ['thousands'],
                    keepUnits: true
                },
                columnOptions: [
                    ['DVRPC- Poor', 'DVRPC- Fair', 'DVRPC- Good'],
                    ['New Jersey- Poor', 'New Jersey- Fair', 'New Jersey- Good'],
                    ['Pennsylvania- Poor', 'Pennsylvania- Fair', 'Pennsylvania- Good']
                ],
                data: [
                    {
                        'key': 'Poor',
                        columns: ['year', 'DVRPC- Poor']
                    },
                    {
                        'key': 'Fair',
                        columns: ['year', 'DVRPC- Fair']
                    },
                    {
                        'key': 'Good',
                        columns: ['year', 'DVRPC- Good']
                    }
                ]
            }
        ],
        text: {
            why: `<p>The region's roadways enable mobility and commerce throughout the region. Pavement in poor condition causes unnecessary vehicle damage, increasing the cost of driving, and slows down traffic, increasing congestion. The cost of shipping is passed on to consumers when they pay for goods and services. Nearly all freight movement is completed by truck for some portion of the trip. Therefore, how well we maintain the road network has an impact on how much we pay for the everyday products and services we need or want. Savings generated by good road conditions have a positive impact on our economy.</p><p>Roads can be kept in good condition with proper maintenance for a much lower cost than reconstructing a road that has fallen into a state of disrepair. Regular resurfacing and preservation helps to maintain good pavement condition. This ensures that our roads are smooth and safe for operation. Typically, a road is resurfaced every 12 to 15 years, though a high-traffic volume interstate may be resurfaced every seven years, while a lower-volume collector road may be resurfaced only every 25 years.</p>`,
            what: `<p>Both the New Jersey Department of Transportation (NJ DOT) and the Pennsylvania Department of Transportation (PennDOT) track pavement condition as required by federal regulations for state-maintained and National Highway System (NHS) roadways. PennDOT maintains a Pavement Asset Management System (PAMS), which tracks the condition of all federal- and state-owned roadways. NJ DOT has a Pavement Management System that likewise tracks road condition for all federal and state-owned road segments. One measure of road condition is the International Roughness Index (IRI). The IRI determines pavement roughness conditions based on total inches of surface variation per mile. It is important to note that segment miles is used in the pavement conditions graphs. Segment miles measures the roadway length without regard to width. Lane miles would take length and width into account but are only reported by NJ DOT. Segment miles is reported by both agencies. Consequently, narrower roads will be overweighted in the data and wider interstates underweighted.</p><p>Pavement performance targets for National Highway System (NHS) roads have been identified by each state DOT and MPO (and can be different from each other) for a four-year period. The initial set of targets was reported by DOTs to FHWA by May 20, 2018, with a target horizon date of 2021. MPOs then had 180 days to report their targets to state DOTs for the same four-year period. Targets are required for the full extent of the system, regardless of ownership. Data is based on through, mainline lanes only and does not include ramp conditions. Data must be collected in one direction for IRI, percent cracking, rutting, and faulting. Pavement Surface Rating (PSR) can be used as an optional performance measure on roads with speeds of less than 40 miles per hour (mph). No more than 5 percent of the NHS system can have missing or invalid data. The rules also set a minimum target threshold for Interstate pavements, where no more than 5 percent can be in poor condition.</p>`,
            how: `<p>While the region continues to prioritize asset management with a fix-it-first strategy, pavement condition in Greater Philadelphia continues to fight an uphill battle against aging infrastructure. Between 2010 and 2017, the region saw 271.4 segment miles move from Good and Fair ratings to Poor ones—a 5.3 percent increase. Pennsylvania roadways account for much of the deficient pavement in the region, with 364.3 segment miles falling into poor condition (a 25.5 percent increase during this time period).</p><p>Shifting financial resources to reduce the backlog of structurally deficient bridges is a contributing factor in pavement decline in this subregion. Despite the poor numbers over the seven-year period, however, conditions have been steadily improving in Pennsylvania since 2014, when poor pavement conditions peaked at 39.4 percent of all lanes miles. This improvement came following the passage of Act 89, which generated additional revenue for transportation improvements throughout the commonwealth.</p><p>In New Jersey, asset management practices have focused on improving pavement condition, and ratings  have been steadily improving. Between 2010 and 2017, the subregion succeeded in shifting 175.9 lane segment miles into Good condition (a 16% increase). New Jersey benefits from a newer transportation network than the Pennsylvania subregion and has not yet faced the same end-of-life challenges for much of its infrastructure.</p>`,
            resource: `<p>To see how conditions are planned to be addressed for the next 25 years, see what is listed among DVRPC's <a href="/webmaps/MRP2045/">Connections 2045 Transportation Projects</a>.</p><p>DVRPC's <a href="/Connections2045/MIT/">Municipal Implementation Toolbox</a> suggests the following tools for improving pavement conditions:</p><ul><li><a href="/Connections2045/MIT/toolpage.html?tool=5bf434aee7179a56e2137eae">Road Safety Audit</a></li><li><a href="/Connections2045/MIT/toolpage.html?tool=5cb78214fb6fc041ab93080d">Connected &amp; Automated Vehicle Preparations</a></li></ul>`
        }
    }
}

// @TODO: rebuild column options in the following way:
    // columnOptions: {
    //     DVRPC: ['DVRPC - Core City', 'DVRPC - Developed Community'],
    //     ChesterCo: ['etc', 'etc', 'etc']
    // }
// Toggle values need to be renamed for this to work. 
// It lets chart# not rely on the order of columnOptions being the same as the toggle.
// ensures the right data is grabbed everytime and is more robust/easier to manage, update, etc.
// also faster b/c object indexing instead of array..

export default snippetsRef