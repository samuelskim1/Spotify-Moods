import Data from "./data";

class App {
    constructor(ele) {
        this.ele = ele

        // this.ele = ele
        // this.ele.innerHTML = "<h1>This is the App</h1>"
        
        //inside here render plot
        //render 
        const data = new Data();
        const button = document.getElementById("submit-button");
        console.log(button);
        button.addEventListener("click", async function (event) {
            const spotifyInput = document.getElementById("input").value;
            console.log(spotifyInput);
            event.preventDefault();
            await data.fetchData(spotifyInput);
            // console.log(spotifyInput);
        })
    }

}

export default App;