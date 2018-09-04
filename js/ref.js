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
                data: [
                    {
                        'key' : 'Unhealthy Sensitive Ozone',
                        'color': 'de425b',
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
            {
                type: 'stacked bar',
                secondary: true,
                container: 'chart2',
                dataSource: './data/aq_quarterly.csv',
                data: [
                    {
                        'key' : 'Unhealthy Sensitive PM',
                        'color': 'de425b',
                        'columns': ['quarterYear', 'unhealthySensitivePM'],
                    },
                    {
                        'key': 'Unhealthy PM',
                        'color': '#b62a38',
                        'columns': ['quarterYear', 'unhealthyPM'],
                    },
                    {
                        'key': 'Very Unhealthy PM',
                        'color': '#750000',
                        'columns': ['quarterYear', 'veryUnhealthyPM'],
                    }
                ]
            }
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
            {
                // Total VMT
                type: 'line',
                secondary: true,
                container: 'chart',
                dataSource: './data/vmtWeb.csv',
                data: [
                    {
                        'key' : 'DVRPC Region',
                        'columns': ['year', 'vmtDVRPC']
                    },
                    {
                        'key' : 'NJ Suburbs',
                        'disabled': true,
                        'columns': ['year', 'vmtNJSuburbs']
                    },
                    {
                        'key' : 'PA Suburbs',
                        'disabled': true,
                        'columns': ['year', 'vmtPASuburbs']
                    },
                    {
                        'key' : 'Philadelphia Subregion',
                        'columns': ['year', 'vmtPhillySubregion']
                    },
                    {
                        'key' : 'Bucks Co',
                        'disabled': true,
                        'columns': ['year', 'vmtBucksCo']
                    },
                    {
                        'key' : 'Chester Co',
                        'disabled': true,
                        'columns': ['year', 'vmtChesterCo']
                    },
                    {
                        'key' : 'Delaware Co',
                        'disabled': true,
                        'columns': ['year', 'vmtDelawareCo']
                    },
                    {
                        'key' : 'Montgomery Co',
                        'disabled': true,
                        'columns': ['year', 'vmtMontgomeryCo']
                    },
                    {
                        'key' : 'Philadelphia Co',
                        'disabled': true,
                        'columns': ['year', 'vmtPhillyCo']
                    },
                    {
                        'key' : 'Burlington Co',
                        'disabled': true,
                        'columns': ['year', 'vmtBurlingtonCo']
                    },
                    {
                        'key' : 'Camden Co',
                        'disabled': true,
                        'columns': ['year', 'vmtCamdenCo']
                    },
                    {
                        'key' : 'Gloucester Co',
                        'disabled': true,
                        'columns': ['year', 'vmtGloucesterCo']
                    },
                    {
                        'key' : 'Mercer Co',
                        'disabled': true,
                        'columns': ['year', 'vmtMercerCo']
                    }
                ]
            },
            {
                // VMT/Vehicle
                type: 'line',
                secondary: true,
                container: 'chart',
                dataSource: './data/vmtWeb.csv',
                data: [
                    {
                        'key' : 'DVRPC Region',
                        'columns': ['year', 'vmtPerVehicleDVRPC']
                    },
                    {
                        'key' : 'NJ Suburbs',
                        'disabled': true,
                        'columns': ['year', 'vmtPerVehicleNJSuburbs']
                    },
                    {
                        'key' : 'PA Suburbs',
                        'disabled': true,
                        'columns': ['year', 'vmtPerVehiclePASuburbs']
                    },
                    {
                        'key' : 'Philadelphia Subregion',
                        'columns': ['year', 'vmtPerVehiclePhillySubregion']
                    },
                    {
                        'key' : 'Bucks Co',
                        'disabled': true,
                        'columns': ['year', 'vmtPerVehicleBucksCo']
                    },
                    {
                        'key' : 'Chester Co',
                        'disabled': true,
                        'columns': ['year', 'vmtPerVehicleChesterCo']
                    },
                    {
                        'key' : 'Delaware Co',
                        'disabled': true,
                        'columns': ['year', 'vmtPerVehicleDelawareCo']
                    },
                    {
                        'key' : 'Montgomery Co',
                        'disabled': true,
                        'columns': ['year', 'vmtPerVehicleMontgomeryCo']
                    },
                    {
                        'key' : 'Philadelphia Co',
                        'disabled': true,
                        'columns': ['year', 'vmtPerVehiclePhillyCo']
                    },
                    {
                        'key' : 'Burlington Co',
                        'disabled': true,
                        'columns': ['year', 'vmtPerVehicleBurlingtonCo']
                    },
                    {
                        'key' : 'Camden Co',
                        'disabled': true,
                        'columns': ['year', 'vmtPerVehicleCamdenCo']
                    },
                    {
                        'key' : 'Gloucester Co',
                        'disabled': true,
                        'columns': ['year', 'vmtPerVehicleGloucesterCo']
                    },
                    {
                        'key' : 'Mercer Co',
                        'disabled': true,
                        'columns': ['year', 'vmtPerVehicleMercerCo']
                    }
                ]
            }
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
            },
            {
                type: 'stacked area',
                container: 'chart2',
                secondary: true,
                dataSource: './data/edattainComprehensive.csv',
                data: [
                    {
                        'key': 'Less than High School',
                        'columns': ['year', 'Philadelphia Subregion-Less than High School']
                    },
                    {
                        'key': 'Some High School',
                        'columns': ['year', 'Philadelphia Subregion-Some High School']
                    },
                    {
                        'key': 'Graduated High School',
                        'columns': ['year', 'Philadelphia Subregion-Graduated High School']
                    },
                    {
                        'key': 'Some College',
                        'columns': ['year', 'Philadelphia Subregion-Some College']
                    },
                    {
                        'key': "Associate's Degree",
                        'columns': ['year', 'Philadelphia Subregion-Associates Degree']
                    },
                    {
                        'key': "Bachelor's Degree",
                        'columns': ['year', 'Philadelphia Subregion-Bachelors Degree']
                    },
                    {
                        'key': 'Graduate/Professional Degree',
                        'columns': ['year', 'Philadelphia Subregion-Graduate/Professional Degree']
                    }
                ]
            },
            {
                type: 'stacked area',
                container: 'chart2',
                secondary: true,
                dataSource: './data/edattainComprehensive.csv',
                data: [
                    {
                        'key': 'Less than High School',
                        'columns': ['year', 'New Jersey Suburbs-Less than High School']
                    },
                    {
                        'key': 'Some High School',
                        'columns': ['year', 'New Jersey Suburbs-Some High School']
                    },
                    {
                        'key': 'Graduated High School',
                        'columns': ['year', 'New Jersey Suburbs-Graduated High School']
                    },
                    {
                        'key': 'Some College',
                        'columns': ['year', 'New Jersey Suburbs-Some College']
                    },
                    {
                        'key': "Associate's Degree",
                        'columns': ['year', 'New Jersey Suburbs-Associates Degree']
                    },
                    {
                        'key': "Bachelor's Degree",
                        'columns': ['year', 'New Jersey Suburbs-Bachelors Degree']
                    },
                    {
                        'key': 'Graduate/Professional Degree',
                        'columns': ['year', 'New Jersey Suburbs-Graduate/Professional Degree']
                    }
                ]
            },
            {
                type: 'stacked area',
                container: 'chart2',
                secondary: true,
                dataSource: './data/edattainComprehensive.csv',
                data: [
                    {
                        'key': 'Less than High School',
                        'columns': ['year', 'Pennsylvania Suburbs-Less than High School']
                    },
                    {
                        'key': 'Some High School',
                        'columns': ['year', 'Pennsylvania Suburbs-Some High School']
                    },
                    {
                        'key': 'Graduated High School',
                        'columns': ['year', 'Pennsylvania Suburbs-Graduated High School']
                    },
                    {
                        'key': 'Some College',
                        'columns': ['year', 'Pennsylvania Suburbs-Some College']
                    },
                    {
                        'key': "Associate's Degree",
                        'columns': ['year', 'Pennsylvania Suburbs-Associates Degree']
                    },
                    {
                        'key': "Bachelor's Degree",
                        'columns': ['year', 'Pennsylvania Suburbs-Bachelors Degree']
                    },
                    {
                        'key': 'Graduate/Professional Degree',
                        'columns': ['year', 'Pennsylvania Suburbs-Graduate/Professional Degree']
                    }
                ]
            },
            {
                type: 'stacked area',
                container: 'chart2',
                secondary: true,
                dataSource: './data/edattainComprehensive.csv',
                data: [
                    {
                        'key': 'Less than High School',
                        'columns': ['year', 'Bucks-Less than High School']
                    },
                    {
                        'key': 'Some High School',
                        'columns': ['year', 'Bucks-Some High School']
                    },
                    {
                        'key': 'Graduated High School',
                        'columns': ['year', 'Bucks-Graduated High School']
                    },
                    {
                        'key': 'Some College',
                        'columns': ['year', 'Bucks-Some College']
                    },
                    {
                        'key': "Associate's Degree",
                        'columns': ['year', 'Bucks-Associates Degree']
                    },
                    {
                        'key': "Bachelor's Degree",
                        'columns': ['year', 'Bucks-Bachelors Degree']
                    },
                    {
                        'key': 'Graduate/Professional Degree',
                        'columns': ['year', 'Bucks-Graduate/Professional Degree']
                    }
                ]
            },
            {
                type: 'stacked area',
                container: 'chart2',
                secondary: true,
                dataSource: './data/edattainComprehensive.csv',
                data: [
                    {
                        'key': 'Less than High School',
                        'columns': ['year', 'Burlington-Less than High School']
                    },
                    {
                        'key': 'Some High School',
                        'columns': ['year', 'Burlington-Some High School']
                    },
                    {
                        'key': 'Graduated High School',
                        'columns': ['year', 'Burlington-Graduated High School']
                    },
                    {
                        'key': 'Some College',
                        'columns': ['year', 'Burlington-Some College']
                    },
                    {
                        'key': "Associate's Degree",
                        'columns': ['year', 'Burlington-Associates Degree']
                    },
                    {
                        'key': "Bachelor's Degree",
                        'columns': ['year', 'Burlington-Bachelors Degree']
                    },
                    {
                        'key': 'Graduate/Professional Degree',
                        'columns': ['year', 'Burlington-Graduate/Professional Degree']
                    }
                ]
            },
            {
                type: 'stacked area',
                container: 'chart2',
                secondary: true,
                dataSource: './data/edattainComprehensive.csv',
                data: [
                    {
                        'key': 'Less than High School',
                        'columns': ['year', 'Camden-Less than High School']
                    },
                    {
                        'key': 'Some High School',
                        'columns': ['year', 'Camden-Some High School']
                    },
                    {
                        'key': 'Graduated High School',
                        'columns': ['year', 'Camden-Graduated High School']
                    },
                    {
                        'key': 'Some College',
                        'columns': ['year', 'Camden-Some College']
                    },
                    {
                        'key': "Associate's Degree",
                        'columns': ['year', 'Camden-Associates Degree']
                    },
                    {
                        'key': "Bachelor's Degree",
                        'columns': ['year', 'Camden-Bachelors Degree']
                    },
                    {
                        'key': 'Graduate/Professional Degree',
                        'columns': ['year', 'Camden-Graduate/Professional Degree']
                    }
                ]
            },
            {
                type: 'stacked area',
                container: 'chart2',
                secondary: true,
                dataSource: './data/edattainComprehensive.csv',
                data: [
                    {
                        'key': 'Less than High School',
                        'columns': ['year', 'Chester-Less than High School']
                    },
                    {
                        'key': 'Some High School',
                        'columns': ['year', 'Chester-Some High School']
                    },
                    {
                        'key': 'Graduated High School',
                        'columns': ['year', 'Chester-Graduated High School']
                    },
                    {
                        'key': 'Some College',
                        'columns': ['year', 'Chester-Some College']
                    },
                    {
                        'key': "Associate's Degree",
                        'columns': ['year', 'Chester-Associates Degree']
                    },
                    {
                        'key': "Bachelor's Degree",
                        'columns': ['year', 'Chester-Bachelors Degree']
                    },
                    {
                        'key': 'Graduate/Professional Degree',
                        'columns': ['year', 'Chester-Graduate/Professional Degree']
                    }
                ]
            },
            {
                type: 'stacked area',
                container: 'chart2',
                secondary: true,
                dataSource: './data/edattainComprehensive.csv',
                data: [
                    {
                        'key': 'Less than High School',
                        'columns': ['year', 'Delaware-Less than High School']
                    },
                    {
                        'key': 'Some High School',
                        'columns': ['year', 'Delaware-Some High School']
                    },
                    {
                        'key': 'Graduated High School',
                        'columns': ['year', 'Delaware-Graduated High School']
                    },
                    {
                        'key': 'Some College',
                        'columns': ['year', 'Delaware-Some College']
                    },
                    {
                        'key': "Associate's Degree",
                        'columns': ['year', 'Delaware-Associates Degree']
                    },
                    {
                        'key': "Bachelor's Degree",
                        'columns': ['year', 'Delaware-Bachelors Degree']
                    },
                    {
                        'key': 'Graduate/Professional Degree',
                        'columns': ['year', 'Delaware-Graduate/Professional Degree']
                    }
                ]
            },
            {
                type: 'stacked area',
                container: 'chart2',
                secondary: true,
                dataSource: './data/edattainComprehensive.csv',
                data: [
                    {
                        'key': 'Less than High School',
                        'columns': ['year', 'Gloucester-Less than High School']
                    },
                    {
                        'key': 'Some High School',
                        'columns': ['year', 'Gloucester-Some High School']
                    },
                    {
                        'key': 'Graduated High School',
                        'columns': ['year', 'Gloucester-Graduated High School']
                    },
                    {
                        'key': 'Some College',
                        'columns': ['year', 'Gloucester-Some College']
                    },
                    {
                        'key': "Associate's Degree",
                        'columns': ['year', 'Gloucester-Associates Degree']
                    },
                    {
                        'key': "Bachelor's Degree",
                        'columns': ['year', 'Gloucester-Bachelors Degree']
                    },
                    {
                        'key': 'Graduate/Professional Degree',
                        'columns': ['year', 'Gloucester-Graduate/Professional Degree']
                    }
                ]
            },
            {
                type: 'stacked area',
                container: 'chart2',
                secondary: true,
                dataSource: './data/edattainComprehensive.csv',
                data: [
                    {
                        'key': 'Less than High School',
                        'columns': ['year', 'Mercer-Less than High School']
                    },
                    {
                        'key': 'Some High School',
                        'columns': ['year', 'Mercer-Some High School']
                    },
                    {
                        'key': 'Graduated High School',
                        'columns': ['year', 'Mercer-Graduated High School']
                    },
                    {
                        'key': 'Some College',
                        'columns': ['year', 'Mercer-Some College']
                    },
                    {
                        'key': "Associate's Degree",
                        'columns': ['year', 'Mercer-Associates Degree']
                    },
                    {
                        'key': "Bachelor's Degree",
                        'columns': ['year', 'Mercer-Bachelors Degree']
                    },
                    {
                        'key': 'Graduate/Professional Degree',
                        'columns': ['year', 'Mercer-Graduate/Professional Degree']
                    }
                ]
            },
            {
                type: 'stacked area',
                container: 'chart2',
                secondary: true,
                dataSource: './data/edattainComprehensive.csv',
                data: [
                    {
                        'key': 'Less than High School',
                        'columns': ['year', 'Montgomery-Less than High School']
                    },
                    {
                        'key': 'Some High School',
                        'columns': ['year', 'Montgomery-Some High School']
                    },
                    {
                        'key': 'Graduated High School',
                        'columns': ['year', 'Montgomery-Graduated High School']
                    },
                    {
                        'key': 'Some College',
                        'columns': ['year', 'Montgomery-Some College']
                    },
                    {
                        'key': "Associate's Degree",
                        'columns': ['year', 'Montgomery-Associates Degree']
                    },
                    {
                        'key': "Bachelor's Degree",
                        'columns': ['year', 'Montgomery-Bachelors Degree']
                    },
                    {
                        'key': 'Graduate/Professional Degree',
                        'columns': ['year', 'Montgomery-Graduate/Professional Degree']
                    }
                ]
            }
        ]
    },
    'Vehicle Crashes': {
        file: 'vehicleCrashes.html',
        map: false,
        d3: [
        // multichart format: individual data sets need to state their type & axis
            {
                type: 'stacked bar plus line',
                container: 'chart',
                dataSource: './data/crashesWeb.csv',
                // add a field here that is an array of possible y values & keys
                /* ex:

                toggleVals: [
                    {
                        key: 'the seires name',
                        columns: ['ksi5yrAvgDVRPC', 'ksiMotorVehicleDVRPC', 'ksiBikePedDVRPC']
                    },
                    {
                        key: 'other series name',
                        columns: ['ksi5yrAvgPhillySubregion', 'ksiMotorVehiclePhillySubregion', 'ksiBikePedPhillySubregion']
                    }
                ]

                Result: 1 data array for a togglable chart + as many toggleVals objects as there are options.
                    gain: type, container, dataSource, yAxis & other things don't need to be repeated but objects for key and columns still need
                    to be made for each togglable jawn. Performance/size gain might be worth it, but readability gain would be big.
                    // @TODO: talk to people better at optimizing this kind of shit & revisit the problem.

                use the # <option> value to query which array in yValues should be mapped to data below.
                Those values will be pushed into the columns array, which will contain the common jawn ('year', in this case)
                This avoids having to create massive massive objects for each toggle chart - just one data array for the whole chart
                and a series of yVals to plug in depending on which <option> is selected 
                    
                    pseudocode from within the d3 function doesn't change. Default will be hard coded

                    pseudocode (from within toggleJanws):
                        let chartNumber = selected.options[selected.selectedIndex].value
                        
                        // get the data set
                        let source = dataSets[chartNumber]
                        
                        // get the correct key and columns object for that dataset
                        let newKeyAndColumns = source.toggleVals[chartNumber]

                        source.data.forEach(series => series.key = newKeyAndColumns.key, series.columns = newKeyAndColumns.columns)

                HOW TO: handle pages w/multiple togglabe graphs:
                    give the selector an id IndicatorName-#. Use that number to query which object within snippetsRef[title].d3 to query
                */
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
                container: 'chart',
                secondary: true,
                dataSource: './data/crashesWeb.csv',
                data: [
                    {
                        'key': '5 year avg',
                        'type': 'line',
                        'yAxis': 1,
                        'columns': ['year', 'ksi5yrAvgPhillySubregion']
                    },
                    {
                        'key': 'Motor Vehicle',
                        'type': 'bar',
                        'yAxis': 2,
                        'columns': ['year', 'ksiMotorVehiclePhillySubregion']
                    },
                    {
                        'key': 'Bike + Ped',
                        'type': 'bar',
                        'yAxis': 2,
                        'columns': ['year', 'ksiBikePedPhillySubregion']
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
    'Affordable Housing': {file: 'affordableHousing.html', map: false, d3: false},
    'Transit Conditions': {file: 'transitConditions.html', map: true, d3: false}
}

export default snippetsRef