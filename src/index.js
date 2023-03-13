import App from "./scripts/app.js";
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

//could happen inside of a seperate class called spiderChart
    //have function inside called render chart which is where we define all of these variables
    //invoke that render method inside that constructor of spiderChart






document.addEventListener("DOMContentLoaded", () => {
    const myApp = document.getElementById("App");
    new App(myApp);

    //just create a new app
    //inside that app class, we can have a function fetch data
        //in the constructor of that function 
    //put fetch inside here
    //.then(create instnace of the app)
    //inside of the app we'll filter data and create an instance of a spider chart passing in that filtered data
    //could also create an individual data class to handle all of that data manipulation
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



