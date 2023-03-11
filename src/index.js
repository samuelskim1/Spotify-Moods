import { async } from "regenerator-runtime";
import Example from "./scripts/example";

/* const name require("string of name of library installed") when you're referencing from a node modular/external library (node_modules folder);
Otherwise, if it's a relative file/other script files locally, then use import " " from ""
*/
// let holder = null;

// async function accessToken() {
    // try 
    //     const requestOptions = {
    //         method: 'POST',
    //         headers: myHeaders,
    //         body: urlencoded,
    //         redirect: 'follow'
    //     };

    //     let response = await fetch("https://accounts.spotify.com/api/token", requestOptions);
    //     let token = await response.json(); // got token

    //     holder = token;
    //     return holder;
    // catch error;
// }

// async function useToken() {
//     if (!holder) {
//         await accessToken();
//     }

//     const token = {...holder};
//     return token;
// }


// async function getData(token) {

// }


document.addEventListener("DOMContentLoaded", () => {
    // console.log("Hello World")
    const main = document.getElementById("main");
    new Example(main);
    // const accessToken = document.getElementById("access-token");
    // new AccessToken(accessToken);
    // useToken().then(holder => console.log(holder.access_token));
    // console.log(holder)
});
// const createAccessToken = document.querySelector('#access-token')



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

let clientId = "c6ae676c7dbe41cc918d0af0bb9db221";
let clientSecret = "73757d0802ae4bbead3c43e5805e3a10";
let stringToEncode = `${clientId}:${clientSecret}`;

debugger;
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
    const response = await fetch("https://accounts.spotify.com/api/token", requestOptions);
    const data = await response.json();
    return data.access_token;
}




// async function fetchData() {
//     const accessToken = await fetchValue();
//     const trackData = 
//     fetchValue().then(access_token => {
//         requestOptions.method = 'GET'; //changing method to get
//         myHeaders.set("Authorization", `Bearer ${access_token}`)
//         myHeaders.append("Content-Type", "application/json") 
//         console.log(requestOptions);
        
//         fetch("https://api.spotify.com/v1/audio-features/7KrtV0Rdwn7lAtXs9DD3O0", requestOptions)
//         .then(data => console.log(data))
//         //inside here, make that fetch request to the API instead of console.log!
//     });
// }
//cors policy error
//I could use another server to make a request for me. Talk to stephen
//Get data from postman and put it into a file and work from there