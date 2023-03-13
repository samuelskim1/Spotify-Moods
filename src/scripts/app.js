import Data from "./data";

class App {
    constructor(ele) {
        this.ele = ele

        // this.ele = ele
        // this.ele.innerHTML = "<h1>This is the App</h1>"
        
        //inside here render plot
        //render 
        const data = new Data();
        const button = document.getElementById("submit-button"); //grabbing the submit button

        //adding a click listener on button
        button.addEventListener("click", async function (event) {
            //grabbing the input for the 
            const spotifyInput = document.getElementById("input").value;
            console.log(spotifyInput);
            //prevent the default behavior of the button/form from going through;
            event.preventDefault();
            //invoke the fetchData method on the link that we passed into the input field'
            await data.fetchData(spotifyInput); 
        })
    }

}

export default App;