import { fullGeography, lightGeography } from './commonGeographies.js'

const snippetsRef = {
    'Air Quality': {
        file: 'airQuality.html',
        d3: [
            {
                type: 'line and bar',
                container: 'chart',
                dataSource: './data/aq_yearly.csv',
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
                dataSource: './data/aq_quarterly.csv',
                columnOptions: [
                    ['unhealthySensitiveOzone', 'unhealthyOzone', 'veryUnhealthyOzone'],
                    ['unhealthySensitivePM', 'unhealthyPM', 'veryUnhealthyPM']
                ],
                newKeys: true,
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
            why: `<p>Ground-level ozone and fine particulate matter (PM<sub>2.5</sub>)--particles have a diameter of less than 2.5 micrometers and can penetrate the human lung and potentially the circulatory system.  Both these pollutants can cause respiratory problems in even healthy people, but are especially a concern for sensitive populations, such as people already suffering from asthma, children, and the elderly. Air pollution has been shown to have disproportionate effects on persons of color and low income populations. In addition to higher costs for households and the healthcare system, its economic implications include more days of missed work and school.</p>`,
            what: `<p>The DVPRC region currently does not meet federal air quality standards for these two pollutants Because the region does not meet federal air quality standards, the Clean Air Act requires DVRPC to show that regional transportation projects will not harm air quality.</p><p>To compare the potential harm of different pollutants on the same scale, the EPA creates an Air Quality Index (AQI) for each pollutant that ranges from 0 to 500. Air quality can be classified into six different categories based on AQI: Good (0 to 50), Moderate (51 to 100), Unhealthy for Sensitive Groups (101 to 150), Unhealthy (151 to 200), Very Unhealthy (201 to 300), and Hazardous (301 to 500). To determine if a particular day violates the EPA air quality standards, the AQI for each monitored pollutant is calculated and the highest value across all monitored pollutants is taken. If that value is greater than 100, a violating day has occurred.</p><p>The first chart shows the number of days violating air quality standards per year since 1980, along with a five year rolling average, based on the Philadelphia-Camden-Wilmington core based statistical area.</p><p>The second chart shows the number of days per year in each violating category (Unhealthy for Sensitive Populations, Unhealthy, Very Unhealthy, and Hazardous) for both Ozone and PM<sub>2.5</sub>. Toggling between ozone and PM<sub>2.5</sub> data, ozone data are available dating back to 1980, while PM<sub>2.5</sub> data are only available from the fourth quarter of 1998. Neither pollutant reached hazardous levels in the region during the available data period. Both ozone and PM<sub>2.5</sub> levels are generally higher during the summer months, when weather conditions are conducive to ozone formation and local accumulation of PM<sub>2.5</sub> pollution, although elevated levels of PM<sub>2.5</sub> have also occurred in the winter months.</p>`,
            how: `<p>The latest air quality data from the Environmental Protection Agency shows the region continuing its reduction of ozone and fine particulate matter (PM<sub>2.5</sub>) pollutants. Days violating National Ambient Air Quality Standards (NAAQS) and the severity of those days have declined steadily over the past five years. As seen in the first chart, since 2014, the region has averaged just 22 violating days per year. Although air quality is greatly influenced by weather conditions, long-term trends show a dramatic decrease in violating days over the last two decades.</p><p>The second chart below shows that concentrations of both pollutants are decreasing in severity. For ozone, the last Very Unhealthy day occurred in 2007, and for PM<sub>2.5</sub>, it was 2008. But ozone tends to violate air quality standards more frequently than PM<sub>2.5</sub>.</p><p>The dramatic declines in unhealthy air quality days of the past few decades show the impact federal emissions standards have had, along with greater public awareness of pollutants and ways to lessen their impact. For more resources on air quality and ways DVRPC is working with its partners to combat it, see <a href="http://www.airqualitypartnership.org/">DVRPC's Air Quality Partnership site</a>.</p>`
        }
    },
    'Miles Driven': {
        file: 'milesDriven.html',   
        d3: [
            {
                type: 'line',
                container: 'chart',
                dataSource: './data/vmtWeb.csv',
                columnOptions: [
                    ['vmtPerCapDVRPC', 'vmtPerCapNJSuburbs', 'vmtPerCapPASuburbs', 'vmtPerCapPhillySubregion', 'vmtPerCapBucksCo', 'vmtPerCapChesterCo', 'vmtPerCapDelawareCo', 'vmtPerCapMontgomeryCo', 'vmtPerCapPhillyCo', 'vmtPerCapBurlingtonCo', 'vmtPerCapCamdenCo', 'vmtPerCapGloucesterCo', 'vmtPerCapMercerCo'],
                    ['vmtDVRPC', 'vmtNJSuburbs', 'vmtPASuburbs', 'vmtPhillySubregion', 'vmtBucksCo', 'vmtChesterCo', 'vmtDelawareCo', 'vmtMontgomeryCo', 'vmtPhillyCo', 'vmtBurlingtonCo', 'vmtCamdenCo', 'vmtGloucesterCo', 'vmtMercerCo'],
                    ['vmtPerVehicleDVRPC', 'vmtPerVehicleNJSuburbs', 'vmtPerVehiclePASuburbs', 'vmtPerVehiclePhillySubregion', 'vmtPerVehicleBucksCo', 'vmtPerVehicleChesterCo', 'vmtPerVehicleDelawareCo', 'vmtPerVehicleMontgomeryCo', 'vmtPerVehiclePhillyCo', 'vmtPerVehicleBurlingtonCo', 'vmtPerVehicleCamdenCo', 'vmtPerVehicleGloucesterCo', 'vmtPerVehicleMercerCo']
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
                        'key' : 'PA Suburbs',
                        'disabled': true,
                        'columns': ['year', 'vmtPerCapPASuburbs']
                    },
                    {
                        'key' : 'Philadelphia Subregion',
                        'columns': ['year', 'vmtPerCapPhillySubregion']
                    },
                    {
                        'key' : 'Bucks Co',
                        'disabled': true,
                        'columns': ['year', 'vmtPerCapBucksCo']
                    },
                    {
                        'key' : 'Chester Co',
                        'disabled': true,
                        'columns': ['year', 'vmtPerCapChesterCo']
                    },
                    {
                        'key' : 'Delaware Co',
                        'disabled': true,
                        'columns': ['year', 'vmtPerCapDelawareCo']
                    },
                    {
                        'key' : 'Montgomery Co',
                        'disabled': true,
                        'columns': ['year', 'vmtPerCapMontgomeryCo']
                    },
                    {
                        'key' : 'Philadelphia Co',
                        'disabled': true,
                        'columns': ['year', 'vmtPerCapPhillyCo']
                    },
                    {
                        'key' : 'Burlington Co',
                        'disabled': true,
                        'columns': ['year', 'vmtPerCapBurlingtonCo']
                    },
                    {
                        'key' : 'Camden Co',
                        'disabled': true,
                        'columns': ['year', 'vmtPerCapCamdenCo']
                    },
                    {
                        'key' : 'Gloucester Co',
                        'disabled': true,
                        'columns': ['year', 'vmtPerCapGloucesterCo']
                    },
                    {
                        'key' : 'Mercer Co',
                        'disabled': true,
                        'columns': ['year', 'vmtPerCapMercerCo']
                    }
                ]
            }
        ],
        text: {
            why: `<p>Annual miles driven per capita, or Vehicle Miles Traveled (VMT) is an indicator of travel demand on roads. VMT can be used to understand where funds might be allocated for strained roadways. A negative trend in per capita VMT can indicate a slower economy (i.e. household funds are constrained so fewer discretionary trips are made) or a change in travel mode preference (i.e. populations are increasingly opting for non-auto travel modes).</p>`,
            what: `<p>Annual Miles driven, or VMT, is a distance-based measure of all vehicle travel on roadways (auto and truck) in a given year. Per capita VMT is the same measure divided by the same area's population for the same year. Per vehicle VMT divides VMT by the number of household vehicles available by residents of that geography.</p>`,
            how: ``
        }
    },
    'Educational Attainment': {
        file: 'educationalAttainment.html',
        d3: [
            {
                // HS levels 
                type: 'line',
                container: 'chart',
                dataSource: './data/edattainHS.csv',
                data: [
                    {
                        'key': 'DVRPC',
                        'columns': ['year', 'hsRateDVRPC']
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
                type: 'stacked area',
                container: 'chart2',
                dataSource: './data/edattainComprehensive.csv',
                columnOptions: [
                    ['DVRPC-Less than High School', 'DVRPC-Some High School', 'DVRPC-Graduated High School', 'DVRPC-Some College', 'DVRPC-Associates Degree', 'DVRPC-Bachelors Degree', 'DVRPC-Graduate/Professional Degree'],
                    ['Philadelphia Subregion-Less than High School', 'Philadelphia Subregion-Some High School', 'Philadelphia Subregion-Graduated High School', 'Philadelphia Subregion-Some College', 'Philadelphia Subregion-Associates Degree', 'Philadelphia Subregion-Bachelors Degree', 'Philadelphia Subregion-Graduate/Professional Degree'],
                    ['New Jersey Suburbs-Less than High School', 'New Jersey Suburbs-Some High School', 'New Jersey Suburbs-Graduated High School', 'New Jersey Suburbs-Some College', 'New Jersey Suburbs-Associates Degree', 'New Jersey Suburbs-Bachelors Degree', 'New Jersey Suburbs-Graduate/Professional Degree'],
                    ['Pennsylvania Suburbs-Less than High School', 'Pennsylvania Suburbs-Some High School', 'Pennsylvania Suburbs-Graduated High School', 'Pennsylvania Suburbs-Some College', 'Pennsylvania Suburbs-Associates Degree', 'Pennsylvania Suburbs-Bachelors Degree', 'Pennsylvania Suburbs-Graduate/Professional Degree'],
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
        ]
    },
    'Roadway Safety': {
        file: 'roadwaySafety.html',
        d3: [
            {
                type: 'stacked bar plus line',
                container: 'chart',
                dataSource: './data/crashesWeb.csv',
                columnOptions: [
                    ['ksi5yrAvgDVRPC', 'ksiMotorVehicleDVRPC', 'ksiBikePedDVRPC'],
                    ['ksi5yrAvgPhillySubregion', 'ksiMotorVehiclePhillySubregion', 'ksiBikePedPhillySubregion'],
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
                dataSource: './data/crashesWeb.csv',
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
                dataSource: './data/crashesWeb.csv',
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
        ]
    },
    'Global Connectivity': {
        file: 'globalConnectivity.html',
        d3: [
            {
                type: 'stacked bar',
                container: 'chart',
                dataSource: './data/PHL_IntlDest.csv',
                columnOptions: [
                    ['Middle Eastern', 'Mexican', 'Canadian', 'Caribbean', 'European'],
                    ['Middle Eastern (non-seasonal)', 'Mexican (non-seasonal)', 'Canadian (non-seasonal)', 'Canadian (seasonal)', 'Caribbean (non-seasonal)', 'Caribbean (seasonal)', 'European (non-seasonal)', 'European (seasonal)']
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
        ]
    },
    'Housing Activity': {
        file: 'housingActivity.html',
        d3: [
            {
                type: 'line',
                container: 'chart',
                dataSource: './data/permits_graph_1.csv',
                columnOptions: [
                    ['ratio_annual'],
                    ['ratio_cumulative']
                ],
                newKeys: true,
                data: [
                    {
                        'key': 'Ratio Annual',
                        columns: ['year', 'ratio_annual']
                    }
                ]
            },
            {
                type: 'stacked bar',
                container: 'chart2',
                dataSource: './data/permits_graph_2A.csv',
                secondDataSource: './data/permits_graph_2B.csv',
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
                dataSource: './data/permits_graph_3A.csv',
                secondDataSource: './data/permits_graph_3B.csv',
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
                        'key': 'Large Multi-Family',
                        columns: ['year', 'DVRPC- large multi-family']
                    },
                    {
                        'key': 'Small Multi-Family',
                        columns: ['year', 'DVRPC- small multi-family']
                    },
                    {
                        'key': 'Single Family',
                        columns: ['year', 'DVRPC- single family']
                    }
                ]
            }
        ]
    },
    'Housing Affordability': {
        file: 'housingAffordability.html',
        d3: [
            {
                type: 'line',
                container: 'chart',
                dataSource: './data/housing_afford_graph_1.csv',
                data: fullGeography
            },
            {
                type: 'stacked bar',
                container: 'chart2',
                dataSource: './data/housing_afford_graph_2.csv',
                columnOptions: [
                    ['DVRPC- Not Computed- Own', 'DVRPC- Not Computed- Rent', 'DVRPC- Below 35%- Own', 'DVRPC- Below 35%- Rent', 'DVRPC- Above 35%- Rent', 'DVRPC- Above 35%- Own'],
                    ['Pennsylvania Suburbs- Not Computed- Own', 'Pennsylvania Suburbs- Not Computed- Rent', 'Pennsylvania Suburbs- Below 35%- Own', 'Pennsylvania Suburbs- Below 35%- Rent', 'Pennsylvania Suburbs- Above 35%- Rent', 'Pennsylvania Suburbs- Above 35%- Own'],
                    ['New Jersey Suburbs- Not Computed- Own', 'New Jersey Suburbs- Not Computed- Rent', 'New Jersey Suburbs- Below 35%- Own', 'New Jersey Suburbs- Below 35%- Rent', 'New Jersey Suburbs- Above 35%- Rent', 'New Jersey Suburbs- Above 35%- Own'],
                    ['Philadelphia Subregion- Not Computed- Own', 'Philadelphia Subregion- Not Computed- Rent', 'Philadelphia Subregion- Below 35%- Own', 'Philadelphia Subregion- Below 35%- Rent', 'Philadelphia Subregion- Above 35%- Rent', 'Philadelphia Subregion- Above 35%- Own'],
                    ['Core City- Not Computed- Own', 'Core City- Not Computed- Rent', 'Core City- Below 35%- Own', 'Core City- Below 35%- Rent', 'Core City- Above 35%- Rent', 'Core City- Above 35%- Own'],
                    ['Developed Community- Not Computed- Own', 'Developed Community- Not Computed- Rent', 'Developed Community- Below 35%- Own', 'Developed Community- Below 35%- Rent', 'Developed Community- Above 35%- Rent', 'Developed Community- Above 35%- Own'],
                    ['Growing Suburb- Not Computed- Own', 'Growing Suburb- Not Computed- Rent', 'Growing Suburb- Below 35%- Own', 'Growing Suburb- Below 35%- Rent', 'Growing Suburb- Above 35%- Rent', 'Growing Suburb- Above 35%- Own'],
                    ['Rural Area- Not Computed- Own', 'Rural Area- Not Computed- Rent', 'Rural Area- Below 35%- Own', 'Rural Area- Below 35%- Rent', 'Rural Area- Above 35%- Rent', 'Rural Area- Above 35%- Own'],
                    ['Bucks County- Not Computed- Own', 'Bucks County- Not Computed- Rent', 'Bucks County- Below 35%- Own', 'Bucks County- Below 35%- Rent', 'Bucks County- Above 35%- Rent', 'Bucks County- Above 35%- Own'],
                    ['Chester County- Not Computed- Own', 'Chester County- Not Computed- Rent', 'Chester County- Below 35%- Own', 'Chester County- Below 35%- Rent', 'Chester County- Above 35%- Rent', 'Chester County- Above 35%- Own'],
                    ['Delaware County- Not Computed- Own', 'Delaware County- Not Computed- Rent', 'Delaware County- Below 35%- Own', 'Delaware County- Below 35%- Rent', 'Delaware County- Above 35%- Rent', 'Delaware County- Above 35%- Own'],
                    ['Montgomery County- Not Computed- Own', 'Montgomery County- Not Computed- Rent', 'Montgomery County- Below 35%- Own', 'Montgomery County- Below 35%- Rent', 'Montgomery County- Above 35%- Rent', 'Montgomery County- Above 35%- Own'],
                    ['Philadelphia County- Not Computed- Own', 'Philadelphia County- Not Computed- Rent', 'Philadelphia County- Below 35%- Own', 'Philadelphia County- Below 35%- Rent', 'Philadelphia County- Above 35%- Rent', 'Philadelphia County- Above 35%- Own'],
                    ['Burlington County- Not Computed- Own', 'Burlington County- Not Computed- Rent', 'Burlington County- Below 35%- Own', 'Burlington County- Below 35%- Rent', 'Burlington County- Above 35%- Rent', 'Burlington County- Above 35%- Own'],
                    ['Camden County- Not Computed- Own', 'Camden County- Not Computed- Rent', 'Camden County- Below 35%- Own', 'Camden County- Below 35%- Rent', 'Camden County- Above 35%- Rent', 'Camden County- Above 35%- Own'],
                    ['Gloucester County- Not Computed- Own', 'Gloucester County- Not Computed- Rent', 'Gloucester County- Below 35%- Own', 'Gloucester County- Below 35%- Rent', 'Gloucester County- Above 35%- Rent', 'Gloucester County- Above 35%- Own'],
                    ['Mercer County- Not Computed- Own', 'Mercer County- Not Computed- Rent', 'Mercer County- Below 35%- Own', 'Mercer County- Below 35%- Rent', 'Mercer County- Above 35%- Rent', 'Mercer County- Above 35%- Own']
                ],
                data: [
                    {
                        'key': 'Not Computed - Own',
                        columns: ['year', 'DVRPC- Not Computed- Own']
                    },
                    {
                        'key': 'Not Computed - Rent',
                        columns: ['year', 'DVRPC- Not Computed- Rent']
                    },
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
                    }
                ]
            },
            {
                type: 'stacked bar',
                container: 'chart3',
                dataSource: './data/housing_afford_graph_3.csv',
                columnOptions: [
                    ['DVRPC- Not Computed', 'DVRPC- 0.0-9.9%', 'DVRPC- 10.0-14.9%', 'DVRPC- 15.0-19.9%', 'DVRPC- 20.0-24.9%', 'DVRPC- 25.0-29.9%', 'DVRPC- 30.0-34.9%', 'DVRPC- 35.0-39.9%', 'DVRPC- 40.0-49.9%', 'DVRPC- 50%+'],
                    ['Pennsylvania Suburbs- Not Computed', 'Pennsylvania Suburbs- 0.0-9.9%', 'Pennsylvania Suburbs- 10.0-14.9%', 'Pennsylvania Suburbs- 15.0-19.9%', 'Pennsylvania Suburbs- 20.0-24.9%', 'Pennsylvania Suburbs- 25.0-29.9%', 'Pennsylvania Suburbs- 30.0-34.9%', 'Pennsylvania Suburbs- 35.0-39.9%', 'Pennsylvania Suburbs- 40.0-49.9%', 'Pennsylvania Suburbs- 50%+'],
                    ['New Jersey Suburbs- Not Computed', 'New Jersey Suburbs- 0.0-9.9%', 'New Jersey Suburbs- 10.0-14.9%', 'New Jersey Suburbs- 15.0-19.9%', 'New Jersey Suburbs- 20.0-24.9%', 'New Jersey Suburbs- 25.0-29.9%', 'New Jersey Suburbs- 30.0-34.9%', 'New Jersey Suburbs- 35.0-39.9%', 'New Jersey Suburbs- 40.0-49.9%', 'New Jersey Suburbs- 50%+'],
                    ['Philadelphia Subregion- Not Computed', 'Philadelphia Subregion- 0.0-9.9%', 'Philadelphia Subregion- 10.0-14.9%', 'Philadelphia Subregion- 15.0-19.9%', 'Philadelphia Subregion- 20.0-24.9%', 'Philadelphia Subregion- 25.0-29.9%', 'Philadelphia Subregion- 30.0-34.9%', 'Philadelphia Subregion- 35.0-39.9%', 'Philadelphia Subregion- 40.0-49.9%', 'Philadelphia Subregion- 50%+'],
                    ['Core City- Not Computed', 'Core City- 0.0-9.9%','Core City- 10.0-14.9%', 'Core City- 15.0-19.9%', 'Core City- 20.0-24.9%', 'Core City- 25.0-29.9%', 'Core City- 30.0-34.9%', 'Core City- 35.0-39.9%', 'Core City- 40.0-49.9%', 'Core City- 50%+'],
                    ['Developed Community- Not Computed', 'Developed Community- 0.0-9.9%', 'Developed Community- 10.0-14.9%', 'Developed Community- 15.0-19.9%', 'Developed Community- 20.0-24.9%', 'Developed Community- 25.0-29.9%', 'Developed Community- 30.0-34.9%', 'Developed Community- 35.0-39.9%', 'Developed Community- 40.0-49.9%', 'Developed Community- 50%+'],
                    ['Growing Suburb- Not Computed', 'Growing Suburb- 0.0-9.9%', 'Growing Suburb- 10.0-14.9%', 'Growing Suburb- 15.0-19.9%', 'Growing Suburb- 20.0-24.9%', 'Growing Suburb- 25.0-29.9%', 'Growing Suburb- 30.0-34.9%', 'Growing Suburb- 35.0-39.9%', 'Growing Suburb- 40.0-49.9%', 'Growing Suburb- 50%+'],
                    ['Rural Area- Not Computed', 'Rural Area- 0.0-9.9%', 'Rural Area- 10.0-14.9%', 'Rural Area- 15.0-19.9%', 'Rural Area- 20.0-24.9%', 'Rural Area- 25.0-29.9%', 'Rural Area- 30.0-34.9%', 'Rural Area- 35.0-39.9%', 'Rural Area- 40.0-49.9%', 'Rural Area- 50%+'],
                    ['Bucks County- Not Computed', 'Bucks County- 0.0-9.9%', 'Bucks County- 10.0-14.9%', 'Bucks County- 15.0-19.9%', 'Bucks County- 20.0-24.9%', 'Bucks County- 25.0-29.9%', 'Bucks County- 30.0-34.9%', 'Bucks County- 35.0-39.9%', 'Bucks County- 40.0-49.9%', 'Bucks County- 50%+'],
                    ['Chester County- Not Computed', 'Chester County- 0.0-9.9%', 'Chester County- 10.0-14.9%', 'Chester County- 15.0-19.9%', 'Chester County- 20.0-24.9%', 'Chester County- 25.0-29.9%', 'Chester County- 30.0-34.9%', 'Chester County- 35.0-39.9%', 'Chester County- 40.0-49.9%', 'Chester County- 50%+'],
                    ['Delaware County- Not Computed', 'Delaware County- 0.0-9.9%', 'Delaware County- 10.0-14.9%', 'Delaware County- 15.0-19.9%', 'Delaware County- 20.0-24.9%', 'Delaware County- 25.0-29.9%', 'Delaware County- 30.0-34.9%', 'Delaware County- 35.0-39.9%', 'Delaware County- 40.0-49.9%', 'Delaware County- 50%+'],
                    ['Montgomery County- Not Computed', 'Montgomery County- 0.0-9.9%','Montgomery County- 10.0-14.9%', 'Montgomery County- 15.0-19.9%', 'Montgomery County- 20.0-24.9%', 'Montgomery County- 25.0-29.9%', 'Montgomery County- 30.0-34.9%', 'Montgomery County- 35.0-39.9%', 'Montgomery County- 40.0-49.9%', 'Montgomery County- 50%+'],
                    ['Philadelphia County- Not Computed', 'Philadelphia County- 0.0-9.9%', 'Philadelphia County- 10.0-14.9%', 'Philadelphia County- 15.0-19.9%', 'Philadelphia County- 20.0-24.9%', 'Philadelphia County- 25.0-29.9%', 'Philadelphia County- 30.0-34.9%', 'Philadelphia County- 35.0-39.9%', 'Philadelphia County- 40.0-49.9%', 'Philadelphia County- 50%+'],
                    ['Burlington County- Not Computed', 'Burlington County- 0.0-9.9%', 'Burlington County- 10.0-14.9%', 'Burlington County- 15.0-19.9%', 'Burlington County- 20.0-24.9%', 'Burlington County- 25.0-29.9%', 'Burlington County- 30.0-34.9%', 'Burlington County- 35.0-39.9%', 'Burlington County- 40.0-49.9%', 'Burlington County- 50%+'],
                    ['Camden County- Not Computed', 'Camden County- 0.0-9.9%', 'Camden County- 10.0-14.9%', 'Camden County- 15.0-19.9%', 'Camden County- 20.0-24.9%', 'Camden County- 25.0-29.9%', 'Camden County- 30.0-34.9%', 'Camden County- 35.0-39.9%', 'Camden County- 40.0-49.9%', 'Camden County- 50%+'],
                    ['Gloucester County- Not Computed', 'Gloucester County- 0.0-9.9%', 'Gloucester County- 10.0-14.9%', 'Gloucester County- 15.0-19.9%', 'Gloucester County- 20.0-24.9%', 'Gloucester County- 25.0-29.9%', 'Gloucester County- 30.0-34.9%', 'Gloucester County- 35.0-39.9%', 'Gloucester County- 40.0-49.9%', 'Gloucester County- 50%+'],
                    ['Mercer County- Not Computed', 'Mercer County- 0.0-9.9%', 'Mercer County- 10.0-14.9%', 'Mercer County- 15.0-19.9%', 'Mercer County- 20.0-24.9%', 'Mercer County- 25.0-29.9%', 'Mercer County- 30.0-34.9%', 'Mercer County- 35.0-39.9%', 'Mercer County- 40.0-49.9%', 'Mercer County- 50%+']
                ],
                data: [
                    {
                        'key': 'Not Computed',
                        columns: ['year', 'DVRPC- Not Computed']
                    },
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
                ]
            },
        ]
    },
    'Job Growth': {
        file: 'jobGrowth.html',
        d3: [
            {
                type: 'line',
                container: 'chart',
                dataSource: './data/jobs_graph1.csv',
                columnOptions: [
                    ['DVRPC', 'New Jersey Suburbs', 'Pennsylvania Suburbs', 'Philadelphia Subregion', 'Bucks', 'Burlington', 'Camden', 'Chester', 'Delaware', 'Gloucester', 'Mercer', 'Montgomery', 'Philadelphia'],
                    ['DVRPC-total', 'New Jersey Suburbs-total', 'Pennsylvania Suburbs-total', 'Philadelphia Subregion-total', 'Bucks-total', 'Burlington-total', 'Camden-total', 'Chester-total', 'Delaware-total', 'Gloucester-total', 'Mercer-total', 'Montgomery-total', 'Philadelphia-total']
                ],
                data: lightGeography
            },
            {
                type: 'stacked bar',
                container: 'chart2',
                dataSource: './data/jobs_graph2.csv',
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
                dataSource: './data/jobs_graph3.csv',
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
        ]
    },
    'Racial Ethnic Disparities':{
        file: 'racialAndEthnicDisparities.html',
        d3: [
            {
                type: 'line',
                container: 'chart',
                dataSource: './data/medIncByRace_wide.csv',
                data: [
                    {
                        'key': 'DVRPC Region',
                        columns: ['year', 'Region_difference']
                    },
                    {
                        'key': 'Philadelphia',
                        columns: ['year', 'Philadelphia_difference']
                    },
                    {
                        'key': 'PA Suburban Counties',
                        columns: ['year', 'PA Suburban Counties_difference']
                    },
                    {
                        'key': 'NJ Suburban Counties',
                        columns: ['year', 'NJ Suburban Counties_difference']
                    },
                    {
                        'key': 'Bucks County',
                        disabled: true,
                        columns: ['year', 'Bucks_difference']
                    },
                    {
                        'key': 'Burlington County',
                        disabled: true,
                        columns: ['year', 'Burlington_difference']
                    },
                    {
                        'key': 'Camden County',
                        disabled: true,
                        columns: ['year', 'Camden_difference']
                    },
                    {
                        'key': 'Chester County',
                        disabled: true,
                        columns: ['year', 'Chester_difference']
                    },
                    {
                        'key': 'Delaware County',
                        disabled: true,
                        columns: ['year', 'Delaware_difference']
                    },
                    {
                        'key': 'Gloucester County',
                        disabled: true,
                        columns: ['year', 'Gloucester_difference']
                    },
                    {
                        'key': 'Mercer County',
                        disabled: true,
                        columns: ['year', 'Mercer_difference']
                    },
                    {
                        'key': 'Montgomery County',
                        disabled: true,
                        columns: ['year', 'Montgomery_difference']
                    }
                ]
            },
            {
                type: 'line',
                container: 'chart2',
                dataSource: './data/medIncByRace_wide.csv',
                columnOptions: [
                    ['Region_minorityInc', 'Region_whtNonHispInc'],
                    ['Philadelphia_minorityInc', 'Philadelphia_whtNonHispInc'],
                    ['PA Suburban Counties_minorityInc', 'PA Suburban Counties_whtNonHispInc'],
                    ['Burlington_minorityInc', 'Burlington_whtNonHispInc'],
                    ['Camden_minorityInc', 'Camden_whtNonHispInc'],
                    ['Gloucester_minorityInc', 'Gloucester_whtNonHispInc'],
                    ['Mercer_minorityInc', 'Mercer_whtNonHispInc']
                ],
                data: [
                    {
                        'key': 'Minority Income',
                        columns: ['year', 'Region_minorityInc']
                    },
                    {
                        'key': 'White Non-Hispanic Income',
                        columns: ['year', 'Region_whtNonHispInc']
                    }
                ]
            },
            {
                type: 'line',
                container: 'chart3',
                dataSource: './data/RaceEthnSegregation.csv',
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
                dataSource: './data/labForceByRace_wide.csv',
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
                        'key': 'Participation Gap',
                        columns: ['year', 'Region_difference']
                    }
                ]
            },
            {
                type: 'line',
                container: 'chart5',
                dataSource: './data/labForceByRace_wide.csv',
                columnOptions: [
                    ['Region_labWht', 'Region_labNonWht'],
                    ['NJ Suburban Counties_labWht', 'NJ Suburban Counties_labNonWht'],
                    ['PA Suburban Counties_labWht', 'PA Suburban Counties_labNonWht'],
                    ['Bucks_labWht', 'Bucks_labNonWht'],
                    ['Chester_labWht', 'Chester_labNonWht'],
                    ['Delaware_labWht', 'Delaware_labNonWht'],
                    ['Montgomery_labWht', 'Montgomery_labNonWht'],
                    ['Burlington_labWht', 'Burlington_labNonWht'],
                    ['Camden_labWht', 'Camden_labNonWht'],
                    ['Gloucester_labWht', 'Gloucester_labNonWht'],
                    ['Mercer_labWht', 'Mercer_labNonWht'],
                    ['Philadelphia_labWht', 'Philadelphia_labNonWht']
                ],
                data: [
                    {
                        'key': 'White',
                        columns: ['year', 'Region_labWht']
                    },
                    {
                        'key': 'Non-White',
                        columns: ['year', 'Region_labNonWht']
                    }
                ]
            },
            {
                type: 'line',
                container: 'chart6',
                dataSource: './data/labForceByEth_wide.csv',
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
                        'key': 'Labor Force Participation Gap',
                        columns: ['year', 'Region_difference']
                    }
                ]
            },
            {
                type: 'line',
                container: 'chart7',
                dataSource: './data/labForceByEth_wide.csv',
                columnOptions: [
                    ['Region_labWht', 'Region_labHisp'],
                    ['NJ Suburban Counties_labWht', 'NJ Suburban Counties_labHisp'],
                    ['PA Suburban Counties_labWht', 'PA Suburban Counties_labHisp'],
                    ['Bucks_labWht', 'Bucks_labHisp'],
                    ['Chester_labWht', 'Chester_labHisp'],
                    ['Delaware_labWht', 'Delaware_labHisp'],
                    ['Montgomery_labWht', 'Montgomery_labHisp'],
                    ['Burlington_labWht', 'Burlington_labHisp'],
                    ['Camden_labWht', 'Camden_labHisp'],
                    ['Gloucester_labWht', 'Gloucester_labHisp'],
                    ['Mercer_labWht', 'Mercer_labHisp'],
                    ['Philadelphia_labWht', 'Philadelphia_labHisp']
                ],
                data: [
                    {
                        'key': 'Non-Latinx',
                        columns: ['year', 'Region_labWht']
                    },
                    {
                        'key': 'Latinx',
                        columns: ['year', 'Region_labHisp']
                    }
                ]
            },

        ]
    },
    'Income Disparities': {
        file: 'incomeDisparities.html',
        d3: [
            {
                type: 'line',
                container: 'chart',
                dataSource: './data/IncomeQuintileTopBottomGap.csv',
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
                dataSource: './data/IncomeQuintiles.csv',
                columnOptions: [
                    ['RegionMean_1st', 'RegionMean_2nd', 'RegionMean_3rd', 'RegionMean_4th', 'RegionMean_5th'],
                    ['PhilCoMean_1st', 'PhilCoMean_2nd', 'PhilCoMean_3rd', 'PhilCoMean_4th', 'PhilCoMean_5th'],
                    ['NJCosMean_1st', 'NJCosMean_2nd', 'NJCosMean_3rd', 'NJCosMean_4th', 'NJCosMean_5th'],
                    ['BuckCoMean_1st', 'BuckCoMean_2nd', 'BuckCoMean_3rd', 'BuckCoMean_4th', 'BuckCoMean_5th'],
                    ['ChesCoMean_1st', 'ChesCoMean_2nd', 'ChesCoMean_3rd', 'ChesCoMean_4th', 'ChesCoMean_5th'],
                    ['DelCoMean_1st', 'DelCoMean_2nd', 'DelCoMean_3rd', 'DelCoMean_4th', 'DelCoMean_5th'],
                    ['MontCoMean_1st', 'MontCoMean_2nd', 'MontCoMean_3rd', 'MontCoMean_4th', 'MontCoMean_5th'],
                    ['BurlCoMean_1st', 'BurlCoMean_2nd', 'BurlCoMean_3rd', 'BurlCoMean_4th', 'BurlCoMean_5th'],
                    ['CamdCoMean_1st', 'CamdCoMean_2nd', 'CamdCoMean_3rd', 'CamdCoMean_4th', 'CamdCoMean_5th'],
                    ['GloCoMean_1st', 'GloCoMean_2nd', 'GloCoMean_3rd', 'GloCoMean_4th', 'GloCoMean_5th'],
                    ['MerCoMean_1st', 'MerCoMean_2nd', 'MerCoMean_3rd', 'MerCoMean_4th', 'MerCoMean_5th']
                ],
                data: [
                    {
                        'key': '1st Quintile',
                        columns: ['year', 'RegionMean_1st']
                    },
                    {
                        'key': '2nd Quintile',
                        columns: ['year', 'RegionMean_2nd']
                    },
                    {
                        'key': '3rd Quintile',
                        columns: ['year', 'RegionMean_3rd']
                    },
                    {
                        'key': '4th Quintile',
                        columns: ['year', 'RegionMean_4th']
                    },
                    {
                        'key': '5th Quintile',
                        columns: ['year', 'RegionMean_5th']
                    }
                ]
            },
            {
                type: 'line',
                container: 'chart3',
                dataSource: './data/IncomeSegregation.csv',
                data: [
                    {
                        'key': 'Segregation Index',
                        columns: ['year', 'LowIncome']
                    }
                ]
            }
        ]
    },
    'Sex Disparities': {
        file: 'sexDisparities.html',
        d3: [
            {
                type: 'line',
                container: 'chart',
                dataSource: './data/sexInc_wide.csv',
                columnOptions: [
                    ['Region_difference'],
                    ['NJ Suburban Counties_difference'],
                    ['Bucks_difference'],
                    ['Chester_difference'],
                    ['Delaware_difference'],
                    ['Montgomery_difference'],
                    ['Burlington_difference'],
                    ['Camden_difference'],
                    ['Gloucester_difference'],
                    ['Mercer_difference']
                ],
                data: [
                    {
                        'key': 'Difference',
                        columns: ['year', 'Region_difference']
                    }
                ]
            },
            {
                type: 'line',
                container: 'chart2',
                dataSource: './data/sexInc_wide.csv',
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
                dataSource: './data/labForceBySex_wide.csv',
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
                dataSource: './data/labForceBySex_wide.csv',
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
                dataSource: './data/roadwayreliability24.csv',
                columnOptions: [
                    ['DVRPCFree24', 'PASubCosFree24', 'PACosFree24', 'NJCosFree24', 'BucFree24', 'ChesFree24', 'DelFree24', 'MontFree24', 'BurlFree24', 'CamFree24', 'GloFree24', 'MerFree24', 'PhilFree24'],
                    ['DVRPCLoca24', 'PASubCosLoca24', 'PACosLoca24', 'NJCosLoca24', 'BucLoca24', 'ChesLoca24', 'DelLoca24', 'MontLoca24', 'BurlLoca24', 'CamLoca24', 'GloLoca24', 'MerLoca24', 'PhilLoca24']

                ],
                data: [
                    {
                        'key': 'DVRPC',
                        columns: ['year', 'DVRPCFree24']
                    },
                    {
                        'key': 'PA Suburban Counties',
                        columns: ['year', 'PASubCosFree24'],
                        disabled: true
                    },
                    {
                        'key': 'PA Counties',
                        columns: ['year', 'PACosFree24'],
                        disabled: true
                    },
                    {
                        'key': 'NJ Counties',
                        columns: ['year', 'NJCosFree24'],
                        disabled: true
                    },
                    {
                        'key': 'Bucks Co',
                        columns: ['year', 'BucFree24'],
                        disabled: true
                    },
                    {
                        'key': 'Chester Co',
                        columns: ['year', 'ChesFree24'],
                        disabled: true
                    },
                    {
                        'key': 'Delaware Co',
                        columns: ['year', 'DelFree24'],
                        disabled: true
                    },
                    {
                        'key': 'Montgomery Co',
                        columns: ['year', 'MontFree24'],
                        disabled: true
                    },
                    {
                        'key': 'Burlington Co',
                        columns: ['year', 'BurlFree24'],
                        disabled: true
                    },
                    {
                        'key': 'Camden Co',
                        columns: ['year', 'CamFree24'],
                        disabled: true
                    },
                    {
                        'key': 'Gloucester Co',
                        columns: ['year', 'GloFree24'],
                        disabled: true
                    },
                    {
                        'key': 'Mercer Co',
                        columns: ['year', 'MerFree24'],
                        disabled: true
                    },
                    {
                        'key': 'Philadelphia Co',
                        columns: ['year', 'PhilFree24'],
                        disabled: true
                    }
                ]
            },
            {
                type: 'line',
                container: 'chart2',
                dataSource: './data/roadwayreliabilityTOD.csv',
                columnOptions: [
                    ['DVRPCFreeAM', 'DVRPCFreeMD', 'DVRPCFreePM', 'DVRPCFreeNT'],
                    ['PASubCosFreeAM', 'PASubCosFreeMD', 'PASubCosFreePM', 'PASubCosFreeNT'],
                    ['PACosFreeAM', 'PACosFreeMD', 'PACosFreePM', 'PACosFreeNT'],
                    ['NJCosFreeAM', 'NJCosFreeMD', 'NJCosFreePM', 'NJCosFreeNT'],
                    ['BucFreeAM', 'BucFreeMD', 'BucFreePM', 'BucFreeNT'],
                    ['ChesFreeAM', 'ChesFreeMD', 'ChesFreePM', 'ChesFreeNT'],
                    ['DelFreeAM', 'DelFreeMD', 'DelFreePM', 'DelFreeNT'],
                    ['MontFreeAM', 'MontFreeMD', 'MontFreePM', 'MontFreeNT'],
                    ['BurlFreeAM', 'BurlFreeMD', 'BurlFreePM', 'BurlFreeNT'],
                    ['CamFreeAM', 'CamFreeMD', 'CamFreePM', 'CamFreeNT'],
                    ['GloFreeAM', 'GloFreeMD', 'GloFreePM', 'GloFreeNT'],
                    ['MerFreeAM', 'MerFreeMD', 'MerFreePM', 'MerFreeNT'],
                    ['PhilFreeAM', 'PhilFreeMD', 'PhilFreePM', 'PhilFreeNT']
                ],
                data: [
                    {
                        'key': 'AM',
                        columns: ['year', 'DVRPCFreeAM']
                    },
                    {
                        'key': 'MD',
                        columns: ['year', 'DVRPCFreeMD']
                    },
                    {
                        'key': 'PM',
                        columns: ['year', 'DVRPCFreePM']
                    },
                    {
                        'key': 'NT',
                        columns: ['year', 'DVRPCFreeNT']
                    }
                ]
            }
        ]
    },
    'Exports': {
        file: 'exports.html',
        d3: [
            {
                type: 'line',
                container: 'chart',
                dataSource: './data/Exports.csv',
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
            why: `<p>The export of goods and services to international destinations is a key indicator of how a nation or region is performing economically. While these data are limited to just goods, they serve to highlight merchandise produced in our region and our businesses' global reach and contribution to the national economy.</p>`,
            what: `<p>Initial declarations of merchandise export values are reported at the metropolitan and county level by the International Trade Administration using data from the US Census Bureau's Origin of Movement–ZIP code Based Series (OM-ZIP). This represents the exports of goods. Services exports are not included in this dataset.</p><p>Goods exports data reported below the national level relies on initial declarations and does not get updated subsequent revisions found in national data. County is assigned using the address of the United States Principal Party in Interest (USPPI) of record--which is often, but not always the entity producing the merchandise. A small portion of the overall metropolitan Core Based Statistical Area (CBSA) export value does not have a county determination. For this analysis, DVRPC staff assigned this residual CBSA value to counties according the portion of the CBSA's export value attributable to each county. Despite inherent errors, these data are a relevant gauge of where the region stands based off previous years.</p>`,
            how: `<p>The value of merchandise exports for the region are available starting in 2012 so they do not cover a large span to show how our exports were doing in the Great Recession versus the most recent year (2017). It shows a fairly steady production around $20 billion from 2012 through 2014 but a decline to about $16 billion in 2016. 2017 showed a promising gain of close to a billion dollars over 2016.</p>`
        }
    },
    'Commute Mode': {
        file: 'commuteMode.html',
        d3: [
            {
                type: 'line',
                container: 'chart',
                dataSource: './data/ResNonSOV.csv',
                secondDataSource: './data/WorkNonSOV.csv',
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
                dataSource: './data/ResNonSOV_multi.csv',
                secondDataSource: './data/WorkNonSOV_multi.csv',
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
            what: `<p>Commute mode is regularly tracked by the American Community Survey (ACS) by asking respondents to provide the means of transportation used to travel the longest distance to work last week. A follow-up question asks about vehicle occupancy when "car, truck, van" is selected. This indicator tracks the sum of all individuals not selecting "car, truck, van" with one person in it. Transportation professionals often group travel modes into "single-occupancy vehicles" (SOV) and "non-single-occupancy vehicles" (Non-SOV) because SOVs are a less efficient use of roadway and environmental resources.</p><p>The charts below show the modes and submodes of non-SOV commuters that live and work in the region. Toggle between "Residence" and "Workers" to view those that live in the region and those that work in the region, respectively. The first chart compares the share of workers who drive alone to workers using other means while the second shows the component modes that make up non-SOV commuters. While "worked from home" is not a means of transportation, it is an increasingly important option that lets people opt out of driving.</p><p>Note, that due to survey sample size, the commute mode shares displayed are estimates--each with a margin of error. Estimates may show general trend, but may not be statistically significant when comparing to each other if change is slight--particularly in lower population geographies.</p>`,
            how: `<p>From 2006 to 2017, commuters living in the region have increasingly used alternative options relative to driving alone to work. The non-SOV commute share has increased by 1.5 percent in that period. Commuters working in the region have seen their non-SOV  share increase by only 0.9 percent in the same period. For both the region's residents and workers, the SOV share is very high (71.7 and 79.8 percent, respectively) with a near-flat--albeit downward--trend.</p><p>The second chart shows what is driving the slight increase in non-SOV travel during this period. Public transit and carpool usage continue to be the greatest contributors to non-SOV commutes of the region's residents, but carpool has shown a steady decline (from 9.0 percent in 2006 to 7.6 percent in 2017). Public transit overall, has gained in share from 9.4 percent (2006) to 9.6 percent over the period but peaking at 10.6 percent in 2013. This increase has chiefly been supported by a growing use of commuter rail and subways, but risks future decline if bus ridership continues its steep drop in recent years. Regionally, walking commuters have remained steady at just under four percent. The greatest increase in non-SOV modes in the last eleven years has been the share of telecommuters, going from 3.2 percent to 5.4 percent. Those that worked from home have surpassed those walking and has become the third highest contributor to non-SOV mode share--after carpool and the sum of the modes making up public transit. That increase is expected to continue as technology advances, workplace policies become more flexible, and more individuals opt to work for themselves. Bike commuting still registers under one percent in the region but has doubled since 2006.</p>`
        }
    },
    'Transit Ridership': {
        file: 'transitRidership.html',
        d3: [
            {
                type: 'line',
                container: 'chart',
                dataSource: './data/transit_ridership_graph_1.csv',
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
                dataSource: './data/transit_ridership_graph_2.csv',
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
                dataSource: './data/transit_ridership_graph_3.csv',
                columnOptions: [
                    ['NJ Transit', 'PATCO', 'Pottstown Area Rapid Transit', 'SEPTA'],
                    ['NJ Transit-per capita', 'PATCO-per capita', 'Pottstown Area Rapid Transit-per capita', 'SEPTA-per capita',]
                ],
                data: [
                    {
                        'key': 'NJ Transit',
                        columns: ['year', 'NJ Transit']
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
        ]
    },
    'Emissions': {
        file: 'emissions.html',
        d3: [
            {
                type: 'line',
                container: 'chart',
                dataSource: './data/emissions_1.csv',
                columnOptions: [
                    ['emissions_total'],
                    ['emissions_per_capita']
                ],
                data: [
                    {
                        'key': 'mmt co2e',
                        columns: ['year', 'emissions_total']
                    }
                ]
            },
            {
                type: 'stacked bar',
                container: 'chart2',
                dataSource: './data/emissions_2.csv',
                data: [
                    {
                        'key': 'Residential mmt co2e',
                        columns: ['year', 'residential']
                    },
                    {
                        'key': 'Commercial/Industrial mmt co2e',
                        columns: ['year', 'commercial_industrial']
                    },
                    {
                        'key': 'Transportation mmt co2e',
                        columns: ['year', 'transportation']
                    },
                    {
                        'key': 'Other mmt co2e',
                        columns: ['year', 'other']
                    }
                ]
            },
            {
                type: 'stacked bar',
                container: 'chart3',
                dataSource: './data/emissions_3.csv',
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
                dataSource: './data/emissions_4.csv',
                columnOptions: [
                    ['Temperature - Farenheit', '30 year trend - Temperature'],
                    ['Precipitation', '30 year trend - Precipitation'],
                    ['Precipitation from Severe Storms', '30 year trend - Precipitation from Severe Storms']
                ],
                data: [
                    {
                        'key': 'Temperature - Farenheit',
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
        ]
    },
    'Transit Conditions': {
        file: 'transitConditions.html',
        d3: [
            {
                type: 'line',
                container: 'chart',
                dataSource: './data/transit_conditions_graph_1.csv',
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
                dataSource: './data/transit_conditions_graph_2.csv',
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
                dataSource: './data/transit_conditions_graph_3.csv',
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
    'Patents': {
        file: 'patents.html',
        d3: [
            {
                type: 'line',
                container: 'chart',
                dataSource: './data/patents.csv',
                data: [
                    {
                        'key': 'Patent Approvals',
                        columns: ['Year', 'DVRPC']
                    }
                ]
            }
        ]
    },
    'Population Growth': {
        file: 'populationGrowth.html',
        d3: [
            {
                type: 'line',
                container: 'chart'
            }
        ]
    },
    'Bridge Conditions': {
        file: 'bridgeConditions.html',
        d3: [
            {
                type: 'stacked bar',
                container: 'chart',
                dataSource: './data/Bridge_Conditions_1A.csv',
                secondDataSource: './data/Bridge_Conditions_1B.csv',
                columnOptions: [
                    ['DVRPC- State', 'DVRPC- Local', 'DVRPC- Other'],
                    ['New Jersey Suburbs- State', 'New Jersey Suburbs- Local', 'New Jersey Suburbs- Other'],
                    ['Pennsylvania Suburbs- State', 'Pennsylvania Suburbs- Local', 'Pennsylvania Suburbs- Other'],
                    ['Bucks- State', 'Bucks- Local', 'Bucks- Other'],
                    ['Chester- State', 'Chester- Local', 'Chester- Other'],
                    ['Delaware- State', 'Delaware- Local', 'Delaware- Other'],
                    ['Montgomery- State', 'Montgomery- Local', 'Montgomery- Other'],
                    ['Burlington- State', 'Burlington- Local', 'Burlington- Other'],
                    ['Camden- State', 'Camden- Local', 'Camden- Other'],
                    ['Gloucester- State', 'Gloucester- Local', 'Gloucester- Other'],
                    ['Mercer- State', 'Mercer- Local', 'Mercer- Other'],
                    ['Philadelphia- State', 'Philadelphia- Local', 'Philadelphia- Other']
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
                container: 'chart2',
                dataSource: './data/Bridge_Conditions_2.csv',
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
            },
            {
                type: 'stacked bar',
                container: 'chart3',
                dataSource: './data/Bridge_Conditions_3.csv',
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
            why: `<p>The region's bridges enable mobility and commerce throughout the region. Bridges with a poor condition rating indicate maintenance needs that do not pose safety issues so long as they are resolved in a timely manner. Depending on the ratings and the bridge's age, it may be repairable. However, for older bridges with multiple components in poor condition, replacement is generally the more cost-effective option.</p>`,
            what: `<p>Bridges are inspected every two years at minimum, bridges in poor condition are inspected more frequently. These inspections rate the condition for various bridge elements. The inspection records are stored in a bridge management system. The National Bridge Inventory (NBI) collects bridge data from each state DOT, including PennDOT and NJDOT, annually for bridges more than 20 feet long.</p><p>This analysis considers a bridge's deck, super, and substructure ratings, or the culvert rating for a culvert. These scores are given between 0 and 9 for each component, with 9 being the score of a brand new, just opened bridge. Bridges with all three scores of 7 or greater are rated "good", those with any of the score at 4 or lower are rated "poor". A bridge that doesn't fall into good or poor is considered fair.</p>`,
            how: ``
        }
    },
    'Water Quality': {
        file: 'waterQuality.html',
        d3: [
            {
                type: 'line',
                container: 'chart',
                dataSource: './data/water_quality_1.csv',
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
                dataSource: './data/water_quality_2.csv',
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
                dataSource: './data/water_quality_3.csv',
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
            how: ``
        }
    },
    'Land Consumption': {
        file: 'landConsumption.html',
        d3: [
            {
                type: 'line',
                container: 'chart',
                dataSource: './data/landConsumption1.csv',
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
                        columns: ['year', 'Total Developed Acres- NJ Suburbs']
                    },
                    {
                        'key': 'PA Suburbs',
                        columns: ['year', 'Total Developed Acres- PA Suburbs']
                    },
                    {
                        'key': 'Core City',
                        columns: ['year', 'Total Developed Acres- Core City']
                    },
                    {
                        'key': 'Developed Community',
                        columns: ['year', 'Total Developed Acres- Developed Community']
                    },
                    {
                        'key': 'Growing Suburb',
                        columns: ['year', 'Total Developed Acres- Growing Suburb']
                    },
                    {
                        'key': 'Rural Area',
                        columns: ['year', 'Total Developed Acres- Rural Area']
                    },
                    {
                        'key': 'Bucks',
                        columns: ['year', 'Total Developed Acres- Bucks']
                    },
                    {
                        'key': 'Burlington',
                        columns: ['year', 'Total Developed Acres- Burlington']
                    },
                    {
                        'key': 'Camden',
                        columns: ['year', 'Total Developed Acres- Camden']
                    },
                    {
                        'key': 'Chester',
                        columns: ['year', 'Total Developed Acres- Chester']
                    },
                    {
                        'key': 'Delaware',
                        columns: ['year', 'Total Developed Acres- Delaware']
                    },
                    {
                        'key': 'Gloucester',
                        columns: ['year', 'Total Developed Acres- Gloucester']
                    },
                    {
                        'key': 'Mercer',
                        columns: ['year', 'Total Developed Acres- Mercer']
                    },
                    {
                        'key': 'Montgomery',
                        columns: ['year', 'Total Developed Acres- Montgomery']
                    },
                    {
                        'key': 'Philadelphia',
                        columns: ['year', 'Total Developed Acres- Philadelphia']
                    }
                ]
            },
            {
                type: 'stacked bar',
                container: 'chart2',
                dataSource: './data/landConsumption2.csv',
                columnOptions: [
                    ['DVRPC- agricultural','DVRPC- comm_services','DVRPC- commercial','DVRPC- industrial','DVRPC- military','DVRPC- mining','DVRPC- multi_fam','DVRPC- recreation','DVRPC- single_fam','DVRPC- transportation','DVRPC- utility','DVRPC- vacant','DVRPC- water','DVRPC- wooded'],
                    ['PA Suburbs- agricultural','PA Suburbs- comm_services','PA Suburbs- commercial','PA Suburbs- industrial','PA Suburbs- military','PA Suburbs- mining','PA Suburbs- multi_fam','PA Suburbs- recreation','PA Suburbs- single_fam','PA Suburbs- transportation','PA Suburbs- utility','PA Suburbs- vacant','PA Suburbs- water','PA Suburbs- wooded'],
                    ['NJ Suburbs- agricultural','NJ Suburbs- comm_services','NJ Suburbs- commercial','NJ Suburbs- industrial','NJ Suburbs- military','NJ Suburbs- mining','NJ Suburbs- multi_fam','NJ Suburbs- recreation','NJ Suburbs- single_fam','NJ Suburbs- transportation','NJ Suburbs- utility','NJ Suburbs- vacant','NJ Suburbs- water','NJ Suburbs- wooded'],
                    ['Core City- agricultural','Core City- comm_services','Core City- commercial','Core City- industrial','Core City- military','Core City- mining','Core City- multi_fam','Core City- recreation','Core City- single_fam','Core City- transportation','Core City- utility','Core City- vacant','Core City- water','Core City- wooded'],
                    ['Developed Community- agricultural','Developed Community- comm_services','Developed Community- commercial','Developed Community- industrial','Developed Community- military','Developed Community- mining','Developed Community- multi_fam','Developed Community- recreation','Developed Community- single_fam','Developed Community- transportation','Developed Community- utility','Developed Community- vacant','Developed Community- water','Developed Community- wooded'],
                    ['Growing Suburb- agricultural','Growing Suburb- comm_services','Growing Suburb- commercial','Growing Suburb- industrial','Growing Suburb- military','Growing Suburb- mining','Growing Suburb- multi_fam','Growing Suburb- recreation','Growing Suburb- single_fam','Growing Suburb- transportation','Growing Suburb- utility','Growing Suburb- vacant','Growing Suburb- water','Growing Suburb- wooded'],
                    ['Rural Area- agricultural','Rural Area- comm_services','Rural Area- commercial','Rural Area- industrial','Rural Area- military','Rural Area- mining','Rural Area- multi_fam','Rural Area- recreation','Rural Area- single_fam','Rural Area- transportation','Rural Area- utility','Rural Area- vacant','Rural Area- water','Rural Area- wooded'],
                    ['Bucks- agricultural','Bucks- comm_services','Bucks- commercial','Bucks- industrial','Bucks- military','Bucks- mining','Bucks- multi_fam','Bucks- recreation','Bucks- single_fam','Bucks- transportation','Bucks- utility','Bucks- vacant','Bucks- water','Bucks- wooded'],
                    ['Chester- agricultural','Chester- comm_services','Chester- commercial','Chester- industrial','Chester- military','Chester- mining','Chester- multi_fam','Chester- recreation','Chester- single_fam','Chester- transportation','Chester- utility','Chester- vacant','Chester- water','Chester- wooded'],
                    ['Delaware- agricultural','Delaware- comm_services','Delaware- commercial','Delaware- industrial','Delaware- military','Delaware- mining','Delaware- multi_fam','Delaware- recreation','Delaware- single_fam','Delaware- transportation','Delaware- utility','Delaware- vacant','Delaware- water','Delaware- wooded'],
                    ['Montgomery- agricultural','Montgomery- comm_services','Montgomery- commercial','Montgomery- industrial','Montgomery- military','Montgomery- mining','Montgomery- multi_fam','Montgomery- recreation','Montgomery- single_fam','Montgomery- transportation','Montgomery- utility','Montgomery- vacant','Montgomery- water','Montgomery- wooded'],
                    ['Burlington- agricultural','Burlington- comm_services','Burlington- commercial','Burlington- industrial','Burlington- military','Burlington- mining','Burlington- multi_fam','Burlington- recreation','Burlington- single_fam','Burlington- transportation','Burlington- utility','Burlington- vacant','Burlington- water','Burlington- wooded'],
                    ['Camden- agricultural','Camden- comm_services','Camden- commercial','Camden- industrial','Camden- military','Camden- mining','Camden- multi_fam','Camden- recreation','Camden- single_fam','Camden- transportation','Camden- utility','Camden- vacant','Camden- water','Camden- wooded'],
                    ['Gloucester- agricultural','Gloucester- comm_services','Gloucester- commercial','Gloucester- industrial','Gloucester- military','Gloucester- mining','Gloucester- multi_fam','Gloucester- recreation','Gloucester- single_fam','Gloucester- transportation','Gloucester- utility','Gloucester- vacant','Gloucester- water','Gloucester- wooded'],
                    ['Mercer- agricultural','Mercer- comm_services','Mercer- commercial','Mercer- industrial','Mercer- military','Mercer- mining','Mercer- multi_fam','Mercer- recreation','Mercer- single_fam','Mercer- transportation','Mercer- utility','Mercer- vacant','Mercer- water','Mercer- wooded'],
                    ['Philadelphia- agricultural','Philadelphia- comm_services','Philadelphia- commercial','Philadelphia- industrial','Philadelphia- military','Philadelphia- mining','Philadelphia- multi_fam','Philadelphia- recreation','Philadelphia- single_fam','Philadelphia- transportation','Philadelphia- utility','Philadelphia- vacant','Philadelphia- water','Philadelphia- wooded'],
                ],
                data: [
                    {
                        'key': 'Agricultural',
                        columns: ['year', 'DVRPC- agricultural']
                    },
                    {
                        'key': 'Comm Services',
                        columns: ['year', 'DVRPC- comm_services']
                    },
                    {
                        'key': 'Commercial',
                        columns: ['year', 'DVRPC- commercial']
                    },
                    {
                        'key': 'Industrial',
                        columns: ['year', 'DVRPC- industrial']
                    },
                    {
                        'key': 'Military',
                        columns: ['year', 'DVRPC- military']
                    },
                    {
                        'key': 'Mining',
                        columns: ['year', 'DVRPC- mining']
                    },
                    {
                        'key': 'Multi Family',
                        columns: ['year', 'DVRPC- multi_fam']
                    },
                    {
                        'key': 'Recreation',
                        columns: ['year', 'DVRPC- recreation']
                    },
                    {
                        'key': 'Single Family',
                        columns: ['year', 'DVRPC- single_fam']
                    },
                    {
                        'key': 'Transportation',
                        columns: ['year', 'DVRPC- transportation']
                    },
                    {
                        'key': 'Utility',
                        columns: ['year', 'DVRPC- utility']
                    },
                    {
                        'key': 'Vacant',
                        columns: ['year', 'DVRPC- vacant']
                    },
                    {
                        'key': 'Water',
                        columns: ['year', 'DVRPC- water']
                    },
                    {
                        'key': 'Wooded',
                        columns: ['year', 'DVRPC- wooded']
                    },
                ]
            },
            {
                type: 'line',
                container: 'chart3',
                dataSource: './data/landConsumption3.csv',
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
                        columns: ['year', 'NJ Suburbs- Total Acres']
                    },
                    {
                        'key': 'PA Suburbs',
                        columns: ['year', 'PA Suburbs- Total Acres']
                    },
                    {
                        'key': 'Core City',
                        columns: ['year', 'Core City- Total Acres']
                    },
                    {
                        'key': 'Developed Community',
                        columns: ['year', 'Developed Community- Total Acres']
                    },
                    {
                        'key': 'Growing Suburb',
                        columns: ['year', 'Growing Suburb- Total Acres']
                    },
                    {
                        'key': 'Rural Area',
                        columns: ['year', 'Rural Area- Total Acres']
                    },
                    {
                        'key': 'Bucks',
                        columns: ['year', 'Bucks- Total Acres']
                    },
                    {
                        'key': 'Burlington',
                        columns: ['year', 'Burlington- Total Acres']
                    },
                    {
                        'key': 'Camden',
                        columns: ['year', 'Camden- Total Acres']
                    },
                    {
                        'key': 'Chester',
                        columns: ['year', 'Chester- Total Acres']
                    },
                    {
                        'key': 'Delaware',
                        columns: ['year', 'Delaware- Total Acres']
                    },
                    {
                        'key': 'Gloucester',
                        columns: ['year', 'Gloucester- Total Acres']
                    },
                    {
                        'key': 'Mercer',
                        columns: ['year', 'Mercer- Total Acres']
                    },
                    {
                        'key': 'Montgomery',
                        columns: ['year', 'Montgomery- Total Acres']
                    },
                    {
                        'key': 'Philadelphia',
                        columns: ['year', 'Philadelphia- Total Acres']
                    }
                ]
            },
            {
                type: 'stacked bar',
                container: 'chart4',
                dataSource: './data/landConsumption4.csv',
                columnOptions: [
                    ['DVRPC- Federal','DVRPC- State','DVRPC- County','DVRPC- Municipal','DVRPC- Non-profit','DVRPC- Preserved Farmland'],
                    ['PA Suburbs- Federal','PA Suburbs- State','PA Suburbs- County','PA Suburbs- Municipal','PA Suburbs- Non-profit','PA Suburbs- Preserved Farmland'],
                    ['NJ Suburbs- Federal','NJ Suburbs- State','NJ Suburbs- County','NJ Suburbs- Municipal','NJ Suburbs- Non-profit','NJ Suburbs- Preserved Farmland'],
                    ['Core City- Federal','Core City- State','Core City- County','Core City- Municipal','Core City- Non-profit','Core City- Preserved Farmland'],
                    ['Developed Community- Federal','Developed Community- State','Developed Community- County','Developed Community- Municipal','Developed Community- Non-profit','Developed Community- Preserved Farmland'],
                    ['Growing Suburb- Federal','Growing Suburb- State','Growing Suburb- County','Growing Suburb- Municipal','Growing Suburb- Non-profit','Growing Suburb- Preserved Farmland'],
                    ['Rural Area- Federal','Rural Area- State','Rural Area- County','Rural Area- Municipal','Rural Area- Non-profit','Rural Area- Preserved Farmland'],
                    ['Bucks- Federal','Bucks- State','Bucks- County','Bucks- Municipal','Bucks- Non-profit','Bucks- Preserved Farmland'],
                    ['Chester- Federal','Chester- State','Chester- County','Chester- Municipal','Chester- Non-profit','Chester- Preserved Farmland'],
                    ['Delaware- Federal','Delaware- State','Delaware- County','Delaware- Municipal','Delaware- Non-profit','Delaware- Preserved Farmland'],
                    ['Montgomery- Federal','Montgomery- State','Montgomery- County','Montgomery- Municipal','Montgomery- Non-profit','Montgomery- Preserved Farmland'],
                    ['Burlington- Federal','Burlington- State','Burlington- County','Burlington- Municipal','Burlington- Non-profit','Burlington- Preserved Farmland'],
                    ['Camden- Federal','Camden- State','Camden- County','Camden- Municipal','Camden- Non-profit','Camden- Preserved Farmland'],
                    ['Gloucester- Federal','Gloucester- State','Gloucester- County','Gloucester- Municipal','Gloucester- Non-profit','Gloucester- Preserved Farmland'],
                    ['Mercer- Federal','Mercer- State','Mercer- County','Mercer- Municipal','Mercer- Non-profit','Mercer- Preserved Farmland'],
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
            why: `<p>There is only a finite amount of land available within the region and around the planet to provide homes for people, habitat for animals, grow food, preserve for recreation and natural resources, and to extract resources. Thanks to sprawling development patterns, land consumption in the region has increased at a rate nearly five times more than population growth over the last 75 years. There are many externalities that result from this inefficient land use:</p><ul><li>Increased reliance on motorized transportation and congestion.</li><li>Loss of open space and agricultural land.</li><li>Detrimental impacts to air and water quality.</li><li>Increased need for infrastructure and services.</li></ul>`,
            what: ``,
            how: ``
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