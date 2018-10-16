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
                    ['European (non-seasonal)', 'European (seasonal)', 'Caribbean (non-seasonal)', 'Caribbean (seasonal)', 'Canadian (non-seasonal)', 'Canadian (seasonal)', 'Mexican (non-seasonal)', 'Middle Eastern (non-seasonal)']
                ],
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
                    // {
                    //     'key': 'Canadian (seasonal)',
                    //     columns: []
                    // },
                    {
                        'key': 'Caribbean',
                        columns: ['year', 'Caribbean']
                    },
                    // {
                    //     'key': 'Caribbean (seasonal)',
                    //     columns: []
                    // },
                    {
                        'key': 'European',
                        columns: ['year', 'European']
                    },
                    // {
                    //     'key': 'European (seasonal)',
                    //     columns: []
                    // }
                ]
            }
        ]
    },
    'Residential Building Permits': {
        file: 'residentialBuildingPermits.html',
        map: false,
        d3: {

        }
    },
    'Bridge Conditions': {file: 'bridgeConditions.html', map: false, d3: false },
    'non-SOV Commuting Mode Share': {file: 'nonSOVCommutingModeShare.html', map: false, d3: false },
    'Income Inequality': {file: 'incomeInequality.html', map: false, d3: false },
    'Land Preservation': {file: 'landPreservation.html', map: false, d3: false },
    'Population Growth': {file: 'populationGrowth.html', map: true, d3: false},
    'Affordable Housing': {file: 'affordableHousing.html', map: false, d3: false},
    'Transit Conditions': {file: 'transitConditions.html', map: true, d3: false}
}

export default snippetsRef