import BarGraph from "./barGraph";
import PlaylistInfoHolder from "./playlistInfoHolder";
import Track from "./track"

const CryptoJS = require("crypto-js");



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


class Data {
    constructor () {
        
    }
    //should fetchAccessToken only when we first open the page/refresh the page/every hour

    async fetchAccessToken() {
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

        try {
            const response = await fetch("https://accounts.spotify.com/api/token", requestOptions);
            console.log('fetch made')
            const token = await response.json();
            console.log('token made into a JS object')
            console.log(token.access_token);
            return token.access_token;
        } catch (error) {
            console.log(error);
        };
    }

    async fetchData(link) {
        //**NOTE THAT FETCHACCESSTOKEN IS A INSTANCE METHOD OF DATA.
        //**That's why you must add the this at the beginning of the method or else it will not work */
        const accessToken = await this.fetchAccessToken(); //return value of access_token
        console.log(link);

        const apiRequestOptions = {
            method: 'GET',
            headers: {
                "Authorization" : `Bearer ${accessToken}`,
                "Content-Type" : "application/json"
            },
            redirect: 'follow'
        };

        if (link.includes("playlist")) {
            console.log("this is a playlist link");


            const playlistUrlParts = link.split("playlist/")
            const playlistUri = playlistUrlParts[1];
            const playlistId = playlistUri.split("?")[0];
            
            fetch(`https://api.spotify.com/v1/playlists/${playlistId}`, apiRequestOptions)
                .then(response => response.json())
                .then(data => new PlaylistInfoHolder(data, apiRequestOptions)) //pass down playlist info into this class


        } else if (link.includes("track")) {
            console.log("this is a track link");

            const trackUrlParts = link.split("track/")
            const trackUri = trackUrlParts[1];
            const trackId = trackUri.split("?")[0];

           
            fetch(`https://api.spotify.com/v1/tracks/${trackId}`, apiRequestOptions)
                .then(response => response.json())
                .then(trackInfo => {
                    fetch(`https://api.spotify.com/v1/audio-features/${trackId}`, apiRequestOptions)
                    .then(response => response.json())
                    .then(audioFeatures => {
        
                        const track = new Track(trackInfo, audioFeatures);
                        console.log("new track has been created")
                        const barGraph = new BarGraph(track.filteredAudioFeatures(), track.filteredTrackInfo());
                        console.log("new barGraph has been created")
                        barGraph.renderGraph();
                        ("barGraph has been rendered")
                    })
                }) //No need to create a InfoHolder class.
                    //Can just fetch again and then at the end you can pass the trackInfo and audioFeatures into the Track instance
        }
    }


}




export default Data;