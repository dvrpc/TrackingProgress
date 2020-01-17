/************************************************************************************/
/************************ D3 Content for Indicators *********************************/
/************************************************************************************/

/************************ Helper Functions *********************************/
// input helper function
const formatInpus = (source, toggleContext) => {
    // the Period of the div containing the svg for d3 to paint on
    const container = `.${source.container} svg`
    
    // purge the old data (or create the empty arrays if its the 1st time rendering) to prevent the weird double line situation from happening
    source.data.forEach(series => series.values = [])
    
    let labels, xLabel, units, chartName;

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
            xLabel = hasContext.xLabel || 'Year'
        }

        chartName = source.dataSource[0]

    // regular case w/context: determine if using double toggles or not to index the context obj
    }else if(toggleContext.context) {
        [labels, units, chartName] = toggleContext.doubleToggle > -1 ? formatContext(toggleContext.doubleToggle, true) : formatContext(toggleContext.chartNumber, false)
        xLabel = toggleContext.context.xLabel || 'Year'
    
    // regular case no context: just get chartName
    }else {
        chartName = source.dataSource[0]
    }

    const dataSource = `./data/${chartName}.csv`

    // if neither labels nor units need updating, make context null so the viz fncs can avoid calling formatLabels
    let context = labels || units ? {labels, units, xLabel} : null
    
    return [container, dataSource, source, context]
}

// labelling helper function 
const formatLabels = (y, x, context) => {
    context.units ? y.tickFormat(d3.format(axisFormats[context.units])) : y.tickFormat(d3.format('.3n'))
            
    // add axis label & update margin to compensate
    if(context.labels) {
        y.axisLabel(context.labels)
        y.axisLabelDistance( isMobile ? 8 : 15)

        // x label defaults to year except for the two edge cases where it's different (which is handled in format Inputs)
        x.axisLabel(context.xLabel)
    }
}

// Y-axis formatting lookup table
const axisFormats = {
    'percent': '.0%',
    'percentC': '.3p',
    'singles': '.3n',
    'thousands': ',.0f',
    'thousandsC': ',.3r',
    'millions': ',4r',
    'dollars': '$,3'
}

// margin object for desktop/mobile
let isMobile = window.innerWidth > 415 ? false : true
const standardMargin = isMobile ? {top: 40, right: 25, bottom: 50, left: 70} : {top: 40, right: 55, bottom: 45, left: 85}
const waterfallMargin = isMobile ? {top: 35, right: 20, bottom: 325, left: 65} : {top: 40, right: 55, bottom: 275, left: 85}


/************************ Charting Functions *********************************/
const createStackedBarChart = (source, toggleContext) => {
    let container, dataSource, context;
    [container, dataSource, source, context] = formatInpus(source, toggleContext)

    d3.csv(dataSource, rows => {

        // create a values field based on the desired column as defined in the reference object
        source.data.forEach(series => {
            series.values.push([ rows[series.columns[0]], rows[series.columns[1]] === 'NA' ? null : +rows[series.columns[1]] ])
        })

    }, csvObj => {
        nv.addGraph(() => {
            let chart = nv.models.multiBarChart()
                .margin(standardMargin)
                .x(d => d[0])
                .y((d, i) => d[1])
                .showControls(false)
                .forceY(source.range || 0)
                .clipEdge(true)
                .stacked(true)
                .useInteractiveGuideline(true)
            
            // set max legend length to an arbitrarily high number to prevent text cutoff
            chart.legend.maxKeyLength(100)

            // format yAxis units and labels if necessary
            if(context) formatLabels(chart.yAxis, chart.xAxis, context)

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
                .margin(standardMargin)
                .focusEnable(false)
                .x(d => d[0])
                .y((d, i) => d[1])

            // set yMax
            chart.lines.forceY(source.range || 0)
            chart.bars.forceY(source.range || 0)

            // set max legend length to an arbitrarily high number to prevent text cutoff
            chart.legend.maxKeyLength(100)

            // format yAxis units and labels if necessary
            if(context) formatLabels(chart.y1Axis, chart.xAxis, context)

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
            series.values.push([ +rows[series.columns[0]], rows[series.columns[1]] === 'NA' ? 'undefined' : +rows[series.columns[1]] ])
        })
    }, csvObj => {

        nv.addGraph(() => {
            let chart = nv.models.lineChart()
                .defined(d => d[1] !== null) // handle incomeplete datasets (ed attain and housing afford chart 1)
                .margin(standardMargin)
                .useInteractiveGuideline(true)
                .showYAxis(true)
                .clipEdge(false)
                .forceY(0)
                .x(d => d[0])
                .y((d, i) => d[1])

            // set max legend length to an arbitrarily high number to prevent text cutoff
            chart.legend.maxKeyLength(100)

            // format yAxis units and labels if necessary
            if(context) formatLabels(chart.yAxis, chart.xAxis, context)

            d3.select(container).datum(source.data).transition().duration(500).call(chart)

            nv.utils.windowResize(chart.update)

            return chart
        })
    })
}

const createLineAndScatterChart = (source, toggleContext) => {
    let container, dataSource, context;
    [container, dataSource, source, context] = formatInpus(source, toggleContext)

    // force the precipitation chart to display a range from 0-1 b/c it's expressed in percent. 
    // There's only one line/scatter chart so this hack is fine but for future reference if another one gets added and the y domain starts acting up, this is why
    const precipitationToggle = toggleContext.chartNumber || 0
    let yDomain = precipitationToggle < 2 ? [0, 65] : [0, 1]

    let scatterIndex = source.data[0].type === 'scatter' ? 0 : 1
    let lineIndex = scatterIndex === 0 ? 1 : 0

    let scatterSource = scatterIndex === 0 ? source.data[0].columns : source.data[1].columns
    let lineSource = lineIndex === 1 ? source.data[1].columns : source.data[0].columns

    d3.csv(dataSource, rows => {
        source.data[scatterIndex].values.push({
            x: +rows[scatterSource[0]],
            y: rows[scatterSource[1]] === 'NA' ? -1 : +rows[scatterSource[1]] // -1 + a yMin of 0 as a hack to avoid plotting NA values
        })
        source.data[lineIndex].values.push({
            x: +rows[lineSource[0]],
            y: rows[lineSource[1]] === 'NA' ? null : +rows[lineSource[1]]
        })
    }, csvObj => {
        nv.addGraph(() => {
            let chart = nv.models.multiChart()
                .margin(standardMargin)
                .yDomain1(yDomain)

            // set max legend length to an arbitrarily high number to prevent text cutoff
            chart.legend.maxKeyLength(100)

            // format yAxis units and labels if necessary
            if(context) formatLabels(chart.yAxis1, chart.xAxis, context)
            
            d3.select(container).datum(source.data).transition().duration(500).call(chart)

            nv.utils.windowResize(chart.update)

            return chart
        })
    })
}

const createWaterfallChart = (source, toggleContext) => {
    let container, dataSource;
    [container, dataSource, source] = formatInpus(source, toggleContext)

    // get a handle on the chart container element for resizing function
    const chartDiv = container.split(' ')[0]
    const waterfallContainer = document.querySelector(chartDiv)
    const widthNoMargin = waterfallContainer.clientWidth

    // hack to identify toggles for this case
    const len = source.data[0].columns.length - 1
    const county = source.data[0].columns[len]

    // even bigger hack to clear charts for this case
    if(len > 0) {
        const bruh = d3.select(container)[0][0].children;
        if(bruh[0]) bruh[0].remove()
    }

    let margin = waterfallMargin,
    width = widthNoMargin - margin.left - margin.right,
    height = 590 - margin.top - margin.bottom,
    padding = 0.1

    var x = d3.scale.ordinal()
        .rangeRoundBands([0, width], padding);

    var y = d3.scale.linear()
        .range([height, 0]);

    // function to handle grid lines and x/y axes
    var xAxis = () => d3.svg.axis().scale(x).orient("bottom").ticks(20).tickSize(-height, 0, 0)
    var yAxis = () => d3.svg.axis().scale(y).orient("left").ticks(8).tickSize(-width, 0, 0)

    var chart = d3.select(container)
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    d3.csv(dataSource, data => {
        let cumulative = 0

        // start at one b/c we're skipping the 2010 base year row
        for( var i = 1; i < data.length; i++){
            const val = parseInt(data[i][county])

            // cumulative case 
            if ( i % 3 === 0) {
                data[i].start = 0
                data[i].class = 'waterfall-grey'

            // change cases
            } else {
                data[i].start = cumulative
                cumulative += val
                val > 0 ? data[i].class = 'waterfall-blue' : data[i].class = 'waterfall-orange' // stylize if positive or negative
            }

            data[i].end = cumulative
        }

        x.domain(data.map(function(d) { return d.Label; }));
        y.domain([d3.min(data, function(d) {return d.start;}) , d3.max(data, function(d) { return d.end; })]);

        chart.append("g")
            .attr("class", "waterfallAxis")
            .attr("transform", "translate(0," + height + ")")
            .call(xAxis())
            .selectAll("text")
                .attr("y", 0)
                .attr("x", 16)
                .attr("transform", "rotate(90)")
                .style("text-anchor", "start");
        
        chart.append("g")
            .attr("class", "waterfallAxis")
            .call(yAxis())
            .selectAll("text")
                .attr("x", -5);

        // add legend
        // @TODO: append multiple items in groups of <g><circle><text></g> without nesting everything..
        // chart.append("g")
        //     .append("g")
        //         .attr("class", "nv-series")
        //         .attr("transform", "translate("+ (width/2.5) +",-16)")
        //         // .append("circle")
        //         //     .attr("class", "nv-legend-symbol")
        //         //     .style("fill: orange")
        //         .append("text")
        //             .text("Increase")
        //             .attr("font-size", "12px")

        // add y-label
        chart.append("text")
            .attr("text-anchor", "middle")
            .attr("transform", "translate("+ (-margin.left/1.3) +","+(height/2)+")rotate(-90)")
            .text("Change in Population")
            .attr('font-size', '12px');

        // add x-label
        let xLabelMargin = isMobile ? margin.bottom/1.8 : margin.bottom/1.5
        chart.append("text")
            .attr("text-anchor", "middle")
            .attr("transform", "translate("+ (width/2) +","+(height + xLabelMargin)+")")
            .text("Change Components")
            .attr('font-size', '12px');

        var bar = chart.selectAll(".bar")
            .data(data)
            .enter().append("g")
            .attr("class", d => "bar " + d.class )
            .attr("transform", d => "translate(" + x(d.Label) + ",0)");
    
        bar.append("rect")
            .attr("y", d => y( Math.max(d.start, d.end) ))
            .attr("height", d => Math.abs( y(d.start) - y(d.end) ))
            .attr("width", x.rangeBand());
        
        // add values on top of or underneath each bar
        bar.append("text")
            .attr("x", d => d.end > 1000 || d.end < -1000 ? 0 : 3)
            // determine if the value should be placed above (trending up) or below (trending down) the bar
            .attr("y", d => y(d.end) + (d.end > d.start ? -5 : 10))
            .attr('font-size', '10px')
            .text(d => (d.class === 'negative' ? '-' : '' + (d.end - d.start || '')));
    });

    // resize listener
    window.onresize = () => {
        // remove jawns
        const churt = d3.select(container)[0][0].children
        const bruh = churt[0]

        // handle edge case where active toggles sometimes throw undefined at churt
        if(bruh){
            bruh.remove()
    
            // re-create jawn
            createWaterfallChart(source, toggleContext)
        }
    }
}

export {createStackedBarChart, createLinePlusBarChart, createLineChart, createLineAndScatterChart, createWaterfallChart};