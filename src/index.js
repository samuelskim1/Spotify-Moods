import { transform } from "@babel/core";
import { svg } from "d3";
import { async } from "regenerator-runtime";
import bestPart from "./scripts/songs/best_part.json";
import blue from "./scripts/songs/blue_kamal.json";
import crazy from "./scripts/songs/crazy_ofa.json";
import easily from "./scripts/songs/easily_bruno_major.json";
import getAway from "./scripts/songs/get_away_mac_aryes.json";
import iWonder from "./scripts/songs/i_wonder_kanye_west.json";
import japaneseDenim from "./scripts/songs/japanese_denim.json";
import soStrange from "./scripts/songs/so_strange_polyphia.json";
import theOne from "./scripts/songs/the_one_sam_kim.json";
import westside from "./scripts/songs/westside.json";

/* const name require("string of name of library installed") when you're referencing from a node modular/external library (node_modules folder);
Otherwise, if it's a relative file/other script files locally, then use import " " from ""
*/


//set dimensions and margins of the graph
const margin = { top: 30, right: 30, bottom: 30, left: 30 }
const width = 450 - margin.left - margin.right;
const height = 450 - margin.top - margin.bottom;

const svg = d3.select("svg"); //selecting the element with the HTML tag "svg"
svg.attr("id","myGraph"); //giving svg the attribute of id = "id arg"
svg.attr("width", width + margin.left + margin.right)
svg.attr("height", height + margin.top + margin.bottom)

const plot = svg.append("g");
plot.attr("id", "plot");
plot.attr("transform", `translate(${margin.left}, ${margin.top})`);

//labels of row and columns
const audioFeatures = [
    "Valence", 
    "Danceability", 
    "Energy", 
    "Instrumentalness", 
    "Acousticness", 
    "Liveness"
];
const songs = [
    "Best Part (feat. H.E.R.)",
    "blue", 
    "CRAZY - Hidden Track No.V 11월 선정곡",
    "Easily",
    "Get Away",
    "I Wonder",
    "Japanese Denim",
    "So Strange (feat. Cuco)",
    "The One",
    "WESTSIDE"
];

//Build x scales and axis:
const x = d3.scaleBand()
    .range([0, width])
    .domain(audioFeatures)
    .padding(0.01);

svg.append("g")
    .attr("transform", `translate(0, ${height})`)
    .call(d3.axisBottom(x))

//Build y scales and axis:
const y = d3.scaleBand()
    .range([ height, 0])
    .domain(songs)
    .padding(0.01);

svg.append("g")
    .call(d3.axisLeft(y));

//Build color scale
const myColor = d3.scaleLinear()
    .range(["white", "#69b3a2"])
    .domain([1,100])

const data = []


document.addEventListener("DOMContentLoaded", () => {
    svg.selectAll()
        



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

const CryptoJS = require("crypto-js");

let trackData = null;


let clientId = "c6ae676c7dbe41cc918d0af0bb9db221";
let clientSecret = "73757d0802ae4bbead3c43e5805e3a10";
let stringToEncode = `${clientId}:${clientSecret}`;

let rawStr = CryptoJS.enc.Utf8.parse(stringToEncode);
let base64 = CryptoJS.enc.Base64.stringify(rawStr);
let encodedIdAndKey = base64;


let urlencoded = new URLSearchParams();
urlencoded.append("grant_type", "client_credentials");

let myHeaders = new Headers();
myHeaders.append("Authorization", `Basic ${encodedIdAndKey}`);

const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: urlencoded,
        redirect: 'follow'
    };

async function fetchValue () {
    try {
        const response = await fetch("https://accounts.spotify.com/api/token", requestOptions);
        console.log('fetch made')
        const token = await response.json();
        console.log('token made into a JS object')
        console.log(token.access_token);
        return token.access_token;
    } catch (error) {
        console.log(error);
    }
}

fetchValue();

async function fetchData() {
    const accessToken = await fetchValue(); //return value of access_token
    requestOptions.method = 'GET'; //changing method to get
    myHeaders.set("Authorization", `Bearer ${accessToken}`);
    myHeaders.append("Content-Type", "application/json");
    delete requestOptions.body;
    console.log(requestOptions);
    
    fetch("https://api.spotify.com/v1/audio-features/6MYzjR2rH0hfz91FsaR1ox", requestOptions)
    //song = Best Part - Daniel Caesar 
        .then(response => response.json())
        .then(data => console.log(data));
};

fetchData();




//cors policy error
//I could use another server to make a request for me. Talk to stephen
//Get data from postman and put it into a file and work from there

