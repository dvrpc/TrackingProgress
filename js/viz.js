/************************************************************************************/
/************************ D3 Content for Indicators *********************************/
/************************************************************************************/
const createStackedBarChart = (source, doubleToggle) => {

    // the name of the div containing the svg for d3 to paint on
    const container = `.${source.container} svg`

    // purge the old data (or create the empty arrays if its the 1st time rendering) to prevent the weird double line situation from happening
    source.data.forEach(series => series.values = [])
    
    // handle double toggle cases
    let dataSource = doubleToggle === 0 ? source.dataSource : source.secondDataSource

    d3.csv(dataSource, rows => {

        // create a values field based on the desired column as defined in the reference object
        source.data.forEach(series => {
            series.values.push([rows[series.columns[0]], rows[series.columns[1]] === 'NA' ? null : +rows[series.columns[1]]])
        })

    }, csvObj => {
        nv.addGraph(() => {
            let chart = nv.models.multiBarChart()
                .margin({top: 35, right: 55, bottom: 35, left: 55})
                // each series has format [year, values] so set the axes accordingly
                .x(d => d[0])
                .y((d, i) => d[1])
                // hide controls b/c were not interested in grouped bar (also it gets cluttered on smaller screens to this is a double win)
                .showControls(false)
                .forceY(0)
                .clipEdge(true)
                .stacked(true)

            // dates coming in as mm/dd/yyyy
            chart.xAxis.tickFormat(d => d3.time.format('%d %b %Y')(new Date(d)));
    
            d3.select(container).datum(source.data).transition().duration(500).call(chart)

            nv.utils.windowResize(chart.update)

            return chart
        })
    })
}

const createLinePlusBarChart = (source, doubleToggle) => {

    // the name of the div containing the svg for d3 to paint on
    const container = `.${source.container} svg`

    // purge the old data (or create the empty arrays if its the 1st time rendering) to prevent the weird double line situation from happening
    source.data.forEach(series => series.values = [])

    // extract the column names
    let barSource = source.data[0].columns
    let lineSource = source.data[1].columns

    // handle double toggle cases
    let dataSource = doubleToggle === 0 ? source.dataSource : source.secondDataSource

    d3.csv(dataSource, rows => {

        source.data[0].values.push([ +rows[barSource[0]], rows[barSource[1]] === 'NA' ? null : +rows[barSource[1]] ])
        source.data[1].values.push([ +rows[lineSource[0]], rows[lineSource[1]] === 'NA' ? null : +rows[lineSource[1]] ])

    }, csvObj => {
        nv.addGraph(() => {
            let chart = nv.models.linePlusBarChart()
                .margin({top: 35, right: 65, bottom: 35, left: 55})
                .focusEnable(false)
                .x(d => d[0])
                .forceY(0)
                .y((d, i) => d[1])

            /*
                The current data set just has days violating so they don't need notation, but future datasets may have values of $ or % or degrees or whatever, so 
                there will eventually be a need to implement some kind of parameter that sets the axes to the correct label. But that's a future problem

            chart.y1Axis.tickFormat(d3.format(',f'));

            chart.y2Axis.tickFormat(function(d) { return '$' + d3.format(',f')(d) });
            */

            d3.select(container).datum(source.data).transition().duration(500).call(chart)

            nv.utils.windowResize(chart.update)

            return chart
        })
    })
}

const createLineChart = (source, doubleToggle) => {

    // the name of the div containing the svg for d3 to paint on
    const container = `.${source.container} svg`

    // purge the old data (or create the empty arrays if its the 1st time rendering) to prevent the weird double line situation from happening
    source.data.forEach(series => series.values = [])

    // handle double toggle cases
    let dataSource = doubleToggle === 0 ? source.dataSource : source.secondDataSource

    d3.csv(dataSource, rows => {

        // extract information from the columns set in the snippetsRef lookup table
        source.data.forEach(series => {
            series.values.push([ +rows[series.columns[0]], rows[series.columns[1]] === 'NA' ? null : +rows[series.columns[1]] ])
        })

    }, csvObj => {

        nv.addGraph(() => {
            let chart = nv.models.lineChart()
                .margin({top: 35, right: 65, bottom: 35, left: 55})
                .useInteractiveGuideline(true)
                .showYAxis(true)
                .clipEdge(false)
                .forceY(0)
                .x(d => d[0])
                .y((d, i) => d[1])


            // format y-axis for large numbers
            chart.yAxis.tickFormat(d3.format(','))

            d3.select(container).datum(source.data).transition().duration(500).call(chart)

            nv.utils.windowResize(chart.update)

            return chart
        })
    })
}

const createStackedAreaChart = (source, doubleToggle) => {
    // the name of the div containing the svg for d3 to paint on
    const container = `.${source.container} svg`

    // purge the old data (or create the empty arrays if its the 1st time rendering) to prevent the weird double line situation from happening
    source.data.forEach(series => series.values = [])

    // handle double toggle cases
    let dataSource = doubleToggle === 0 ? source.dataSource : source.secondDataSource

    d3.csv(dataSource, rows => {

        // extract information from the columns set in the snippetsRef lookup table
        source.data.forEach(series => {
            series.values.push([
                +rows[series.columns[0]],
                rows[series.columns[1]] === 'NA' ? null : +rows[series.columns[1]]
            ])
        })

    }, csvObj => {

        nv.addGraph(() => {
            let chart = nv.models.stackedAreaChart()
                .margin({top: 35, right: 55, bottom: 35, left: 55})
                .x(d => d[0])
                .y(d => d[1])
                .useInteractiveGuideline(true)
                .clipEdge(true)
                .showControls(false)
                // use the style method to set the default to expand
                .style('expand')


            d3.select(container).datum(source.data).transition().duration(500).call(chart)

            nv.utils.windowResize(chart.update)

            return chart
        })
    })
}

const createdStackedBarPlusLine = (source, doubleToggle) => {
    let lineMax = 0;
    let barMax = 0;
    let max;

    // the name of the div containing the svg for d3 to paint on
    const container = `.${source.container} svg`

    // purge the old data (or create the empty arrays if its the 1st time rendering) to prevent the weird double line situation from happening
    source.data.forEach(series => series.values = [])

    // handle double toggle cases
    let dataSource = doubleToggle === 0 ? source.dataSource : source.secondDataSource

    d3.csv(dataSource, rows => {
        source.data.forEach(series => {
            // dynamically create an upper bound that will be the combination of the max line value + the min bar value
            if(series.type === 'bar') +rows[series.columns[1]] > barMax ? barMax = +rows[series.columns[1]] : null
            if(series.type === 'line') +rows[series.columns[1]] > lineMax ? lineMax = +rows[series.columns[1]] : null

            series.values.push({ 
                x: +rows[series.columns[0]],
                y: rows[series.columns[1]] === 'NA' ? null : +rows[series.columns[1]]
            })
        })

    }, csvObj => {

        // kinda hacky but it's the current solution to finding the max (which is generally bar1Max + bar2Max)
        max = lineMax + (barMax / 2.5)
        nv.addGraph(() => {
            let chart = nv.models.multiChart()
                .margin({top: 35, right: 55, bottom: 35, left: 55})
                .yDomain1([0, max])
                .yDomain2([0, max])

            chart.bars1.stacked(true)
            chart.bars2.stacked(true)

            chart.yAxis1.tickFormat(d3.format(','))
            chart.yAxis2.tickFormat(d3.format(','))

            d3.select(container).datum(source.data).transition().duration(500).call(chart)

            nv.utils.windowResize(chart.update)

            return chart
        })
    })
}

export {createStackedBarChart, createLinePlusBarChart, createLineChart, createStackedAreaChart, createdStackedBarPlusLine};