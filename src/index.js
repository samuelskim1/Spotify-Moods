import App from "./scripts/app.js";
import RadarChart from "./scripts/radarChart"
/* const name require("string of name of library installed") when you're referencing from a node modular/external library (node_modules folder);
Otherwise, if it's a relative file/other script files locally, then use import " " from ""
*/

//could happen inside of a seperate class called spiderChart
    //have function inside called render chart which is where we define all of these variables
    //invoke that render method inside that constructor of spiderChart






document.addEventListener("DOMContentLoaded", () => {
    const myApp = document.getElementById("App");
    new App(myApp);

    const data = [
        [//"Japanese Denim - Daniel Caesar"
            { axis: "Valence", value: 0.345 },
            { axis: "Danceability", value: 0.707 },
            { axis: "Energy", value: 0.238 },
            { axis: "Instrumentalness", value: 0.00000242 },
            { axis: "Acousticness", value: 0.0905 },
            { axis: "Liveness", value: 0.842 },
            { axis: "Speechiness", value: 0.0379 }
        ], [//"So Strange - Polyphia (feat. Cuco)"
            { axis: "Valence", value: 0.484 },
            { axis: "Danceability", value: 0.553 },
            { axis: "Energy", value: 0.885 },
            { axis: "Instrumentalness", value: 0.00072 },
            { axis: "Acousticness", value: 0.000667 },
            { axis: "Liveness", value: 0.209 },
            { axis: "Speechiness", value: 0.0385 }
        ], [//"Get Away - Mac Ayres"
            { axis: "Valence", value: 0.322 },
            { axis: "Danceability", value: 0.676 },
            { axis: "Energy", value: 0.672 },
            { axis: "Instrumentalness", value: 0.0000367 },
            { axis: "Acousticness", value: 0.287 },
            { axis: "Liveness", value: 0.103 },
            { axis: "Speechiness", value: 0.07 }
        ]
    ];

    const margin = { top: 100, right: 100, bottom: 100, left: 100 };
    const width = Math.min(700, window.innerWidth - 10) - margin.left - margin.right;
    const height = Math.min(width, window.innerHeight - margin.top - margin.bottom - 20);

    const color = d3.scaleOrdinal(d3.schemeCategory10)
        .range(["#EDC951", "#CC333F", "#00A0B0"]);

    const radarChartOptions = {
        w: width,
        h: height,
        margin: margin,
        maxValue: 0.5,
        levels: 5,
        roundStrokes: true,
        color: color
    };

    RadarChart(".radarChart", data, radarChartOptions);
})


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



