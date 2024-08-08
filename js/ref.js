const snippetsRef = {
    'Air Quality': {
        categories: ['enviro', 'transpo', 'sustain', 'equity'],
        trend: {
            status: 'awesome',
            text: {
                stat: '62 fewer',
                text: `days annually violating air quality standards since 2002's 5-year average`
            }
        },
        dataUrl: 'https://catalog.dvrpc.org/dataset/air-quality-violations',  
        d3: [
            {
                type: 'line and bar',
                container: 'chart',
                dataSource: ['aq_yearly'],
                context: {
                    labels: ['Days'],
                    units: ['thousands'] 
                },
                range: [0, 83],
                data: [
                    {
                        'key' : 'Annual',
                        'color': '#8f3f98',
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
                    units: ['thousands'],
                    keepUnits: true,
                    xLabel: 'Quarter'
                },
                columnOptions: [
                    ['Unhealthy Sensitive Ozone', 'Unhealthy Ozone', 'Very Unhealthy Ozone', 'Hazardous Ozone'],
                    ['Unhealthy Sensitive PM', 'Unhealthy PM', 'Very Unhealthy PM', 'Hazardous Ozone']
                ],
                newKeys: true,
                range: [0, 50],
                data: [
                    {
                        'key' : 'Unhealthy for Sensitive Groups',
                        'color': '#ff7e00',
                        'columns': ['quarteryear', 'Unhealthy Sensitive Ozone'],
                    },
                    {
                        'key': 'Unhealthy',
                        'color': '#fe0000',
                        'columns': ['quarteryear', 'Unhealthy Ozone'],
                    },
                    {
                        'key': 'Very Unhealthy',
                        'color': '#8f3f98',
                        'columns': ['quarteryear', 'Very Unhealthy Ozone'],
                    },
                    {
                        'key': 'Hazardous',
                        'color': '#7e0023',
                        'columns': ['quarteryear', 'Hazardous Ozone'],
                    }
                ]
            },
        ]
    },
    'Miles Driven': {
        categories: ['transpo','enviro', 'sustain'],
        trend: {
            status: 'neutral',
            text: {
                stat: '6.5% fewer',
                text: `daily miles driven annually per person since 2000`
            }
        },
        dataUrl: 'https://catalog.dvrpc.org/dataset/vehicle-miles-traveled',
        d3: [
            {
                type: 'line',
                container: 'chart',
                dataSource: ['vmtWeb'],
                context: {
                    labels: ['VMT Per Capita', 'Total Daily VMT (Millions)', 'VMT Per Vehicle'],
                    keepLabels: false,
                    units: ['thousands'],
                    keepUnits: true
                },
                columnOptions: [
                    ['vmtPerCapDVRPC', 'vmtPerCapNJSuburbs', 'vmtPerCapAllPACounties', 'vmtPerCapPASuburbs', 'vmtPerCapBucksCo', 'vmtPerCapBurlingtonCo', 'vmtPerCapCamdenCo', 'vmtPerCapChesterCo', 'vmtPerCapDelawareCo', 'vmtPerCapGloucesterCo', 'vmtPerCapMercerCo', 'vmtPerCapMontgomeryCo', 'vmtPerCapPhillyCo'],
                    ['vmtDVRPC', 'vmtNJSuburbs', 'vmtAllPACounties', 'vmtPASuburbs', 'vmtBucksCo', 'vmtBurlingtonCo', 'vmtCamdenCo', 'vmtChesterCo', 'vmtDelawareCo', 'vmtGloucesterCo', 'vmtMercerCo', 'vmtMontgomeryCo', 'vmtPhillyCo'],
                    ['vmtPerVehicleDVRPC', 'vmtPerVehicleNJSuburbs', 'vmtPerVehicleAllPACounties', 'vmtPerVehiclePASuburbs', 'vmtPerVehicleBucksCo', 'vmtPerVehicleBurlingtonCo', 'vmtPerVehicleCamdenCo', 'vmtPerVehicleChesterCo', 'vmtPerVehicleDelawareCo', 'vmtPerVehicleGloucesterCo', 'vmtPerVehicleMercerCo', 'vmtPerVehicleMontgomeryCo', 'vmtPerVehiclePhillyCo']
                ],
                data: [
                    {
                        'key' : 'DVRPC Region*',
                        'columns': ['year', 'vmtPerCapDVRPC']
                    },
                    {
                        'key' : 'NJ Counties*',
                        'disabled': true,
                        'columns': ['year', 'vmtPerCapNJSuburbs']
                    },
                    {
                        'key': 'All PA Counties*',
                        'disabled': true,
                        'columns': ['year', 'vmtPerCapAllPACounties']
                    },
                    {
                        'key' : 'PA Suburban Counties*',
                        'disabled': true,
                        'columns': ['year', 'vmtPerCapPASuburbs']
                    },
                    {
                        'key' : 'Bucks**',
                        'disabled': true,
                        'columns': ['year', 'vmtPerCapBucksCo']
                    },
                    {
                        'key' : 'Burlington**',
                        'disabled': true,
                        'columns': ['year', 'vmtPerCapBurlingtonCo']
                    },
                    {
                        'key' : 'Camden**',
                        'disabled': true,
                        'columns': ['year', 'vmtPerCapCamdenCo']
                    },
                    {
                        'key' : 'Chester**',
                        'disabled': true,
                        'columns': ['year', 'vmtPerCapChesterCo']
                    },
                    {
                        'key' : 'Gloucester**',
                        'disabled': true,
                        'columns': ['year', 'vmtPerCapGloucesterCo']
                    },
                    {
                        'key' : 'Mercer**',
                        'disabled': true,
                        'columns': ['year', 'vmtPerCapMercerCo']
                    },
                    {
                        'key' : 'Delaware**',
                        'disabled': true,
                        'columns': ['year', 'vmtPerCapDelawareCo']
                    },
                    {
                        'key' : 'Montgomery**',
                        'disabled': true,
                        'columns': ['year', 'vmtPerCapMontgomeryCo']
                    },
                    {
                        'key' : 'Philadelphia**',
                        'disabled': true,
                        'columns': ['year', 'vmtPerCapPhillyCo']
                    }
                ]
            }, 
            {
                type: 'line',
                container: 'chart2',
                dataSource: ['vehiclesWeb'],
                context: {
                    labels: ['Per Capita', 'Total (in millions)'],
                    keepLabels: false,
                    units: ['millions'],
                    keepUnits: true
                },
                columnOptions: [
                    ['vehiclesPerCapDVRPC', 'vehiclesPerCapNJSuburbs', 'vehiclesPerCapAllPACounties', 'vehiclesPerCapPASuburbs', 'vehiclesPerCapBucksCo', 'vehiclesPerCapBurlingtonCo', 'vehiclesPerCapCamdenCo', 'vehiclesPerCapChesterCo', 'vehiclesPerCapDelawareCo', 'vehiclesPerCapGloucesterCo', 'vehiclesPerCapMercerCo', 'vehiclesPerCapMontgomeryCo', 'vehiclesPerCapPhillyCo'],
                    ['vehiclesDVRPC', 'vehiclesNJSuburbs', 'vehiclesAllPACounties', 'vehiclesPASuburbs', 'vehiclesBucksCo', 'vehiclesBurlingtonCo', 'vehiclesCamdenCo', 'vehiclesChesterCo', 'vehiclesDelawareCo', 'vehiclesGloucesterCo', 'vehiclesMercerCo', 'vehiclesMontgomeryCo', 'vehiclesPhillyCo'],
                ],
                data: [
                    {
                        'key' : 'DVRPC Region*',
                        'columns': ['year', 'vehiclesPerCapDVRPC']
                    },
                    {
                        'key' : 'NJ Counties*',
                        'disabled': true,
                        'columns': ['year', 'vehiclesPerCapNJSuburbs']
                    },
                    {
                        'key': 'All PA Counties*',
                        'disabled': true,
                        'columns': ['year', 'vehiclesPerCapAllPACounties']
                    },
                    {
                        'key' : 'PA Suburban Counties*',
                        'disabled': true,
                        'columns': ['year', 'vehiclesPerCapPASuburbs']
                    },
                    {
                        'key' : 'Bucks**',
                        'disabled': true,
                        'columns': ['year', 'vehiclesPerCapBucksCo']
                    },
                    {
                        'key' : 'Burlington**',
                        'disabled': true,
                        'columns': ['year', 'vehiclesPerCapBurlingtonCo']
                    },
                    {
                        'key' : 'Camden**',
                        'disabled': true,
                        'columns': ['year', 'vehiclesPerCapCamdenCo']
                    },
                    {
                        'key' : 'Chester**',
                        'disabled': true,
                        'columns': ['year', 'vehiclesPerCapChesterCo']
                    },
                    {
                        'key' : 'Gloucester**',
                        'disabled': true,
                        'columns': ['year', 'vehiclesPerCapGloucesterCo']
                    },
                    {
                        'key' : 'Mercer**',
                        'disabled': true,
                        'columns': ['year', 'vehiclesPerCapMercerCo']
                    },
                    {
                        'key' : 'Delaware**',
                        'disabled': true,
                        'columns': ['year', 'vehiclesPerCapDelawareCo']
                    },
                    {
                        'key' : 'Montgomery**',
                        'disabled': true,
                        'columns': ['year', 'vehiclesPerCapMontgomeryCo']
                    },
                    {
                        'key' : 'Philadelphia**',
                        'disabled': true,
                        'columns': ['year', 'vehiclesPerCapPhillyCo']
                    }
                ]
            }
        ]
    },
    'Educational Attainment': {
        categories: ['comm', 'econo', 'equity'],
        trend: {
            status: 'good',
            text: {
                stat: '10% rise',
                text: `in population over 25 with high school diploma since 2000`
            }
        },
        dataUrl: 'https://catalog.dvrpc.org/dataset/educational-attainment',
        d3: [
            {
                type: 'line',
                container: 'chart',
                dataSource: ['edattainHS'],
                range: [0, 1],
                context: {
                    labels: ['Percentage of Population 25 Years and Older'],
                    units: ['percentC']
                },
                data: [
                    {
                        'key': 'DVRPC Region*',
                        'columns': ['year', 'hsRateDVRPC']
                    },
                    {
                        'key': 'NJ Counties*',
                        disabled: true,
                        'columns': ['year', 'hsRateNJSuburbs']
                    },
                    {
                        'key': 'PA Suburban Counties*',
                        disabled: true,
                        'columns': ['year', 'hsRatePASuburbs']
                    },
                    {
                        'key': 'Bucks**',
                        disabled: true,
                        'columns': ['year', 'hsRateBucksCo']
                    },
                    {
                        'key': 'Burlington**',
                        disabled: true,
                        'columns': ['year', 'hsRateBurlingtonCo']
                    },
                    {
                        'key': 'Camden**',
                        disabled: true,
                        'columns': ['year', 'hsRateCamdenCo']
                    },
                    {
                        'key': 'Chester**',
                        disabled: true,
                        'columns': ['year', 'hsRateChesterCo']
                    },
                    {
                        'key': 'Delaware**',
                        disabled: true,
                        'columns': ['year', 'hsRateDelawareCo']
                    },
                    {
                        'key': 'Gloucester**',
                        disabled: true,
                        'columns': ['year', 'hsRateGloucesterCo']
                    },
                    {
                        'key': 'Mercer**',
                        disabled: true,
                        'columns': ['year', 'hsRateMercerCo']
                    },
                    {
                        'key': 'Montgomery**',
                        disabled: true,
                        'columns': ['year', 'hsRateMontgomeryCo']
                    },
                    {
                        'key': 'Philadelphia**',
                        disabled: true,
                        'columns': ['year', 'hsRatePhiladelphiaCo']
                    }
                ]
            },
            {
                type: 'bar',
                container: 'chart2',
                dataSource: ['edattainHS'],
                context: {
                    labels: ['Percentage of Population 25 Years and Older'],
                    units: ['percentC']
                },
                data: [
                    {
                        'key': 'Core Cities',
                        'columns': ['year', 'hsRateCore']
                    },
                    {
                        'key': 'Developed Communities',
                        'columns': ['year', 'hsRateDeveloped']
                    },
                    {
                        'key': 'Growing Suburbs',
                        'columns': ['year', 'hsRateGrowing']
                    },
                    {
                        'key': 'Rural Areas',
                        'columns': ['year', 'hsRateRural']
                    },
                ]
            },
            {
                type: 'stacked bar',
                container: 'chart3',
                dataSource: ['edattainComprehensive'],
                context: {
                    labels: ['Population 25 Years and Older (Thousands)'],
                    keepLabels: true,
                    units: ['thousands'],
                    keepUnits: true
                },
                columnOptions: [
                    ['DVRPC-Less than High School', 'DVRPC-Some High School', 'DVRPC-Graduated High School', 'DVRPC-Some College', 'DVRPC-Associates Degree', 'DVRPC-Bachelors Degree', 'DVRPC-Graduate/Professional Degree'],
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
                    ['Montgomery-Less than High School', 'Montgomery-Some High School', 'Montgomery-Graduated High School', 'Montgomery-Some College', 'Montgomery-Associates Degree', 'Montgomery-Bachelors Degree', 'Montgomery-Graduate/Professional Degree'],
                    ['Philadelphia-Less than High School', 'Philadelphia-Some High School', 'Philadelphia-Graduated High School', 'Philadelphia-Some College', 'Philadelphia-Associates Degree', 'Philadelphia-Bachelors Degree', 'Philadelphia-Graduate/Professional Degree']
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
        categories: ['transpo', 'equity'],
        trend: {
            status: 'not-great',
            text: {
                stat: '2.5% increase',
                text: `in fatalities and severe injuries since 2015`
            }
        },
        dataUrl: 'https://catalog.dvrpc.org/dataset/roadway-safety',
        d3: [
            {
                type: 'line',
                container: 'chart',
                dataSource: ['crashesWeb1'],
                context: {
                    labels: ['KSI Total', 'KSI Per 100,000 People', 'KSI Per 100 Million VMT'],
                    units: ['thousands', 'thousandsC', 'thousandsC'],
                },
                columnOptions: [
                    ['DVRPC- ksi total','NJ Suburbs- ksi total','PA Suburbs- ksi total','Bucks- ksi total','Burlington- ksi total','Camden- ksi total','Chester- ksi total','Delaware- ksi total','Gloucester- ksi total','Mercer- ksi total','Montgomery- ksi total','Philadelphia- ksi total'],
                    ['DVRPC- ksi per capita','NJ Suburbs- ksi per capita','PA Suburbs- ksi per capita','Bucks- ksi per capita','Burlington- ksi per capita','Camden- ksi per capita','Chester- ksi per capita','Delaware- ksi per capita','Gloucester- ksi per capita','Mercer- ksi per capita','Montgomery- ksi per capita','Philadelphia- ksi per capita'],
                    ['DVRPC- ksi per VMT','NJ Suburbs- ksi per VMT','PA Suburbs- ksi per VMT','Bucks- ksi per VMT','Burlington- ksi per VMT','Camden- ksi per VMT','Chester- ksi per VMT','Delaware- ksi per VMT','Gloucester- ksi per VMT','Mercer- ksi per VMT','Montgomery- ksi per VMT','Philadelphia- ksi per VMT']
                ],
                data: [
                    {
                        'key': 'DVRPC Region*',
                        'columns': ['year', 'DVRPC- ksi total']
                    },
                    {
                        'key': 'NJ Counties*',
                        disabled: true,
                        'columns': ['year', 'NJ Suburbs- ksi total']
                    },
                    {
                        'key': 'PA Suburban Counties*',
                        disabled: true,
                        'columns': ['year', 'PA Suburbs- ksi total']
                    },
                    {
                        'key': 'Bucks**',
                        disabled: true,
                        'columns': ['year', 'Bucks- ksi total']
                    },
                    {
                        'key': 'Burlington**',
                        disabled: true,
                        'columns': ['year', 'Burlington- ksi total']
                    },
                    {
                        'key': 'Camden**',
                        disabled: true,
                        'columns': ['year', 'Camden- ksi total']
                    },
                    {
                        'key': 'Chester**',
                        disabled: true,
                        'columns': ['year', 'Chester- ksi total']
                    },
                    {
                        'key': 'Delaware**',
                        disabled: true,
                        'columns': ['year', 'Delaware- ksi total']
                    },
                    {
                        'key': 'Gloucester**',
                        disabled: true,
                        'columns': ['year', 'Gloucester- ksi total']
                    },
                    {
                        'key': 'Mercer**',
                        disabled: true,
                        'columns': ['year', 'Mercer- ksi total']
                    },
                    {
                        'key': 'Montgomery**',
                        disabled: true,
                        'columns': ['year', 'Montgomery- ksi total']
                    },
                    {
                        'key': 'Philadelphia**',
                        disabled: true,
                        'columns': ['year', 'Philadelphia- ksi total']
                    }
                ]
            },
            {
                type: 'stacked bar',
                container: 'chart2',
                dataSource: ['crashesWeb2A', 'crashesWeb2B', 'crashesWeb2C'],
                context: {
                    labels: ['KSI Total', 'KSI Per 100,000 People', 'KSI Per 100 Million VMT'],
                    keepLabels: false,
                    units: ['thousands', 'thousandsC', 'thousandsC'],
                },
                columnOptions: [
                    ['DVRPC- ksiBikePed', 'DVRPC- ksiMotorVehicle'],
                    ['PA Suburbs- ksiBikePed', 'PA Suburbs- ksiMotorVehicle'],
                    ['NJ Suburbs- ksiBikePed', 'NJ Suburbs- ksiMotorVehicle'],
                    ['Bucks- ksiBikePed', 'Bucks- ksiMotorVehicle'],
                    ['Burlington- ksiBikePed', 'Burlington- ksiMotorVehicle'],
                    ['Camden- ksiBikePed', 'Camden- ksiMotorVehicle'],
                    ['Chester- ksiBikePed', 'Chester- ksiMotorVehicle'],
                    ['Delaware- ksiBikePed', 'Delaware- ksiMotorVehicle'],
                    ['Gloucester- ksiBikePed', 'Gloucester- ksiMotorVehicle'],
                    ['Mercer- ksiBikePed', 'Mercer- ksiMotorVehicle'],
                    ['Montgomery- ksiBikePed', 'Montgomery- ksiMotorVehicle'],
                    ['Philadelphia- ksiBikePed', 'Philadelphia- ksiMotorVehicle']
                ],
                data: [
                    {
                        'key': 'Bike + Pededestrian',
                        columns: ['year', 'DVRPC- ksiBikePed']
                    },
                    {
                        'key': 'Motor Vehicle',
                        columns: ['year', 'DVRPC- ksiMotorVehicle']
                    }
                ]
            },
        ]
    },
    'Mortgage Lending': {
        categories: ['econo', 'transpo','equity','resil'],
        trend: {
            status: 'good',
            text: {
                stat: '8-10% drop',
                text: `in loan approval rate gaps from base year`
            }
        },
        dataUrl: 'https://catalog.dvrpc.org/dataset/mortgage-lending',
        d3: [
            {
                type: 'line',
                container: 'chart',
                dataSource: ['mortgage_lending_1a', 'mortgage_lending_1b', 'mortgage_lending_1c', 'mortgage_lending_1d'],
                context: {
                    labels: ['Origination Rate Gap'],
                    keepLabels: true,
                    units: ['percentD'],
                    keepUnits: true
                },
                columnOptions:  [
                    [
                      'dvrpc_female',
                      'dvrpc_latinx',
                      'dvrpc_minority',
                      'dvrpc_asian',
                      'dvrpc_black',
                    ],
                    [
                      'njcos_female',
                      'njcos_latinx',
                      'njcos_minority',
                      'njcos_asian',
                      'njcos_black',
                    ],
                    [
                      'pasubcos_female',
                      'pasubcos_latinx',
                      'pasubcos_minority',
                      'pasubcos_asian',
                      'pasubcos_black',
                    ],
                    [
                      'bucks_female',
                      'bucks_latinx',
                      'bucks_minority',
                      'bucks_asian',
                      'bucks_black',
                    ],
                    [
                      'burl_female',
                      'burl_latinx',
                      'burl_minority',
                      'burl_asian',
                      'burl_black',
                    ],
                    [
                      'camd_female',
                      'camd_latinx',
                      'camd_minority',
                      'camd_asian',
                      'camd_black',
                    ],
                    [
                      'ches_female',
                      'ches_latinx',
                      'ches_minority',
                      'ches_asian',
                      'ches_black',
                    ],
                    [
                      'del_female',
                      'del_latinx',
                      'del_minority',
                      'del_asian',
                      'del_black',
                    ],
                    [
                      'glo_female',
                      'glo_latinx',
                      'glo_minority',
                      'glo_asian',
                      'glo_black',
                    ],
                    [
                      'mer_female',
                      'mer_latinx',
                      'mer_minority',
                      'mer_asian',
                      'mer_black',
                    ],
                    [
                      'mont_female',
                      'mont_latinx',
                      'mont_minority',
                      'mont_asian',
                      'mont_black',
                    ],
                    [
                      'phil_female',
                      'phil_latinx',
                      'phil_minority',
                      'phil_asian',
                      'phil_black',
                    ]
                  ],
                data: [
                    {
                        'key': 'Female-to-Male*',
                        columns: ['year', 'dvrpc_female']
                    },
                    {
                        'key': 'Latinx-to-Non-Latinx**',
                        columns: ['year', 'dvrpc_latinx']
                    },
                    {
                        'key': 'Non-White-to-White***',
                        columns: ['year', 'dvrpc_minority']
                    },
                    {
                        'key': 'Asian-to-White***',
                        columns: ['year', 'dvrpc_asian'],
                        disabled: true
                    },
                    {
                        'key': 'Black-to-White***',
                        columns: ['year', 'dvrpc_black'],
                        disabled: true
                    },
                ]
            },
            {
                type: 'line',
                container: 'chart1',
                dataSource: ['mortgage_lending_2a', 'mortgage_lending_2b', 'mortgage_lending_2c', 'mortgage_lending_2d'],
                context: {
                    labels: ['Loan Origination Rates'],
                    keepLabels: true,
                    units: ['percentD'],
                    keepUnits: true
                },
                columnOptions:  [
                    ['dvrpc_female','dvrpc_male','dvrpc_latinx','dvrpc_nonlatinx','dvrpc_minority','dvrpc_asian','dvrpc_black', 'dvrpc_white'],
                    ['njcos_female', 'njcos_male', 'njcos_latinx', 'njcos_nonlatinx', 'njcos_minority', 'njcos_asian', 'njcos_black', 'njcos_white'],
                    ['pasubcos_female', 'pasubcos_male', 'pasubcos_latinx', 'pasubcos_nonlatinx', 'pasubcos_minority', 'pasubcos_asian', 'pasubcos_black', 'pasubcos_white'],
                    ['bucks_female', 'bucks_male', 'bucks_latinx', 'bucks_nonlatinx', 'bucks_minority', 'bucks_asian', 'bucks_black', 'bucks_white'],
                    ['burl_female', 'burl_male', 'burl_latinx', 'burl_nonlatinx', 'burl_minority', 'burl_asian', 'burl_black', 'burl_white'],
                    ['camd_female', 'camd_male', 'camd_latinx', 'camd_nonlatinx', 'camd_minority', 'camd_asian', 'camd_black', 'camd_white'],
                    ['ches_female', 'ches_male', 'ches_latinx', 'ches_nonlatinx', 'ches_minority', 'ches_asian', 'ches_black', 'ches_white'],
                    ['del_female', 'del_male', 'del_latinx', 'del_nonlatinx', 'del_minority', 'del_asian', 'del_black', 'del_white'],
                    ['glo_female', 'glo_male', 'glo_latinx', 'glo_nonlatinx', 'glo_minority', 'glo_asian', 'glo_black', 'glo_white'],
                    ['mer_female', 'mer_male', 'mer_latinx', 'mer_nonlatinx', 'mer_minority', 'mer_asian', 'mer_black', 'mer_white'],
                    ['mont_female', 'mont_male', 'mont_latinx', 'mont_nonlatinx', 'mont_minority', 'mont_asian', 'mont_black', 'mont_white'],
                    ['phil_female', 'phil_male', 'phil_latinx', 'phil_nonlatinx', 'phil_minority', 'phil_asian', 'phil_black', 'phil_white'],
                ],
                data: [
                    {
                        'key': 'Female*',
                        columns: ['year', 'dvrpc_female']
                    },
                    {
                        'key': 'Male*',
                        columns: ['year', 'dvrpc_male']
                    },
                    {
                        'key': 'Latinx**',
                        columns: ['year', 'dvrpc_latinx']
                    },
                    {
                        'key': 'Non-Latinx**',
                        columns: ['year', 'dvrpc_nonlatinx']
                    },
                    {
                        'key': 'Non-White***',
                        columns: ['year', 'dvrpc_minority']
                    },
                    {
                        'key': 'Asian***',
                        columns: ['year', 'dvrpc_asian'],
                        disabled: true
                    },
                    {
                        'key': 'Black***',
                        columns: ['year', 'dvrpc_black'],
                        disabled: true
                    },
                    {
                        'key': 'White***',
                        columns: ['year', 'dvrpc_white']
                    },
                ]
            },
            {
                type: 'line',
                container: 'chart2',
                dataSource: ['mortgage_lending_3a', 'mortgage_lending_3b', 'mortgage_lending_3c', 'mortgage_lending_3d'],
                context: {
                    labels: ['Total Decisioned Applications'],
                    keepLabels: true,
                    units: ['thousands'],
                    keepUnits: true
                },
                columnOptions:  [
                    ['dvrpc_female','dvrpc_male','dvrpc_latinx','dvrpc_nonlatinx','dvrpc_minority','dvrpc_asian','dvrpc_black', 'dvrpc_white'],
                    ['njcos_female', 'njcos_male', 'njcos_latinx', 'njcos_nonlatinx', 'njcos_minority', 'njcos_asian', 'njcos_black', 'njcos_white'],
                    ['pasubcos_female', 'pasubcos_male', 'pasubcos_latinx', 'pasubcos_nonlatinx', 'pasubcos_minority', 'pasubcos_asian', 'pasubcos_black', 'pasubcos_white'],
                    ['bucks_female', 'bucks_male', 'bucks_latinx', 'bucks_nonlatinx', 'bucks_minority', 'bucks_asian', 'bucks_black', 'bucks_white'],
                    ['burl_female', 'burl_male', 'burl_latinx', 'burl_nonlatinx', 'burl_minority', 'burl_asian', 'burl_black', 'burl_white'],
                    ['camd_female', 'camd_male', 'camd_latinx', 'camd_nonlatinx', 'camd_minority', 'camd_asian', 'camd_black', 'camd_white'],
                    ['ches_female', 'ches_male', 'ches_latinx', 'ches_nonlatinx', 'ches_minority', 'ches_asian', 'ches_black', 'ches_white'],
                    ['del_female', 'del_male', 'del_latinx', 'del_nonlatinx', 'del_minority', 'del_asian', 'del_black', 'del_white'],
                    ['glo_female', 'glo_male', 'glo_latinx', 'glo_nonlatinx', 'glo_minority', 'glo_asian', 'glo_black', 'glo_white'],
                    ['mer_female', 'mer_male', 'mer_latinx', 'mer_nonlatinx', 'mer_minority', 'mer_asian', 'mer_black', 'mer_white'],
                    ['mont_female', 'mont_male', 'mont_latinx', 'mont_nonlatinx', 'mont_minority', 'mont_asian', 'mont_black', 'mont_white'],
                    ['phil_female', 'phil_male', 'phil_latinx', 'phil_nonlatinx', 'phil_minority', 'phil_asian', 'phil_black', 'phil_white'],
                ],
                data: [
                    {
                        'key': 'Female*',
                        columns: ['year', 'dvrpc_female']
                    },
                    {
                        'key': 'Male*',
                        columns: ['year', 'dvrpc_male']
                    },
                    {
                        'key': 'Latinx**',
                        columns: ['year', 'dvrpc_latinx']
                    },
                    {
                        'key': 'Non-Latinx**',
                        columns: ['year', 'dvrpc_nonlatinx']
                    },
                    {
                        'key': 'Non-White***',
                        columns: ['year', 'dvrpc_minority']
                    },
                    {
                        'key': 'Asian***',
                        columns: ['year', 'dvrpc_asian'],
                        disabled: true
                    },
                    {
                        'key': 'Black***',
                        columns: ['year', 'dvrpc_black'],
                        disabled: true
                    },
                    {
                        'key': 'White***',
                        columns: ['year', 'dvrpc_white']
                    },
                ]
            }
        ]
    },
    'Housing Permits': {
        categories: ['comm', 'econo', 'enviro', 'sustain'],
        trend: {
            status: 'good',
            text: {
                stat: '27.9% more',
                text: `permits in Core Cities and Developed Communities since 1999 low`
            }
        },
        dataUrl: 'https://catalog.dvrpc.org/dataset/housing-permits',
        d3: [
            {
                type: 'line',
                container: 'chart',
                dataSource: ['permits_graph_1'],
                context: {
                    labels: ['Percentage'],
                    keepLabels: true,
                    units: ['percentC'],
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
                    labels: ['Housing Units Approved'],
                    keepLabels: true,
                    units: ['thousands'],
                    keepUnits: true
                },
                columnOptions: [
                    ['DVRPC- Core City', 'DVRPC- Developed Community', 'DVRPC- Growing Suburb', 'DVRPC- Rural Area'],
                    ['Bucks County- Core City', 'Bucks County- Developed Community', 'Bucks County- Growing Suburb', 'Bucks County- Rural Area'],
                    ['Burlington County- Core City', 'Burlington County- Developed Community', 'Burlington County- Growing Suburb', 'Burlington County- Rural Area'],
                    ['Camden County- Core City', 'Camden County- Developed Community', 'Camden County- Growing Suburb', 'Camden County- Rural Area'],
                    ['Chester County- Core City', 'Chester County- Developed Community', 'Chester County- Growing Suburb', 'Chester County- Rural Area'],
                    ['Delaware County- Core City', 'Delaware County- Developed Community', 'Delaware County- Growing Suburb', 'Delaware County- Rural Area'],
                    ['Gloucester County- Core City', 'Gloucester County- Developed Community', 'Gloucester County- Growing Suburb', 'Gloucester County- Rural Area'],
                    ['Mercer County- Core City', 'Mercer County- Developed Community', 'Mercer County- Growing Suburb', 'Mercer County- Rural Area'],
                    ['Montgomery County- Core City', 'Montgomery County- Developed Community', 'Montgomery County- Growing Suburb', 'Montgomery County- Rural Area'],
                    ['Philadelphia County- Core City', 'Philadelphia County- Developed Community', 'Philadelphia County- Growing Suburb', 'Philadelphia County- Rural Area']
                ],
                data: [
                    {
                        'key': 'Core Cities',
                        columns: ['year', 'DVRPC- Core City']
                    },
                    {
                        'key': 'Developed Communities',
                        columns: ['year', 'DVRPC- Developed Community']
                    },
                    {
                        'key': 'Growing Suburbs',
                        columns: ['year', 'DVRPC- Growing Suburb']
                    },
                    {
                        'key': 'Rural Areas',
                        columns: ['year', 'DVRPC- Rural Area']
                    }
                ]
            },
            {
                type: 'stacked bar',
                container: 'chart3',
                dataSource: ['permits_graph_3A','permits_graph_3B'],
                context: {
                    labels: ['Housing Units Approved'],
                    keepLabels: true,
                    units: ['thousands'],
                    keepUnits: true
                },
                columnOptions: [
                    ['DVRPC- large multi-family', 'DVRPC- small multi-family', 'DVRPC- single family'],
                    ['New Jersey Suburbs- large multi-family', 'New Jersey Suburbs- small multi-family', 'New Jersey Suburbs- single family'],
                    ['Pennsylvania Suburbs- large multi-family', 'Pennsylvania Suburbs- small multi-family', 'Pennsylvania Suburbs- single family'],
                    ['Core City- large multi-family', 'Core City- small multi-family', 'Core City- single family'],
                    ['Developed Community- large multi-family', 'Developed Community- small multi-family', 'Developed Community- single family'],
                    ['Growing Suburb- large multi-family', 'Growing Suburb- small multi-family', 'Growing Suburb- single family'],
                    ['Rural Area- large multi-family', 'Rural Area- small multi-family', 'Rural Area- single family'],
                    ['Bucks County- large multi-family', 'Bucks County- small multi-family', 'Bucks County- single family'],
                    ['Burlington County- large multi-family', 'Burlington County- small multi-family', 'Burlington County- single family'],
                    ['Camden County- large multi-family', 'Camden County- small multi-family', 'Camden County- single family'],
                    ['Chester County- large multi-family', 'Chester County- small multi-family', 'Chester County- single family'],
                    ['Delaware County- large multi-family', 'Delaware County- small multi-family', 'Delaware County- single family'],
                    ['Gloucester County- large multi-family', 'Gloucester County- small multi-family', 'Gloucester County- single family'],
                    ['Mercer County- large multi-family', 'Mercer County- small multi-family', 'Mercer County- single family'],
                    ['Montgomery County- large multi-family', 'Montgomery County- small multi-family', 'Montgomery County- single family'],
                    ['Philadelphia County- large multi-family', 'Philadelphia County- small multi-family', 'Philadelphia County- single family']
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
        ]
    },
    'Housing Affordability': {
        categories: ['comm', 'econo', 'resil', 'equity'],
        trend: {
            status: 'neutral',
            text: {
                stat: '752,000 cost-burdened households',
                text: `down 10% since 2011 peak`
            }
        },
        dataUrl: 'https://catalog.dvrpc.org/dataset/housing-affordability',
        d3: [
            {
                type: 'line',
                container: 'chart',
                columnOptions: [
                    ['DVRPC Region- Own', 'DVRPC Region- Rent', 'DVRPC Region- Total'],
                    ['NJ Counties- Own', 'NJ Counties- Rent', 'NJ Counties- Total'],
                    ['PA Suburban Counties- Own', 'PA Suburban Counties- Rent', 'PA Suburban Counties- Total'],
                    ['Bucks County- Own', 'Bucks County- Rent', 'Bucks County- Total'],
                    ['Burlington County- Own', 'Burlington County- Rent', 'Burlington County- Total'],
                    ['Camden County- Own', 'Camden County- Rent', 'Camden County- Total'],
                    ['Chester County- Own', 'Chester County- Rent', 'Chester County- Total'],
                    ['Delaware County- Own', 'Delaware County- Rent', 'Delaware County- Total'],
                    ['Gloucester County- Own', 'Gloucester County- Rent', 'Gloucester County- Total'],
                    ['Mercer County- Own', 'Mercer County- Rent', 'Mercer County- Total'],
                    ['Montgomery County- Own', 'Montgomery County- Rent', 'Montgomery County- Total'],
                    ['Philadelphia County- Own', 'Philadelphia County- Rent', 'Philadelphia County- Total'],
                ],
                dataSource: ['housing_afford_graph_1a', 'housing_afford_graph_1b'],
                data: [

                    {
                        'key': 'Own',
                        columns: ['year', 'DVRPC Region- Own']
                    },
                    {
                        'key': 'Rent',
                        columns: ['year', 'DVRPC Region- Rent']
                    },
                    {
                        'key': 'Total',
                        columns: ['year', 'DVRPC Region- Total']
                    }
                ],
                context: {
                    labels: ['Thousands of Households', 'Percentage of Households'],
                    units: ['thousands', 'percentC'],
                },
            },
            {
                type: 'bar',
                container: 'chart2',
                dataSource: ['housing_afford_graph_1'],
                context: {
                    labels: ['Percentage of Households'],
                    units: ['percentC']
                },
                data: [
                    {
                        'key': 'Core Cities',
                        columns: ['year', 'Core Cities- Total'],
                    },
                    {
                        'key': 'Developed Communities',
                        columns: ['year', 'Developed Communities- Total'],
                    },
                    {
                        'key': 'Growing Suburbs',
                        columns: ['year', 'Growing Suburbs- Total'],
                    },
                    {
                        'key': 'Rural Areas',
                        columns: ['year', 'Rural Areas- Total'],
                    }
                ]
            },
            {
                type: 'stacked bar',
                container: 'chart3',
                dataSource: ['housing_afford_graph_2'],
                context: {
                    labels: ['Households (Thousands)'],
                    keepLabels: true,
                    units: ['thousands']
                },
                columnOptions: [
                    ['DVRPC- Below 30%- Own', 'DVRPC- Below 30%- Rent', 'DVRPC- Above 30%- Own','DVRPC- Above 30%- Rent','DVRPC- Not Computed- Own', 'DVRPC- Not Computed- Rent'],
                    ['New Jersey Suburbs- Below 30%- Own', 'New Jersey Suburbs- Below 30%- Rent','New Jersey Suburbs- Above 30%- Own','New Jersey Suburbs- Above 30%- Rent','New Jersey Suburbs- Not Computed- Own', 'New Jersey Suburbs- Not Computed- Rent'],
                    ['Pennsylvania Suburbs- Below 30%- Own', 'Pennsylvania Suburbs- Below 30%- Rent','Pennsylvania Suburbs- Above 30%- Own','Pennsylvania Suburbs- Above 30%- Rent','Pennsylvania Suburbs- Not Computed- Own', 'Pennsylvania Suburbs- Not Computed- Rent'],
                    ['Core City- Below 30%- Own', 'Core City- Below 30%- Rent','Core City- Above 30%- Own','Core City- Above 30%- Rent','Core City- Not Computed- Own', 'Core City- Not Computed- Rent'],
                    ['Developed Community- Below 30%- Own', 'Developed Community- Below 30%- Rent','Developed Community- Above 30%- Own','Developed Community- Above 30%- Rent','Developed Community- Not Computed- Own', 'Developed Community- Not Computed- Rent'],
                    ['Growing Suburb- Below 30%- Own', 'Growing Suburb- Below 30%- Rent','Growing Suburb- Above 30%- Own','Growing Suburb- Above 30%- Rent','Growing Suburb- Not Computed- Own', 'Growing Suburb- Not Computed- Rent'],
                    ['Rural Area- Below 30%- Own', 'Rural Area- Below 30%- Rent','Rural Area- Above 30%- Own','Rural Area- Above 30%- Rent','Rural Area- Not Computed- Own', 'Rural Area- Not Computed- Rent'],
                    ['Bucks County- Below 30%- Own', 'Bucks County- Below 30%- Rent','Bucks County- Above 30%- Own','Bucks County- Above 30%- Rent','Bucks County- Not Computed- Own', 'Bucks County- Not Computed- Rent'],
                    ['Burlington County- Below 30%- Own', 'Burlington County- Below 30%- Rent','Burlington County- Above 30%- Own','Burlington County- Above 30%- Rent','Burlington County- Not Computed- Own', 'Burlington County- Not Computed- Rent'],
                    ['Camden County- Below 30%- Own', 'Camden County- Below 30%- Rent','Camden County- Above 30%- Own','Camden County- Above 30%- Rent','Camden County- Not Computed- Own', 'Camden County- Not Computed- Rent'],
                    ['Chester County- Below 30%- Own', 'Chester County- Below 30%- Rent','Chester County- Above 30%- Own','Chester County- Above 30%- Rent','Chester County- Not Computed- Own', 'Chester County- Not Computed- Rent'],
                    ['Delaware County- Below 30%- Own', 'Delaware County- Below 30%- Rent','Delaware County- Above 30%- Own','Delaware County- Above 30%- Rent','Delaware County- Not Computed- Own', 'Delaware County- Not Computed- Rent'],
                    ['Gloucester County- Below 30%- Own', 'Gloucester County- Below 30%- Rent','Gloucester County- Above 30%- Own','Gloucester County- Above 30%- Rent','Gloucester County- Not Computed- Own', 'Gloucester County- Not Computed- Rent'],
                    ['Mercer County- Below 30%- Own', 'Mercer County- Below 30%- Rent','Mercer County- Above 30%- Own','Mercer County- Above 30%- Rent','Mercer County- Not Computed- Own', 'Mercer County- Not Computed- Rent'],
                    ['Montgomery County- Below 30%- Own', 'Montgomery County- Below 30%- Rent','Montgomery County- Above 30%- Own','Montgomery County- Above 30%- Rent','Montgomery County- Not Computed- Own', 'Montgomery County- Not Computed- Rent'],
                    ['Philadelphia County- Below 30%- Own', 'Philadelphia County- Below 30%- Rent','Philadelphia County- Above 30%- Own','Philadelphia County- Above 30%- Rent','Philadelphia County- Not Computed- Own', 'Philadelphia County- Not Computed- Rent']
                ],
                data: [
                    {
                        'key': 'Below 30% - Own',
                        columns: ['year', 'DVRPC- Below 30%- Own']
                    },
                    {
                        'key': 'Below 30% - Rent',
                        columns: ['year', 'DVRPC- Below 30%- Rent']
                    },
                    {
                        'key': 'Above 30% - Own',
                        columns: ['year', 'DVRPC- Above 30%- Own']
                    },
                    {
                        'key': 'Above 30% - Rent',
                        columns: ['year', 'DVRPC- Above 30%- Rent']
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
                container: 'chart4',
                dataSource: ['housing_afford_graph_3'],
                context: {
                    labels: ['Households (Thousands)'],
                    keepLabels: true,
                    units: ['thousands']
                },
                columnOptions: [
                    ['DVRPC- 0.0-9.9%', 'DVRPC- 10.0-14.9%', 'DVRPC- 15.0-19.9%', 'DVRPC- 20.0-24.9%', 'DVRPC- 25.0-29.9%', 'DVRPC- 30.0-34.9%', 'DVRPC- 35.0-39.9%', 'DVRPC- 40.0-49.9%', 'DVRPC- 50%+','DVRPC- Not Computed'],
                    ['New Jersey Suburbs- 0.0-9.9%', 'New Jersey Suburbs- 10.0-14.9%', 'New Jersey Suburbs- 15.0-19.9%', 'New Jersey Suburbs- 20.0-24.9%', 'New Jersey Suburbs- 25.0-29.9%', 'New Jersey Suburbs- 30.0-34.9%', 'New Jersey Suburbs- 35.0-39.9%', 'New Jersey Suburbs- 40.0-49.9%', 'New Jersey Suburbs- 50%+', 'New Jersey Suburbs- Not Computed'],
                    ['Philadelphia County- 0.0-9.9%', 'Philadelphia County- 10.0-14.9%', 'Philadelphia County- 15.0-19.9%', 'Philadelphia County- 20.0-24.9%', 'Philadelphia County- 25.0-29.9%', 'Philadelphia County- 30.0-34.9%', 'Philadelphia County- 35.0-39.9%', 'Philadelphia County- 40.0-49.9%', 'Philadelphia County- 50%+', 'Philadelphia County- Not Computed'],
                    ['Pennsylvania Suburbs- 0.0-9.9%', 'Pennsylvania Suburbs- 10.0-14.9%', 'Pennsylvania Suburbs- 15.0-19.9%', 'Pennsylvania Suburbs- 20.0-24.9%', 'Pennsylvania Suburbs- 25.0-29.9%', 'Pennsylvania Suburbs- 30.0-34.9%', 'Pennsylvania Suburbs- 35.0-39.9%', 'Pennsylvania Suburbs- 40.0-49.9%', 'Pennsylvania Suburbs- 50%+', 'Pennsylvania Suburbs- Not Computed'],
                    ['Core City- 0.0-9.9%','Core City- 10.0-14.9%', 'Core City- 15.0-19.9%', 'Core City- 20.0-24.9%', 'Core City- 25.0-29.9%', 'Core City- 30.0-34.9%', 'Core City- 35.0-39.9%', 'Core City- 40.0-49.9%', 'Core City- 50%+', 'Core City- Not Computed'],
                    ['Developed Community- 0.0-9.9%', 'Developed Community- 10.0-14.9%', 'Developed Community- 15.0-19.9%', 'Developed Community- 20.0-24.9%', 'Developed Community- 25.0-29.9%', 'Developed Community- 30.0-34.9%', 'Developed Community- 35.0-39.9%', 'Developed Community- 40.0-49.9%', 'Developed Community- 50%+', 'Developed Community- Not Computed'],
                    ['Growing Suburb- 0.0-9.9%', 'Growing Suburb- 10.0-14.9%', 'Growing Suburb- 15.0-19.9%', 'Growing Suburb- 20.0-24.9%', 'Growing Suburb- 25.0-29.9%', 'Growing Suburb- 30.0-34.9%', 'Growing Suburb- 35.0-39.9%', 'Growing Suburb- 40.0-49.9%', 'Growing Suburb- 50%+', 'Growing Suburb- Not Computed'],
                    ['Rural Area- 0.0-9.9%', 'Rural Area- 10.0-14.9%', 'Rural Area- 15.0-19.9%', 'Rural Area- 20.0-24.9%', 'Rural Area- 25.0-29.9%', 'Rural Area- 30.0-34.9%', 'Rural Area- 35.0-39.9%', 'Rural Area- 40.0-49.9%', 'Rural Area- 50%+', 'Rural Area- Not Computed'],
                    ['Bucks County- 0.0-9.9%', 'Bucks County- 10.0-14.9%', 'Bucks County- 15.0-19.9%', 'Bucks County- 20.0-24.9%', 'Bucks County- 25.0-29.9%', 'Bucks County- 30.0-34.9%', 'Bucks County- 35.0-39.9%', 'Bucks County- 40.0-49.9%', 'Bucks County- 50%+', 'Bucks County- Not Computed'],
                    ['Burlington County- 0.0-9.9%', 'Burlington County- 10.0-14.9%', 'Burlington County- 15.0-19.9%', 'Burlington County- 20.0-24.9%', 'Burlington County- 25.0-29.9%', 'Burlington County- 30.0-34.9%', 'Burlington County- 35.0-39.9%', 'Burlington County- 40.0-49.9%', 'Burlington County- 50%+', 'Burlington County- Not Computed'],
                    ['Camden County- 0.0-9.9%', 'Camden County- 10.0-14.9%', 'Camden County- 15.0-19.9%', 'Camden County- 20.0-24.9%', 'Camden County- 25.0-29.9%', 'Camden County- 30.0-34.9%', 'Camden County- 35.0-39.9%', 'Camden County- 40.0-49.9%', 'Camden County- 50%+', 'Camden County- Not Computed'],
                    ['Chester County- 0.0-9.9%', 'Chester County- 10.0-14.9%', 'Chester County- 15.0-19.9%', 'Chester County- 20.0-24.9%', 'Chester County- 25.0-29.9%', 'Chester County- 30.0-34.9%', 'Chester County- 35.0-39.9%', 'Chester County- 40.0-49.9%', 'Chester County- 50%+', 'Chester County- Not Computed'],
                    ['Delaware County- 0.0-9.9%', 'Delaware County- 10.0-14.9%', 'Delaware County- 15.0-19.9%', 'Delaware County- 20.0-24.9%', 'Delaware County- 25.0-29.9%', 'Delaware County- 30.0-34.9%', 'Delaware County- 35.0-39.9%', 'Delaware County- 40.0-49.9%', 'Delaware County- 50%+', 'Delaware County- Not Computed'],
                    ['Gloucester County- 0.0-9.9%', 'Gloucester County- 10.0-14.9%', 'Gloucester County- 15.0-19.9%', 'Gloucester County- 20.0-24.9%', 'Gloucester County- 25.0-29.9%', 'Gloucester County- 30.0-34.9%', 'Gloucester County- 35.0-39.9%', 'Gloucester County- 40.0-49.9%', 'Gloucester County- 50%+', 'Gloucester County- Not Computed'],
                    ['Mercer County- 0.0-9.9%', 'Mercer County- 10.0-14.9%', 'Mercer County- 15.0-19.9%', 'Mercer County- 20.0-24.9%', 'Mercer County- 25.0-29.9%', 'Mercer County- 30.0-34.9%', 'Mercer County- 35.0-39.9%', 'Mercer County- 40.0-49.9%', 'Mercer County- 50%+','Mercer County- Not Computed'],
                    ['Montgomery County- 0.0-9.9%','Montgomery County- 10.0-14.9%', 'Montgomery County- 15.0-19.9%', 'Montgomery County- 20.0-24.9%', 'Montgomery County- 25.0-29.9%', 'Montgomery County- 30.0-34.9%', 'Montgomery County- 35.0-39.9%', 'Montgomery County- 40.0-49.9%', 'Montgomery County- 50%+', 'Montgomery County- Not Computed'],
                    ['Philadelphia County- 0.0-9.9%', 'Philadelphia County- 10.0-14.9%', 'Philadelphia County- 15.0-19.9%', 'Philadelphia County- 20.0-24.9%', 'Philadelphia County- 25.0-29.9%', 'Philadelphia County- 30.0-34.9%', 'Philadelphia County- 35.0-39.9%', 'Philadelphia County- 40.0-49.9%', 'Philadelphia County- 50%+', 'Philadelphia County- Not Computed']
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
            {
                type: 'line',
                container: 'chart5',
                dataSource: ['housing_afford_graph_4'],
                context: {
                    labels: ['Ratio'],
                    keepLabels: true,
                    units: ['singles'],
                },
                columnOptions: [
                    ['DVRPC Region'],
                    ['NJ Counties'],
                    ['PA Suburban Counties'],
                    ['Bucks County'],
                    ['Burlington County'],
                    ['Camden County'],
                    ['Chester County'],
                    ['Delaware County'],
                    ['Gloucester County'],
                    ['Mercer County'],
                    ['Montgomery County'],
                    ['Philadelphia County']
                ],
                data: [
                    {
                        'key': 'Ratio',
                        columns: ['year', 'DVRPC Region']
                    }
                ]
            }
        ]
    },
    'Job Growth': {
      categories: ['econo', 'comm', 'resil'],
      trend: {
        status: 'awesome',
        text: {
          stat: '25% increase',
          text: `in jobs between 2001-2022`,
        },
      },
      dataUrl: 'https://catalog.dvrpc.org/dataset/job-growth',
      d3: [
        {
          type: 'line',
          container: 'chart',
          dataSource: ['jobs_graph1a', 'jobs_graph1b', 'jobs_graph1c'],
          context: {
            labels: ['Growth Rate', 'Growth Rate', 'Total Employment'],
            keepLabels: false,
            units: ['percentC', 'percentC', 'thousands'],
            keepUnits: false,
          },
          columnOptions: [
            ['region_total', 'region_wage_salary', 'region_proprietors'],
            ['nj_cos_total', 'nj_cos_wage_salary', 'nj_cos_proprietors'],
            [
              'pa_sub_cos_total',
              'pa_sub_cos_wage_salary',
              'pa_sub_cos_proprietors',
            ],
            ['bucks_total', 'bucks_wage_salary', 'bucks_proprietors'],
            [
              'burlington_total',
              'burlington_wage_salary',
              'burlington_proprietors',
            ],
            ['camden_total', 'camden_wage_salary', 'camden_proprietors'],
            ['chester_total', 'chester_wage_salary', 'chester_proprietors'],
            [
              'gloucester_total',
              'gloucester_wage_salary',
              'gloucester_proprietors',
            ],
            ['delaware_total', 'delaware_wage_salary', 'delaware_proprietors'],
            ['mercer_total', 'mercer_wage_salary', 'mercer_proprietors'],
            [
              'montgomery_total',
              'montgomery_wage_salary',
              'montgomery_proprietors',
            ],
            [
              'philadelphia_total',
              'philadelphia_wage_salary',
              'philadelphia_proprietors',
            ],
          ],
          data: [
            {
              key: 'Total',
              columns: ['year', 'region_total'],
            },
            {
              key: 'Wage and Salary',
              disabled: true,
              columns: ['year', 'region_wage_salary'],
            },
            {
              key: 'Proprietors',
              disabled: true,
              columns: ['year', 'region_proprietors'],
            },
          ],
        },
        {
          type: 'stacked bar',
          container: 'chart2',
          dataSource: ['jobs_graph2'],
          context: {
            labels: ['Percentage of Region'],
            units: ['percentC'],
          },
          data: [
            {
              key: 'Bucks**',
              columns: ['year', 'bucks'],
            },
            {
              key: 'Burlington**',
              columns: ['year', 'burlington'],
            },
            {
              key: 'Camden**',
              columns: ['year', 'camden'],
            },
            {
              key: 'Chester**',
              columns: ['year', 'chester'],
            },
            {
              key: 'Delaware**',
              columns: ['year', 'delaware'],
            },
            {
              key: 'Gloucester**',
              columns: ['year', 'gloucester'],
            },
            {
              key: 'Mercer**',
              columns: ['year', 'mercer'],
            },
            {
              key: 'Montgomery**',
              columns: ['year', 'montgomery'],
            },
            {
              key: 'Philadelphia**',
              columns: ['year', 'philadelphia'],
            },
          ],
        },
        {
          type: 'stacked bar',
          container: 'chart3',
          dataSource: ['jobs_graph3'],
          context: {
            labels: ['Percentage of Total Jobs'],
            keepLabels: true,
            units: ['percentC'],
            keepUnits: true,
          },
          columnOptions: [
            [
              'region_ag_for_fish_min',
              'region_art_ent_rec_acc_food',
              'region_construction',
              'region_ed_services',
              'region_fin_insur_real_est',
              'region_health_social_assist',
              'region_information',
              'region_manufacturing',
              'region_other_services',
              'region_prof_services',
              'region_gov',
              'region_retail_trade',
              'region_transp_warehouse_util',
              'region_wholesale_trade',
            ],
            [
              'nj_cos_ag_for_fish_min',
              'nj_cos_art_ent_rec_acc_food',
              'nj_cos_construction',
              'nj_cos_ed_services',
              'nj_cos_fin_insur_real_est',
              'nj_cos_health_social_assist',
              'nj_cos_information',
              'nj_cos_manufacturing',
              'nj_cos_other_services',
              'nj_cos_prof_services',
              'nj_cos_gov',
              'nj_cos_retail_trade',
              'nj_cos_transp_warehouse_util',
              'nj_cos_wholesale_trade',
            ],
            [
              'pa_sub_cos_ag_for_fish_min',
              'pa_sub_cos_art_ent_rec_acc_food',
              'pa_sub_cos_construction',
              'pa_sub_cos_ed_services',
              'pa_sub_cos_fin_insur_real_est',
              'pa_sub_cos_health_social_assist',
              'pa_sub_cos_information',
              'pa_sub_cos_manufacturing',
              'pa_sub_cos_other_services',
              'pa_sub_cos_prof_services',
              'pa_sub_cos_gov',
              'pa_sub_cos_retail_trade',
              'pa_sub_cos_transp_warehouse_util',
              'pa_sub_cos_wholesale_trade',
            ],
            [
              'bucks_ag_for_fish_min',
              'bucks_art_ent_rec_acc_food',
              'bucks_construction',
              'bucks_ed_services',
              'bucks_fin_insur_real_est',
              'bucks_health_social_assist',
              'bucks_information',
              'bucks_manufacturing',
              'bucks_other_services',
              'bucks_prof_services',
              'bucks_gov',
              'bucks_retail_trade',
              'bucks_transp_warehouse_util',
              'bucks_wholesale_trade',
            ],
            [
              'burl_ag_for_fish_min',
              'burl_art_ent_rec_acc_food',
              'burl_construction',
              'burl_ed_services',
              'burl_fin_insur_real_est',
              'burl_health_social_assist',
              'burl_information',
              'burl_manufacturing',
              'burl_other_services',
              'burl_prof_services',
              'burl_gov',
              'burl_retail_trade',
              'burl_transp_warehouse_util',
              'burl_wholesale_trade',
            ],
            [
              'camd_ag_for_fish_min',
              'camd_art_ent_rec_acc_food',
              'camd_construction',
              'camd_ed_services',
              'camd_fin_insur_real_est',
              'camd_health_social_assist',
              'camd_information',
              'camd_manufacturing',
              'camd_other_services',
              'camd_prof_services',
              'camd_gov',
              'camd_retail_trade',
              'camd_transp_warehouse_util',
              'camd_wholesale_trade',
            ],
            [
              'ches_ag_for_fish_min',
              'ches_art_ent_rec_acc_food',
              'ches_construction',
              'ches_ed_services',
              'ches_fin_insur_real_est',
              'ches_health_social_assist',
              'ches_information',
              'ches_manufacturing',
              'ches_other_services',
              'ches_prof_services',
              'ches_gov',
              'ches_retail_trade',
              'ches_transp_warehouse_util',
              'ches_wholesale_trade',
            ],
            [
              'glo_ag_for_fish_min',
              'glo_art_ent_rec_acc_food',
              'glo_construction',
              'glo_ed_services',
              'glo_fin_insur_real_est',
              'glo_health_social_assist',
              'glo_information',
              'glo_manufacturing',
              'glo_other_services',
              'glo_prof_services',
              'glo_gov',
              'glo_retail_trade',
              'glo_transp_warehouse_util',
              'glo_wholesale_trade',
            ],
            [
              'del_ag_for_fish_min',
              'del_art_ent_rec_acc_food',
              'del_construction',
              'del_ed_services',
              'del_fin_insur_real_est',
              'del_health_social_assist',
              'del_information',
              'del_manufacturing',
              'del_other_services',
              'del_prof_services',
              'del_gov',
              'del_retail_trade',
              'del_transp_warehouse_util',
              'del_wholesale_trade',
            ],
            [
              'mer_ag_for_fish_min',
              'mer_art_ent_rec_acc_food',
              'mer_construction',
              'mer_ed_services',
              'mer_fin_insur_real_est',
              'mer_health_social_assist',
              'mer_information',
              'mer_manufacturing',
              'mer_other_services',
              'mer_prof_services',
              'mer_gov',
              'mer_retail_trade',
              'mer_transp_warehouse_util',
              'mer_wholesale_trade',
            ],
            [
              'mont_ag_for_fish_min',
              'mont_art_ent_rec_acc_food',
              'mont_construction',
              'mont_ed_services',
              'mont_fin_insur_real_est',
              'mont_health_social_assist',
              'mont_information',
              'mont_manufacturing',
              'mont_other_services',
              'mont_prof_services',
              'mont_gov',
              'mont_retail_trade',
              'mont_transp_warehouse_util',
              'mont_wholesale_trade',
            ],
            [
              'phil_ag_for_fish_min',
              'phil_art_ent_rec_acc_food',
              'phil_construction',
              'phil_ed_services',
              'phil_fin_insur_real_est',
              'phil_health_social_assist',
              'phil_information',
              'phil_manufacturing',
              'phil_other_services',
              'phil_prof_services',
              'phil_gov',
              'phil_retail_trade',
              'phil_transp_warehouse_util',
              'phil_wholesale_trade',
            ],
          ],
          data: [
            {
              key: 'Agriculture, forestry, fishing, mining',
              columns: ['year', 'region_ag_for_fish_min'],
            },
            {
              key: 'Arts, entertain., food, accommodations',
              columns: ['year', 'region_art_ent_rec_acc_food'],
            },
            {
              key: 'Construction',
              columns: ['year', 'region_construction'],
            },
            {
              key: 'Educational services',
              columns: ['year', 'region_ed_services'],
            },
            {
              key: 'Finance, insurance, real estate',
              columns: ['year', 'region_fin_insur_real_est'],
            },
            {
              key: 'Health care and social assistance',
              columns: ['year', 'region_health_social_assist'],
            },
            {
              key: 'Information',
              columns: ['year', 'region_information'],
            },
            {
              key: 'Manufacturing',
              columns: ['year', 'region_manufacturing'],
            },
            {
              key: 'Other services (except public admin)',
              columns: ['year', 'region_other_services'],
            },
            {
              key: 'Professional, scientific, tech services',
              columns: ['year', 'region_prof_services'],
            },
            {
              key: 'Public administration',
              columns: ['year', 'region_gov'],
            },
            {
              key: 'Retail trade',
              columns: ['year', 'region_retail_trade'],
            },
            {
              key: 'Transportation, warehousing, utilities',
              columns: ['year', 'region_transp_warehouse_util'],
            },
            {
              key: 'Wholesale trade',
              columns: ['year', 'region_wholesale_trade'],
            },
          ],
        },
      ]
    },
    'Community Integration': {
      categories: ['comm', 'econo', 'equity'],
      trend: {
        status: 'not-great',
        text: {
          stat: '41 to 52%',
          text: `of residents not living in diverse communities`,
        },
      },
      dataUrl: 'https://catalog.dvrpc.org/dataset/community-integration',
      d3: [
        {
          type: 'line',
          container: 'chart',
          dataSource: ['RaceEthnSegregation'],
          context: {
            labels: [
              'Population Needing to Move to Achieve Regional Distribution',
            ],
            units: ['percentC'],
          },
          data: [
            {
              key: 'Index Value',
              columns: ['year', 'peopleofcolor'],
            },
          ],
        },
        {
            type: 'line',
            container: 'chart2',
            dataSource: ['IncomeSegregation'],
            context: {
                labels: ['Population Needing to Move to Achieve Regional Distribution'],
                keepLabels: true,
                units: ['percentC'],
                keepUnits: true
            },
            data: [
                {
                    'key': 'Index Value',
                    columns: ['year', 'lowincome']
                }
            ]
        }
      ]
    },
    'Income': {
        categories: ['econo','comm', 'equity', 'resil'],
        trend: {
            status: 'bad',
            text: {
                stat: '20-36% remaining',
                text: `income gaps between groups`
            }
        },
        dataUrl: 'https://catalog.dvrpc.org/dataset/income',
        d3: [
            {
                type: 'line',
                container: 'chart',
                dataSource: ['IncomeQuintileTopBottomGap'],
                context: {
                    labels: ['Growth Rate Difference'],
                    keepLabels: true,
                    units: ['percentC'],
                    keepUnits: true
                },
                columnOptions: [
                    ['Region'],
                    ['NJCos'],
                    ['PASubCos'],
                    ['BuckCo'],
                    ['BurlCo'],
                    ['CamdCo'],
                    ['ChesCo'],
                    ['DelCo'],
                    ['GloCo'],
                    ['MerCo'],
                    ['MontCo'],
                    ['PhilCo']
                ],
                data: [
                    {
                        'key': 'High/Low Quintile Gap',
                        columns: ['year', 'Region']
                    }
                ]
            },
            {
                type: 'line',
                container: 'chart2',
                dataSource: ['IncomeQuintilesMean', 'IncomeQuintilesAbs', 'IncomeQuintilesPct'],
                context: {
                    labels: ['Dollars (2022)', 'Change in Dollars (2022)', 'Percent Change in Dollars (2022)'],
                    keepLabels: false,
                    units: ['dollars', 'dollars', 'percentC'],
                    keepUnits: false
                },
                columnOptions: [
                    ['Region_1st', 'Region_2nd', 'Region_3rd', 'Region_4th', 'Region_5th', 'Region_T5pct', 'Region_All'],
                    ['NJCos_1st', 'NJCos_2nd', 'NJCos_3rd', 'NJCos_4th', 'NJCos_5th', 'NJCos_T5pct', 'NJCos_All'],
                    ['PASubCos_1st', 'PASubCos_2nd', 'PASubCos_3rd', 'PASubCos_4th', 'PASubCos_5th', 'PASubCos_T5pct', 'PASubCos_All'],
                    ['BuckCo_1st', 'BuckCo_2nd', 'BuckCo_3rd', 'BuckCo_4th', 'BuckCo_5th', 'BuckCo_T5pct', 'BuckCo_All'],
                    ['BurlCo_1st', 'BurlCo_2nd', 'BurlCo_3rd', 'BurlCo_4th', 'BurlCo_5th', 'BurlCo_T5pct', 'BurlCo_All'],
                    ['CamdCo_1st', 'CamdCo_2nd', 'CamdCo_3rd', 'CamdCo_4th', 'CamdCo_5th', 'CamdCo_T5pct', 'CamdCo_All'],
                    ['ChesCo_1st', 'ChesCo_2nd', 'ChesCo_3rd', 'ChesCo_4th', 'ChesCo_5th', 'ChesCo_T5pct', 'ChesCo_All'],
                    ['DelCo_1st', 'DelCo_2nd', 'DelCo_3rd', 'DelCo_4th', 'DelCo_5th', 'DelCo_T5pct', 'DelCo_All'],
                    ['GloCo_1st', 'GloCo_2nd', 'GloCo_3rd', 'GloCo_4th', 'GloCo_5th', 'GloCo_T5pct', 'GloCo_All'],
                    ['MerCo_1st', 'MerCo_2nd', 'MerCo_3rd', 'MerCo_4th', 'MerCo_5th', 'MerCo_T5pct', 'MerCo_All'],
                    ['MontCo_1st', 'MontCo_2nd', 'MontCo_3rd', 'MontCo_4th', 'MontCo_5th', 'MontCo_T5pct', 'MontCo_All'],
                    ['PhilCo_1st', 'PhilCo_2nd', 'PhilCo_3rd', 'PhilCo_4th', 'PhilCo_5th', 'PhilCo_T5pct', 'PhilCo_All']
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
                    },
                    {
                        'key': 'Top 5 Percent',
                        columns: ['Year', 'Region_T5pct']
                    },
                    {
                        'key': 'All',
                        columns: ['Year', 'Region_All']
                    }
                ]
            },
            {
                type: 'line',
                container: 'chart3',
                dataSource: ['medincGapRace', 'medincPercGapRace'],
                context: {
                  labels: ['Dollars (2022)', 'Percent'],
                  keepLabels: false,
                  units: ['dollars', 'percent'],
                  keepUnits: false,
                },
                columnOptions: [
                  ['region_nonwht', 'region_black', 'region_asian', 'region_latinx'],
                  [
                    'nj_suburban_counties_nonwht',
                    'nj_suburban_counties_black',
                    'nj_suburban_counties_asian',
                    'nj_suburban_counties_latinx',
                  ],
                  [
                    'pa_suburban_counties_nonwht',
                    'pa_suburban_counties_black',
                    'pa_suburban_counties_asian',
                    'pa_suburban_counties_latinx',
                  ],
                  ['bucks_nonwht', 'bucks_black', 'bucks_asian', 'bucks_latinx'],
                  [
                    'burlington_nonwht',
                    'burlington_black',
                    'burlington_asian',
                    'burlington_latinx',
                  ],
                  ['camden_nonwht', 'camden_black', 'camden_asian', 'camden_latinx'],
                  [
                    'chester_nonwht',
                    'chester_black',
                    'chester_asian',
                    'chester_latinx',
                  ],
                  [
                    'delaware_nonwht',
                    'delaware_black',
                    'delaware_asian',
                    'delaware_latinx',
                  ],
                  [
                    'gloucester_nonwht',
                    'gloucester_black',
                    'gloucester_asian',
                    'gloucester_latinx',
                  ],
                  ['mercer_nonwht', 'mercer_black', 'mercer_asian', 'mercer_latinx'],
                  [
                    'montgomery_nonwht',
                    'montgomery_black',
                    'montgomery_asian',
                    'montgomery_latinx',
                  ],
                  [
                    'philadelphia_nonwht',
                    'philadelphia_black',
                    'philadelphia_asian',
                    'philadelphia_latinx',
                  ],
                ],
                data: [
                  {
                    key: 'People of Color & Latinx',
                    columns: ['year', 'region_nonwht'],
                  },
                  {
                    key: 'Black, non-Latinx',
                    columns: ['year', 'region_black'],
                    disabled: true,
                  },
                  {
                    key: 'Asian, non-Latinx',
                    columns: ['year', 'region_asian'],
                    disabled: true,
                  },
                  {
                    key: 'Latinx',
                    columns: ['year', 'region_latinx'],
                    disabled: true,
                  },
                ],
              },
              {
                type: 'line',
                container: 'chart4',
                dataSource: ['medincRace'],
                context: {
                  labels: ['Dollars (2022)'],
                  keepLabels: true,
                  units: ['dollars'],
                  keepUnits: true,
                },
                columnOptions: [
                  [
                    'region_nonwht',
                    'region_white',
                    'region_black',
                    'region_asian',
                    'region_latinx',
                    'region_all'
                  ],
                  [
                    'nj_suburban_counties_nonwht',
                    'nj_suburban_counties_white',
                    'nj_suburban_counties_black',
                    'nj_suburban_counties_asian',
                    'nj_suburban_counties_latinx',
                    'nj_suburban_counties_all',
                  ],
                  [
                    'pa_suburban_counties_nonwht',
                    'pa_suburban_counties_white',
                    'pa_suburban_counties_black',
                    'pa_suburban_counties_asian',
                    'pa_suburban_counties_latinx',
                    'pa_suburban_counties_all',
                  ],
                  [
                    'bucks_nonwht',
                    'bucks_white',
                    'bucks_black',
                    'bucks_asian',
                    'bucks_latinx',
                    'bucks_all',
                  ],
                  [
                    'burlington_nonwht',
                    'burlington_white',
                    'burlington_black',
                    'burlington_asian',
                    'burlington_latinx',
                    'burlington_all',
                  ],
                  [
                    'camden_nonwht',
                    'camden_white',
                    'camden_black',
                    'camden_asian',
                    'camden_latinx',
                    'camden_all',
                  ],
                  [
                    'chester_nonwht',
                    'chester_white',
                    'chester_black',
                    'chester_asian',
                    'chester_latinx',
                    'chester_all',
                  ],
                  [
                    'delaware_nonwht',
                    'delaware_white',
                    'delaware_black',
                    'delaware_asian',
                    'delaware_latinx',
                    'delaware_all',
                  ],
                  [
                    'gloucester_nonwht',
                    'gloucester_white',
                    'gloucester_black',
                    'gloucester_asian',
                    'gloucester_latinx',
                    'gloucester_all',
                  ],
                  [
                    'mercer_nonwht',
                    'mercer_white',
                    'mercer_black',
                    'mercer_asian',
                    'mercer_latinx',
                    'mercer_all',
                  ],
                  [
                    'montgomery_nonwht',
                    'montgomery_white',
                    'montgomery_black',
                    'montgomery_asian',
                    'montgomery_latinx',
                    'montgomery_all',
                  ],
                  [
                    'philadelphia_nonwht',
                    'philadelphia_white',
                    'philadelphia_black',
                    'philadelphia_asian',
                    'philadelphia_latinx',
                    'philadelphia_all',
                  ],
                ],
                data: [
                  {
                    key: 'People of Color & Latinx',
                    columns: ['year', 'region_nonwht'],
                  },
                  {
                    key: 'White, non-Latinx',
                    columns: ['year', 'region_white'],
                  },
                  {
                    key: 'Black, non-Latinx',
                    columns: ['year', 'region_black'],
                    disabled: true,
                  },
                  {
                    key: 'Asian, non-Latinx',
                    columns: ['year', 'region_asian'],
                    disabled: true,
                  },
                  {
                    key: 'Latinx',
                    columns: ['year', 'region_latinx'],
                    disabled: true,
                  },
                  {
                    key: 'All',
                    columns: ['year', 'region_all'],
                    disabled: false,
                  },
                ],
              },
              {
                type: 'line',
                container: 'chart5',
                dataSource: ['sexInc_gap', 'sexInc_percofmale'],
                context: {
                    labels: ['Median Earnings Gap (2022 Dollars)', 'Median Earnings Gap Percentage'],
                    keepLabels: false,
                    units: ['dollars', 'percentC'],
                    keepUnits: false
                },
                columnOptions: [
                    ['Region'],
                    ['NJ Suburban Counties'],
                    ['PA Suburban Counties'],
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
                data: [
                    {
                        'key': 'Male to Female Gap',
                        columns: ['year', 'Region']
                    }
                ]
            },
            {
                type: 'line',
                container: 'chart6',
                dataSource: ['sexInc_median'],
                context: {
                    labels: ['Median Earnings Gap (2022 Dollars)'],
                    keepLabels: true,
                    units: ['dollars'],
                    keepUnits: true
                },
                columnOptions: [
                    ['Region_Female', 'Region_Male', 'Region_All'],
                    ['NJ_Suburban_Counties_Female', 'NJ_Suburban_Counties_Male', 'NJ_Suburban_Counties_All'],
                    ['PA_Suburban_Counties_Female', 'PA_Suburban_Counties_Male', 'PA_Suburban_Counties_All'],
                    ['Bucks_Female', 'Bucks_Male', 'Bucks_All'],
                    ['Burlington_Female', 'Burlington_Male', 'Burlington_All'],
                    ['Camden_Female', 'Camden_Male', 'Camden_All'],
                    ['Chester_Female', 'Chester_Male', 'Chester_All'],
                    ['Delaware_Female', 'Delaware_Male', 'Delaware_All'],
                    ['Gloucester_Female', 'Gloucester_Male', 'Gloucester_All'],
                    ['Mercer_Female', 'Mercer_Male', 'Mercer_All'],
                    ['Montgomery_Female', 'Montgomery_Male', 'Montgomery_All'],
                    ['Philadelphia_Female', 'Philadelphia_Male', 'Philadelphia_All']
                ],
                data: [
                    {
                        'key': 'Female',
                        columns: ['year', 'Region_Female']
                    },
                    {
                        'key': 'Male',
                        columns: ['year', 'Region_Male']
                    },
                    {
                        'key': 'All',
                        columns: ['year', 'Region_All']
                    }
                ]
            },
        ]
    },
    'Labor Force': {
        categories: ['econo','comm', 'equity'],
        trend: {
            status: 'good',
            text: {
                stat: '0-5% drop',
                text: `in participation rate gaps from base year`
            }
        },
        dataUrl: 'https://catalog.dvrpc.org/dataset/labor-force',
        d3: [
            {
                type: 'line',
                container: 'chart',
                dataSource: ['labForceBySex_gap'],
                context: {
                    labels: ['Percent Participation Gap'],
                    keepLabels: true,
                    units: ['percentC'],
                    keepUnits: true
                },
                columnOptions: [
                    ['Region'],
                    ['NJ_Suburban_Counties'],
                    ['PA_Suburban_Counties'],
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
                data: [
                    {
                        'key': 'Male to Female Gap',
                        columns: ['year', 'Region']
                    }
                ]
            },
            {
                type: 'line',
                container: 'chart2',
                dataSource: ['labForceBySex_percent'],
                context: {
                    labels: ['Percent Participation'],
                    keepLabels: true,
                    units: ['percentC'],
                    keepUnits: true
                },
                columnOptions: [
                    ['Region_Male', 'Region_Female', 'Region_All'],
                    ['NJ_Suburban_Counties_Male', 'NJ_Suburban_Counties_Female', 'NJ_Suburban_Counties_All'],
                    ['PA_Suburban_Counties_Male', 'PA_Suburban_Counties_Female', 'PA_Suburban_Counties_All'],
                    ['Bucks_Male', 'Bucks_Female', 'Bucks_All'],
                    ['Burlington_Male', 'Burlington_Female', 'Burlington_All'],
                    ['Camden_Male', 'Camden_Female', 'Camden_All'],
                    ['Chester_Male', 'Chester_Female', 'Chester_All'],
                    ['Delaware_Male', 'Delaware_Female', 'Delaware_All'],
                    ['Gloucester_Male', 'Gloucester_Female', 'Gloucester_All'],
                    ['Mercer_Male', 'Mercer_Female', 'Mercer_All'],
                    ['Montgomery_Male', 'Montgomery_Female', 'Montgomery_All'],
                    ['Philadelphia_Male', 'Philadelphia_Female', 'Philadelphia_All']
                ],
                data: [
                    {
                        'key': 'Male',
                        columns: ['year', 'Region_Male']
                    },
                    {
                        'key': 'Female',
                        columns: ['year', 'Region_Female']
                    },
                    {
                        'key': 'All',
                        columns: ['year', 'Region_All']
                    }
                ]
            },
            {
                type: 'line',
                container: 'chart3',
                dataSource: ['labForceByRace_gap'],
                context: {
                  labels: ['Percent Participation Gap'],
                  keepLabels: true,
                  units: ['percentC'],
                  keepUnits: true,
                },
                columnOptions: [
                  ['region_nonwht', 'region_black', 'region_asian', 'region_latinx'],
                  [
                    'nj_suburban_counties_nonwht',
                    'nj_suburban_counties_black',
                    'nj_suburban_counties_asian',
                    'nj_suburban_counties_latinx'
                  ],
                  [
                    'pa_suburban_counties_nonwht',
                    'pa_suburban_counties_black',
                    'pa_suburban_counties_asian',
                    'pa_suburban_counties_latinx'
                  ],
                  ['bucks_nonwht', 'bucks_black', 'bucks_asian', 'bucks_latinx'],
                  ['burlington_nonwht', 'burlington_black', 'burlington_asian', 'burlington_latinx'],
                  ['camden_nonwht', 'camden_black', 'camden_asian', 'camden_latinx'],
                  ['chester_nonwht', 'chester_black', 'chester_asian', 'chester_latinx'],
                  ['delaware_nonwht', 'delaware_black', 'delaware_asian', 'delaware_latinx'],
                  ['gloucester_nonwht', 'gloucester_black', 'gloucester_asian', 'gloucester_latinx'],
                  ['mercer_nonwht', 'mercer_black', 'mercer_asian', 'mercer_latinx'],
                  ['montgomery_nonwht', 'montgomery_black', 'montgomery_asian', 'montgomery_latinx'],
                  ['philadelphia_nonwht', 'philadelphia_black', 'philadelphia_asian', 'philadelphia_latinx'],
                ],
                data: [
                  {
                    key: 'People of Color',
                    columns: ['year', 'region_nonwht'],
                  },
                  {
                    key: 'Black, non-Latinx',
                    columns: ['year', 'region_black'],
                    disabled: true,
                  },
                  {
                    key: 'Asian, non-Latinx',
                    columns: ['year', 'region_asian'],
                    disabled: true,
                  },
                  {
                    key: 'Latinx',
                    columns: ['year', 'region_latinx'],
                    disabled: true,
                  },
                ],
              },
              {
                type: 'line',
                container: 'chart4',
                dataSource: ['labForceByRace'],
                context: {
                  labels: ['Percent Participation'],
                  keepLabels: true,
                  units: ['percentC'],
                  keepUnits: true,
                },
                columnOptions: [
                  ['region_nonwht', 'region_white', 'region_black', 'region_asian', 'region_latinx', 'region_all'],
                  [
                    'nj_suburban_counties_nonwht',
                    'nj_suburban_counties_white',
                    'nj_suburban_counties_black',
                    'nj_suburban_counties_asian',
                    'nj_suburban_counties_latinx',
                    'nj_suburban_counties_all'
                  ],
                  [
                    'pa_suburban_counties_nonwht',
                    'pa_suburban_counties_white',
                    'pa_suburban_counties_black',
                    'pa_suburban_counties_asian',
                    'pa_suburban_counties_latinx',
                    'pa_suburban_counties_all'
                  ],
                  ['bucks_nonwht', 'bucks_white', 'bucks_black', 'bucks_asian', 'bucks_latinx', 'bucks_all'],
                  [
                    'burlington_nonwht',
                    'burlington_white',
                    'burlington_black',
                    'burlington_asian',
                    'burlington_latinx',
                    'burlington_all'
                  ],
                  ['camden_nonwht', 'camden_white', 'camden_black', 'camden_asian', 'camden_latinx', 'camden_all'],
                  ['chester_nonwht', 'chester_white', 'chester_black', 'chester_asian', 'chester_latinx', 'chester_all'],
                  [
                    'delaware_nonwht',
                    'delaware_white',
                    'delaware_black',
                    'delaware_asian',
                    'delaware_latinx',
                    'delaware_all'
                  ],
                  [
                    'gloucester_nonwht',
                    'gloucester_white',
                    'gloucester_black',
                    'gloucester_asian',
                    'gloucester_latinx',
                    'gloucester_all'
                  ],
                  ['mercer_nonwht', 'mercer_white', 'mercer_black', 'mercer_asian', 'mercer_latinx', 'mercer_all'],
                  [
                    'montgomery_nonwht',
                    'montgomery_white',
                    'montgomery_black',
                    'montgomery_asian',
                    'montgomery_latinx',
                    'montgomery_all'
                  ],
                  [
                    'philadelphia_nonwht',
                    'philadelphia_white',
                    'philadelphia_black',
                    'philadelphia_asian',
                    'philadelphia_latinx',
                    'philadelphia_all'
                  ],
                ],
                data: [
                  {
                    key: 'People of Color & Latinx',
                    columns: ['year', 'region_nonwht'],
                  },
                  {
                    key: 'White, non-Latinx',
                    columns: ['year', 'region_white'],
                  },
                  {
                    key: 'Black, non-Latinx',
                    columns: ['year', 'region_black'],
                    disabled: true,
                  },
                  {
                    key: 'Asian, non-Latinx',
                    columns: ['year', 'region_asian'],
                    disabled: true,
                  },
                  {
                    key: 'Latinx',
                    columns: ['year', 'region_latinx'],
                    disabled: true,
                  },
                  {
                    key: 'All',
                    columns: ['year', 'region_all'],
                    disabled: false,
                  }
                ],
              },
        ]
    },
    'Congestion': {
        categories: ['transpo', 'econo', 'comm', 'sustain'],
        trend: {
            status: 'neutral',
            text: {
                stat: '1.5% less',
                text: `reliability on region's freeways during weekdays since 2011`
            }
        },
        dataUrl: 'https://catalog.dvrpc.org/dataset/traffic-reliability',
        d3: [
            {
                type: 'line',
                container: 'chart',
                dataSource: ['roadwayreliablilityTOD_Fwy', 'roadwayreliablilityTOD_Local'],
                context: {
                    labels: ['Planning Time Index'],
                    keepLabels: true,
                    units: ['singles'],
                    keepUnits: true
                },
                columnOptions: [
                    ['DVRPC24','PACos24','PASubCos24','NJCos24','Buc24','Burl24','Cam24','Ches24','Del24','Glo24','Mer24','Mont24','Phil24'],
                    ['DVRPCAM','PACosAM','PASubCosAM','NJCosAM','BucAM','BurlAM','CamAM','ChesAM','DelAM','GloAM','MerAM','MontAM','PhilAM'],
                    ['DVRPCMD','PACosMD','PASubCosMD','NJCosMD','BucMD','BurlMD','CamMD','ChesMD','DelMD','GloMD','MerMD','MontMD','PhilMD'],
                    ['DVRPCPM','PACosPM','PASubCosPM','NJCosPM','BucPM','BurlPM','CamPM','ChesPM','DelPM','GloPM','MerPM','MontPM','PhilPM'],
                    ['DVRPCNT','PACosNT','PASubCosNT','NJCosNT','BucNT','BurlNT','CamNT','ChesNT','DelNT','GloNT','MerNT','MontNT','PhilNT'],
               ],
                data: [
                    {
                        'key' : 'DVRPC Region',
                        'columns': ['Year', 'DVRPC24']
                    },
                    {
                        'key': 'All PA Counties',
                        'columns': ['Year', 'PACos24']
                    },
                    {
                        'key' : 'PA Suburban Counties',
                        'columns': ['Year', 'PASubCos24']
                    },
                    {
                        'key' : 'NJ Counties',
                        'columns': ['Year', 'NJCos24']
                    },
                    {
                        'key' : 'Bucks',
                        'columns': ['Year', 'Buc24']
                    },
                    {
                        'key' : 'Burlington',
                        'columns': ['Year', 'Burl24']
                    },
                    {
                        'key' : 'Camden',
                        'columns': ['Year', 'Cam24']
                    },
                    {
                        'key' : 'Chester',
                        'columns': ['Year', 'Ches24']
                    },
                    {
                        'key' : 'Delaware',
                        'columns': ['Year', 'Del24']
                    },
                    {
                        'key' : 'Gloucester',
                        'columns': ['Year', 'Glo24']
                    },
                    {
                        'key' : 'Mercer',
                        'columns': ['Year', 'Mer24']
                    },
                    {
                        'key' : 'Montgomery',
                        'columns': ['Year', 'Mont24']
                    },
                    {
                        'key' : 'Philadelphia',
                        'columns': ['Year', 'Phil24']
                    }
                ]
            },
            {
                type: 'line',
                container: 'chart2',
                dataSource: ['tttr'],
                context: {
                    labels: ['Truck Travel Time Reliability'],
                    keepLabels: true,
                    units: ['singles'],
                    keepUnits: true
                },
                columnOptions: [
                    ['DVRPCTTTR', 'NJTTTR','NJDVRPCCosTTTR','PATTTR','PADVRPCCosTTTR','BucTTTR','BurlTTTR','CamTTTR','ChesTTTR','DelTTTR','GloTTTR','MerTTTR','MontTTTR','PhiTTTRl'],
                ],
                data: [
                    {
                        'key': 'DVRPC Region',
                        columns: ['Year', 'DVRPCTTTR']
                    }, 
                    {
                        'key': 'New Jersey',
                        columns: ['Year', 'NJTTTR']
                    }, 
                    {
                        'key': 'New Jersey DVRPC Counties',
                        columns: ['Year', 'NJDVRPCCosTTTR']
                    }, 
                    {
                        'key': 'Pennsylvania',
                        columns: ['Year', 'PATTTR']
                    }, 
                    {
                        'key': 'Pennsylvania',
                        columns: ['Year', 'PATTTR']
                    }, 
                    {
                        'key': 'Bucks',
                        columns: ['Year', 'BucTTTR']
                    }, 
                    {
                        'key': 'Burlington',
                        columns: ['Year', 'BurlTTTR']
                    }, 
                    {
                        'key': 'Camden',
                        columns: ['Year', 'CamTTTR']
                    }, 
                    {
                        'key': 'Chester',
                        columns: ['Year', 'ChesTTTR']
                    }, 
                    {
                        'key': 'Delaware',
                        columns: ['Year', 'DelTTTR']
                    }, 
                    {
                        'key': 'Gloucester',
                        columns: ['Year', 'GloTTTR']
                    }, 
                    {
                        'key': 'Mercer',
                        columns: ['Year', 'MerTTTR']
                    }, 
                    {
                        'key': 'Montgomery',
                        columns: ['Year', 'MontTTTR']
                    }, 
                    {
                        'key': 'Philadelphia',
                        columns: ['Year', 'PhilTTTR']
                    }, 
                ]
            },
            {
                type: 'line',
                container: 'chart3',
                dataSource: ['reliability_1a', 'reliability_1b'],
                context: {
                    labels: ['Percent Reliability','Miles'],
                    units: ['percent', 'singles'],
                },
                columnOptions: [
                    ["Burl-Interstate","Cam-Interstate","Glo-Interstate","Mer-Interstate","Buc-Interstate","Ches-Interstate","Del-Interstate","Mont-Interstate","Phil-Interstate","NJDVRPCCos-Interstate","PADVRPCCos-Interstate","DVRPC-Interstate","NJ-Interstate","PA-Interstate"],
                    ["Burl-Non-Interstate","Cam-Non-Interstate","Glo-Non-Interstate","Mer-Non-Interstate","Buc-Non-Interstate","Ches-Non-Interstate","Del-Non-Interstate","Mont-Non-Interstate","Phil-Non-Interstate","NJDVRPCCos-Non-Interstate","PADVRPCCos-Non-Interstate","DVRPC-Non-Interstate","NJ-Non-Interstate","PA-Non-Interstate"]
                ],
                data: [
                    {
                        'key': 'Burlington',
                        columns: ['Year', 'Burl-Interstate']
                    },
                    {
                        'key': 'Camden',
                        columns: ['Year', 'Cam-Interstate']
                    },
                    {
                        'key': 'Gloucester',
                        columns: ['Year', 'Glo-Interstate']
                    },
                    {
                        'key': 'Mercer',
                        columns: ['Year', 'Mer-Interstate']
                    },
                    {
                        'key': 'Bucks',
                        columns: ['Year', 'Buc-Interstate']
                    },
                    {
                        'key': 'Chester',
                        columns: ['Year', 'Ches-Interstate']
                    },
                    {
                        'key': 'Delaware',
                        columns: ['Year', 'Del-Interstate']
                    },
                    {
                        'key': 'Montgomery',
                        columns: ['Year', 'Mont-Interstate']
                    },
                    {
                        'key': 'Philadelphia',
                        columns: ['Year', 'Phil-Interstate']
                    },
                    {
                        'key': 'New Jersey DVRPC Counties',
                        columns: ['Year', 'NJDVRPCCos-Interstate']
                    },
                    {
                        'key': 'Pennsylvania DVRPC Counties',
                        columns: ['Year', 'PADVRPCCos-Interstate']
                    },
                    {
                        'key': 'DVRPC Region',
                        columns: ['Year', 'DVRPC-Interstate']
                    },
                    {
                        'key': 'New Jersey',
                        columns: ['Year', 'NJ-Interstate']
                    },
                    {
                        'key': 'Pennsylvania',
                        columns: ['Year', 'PA-Interstate']
                    },
                ]
            },
            {
                type: 'line',
                container: 'chart4',
                dataSource: ['ahphed_1a', 'ahphed_1b'],
                context: {
                    labels: ['Annual Hours of Peak Hour Excessive Delay'],
                    keepLabels: true,
                    units: ['singles'],
                    keepUnits: true
                },
                columnOptions: [
                    ["DVRPC Region","Non-DVRPC Phila UZA","Philadelphia, PA-NJ-DE-MD","Trenton, NJ","Burlington","Camden","Gloucester","Mercer","Bucks","Chester","Delaware","Montgomery","Philadelphia"],
                    ["Philadelphia, PA-NJ-DE-MD","Trenton, NJ"],
                ],
                data: [
                    {
                        'key': 'DVRPC Region',
                        columns: ['Year', 'DVRPC Region']
                    },
                    {
                        'key': 'Non-DVRPC Phila UZA',
                        columns: ['Year', 'Non-DVRPC Phila UZA']
                    },
                    {
                        'key': 'Philadelphia, PA-NJ-DE-MD',
                        columns: ['Year', 'Philadelphia, PA-NJ-DE-MD']
                    },
                    {
                        'key': 'Trenton, NJ',
                        columns: ['Year', 'Trenton, NJ']
                    },
                    {
                        'key': 'Burlington',
                        columns: ['Year', 'Burlington']
                    },
                    {
                        'key': 'Camden',
                        columns: ['Year', 'Camden']
                    },
                    {
                        'key' : 'Chester',
                        'columns': ['Year', 'Chester']
                    },
                    {
                        'key' : 'Delaware',
                        'columns': ['Year', 'Delaware']
                    },
                    {
                        'key' : 'Gloucester',
                        'columns': ['Year', 'Gloucester']
                    },
                    {
                        'key' : 'Mercer',
                        'columns': ['Year', 'Mercer']
                    },
                    {
                        'key' : 'Montgomery',
                        'columns': ['Year', 'Montgomery']
                    },
                    {
                        'key' : 'Philadelphia',
                        'columns': ['Year', 'Philadelphia']
                    }
                ]
            },
            {
                type: ['stacked bar', 'line'],
                container: 'chart5',
                dataSource: ['ahphed_2a', 'ahphed_2b'],
                context: {
                    labels: ['Percent of Annual Hours of Peak Hour Excessive Delay', 'Annual Hours of Peak Hour Excessive Delay (Millions)'],
                    units: ['percent', 'singles'],
                },
                columnOptions: [
                    ["Mercer","Burlington"],
                    ["Mercer","Burlington"],
                ],
                data: [
                    {
                        'key' : 'Mercer',
                        'columns': ['Year', 'Mercer']
                    },
                    {
                        'key': 'Burlington',
                        columns: ['Year', 'Burlington']
                    },
                ]
            },
            {
                type: ['stacked bar', 'line'],
                container: 'chart6',
                dataSource: ['ahphed_3a', 'ahphed_3b'],
                context: {
                    labels: ['Percent of Annual Hours of Peak Hour Excessive Delay', 'Annual Hours of Peak Hour Excessive Delay (Millions)'],
                    units: ['percent', 'singles'],
                },
                columnOptions: [
                    ["Burlington","Camden","Gloucester","Bucks","Chester","Delaware","Montgomery","Philadelphia","Non-DVRPC Phila UZA"],
                    ["Pennsylvania","New Jersey","Delaware (state)","Maryland"]
                ],
                data: [
                    {
                        'key': 'Burlington',
                        columns: ['Year', 'Burlington']
                    },
                    {
                        'key': 'Camden',
                        columns: ['Year', 'Camden']
                    },
                    {
                        'key': 'Gloucester',
                        columns: ['Year', 'Gloucester']
                    },
                    {
                        'key': 'Bucks',
                        columns: ['Year', 'Bucks']
                    },
                    {
                        'key': 'Chester',
                        columns: ['Year', 'Chester']
                    },
                    {
                        'key': 'Delaware',
                        columns: ['Year', 'Delaware']
                    },
                    {
                        'key': 'Montgomery',
                        columns: ['Year', 'Montgomery']
                    },
                    {
                        'key': 'Philadelphia',
                        columns: ['Year', 'Philadelphia']
                    },
                    {
                        'key': 'Non-DVRPC Phila UZA',
                        columns: ['Year', 'Non-DVRPC Phila UZA']
                    },
                ]
            },
            {
                type: ['stacked bar', 'line'],
                container: 'chart7',
                dataSource: ['ahphed_4a', 'ahphed_4b'],
                context: {
                    labels: ['Percent of Annual Hours of Peak Hour Excessive Delay', 'Annual Hours of Peak Hour Excessive Delay (Millions)'],
                    units: ['percent', 'singles'],
                },
                columnOptions: [
                    ["Burlington","Camden","Gloucester","Bucks","Chester","Delaware","Montgomery","Philadelphia"],
                    ["Pennsylvania","New Jersey","Delaware (state)","Maryland"]
                ],
                data: [
                    {
                        'key': 'Burlington',
                        columns: ['Year', 'Burlington']
                    },
                    {
                        'key': 'Camden',
                        columns: ['Year', 'Camden']
                    },
                    {
                        'key': 'Bucks',
                        columns: ['Year', 'Bucks']
                    },
                    {
                        'key': 'Chester',
                        columns: ['Year', 'Chester']
                    },
                    {
                        'key': 'Delaware',
                        columns: ['Year', 'Delaware']
                    },
                    {
                        'key': 'Montgomery',
                        columns: ['Year', 'Montgomery']
                    },
                    {
                        'key': 'Philadelphia',
                        columns: ['Year', 'Philadelphia']
                    },
                ]
            },
        ]
    },
    'Gross Domestic Product': {
        categories: ['econo','resil'],
        trend: {
            status: 'neutral',
            text: {
                stat: '3.1% gain',
                text: `in economic growth since 2017`
            }
        },
        dataUrl: 'https://catalog.dvrpc.org/dataset/gross-domestic-product',
        d3: [
            {
                type: 'line',
                container: 'chart',
                dataSource: ['gdp_chart1a', 'gdp_chart1b', 'gdp_chart1c', 'gdp_chart1d'],
                context: {
                    labels: ['Annual Change Rate', 'Change Rate Since Base Year', 'Total GDP in Billions of Dollars (2022)', 'GDP per Capita (2022)'],
                    keepLabels: false,
                    units: ['percent', 'percent', 'dollars', 'dollars'],
                    keepUnits: false
                },
                columnOptions: [
                    [
                        'dvrpc_total',    'njcos_total',
                        'pasubcos_total', 'bucks_total',
                        'burl_total',     'camd_total',
                        'ches_total',     'del_total',
                        'glo_total',      'mer_total',
                        'mont_total',     'phil_total'
                    ],
                    [
                        'dvrpc_ag_for_fish_min',
                        'njcos_ag_for_fish_min',
                        'pasubcos_ag_for_fish_min',
                        'bucks_ag_for_fish_min',
                        'burl_ag_for_fish_min',
                        'camd_ag_for_fish_min',
                        'ches_ag_for_fish_min',
                        'del_ag_for_fish_min',
                        'glo_ag_for_fish_min',
                        'mer_ag_for_fish_min',
                        'mont_ag_for_fish_min',
                        'phil_ag_for_fish_min'
                    ],
                    [
                        'dvrpc_art_ent_rec_acc_food',
                        'njcos_art_ent_rec_acc_food',
                        'pasubcos_art_ent_rec_acc_food',
                        'bucks_art_ent_rec_acc_food',
                        'burl_art_ent_rec_acc_food',
                        'camd_art_ent_rec_acc_food',
                        'ches_art_ent_rec_acc_food',
                        'del_art_ent_rec_acc_food',
                        'glo_art_ent_rec_acc_food',
                        'mer_art_ent_rec_acc_food',
                        'mont_art_ent_rec_acc_food',
                        'phil_art_ent_rec_acc_food'
                    ],
                    [
                        'dvrpc_construction',
                        'njcos_construction',
                        'pasubcos_construction',
                        'bucks_construction',
                        'burl_construction',
                        'camd_construction',
                        'ches_construction',
                        'del_construction',
                        'glo_construction',
                        'mer_construction',
                        'mont_construction',
                        'phil_construction'
                    ],
                    [
                        'dvrpc_ed_services',
                        'njcos_ed_services',
                        'pasubcos_ed_services',
                        'bucks_ed_services',
                        'burl_ed_services',
                        'camd_ed_services',
                        'ches_ed_services',
                        'del_ed_services',
                        'glo_ed_services',
                        'mer_ed_services',
                        'mont_ed_services',
                        'phil_ed_services'
                    ],
                    [
                        'dvrpc_fin_insur_real_est',
                        'njcos_fin_insur_real_est',
                        'pasubcos_fin_insur_real_est',
                        'bucks_fin_insur_real_est',
                        'burl_fin_insur_real_est',
                        'camd_fin_insur_real_est',
                        'ches_fin_insur_real_est',
                        'del_fin_insur_real_est',
                        'glo_fin_insur_real_est',
                        'mer_fin_insur_real_est',
                        'mont_fin_insur_real_est',
                        'phil_fin_insur_real_est'
                    ],
                    [
                        'dvrpc_health_social_assist',
                        'njcos_health_social_assist',
                        'pasubcos_health_social_assist',
                        'bucks_health_social_assist',
                        'burl_health_social_assist',
                        'camd_health_social_assist',
                        'ches_health_social_assist',
                        'del_health_social_assist',
                        'glo_health_social_assist',
                        'mer_health_social_assist',
                        'mont_health_social_assist',
                        'phil_health_social_assist'
                    ],
                    [
                        'dvrpc_information',
                        'njcos_information',
                        'pasubcos_information',
                        'bucks_information',
                        'burl_information',
                        'camd_information',
                        'ches_information',
                        'del_information',
                        'glo_information',
                        'mer_information',
                        'mont_information',
                        'phil_information'
                    ],
                    [
                        'dvrpc_manufacturing',
                        'njcos_manufacturing',
                        'pasubcos_manufacturing',
                        'bucks_manufacturing',
                        'burl_manufacturing',
                        'camd_manufacturing',
                        'ches_manufacturing',
                        'del_manufacturing',
                        'glo_manufacturing',
                        'mer_manufacturing',
                        'mont_manufacturing',
                        'phil_manufacturing'
                    ],
                    [
                        'dvrpc_other_services',
                        'njcos_other_services',
                        'pasubcos_other_services',
                        'bucks_other_services',
                        'burl_other_services',
                        'camd_other_services',
                        'ches_other_services',
                        'del_other_services',
                        'glo_other_services',
                        'mer_other_services',
                        'mont_other_services',
                        'phil_other_services'
                    ],
                    [
                        'dvrpc_prof_services',
                        'njcos_prof_services',
                        'pasubcos_prof_services',
                        'bucks_prof_services',
                        'burl_prof_services',
                        'camd_prof_services',
                        'ches_prof_services',
                        'del_prof_services',
                        'glo_prof_services',
                        'mer_prof_services',
                        'mont_prof_services',
                        'phil_prof_services'
                    ],
                    [
                        'dvrpc_gov',    'njcos_gov',
                        'pasubcos_gov', 'bucks_gov',
                        'burl_gov',     'camd_gov',
                        'ches_gov',     'del_gov',
                        'glo_gov',      'mer_gov',
                        'mont_gov',     'phil_gov'
                    ],
                    [
                        'dvrpc_retail_trade',
                        'njcos_retail_trade',
                        'pasubcos_retail_trade',
                        'bucks_retail_trade',
                        'burl_retail_trade',
                        'camd_retail_trade',
                        'ches_retail_trade',
                        'del_retail_trade',
                        'glo_retail_trade',
                        'mer_retail_trade',
                        'mont_retail_trade',
                        'phil_retail_trade'
                    ],
                    [
                        'dvrpc_transp_warehouse_util',
                        'njcos_transp_warehouse_util',
                        'pasubcos_transp_warehouse_util',
                        'bucks_transp_warehouse_util',
                        'burl_transp_warehouse_util',
                        'camd_transp_warehouse_util',
                        'ches_transp_warehouse_util',
                        'del_transp_warehouse_util',
                        'glo_transp_warehouse_util',
                        'mer_transp_warehouse_util',
                        'mont_transp_warehouse_util',
                        'phil_transp_warehouse_util'
                    ],
                    [
                        'dvrpc_wholesale_trade',
                        'njcos_wholesale_trade',
                        'pasubcos_wholesale_trade',
                        'bucks_wholesale_trade',
                        'burl_wholesale_trade',
                        'camd_wholesale_trade',
                        'ches_wholesale_trade',
                        'del_wholesale_trade',
                        'glo_wholesale_trade',
                        'mer_wholesale_trade',
                        'mont_wholesale_trade',
                        'phil_wholesale_trade'
                    ],
                ],
                data: [
                    {
                        'key': 'DVRPC Region*',
                        columns: ['year', 'dvrpc_total'],
                    },
                    {
                        'key': 'NJ Counties*',
                        columns: ['year', 'njcos_total'],
                        disabled: true,
                    },
                    {
                        'key': 'PA Suburban Counties*',
                        columns: ['year', 'pasubcos_total'],
                        disabled: true,
                    },
                    {
                        'key': 'Bucks**',
                        columns: ['year', 'bucks_total'],
                        disabled: true,
                    },
                    {
                        'key': 'Burlington**',
                        columns: ['year', 'burl_total'],
                        disabled: true,
                    },
                    {
                        'key': 'Camden**',
                        columns: ['year', 'camd_total'],
                        disabled: true,
                    },
                    {
                        'key': 'Chester**',
                        columns: ['year', 'ches_total'],   
                        disabled: true,
                    },
                    {
                        'key': 'Delaware**',
                        columns: ['year', 'del_total'],
                        disabled: true,
                    },
                    {
                        'key': 'Gloucester**',
                        columns: ['year', 'glo_total'],
                        disabled: true,
                    },
                    {
                        'key': 'Mercer**',
                        columns: ['year', 'mer_total'],
                        disabled: true,
                    },
                    {
                        'key': 'Montgomery**',
                        columns: ['year', 'mont_total'],
                        disabled: true,
                    },
                    {
                        'key': 'Philadelphia**',
                        columns: ['year', 'phil_total'],
                        disabled: true,
                    },
                ]
            },
            {
          type: 'stacked bar',
          container: 'chart1',
          dataSource: ['gdp_chart2'],
          context: {
            labels: ['Percentage of GDP'],
            keepLabels: true,
            units: ['percent'],
            keepUnits: true,
          },
          columnOptions: [
            [
              'dvrpc_ag_for_fish_min',
              'dvrpc_art_ent_rec_acc_food',
              'dvrpc_construction',
              'dvrpc_ed_services',
              'dvrpc_fin_insur_real_est',
              'dvrpc_health_social_assist',
              'dvrpc_information',
              'dvrpc_manufacturing',
              'dvrpc_other_services',
              'dvrpc_prof_services',
              'dvrpc_gov',
              'dvrpc_retail_trade',
              'dvrpc_transp_warehouse_util',
              'dvrpc_wholesale_trade',
            ],
            [
              'njcos_ag_for_fish_min',
              'njcos_art_ent_rec_acc_food',
              'njcos_construction',
              'njcos_ed_services',
              'njcos_fin_insur_real_est',
              'njcos_health_social_assist',
              'njcos_information',
              'njcos_manufacturing',
              'njcos_other_services',
              'njcos_prof_services',
              'njcos_gov',
              'njcos_retail_trade',
              'njcos_transp_warehouse_util',
              'njcos_wholesale_trade',
            ],
            [
              'pasubcos_ag_for_fish_min',
              'pasubcos_art_ent_rec_acc_food',
              'pasubcos_construction',
              'pasubcos_ed_services',
              'pasubcos_fin_insur_real_est',
              'pasubcos_health_social_assist',
              'pasubcos_information',
              'pasubcos_manufacturing',
              'pasubcos_other_services',
              'pasubcos_prof_services',
              'pasubcos_gov',
              'pasubcos_retail_trade',
              'pasubcos_transp_warehouse_util',
              'pasubcos_wholesale_trade',
            ],
            [
              'bucks_ag_for_fish_min',
              'bucks_art_ent_rec_acc_food',
              'bucks_construction',
              'bucks_ed_services',
              'bucks_fin_insur_real_est',
              'bucks_health_social_assist',
              'bucks_information',
              'bucks_manufacturing',
              'bucks_other_services',
              'bucks_prof_services',
              'bucks_gov',
              'bucks_retail_trade',
              'bucks_transp_warehouse_util',
              'bucks_wholesale_trade',
            ],
            [
              'burl_ag_for_fish_min',
              'burl_art_ent_rec_acc_food',
              'burl_construction',
              'burl_ed_services',
              'burl_fin_insur_real_est',
              'burl_health_social_assist',
              'burl_information',
              'burl_manufacturing',
              'burl_other_services',
              'burl_prof_services',
              'burl_gov',
              'burl_retail_trade',
              'burl_transp_warehouse_util',
              'burl_wholesale_trade',
            ],
            [
              'camd_ag_for_fish_min',
              'camd_art_ent_rec_acc_food',
              'camd_construction',
              'camd_ed_services',
              'camd_fin_insur_real_est',
              'camd_health_social_assist',
              'camd_information',
              'camd_manufacturing',
              'camd_other_services',
              'camd_prof_services',
              'camd_gov',
              'camd_retail_trade',
              'camd_transp_warehouse_util',
              'camd_wholesale_trade',
            ],
            [
              'ches_ag_for_fish_min',
              'ches_art_ent_rec_acc_food',
              'ches_construction',
              'ches_ed_services',
              'ches_fin_insur_real_est',
              'ches_health_social_assist',
              'ches_information',
              'ches_manufacturing',
              'ches_other_services',
              'ches_prof_services',
              'ches_gov',
              'ches_retail_trade',
              'ches_transp_warehouse_util',
              'ches_wholesale_trade',
            ],
            [
              'glo_ag_for_fish_min',
              'glo_art_ent_rec_acc_food',
              'glo_construction',
              'glo_ed_services',
              'glo_fin_insur_real_est',
              'glo_health_social_assist',
              'glo_information',
              'glo_manufacturing',
              'glo_other_services',
              'glo_prof_services',
              'glo_gov',
              'glo_retail_trade',
              'glo_transp_warehouse_util',
              'glo_wholesale_trade',
            ],
            [
              'del_ag_for_fish_min',
              'del_art_ent_rec_acc_food',
              'del_construction',
              'del_ed_services',
              'del_fin_insur_real_est',
              'del_health_social_assist',
              'del_information',
              'del_manufacturing',
              'del_other_services',
              'del_prof_services',
              'del_gov',
              'del_retail_trade',
              'del_transp_warehouse_util',
              'del_wholesale_trade',
            ],
            [
              'mer_ag_for_fish_min',
              'mer_art_ent_rec_acc_food',
              'mer_construction',
              'mer_ed_services',
              'mer_fin_insur_real_est',
              'mer_health_social_assist',
              'mer_information',
              'mer_manufacturing',
              'mer_other_services',
              'mer_prof_services',
              'mer_gov',
              'mer_retail_trade',
              'mer_transp_warehouse_util',
              'mer_wholesale_trade',
            ],
            [
              'mont_ag_for_fish_min',
              'mont_art_ent_rec_acc_food',
              'mont_construction',
              'mont_ed_services',
              'mont_fin_insur_real_est',
              'mont_health_social_assist',
              'mont_information',
              'mont_manufacturing',
              'mont_other_services',
              'mont_prof_services',
              'mont_gov',
              'mont_retail_trade',
              'mont_transp_warehouse_util',
              'mont_wholesale_trade',
            ],
            [
              'phil_ag_for_fish_min',
              'phil_art_ent_rec_acc_food',
              'phil_construction',
              'phil_ed_services',
              'phil_fin_insur_real_est',
              'phil_health_social_assist',
              'phil_information',
              'phil_manufacturing',
              'phil_other_services',
              'phil_prof_services',
              'phil_gov',
              'phil_retail_trade',
              'phil_transp_warehouse_util',
              'phil_wholesale_trade',
            ],
          ],
          data: [
            {
              key: 'Agriculture, forestry, fishing, mining',
              columns: ['year', 'dvrpc_ag_for_fish_min'],
            },
            {
              key: 'Arts, entertain., rec., food, accommodations',
              columns: ['year', 'dvrpc_art_ent_rec_acc_food'],
            },
            {
              key: 'Construction',
              columns: ['year', 'dvrpc_construction'],
            },
            {
              key: 'Educational services',
              columns: ['year', 'dvrpc_ed_services'],
            },
            {
              key: 'Finance, insurance, real estate',
              columns: ['year', 'dvrpc_fin_insur_real_est'],
            },
            {
              key: 'Health care and social assistance',
              columns: ['year', 'dvrpc_health_social_assist'],
            },
            {
              key: 'Information',
              columns: ['year', 'dvrpc_information'],
            },
           {
              key: 'Manufacturing',
              columns: ['year', 'dvrpc_manufacturing'],
            },
            {
              key: 'Other services (except public admin)',
              columns: ['year', 'dvrpc_other_services'],
            },
            {
              key: 'Professional services, scientific, tech services',
              columns: ['year', 'dvrpc_prof_services'],
            },
            {
              key: 'Public administration',
              columns: ['year', 'dvrpc_gov'],
            },
            {
              key: 'Retail trade',
              columns: ['year', 'dvrpc_retail_trade'],
            },
            {
              key: 'Transportation, warehousing, utilities',
              columns: ['year', 'dvrpc_transp_warehouse_util'],
            },
            {
              key: 'Wholesale trade',
              columns: ['year', 'dvrpc_wholesale_trade'],
            },
          ],
        },
        {
          type: 'stacked bar',
          container: 'chart2',
          dataSource: ['gdp_chart3'],
          context: {
            labels: ['Percentage of Regional GDP'],
            units: ['percent'],
          },
          data: [
            {
              key: 'Bucks**',
              columns: ['year', 'bucks_share'],
            },
            {
              key: 'Burlington**',
              columns: ['year', 'burl_share'],
            },
            {
              key: 'Camden**',
              columns: ['year', 'camd_share'],
            },
            {
              key: 'Chester**',
              columns: ['year', 'ches_share'],
            },
            {
              key: 'Delaware**',
              columns: ['year', 'del_share'],
            },
            {
              key: 'Gloucester**',
              columns: ['year', 'glo_share'],
            },
            {
              key: 'Mercer**',
              columns: ['year', 'mer_share'],
            },
            {
              key: 'Montgomery**',
              columns: ['year', 'mont_share'],
            },
            {
              key: 'Philadelphia**',
              columns: ['year', 'phil_share'],
            },
          ],
        },
        ]
    },
    'Commute Mode': {
        categories: ['transpo', 'enviro', 'comm', 'sustain'],
        trend: {
            status: 'neutral',
            text: {
                stat: '11.2% fewer',
                text: `residents drive alone to work since 2006`,
            },
        },
        dataUrl: 'https://catalog.dvrpc.org/dataset/commute-mode',
        d3: [
            {
                type: 'line',
                container: 'chart',
                dataSource: ['ResNonSOV', 'WorkNonSOV'],
                context: {
                labels: ['Commute Mode Share'],
                keepLabels: true,
                units: ['percentC'],
                keepUnits: true,
                },
                columnOptions: [
                    ['dvrpcsov', 'dvrpcnonsov'],
                    ['njcossov', 'njcosnonsov'],
                    ['pasubsov', 'pasubnonsov'],
                    ['bucksov', 'bucknonsov'],
                    ['burlsov', 'burlnonsov'],
                    ['camdsov', 'camdnonsov'],
                    ['chessov', 'chesnonsov'],
                    ['delsov', 'delnonsov'],
                    ['glocsov', 'glocnonsov'],
                    ['mercsov', 'mercnonsov'],
                    ['montsov', 'montnonsov'],
                    ['philsov', 'philnonsov'],
                ],
                data: [
                    {
                        key: 'Drove Alone',
                        columns: ['year', 'dvrpcsov'],
                    },
                    {
                        key: 'Other Means',
                        columns: ['year', 'dvrpcnonsov'],
                    },
                ],
            },
            {
                type: 'line',
                container: 'chart2',
                dataSource: ['ResNonSOV_multi', 'WorkNonSOV_multi'],
                context: {
                labels: ['Commute Mode Share'],
                keepLabels: true,
                units: ['percentC'],
                keepUnits: true,
                },
                columnOptions: [
                    [
                        'dvrpcpool',
                        'dvrpctransit',
                        'dvrpcwalk',
                        'dvrpcbike',
                        'dvrpctmo',
                        'dvrpcwfh',
                        'dvrpcbus',
                        'dvrpcrail',
                        'dvrpcsubw',
                        'dvrpctroll',
                        'dvrpcferry',
                        'dvrpcmcyc',
                        'dvrpcother',
                        'dvrpctaxi',
                    ],
                    [
                        'njcospool',
                        'njcostransit',
                        'njcoswalk',
                        'njcosbike',
                        'njcostmo',
                        'njcoswfh',
                        'njcosbus',
                        'njcosrail',
                        'njcossubw',
                        'njcostroll',
                        'njcosferry',
                        'njcosmcyc',
                        'njcosother',
                        'njcostaxi',
                    ],
                    [
                        'pasubpool',
                        'pasubtransit',
                        'pasubwalk',
                        'pasubbike',
                        'pasubtmo',
                        'pasubwfh',
                        'pasubbus',
                        'pasubrail',
                        'pasubsubw',
                        'pasubtroll',
                        'pasubferry',
                        'pasubmcyc',
                        'pasubother',
                        'pasubtaxi',
                    ],
                    [
                        'buckpool',
                        'bucktransit',
                        'buckwalk',
                        'buckbike',
                        'bucktmo',
                        'buckwfh',
                        'buckbus',
                        'buckrail',
                        'bucksubw',
                        'bucktroll',
                        'buckferry',
                        'buckmcyc',
                        'buckother',
                        'bucktaxi',
                    ],
                    [
                        'burlpool',
                        'burltransit',
                        'burlwalk',
                        'burlbike',
                        'burltmo',
                        'burlwfh',
                        'burlbus',
                        'burlrail',
                        'burlsubw',
                        'burltroll',
                        'burlferry',
                        'burlmcyc',
                        'burlother',
                        'burltaxi',
                    ],
                    [
                        'camdpool',
                        'camdtransit',
                        'camdwalk',
                        'camdbike',
                        'camdtmo',
                        'camdwfh',
                        'camdbus',
                        'camdrail',
                        'camdsubw',
                        'camdtroll',
                        'camdferry',
                        'camdmcyc',
                        'camdother',
                        'camdtaxi',
                    ],
                    [
                        'chespool',
                        'chestransit',
                        'cheswalk',
                        'chesbike',
                        'chestmo',
                        'cheswfh',
                        'chesbus',
                        'chesrail',
                        'chessubw',
                        'chestroll',
                        'chesferry',
                        'chesmcyc',
                        'chesother',
                        'chestaxi',
                    ],
                    [
                        'delapool',
                        'delatransit',
                        'delawalk',
                        'delabike',
                        'delatmo',
                        'delawfh',
                        'delabus',
                        'delarail',
                        'delasubw',
                        'delatroll',
                        'delaferry',
                        'delamcyc',
                        'delaother',
                        'delataxi',
                    ],
                    [
                        'glocpool',
                        'gloctransit',
                        'glocwalk',
                        'glocbike',
                        'gloctmo',
                        'glocwfh',
                        'glocbus',
                        'glocrail',
                        'glocsubw',
                        'gloctroll',
                        'glocferry',
                        'glocmcyc',
                        'glocother',
                        'gloctaxi',
                    ],
                    [
                        'mercpool',
                        'merctransit',
                        'mercwalk',
                        'mercbike',
                        'merctmo',
                        'mercwfh',
                        'mercbus',
                        'mercrail',
                        'mercsubw',
                        'merctroll',
                        'mercferry',
                        'mercmcyc',
                        'mercother',
                        'merctaxi',
                    ],
                    [
                        'montpool',
                        'monttransit',
                        'montwalk',
                        'montbike',
                        'monttmo',
                        'montwfh',
                        'montbus',
                        'montrail',
                        'montsubw',
                        'monttroll',
                        'montferry',
                        'montmcyc',
                        'montother',
                        'monttaxi',
                    ],
                    [
                        'philpool',
                        'philtransit',
                        'philwalk',
                        'philbike',
                        'philtmo',
                        'philwfh',
                        'philbus',
                        'philrail',
                        'philsubw',
                        'philtroll',
                        'philferry',
                        'philmcyc',
                        'philother',
                        'philtaxi',
                    ],
                ],
                data: [
                    { key: 'Carpool', columns: ['year', 'dvrpcpool'] },
                    { key: 'Public Transit', columns: ['year', 'dvrpctransit'] },
                    { key: 'Walked', columns: ['year', 'dvrpcwalk'] },
                    { key: 'Biked', columns: ['year', 'dvrpcbike'] },
                    { key: 'Taxi, Motorcycle or Other', columns: ['year', 'dvrpctmo'] },
                    { key: 'Worked from Home', columns: ['year', 'dvrpcwfh'] },
                    { key: 'Bus', columns: ['year', 'dvrpcbus'], disabled: true },
                    { key: 'Rail', columns: ['year', 'dvrpcrail'], disabled: true },
                    { key: 'Subway', columns: ['year', 'dvrpcsubw'], disabled: true },
                    {
                        key: 'Trolley or Light Rail',
                        columns: ['year', 'dvrpctroll'],
                        disabled: true,
                    },
                    {
                        key: 'Ferryboat',
                        columns: ['year', 'dvrpcferry'],
                        disabled: true,
                    },
                    {
                        key: 'Motorcycle',
                        columns: ['year', 'dvrpcmcyc'],
                        disabled: true,
                    },
                    {
                        key: 'Other Means',
                        columns: ['year', 'dvrpcother'],
                        disabled: true,
                    },
                    { key: 'Taxi', columns: ['year', 'dvrpctaxi'], disabled: true },
                ]
            }
        ]
    },
    'Transit Ridership': {
        categories: ['transpo','comm','enviro','sustain'],
        trend: {
            status: 'bad',
            text: {
                stat: '44% decrease',
                text: `in transit trips per person since 2019`
            }
        },
        dataUrl: 'https://catalog.dvrpc.org/dataset/transit-ridership-ntd',
        d3: [
            {
                keepLabels: true,
                keepUnits: true, 
                type: 'line',
                container: 'chart',
                dataSource: ['transit_ridership_graph_2'],
                context: {
                    labels: ['Trips (Thousands)', 'Trips Per Capita', 'Trips Per Vehicle Revenue Hour', 'Trips Per Vehicle Revenue Mile'],
                    units: ['thousands'],
                },
                columnOptions: [
                    ['bus', 'commuter_rail', 'light_rail', 'nonscheduled_services', 'subway', 'trolleybus', 'all'],
                    ['busper_capita', 'commuter_railper_capita', 'light_railper_capita', 'nonscheduled_servicesper_capita', 'subwayper_capita', 'trolleybusper_capita', 'allper_capita'],
                    ['busper_vrh', 'commuter_railper_vrh', 'light_railper_vrh', 'nonscheduled_servicesper_vrh', 'subwayper_vrh', 'trolleybusper_vrh', 'allper_vrh'],
                    ['busper_vrm', 'commuter_railper_vrm', 'light_railper_vrm', 'nonscheduled_servicesper_vrm', 'subwayper_vrm', 'trolleybusper_vrm', 'allper_vrm']
                ],
                data: [
                    {
                        'key': 'Bus',
                        columns: ['year', 'bus'],
                    },
                    {
                        'key': 'Commuter Rail',
                        columns: ['year', 'commuter_rail']
                    },
                    {
                        'key': 'Light Rail',
                        columns: ['year', 'light_rail']
                    },
                    {
                        'key': 'Non-Scheduled Services',
                        columns: ['year', 'nonscheduled_services']
                    },
                    {
                        'key': 'Subway',
                        columns: ['year', 'subway']
                    },
                    {
                        'key': 'Trolleybus',
                        columns: ['year', 'trolleybus']
                    },
                    {
                        'key': 'All',
                        columns: ['year', 'all']
                    }
                ]
            },
            {
                keepLabels: true,
                keepUnits: true, 
                type: 'line',
                container: 'chart2',
                dataSource: ['transit_ridership_graph_3'],
                context: {
                    labels: ['Trips (Thousands)', 'Trips Per Capita', 'Trips Per Vehicle Revenue Hour', 'Trips Per Vehicle Revenue Mile'],
                    units: ['thousands'],
                },
                columnOptions: [
                    ['new_jersey_transit', 'patco', 'pottstown_area_rapid_transit', 'septa', 'all'],
                    ['new_jersey_transitper_capita', 'patcoper_capita', 'pottstown_area_rapid_transitper_capita', 'septaper_capita', 'allper_capita'],
                    ['new_jersey_transitper_vrh', 'patcoper_vrh', 'pottstown_area_rapid_transitper_vrh', 'septaper_vrh', 'allper_vrh'],
                    ['new_jersey_transitper_vrm', 'patcoper_vrm', 'pottstown_area_rapid_transitper_vrm', 'septaper_vrm', 'allper_vrm'],
                ],
                data: [
                    {
                        'key': 'New Jersey Transit',
                        columns: ['year', 'new_jersey_transit']
                    },
                    {
                        'key': 'PATCO',
                        columns: ['year', 'patco']
                    },
                    {
                        'key': 'Pottstown Area Rapid Transit',
                        columns: ['year', 'pottstown_area_rapid_transit']
                    },
                    {
                        'key': 'SEPTA',
                        columns: ['year', 'septa']
                    },
                    {
                        'key': 'All',
                        columns: ['year', 'all']
                    }
                ]
            }
        ]
    },
    'Greenhouse Gas Emissions': {
        categories: ['enviro','comm', 'sustain', 'resil'],
        trend: {
            status: 'good',
            text: {
                stat: '21% reduction',
                text: `in greenhouse gas emissions since 2005`
            }
        },
        dataUrl: 'https://catalog.dvrpc.org/dataset/greenhouse-gas-emissions',
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
                        'key': 'DVRPC Region',
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
                    units: ['singles']
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
                    labels: ['Degrees Farenheit', 'Precipitation (inches)', 'Percentage of Precipitation from Severe Storms'],
                    keepLabels: false,
                    units: ['thousands', 'thousands', 'percentC'],
                    keepUnits: false,
                },
                columnOptions: [
                    ['Average Annual Temperature', '30 year trend - Temperature'],
                    ['Annual Precipitation', '30 year trend - Precipitation'],
                    ['Precipitation from Severe Storms', '30 year trend - Precipitation from Severe Storms']
                ],
                data: [
                    {
                        'key': 'Average Annual Temperature',
                        columns: ['year', 'Average Annual Temperature'],
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
        categories: ['transpo', 'resil'],
        trend: {
            status: 'neutral',
            text: {
                stat: '20.6% increase',
                text: `of revenue service vehicles past their useful life benchmark in 2022`
            }
        },
        dataUrl: 'https://catalog.dvrpc.org/dataset/transit-conditions',
        d3: [
            {
                type: 'line',
                container: 'chart',
                dataSource: ['transit_conditions_graph_1a', 'transit_conditions_graph_1b'],
                context: {
                    labels: ['Number of Revenue Vehicles Past their ULB', 'Percent of Revenue Vehicles Past their ULB'],
                    keepLabels: false,
                    units: ['hundreds', 'percentC'],
                    keepUnits:  false
                },
                columnOptions: [
                    ['all_all_graphed_modes','njt_all_graphed_modes','patco_all_graphed_modes','septa_all_graphed_modes'],
                    ['all_artic_bus','njt_artic_bus','patco_artic_bus','septa_artic_bus'],
                    ['all_automobile','njt_automobile','patco_automobile','septa_automobile'],
                    ['all_bus','njt_bus','patco_bus','septa_bus'],
                    ['all_comm_rail_locomotive','njt_comm_rail_locomotive','patco_comm_rail_locomotive','septa_comm_rail_locomotive'],
                    ['all_comm_rail_pass_coach','njt_comm_rail_pass_coach','patco_comm_rail_pass_coach','septa_comm_rail_pass_coach'],
                    ['all_comm_rail_sp_pass_car','njt_comm_rail_sp_pass_car','patco_comm_rail_sp_pass_car','septa_comm_rail_sp_pass_car'],
                    ['all_cutaway','njt_cutaway','patco_cutaway','septa_cutaway'],
                    ['all_hr_pass_car','njt_hr_pass_car','patco_hr_pass_car','septa_hr_pass_car'],
                    ['all_light_rail_veh','njt_light_rail_veh','patco_light_rail_veh','septa_light_rail_veh'],
                    ['all_minivan','njt_minivan','patco_minivan','septa_minivan'],
                    ['all_otr_bus','njt_otr_bus','patco_otr_bus','septa_otr_bus'],
                    ['all_trolleybus','njt_trolleybus','patco_trolleybus','septa_trolleybus'],
                    ['all_van','njt_van','patco_van','septa_van'],
                    ['all_vintage_trolley_sc','njt_vintage_trolley_sc','patco_vintage_trolley_sc','septa_vintage_trolley_sc'],
                ],
                data: [
                    {
                        'key': 'All Agencies',
                        columns: ['year', 'all_all_graphed_modes']
                    },
                    {
                        'key': 'New Jersey Transit',
                        columns: ['year', 'njt_all_graphed_modes']
                    },
                    {
                        'key': 'PATCO',
                        columns: ['year', 'patco_all_graphed_modes']
                    },
                    {
                        'key': 'SEPTA',
                        columns: ['year', 'septa_all_graphed_modes']
                    },
                ]
            },
            {
                type: 'line',
                container: 'chart2',
                dataSource: ['transit_conditions_graph_2a', 'transit_conditions_graph_2b'],
                context: {
                    labels: ['Number of Support Vehicles Past their ULB', 'Percent of Support Vehicles Past their ULB'],
                    keepLabels: false,
                    units: ['hundreds', 'percentC'],
                    keepUnits:  false
                },
                columnOptions: [
                    ['all_all_graphed_svs','njt_all_graphed_svs','patco_all_graphed_svs','septa_all_graphed_svs'],
                    ['all_automobiles','njt_automobiles','patco_automobiles','septa_automobiles'],
                    ['all_trucks_and_ort_veh','njt_trucks_and_ort_veh','patco_trucks_and_ort_veh','septa_trucks_and_ort_veh'],
                    ['all_st_wh_veh','njt_st_wh_veh','patco_st_wh_veh','septa_st_wh_veh']
                ],
                data: [
                    {
                        'key': 'All Agencies',
                        columns: ['year', 'all_all_graphed_svs']
                    },
                    {
                        'key': 'New Jersey Transit',
                        columns: ['year', 'njt_all_graphed_svs']
                    },
                    {
                        'key': 'PATCO',
                        columns: ['year', 'patco_all_graphed_svs']
                    },
                    {
                        'key': 'SEPTA',
                        columns: ['year', 'septa_all_graphed_svs']
                    },
                ]
            },
            {
                type: 'line',
                container: 'chart3',
                dataSource: ['transit_conditions_graph_3a', 'transit_conditions_graph_3b'],
                range: [0,1],
                context: {
                    labels: ['Vehicles in Deficient Condition', 'Percent in Deficient Condition'],
                    units: ['hundreds', 'percentC'],
                    keepUnits: false,
                    keepLabels: false
                },
                columnOptions: [
                    ['all_all', 'all_passenger', 'all_admin'],
                    ['septa_all','septa_passenger', 'septa_admin'],
                    ['njt_all','njt_passenger', 'njt_admin'],
                    ['patco_all','patco_passenger', 'patco_admin'],
                    ['part_all', 'part_passenger', 'part_admin'],
                ],
                data: [
                    {
                        'key': 'All', 
                        columns: ['year', 'all_all']
                    },
                    {
                        'key': 'Passenger', 
                        columns: ['year', 'all_passenger']
                    },
                    {
                        'key': 'Administrative', 
                        columns: ['year', 'all_admin']
                    },
                ]
            },
            {
                type: 'line',
                container: 'chart4',
                dataSource: ['transit_conditions_graph_4a','transit_conditions_graph_4b'],
                context: {
                    labels: ['Miles of Rail Track with Performance Restrictions', 'Percent of Rail Track with Performance Restrictions'],
                    keepLabels: false,
                    units: ['singles', 'percentC'],
                    keepUnits: false 
                },
                columnOptions: [
                    ['all_hybrid_rail', 'all_commuter_rail', 'all_heavy_rail', 'all_streetcar'],
                    ['septa_hybrid_rail', 'septa_commuter_rail', 'septa_heavy_rail', 'septa_streetcar'],
                    ['njt_hybrid_rail', 'njt_commuter_rail', 'njt_heavy_rail', 'njt_streetcar'],
                    ['patco_hybrid_rail', 'patco_commuter_rail', 'patco_heavy_rail', 'patco_streetcar'],
                ],
                data: [
                    {
                        'key': 'Hybrid Rail', 
                        columns: ['year', 'all_hybrid_rail']
                    },
                    {
                        'key': 'Commuter Rail', 
                        columns: ['year', 'all_commuter_rail']
                    },
                    {
                        'key': 'Heavy Rail',  
                        columns: ['year', 'all_heavy_rail']
                    },
                    {
                        'key': 'Streetcar Rail',  
                        columns: ['year', 'all_streetcar']
                    },
                ]
            }
        ]
    },
    'Business Formations': {
        categories: ['econo', 'resil'],
        trend: {
            status: 'awesome',
            text: {
                stat: '80% growth',
                text: `in business formations since 2005`
            }
        },
        dataUrl: 'https://catalog.dvrpc.org/dataset/business-formations',
        d3: [
            {
                type: 'line and bar',
                container: 'chart',
                context: {
                    labels: ['Annual Business Formations', 'Percent Difference from Base Year'],
                    units: ['thousands', 'percentC'],
                },
                xAxisRange: [2005, 2021], 
                dataSource: ['business_formations_1a', 'business_formations_1b'],
                columnOptions: [
                    ['dvrpc', 'dvrpc_5yr'], 
                    ['njco', 'njco_5yr'],
                    ['pasub', 'pasub_5yr'],
                    ['bucks', 'bucks_5yr'],
                    ['burlington', 'burlington_5yr'],
                    ['camden', 'camden_5yr'],
                    ['chester', 'chester_5yr'],
                    ['delaware', 'delaware_5yr'],
                    ['gloucester', 'gloucester_5yr'],
                    ['mercer', 'mercer_5yr'],
                    ['montgomery', 'montgomery_5yr'],
                    ['philadelphia', 'philadelphia_5yr'],
                ], 
                data: [
                    {
                        'key': 'Annual Business Formations', 
                        columns: ['year', 'dvrpc'], 
                        type: 'bar', 
                        yAxis: 1, 
                        bar: true
                    },
                    {
                        'key': '5-year average', 
                        columns: ['year', 'dvrpc_5yr'],
                        type: 'line',
                        yAxis: 1
                    }, 
                ]
            }
        ]
    },
    'Population Growth': {
        categories: ['comm','econo','enviro'],
        trend: {
            status: 'good',
            text: {
                stat: '6.5% increase',
                text: `in population since 2000`
            }
        },
        dataUrl: 'https://catalog.dvrpc.org/dataset/population-estimates',
        d3: [
            {
                type: 'line',
                container: 'chart',
                dataSource: ['popGrowth'],
                context: {
                    labels: ['Change in Population', 'Total Population (Thousands)', 'Percent Change in Population'],
                    units: ['thousands', 'thousandsC', 'percentC']
                },
                columnOptions: [
                    ['DVRPC-count','NJCnt-count','PASub-count','Core-count','DevCom-count','GroSub-count','Rural-count','Bucks-count','Burlington-count','Camden-count','Chester-count','Delaware-count','Gloucester-count','Mercer-count','Montgomery-count','Philadelphia-count'],
                    ['DVRPC','NJCnt','PASub','Core','DevCom','GroSub','Rural','Bucks','Burlington','Camden','Chester','Delaware','Gloucester','Mercer','Montgomery','Philadelphia'],
                    ['DVRPC-perc','NJCnt-perc','PASub-perc','Core-perc','DevCom-perc','GroSub-perc','Rural-perc','Bucks-perc','Burlington-perc','Camden-perc','Chester-perc','Delaware-perc','Gloucester-perc','Mercer-perc','Montgomery-perc','Philadelphia-perc',]
                ],
                data: [
                    {
                        'key': 'DVRPC Region*',
                        columns: ['Year', 'DVRPC-count']
                    },
                    {
                        'key': 'NJ Counties*',
                        disabled: true,
                        columns: ['Year', 'NJCnt-count']
                    },
                    {
                        'key': 'PA Suburban Counties*',
                        disabled: true,
                        columns: ['Year', 'PASub-count']
                    },
                    {
                        'key': 'Core Cities^',
                        disabled: true,
                        columns: ['Year', 'Core-count']
                    },
                    {
                        'key': 'Developed Communities^',
                        disabled: true,
                        columns: ['Year', 'DevCom-count']
                    },
                    {
                        'key': 'Growing Suburbs^',
                        disabled: true,
                        columns: ['Year', 'GroSub-count']
                    },
                    {
                        'key': 'Rural Areas^',
                        disabled: true,
                        columns: ['Year', 'Rural-count']
                    },
                    {
                        'key': 'Bucks**',
                        disabled: true,
                        columns: ['Year', 'Bucks-count']
                    },
                    {
                        'key': 'Burlington**',
                        disabled: true,
                        columns: ['Year', 'Burlington-count']
                    },
                    {
                        'key': 'Camden**',
                        disabled: true,
                        columns: ['Year', 'Camden-count']
                    },
                    {
                        'key': 'Chester**',
                        disabled: true,
                        columns: ['Year', 'Chester-count']
                    },
                    {
                        'key': 'Delaware**',
                        disabled: true,
                        columns: ['Year', 'Delaware-count']
                    },
                    {
                        'key': 'Gloucester**',
                        disabled: true,
                        columns: ['Year', 'Gloucester-count']
                    },
                    {
                        'key': 'Mercer**',
                        disabled: true,
                        columns: ['Year', 'Mercer-count']
                    },
                    {
                        'key': 'Montgomery**',
                        disabled: true,
                        columns: ['Year', 'Montgomery-count']
                    },
                    {
                        'key': 'Philadelphia**',
                        disabled: true,
                        columns: ['Year', 'Philadelphia-count']
                    }
                ]
            },
            {
                type: 'waterfall',
                container: 'chart2',
                dataSource: ['pop_comp_change', 'pop_comp_natincrease', 'pop_comp_netmigration'],
                context: {
                    labels: ['Change in Population'],
                    units: ['thousands']
                },
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
                        columns: ['Bucks']
                    }
                ]
            },
            {
                type: 'line',
                container: 'chart3',
                dataSource: ['pop_age_change','pop_age_totals'],
                context: {
                    labels: ['Change in Population', 'Total Population (Thousands)'],
                    units: ['thousands', 'thousandsC']
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
                    units: ['thousands', 'thousandsC'],
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
                    units: ['thousands', 'thousandsC'],
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
        ]
    },
    'Bridge Conditions': {
        categories: ['transpo', 'resil'],
        trend: {
            status: 'awesome',
            text: {
                stat: '62% drop',
                text: `in bridge deck area rated deficient since a 2003 peak of 18%`
            }
        },
        dataUrl: 'https://catalog.dvrpc.org/dataset/bridge-conditions',
        d3: [
            {
                type: 'line',
                container: 'chart',
                dataSource: ['Bridge_Conditions_1B','Bridge_Conditions_1A'],
                context: {
                    labels: ['Percentage of Deck Area', 'Percentage of Bridges'],
                    keepLabels: false,
                    units: ['percentC'],
                    keepUnits: true
                },
                columnOptions: [
                    ['DVRPC- All','DVRPC- State', 'DVRPC- Local', 'DVRPC- Other'],
                    ['New Jersey Suburbs- All','New Jersey Suburbs- State', 'New Jersey Suburbs- Local', 'New Jersey Suburbs- Other'],
                    ['Pennsylvania All Counties- All','Pennsylvania All Counties- State', 'Pennsylvania All Counties- Local', 'Pennsylvania All Counties- Other'],
                    ['Pennsylvania Suburbs- All','Pennsylvania Suburbs- State', 'Pennsylvania Suburbs- Local', 'Pennsylvania Suburbs- Other'],
                    ['Bucks- All','Bucks- State', 'Bucks- Local', 'Bucks- Other'],
                    ['Burlington- All','Burlington- State', 'Burlington- Local', 'Burlington- Other'],
                    ['Camden- All','Camden- State', 'Camden- Local', 'Camden- Other'],
                    ['Chester- All','Chester- State', 'Chester- Local', 'Chester- Other'],
                    ['Delaware- All','Delaware- State', 'Delaware- Local', 'Delaware- Other'],
                    ['Gloucester- All','Gloucester- State', 'Gloucester- Local', 'Gloucester- Other'],
                    ['Mercer- All','Mercer- State', 'Mercer- Local', 'Mercer- Other'],
                    ['Montgomery- All','Montgomery- State', 'Montgomery- Local', 'Montgomery- Other'],
                    ['Philadelphia- All','Philadelphia- State', 'Philadelphia- Local', 'Philadelphia- Other']
                ],
                data: [
                    {
                        'key': 'All',
                        columns: ['year', 'DVRPC- All']
                    },
                    {
                        'key': 'State',
                        disabled: true,
                        columns: ['year', 'DVRPC- State']
                    },
                    {
                        'key': 'Local',
                        disabled: true,
                        columns: ['year', 'DVRPC- Local']
                    },
                    {
                        'key': 'Other',
                        disabled: true,
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
                    units: ['thousands'],
                    keepUnits: true
                },
                columnOptions: [
                    ['DVRPC- State', 'DVRPC- Local', 'DVRPC- Other'],
                    ['New Jersey Suburbs- State', 'New Jersey Suburbs- Local', 'New Jersey Suburbs- Other'],
                    ['Pennsylvania All Counties- State', 'Pennsylvania All Counties- Local', 'Pennsylvania All Counties- Other'],
                    ['Pennsylvania Suburbs- State', 'Pennsylvania Suburbs- Local', 'Pennsylvania Suburbs- Other'],
                    ['Bucks- State', 'Bucks- Local', 'Bucks- Other'],
                    ['Burlington- State', 'Burlington- Local', 'Burlington- Other'],
                    ['Camden- State', 'Camden- Local', 'Camden- Other'],
                    ['Chester- State', 'Chester- Local', 'Chester- Other'],
                    ['Delaware- State', 'Delaware- Local', 'Delaware- Other'],
                    ['Gloucester- State', 'Gloucester- Local', 'Gloucester- Other'],
                    ['Mercer- State', 'Mercer- Local', 'Mercer- Other'],
                    ['Montgomery- State', 'Montgomery- Local', 'Montgomery- Other'],
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
                    units: ['thousands'],
                    keepUnits: true
                },
                columnOptions: [
                    ['DVRPC- Poor','DVRPC- Fair','DVRPC- Good'],
                    ['New Jersey Suburbs- Poor','New Jersey Suburbs- Fair','New Jersey Suburbs- Good'],
                    ['Pennsylvania All Counties- Poor','Pennsylvania All Counties- Fair','Pennsylvania All Counties- Good'],
                    ['Pennsylvania Suburbs- Poor','Pennsylvania Suburbs- Fair','Pennsylvania Suburbs- Good'],
                    ['Bucks- Poor','Bucks- Fair','Bucks- Good'],
                    ['Burlington- Poor','Burlington- Fair','Burlington- Good'],
                    ['Camden- Poor','Camden- Fair','Camden- Good'],
                    ['Chester- Poor','Chester- Fair','Chester- Good'],
                    ['Delaware- Poor','Delaware- Fair','Delaware- Good'],
                    ['Gloucester- Poor','Gloucester- Fair','Gloucester- Good'],
                    ['Mercer- Poor','Mercer- Fair','Mercer- Good'],
                    ['Montgomery- Poor','Montgomery- Fair','Montgomery- Good'],
                    ['Philadelphia- Poor','Philadelphia- Fair','Philadelphia- Good']
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
        ]
    },
    'Water Quality': {
        categories: ['enviro','sustain'],
        trend: {
            status: 'not-great',
            text: {
                stat: '8.7% decrease',
                text: `in water supporting aquatic life since 2006`
            }
        },
        dataUrl: 'https://catalog.dvrpc.org/dataset/water-quality',
        d3: [
            {
                type: 'line',
                container: 'chart',
                dataSource: ['water_quality_1'],
                context: {
                    labels: ['Percentage Attaining Quality Standards for Designated Uses'],
                    units: ['percentC']
                },
                data: [
                    {
                        'key': 'Regional Average',
                        columns: ['Year', 'Average']
                    },
                    {
                        'key': 'Pennsylvania Counties (miles)',
                        columns: ['Year', 'Pennsylvania']
                    },
                    {
                        'key': 'New Jersey Counties (acres)',
                        columns: ['Year', 'New Jersey']
                    }
                ]
            },
            {
                type: 'stacked bar',
                container: 'chart2',
                dataSource: ['water_quality_3'],
                context: {
                    labels: ['Subwatershed Acres (Thousands)'],
                    units: ['thousands']
                },
                data: [
                    {
                        'key': 'Attaining',
                        columns: ['year', 'Attaining']
                    },
                    {
                        'key': 'Insufficient Data',
                        columns: ['year', 'Insufficient Data']
                    },
                    {
                        'key': 'Impaired',
                        columns: ['year', 'Impaired']
                    }
                ]
            },
            {
                type: 'stacked bar',
                container: 'chart3',
                dataSource: ['water_quality_2'],
                context: {
                    labels: ['Stream Miles'],
                    units: ['thousands']
                },
                data: [
                    {
                        'key': 'Attaining',
                        columns: ['year', 'Attaining']
                    },
                    {
                        'key': 'Insufficient Data',
                        columns: ['year', 'Insufficient Data']
                    },
                    {
                        'key': 'Impaired',
                        columns: ['year', 'Impaired']
                    }
                ]
            }
        ]
    },
    'Land Consumption': {
        categories: ['enviro', 'comm', 'sustain', 'resil'],
        trend: {
            status: 'good',
            text: {
                stat: '62% drop',
                text: `in land consumption rate from 2005-2015 compared to 1990-2005`
            }
        },
        dataUrl: 'https://catalog.dvrpc.org/dataset/land-consumption',
        d3: [
            {
                type: 'line',
                container: 'chart',
                dataSource: ['land_consumption_1a','land_consumption_1b'],
                context: {
                    labels: ['Acres (Thousands)', 'Acres Per Capita'],
                    units: ['thousands', 'singles'],
                },
                columnOptions: [
                    ['Developed - DVRPC','Developed - New Jersey Suburbs','Developed - Pennsylvania Suburbs','Developed - Core City','Developed - Developed Community','Developed - Growing Suburb','Developed - Rural Area','Developed - Bucks','Developed - Burlington','Developed - Camden','Developed - Chester','Developed - Delaware','Developed - Gloucester','Developed - Mercer','Developed - Montgomery','Developed - Philadelphia'],
                    ['Agricultural - DVRPC','Agricultural - New Jersey Suburbs','Agricultural - Pennsylvania Suburbs','Agricultural - Core City','Agricultural - Developed Community','Agricultural - Growing Suburb','Agricultural - Rural Area','Agricultural - Bucks','Agricultural - Burlington','Agricultural - Camden','Agricultural - Chester','Agricultural - Delaware','Agricultural - Gloucester','Agricultural - Mercer','Agricultural - Montgomery','Agricultural - Philadelphia']
                ],
                data: [
                    {
                        'key': 'DVRPC Region*',
                        columns: ['year', 'Developed - DVRPC']
                    },
                    {
                        'key': 'NJ Counties*',
                        disabled: true,
                        columns: ['year', 'Developed - New Jersey Suburbs']
                    },
                    {
                        'key': 'PA Suburban Counties*',
                        disabled: true,
                        columns: ['year', 'Developed - Pennsylvania Suburbs']
                    },
                    {
                        'key': 'Core Cities^',
                        disabled: true,
                        columns: ['year', 'Developed - Core City']
                    },
                    {
                        'key': 'Developed Communities^',
                        disabled: true,
                        columns: ['year', 'Developed - Developed Community']
                    },
                    {
                        'key': 'Growing Suburbs^',
                        disabled: true,
                        columns: ['year', 'Developed - Growing Suburb']
                    },
                    {
                        'key': 'Rural Areas^',
                        disabled: true,
                        columns: ['year', 'Developed - Rural Area']
                    },
                    {
                        'key': 'Bucks**',
                        disabled: true,
                        columns: ['year', 'Developed - Bucks']
                    },
                    {
                        'key': 'Burlington**',
                        disabled: true,
                        columns: ['year', 'Developed - Burlington']
                    },
                    {
                        'key': 'Camden**',
                        disabled: true,
                        columns: ['year', 'Developed - Camden']
                    },
                    {
                        'key': 'Chester**',
                        disabled: true,
                        columns: ['year', 'Developed - Chester']
                    },
                    {
                        'key': 'Delaware**',
                        disabled: true,
                        columns: ['year', 'Developed - Delaware']
                    },
                    {
                        'key': 'Gloucester**',
                        disabled: true,
                        columns: ['year', 'Developed - Gloucester']
                    },
                    {
                        'key': 'Mercer**',
                        disabled: true,
                        columns: ['year', 'Developed - Mercer']
                    },
                    {
                        'key': 'Montgomery**',
                        disabled: true,
                        columns: ['year', 'Developed - Montgomery']
                    },
                    {
                        'key': 'Philadelphia**',
                        disabled: true,
                        columns: ['year', 'Developed - Philadelphia']
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
                    units: ['thousandsC'],
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
                dataSource: ['land_consumption_3a','land_consumption_3b'],
                context: {
                    labels: ['Acres (Thousands)','Percent'],
                    units: ['thousands','percentC']
                },
                columnOptions: [
                    ['DVRPC- Total','NJ Suburbs- Total','PA Suburbs- Total','Core City- Total','Developed Community- Total','Growing Suburb- Total','Rural Area- Total','Bucks- Total','Burlington- Total','Camden- Total','Chester- Total','Delaware- Total','Gloucester- Total','Mercer- Total','Montgomery- Total','Philadelphia- Total'],
                    ['DVRPC- Public','NJ Suburbs- Public','PA Suburbs- Public','Core City- Public','Developed Community- Public','Growing Suburb- Public','Rural Area- Public','Bucks- Public','Burlington- Public','Camden- Public','Chester- Public','Delaware- Public','Gloucester- Public','Mercer- Public','Montgomery- Public','Philadelphia- Public'],
                    ['DVRPC- Private','NJ Suburbs- Private','PA Suburbs- Private','Core City- Private','Developed Community- Private','Growing Suburb- Private','Rural Area- Private','Bucks- Private','Burlington- Private','Camden- Private','Chester- Private','Delaware- Private','Gloucester- Private','Mercer- Private','Montgomery- Private','Philadelphia- Private']
                ],
                data: [
                    {
                        'key': 'DVRPC Region*',
                        columns: ['year', 'DVRPC- Total']
                    },
                    {
                        'key': 'NJ Counties*',
                        disabled: true,
                        columns: ['year', 'NJ Suburbs- Total']
                    },
                    {
                        'key': 'PA Suburban Counties*',
                        disabled: true,
                        columns: ['year', 'PA Suburbs- Total']
                    },
                    {
                        'key': 'Core Cities^',
                        disabled: true,
                        columns: ['year', 'Core City- Total']
                    },
                    {
                        'key': 'Developed Communities^',
                        disabled: true,
                        columns: ['year', 'Developed Community- Total']
                    },
                    {
                        'key': 'Growing Suburbs^',
                        disabled: true,
                        columns: ['year', 'Growing Suburb- Total']
                    },
                    {
                        'key': 'Rural Areas^',
                        disabled: true,
                        columns: ['year', 'Rural Area- Total']
                    },
                    {
                        'key': 'Bucks**',
                        disabled: true,
                        columns: ['year', 'Bucks- Total']
                    },
                    {
                        'key': 'Burlington**',
                        disabled: true,
                        columns: ['year', 'Burlington- Total']
                    },
                    {
                        'key': 'Camden**',
                        disabled: true,
                        columns: ['year', 'Camden- Total']
                    },
                    {
                        'key': 'Chester**',
                        disabled: true,
                        columns: ['year', 'Chester- Total']
                    },
                    {
                        'key': 'Delaware**',
                        disabled: true,
                        columns: ['year', 'Delaware- Total']
                    },
                    {
                        'key': 'Gloucester**',
                        disabled: true,
                        columns: ['year', 'Gloucester- Total']
                    },
                    {
                        'key': 'Mercer**',
                        disabled: true,
                        columns: ['year', 'Mercer- Total']
                    },
                    {
                        'key': 'Montgomery**',
                        disabled: true,
                        columns: ['year', 'Montgomery- Total']
                    },
                    {
                        'key': 'Philadelphia**',
                        disabled: true,
                        columns: ['year', 'Philadelphia- Total']
                    }
                ]
            },
            {
                type: 'stacked bar',
                container: 'chart4',
                dataSource: ['landConsumption4'],
                context: {
                    labels: ['Acres (Thousands)'],
                    keepLabels: true,
                    units: ['thousands'],
                    keepUnits: true
                },
                columnOptions: [
                    ['DVRPC- Federal','DVRPC- State','DVRPC- County','DVRPC- Municipal','DVRPC- Non-profit','DVRPC- Preserved Farmland'],
                    ['PA Suburbs- Federal','PA Suburbs- State','PA Suburbs- County','PA Suburbs- Municipal','PA Suburbs- Non-profit','PA Suburbs- Preserved Farmland'],
                    ['NJ Suburbs- Federal','NJ Suburbs- State','NJ Suburbs- County','NJ Suburbs- Municipal','NJ Suburbs- Non-profit','NJ Suburbs- Preserved Farmland'],
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
                    ['Philadelphia- Federal','Philadelphia- State','Philadelphia- County','Philadelphia- Municipal','Philadelphia- Non-profit','Philadelphia- Preserved Farmland']
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
        ]
    },
    'Pavement Conditions': {
        categories: ['transpo', 'resil'],
        trend: {
            status: 'neutral',
            text: {
                stat: '0.7% fewer',
                text: `road segment miles in poor condition since 2010`
            }
        },
        dataUrl: 'https://catalog.dvrpc.org/dataset/pavement-conditions',
        d3: [
            {
                type: 'line',
                container: 'chart',
                dataSource: ['pavement_graph_1'],
                context: {
                    labels: ['Percentage of Total Segment Miles'],
                    keepLabels: true,
                    units: ['percentC'],
                    keepUnits: true
                },
                columnOptions: [
                    ['DVRPC- All', 'New Jersey- All', 'Pennsylvania- All', 'Bucks- All', 'Burlington- All', 'Camden- All', 'Chester- All', 'Delaware- All', 'Gloucester- All', 'Mercer- All', 'Montgomery- All', 'Philadelphia- All'],
                    ['DVRPC- NHS, interstate', 'New Jersey- NHS, interstate', 'Pennsylvania- NHS, interstate', 'Bucks- NHS, interstate', 'Burlington- NHS, interstate', 'Camden- NHS, interstate', 'Chester- NHS, interstate', 'Delaware- NHS, interstate', 'Gloucester- NHS, interstate', 'Mercer- NHS, interstate', 'Montgomery- NHS, interstate', 'Philadelphia- NHS, interstate'],
                    ['DVRPC- NHS, non-interstate', 'New Jersey- NHS, non-interstate', 'Pennsylvania- NHS, non-interstate', 'Bucks- NHS, non-interstate', 'Burlington- NHS, non-interstate', 'Camden- NHS, non-interstate', 'Chester- NHS, non-interstate', 'Delaware- NHS, non-interstate', 'Gloucester- NHS, non-interstate', 'Mercer- NHS, non-interstate', 'Montgomery- NHS, non-interstate', 'Philadelphia- NHS, non-interstate'],
                    ['DVRPC- Non-NHS', 'New Jersey- Non-NHS', 'Pennsylvania- Non-NHS', 'Bucks- Non-NHS', 'Burlington- Non-NHS', 'Camden- Non-NHS', 'Chester- Non-NHS', 'Delaware- Non-NHS', 'Gloucester- Non-NHS', 'Mercer- Non-NHS', 'Montgomery- Non-NHS', 'Philadelphia- Non-NHS'],
                ],
                data: [
                    {
                        'key': 'DVRPC Region',
                        columns: ['year', 'DVRPC- All']
                    },
                    {
                        'key': 'New Jersey Counties*',
                        disabled: true,
                        columns: ['year', 'New Jersey- All']
                    },
                    {
                        'key': 'Pennsylvania Counties*',
                        disabled: true,
                        columns: ['year', 'Pennsylvania- All']
                    },
                    {
                        'key': 'Bucks**',
                        disabled: true,
                        columns: ['year', 'Bucks- All']
                    },
                    {
                        'key': 'Burlington**',
                        disabled: true,
                        columns: ['year', 'Burlington- All']
                    },
                    {
                        'key': 'Camden**',
                        disabled: true,
                        columns: ['year', 'Camden- All']
                    },
                    {
                        'key': 'Chester**',
                        disabled: true,
                        columns: ['year', 'Chester- All']
                    },
                    {
                        'key': 'Delaware**',
                        disabled: true,
                        columns: ['year', 'Delaware- All']
                    },
                    {
                        'key': 'Gloucester**',
                        disabled: true,
                        columns: ['year', 'Gloucester- All']
                    },
                    {
                        'key': 'Mercer**',
                        disabled: true,
                        columns: ['year', 'Mercer- All']
                    },
                    {
                        'key': 'Montgomery**',
                        disabled: true,
                        columns: ['year', 'Montgomery- All']
                    },
                    {
                        'key': 'Philadelphia**',
                        disabled: true,
                        columns: ['year', 'Philadelphia- All']
                    }
                ]
            },
            {
                type: 'stacked bar',
                container: 'chart2',
                dataSource: ['pavement_2_all', 'pavement_2_interstate', 'pavement_2_NHS', 'pavement_2_NoNHS'],
                context: {
                    labels: ['Segment Miles'],
                    keepLabels: true,
                    units: ['thousands'],
                    keepUnits: true
                },
                columnOptions: [
                    ['DVRPC- Poor', 'DVRPC- Fair', 'DVRPC- Good'],
                    ['New Jersey- Poor', 'New Jersey- Fair', 'New Jersey- Good'],
                    ['Pennsylvania- Poor', 'Pennsylvania- Fair', 'Pennsylvania- Good'],
                    ['Bucks- Poor', 'Bucks- Fair', 'Bucks- Good'],
                    ['Burlington- Poor', 'Burlington- Fair', 'Burlington- Good'],
                    ['Camden- Poor', 'Camden- Fair', 'Camden- Good'],
                    ['Chester- Poor', 'Chester- Fair', 'Chester- Good'],
                    ['Delaware- Poor', 'Delaware- Fair', 'Delaware- Good'],
                    ['Gloucester- Poor', 'Gloucester- Fair', 'Gloucester- Good'],
                    ['Mercer- Poor', 'Mercer- Fair', 'Mercer- Good'],
                    ['Montgomery- Poor', 'Montgomery- Fair', 'Montgomery- Good'],
                    ['Philadelphia- Poor', 'Philadelphia- Fair', 'Philadelphia- Good'],
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
        ]
    }
}

export default snippetsRef
