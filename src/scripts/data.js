import BarGraph from "./barGraph";
import Playlist from "./playlist";
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
            const token = await response.json();
            return token.access_token;
        } catch (error) {
            console.log(error);
        };
    }

    async fetchData(link) {

        const accessToken = await this.fetchAccessToken(); 

        const apiRequestOptions = {
            method: 'GET',
            headers: {
                "Authorization" : `Bearer ${accessToken}`,
                "Content-Type" : "application/json"
            },
            redirect: 'follow'
        };

        if (link.includes("playlist")) {
            const playlistUrlParts = link.split("playlist/")
            const playlistUri = playlistUrlParts[1];
            const playlistId = playlistUri.split("?")[0];
            
            fetch(`https://api.spotify.com/v1/playlists/${playlistId}`, apiRequestOptions)
                .then(response => response.json())
                .then(data => new Playlist(data, apiRequestOptions)) 

        } else if (link.includes("track")) {
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
                        const barGraph = new BarGraph(track.filteredAudioFeatures(), track.filteredTrackInfo());
                        barGraph.renderGraph();
                    })
                }) 
        }
    }


}




export default Data;