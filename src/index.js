import App from "./scripts/app.js";



//could happen inside of a seperate class called spiderChart
    //have function inside called render chart which is where we define all of these variables
    //invoke that render method inside that constructor of spiderChart

document.addEventListener("DOMContentLoaded", () => {
    const myApp = document.getElementById("App");
    const newApp = new App(myApp);

    const songs =[
            // Name: "Japanese Denim - Daniel Caesar",
            
            ["Valence", 0.345],
            ["Danceability", 0.707],
            ["Energy", 0.238],
            ["Instrumentalness", 0.00000242],
            ["Acousticness", 0.0905],
            ["Liveness", 0.842],
            ["Speechiness", 0.0379]
        // {
        //     // Name: "So Strange - Polyphia (feat. Cuco)",
        //     Valence: 0.484 ,
        //     Danceability: 0.553 ,
        //     Energy: 0.885 ,
        //     Instrumentalness: 0.00072 ,
        //     Acousticness: 0.000667 ,
        //     Liveness: 0.209,
        //     Speechiness: 0.0385
        // },
        // {   
        //     // Name: "Get Away - Mac Ayres", 
        //     Valence: 0.322,
        //     Danceability: 0.676,
        //     Energy: 0.672,
        //     Instrumentalness: 0.0000367,
        //     Acousticness: 0.287,
        //     Liveness: 0.103,
        //     Speechiness: 0.07
        // }
    ]

    //creating margins and dimensions
    const margin = {top: 60, right: 60, bottom: 100, left: 80},
            width = 600 - margin.left - margin.right,
            height = 550 - margin.top - margin.bottom;
    

    //creating svg and the graph elements
    const svg = d3.select('#dviz')
        .classed('container', true)//adding a class, boolean determines whether the class should be added/not
        .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
        .append("g")
            .attr("transform",
                  `translate(${margin.left}, ${margin.top})`
            );




    //X axis
    const xScale = d3.scaleBand()
                        .domain(songs.map(dataPoint => dataPoint[1]))
                        .rangeRound([0, width])
                        .padding(0.5);
    svg.append("g")
        .attr("transform", `translate(0, ${height})`)
        .call(d3.axisBottom(xScale))
        .selectAll("text")
            .attr("transform", "translate(-10, 0)rotate(-45)")
            .style("text-anchor", "end")

    const xTitle = svg.append("text")
        .classed("title", true)
        .attr('id', "xTitle")
        .attr("font-family", "Roboto Mono", "monospace")
        .attr("font-size", 20)
        .attr("font-weight", 500)
        .attr("text-anchor", "middle")
        .attr("x", width/2)
        .attr("y", height + 80)
        .text("Audio Features")

    // svg.call(xTitle);

    //Y axis
    const yScale = d3.scaleLinear()
                        .domain([0, 1])
                        .range([height, 0]);

    svg.append("g")
        .call(d3.axisLeft(yScale));

    const yTitle = svg.append("text")
        .classed("title", true)
        .attr('id', "yTitle")
        .attr("font-family", "Roboto Mono", "monospace")
        .attr("font-size", 20)
        .attr("font-weight", 500)
        .attr("text-anchor", "middle")
        .attr("transform", "rotate(-90)")
        .attr("y", -20)
        .attr("dy", "-3em")
        .attr("x", -height/2)

        .text("Value/Confidence Level");

    // svg.call(yTitle);


    const bars = svg
        .selectAll('.bar')
        .data(songs)
        .enter()
        .append('rect') //valid svg element that we can use inside of an SVG NODE
            .classed('bar', true)
            .attr('width', xScale.bandwidth()) //sets the width of the element 
            .attr('height', (data) => height - yScale(data[1]))
            .attr('x', data => xScale(data[1]))
            .attr('y', data => yScale(data[1]))
        .attr("fill", "#26b94d")
        .style("stroke", 'black')
        .attr("stroke-linecap", "round")
            
         //can pass in a variable/function that has access to the div
})

    // console.log(newApp.tracks);
    // const data = [
    //     [//"Japanese Denim - Daniel Caesar"
    //         { axis: "Valence", value: 0.345 },
    //         { axis: "Danceability", value: 0.707 },
    //         { axis: "Energy", value: 0.238 },
    //         { axis: "Instrumentalness", value: 0.00000242 },
    //         { axis: "Acousticness", value: 0.0905 },
    //         { axis: "Liveness", value: 0.842 }
    //         { axis: "Speechiness", value: 0.0379 }
    //     ], [//"So Strange - Polyphia (feat. Cuco)"
    //         { axis: "Valence", value: 0.484 },
    //         { axis: "Danceability", value: 0.553 },
    //         { axis: "Energy", value: 0.885 },
    //         { axis: "Instrumentalness", value: 0.00072 },
    //         { axis: "Acousticness", value: 0.000667 },
    //         { axis: "Liveness", value: 0.209 }
    //         { axis: "Speechiness", value: 0.0385 }
    //     ], [//"Get Away - Mac Ayres"
    //         { axis: "Valence", value: 0.322 },
    //         { axis: "Danceability", value: 0.676 },
    //         { axis: "Energy", value: 0.672 },
    //         { axis: "Instrumentalness", value: 0.0000367 },
    //         { axis: "Acousticness", value: 0.287 },
    //         { axis: "Liveness", value: 0.103 }
    //         { axis: "Speechiness", value: 0.07 }
    //     ]
    // ];



/* CODE OF POSTMAN OAuth Tutorial = https://documenter.getpostman.com/view/1559645/Szzhcxzz#37132a43-9840-4ea1-ba49-0194803b53eb*/
/* I am utilizing the Manual Header Method 
*/

/* I have creating the encodedIDandKey that will be used in the Auth Header
    -I installed crypto-js to obtain the JS library
    -CryptoJs involves practice of encrypting and decrypting information to ensure it is kept private/secure from unintended parties
    -I must require from "crypto-js" in my node_modules folder
    -I am base 64 encoding client ID and client secret key;

*/
/* 
URLSearchParams is a interface of URL API 
- Defines utility methods to work with the query string of a URL.
- Constructor returns a URLSearchParams object instance
- EX can append/delete key/value pairs
- Can also iterate through this by using for loops
*/



