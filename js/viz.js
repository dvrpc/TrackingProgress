/************************************************************************************/
/************************ D3 Content for Indicators *********************************/
/************************************************************************************/

// input helper function
const formatInpus = (source, toggleContext) => {
    // the name of the div containing the svg for d3 to paint on
    const container = `.${source.container} svg`
    
    // purge the old data (or create the empty arrays if its the 1st time rendering) to prevent the weird double line situation from happening
    source.data.forEach(series => series.values = [])
    
    let labels, units, chartName;

    // abstract context code to keep things DRY
    const formatContext = (index, hasDouble) => {
        const formattedName = hasDouble ? source.dataSource[index] : source.dataSource[0]
        const formatContext = toggleContext.context

        let formattedLabels = formatContext.keepLabels ? formatContext.labels[0] : formatContext.labels[index]
        let formattedUnits = formatContext.keepUnits ? formatContext.units[0] : formatContext.units[index]
        
        return [formattedLabels, formattedUnits, formattedName]
    }

    // index all at 0 for initial state
    if(toggleContext === 'initial') {
        const hasContext = source.context

        if(hasContext) {
            labels = hasContext.labels[0]
            units = hasContext.units[0]
        }

        chartName = source.dataSource[0]

    // regular case w/context: determine if using double toggles or not to index the context obj
    }else if(toggleContext.context) {
        [labels, units, chartName] = toggleContext.doubleToggle > -1 ? formatContext(toggleContext.doubleToggle, true) : formatContext(toggleContext.chartNumber, false)
    
    // regular case no context: just get chartName
    }else {
        chartName = source.dataSource[0]
    }

    const dataSource = `./data/${chartName}.csv`

    // if neither labels nor units need updating, make context null so the viz fncs can avoid calling formatLabels
    let context = labels || units ? {labels, units} : null
    
    return [container, dataSource, source, context]
}

// labelling helper function 
const formatLabels = (axis, margin, context) => {
    context.units ? axis.tickFormat(d3.format(axisFormats[context.units])) : axis.tickFormat(d3.format('.3n'))
            
    // add axis label & update margin to compensate
    if(context.labels) {
        axis.axisLabel(context.labels)

        // give axis label breathing room (note: margin.right adds to the graph itself, need to find a way to add margin right to the labels)
        margin.left += 20
    }
}

// Y-axis formatting lookup table
const axisFormats = {
    'percent': '.0%',
    'singles': '.3n',
    'thousands': ',',
    'millions': '.3n'
}

const createStackedBarChart = (source, toggleContext) => {
    let container, dataSource, context;
    [container, dataSource, source, context] = formatInpus(source, toggleContext)

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
            
            // set max legend length to an arbitrarily high number to prevent text cutoff
            chart.legend.maxKeyLength(100)

            // format yAxis units and labels if necessary
            if(context) formatLabels(chart.yAxis, chart.margin(), context)

            d3.select(container).datum(source.data).transition().duration(500).call(chart)

            nv.utils.windowResize(chart.update)

            return chart
        })
    })
}

const createLinePlusBarChart = (source, toggleContext) => {
    let container, dataSource, context;
    [container, dataSource, source, context] = formatInpus(source, toggleContext)
    
    let barIndex = source.data[0].type === 'bar' ? 0 : 1
    let lineIndex = barIndex === 0 ? 1 : 0

    let barSource = barIndex === 0 ? source.data[0].columns : source.data[1].columns
    let lineSource = lineIndex === 1 ? source.data[1].columns : source.data[0].columns

    d3.csv(dataSource, rows => {
        source.data[barIndex].values.push([ +rows[barSource[0]], rows[barSource[1]] === 'NA' ? null : +rows[barSource[1]] ])
        source.data[lineIndex].values.push([ +rows[lineSource[0]], rows[lineSource[1]] === 'NA' ? null : +rows[lineSource[1]] ])
    }, csvObj => {        
        nv.addGraph(() => {
            let chart = nv.models.linePlusBarChart()
                .margin({top: 35, right: 65, bottom: 35, left: 55})
                .focusEnable(false)
                .x(d => d[0])
                .forceY([0])
                .y((d, i) => d[1])


            // set max legend length to an arbitrarily high number to prevent text cutoff
            chart.legend.maxKeyLength(100)

            // format yAxis units and labels if necessary
            if(context) formatLabels(chart.y1Axis, chart.margin(), context)

            d3.select(container).datum(source.data).transition().duration(500).call(chart)

            nv.utils.windowResize(chart.update)

            return chart
        })
    })
}

const createLineChart = (source, toggleContext) => {
    let container, dataSource, context;
    [container, dataSource, source, context] = formatInpus(source, toggleContext)

    d3.csv(dataSource, rows => {
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

            // set max legend length to an arbitrarily high number to prevent text cutoff
            chart.legend.maxKeyLength(100)

            // format yAxis units and labels if necessary
            if(context) formatLabels(chart.yAxis, chart.margin(), context)

            d3.select(container).datum(source.data).transition().duration(500).call(chart)

            nv.utils.windowResize(chart.update)

            return chart
        })
    })
}

const createLineAndScatterChart = (source, toggleContext) => {
    let container, dataSource, context;
    [container, dataSource, source, context] = formatInpus(source, toggleContext)

    let scatterIndex = source.data[0].type === 'scatter' ? 0 : 1
    let lineIndex = scatterIndex === 0 ? 1 : 0

    let scatterSource = scatterIndex === 0 ? source.data[0].columns : source.data[1].columns
    let lineSource = lineIndex === 1 ? source.data[1].columns : source.data[0].columns

    d3.csv(dataSource, rows => {
        source.data[scatterIndex].values.push({
            x: +rows[scatterSource[0]],
            y: rows[scatterSource[1]] === 'NA' ? null : +rows[scatterSource[1]],
            size: 1.5,
            shape: 'circle'
        })
        source.data[lineIndex].values.push({
            x: +rows[lineSource[0]],
            y: rows[lineSource[1]] === 'NA' ? null : +rows[lineSource[1]]
        })
    }, csvObj => {
        nv.addGraph(() => {
            let chart = nv.models.multiChart()
                .margin({top: 35, right: 65, bottom: 35, left: 55})
                // @TODO: calculate a max instead of just using 65
                .yDomain1([0, 65])

            // set max legend length to an arbitrarily high number to prevent text cutoff
            chart.legend.maxKeyLength(100)

            // format yAxis units and labels if necessary
            if(context) formatLabels(chart.yAxis1, chart.margin(), context)

            chart.yAxis1.tickFormat(d3.format(','))
            
            d3.select(container).datum(source.data).transition().duration(500).call(chart)

            nv.utils.windowResize(chart.update)

            return chart
        })
    })

}

const createStackedAreaChart = (source, toggleContext) => {
    let container, dataSource, context;
    [container, dataSource, source, context] = formatInpus(source, toggleContext)

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
                .margin({top: 65, right: 55, bottom: 35, left: 55})
                .x(d => d[0])
                .y(d => d[1])
                .useInteractiveGuideline(true)
                .clipEdge(true)
                .showControls(false)
                // use the style method to set the default to expand
                .style('expand')

            // set max legend length to an arbitrarily high number to prevent text cutoff
            chart.legend.maxKeyLength(100)

            // format yAxis units and labels if necessary
            if(context) formatLabels(chart.yAxis1, chart.margin(), context)
            
            d3.select(container).datum(source.data).transition().duration(500).call(chart)

            nv.utils.windowResize(chart.update)

            return chart
        })
    })
}

const createdStackedBarPlusLine = (source, toggleContext) => {
    let lineMax = 0;
    let barMax = 0;
    let max;

    let container, dataSource, context;
    [container, dataSource, source, context] = formatInpus(source, toggleContext)

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

            // set max legend length to an arbitrarily high number to prevent text cutoff
            chart.legend.maxKeyLength(100)

            // format yAxis units and labels if necessary
            if(context) formatLabels(chart.yAxis1, chart.margin(), context)
            
            d3.select(container).datum(source.data).transition().duration(500).call(chart)

            nv.utils.windowResize(chart.update)

            return chart
        })
    })
}

// waterfall charts are just fancy multi-bar charts. Each "waterfall" is it's own bar
const createWaterfallChart = (source, toggleContext) => {
    let container, dataSource;
    [container, dataSource, source] = formatInpus(source, toggleContext)
}

export {createStackedBarChart, createLinePlusBarChart, createLineChart, createStackedAreaChart, createdStackedBarPlusLine, createLineAndScatterChart, createWaterfallChart};