class BarGraph {

    constructor(audioFeatures, trackInfo) {
        this.audioFeatures = audioFeatures;
        this.trackInfo = trackInfo
    }

    renderGraph() {
        // const deleteSvg = d3.select('#dviz').selectAll("svg").remove();
        d3.selectAll('.svgs').remove();
        console.log("hello");
        
        //creating margins and dimensions
        const margin = { top: 60, right: 60, bottom: 100, left: 80 },
            width = 600 - margin.left - margin.right,
            height = 550 - margin.top - margin.bottom;

        
        //creating svg and the graph elements
        const svg = d3.select('#dviz')
            .classed('containerzzzz', true)//adding a class, boolean determines whether the class should be added/not
            .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform",
                `translate(${margin.left}, ${margin.top})`
            );

        // debugger;
        (this.audioFeatures).sort(function(b,a) {
            return a[1] - b[1];
        });

        //X axis
        const xScale = d3.scaleBand()
            .domain(this.audioFeatures.map(dataPoint => dataPoint[0]))
            .rangeRound([0, width])
            .padding(0.5)

        d3.select("svg").classed("svgs",true);


        svg.append("g")
            .attr("transform", `translate(0, ${height})`)
            .attr("class", "axis")
            .attr("id", "xAxis")
            .style("font-family", "Roboto Mono", "monospace")
            .style("font-size", 14)
            .style("font-weight", 700)
            .call(d3.axisBottom(xScale))
            .selectAll("text")
            .attr("transform", "translate(-10, 0)rotate(-45)")
            .style("text-anchor", "end")

        const xTitle = svg.append("text")
            .classed("title", true)
            .attr('id', "xTitle")
            .style("font-family", "Roboto Mono", "monospace")
            .style("font-size", 20)
            .style("font-weight", 700)
            .style("text-anchor", "middle")
            .attr("x", width / 2)
            .attr("y", height + 100)
            .text("Audio Features")

        // svg.call(xTitle);

        //Y axis
        const yScale = d3.scaleLinear()
            .domain([0, 1])
            .range([height, 0]);

        svg.append("g")
            .attr("class", "axis")
            .attr("id", "yAxis")
            .style("font-family", "Roboto Mono", "monospace")
            .style("font-size", 14)
            .style("font-weight", 500)
            .call(d3.axisLeft(yScale));

        const yTitle = svg.append("text")
            .classed("title", true)
            .attr('id', "yTitle")
            .style("font-family", "Roboto Mono", "monospace")
            .style("font-size", 20)
            .style("font-weight", 700)
            .style("text-anchor", "middle")
            .attr("transform", "rotate(-90)")
            .attr("y", -50)
            // .attr("dy", "-3em")
            .attr("x", -height/2)
            .text("Value/Confidence Level");

        // svg.call(yTitle);

        //IF the title is too long, it'll go outside of the borders of the svg tag and not display
        const graphTitle = svg.append("text")
            .classed("title", true)
            .attr('id', 'graphTitle')
            .attr("text-anchor", "middle")
            .attr("overflow", "scroll")
            .attr("x", width/2)
            .attr("y", 0 - (margin.top /2))
            .attr("width", "1em")
            .attr("textLength", "80%")
            .style("text-wrap", "550px")
            .style("font-family", "Roboto Mono", "monospace")
            .style('font-size', "20px")
            .style('font-weight', "500")
            // .style("text-decoration", "underline")
            .text(`${this.trackInfo}`)
        
        // const tooltip = d3.select("#dviz")
        //     .append("div")
        //     .style("opacity", 0)
        //     .attr("class", "tooltip")
        //     .style("background-color", "white")
        //     .style("border", "solid")
        //     .style("border-width", "1px")
        //     .style("border-radius", "5px")
        //     .style("padding", "10px")    

        // const mouseover = function() {
        //     tooltip.style("opacity", 1)
        // }

        // const mousemove = function(event, d) {
        //     tooltip
        //         .html(`Exact Value: ${d[1]}`)
        //         .style("left" , `${d3.(this)})
        // }


        const bars = svg
            .selectAll('.bar')
            .data(this.audioFeatures)
            .enter()
            .append('rect') //valid svg element that we can use inside of an SVG NODE
            .classed('bar', true)
            .attr('width', xScale.bandwidth()) //sets the width of the element 
            .attr('height', (data) => height - yScale(0))
            .attr('x', data => xScale(data[0]))
            .attr('y', data => yScale(0))
            .attr("fill", "#C1B985")
            .style("stroke", 'black')
            .attr("stroke-linecap", "round")

        svg.selectAll("rect")
            .transition()
            .duration(1000)
            .attr('y', data => yScale(data[1]))
            .attr('height', (data) => height - yScale(data[1]))
            .delay(function(d,i) {
                console.log(i);
                console.log("hello");
                return(i * 100)
            })

        //can pass in a variable/function that has access to the div
    }



}




export default BarGraph;