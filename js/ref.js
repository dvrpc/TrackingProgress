import { fullGeography, lightGeography } from './commonGeographies.js'

const snippetsRef = {
    'Air Quality': {
        file: 'airQuality.html',
        map: false,
        d3: [
            {
                type: 'line and bar',
                container: 'chart',
                dataSource: './data/aq_yearly.csv',
                data: [
                    {
                        'key' : 'Days Violating',
                        'bar': true,
                        'color': '#f03b20',
                        'columns': ['year', 'daysViolating'],
                    },
                    {
                        'key': 'Five Year Average',
                        'color': '#666',
                        'columns': ['year', 'fiveYearAvg'],
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
                        'key' : 'Unhealthy Sensitive Ozone',
                        'color': '#de425b',
                        'columns': ['quarterYear', 'unhealthySensitiveOzone'],
                    },
                    {
                        'key': 'Unhealthy Ozone',
                        'color': '#b62a38',
                        'columns': ['quarterYear', 'unhealthyOzone'],
                    },
                    {
                        'key': 'Very Unhealthy Ozone',
                        'color': '#750000',
                        'columns': ['quarterYear', 'veryUnhealthyOzone'],
                    }
                ]
            },
        ]
    },
    'Vehicle Miles Traveled': {
        file: 'vehicleMilesTraveled.html', 
        map: false, 
        d3: [
            {
                // VMT/Capita
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
            },
        ]
    },
    'Educational Attainment': {
        file: 'educationalAttainment.html',
        map: false,
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
    'Vehicle Crashes': {
        file: 'vehicleCrashes.html',
        map: false,
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
                        'key': '5 year avg',
                        'columns': ['year', 'ksiPerVMT5yrAvgDVRPC']
                    },
                    {
                        'key': 'Total KSI',
                        'bar': true,
                        'columns': ['year', 'ksiPerVMTDVRPC']
                    }
                ]
            }
        ]
    },
    'Global Connectivity': {
        file: 'globalConnectivity.html',
        map: false,
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
    'Residential Building Permits': {
        file: 'residentialBuildingPermits.html',
        map: false,
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
    'Affordable Housing': {
        file: 'affordableHousing.html',
        map: false,
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
        map: false,
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
    'Bridge Conditions': {file: 'bridgeConditions.html', map: false, d3: false },
    'non-SOV Commuting Mode Share': {file: 'nonSOVCommutingModeShare.html', map: false, d3: false },
    'Income Inequality': {file: 'incomeInequality.html', map: false, d3: false },
    'Land Preservation': {file: 'landPreservation.html', map: false, d3: false },
    'Population Growth': {file: 'populationGrowth.html', map: true, d3: false},
    'Transit Conditions': {file: 'transitConditions.html', map: true, d3: false}
}

export default snippetsRef