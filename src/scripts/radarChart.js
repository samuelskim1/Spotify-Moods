import { formatPrefix } from "d3";

import { FormatSpecifier } from "d3";

function radarChart(id, data, options) {
    const circle = {
        w: 600, 
        h: 600,
        margin: {top: 20, right: 20, bottom: 20, left: 20}, //SVG margins
        levels: 3,
        maxValue: 0,
        labelFactor: 1.25,
        wrapWidth: 60,
        opacityArea: 0.35,
        dotRadius: 4,
        opacityCircles: 0.1,
        strokeWidth: 2,
        roundStrokes: false,
        color: d3.scaleOrdinal(d3.schemeCategory10)
    };

    if('undefined'!== typeof options){
        for(var key in options){
            if('undefined' !== typeof options[key]){
                circle[key] = options[key];
            }
        }
    }

    const maxValue = Math.max(circle.maxValue, d3.max(data, function(i) { 
        return d3.max(i.map(function (o) { 
            return o.value; 
        })) 
    }));

    const allAxis = (data[0].map(function (i, j) { return i.axis}));
    const total = allAxis.length;
    const radius = Math.min(circle.w /2, circle.h /2);
    const Format = d3.format('%');
    const angleSlice = Math.PI * 2 / total;

    

    const rScale = d3.scaleLinear()
        .range([0, radius])
        .domain([0, maxValue]);

     //Remove whatever chart with the same id/class was present before
    d3.select(id).select("svg").remove();

    const svg = d3.select(id).append("svg")
                    .attr("width", circle.w + circle.margin.left + circle.margin.right)
                    .attr("height", circle.h + circle.margin.top + circle.margin.bottom)
                    .attr("class", "radar" + id);

    const g = svg.append("g")
                    .attr(
                        "transform", `translate(${(circle.w/2) + circle.margin.left},${(circle.h/2) + circle.margin.top})`
                        );


    const filter = g.append('defs').append('filter').attr('id', 'glow'),
        feGaussianBlur = filter.append('feGaussianBlur').attr('stdDeviation', '2.5').attr('result', 'coloredBlur'),
        feMerge = filter.append('feMerge'),
        feMergeNode_1 = feMerge.append('feMergeNode').attr('in', 'coloredBlur'),
        feMergeNode_2 = feMerge.append('feMergeNode').attr('in', 'SourceGraphic');


    let axisGrid = g.append("g").attr("class", "axisWrapper");

    axisGrid.selectAll(".levels")
        .data(d3.range(1, (circle.levels + 1)).reverse())
        .enter()
            .append("circle")
            .attr("class", "gridCircle")
            .attr("r", function(d, i) { return radius/(circle.levels*d);})
            .style("fill", "#CDCDCD")
            .style("stroke", "#CDCDCD")
            .style("fill-opacity", circle.opacityCircles)
            .style("filter", "url(#glow)");


    axisGrid.selectAll(".axisLabel")
        .data(d3.range(1,(circle.levels + 1)).reverse())
        .enter().append("text")
        .attr("class", "axisLabel")
        .attr("x", 4)
        .attr("y", function(d) { return -d * radius/circle.levels;})
        .attr("dy", "0.4em")
        .style("font-size", "10px")
        .attr("fill", "#737373")
        .text(function(d, i) { return Format(maxValue * d/circle.levels);});

    let axis = axisGrid.selectAll(".axis")
                    .data(allAxis)
                    .enter()
                    .append("g")
                    .attr("class", "axis");

    axis.append("line")
            .attr("x1", 0)
            .attr("y1", 0)
            .attr("x2", function (d, i) { return rScale(maxValue * 1.1) * Math.cos(angleSlice * i - Math.PI/2);})
            .attr("y2", function (d, i) { return rScale(maxValue * 1.1) * Math.sin(angleSlice * i - Math.PI/2);})
            .attr("class", "line")
            .style("stroke", "white")
            .style("stroke-width", "2px");

    axis.append("text")
        .attr("class", "legend")
        .style("font-size", "11px")
        .attr("text-anchor", "middle")
        .attr("dy", "0.35em")
        .attr("x", function (d, i) {return rScale(maxValue * circle.labelFactor) * Math.cos(angleSlice * i - Math.PI / 2); })
        .attr("y", function (d, i) {return rScale(maxValue * circle.labelFactor) * Math.sin(angleSlice * i - Math.PI / 2); })
        .text(function(d){ return d })
        .call(wrap, circle.wrapWidth);



    let radarLine = d3.lineRadial().curve(d3.curveBasisClosed)
                            .radius(function (d) {return rScale(d.value);})
                            .angle(function (d, i) {return  i * angleSlice;});

    if(circle.roundStrokes) {
        radarLine.curve(d3.curveCardinalClosed);
    }

    let blobWrapper = g.selectAll(".radarWrapper")
        .data(data)
        .enter().append("g")
        .attr("class", "radarWrapper");

    blobWrapper
        .append("path")
        .attr("class", "radarArea")
        .attr("d", function(d, i) {return radarLine(d);})
        .style("fill", function (d, i) {return circle.color(i);})
        .style('fill-opacity', circle.opacityArea)
        .on('mouseover', () => {
            d3.selectAll(".radarArea")
                .transition().duration(200)
                .style("fill-opacity", 0.1);

            d3.select(this)
                .transition().duration(200)
                .style('fill-opacity', 0.7);
        })
        .on('mouseout', () => {
            d3.selectAll('.radarArea')
                .transition().duration(200)
                .style('fill-opacity', circle.opacityArea);
        })


    blobWrapper.append('path')
        .attr('class', 'radarStroke')
        .attr('d', function(d, i) {return radarLine(d); })
        .style('stroke-width', circle.strokeWidth + 'px')
        .style('stroke', function(d, i) {return circle.color(i); })
        .style('fill', 'none')
        .style('filter', 'url(#glow)');


    blobWrapper.selectAll('.radarCircle')
        .data(function (d, i) {return d;})
        .enter().append('circle')
        .attr('class', 'radarCircle')
        .attr('r', circle.dotRadius)
        .attr('cx', function (d, i) { return rScale(d.value) * Math.cos(angleSlice * i - Math.PI/2); })
        .attr('cy', function (d, i) { return rScale(d.value) * Math.sin(angleSlice * i - Math.PI/2); })
        .style('fill', function (d, i, j) {return circle.color(j); })
        .style('fill-opacity', 0.8);

    
    let blobCircleWrapper = g.selectAll(".radarCircleWrapper")
        .data(data)
        .enter().append("g")
        .attr("class", "radarCircleWrapper");

    blobCircleWrapper.selectAll(".radarInvisibleCircle")
        .data(function (d, i) { return d; })
        .enter().append("circle")
        .attr("class", "radarInvisibleCircle")
        .attr("r", cfg.dotRadius * 1.5)
        .attr("cx", function (d, i) { return rScale(d.value) * Math.cos(angleSlice * i - Math.PI / 2); })
        .attr("cy", function (d, i) { return rScale(d.value) * Math.sin(angleSlice * i - Math.PI / 2); })
        .style("fill", "none")
        .style("pointer-events", "all")
        .on("mouseover", function (d, i) {
            newX = parseFloat(d3.select(this).attr('cx')) - 10;
            newY = parseFloat(d3.select(this).attr('cy')) - 10;

            tooltip
                .attr('x', newX)
                .attr('y', newY)
                .text(Format(i.value))
                .transition().duration(200)
                .style('opacity', 1);
        })
        .on("mouseout", function () {
            tooltip.transition().duration(200)
                .style("opacity", 0);
        });

    const tooltip = g.append("text")
        .attr("class", "tooltip")
        .style("opacity", 0);



        
    function wrap(text, width) {
        text.each(() => {
            const text = d3.select(this);
            let words = text.text().split(/\s/).reverse();
            let word;
            let line = [];
            let lineNumber = 0
            let lineHeight = 1.4
            let y = text.attr('y');
            let x = text.attr('x');
            let dy = parseFloat(text.attr('dy'));
            let tspan = text.text(null)
                            .append('tspan')
                            .attr('x', x)
                            .attr('y', y)
                            .attr('dy', dy + 'em');
            
            while (word = words.pop()) {
                line.push(word);
                tspan.text(line.join(" "));
                if (tspan.node().getComputedTextLength() > width) {
                    line.pop();
                    tspan.text(line.join(" "));
                    line = [word];
                    tspan = text.append('tspan')
                    .attr('x', x)
                    .attr('y', y)
                    .attr("dy", ++lineNumber * lineHeight + dy + "em")
                    .text(word);
                }
            }
        });
    }
}





export default RadarChart